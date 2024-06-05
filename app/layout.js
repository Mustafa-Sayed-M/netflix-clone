import { Inter } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header/Header";

// Font awesome icons css
import "@fortawesome/fontawesome-free/css/all.min.css";

// React lazy loading image
import 'react-lazy-load-image-component/src/effects/blur.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NETFLIX",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-body-background text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
};