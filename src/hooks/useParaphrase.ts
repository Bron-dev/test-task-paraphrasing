import { useMutation } from '@tanstack/react-query';

import { PROVIDERS, Provider } from '@/lib/constants';
import { notification } from '@/lib/utils';

export async function fetchFromProvider(
  provider: Provider,
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

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);

  try {
    const response = await fetchFromProvider(prioritized, text, controller.signal);
    clearTimeout(timeout);
    return response;
  } catch {
    clearTimeout(timeout);
    notification.info(`${prioritized.name} timed out — switching to another AI...`);
  }

  const fallbackPromises = others.map((p) => fetchFromProvider(p, text));
  return Promise.race(fallbackPromises);
}

export function useParaphrase() {
  return useMutation({ mutationFn: paraphraseWithFallback });
}
