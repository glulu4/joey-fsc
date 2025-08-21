// "use client"
// import React, {useEffect} from 'react'
// import HeaderText from './ui/HeaderText'
// import BodyText from './ui/BodyText'
// import Button from './Button'
// import {RoughNotation} from 'react-rough-notation'
// import {isMobile} from 'react-device-detect'

// export default function CTA() {

//   const [padding, setPadding] = React.useState(0)
//   const [strokeWidth, setStrokeWidth] = React.useState(1)

//   useEffect(() => {


//     if (isMobile) {
//       setPadding(4)
//       setStrokeWidth(4)
//     }
//     else {
//       setPadding(12)
//       setStrokeWidth(8)
//     }


//   }, [])

//   return (
//     <div className='flex flex-col items-center justify-center py-32'>

//       <div className='flex flex-col items-center justify-center w-10/12 sm:w-3/5 mx-auto text-center space-y-8'>
//         <HeaderText className='text-header-text font-serif font-medium'>

//           <span className=''>
//             Schedule Your {' '}

//           </span>

//           <RoughNotation
//             type="underline" show={true} color='#69d9e3' animationDuration={1000} iterations={1} padding={2} strokeWidth={strokeWidth}>
//             Consultation
//           </RoughNotation>
//           {' '}Today
//         </HeaderText>
//         <BodyText>
//           Get personalized care and experience why The Facial Surgery Center is the best oral and maxillofacial surgical solutions at The Facial Surgery Center.  We are here to help with all your oral and facial needs.
//         </BodyText>
//       </div>

//       <Button
//         text='Schedule Today'
//         href='/contact'
//         className='mt-8'
//       />
//     </div>
//   )
// }
"use client"
import React, {useEffect} from "react"
import HeaderText from "./ui/HeaderText"
import BodyText from "./ui/BodyText"
import Button from "./Button"
import {RoughNotation} from "react-rough-notation"
import {isMobile} from "react-device-detect"
import {services} from "../../public/services"

type CTAProps = {
  serviceKey?: keyof typeof services
  buttonHref?: string
}

export default function CTA({serviceKey, buttonHref = "/contact"}: CTAProps) {
  const [padding, setPadding] = React.useState(0)
  const [strokeWidth, setStrokeWidth] = React.useState(1)

  useEffect(() => {
    if (isMobile) {
      setPadding(4)
      setStrokeWidth(4)
    } else {
      setPadding(12)
      setStrokeWidth(8)
    }
  }, [])

  // Pull service data
  const svc = serviceKey ? services[serviceKey] : undefined
  const serviceTitle = svc?.serviceTitle

  // Fallback city
  const city = "Trumbull, CT"

  // Choose CTA body text
  const bodyCopy = svc?.ctaText 
  // Button text
  const buttonText = serviceTitle
    ? `Book ${serviceTitle} Consultation`
    : "Schedule Appointment"

  return (
    <section
      className="flex flex-col items-center justify-center py-32"
      aria-labelledby="cta-heading"
    >
      <div className="flex flex-col items-center justify-center w-10/12 sm:w-3/5 mx-auto text-center space-y-8">
        <HeaderText className="text-header-text font-serif font-medium">
          <span>Schedule Your </span>
          <RoughNotation
            type="underline"
            show={true}
            color="#69d9e3"
            animationDuration={1000}
            iterations={1}
            padding={2}
            strokeWidth={strokeWidth}
          >
            {serviceTitle ? `${serviceTitle} ` : "Consultation "}
          </RoughNotation>
          Appointment Today
        </HeaderText>

        <BodyText>Get personalized care and experience why The Facial Surgery Center is the best oral and maxillofacial surgical center in Trumbull, CT. We are here to help with all your oral and facial needs. {bodyCopy}</BodyText>
      </div> 

      <Button
        text={buttonText}
        href={buttonHref}
        className="mt-8"
        aria-label={`${buttonText} in ${city}`}
      />
    </section>
  )
}
