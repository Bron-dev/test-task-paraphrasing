import { Button, Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        JustDone.ai — Paraphrasing Tool
      </Typography>
      <Button variant="contained">Test MUI Button</Button>
    </Container>
  );
}
