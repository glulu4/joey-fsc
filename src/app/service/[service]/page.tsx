import React from 'react'
import {services} from '../../../../public/services';
import MapCard from '@/components/service/MapCard';
import ServiceHero from '@/components/service/ServiceHero';
import HeaderText from '@/components/ui/HeaderText';
import Row from '@/components/ui/Row';
import Schedule from '@/components/Schedule';
import ServiceInfo from '@/components/service/ServiceInfo';
import LearnMore from '@/components/service/LearnMore';
import CTA from '@/components/CTA';


export async function generateStaticParams(){
  return Object.keys(services).map((key) => ({
    service: key,
  }))
}


export default async function page({
  params,
}: {
  params: Promise<{service: string}>
}) {

  const {service} = await params;

  const serviceData = services[service];

  const serviceIndex = Object.keys(services).indexOf(service);
  const numberOfServices = Object.keys(services).length;

  let nextServiceIndex: number;
  let prevServiceIndex: number;
  if (serviceIndex - 1 < 0) {
    prevServiceIndex = numberOfServices - 1;
  }
  else {
    prevServiceIndex = serviceIndex - 1;
  }


  
  if (serviceIndex + 1 === numberOfServices) {
    nextServiceIndex = 0;
  }
  else{
    nextServiceIndex = serviceIndex + 1;
  }

  


  




  if (!serviceData) {
    return <div>Service not found</div>;
  }
  return (
    <div className='min-h-screen'>

      <div className='p-4 sm:p-8'>
        <ServiceHero
          title={serviceData.serviceTitle}
          description={serviceData.description}
          imageSrc={serviceData.coverImg}
          className='mt-32'


        />

      </div>

    <div>
      <ServiceInfo 
        infoHeader={serviceData.serviceTitle2}
        title1={serviceData.para1Title}
        title2={serviceData.para2Title}
        description1={serviceData.para1Text}
        description2={serviceData.para2Text}
        imageSrc1={serviceData.para1Img}
        imageSrc2={serviceData.para2Img}
      />
    </div>


      {/* <div className='py-28 p-8'>
        <Schedule />
      </div> */}

      <div>

        <LearnMore
          service1Idx={prevServiceIndex}
          service2Idx={nextServiceIndex}
        />


      </div>


        <div>
          <CTA/>
        </div>
      {/* <MapCard
        title={serviceData.name}
        description={serviceData.description}
        imageSrc={serviceData.image}
         className='pt-64'/> */}

    </div>

  )
}
