"use client"
import React from "react"
import Image from "next/image"
import { ContainerScroll } from "../container-scroll-animation"

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="font-semibold text-primaryDark dark:text-white">
              <span className="text-3xl md:text-[4rem] font-bold mt-1 leading-none">
                Turning Vision Into Reality
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  )
}
