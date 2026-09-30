import CollegeHero from "@/components/college-to-corporate/collegeHero";
import CollegeIntro from "@/components/college-to-corporate/CollegeIntro";
import CollegeResult from "@/components/college-to-corporate/CollegeResult";
import DeliveryModes from "@/components/college-to-corporate/DeliveryModes";
import WhoIsItFor from "@/components/college-to-corporate/WhoIsItFor";
import WhyChoose from "@/components/college-to-corporate/WhyChoose";
export default function CollegeToCorporatePage() {
  return (
    <main>
      <CollegeHero />
      <CollegeIntro/>
      <WhoIsItFor/>
      <WhyChoose/>
      <DeliveryModes/>
      <CollegeResult/>
    </main>
  );
}