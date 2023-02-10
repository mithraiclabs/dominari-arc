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
      <body>{children}</body>
    </html>
  );
}
