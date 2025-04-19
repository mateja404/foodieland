import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Foodieland - One and Only",
  description: "Dobrodošli na Foodieland! Uživajte u našim receptima i kulinarskim savetima.",
  verification: {
    google: "bPhZw7bjzChp1OonKjbnS067cx_OUqauUIUxvLXlmms",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="bPhZw7bjzChp1OonKjbnS067cx_OUqauUIUxvLXlmms" />
        <link rel="preload" href="/chickenpic.webp" as="image" type="image/webp" />
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
