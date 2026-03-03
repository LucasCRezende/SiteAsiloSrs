import Link from "next/link"
import { Heart, Facebook, Instagram, Youtube } from "lucide-react"

const quickLinks = [
  { label: "Sobre Nos", href: "#sobre" },
  { label: "Serviços", href: "#serviços" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Equipe", href: "#equipe" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Transparência", href: "#transparência" },
  { label: "Notícias", href: "#notícias" },
  { label: "Contato", href: "#contato" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Heart className="h-7 w-7 text-accent" fill="currentColor" />
              <span className="text-xl font-bold text-primary-foreground">
                Sociedade de Assistência aos Pobres
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Cuidado, amor e dignidade na melhor idade. Uma instituiçãoo dedicada
              ao bem-estar e a qualidade de vida dos idosos.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-primary-foreground/80" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-primary-foreground mb-4">Links Rapidos</h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-primary-foreground mb-4">Institucional</h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-primary-foreground mb-4">Contato</h3>
            <div className="flex flex-col gap-2.5 text-sm text-primary-foreground/70">
              <p>Rua Monsenhor Calazans, 120</p>
              <p>Vila Operária, Santa Rita do Sapucaí - MG</p>
              <p>(35) 3471-1112</p>
              <p>asilosrs@yahoo.com.br</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/50">
            {`\u00A9 ${new Date().getFullYear()} Lar Acolher. Todos os direitos reservados.`}
          </p>
          <p className="text-xs text-primary-foreground/50">
            CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  )
}
