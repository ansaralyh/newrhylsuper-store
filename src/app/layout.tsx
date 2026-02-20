import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { PromoBar, MainHeader, Footer } from "@/components/layout";
import Providers from "@/components/providers/Providers";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Rhyl Super Store | Your One-Stop Grocery Superstore",
  description: "Fresh produce, beverages, pantry staples & more. Free home delivery on all orders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased flex flex-col min-h-screen bg-gray-50`}>
        <Providers>
          <PromoBar />
          <MainHeader />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
