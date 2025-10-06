import React from 'react';
import { Button, Typography } from '@mui/material';

interface ActionCardButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

export const ActionCardButton = ({ icon, label, onClick }: ActionCardButtonProps) => {
  return (
    <Button
      variant="outlined"
      sx={{
        backgroundColor: 'white',
        color: 'greyNeutral.30',
        flexDirection: 'column',
        borderRadius: '11px',
        borderColor: 'greyNeutral.60',
        py: 2,
        width: '196px',
        gap: 1,
      }}
      onClick={onClick}
    >
      {icon}
      <Typography>{label}</Typography>
    </Button>
  );
};
