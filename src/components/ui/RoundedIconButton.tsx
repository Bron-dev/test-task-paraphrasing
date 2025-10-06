import React from 'react';
import Button from '@mui/material/Button';
import { SxProps, Theme } from '@mui/material/styles';

interface RoundedIconButtonProps {
  onClick: () => void;
  label: string;
  variantType: 'contained' | 'outlined';
  disabled?: boolean;
  icon?: React.ReactNode;
}

export const RoundedIconButton = ({
  onClick,
  label,
  variantType,
  disabled = false,
  icon,
}: RoundedIconButtonProps) => {
  const commonStyles: SxProps<Theme> = {
    borderRadius: '31px',
    height: '48px',
    gap: 1,
  };

  const styles: SxProps<Theme> =
    variantType === 'contained'
      ? {
          ...commonStyles,
          backgroundColor: 'greyNeutral.80',
          color: '#254699',
        }
      : {
          ...commonStyles,
          backgroundColor: 'bluePrimary.40',
          color: 'white',
          ':disabled': {
            backgroundColor: 'greyNeutral.40',
            color: 'white',
          },
        };

  return (
    <Button variant={variantType} sx={styles} onClick={onClick} disabled={disabled}>
      {icon && icon}
      {label}
    </Button>
  );
};
