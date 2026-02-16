import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Products } from "@/components/products"
import { Process } from "@/components/process"
import { About } from "@/components/about"
import { Mission } from "@/components/mission"
import { FAQ } from "@/components/faq"
import { InstagramSection } from "@/components/instagram-section"
import { Contact } from "@/components/contact"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Process />
        <About />
        <Mission />
        <FAQ />
        <InstagramSection />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
