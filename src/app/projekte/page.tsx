import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PROJEKTE } from "@/data/projekte";

export default function ProjektePage() {
  return (
    <>
      <Navigation />

      <section className="bg-white py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 xl:px-20">
          <h1 className="font-heading text-2xl font-bold text-[#1e293b] md:text-3xl lg:text-4xl">
            Projekte
          </h1>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PROJEKTE.map((projekt, index) => (
              <article key={projekt.slug}>
                <Link
                  href={`/projekte/${projekt.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2px]">
                    <Image
                      src={projekt.image}
                      alt={projekt.name}
                      fill
                      priority={index < 3}
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="mt-4">
                    <h2 className="font-heading text-lg font-bold text-[#1e293b] group-hover:text-[#2d4196] transition-colors md:text-xl">
                      {projekt.name}
                    </h2>
                    <p className="mt-1 font-sans text-sm text-[#1e293b]/60">
                      {projekt.ort} · {projekt.jahr}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
