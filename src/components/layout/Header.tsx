import { Box, Typography } from '@mui/material';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => (
  <Box sx={{ mb: 5 }}>
    <Typography variant="h1" gutterBottom>
      {title}
    </Typography>
    <Typography variant="subtitle1">{subtitle}</Typography>
  </Box>
);
