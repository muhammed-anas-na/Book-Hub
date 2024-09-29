import localFont from "next/font/local";
import "./globals.css";
import { UserProvider } from "../../context/userContext";
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
            href="https://fonts.googleapis.com/css2?family=Playwrite+DE+Grund&display=swap"
            rel="stylesheet"
          />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider>
        {children}
        <SpeedInsights />
        </UserProvider>
      </body>
    </html>
  );
}
