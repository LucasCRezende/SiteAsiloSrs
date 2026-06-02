import { FileText, Handshake, ClipboardCheck, Award } from "lucide-react"

const items = [
  {
    icon: FileText,
    title: "Relatórios Financeiros",
    description:
      "Publicamos anualmente nossos relatórios financeiros detalhados, garantindo total transparência sobre a utilização dos recursos.",
    badge: "Atualizado 2025",
  },
  {
    icon: Handshake,
    title: "Parcerias",
    description:
      "Trabalhamos em conjunto com orgaos públicos, empresas e organizações sociais para ampliar nosso impacto e alcance.",
    badge: "15+ Parceiros",
  },
  {
    icon: ClipboardCheck,
    title: "Prestação de Contas",
    description:
      "Mantemos registros detalhados de todas as entradas e saídas, disponíveis para consulta pública a qualquer momento.",
    badge: "Auditado",
  },
{
  icon: Award,
  title: "Certificações",
  description:
    "Possuímos todas as certificações necessárias e somos reconhecidos pelos órgãos reguladores pela qualidade dos nossos serviços.",
  badge: "CNAS / CEBAS",
  certificates: [
    {
      name: "📄 Certificação CEBAS",
      file: "/certificados/certificacao-cebas.pdf",
    },
    {
      name: "📄 AVCB - Corpo de Bombeiros",
      file: "/certificados/Certificado AVCB.pdf",
    },
  ],
}
]

export function Transparency() {
  return (
    <section id="transparencia" className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium tracking-wider uppercase text-primary">
            Transparência
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
            Compromisso com a confiança
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Acreditamos que a transparência e a base da confianca. Por isso,
            mantemos todos os nossos processos abertos e acessíveis.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl group-hover:bg-primary transition-colors">
                  <item.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {item.badge}
                </span>
              </div>
<h3 className="text-xl font-bold text-foreground mb-2">
  {item.title}
</h3>

<p className="text-muted-foreground leading-relaxed">
  {item.description}
</p>

{"certificates" in item && item.certificates && (
  <div className="mt-4 flex flex-col gap-2">
    {item.certificates.map((cert) => (
      <a
        key={cert.file}
        href={cert.file}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-primary hover:underline"
      >
        📄 {cert.name}
      </a>
    ))}
  </div>
)}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
