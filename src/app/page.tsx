
import HorizontalSlider from "@/components/HorzontilSlider";
import Hero from "@/components/landing/Hero";
import ServicesGrid from "@/components/landing/Services";
import Team from "@/components/landing/Team";
import Testimonial from "@/components/landing/Testimonial";
import WhyUs from "@/components/landing/WhyUs";
import Row from "@/components/ui/Row";

const Page = () => {
  return (
    <div className="min-h-screen">
      <div>
        <Hero />
      </div>

      <div >
        <WhyUs />

      </div>

      <div className="py-24">
        <Team />
      </div>

      <div className="flex flex-col items-center justify-center">
        <HorizontalSlider />
      </div>


      <Testimonial />

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
