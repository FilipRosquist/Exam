import Section from "./Section"
import { curve, heroBackground } from "../assets/"
import Button from "../components/Button"
import { PanelHero } from "../assets/"

const Hero = () => {
  return (
  <Section
  className='pt-[12rem] -mt-[5.25rem]'
  crosses
  crossesOffset='lg:translate-y-[5.25rem]'
  customPaddings
  id="hero"
  >
    <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto mt-10 text-center mb-[4rem] md:mb20 lg:mb:[6rem]">
            <h1 className="h1 mb-6">
                Explore your Possibilities with 
                <span className="inline-block relative">Pan-El 3G installations{" "} <img src={curve} className="absolute top-full left-0 w-full xl:-mt-2" width={624} height={28} alt="Curve"/></span>
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 mt-10 text-n-2 lg:mb-8">Pan-El 3G Installations provides expert electrical solutions with a focus on safety, reliability, and quality. Our certified electricians deliver efficient, code-compliant installations for residential, commercial, and industrial needs.</p>
            <Button href="/pricing" white>
                Get started
            </Button>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                <div className="relative bg-n-8 rounded-[1rem]">
                    <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]"/>
                        <div className="">
                            <img src={PanelHero} className="w-full" width={1024} height={490} alt="hero"/>

                        </div>

                </div>

            </div>

            <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                <img src={heroBackground} width={1440} height={1800} alt="hero" />
            </div>

        </div>

    </div>
    </Section>
  )


}

export default Hero
