import Link from "next/link"
import { Building2, HeartHandshake, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { empresas, pessoas, type Doador } from "@/lib/doadores"

function Grupo({ titulo, icon: Icon, lista }: { titulo: string; icon: typeof User; lista: Doador[] }) {
  if (lista.length === 0) return null

  return (
    <div>
      <h3 className="flex items-center gap-2 text-lg font-bold text-foreground mb-5">
        <Icon className="h-5 w-5 text-primary" />
        {titulo}
      </h3>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {lista.map((d) => (
          <li
            key={d.nome}
            className="bg-card border border-border rounded-2xl px-5 py-4 hover:border-primary/30 hover:shadow-md transition-all"
          >
            <p className="font-semibold text-foreground">{d.nome}</p>
            {d.descricao && <p className="mt-1 text-sm text-muted-foreground">{d.descricao}</p>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Doadores() {
  const vazio = empresas.length === 0 && pessoas.length === 0

  return (
    <section id="doadores" className="py-20 lg:py-28 bg-background scroll-mt-16 lg:scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-medium tracking-wider uppercase text-primary">
            Nossos Doadores
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
            Gratidão a quem faz parte dessa história
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Empresas e pessoas que, com sua generosidade, ajudam a manter o cuidado
            e a dignidade dos nossos idosos todos os dias.
          </p>
        </div>

        {vazio ? (
          <div className="max-w-xl mx-auto text-center bg-secondary border border-border rounded-3xl p-10">
            <HeartHandshake className="h-10 w-10 text-primary mx-auto" />
            <p className="mt-4 text-foreground font-semibold">Lista de doadores em atualização</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Quer fazer parte? Toda ajuda é bem-vinda.
            </p>
            <Button asChild className="mt-6">
              <Link href="#doar">Quero doar</Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-12">
            <Grupo titulo="Empresas parceiras" icon={Building2} lista={empresas} />
            <Grupo titulo="Pessoas" icon={User} lista={pessoas} />
          </div>
        )}
      </div>
    </section>
  )
}
