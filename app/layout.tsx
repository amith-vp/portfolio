import "@/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Metadata } from "next"
import Script from 'next/script';

export const metadata: Metadata = {
  title: "AMITH",
  description: "Love to Break into codes",
  icons: {
    icon: "/favicon.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-YZPTFZNCLP`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YZPTFZNCLP');
          `}
        </Script>
      </head>
      <body className="font-jetbrains">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

