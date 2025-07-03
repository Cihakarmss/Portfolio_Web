import Navigation from "@/features/Navbar/components/Navigation";
import "./globals.css";
import Footer from "@/features/footer/components/Footer";

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
        <Footer />
        
        </body>
    </html>
  );
}
