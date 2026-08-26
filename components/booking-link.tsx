'use client';

import { ReactNode } from 'react';

type BookingLinkProps = {
  serviceId: string;
  className?: string;
  children?: ReactNode;
};

export function BookingLink({ serviceId, className, children = 'Boka' }: BookingLinkProps) {
  function selectService() {
    window.dispatchEvent(new CustomEvent('oskar-book-service', { detail: serviceId }));
  }

  return <a href="#kontakt" onClick={selectService} className={className}>{children}</a>;
}
