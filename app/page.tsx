import PageContainer from "@/components/pages/containers/pageContainer/PageContainer";
import HeroHome from "@/components/pages/sections/home/HeroHome";
import NewSounds from "@/components/pages/sections/home/NewSounds";
import Recomendacion from "@/components/pages/sections/home/Recomendacion";

export default function Home() {
  return (
    <PageContainer>
     <HeroHome />
     <NewSounds />
     <Recomendacion />
    </PageContainer>
  );
}
