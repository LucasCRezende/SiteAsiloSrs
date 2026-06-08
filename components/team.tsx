import { Stethoscope, HeartHandshake, UserCheck, Activity, Apple, Brain, Users } from "lucide-react"

const team = [
  {
    icon: Stethoscope,
    role: "Enfermeiros e Medicos",
    description:
      "Equipe de enfermagem qualificada, presente 24 horas por dia para garantir os melhores cuidados.",
  },
  {
    icon: HeartHandshake,
    role: "Cuidadores",
    description:
      "Profissionais dedicados ao acompanhamento diário, com carinho e atencao individualizada.",
  },
  {
  icon: Apple,
  role: "Nutricionistas",
  description:
    "Especialistas que cuidam da alimentação com atenção e equilíbrio, promovendo saúde, energia e mais qualidade de vida aos idosos.",
  },
  {
  icon: Brain,
  role: "Psicologia",
  description:
    "Cuidado emocional que acolhe, escuta e fortalece a mente, trazendo mais tranquilidade, autoestima e qualidade de vida aos idosos.",
  },
  {
    icon: UserCheck,
    role: "Assistente Social",
    description:
      "Suporte social e emocional para residentes e familias, mediando necessidades e direitos.",
  },
  {
    icon: Activity,
    role: "Fisioterapeutas",
    description:
      "Especialistas em reabilitação e manutenção da mobilidade, promovendo independencia funcional.",
  },
  {
    icon: Users,
    role: "Voluntários",
    description:
      "Pessoas generosas que doam seu tempo e amor, enriquecendo o dia a dia dos nossos idosos.",
  },
]

export function Team() {
  return (
    <section id="equipe" className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium tracking-wider uppercase text-primary">
            Nossa Equipe
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
            Profissionais que cuidam com o coração
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Contamos com uma equipe multidisciplinar qualificada e apaixonada
            pelo cuidado com os idosos.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {team.map((member) => (
            <div
              key={member.role}
              className="group bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mx-auto mb-4 group-hover:bg-primary transition-colors">
                <member.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <p className="text-2xl font-bold text-primary mb-1">{member.count}</p>
              <h3 className="text-lg font-bold text-foreground mb-2">{member.role}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
