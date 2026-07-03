import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Partners } from "@/components/Partners";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { LinkButton } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Svenljunga Bilcenter är en märkesoberoende bilhandlare på Boråsvägen 16 i Svenljunga. Läs om hur vi arbetar med trygghet, tydlighet och enkel kontakt i varje bilaffär.",
  openGraph: {
    title: "Om Svenljunga Bilcenter",
    description: "En lokal, märkesoberoende bilhandlare byggd på förtroende.",
  },
};

const values = [
  {
    title: "Trygghet",
    body: "Du ska kunna lita på det vi säger om en bil — före, under och efter affären. Vi går igenom varje bil och är öppna med det vi vet.",
  },
  {
    title: "Tydlighet",
    body: "Raka besked om pris, skick och nästa steg. Inga dolda avgifter, inget finstilt som överraskar.",
  },
  {
    title: "Enkel kontakt",
    body: "Hos oss pratar du direkt med den som faktiskt kan svara. Ring, mejla eller kom förbi — tröskeln ska vara låg.",
  },
];

export default function OmOssPage() {
  return (
    <>
      <PageHero
        eyebrow="Om oss"
        title="Om Svenljunga Bilcenter"
        intro="Svenljunga Bilcenter hjälper kunder med trygga och smidiga bilaffärer. Vårt mål är att göra det enkelt att köpa, sälja och hitta rätt bil med personlig service och tydlig kommunikation."
      />

      {/* Story */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <SectionHeader
            eyebrow="Lokalt förankrade"
            title="En bilhandlare du kan besöka, ringa och lita på"
          />
          <Reveal delay={100}>
            <div className="space-y-4 leading-relaxed text-muted">
              <p>
                Svenljunga Bilcenter är en märkesoberoende bilhandlare på
                Boråsvägen 16, mitt i Svenljunga i hjärtat av Sjuhärad. Vi
                handlar med alla bilmärken — det betyder att vi kan ge dig ett
                ärligt råd om vilken bil som passar dig, utan att styras av ett
                enda varumärke.
              </p>
              <p>
                Hos oss får du hjälp hela vägen: köp ur vårt lager, inbyte,
                finansiering via Santander och garanti via GarantiPartner. Vill
                du sälja? Du får en fri värdering och vi hämtar bilen där den
                står. Alla våra leveransklara bilar finns dessutom
                utannonserade i vår Blocket-butik.
              </p>
              <p>
                Som lokal handlare möter vi våra kunder igen — på ICA, på macken
                och när det är dags för nästa bil. Den närheten är vår
                viktigaste kvalitetsgaranti: en affär är inte lyckad förrän du
                är nöjd även ett år senare.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gunmetal border-y border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
          <SectionHeader
            eyebrow="Så jobbar vi"
            title="Tre löften i varje affär"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 120} className="h-full">
                <div className="surface-plate h-full rounded-2xl p-7">
                  <span
                    aria-hidden="true"
                    className="font-display text-3xl font-semibold text-brand/30"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-3 text-xl font-semibold text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & trygghet — real logos */}
      <Partners />

      {/* CTA */}
      <section className="bg-carbon">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 lg:py-20">
          <Reveal>
            <h2 className="font-display text-[2rem] font-semibold text-pearl sm:text-[2.5rem]">
              Kom förbi och säg hej
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pearl/65">
              Du hittar oss på {site.address.street} i {site.address.city}.
              Kaffet är alltid på.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <LinkButton href="/kontakt" size="lg">
                Kontakta oss
              </LinkButton>
              <LinkButton href="/bilar" variant="outlineOnDark" size="lg">
                Se bilar i lager
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
