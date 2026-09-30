import CorporateFAQ from "@/components/corporate/cFAQ";
import CorporateHero from "@/components/corporate/CorporateHero";
import CorporateStats from "@/components/corporate/CorporateStats";
import CorporateTestimonials from "@/components/corporate/cTestimonials";
import EmpowerCards from "@/components/corporate/empowerCards"
import StayAhead from "@/components/corporate/StayAhead";
import TrainingFeatures from "@/components/corporate/TrainingFeatures";
import TrainingModes from "@/components/corporate/TrainingModes";
import TrustedBy from "@/components/corporate/trustedBy";

export default function CorporatePage() {
  return (
    <main>
      <CorporateHero />
      <CorporateStats/>
      <EmpowerCards/>
      <StayAhead/>
      <TrainingFeatures/>
      <TrainingModes/>
      <CorporateTestimonials/>
      <TrustedBy/>
      <CorporateFAQ/>
    </main>
  );
}