import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pour Nora - Un jeu romantique avec une surprise",
  description:
    "Un jeu de mémoire unique spécialement créé pour Nora. Trouve toutes les paires pour découvrir la surprise !",
  keywords: [
    "jeu de Saint-Valentin",
    "jeu romantique",
    "surprise romantique",
    "jeu de couple",
    "cadeau Saint-Valentin",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
