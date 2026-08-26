import Image from 'next/image';
import { BookingForm } from '@/components/booking-form';
import { PriceList } from '@/components/price-list';
import { SiteHeader } from '@/components/site-header';
import { company, phoneLink } from '@/lib/company';
import { activeServices, priceLabel } from '@/lib/services';

const imageSizes = '(max-width: 1024px) 100vw, 50vw';
const featuredServices = activeServices.slice(0, 3);
const priceHighlights = activeServices.filter((service) => ['utvandig-tvatt', 'bronstvatt', 'helrekond-1', 'keramiskt-brons'].includes(service.id));

const structuredData = {
  '@context': 'https://schema.org', '@type': 'AutoRepair', name: company.name,
  telephone: company.phone, email: company.email,
  address: { '@type': 'PostalAddress', streetAddress: company.address.street, postalCode: company.address.postalCode, addressLocality: company.address.locality, addressCountry: 'SE' },
  openingHours: ['Mo-Fr 08:00-17:00', 'Sa 10:00-18:00'], sameAs: [company.facebook],
};

export default function Home() {
  const address = <>{company.address.street}<br />{company.address.postalCode} {company.address.locality}</>;

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <SiteHeader />
    <main id="start">
      <section className="mx-auto grid max-w-[1536px] border-x border-stone-200 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]" aria-labelledby="hero-title">
        <div className="flex min-h-[430px] flex-col justify-center px-7 py-16 sm:px-14 lg:min-h-[445px] lg:px-27">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#922727]">Bilvård &amp; rekond i Kristinehamn</p>
          <h1 id="hero-title" className="mt-6 max-w-[520px] text-[42px] font-bold leading-[1.12] tracking-[-0.04em] text-[#202126] sm:text-[52px]">Bilvård i Kristinehamn</h1>
          <span className="mt-6 h-0.5 w-12 bg-[#922727]" aria-hidden="true" />
          <p className="mt-6 max-w-[460px] text-[15px] leading-6 text-stone-600">Vi hjälper dig att hålla bilen ren, fräsch och välvårdad. Handtvätt, rekond och lackvård med omsorg om varje detalj.</p>
          <div className="mt-8 flex flex-wrap gap-4"><a className="inline-flex min-h-10 items-center justify-center bg-[#922727] px-7 text-sm font-bold text-white transition hover:bg-[#721e1e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#922727]" href="#kontakt">Boka tid</a><a className="inline-flex min-h-10 items-center justify-center border border-[#3a3a3c] px-7 text-sm font-bold text-[#25252a] transition hover:bg-[#25252a] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#922727]" href={phoneLink}>Ring oss</a></div>
          <p className="mt-8 text-sm text-stone-600">{company.address.street}, {company.address.locality}</p>
        </div>
        <div className="relative min-h-[320px] bg-stone-300 sm:min-h-[430px] lg:min-h-[445px]"><Image src="/images/oskar-truck-exterior.png" alt="Nytvättad pickup hos Oskar Bilvård" fill priority sizes={imageSizes} className="object-cover object-[53%_54%]" /></div>
      </section>

      <section className="border-y border-stone-300 bg-white" aria-label="Praktisk information"><div className="mx-auto grid max-w-[1536px] divide-y divide-stone-200 px-7 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-27"><div className="py-5 sm:px-0 sm:pr-8"><p className="text-lg leading-none tracking-[0.08em] text-[#922727]">★★★★★</p><p className="mt-2 text-sm font-bold text-[#25252a]">100 % rekommenderar</p><p className="mt-1 text-xs text-stone-600">Baserat på 16 recensioner på Facebook</p></div><div className="py-5 sm:px-8"><p className="text-sm font-bold text-[#25252a]">{company.address.street}, {company.address.postalCode} {company.address.locality}</p><p className="mt-1 text-xs text-stone-600">Vardagar 08:00–17:00 · Lördag 10:00–18:00</p></div><div className="py-5 sm:px-8"><a className="text-sm font-bold text-[#25252a] hover:text-[#922727]" href={phoneLink}>{company.phone}</a><a className="mt-1 block text-xs text-stone-600 hover:text-[#922727]" href={`mailto:${company.email}`}>{company.email}</a></div></div></section>

      <section className="border-b border-stone-300 bg-[#f8f8f7]" aria-labelledby="popular-title"><div className="mx-auto max-w-[1320px] px-7 py-11 lg:px-10"><div className="flex flex-wrap items-end justify-between gap-5"><div><h2 id="popular-title" className="text-2xl font-bold tracking-[-0.03em] text-[#25252a]">Populära behandlingar</h2><p className="mt-2 text-sm text-stone-600">Tydliga priser där de är publicerade.</p></div><a className="text-sm font-bold text-[#922727] hover:underline" href="#priser">Se alla priser →</a></div><div className="mt-7 grid border-y border-stone-300 sm:grid-cols-2 lg:grid-cols-4 sm:divide-x sm:divide-stone-300">{priceHighlights.map((service) => <a key={service.id} href="#priser" className="group border-b border-stone-300 py-5 last:border-b-0 sm:px-6 sm:first:pl-0 lg:border-b-0"><p className="text-sm font-bold text-[#25252a] group-hover:text-[#922727]">{service.name}</p><p className="mt-2 text-xl font-semibold tracking-[-0.03em] text-[#25252a]">{priceLabel(service)}</p>{service.suvPrice ? <p className="mt-1 text-xs text-stone-600">{service.suvPrice}</p> : null}</a>)}</div></div></section>

      <section className="mx-auto max-w-[1320px] px-7 py-16 lg:px-10 lg:py-20" id="tjanster" aria-labelledby="services-title"><div className="max-w-xl"><p className="text-xs font-semibold uppercase tracking-wide text-[#922727]">Våra tjänster</p><h2 id="services-title" className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#25252a] sm:text-4xl">Rätt behandling för din bil</h2><span className="mt-5 block h-0.5 w-10 bg-[#922727]" aria-hidden="true" /><p className="mt-5 text-[15px] leading-6 text-stone-600">Från en noggrann handtvätt till komplett rekond. Se vad som ingår och boka den behandling som passar bäst.</p></div><div className="mt-10 grid gap-8 md:grid-cols-3">{featuredServices.map((service) => <article key={service.id} className="border-b border-stone-300 pb-6"><div className="relative aspect-[16/9] overflow-hidden bg-stone-200"><Image src={service.image} alt={service.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center transition duration-500 hover:scale-[1.03]" /></div><h3 className="mt-5 text-lg font-bold text-[#25252a]">{service.name}</h3><p className="mt-2 text-sm leading-6 text-stone-600">{service.shortDescription}</p><a className="mt-4 inline-block text-xs font-bold uppercase tracking-wide text-[#922727] hover:underline" href="#priser">Läs mer →</a></article>)}</div></section>

      <PriceList />

      <section className="border-y border-stone-300 bg-white" id="om-oss" aria-labelledby="about-title"><div className="mx-auto grid max-w-[1320px] md:grid-cols-2"><div className="relative min-h-[340px] bg-stone-300"><Image src="/images/oskar-truck-rear-interior.png" alt="Rengjord bilinteriör hos Oskar Bilvård" fill sizes={imageSizes} className="object-cover object-center" /></div><div className="flex items-center px-7 py-16 lg:px-18"><div className="max-w-md"><p className="text-xs font-semibold uppercase tracking-wide text-[#922727]">Om Oskar Bilvård</p><h2 id="about-title" className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#25252a]">Lokalt och personligt</h2><span className="mt-5 block h-0.5 w-10 bg-[#922727]" aria-hidden="true" /><p className="mt-5 text-[15px] leading-6 text-stone-600">Oskar Bilvård i Kristinehamn hjälper dig att ta hand om bilen, både inuti och utanpå. Vi fokuserar på ett noggrant resultat och ett smidigt bemötande.</p><a className="mt-6 inline-block text-sm font-bold text-[#922727] hover:underline" href={company.facebook} target="_blank" rel="noreferrer">Följ oss på Facebook →</a></div></div></div></section>

      <section className="mx-auto grid max-w-[1320px] gap-12 px-7 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-20" id="kontakt" aria-labelledby="contact-title"><div><p className="text-xs font-semibold uppercase tracking-wide text-[#922727]">Kontakt &amp; bokning</p><h2 id="contact-title" className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#25252a] sm:text-4xl">Boka en tid</h2><span className="mt-5 block h-0.5 w-10 bg-[#922727]" aria-hidden="true" /><p className="mt-5 max-w-sm text-[15px] leading-6 text-stone-600">Ring oss eller skicka en förfrågan så återkommer vi för att hitta en tid som passar.</p><dl className="mt-8 space-y-5 border-t border-stone-300 pt-6 text-sm"><div><dt className="text-xs font-semibold uppercase tracking-wide text-stone-500">Besök oss</dt><dd className="mt-1 leading-6 text-[#25252a]">{address}</dd></div><div><dt className="text-xs font-semibold uppercase tracking-wide text-stone-500">Öppettider</dt><dd className="mt-1 leading-6 text-[#25252a]">{company.openingHours.map((hour) => <span key={hour} className="block">{hour}</span>)}</dd></div></dl><div className="mt-7 flex flex-wrap gap-x-5 gap-y-3"><a className="text-sm font-bold text-[#922727] hover:underline" href={phoneLink}>Ring {company.phone}</a><a className="text-sm font-bold text-[#922727] hover:underline" href={company.directions} target="_blank" rel="noreferrer">Vägbeskrivning →</a></div></div><BookingForm /></section>
    </main>
    <footer className="bg-black px-7 pb-24 pt-10 text-stone-300 lg:px-10 lg:pb-10"><div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-8 text-sm sm:flex-row sm:items-end"><div><p className="text-base font-bold tracking-[0.08em] text-white">OSKAR</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-stone-300">Bilvård</p></div><div className="sm:text-center"><a className="block hover:text-white" href={company.facebook} target="_blank" rel="noreferrer">Facebook</a><a className="mt-2 block hover:text-white" href={`mailto:${company.email}`}>{company.email}</a></div><p className="text-stone-400">© {new Date().getFullYear()} Oskar Bilvård</p></div></footer>
    <nav className="fixed inset-x-0 bottom-0 z-30 grid h-14 grid-cols-3 bg-black text-center text-[11px] font-bold text-white shadow-[0_-7px_25px_rgba(0,0,0,.18)] lg:hidden" aria-label="Snabb kontakt"><a className="border-r border-white/15 py-4" href={phoneLink}>Ring</a><a className="border-r border-white/15 py-4" href="#kontakt">Boka</a><a className="py-4" href={company.directions} target="_blank" rel="noreferrer">Vägbeskrivning</a></nav>
  </>;
}
