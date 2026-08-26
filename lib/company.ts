export const company = {
  name: 'Oskar Bilvård',
  phone: '0790-44 44 06',
  phoneHref: '+46790444406',
  email: 'oskarbilvard@gmail.com',
  address: {
    street: 'Vegagatan 3',
    postalCode: '681 42',
    locality: 'Kristinehamn'
  },
  openingHours: ['Måndag–fredag 08:00–17:00', 'Lördag 10:00–18:00'],
  facebook: 'https://www.facebook.com/people/Oskar-bilv%C3%A5rd/61563067086749/',
  directions: 'https://www.google.com/maps/search/?api=1&query=Vegagatan+3,+681+42+Kristinehamn'
} as const;

export const phoneLink = `tel:${company.phoneHref}`;
