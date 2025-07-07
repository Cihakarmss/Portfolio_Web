import Navigation from "@/features/Navbar/components/Navigation";
import "./globals.css";
import Footer from "@/features/footer/components/Footer";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
 {
  return (
    <html lang="en">
      <body className=" text-grey-10">
        <SmoothScrollProvider>
        <Navigation />
        {children}
        <Footer />
        </SmoothScrollProvider>
        
        
        </body>
    </html>
  );
}
