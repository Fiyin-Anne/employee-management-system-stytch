import Navigation from "../components/Navbar";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Employee Management System",
  description: "Protected by Stytch",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en" data-theme="lemonade">
        <body className={inter.className}>
          <Navigation />
          {children}
        </body>
      </html>
  );
}