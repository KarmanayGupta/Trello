import "./globals.css";

export const metadata = {
  title: 'Trello AI Clone by Karmanay',
  description: 'Karmanay Gupta',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
