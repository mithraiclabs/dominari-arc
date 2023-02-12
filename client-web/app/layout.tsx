// need this to import tailwind
import '@/styles/globals.css';
import { Navbar } from '../components/Navbar';
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
        <KeypairProvider>
          <Navbar />
          {children}
        </KeypairProvider>
      </body>
    </html>
  );
}
