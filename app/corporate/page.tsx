import CorporateHero from "@/components/corporate/CorporateHero";
import CorporateStats from "@/components/corporate/CorporateStats";
import EmpowerCards from "@/components/corporate/empowerCards"

export default function CorporatePage() {
  return (
    <main>
      <CorporateHero />
      <CorporateStats/>
      <EmpowerCards/>
    </main>
  );
}