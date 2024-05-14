import PageContainer from "@/components/pages/containers/pageContainer/PageContainer";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:"Todas as Musicas",
  description: "Plataforma de streaming que permite ouvir online ou baixar músicas de artistas independentes, incluindo alguns brasileiros.",
};
export default function HomeSounds() {
    return (
      <PageContainer>
        <div>
            <h1>Sounds</h1>
        </div>
      </PageContainer>
    );
  }
  