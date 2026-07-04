import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CarCard } from "@/components/CarCard";
import { HeroSlideshow, type Slide } from "@/components/HeroSlideshow";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { LinkButton } from "@/components/ui";
import { carTitle, inStockCars } from "@/lib/cars";
import { formatPrice } from "@/lib/format";
import { site, statsConfirmed } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — Din trygga bilaffär i Svenljunga`,
  description:
    "Märkesoberoende bilhandlare i Svenljunga. Se bilar i lager, sälj din bil med fri värdering, finansiering via Santander och garanti via GarantiPartner. Vi köper, säljer och rekonditionerar bilar av alla märken.",
  openGraph: {
    title: `${site.name} — Din trygga bilaffär`,
    description:
      "Vi köper, säljer och hjälper dig hitta rätt bil i Svenljunga med omnejd. Fri värdering och vi hämtar din bil.",
  },
};

// Hero proof row — the promise before a single scroll
const proof = ["Lokal bilhandlare", "Fri värdering", "Personlig hjälp"];

const heroSlides: Slide[] = [
  {
    src: "/hero/showroom-interior.jpg",
    alt: "Svenljunga Bilcenters ljusa inomhushall med bilar i lager",
  },
  {
    src: "/hero/exterior.jpg",
    alt: "Svenljunga Bilcenters anläggning på Boråsvägen med bilar utanför",
  },
  {
    src: "/hero/showroom-branding.jpg",
    alt: "Svenljunga Bilcenters skyltade utställningshall inomhus",
  },
];

const journeys = [
  {
    title: "Trygg bilaffär",
    body: "Vi hjälper dig genom hela processen och ser till att du får tydlig information innan du bestämmer dig.",
    cta: "Se bilar i lager",
    href: "/bilar",
  },
  {
    title: "Sälj bilen smidigt",
    body: "Skicka in uppgifter om din bil så återkommer vi med en första bedömning och nästa steg.",
    cta: "Sälj din bil",
    href: "/salj-din-bil",
  },
  {
    title: "Hitta rätt bil",
    body: "Letar du efter något särskilt? Berätta vad du söker så hjälper vi dig hitta rätt alternativ.",
    cta: "Be oss hitta din bil",
    href: "/hitta-min-bil",
  },
];

const services = [
  {
    title: "Köp ur vårt lager",
    body: "Märkesoberoende urval av genomgångna bilar. Ta gärna din nuvarande bil i inbyte.",
  },
  {
    title: "Vi köper din bil",
    body: "Sälj tryggt och enkelt till oss. Du får en fri värdering utan förpliktelser.",
  },
  {
    title: "Vi hämtar bilen",
    body: "Bor du en bit bort? Vi hämtar upp bilen där den står vid överenskommen plats.",
  },
  {
    title: "Finansiering",
    body: "Förmånlig ränta genom Santander Consumer Bank — vi hjälper dig hela vägen.",
  },
  {
    title: "Garanti",
    body: "Trygga garantipaket via GarantiPartner, anpassade efter bilens ålder och miltal.",
  },
  {
    title: "Rekond",
    body: "Vi rekonditionerar bilar så att de känns som nya — både våra egna och din.",
  },
];

// Partners shown on the smoked-silver trust strip (real, from svenljungabilcenter.se)
const partnerLogos = [
  { name: "Santander Consumer Bank", src: "/partners/santander.png", w: 520, h: 292 },
  { name: "GarantiPartner", src: "/partners/garantipartner.png", w: 360, h: 360 },
  { name: "Blocket", src: "/partners/blocket.png", w: 520, h: 292 },
];

/** Thin stitched cognac leather seam — a material transition (detail #8). */
function LeatherSeam() {
  return (
    <div
      aria-hidden="true"
      className="bg-leather h-2.5 border-y border-dashed border-[#f0e2cd]/45"
    />
  );
}

export default function Home() {
  const featured = inStockCars().slice(0, 3);
  const heroCar = featured[0];

  return (
    <>
      {/* ── Hero — smoked titanium ──────────────────────────────── */}
      <section className="bg-titanium relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.06fr_0.94fr] lg:pb-24 lg:pt-40">
          <div>
            <p
              className="eyebrow eyebrow-rule rise-in text-silver"
              style={{ animationDelay: "0.05s" }}
            >
              Din trygga bilaffär · Svenljunga
            </p>
            <h1
              className="font-display rise-in mt-4 text-[2.5rem] font-semibold leading-[1.03] tracking-[-0.03em] text-balance text-pearl sm:text-[3.25rem] lg:text-[3.75rem]"
              style={{ animationDelay: "0.15s" }}
            >
              Köp, sälj eller hitta rätt bil —{" "}
              <span className="font-medium text-pearl/55">
                enkelt och tryggt.
              </span>
            </h1>
            <p
              className="rise-in mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-muted sm:text-[1.1875rem]"
              style={{ animationDelay: "0.3s" }}
            >
              Utforska bilarna i vårt lager eller få en fri värdering.
              Märkesoberoende och personligt, mitt i Svenljunga.
            </p>
            <div
              className="rise-in mt-8 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "0.45s" }}
            >
              <LinkButton href="/bilar" size="lg">
                Se bilar i lager
              </LinkButton>
              <LinkButton href="/salj-din-bil" variant="outline" size="lg">
                Sälj din bil
              </LinkButton>
              <Link
                href="/hitta-min-bil"
                className="text-sm font-semibold text-silver underline-offset-4 hover:text-pearl hover:underline"
              >
                Hitta min nästa bil →
              </Link>
            </div>

            <ul
              className="rise-in mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-6"
              style={{ animationDelay: "0.65s" }}
              aria-label="Det här hjälper vi dig med"
            >
              {proof.map((item, i) => (
                <li
                  key={item}
                  className="eyebrow flex items-center gap-4 text-[0.62rem] text-silver/80"
                >
                  {i > 0 && (
                    <span aria-hidden="true" className="text-cognac/70">
                      ·
                    </span>
                  )}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Photo composition */}
          <div className="rise-in relative" style={{ animationDelay: "0.35s" }}>
            {/* instrument-cluster dial motif (detail #3) — hero only */}
            <svg
              aria-hidden="true"
              viewBox="0 0 200 200"
              className="absolute -right-8 -top-12 hidden w-40 sm:block"
            >
              <path
                d="M30 168 A 82 82 0 1 1 170 168"
                fill="none"
                stroke="var(--color-silver-mist)"
                strokeWidth="1.5"
                pathLength={360}
                className="opacity-40"
              />
              <path
                d="M30 168 A 82 82 0 1 1 170 168"
                fill="none"
                stroke="var(--color-cognac)"
                strokeWidth="2.5"
                strokeLinecap="round"
                pathLength={360}
                className="dial-arc opacity-90"
              />
              <line
                x1="100"
                y1="150"
                x2="150"
                y2="86"
                stroke="var(--color-ink-2)"
                strokeWidth="1.5"
                className="opacity-70"
              />
              <circle cx="100" cy="150" r="4" fill="var(--color-ink-2)" className="opacity-70" />
            </svg>

            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-white/10 shadow-card-hover">
              <HeroSlideshow slides={heroSlides} />
              <span className="nums absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-3.5 py-1.5 text-xs font-medium text-pearl backdrop-blur-md">
                <svg
                  aria-hidden="true"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {site.address.street}, {site.address.city}
              </span>
            </div>

            {/* floating card: newest real car in stock */}
            <Link
              href={`/bilar/${heroCar.slug}`}
              className="float-card surface-plate-strong group absolute -left-3 bottom-8 z-10 hidden items-center gap-3.5 rounded-2xl p-3 pr-5 transition-[filter,transform] duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:flex lg:-left-8"
              style={{ animationDelay: "0.9s" }}
            >
              <span className="relative block h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={heroCar.images[0]}
                  alt=""
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </span>
              <span className="block">
                <span className="eyebrow block text-[0.6rem] text-muted">
                  Ur lagret
                </span>
                <span className="font-display block text-sm font-semibold text-pearl">
                  {carTitle(heroCar)} {heroCar.year}
                </span>
                <span className="nums block text-xs text-muted">
                  {formatPrice(heroCar.priceSek)}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="ml-1 text-silver transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Tre sätt — gunmetal ─────────────────────────────────── */}
      <section className="bg-gunmetal border-y border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <SectionHeader
            onDark
            eyebrow="Vad vill du göra?"
            title="Tre sätt vi hjälper dig på"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {journeys.map((j, i) => (
              <Reveal key={j.href} delay={i * 120} className="h-full">
                <Link
                  href={j.href}
                  className="group surface-carbon flex h-full flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
                >
                  <h3 className="font-display text-xl font-semibold text-pearl">
                    {j.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-muted">
                    {j.body}
                  </p>
                  <span className="mt-6 text-sm font-semibold text-silver">
                    {j.cta}{" "}
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LeatherSeam />

      {/* ── Bilar i lager — carbon ──────────────────────────────── */}
      <section className="bg-carbon">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              onDark
              eyebrow="Bilar i lager"
              title="Ett urval ur vårt lager"
              intro="Alla bilar går igenom vår genomgång innan de säljs. Är du intresserad av en bil? Skicka en förfrågan så återkommer vi."
            />
            <Reveal delay={150}>
              <LinkButton href="/bilar" variant="outline">
                Visa alla bilar
              </LinkButton>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((car, i) => (
              <Reveal key={car.slug} delay={i * 120} className="h-full">
                <CarCard car={car} priority={i < 3} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Det här erbjuder vi — gunmetal, carbon tiles ────────── */}
      <section className="bg-gunmetal border-y border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <SectionHeader
            onDark
            eyebrow="Det här erbjuder vi"
            title="Allt kring bilaffären på ett ställe"
            intro="Från köp och inbyte till finansiering, garanti och rekond — vi tar hand om hela affären så att du slipper springa mellan olika ställen."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 100} className="h-full">
                <div className="surface-carbon group flex h-full flex-col rounded-2xl p-7 transition-[filter] duration-300 hover:brightness-110">
                  <span
                    aria-hidden="true"
                    className="nums font-display text-sm font-semibold text-silver/40"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-2 text-lg font-semibold text-pearl">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Varför oss — carbon ─────────────────────────────────── */}
      <section className="bg-carbon">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div>
            <SectionHeader
              onDark
              eyebrow="Varför oss?"
              title="En bilaffär handlar om förtroende"
              intro="Vi vet att en bilaffär handlar om mer än bara priset. Det handlar om förtroende, tydlighet och att känna sig trygg med sitt val. Därför fokuserar vi på personlig service, enkel kontakt och lösningar som passar dina behov."
            />
            <Reveal delay={150}>
              {statsConfirmed ? (
                <dl className="mt-10 grid grid-cols-2 gap-8">
                  <div>
                    <dt className="text-sm text-muted">År i branschen</dt>
                    <dd className="nums font-display mt-1 text-4xl font-semibold text-silver">
                      {site.stats.yearsInBusiness}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted">Sålda bilar</dt>
                    <dd className="nums font-display mt-1 text-4xl font-semibold text-silver">
                      {site.stats.carsSold}
                    </dd>
                  </div>
                </dl>
              ) : (
                <ul className="mt-10 space-y-3">
                  {[
                    "Märkesoberoende — vi handlar med alla bilmärken",
                    `Finansiering via ${site.partners.financing}`,
                    `Garantipaket via ${site.partners.warranty}`,
                    "Fri värdering när du säljer din bil",
                  ].map((fact) => (
                    <li
                      key={fact}
                      className="flex items-center gap-3 text-sm text-ink-3"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-cognac"
                      />
                      {fact}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </div>

          <div className="flex flex-col justify-center">
            <ul className="space-y-6">
              {[
                {
                  title: "Trygghet",
                  body: "Tydlig information om varje bil och varje affär — inga överraskningar efteråt.",
                },
                {
                  title: "Tydlighet",
                  body: "Rakt besked om pris, skick och nästa steg. Du vet alltid var du står.",
                },
                {
                  title: "Enkel kontakt",
                  body: "Ring, mejla eller skicka ett formulär — du får svar av en människa, inte en växel.",
                },
              ].map((value, i) => (
                <Reveal as="li" key={value.title} delay={i * 120}>
                  <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                    <span
                      aria-hidden="true"
                      className="nums font-display text-2xl font-semibold text-silver"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-pearl">
                        {value.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {value.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Trust strip — smoked silver, centred partner logos ──── */}
      <section className="bg-smoked border-y border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
          <div className="flex flex-col items-center gap-2.5">
            <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {partnerLogos.map((p) => (
                <li
                  key={p.name}
                  className="flex h-11 items-center rounded-lg bg-white/90 px-3.5"
                >
                  <Image
                    src={p.src}
                    alt={p.name}
                    width={p.w}
                    height={p.h}
                    className="max-h-7 w-auto max-w-[112px] object-contain grayscale transition duration-300 hover:grayscale-0"
                  />
                </li>
              ))}
            </ul>
            <span className="eyebrow text-[0.6rem] text-pearl/65">
              Samarbetspartners
            </span>
          </div>
        </div>
      </section>

      {/* ── Conversion — leather plate on titanium ──────────────── */}
      <section className="bg-titanium">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <Reveal>
            <div className="bg-leather shadow-card-hover rounded-3xl p-2.5">
              <div className="leather-stitch grid overflow-hidden rounded-[1.15rem] lg:grid-cols-[1.3fr_1fr]">
                <div className="p-8 sm:p-12">
                  <p className="eyebrow text-[#e6cfb5]">Funderar du på att sälja?</p>
                  <h2 className="font-display mt-3 text-[2rem] font-semibold text-[#f8efe2] sm:text-[2.5rem]">
                    Få en fri värdering av din bil
                  </h2>
                  <p className="mt-4 max-w-lg leading-relaxed text-[#ecdcc7]/90">
                    Skicka in bilens uppgifter så återkommer vi med en första
                    bedömning — utan krångel och utan förpliktelser.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <LinkButton href="/salj-din-bil" size="lg">
                      Få en gratis värdering
                    </LinkButton>
                    <LinkButton href="/kontakt" variant="outlineOnDark" size="lg">
                      Kontakta oss
                    </LinkButton>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-5 border-t border-[#f0e2cd]/25 bg-black/20 p-8 sm:p-12 lg:border-l lg:border-t-0">
                  <div>
                    <h3 className="eyebrow text-[#e6cfb5]/80">Telefon</h3>
                    <a
                      href={site.phoneHref}
                      className="nums font-display mt-1 block text-xl font-semibold text-[#f8efe2] hover:text-white"
                    >
                      {site.phone}
                    </a>
                  </div>
                  <div>
                    <h3 className="eyebrow text-[#e6cfb5]/80">Besök oss</h3>
                    <p className="mt-1 text-sm text-[#f0e2cd]/85">
                      {site.address.street}, {site.address.zip}{" "}
                      {site.address.city}
                    </p>
                  </div>
                  <div>
                    <h3 className="eyebrow text-[#e6cfb5]/80">E-post</h3>
                    <a
                      href={site.emailHref}
                      className="mt-1 block text-sm text-[#f0e2cd]/85 hover:text-white"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
