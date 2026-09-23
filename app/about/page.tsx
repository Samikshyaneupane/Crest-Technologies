import AboutCTA from "@/components/about/AboutCTA";
import AboutHero from "@/components/about/AboutHero";
import AccreditationCertificate from "@/components/about/AccreditationCertificate";
import GlobalExcellence from "@/components/about/GlobalExcellence";
import MissionVision from "@/components/about/MissionVision";
import WhoWeAre from "@/components/about/WhoWeAre";
export default function CollegeToCorporatePage() {
  return (
    <main>
      <AboutHero/>
      <WhoWeAre/>
      <MissionVision/>
     <GlobalExcellence/>
     <AccreditationCertificate/>
     <AboutCTA/>

    </main>
  );
}