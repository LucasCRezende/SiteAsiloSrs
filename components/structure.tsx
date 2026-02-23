"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const photos = [
  {
    src: "/images/structure-1.jpg",
    alt: "Quarto confortavel e bem iluminado",
    label: "Quartos",
  },
  {
    src: "/images/structure-2.jpg",
    alt: "Area externa com jardim e bancos",
    label: "Area Externa",
  },
  {
    src: "/images/structure-3.jpg",
    alt: "Refeitorio amplo e limpo",
    label: "Refeitorio",
  },
  {
    src: "/images/structure-4.jpg",
    alt: "Espaco de convivencia acolhedor",
    label: "Convivencia",
  },
]

export function Structure() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="estrutura" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-medium tracking-wider uppercase text-primary">
            Nossa Estrutura
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
            Espacos pensados para o conforto e bem-estar
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Cada ambiente foi planejado com carinho para proporcionar seguranca,
            acessibilidade e aconchego aos nossos residentes.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {photos.map((photo, index) => (
            <button
              key={photo.label}
              onClick={() => setSelectedImage(index)}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={`Ampliar imagem: ${photo.label}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300" />
              <span className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm text-foreground text-sm font-medium px-4 py-2 rounded-lg">
                {photo.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-label="Imagem ampliada"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-card rounded-full text-foreground hover:bg-card/80 transition-colors"
            aria-label="Fechar imagem"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative max-w-4xl w-full aspect-[4/3]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={photos[selectedImage].src}
              alt={photos[selectedImage].alt}
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}
