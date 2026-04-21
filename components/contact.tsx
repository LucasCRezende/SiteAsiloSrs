"use client"

import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Endereco",
    value: "Rua Monsenhor Calazans, 120 - Vila Operária, Santa Rita do Sapucaí - MG",
  },
  {
    icon: Phone,
    label: "Telefone / WhatsApp",
    value: "(35) 3471-1112",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "asilosrs@yahoo.com.br",
  },
  {
    icon: Clock,
    label: "Horário de Visitas",
    value: "Segunda a Domingo, 9h as 17h",
  },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contato" className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-medium tracking-wider uppercase text-primary">
            Contato
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
            Entre em contato conosco
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Estamos a disposicao para responder suas duvidas, agendar visitas ou
            receber sua colaboracao.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex flex-col gap-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl shrink-0">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{info.label}</p>
                    <p className="text-foreground font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl overflow-hidden border border-border h-[250px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2190.351051553865!2d-45.7036917!3d-22.2377374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cba3b219483311%3A0x2a6955cdc70667d5!2sAsilo%20-%20Sociedade%20de%20Assist%C3%AAncia%20aos%20Pobres!5e1!3m2!1spt-BR!2sbr!4v1772026674767!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Asilo de Santa Rita"
              />
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12 animate-fade-in">
                <CheckCircle2 className="h-16 w-16 text-green-500 mb-6 animate-bounce" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Redirecionando para o WhatsApp...
                </h3>
                <p className="text-muted-foreground">
                  Clique em enviar no WhatsApp para finalizar.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()

                  const form = e.currentTarget

                  const name = form.name.value
                  const email = form.email.value
                  const phone = form.phone.value
                  const subject = form.subject.value
                  const message = form.message.value

                  const texto = `
*Novo contato pelo site*

*Nome:* ${name}
*Email:* ${email}
*Telefone:* ${phone}
*Assunto:* ${subject}

*Mensagem:*
${message}
                  `

                  const numero = "553534711112" // 🔴 SEU NÚMERO AQUI

                  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`

                  window.open(url, "_blank")

                  setSubmitted(true)
                }}
                className="flex flex-col gap-5"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Envie uma mensagem
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input name="name" placeholder="Seu nome" required />
                  <Input name="email" type="email" placeholder="seu@email.com" required />
                </div>

                <Input name="phone" placeholder="Telefone" />
                <Input name="subject" placeholder="Assunto" required />

                <Textarea
                  name="message"
                  placeholder="Escreva sua mensagem..."
                  rows={4}
                  required
                />

                <Button type="submit" size="lg" className="w-full">
                  Enviar pelo WhatsApp
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}