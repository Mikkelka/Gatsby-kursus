import React, { useEffect } from "react"
import Navbar from "../components/Navbar"
import "../styles/global.css"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

export default function Layout({ children }) {
  useEffect(() => {
    gsap.from(".logo", { duration: 2, x: 200, ease: "bounce" })

    // main komp

    ScrollTrigger.batch(".main-komp", {
      onEnter: batch => gsap.to(batch, { opacity: 1, stagger: 0.2 }),
      onLeave: batch => gsap.set(batch, { opacity: 0 }),
      onEnterBack: batch => gsap.to(batch, { opacity: 1, stagger: 0.2 }),
      onLeaveBack: batch => gsap.set(batch, { opacity: 0 }),
    })

    gsap.from(".fadein", { duration: 3, opacity: 0 })

    // svg'er højre

    ScrollTrigger.batch(".animation-v", {
      onEnter: batch =>
        gsap.from(batch, {
          opacity: 0,
          duration: () => gsap.utils.random(1, 5),
          x: -200,
        }),
    })

    // svg'er venstre

    ScrollTrigger.batch(".animation-h", {
      onEnter: batch =>
        gsap.from(batch, {
          opacity: 0,
          duration: () => gsap.utils.random(1, 5),
          x: 200,
        }),
    })
  }, [])

  return (
    <div className="layout">
      <Navbar />
      <div className="content"> {children} </div>
      <footer>
        <p>Copyright 2021 </p>
      </footer>
    </div>
  )
}
