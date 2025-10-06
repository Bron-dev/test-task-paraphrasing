import React from 'react';
import { Box, InputBase } from '@mui/material';

interface TextInputAreaProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  isBottomBarVisible: boolean;
}

export function TextInputArea({
  value,
  onChange,
  disabled,
  isBottomBarVisible,
}: TextInputAreaProps) {
  const BottomBarHeight = '66px';

  return (
    <Box
      className="hideScrollbar"
      sx={{
        flexGrow: 1,
        overflowY: 'auto',
        borderRadius: '28px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'greyNeutral.60',
        backgroundColor: value ? 'white' : 'greyNeutral.80',
        px: 2,
        pt: 1,
        pb: !isBottomBarVisible ? 1 : BottomBarHeight,
      }}
    >
      <InputBase
        placeholder="Enter text here or upload file to humanize it."
        multiline
        fullWidth
        disabled={disabled}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        sx={{
          width: '100%',
          display: 'block',
          ':disabled': { color: 'greyNeutral.30' },
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
  );
}
