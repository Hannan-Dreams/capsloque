import { Lexend } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "CAPSLOQUE | Engineering the Future",
  description: "Capsloque is a futuristic tech venture building cutting-edge digital solutions. We specialize in Web Development, Machine Learning, Resume Review, Shopify Stores, Marketing Strategy, and Brand Design.",
  keywords: ["tech company", "web development", "machine learning", "AI", "startup", "digital solutions", "brand design", "marketing"],
  authors: [{ name: "Capsloque" }],
  openGraph: {
    title: "CAPSLOQUE | Engineering the Future",
    description: "A futuristic tech venture building cutting-edge digital solutions and pioneering the future of technology.",
    url: "https://capsloque.in",
    siteName: "Capsloque",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CAPSLOQUE | Engineering the Future",
    description: "A futuristic tech venture building cutting-edge digital solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${lexend.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
