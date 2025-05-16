
import CTA from "@/components/CTA";
import HorizontalSlider from "@/components/HorzontilSlider";
import AreasOfFocus from "@/components/landing/AreasOfFocus";
import Hero from "@/components/landing/Hero";
import Location from "@/components/landing/Location";
import ServicesGrid from "@/components/landing/Services";
import Team from "@/components/landing/Team";
import Testimonial from "@/components/landing/Testimonial";
import WhyUs from "@/components/landing/WhyUs";
import Row from "@/components/ui/Row";

const Page = () => {
  return (
    <div className="min-h-screen">

      <div className="container">
        <Hero />
      </div>

      <div >
        <WhyUs />
      </div>




    <div>
      <AreasOfFocus className="pt-16"/>
    </div>

      {/* <div className="py-24">
        <Team />
      </div> */}




      


      <div className="py-32 bg-bg3 flex flex-col items-center justify-center">
        <HorizontalSlider />
      </div>


      <div className="container">
        <Location />
      </div>


      <Testimonial />

      <div>
        <CTA/>
      </div>

      {/* <div className="px-10">
        <Row
          title="Our Services"
          description="We offer a wide range of services to meet your needs."
          imageSrc="/lottie/doc1"
          isImgLottie
        />

        <Row
          reverse
          title="Our Services"
          description="We offer a wide range of services to meet your needs."
          imageSrc="/lottie/doc2"
          isImgLottie
        />


      </div> */}

    </div>
  );
};

export default Page;
