import "../../sass/index.scss";

//import fonts
import { Space_Grotesk } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Clinique Kabala",
    template: "%s | Clinique Kabala",
  },
  keywords: [
    "Clinique Kabala",
    "Clinique",
    "Kabala",
    "Bamako",
    "Mali",
    "Clinique Bamako",
    "Clinique Mali",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  verification: {
    //google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    //yandex: "14d2e73487fa6c71",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={space_grotesk.className}>{children}</body>
    </html>
  );
}
