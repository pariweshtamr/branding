import { HeroScroll } from "./hero/scroll-animation"

export const Hero = () => {
  return (
    <div className="min-h-[calc(100dvh-64px)] flex flex-col gap-4 file:relative">
      <div className="py-24 lg:py-32">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-16">
          <div className="text-5xl lg:text-[116px] leading-[1.05] font-normal lg:flex-[2.5]">
            <h1 className="uppercase">P.Tamrakar</h1>
            <h2 className="uppercase flex gap-4">
              Portfolio<span className="hidden md:block"> Site</span>.
            </h2>
          </div>

          <p className="text-[15px] text-secondaryColor lg:hidden">
            Web creator based in Australia - Sydney
          </p>

          <div className="lg:flex-1 lg:text-sm mt-3 lg:mt-0">
            <p>
              I am passionate about web technology and focus on user experience.
              I am to create web experiences that are surprising, exciting and
              memorable.
            </p>
          </div>
        </div>
        <p className="text-5xl text-secondaryColor mt-4 hidden lg:block">
          Web creator based in Australia - Sydney
        </p>
      </div>

      <div className="absolute -bottom-[60%] lg:-bottom-[80%] left-1/2 -translate-x-1/2">
        <HeroScroll />
      </div>
    </div>
  )
}
