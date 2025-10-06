import React from 'react';
import { Box } from '@mui/material';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

import { ActionCardButton } from '@/components/ui';

type EmptyActionsBoxProps = {
  onPaste: () => void;
  onSample: () => void;
};

export const EmptyActionsBox = ({ onPaste, onSample }: EmptyActionsBoxProps) => {
  return (
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
        onClick={onPaste}
      />
      <ActionCardButton
        icon={<InsertDriveFileOutlinedIcon fontSize="small" />}
        label="Sample text"
        onClick={onSample}
      />
    </Box>
  );
};
