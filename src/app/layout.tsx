import Navigation from "@/features/Navbar/components/Navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" text-grey-10">
        <Navigation />
        {children}
        
        </body>
    </html>
  );
}
