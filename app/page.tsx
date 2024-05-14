import PageContainer from "@/components/pages/containers/pageContainer/PageContainer";
import HeroHome from "@/components/pages/sections/home/HeroHome";
import NewSounds from "@/components/pages/sections/home/NewSounds";

export default function Home() {
  return (
    <PageContainer>
     <HeroHome />
     <NewSounds />
    </PageContainer>
  );
}
