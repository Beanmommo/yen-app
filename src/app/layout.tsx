export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html>{children}</html>;
}
