import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Campanhas } from "@/components/campanhas"
import { Doadores } from "@/components/doadores"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Structure } from "@/components/structure"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"
import { Donation } from "@/components/donation"
import { Transparency } from "@/components/transparency"
import { News } from "@/components/news"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Campanhas />
        <About />
        <Services />
        <Structure />
        <Team />
        <Testimonials />
        <Donation />
        <Doadores />
        <Transparency />
        <News />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
