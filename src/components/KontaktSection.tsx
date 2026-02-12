"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export function KontaktSection() {
  return (
    <section
      className="border-t border-[#1e293b]/10 bg-white py-16 md:py-20 lg:py-24"
      aria-labelledby="kontakt-heading"
    >
      <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
        <h2
          id="kontakt-heading"
          className="font-heading text-3xl font-bold text-[#1e293b] md:text-4xl lg:text-5xl"
        >
          Kontakt
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Links: Kontaktdaten */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <p className="font-sans text-lg leading-relaxed text-[#1e293b]/80 md:text-xl">
              Sprechen Sie uns an – wir beraten Sie gerne zu Ihrem Bauvorhaben.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-[#2d4196]" strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <p className="font-heading text-lg font-semibold text-[#1e293b]">
                    Dr.-Ing. Formazin & Partner mbB
                  </p>
                  <p className="mt-1 font-sans text-base text-[#1e293b]/75 md:text-lg">
                    Eichenallee 4<br />
                    16356 Ahrensfelde
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-6 w-6 flex-shrink-0 text-[#2d4196]" strokeWidth={1.5} aria-hidden="true" />
                <a
                  href="tel:+4930936660"
                  className="font-sans text-base text-[#1e293b]/75 transition-colors hover:text-[#2d4196] md:text-lg"
                >
                  +49 30 93 66 60
                </a>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-6 w-6 flex-shrink-0 text-[#2d4196]" strokeWidth={1.5} aria-hidden="true" />
                <a
                  href="mailto:info@formazin.de"
                  className="font-sans text-base text-[#1e293b]/75 transition-colors hover:text-[#2d4196] md:text-lg"
                >
                  info@formazin.de
                </a>
              </div>
            </div>
          </motion.div>

          {/* Rechts: Kontaktformular */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-6" action="/api/kontakt" method="POST">
              <div>
                <label
                  htmlFor="name"
                  className="block font-sans text-base font-medium text-[#1e293b] md:text-lg"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-2 w-full rounded-[2px] border border-[#1e293b]/20 bg-white px-4 py-3 font-sans text-base text-[#1e293b] transition-colors focus:border-[#2d4196] focus:outline-none focus:ring-2 focus:ring-[#2d4196]/20 md:text-lg"
                  placeholder="Ihr Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-sans text-base font-medium text-[#1e293b] md:text-lg"
                >
                  E-Mail-Adresse
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-[2px] border border-[#1e293b]/20 bg-white px-4 py-3 font-sans text-base text-[#1e293b] transition-colors focus:border-[#2d4196] focus:outline-none focus:ring-2 focus:ring-[#2d4196]/20 md:text-lg"
                  placeholder="ihre.email@beispiel.de"
                />
              </div>

              <div>
                <label
                  htmlFor="betreff"
                  className="block font-sans text-base font-medium text-[#1e293b] md:text-lg"
                >
                  Betreff
                </label>
                <input
                  type="text"
                  id="betreff"
                  name="betreff"
                  required
                  className="mt-2 w-full rounded-[2px] border border-[#1e293b]/20 bg-white px-4 py-3 font-sans text-base text-[#1e293b] transition-colors focus:border-[#2d4196] focus:outline-none focus:ring-2 focus:ring-[#2d4196]/20 md:text-lg"
                  placeholder="Betreff Ihrer Anfrage"
                />
              </div>

              <div>
                <label
                  htmlFor="nachricht"
                  className="block font-sans text-base font-medium text-[#1e293b] md:text-lg"
                >
                  Nachricht
                </label>
                <textarea
                  id="nachricht"
                  name="nachricht"
                  required
                  rows={6}
                  className="mt-2 w-full rounded-[2px] border border-[#1e293b]/20 bg-white px-4 py-3 font-sans text-base text-[#1e293b] transition-colors focus:border-[#2d4196] focus:outline-none focus:ring-2 focus:ring-[#2d4196]/20 md:text-lg"
                  placeholder="Beschreiben Sie Ihr Bauvorhaben..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-[2px] bg-[#2d4196] px-8 py-4 font-sans text-base font-semibold text-white transition-colors hover:bg-[#243a7a] md:text-lg"
              >
                Nachricht senden
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
