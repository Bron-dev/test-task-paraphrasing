import { Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { RoundedIconButton } from '@/components/ui';

interface BottomBarProps {
  onClear: () => void;
  onParaphrase: () => void;
  isBottomBarVisible: boolean;
  isParaphraseBtnEnabled: boolean;
}

export const BottomBar = ({
  onClear,
  onParaphrase,
  isBottomBarVisible,
  isParaphraseBtnEnabled,
}: BottomBarProps) => {
  return (
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
        opacity: isBottomBarVisible ? 1 : 0,
        transform: isBottomBarVisible ? 'translateY(0)' : 'translateY(80px)',
        pointerEvents: isBottomBarVisible ? 'auto' : 'none',
        transition: 'transform 0.3s ease, opacity 0.3s ease',
        transformOrigin: 'bottom',
      }}
    >
      <Box
        sx={{
          transition: 'transform 0.25s ease, opacity 0.4s ease',
          opacity: isParaphraseBtnEnabled ? 1 : 0,
          transform: isParaphraseBtnEnabled ? 'translateX(0)' : 'translateX(-40px)',
          pointerEvents: isParaphraseBtnEnabled ? 'auto' : 'none',
        }}
      >
        <RoundedIconButton
          label="Clear input"
          onClick={onClear}
          variantType="contained"
          icon={<CloseIcon />}
        />
      </Box>
      <RoundedIconButton
        label="Paraphrase"
        onClick={onParaphrase}
        variantType="outlined"
        disabled={!isParaphraseBtnEnabled}
      />
    </Box>
  );
};
