import CourseCards from "@/components/courseCards";
import Hero from "@/components/hero";
import CorporateBanner from "@/components/corporateBanner";
import CrestWay from "@/components/crestWay";
import FAQs from "@/components/faqs";
import Testimonials from "@/components/testimonials";
import HiringPartners from "@/components/hiringPartners";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
    
      <Hero />

      {/* Sections animate when scrolling */}
      <ScrollReveal>
        <CourseCards />
      </ScrollReveal>

      <ScrollReveal>
        <CorporateBanner />
      </ScrollReveal>

      <ScrollReveal>
        <CrestWay />
      </ScrollReveal>

      <ScrollReveal>
        <FAQs />
      </ScrollReveal>

      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal>
        <HiringPartners />
      </ScrollReveal>
    </>
  );
}