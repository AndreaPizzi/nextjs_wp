"use client";
import "./globals.css";
import styles from "./components/scss/main.scss";
import { Rubik } from "next/font/google";


// components
import Navbar from "./components/Navbar";

const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <body className={rubik.className}>
        <div className={'main_wrp'}>
        <Navbar />
        <div className="main_container">
          <div className="row">{children}</div>
        </div>
        </div>
      </body>
    </html>
  );
}
