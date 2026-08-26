'use client';

import { FormEvent, useEffect, useState } from 'react';
import { activeServices, getService } from '@/lib/services';

export function BookingForm() {
  const [status, setStatus] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(activeServices[0].id);
  const selectedService = getService(selectedServiceId) ?? activeServices[0];

  useEffect(() => {
    function updateSelectedService(event: Event) {
      const service = getService((event as CustomEvent<string>).detail);
      if (service) {
        setSelectedServiceId(service.id);
        setStatus('');
      }
    }

    window.addEventListener('oskar-book-service', updateSelectedService);
    return () => window.removeEventListener('oskar-book-service', updateSelectedService);
  }, []);

  function showRequiredMessage(event: React.InvalidEvent<HTMLInputElement>) {
    event.currentTarget.setCustomValidity('Fyll i detta fält.');
  }

  function clearRequiredMessage(event: React.FormEvent<HTMLInputElement>) {
    event.currentTarget.setCustomValidity('');
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus(`Tack! Din förfrågan gäller ${selectedService.name}. Vi återkommer så snart vi kan.`);
    form.reset();
  }

  return (
    <form onSubmit={submit} className="bg-white p-6 shadow-[0_18px_45px_rgba(16,24,28,0.09)] sm:p-8" noValidate>
      <h3 className="font-serif text-3xl tracking-[-0.05em]">Skicka en förfrågan</h3>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="Namn"><input required name="name" autoComplete="name" placeholder="Ditt namn" onInvalid={showRequiredMessage} onInput={clearRequiredMessage} /></Field>
        <Field label="Telefonnummer"><input required name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="Ditt telefonnummer" onInvalid={showRequiredMessage} onInput={clearRequiredMessage} /></Field>
      </div>
      <p className="mt-6 border-l-2 border-[#c94738] bg-stone-50 px-3 py-2 text-sm text-slate-700"><span className="font-medium">Vald behandling:</span> {selectedService.name}</p>
      <Field label="Välj behandling"><select name="service" value={selectedServiceId} onChange={(event) => setSelectedServiceId(event.target.value)}>{activeServices.map((service) => <option key={service.id} value={service.id}>{service.name}</option>)}</select></Field>
      <Field label="Meddelande"><textarea name="message" rows={3} placeholder="Berätta gärna lite mer" /></Field>
      <button className="mt-7 flex min-h-12 w-full items-center justify-center gap-3 bg-slate-900 px-5 text-sm font-bold text-white transition hover:bg-[#c94738]" type="submit">Skicka förfrågan <span>→</span></button>
      <p className="min-h-5 pt-3 text-sm text-slate-700" role="status" aria-live="polite">{status}</p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="mt-5 block font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-slate-500">{label}<span className="mt-1.5 block [&_input]:w-full [&_input]:border-0 [&_input]:border-b [&_input]:border-stone-300 [&_input]:bg-transparent [&_input]:py-2.5 [&_input]:font-sans [&_input]:text-sm [&_input]:text-slate-900 [&_input]:outline-none [&_input:focus]:border-[#c94738] [&_select]:w-full [&_select]:border-0 [&_select]:border-b [&_select]:border-stone-300 [&_select]:bg-transparent [&_select]:py-2.5 [&_select]:font-sans [&_select]:text-sm [&_select]:text-slate-900 [&_select]:outline-none [&_textarea]:w-full [&_textarea]:resize-y [&_textarea]:border-0 [&_textarea]:border-b [&_textarea]:border-stone-300 [&_textarea]:bg-transparent [&_textarea]:py-2.5 [&_textarea]:font-sans [&_textarea]:text-sm [&_textarea]:text-slate-900 [&_textarea]:outline-none [&_textarea:focus]:border-[#c94738]">{children}</span></label>;
}
