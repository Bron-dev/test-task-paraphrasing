import React, { useState } from 'react';
import { Container, Box, InputBase, FormHelperText } from '@mui/material';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import CloseIcon from '@mui/icons-material/Close';

import { ActionCardButton } from '@/components/ui/ActionCardButton';
import { RoundedIconButton } from '@/components/ui/RoundedIconButton';
import { PageHeader } from '@/components/layout/Header';
import { useClipboard } from '@/hooks/useClipboard';
import { useParaphrase } from '@/hooks/useParaphrase';
import { SAMPLE_TEXT } from '@/lib/constants';

import { hideScrollbar } from '@/styles/utils';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const {
    mutate: paraphraseText,
    data,
    error,
    isPending: isAnswerLoading,
    isSuccess,
  } = useParaphrase();

  const { pasteFromClipboard } = useClipboard({
    onPaste: (clipboardText) => setInputValue(clipboardText),
  });

  const handleParaphrase = () => {
    if (!inputValue.trim()) return;
    paraphraseText(inputValue);
  };

  const handleClearTextInput = () => setInputValue('');
  const handlePasteSampleText = () => setInputValue(SAMPLE_TEXT);

  console.log(data);

  const BottomBtnBoxHeight = '66px';

  return (
    <Container sx={{ py: 6, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <PageHeader
        title="AI Text Paraphraser by JustDone"
        subtitle="Transform your writing from good to great with our Paraphraser tool."
      />

      <Box
        sx={{
          position: 'relative',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '403px',
        }}
      >
        <Box
          sx={{
            ...hideScrollbar,
            flexGrow: 1,
            overflowY: 'auto',
            borderRadius: '28px',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'greyNeutral.60',
            backgroundColor: inputValue ? 'white' : 'greyNeutral.80',
            px: 2,
            pt: 1,
            pb: isSuccess ? 1 : BottomBtnBoxHeight,
          }}
        >
          <InputBase
            placeholder="Enter text here or upload file to humanize it."
            multiline
            fullWidth
            disabled={isAnswerLoading}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            sx={{
              width: '100%',
              display: 'block',
              ':disabled': {
                color: 'greyNeutral.30',
              },
              '&::placeholder': {
                color: 'greyNeutral.30',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '24px',
                opacity: 1,
              },
            }}
          />
        </Box>

        {!isSuccess && (
          <Box
            sx={{
              p: 1,
              display: 'flex',
              gap: 1,
              justifyContent: 'flex-end',
              backgroundColor: 'white',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'greyNeutral.60',
              borderBottomLeftRadius: '28px',
              borderBottomRightRadius: '28px',
              position: 'absolute',
              width: '100%',
              bottom: 0,
            }}
          >
            {inputValue && !isAnswerLoading && (
              <RoundedIconButton
                label="Clear input"
                onClick={handleClearTextInput}
                variantType="contained"
                icon={<CloseIcon />}
              />
            )}
            <RoundedIconButton
              label="Paraphrase"
              onClick={handleParaphrase}
              variantType="outlined"
              disabled={!inputValue || isAnswerLoading}
            />
          </Box>
        )}

        {!inputValue && (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              gap: 1,
            }}
          >
            <ActionCardButton
              icon={<ContentPasteIcon fontSize="small" />}
              label="Paste text"
              onClick={pasteFromClipboard}
            />
            <ActionCardButton
              icon={<InsertDriveFileOutlinedIcon fontSize="small" />}
              label="Sample text"
              onClick={handlePasteSampleText}
            />
          </Box>
        )}
      </Box>

      {error && (
        <FormHelperText sx={{ color: 'error.main', pl: 2, mt: '12px' }}>
          {error.message}
        </FormHelperText>
      )}
    </Container>
  );
}
