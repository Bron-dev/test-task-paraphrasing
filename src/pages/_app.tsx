import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';

import theme from '@/theme/theme';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Head>
        <title>AI Paraphrasing Tool</title>
        <meta name="description" content="AI-based text paraphraser" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        <Toaster position="top-center" richColors closeButton />
      </ThemeProvider>
    </main>
  );
}
