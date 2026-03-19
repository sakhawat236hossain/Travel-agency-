import Navbar from "@/components/common/Navbar/Navbar";
import "../globals.css";
import Footer from "@/components/common/Fooret/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar /> 
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}