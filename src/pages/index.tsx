import React from 'react';
import { Container, Box, FormHelperText } from '@mui/material';

import { PageHeader } from '@/components/layout';
import { TextInputArea, EmptyActionsBox, BottomBar } from '@/components/paraphraser';
import { useParaphraser } from '@/hooks/useParaphraser';

export default function Home() {
  const {
    inputValue,
    setInputValue,
    handleParaphrase,
    handleClearTextInput,
    handlePasteSampleText,
    pasteFromClipboard,
    error,
    isSuccess,
    isAnswerLoading,
    data,
  } = useParaphraser();

  const isEmptyActionsVisible = !inputValue;
  const isBottomBarVisible = !isSuccess || data !== inputValue;
  const isParaphraseBtnEnabled = Boolean(inputValue && !isAnswerLoading);

  return (
    <Container sx={{ py: 6, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <PageHeader
        title="AI Text Paraphraser by JustDone"
        subtitle="Transform your writing from good to great with our Paraphraser tool."
      />

      <Box
        className="hideScrollbar"
        sx={{
          position: 'relative',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '403px',
        }}
      >
        <TextInputArea
          value={inputValue}
          onChange={setInputValue}
          disabled={isAnswerLoading}
          isBottomBarVisible={isBottomBarVisible}
        />

        <BottomBar
          onClear={handleClearTextInput}
          onParaphrase={handleParaphrase}
          isBottomBarVisible={isBottomBarVisible}
          isParaphraseBtnEnabled={isParaphraseBtnEnabled}
        />

        {isEmptyActionsVisible && (
          <EmptyActionsBox onPaste={pasteFromClipboard} onSample={handlePasteSampleText} />
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
