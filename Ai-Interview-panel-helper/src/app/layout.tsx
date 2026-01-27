import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "next-themes";
import FcmProvider from "./FcmProvider";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
export const metadata = {
  title: "Vuexy Admin",
  description: "Vuexy Admin Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NextIntlClientProvider>
          <ThemeProvider attribute="class">
            {children}
            <ToastContainer position="top-right" />
            <FcmProvider />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
