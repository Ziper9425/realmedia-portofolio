"use client";
import Link from "next/link";
import "./globals.css";

import { Amplify } from "aws-amplify";
import amplifyconfig from "../amplifyconfiguration.json";

import { ThemeProvider } from "@aws-amplify/ui-react";
import { studioTheme } from "@/ui-components";

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(amplifyconfig);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={studioTheme}>
          <header>
            <nav>
              <Link href="/"></Link>
              <Link href="/contact"></Link>
              <Link href="/servicii"></Link>
            </nav>
          </header>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
