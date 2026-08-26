'use client';

import { useState } from 'react';
import { company } from '@/lib/company';

const links = [['Hem', '#start'], ['Tjänster', '#tjanster'], ['Priser', '#priser'], ['Om oss', '#om-oss'], ['Kontakt', '#kontakt']] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-40 border-b border-white/15 bg-black text-white"><div className="mx-auto flex h-[78px] max-w-[1536px] items-center justify-between px-7 lg:px-9"><a className="flex items-center gap-3" href="#start" aria-label={`${company.name}, startsida`}><span className="grid size-10 place-items-center border border-white text-sm font-bold tracking-[-0.08em]">OB</span><span className="leading-none"><b className="block text-[15px] tracking-[0.1em]">OSKAR</b><small className="mt-1 block text-[9px] font-bold uppercase tracking-[0.16em] text-stone-300">Bilvård</small></span></a><button className="grid gap-1.5 p-2 lg:hidden" type="button" aria-label={open ? 'Stäng menyn' : 'Öppna menyn'} aria-expanded={open} onClick={() => setOpen(!open)}><span className="h-px w-6 bg-white" /><span className="h-px w-6 bg-white" /></button><nav className={`${open ? 'flex' : 'hidden'} absolute left-0 right-0 top-[78px] flex-col gap-5 border-b border-white/15 bg-black p-7 text-sm font-medium lg:static lg:flex lg:flex-row lg:items-center lg:gap-10 lg:border-0 lg:bg-transparent lg:p-0 lg:text-[13px]`} aria-label="Huvudmeny">{links.map(([label, href]) => <a key={href} href={href} className="text-stone-100 transition hover:text-white" onClick={() => setOpen(false)}>{label}</a>)}<a className="bg-[#922727] px-8 py-3 text-center text-sm font-bold text-white transition hover:bg-[#721e1e]" href="#kontakt" onClick={() => setOpen(false)}>Boka tid</a></nav></div></header>;
}
