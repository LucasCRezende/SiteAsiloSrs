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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const subject = formData.get("subject")
    const message = formData.get("message")

    const texto = `
*Novo contato pelo site*

*Nome:* ${name}
*Email:* ${email}
*Telefone:* ${phone}
*Assunto:* ${subject}

*Mensagem:*
${message}
    `

    const numero = "553534711112" // 🔴 ALTERE PARA SEU NÚMERO

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`

    window.open(url, "_blank")

    setSubmitted(true)
  }

  return (
    <section id="contato" className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-medium uppercase text-primary">
            Contato
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Entre em contato conosco
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Estamos à disposição para responder suas dúvidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* INFO */}
          <div>
            <div className="flex flex-col gap-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 h-[250px] rounded-2xl overflow-hidden border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2190.351051553865!2d-45.7036917!3d-22.2377374"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

          {/* FORM */}
          <div className="bg-card border rounded-2xl p-8 shadow-xl">

            {submitted ? (
              <div className="flex flex-col items-center text-center py-12 animate-fade-in">
                <CheckCircle2 className="h-16 w-16 text-green-500 mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold">
                  Abrindo WhatsApp...
                </h3>
                <p className="text-muted-foreground">
                  Finalize o envio por lá 👍
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                <h3 className="text-xl font-bold">
                  Envie uma mensagem
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input name="name" placeholder="Seu nome" required />
                  <Input name="email" type="email" placeholder="Seu e-mail" required />
                </div>

                <Input name="phone" placeholder="Telefone" />
                <Input name="subject" placeholder="Assunto" required />

                <Textarea
                  name="message"
                  placeholder="Digite sua mensagem..."
                  rows={4}
                  required
                />

                <Button type="submit" className="w-full">
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