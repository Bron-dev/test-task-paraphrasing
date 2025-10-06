import { useMutation } from '@tanstack/react-query';
import { PROVIDERS, DELAY_BEFORE_FALLBACK_STARTING } from '@/lib/constants';
import { notification } from '@/lib/utils';
import { APIProvider } from '@/lib/types';

async function fetchFromProvider(
  provider: APIProvider,
  text: string,
  signal?: AbortSignal
): Promise<string> {
  const { url, headers, body } = provider.buildRequest(text);
  const res = await fetch(url, { method: 'POST', headers, body, signal });

  if (!res.ok) throw new Error(`${provider.name} failed`);
  const data = await res.json();
  return provider.parseResponse(data);
}

export async function paraphraseWithFallback(text: string): Promise<string> {
  const prioritized = PROVIDERS.find((p) => p.isPrioritized);
  const others = PROVIDERS.filter((p) => !p.isPrioritized);

  if (!prioritized) throw new Error('No prioritized provider defined');

  const mainController = new AbortController();
  const fallbackController = new AbortController();
  let mainCompleted = false;

  const mainPromise = fetchFromProvider(prioritized, text, mainController.signal).then((res) => {
    mainCompleted = true;
    return res;
  });

  const fallbackPromise = new Promise<string>((resolve) => {
    const timeoutId = setTimeout(() => {
      if (mainCompleted) return;
      notification.info('Trying other AI providers...');
      const fallbacks = others.map((p) => fetchFromProvider(p, text, fallbackController.signal));
      Promise.race(fallbacks)
        .then(resolve)
        .catch(() => {});
    }, DELAY_BEFORE_FALLBACK_STARTING);

    mainPromise.finally(() => clearTimeout(timeoutId));
  });

  const winner = await Promise.race([mainPromise, fallbackPromise]);

  mainController.abort();
  fallbackController.abort();

  return winner;
}

export function useRephraseMutation() {
  return useMutation({
    mutationFn: paraphraseWithFallback,
    onSuccess: () => notification.success('Rephrasing completed successfully!'),
  });
}
