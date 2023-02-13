// need this to import tailwind
import '@/styles/globals.css';
import { Navbar } from '../components/Navbar';
import { SolanaProviders } from '../components/SolanaProviders';
import { DominariSdkProvider } from '../context/Domainari';
import { KeypairProvider } from '../context/KeypairContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Dominari</title>
      </head>
      <body className="h-screen w-screen bg-zinc-800 text-white">
        <SolanaProviders>
          <DominariSdkProvider>
            <KeypairProvider>
              <Navbar />
              {children}
            </KeypairProvider>
          </DominariSdkProvider>
        </SolanaProviders>
      </body>
    </html>
  );
}
