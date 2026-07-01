import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'InfoBus - Modern Transit',
  description: 'Sistema Inteligente de Transporte Universitário',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-slate-100 flex justify-center">
        <div className="mobile-container shadow-2xl overflow-x-hidden relative flex flex-col w-full bg-background min-h-screen">
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}