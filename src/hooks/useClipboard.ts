import { useCallback } from 'react';
import { notification } from '@/lib/utils';

interface UseClipboardOptions {
  onPaste?: (text: string) => void;
}

export const useClipboard = ({ onPaste }: UseClipboardOptions = {}) => {
  const pasteFromClipboard = useCallback(async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();

      if (clipboardText) {
        onPaste?.(clipboardText);
      } else {
        notification.info('Clipboard is empty');
      }
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
      notification.error('Could not access clipboard');
    }
  }, [onPaste]);

  return { pasteFromClipboard };
};
