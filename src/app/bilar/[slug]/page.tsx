import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InterestForm } from "@/components/forms/InterestForm";
import { Reveal } from "@/components/Reveal";
import { cars, carTitle, getCar } from "@/lib/cars";
import { formatMileage, formatPrice } from "@/lib/format";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const car = getCar(slug);
  if (!car) return {};
  const title = `${carTitle(car)} ${car.year}`;
  const description = `${title} — ${formatMileage(car.mileageMil)}, ${car.fuel}, ${car.gearbox}. ${formatPrice(car.priceSek)} hos ${site.name} i Svenljunga.`;
  return {
    title,
    description,
    openGraph: {
      title: `${title} — ${site.name}`,
      description,
      images: [{ url: car.images[0] }],
    },
  };
}

const specLabel = "text-xs font-medium uppercase tracking-wider text-silver/60";
const specValue = "mt-1 font-medium text-pearl";

export default async function CarDetailPage({ params }: Props) {
  const { slug } = await params;
  const car = getCar(slug);
  if (!car) notFound();

  const title = carTitle(car);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:pt-32">
      <nav aria-label="Brödsmulor" className="mb-6 text-sm text-muted">
        <Link href="/bilar" className="hover:text-brand">
          Bilar i lager
        </Link>{" "}
        <span aria-hidden="true">/</span>{" "}
        <span className="text-ink">
          {title} {car.year}
        </span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        {/* ── Gallery + description ── */}
        <div>
          <Reveal>
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-carbon shadow-card">
              <Image
                src={car.images[0]}
                alt={`${title} ${car.year}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
            {car.images.length > 1 && (
              <div className="mt-3 grid grid-cols-2 gap-3">
                {car.images.slice(1, 3).map((src, i) => (
                  <div
                    key={src + i}
                    className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-carbon"
                  >
                    <Image
                      src={src}
                      alt={`${title} — bild ${i + 2}`}
                      fill
                      sizes="(max-width: 1024px) 50vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </Reveal>

          <Reveal delay={100}>
            <h2 className="font-display mt-10 text-2xl font-semibold text-ink">
              Om bilen
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted">
              {car.description}
            </p>

            <h3 className="font-display mt-8 text-lg font-semibold text-ink">
              Utrustning i urval
            </h3>
            <ul className="mt-3 grid max-w-2xl gap-x-8 gap-y-2 sm:grid-cols-2">
              {car.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2.5 text-sm text-ink/80"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                  />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* ── Price card + interest form ── */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Reveal delay={150}>
            <div className="surface-carbon rounded-3xl p-7">
              <h1 className="font-display text-2xl font-semibold tracking-tight text-pearl">
                {title}
              </h1>
              {car.variant && (
                <p className="mt-1 text-sm text-silver/80">{car.variant}</p>
              )}
              <p className="font-display mt-4 text-3xl font-semibold text-pearl">
                {formatPrice(car.priceSek)}
              </p>

              <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-white/15 pt-6">
                <div>
                  <dt className={specLabel}>Årsmodell</dt>
                  <dd className={specValue}>{car.year}</dd>
                </div>
                <div>
                  <dt className={specLabel}>Mätarställning</dt>
                  <dd className={specValue}>{formatMileage(car.mileageMil)}</dd>
                </div>
                <div>
                  <dt className={specLabel}>Drivmedel</dt>
                  <dd className={specValue}>{car.fuel}</dd>
                </div>
                <div>
                  <dt className={specLabel}>Växellåda</dt>
                  <dd className={specValue}>{car.gearbox}</dd>
                </div>
                <div>
                  <dt className={specLabel}>Kaross</dt>
                  <dd className={specValue}>{car.bodyType}</dd>
                </div>
                <div>
                  <dt className={specLabel}>Märke</dt>
                  <dd className={specValue}>{car.brand}</dd>
                </div>
              </dl>

              <p className="mt-6 rounded-xl bg-white/10 px-4 py-3 text-xs leading-relaxed text-silver/80">
                Finansiering och inbyte? Det löser vi — nämn det i meddelandet
                eller ring {site.phone}.
              </p>

              {car.blocketUrl && (
                <a
                  href={car.blocketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-xs font-medium text-silver/70 underline underline-offset-4 hover:text-pearl"
                >
                  Se annonsen på Blocket ↗
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={250}>
            <div
              id="intresse"
              className="surface-plate-strong mt-6 rounded-3xl p-7"
            >
              <h2 className="font-display text-xl font-semibold text-ink">
                Jag är intresserad
              </h2>
              <p className="mb-6 mt-1.5 text-sm text-muted">
                Skicka en förfrågan så återkommer vi — normalt inom en
                arbetsdag.
              </p>
              <InterestForm
                carSlug={car.slug}
                carLabel={`${title} ${car.year}`}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
