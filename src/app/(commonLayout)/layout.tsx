import Navbar from "@/components/common/Navbar/Navbar";
import "../globals.css";

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
      </body>
    </html>
  );
}