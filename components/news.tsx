import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const posts = [
  {
    date: "15 Fev 2026",
    category: "Evento",
    title: "Festa de Carnaval anima residentes e familias",
    excerpt:
      "Nossa tradicional festa de Carnaval reuniu residentes, familiares e voluntarios em uma tarde repleta de musica, dancas e muita alegria.",
  },
  {
    date: "02 Fev 2026",
    category: "Campanha",
    title: "Campanha do Agasalho 2026 ja comecou",
    excerpt:
      "Estamos arrecadando cobertores, roupas de inverno e itens de aquecimento para garantir o conforto dos nossos idosos nos meses mais frios.",
  },
  {
    date: "20 Jan 2026",
    category: "Acao Social",
    title: "Parceria com universidade traz alunos voluntarios",
    excerpt:
      "Firmamos parceria com a universidade local para receber alunos de enfermagem, fisioterapia e psicologia em estagio solidario.",
  },
]

export function News() {
  return (
    <section id="noticias" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <span className="text-sm font-medium tracking-wider uppercase text-primary">
              Noticias
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
              Fique por dentro
            </h2>
          </div>
          <Link
            href="#"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Ver todas as noticias
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center mt-4 text-sm font-medium text-primary hover:underline"
                >
                  Leia mais
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
