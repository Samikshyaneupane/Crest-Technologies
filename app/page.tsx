import CourseCards from "@/components/courseCards";
import Hero from "@/components/hero";
import CorporateBanner from "@/components/corporateBanner";
import CrestWay from "@/components/crestWay";
import FAQs from "@/components/faqs";
import Testimonials from "@/components/testimonials";
import HiringPartners from "@/components/hiringPartners";

export default function Home() {
  return (
    <>
      <Hero />
      <CourseCards/>
      <CorporateBanner/>
      <CrestWay/>
      <FAQs/>
     <Testimonials/>
     <HiringPartners/>
    </>
  );
}