import { useCallback } from 'react';
import { notification } from '@/lib/utils';

interface UseClipboardOptions {
  onPaste?: (text: string) => void;
}

/**
 * A simple, utility-style clipboard hook.
 * Provides a paste function that reads text from the user's clipboard
 * and handles notifications + errors internally.
 */

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
