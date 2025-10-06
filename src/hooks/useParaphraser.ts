import { useEffect, useState } from 'react';
import { SAMPLE_TEXT } from '@/lib/constants';
import { useClipboard } from '@/hooks/useClipboard';
import { useRephraseMutation } from '@/hooks/useRephraseMutation';

export function useParaphraser() {
  const [inputValue, setInputValue] = useState('');
  const { mutate: paraphraseText, data, error, isPending, isSuccess } = useRephraseMutation();

  const { pasteFromClipboard } = useClipboard({
    onPaste: (clipboardText) => setInputValue(clipboardText),
  });

  useEffect(() => {
    if (isSuccess && data) setInputValue(data);
  }, [data, isSuccess]);

  const handleParaphrase = () => {
    if (!inputValue.trim()) return;
    paraphraseText(inputValue);
  };

  const handleClearTextInput = () => setInputValue('');
  const handlePasteSampleText = () => setInputValue(SAMPLE_TEXT);

  return {
    inputValue,
    setInputValue,
    handleParaphrase,
    handleClearTextInput,
    handlePasteSampleText,
    pasteFromClipboard,
    error,
    isSuccess,
    isAnswerLoading: isPending,
    data,
  };
}
