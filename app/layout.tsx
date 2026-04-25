import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata = {
  title: {
    default: "EAON Oil and Energy Services Limited",
    template: "%s | EAON Oil and Energy Services Limited",
  },
  description:
    "EAON Oil and Energy Services Limited provides structured, reliable support services across upstream and downstream energy operations.",
  openGraph: {
    title: "EAON Oil and Energy Services Limited",
    description:
      "Structured, reliable support services across upstream and downstream energy operations.",
    url: "https://eaonenergy.com",
    siteName: "EAON",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EAON Oil and Energy Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}