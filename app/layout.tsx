import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/global.sass";
import MainAppLayout from "@/components/global/template/layouts/MainAppLayout/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:{
    default: "Home - TRACK-ON",
    template: "%s - TRACK-ON"
  },
  description: "Plataforma de streaming que permite ouvir online ou baixar músicas de artistas independentes, incluindo alguns brasileiros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-AO">
      <body className={inter.className}>
        <MainAppLayout>
          {children}
        </MainAppLayout>
      </body>
    </html>
  );
}
