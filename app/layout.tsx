import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "Abhiram Jampani | Software Engineer",
  description: "Portfolio of Abhiram Jampani - Software Intern at NVIDIA, Computer Science student at IIIT Lucknow. Passionate about problem-solving and web development.",
  icons: {
    icon: [
      { url: "/House Stark Logo.jpg", type: "image/jpeg" },
    ],
    shortcut: "/House Stark Logo.jpg",
    apple: "/House Stark Logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="stark">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${cinzel.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

      </head>
      <body className={`${cinzel.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
