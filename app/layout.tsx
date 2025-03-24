import "./globals.css";
import { themeEffect } from "./theme-effect";
import { Analytics } from "./analytics";
import { Header } from "./header";
import { Footer } from "./footer";
import { doge } from "./doge";
import { ChillReunion } from "@/fonts/font";

export const metadata = {
  title: "SONG",
  description:
    "IT 工程师",
  openGraph: {
    title: "SONG",
    description:
      "IT 工程师",
    url: "https://work.jackey.love",
    siteName: "SONG's blog",
  },
  twitter: {
    card: "summary_large_image",
    site: "@zhousongjie",
    creator: "@zhousongjie",
  },
  metadataBase: new URL("https://work.jackey.love"),
};

export const viewport = {
  themeColor: "transparent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ChillReunion.variable} font-mono antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();(${doge.toString()})();`,
          }}
        />
      </head>

      <body className="dark:text-gray-100 max-w-2xl m-auto">
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
          <Header />
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
