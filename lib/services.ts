export type ServiceCategoryId = 'tvatt' | 'helrekond' | 'keramiskt' | 'ovrigt' | 'dack';

export type Service = {
  id: string;
  category: ServiceCategoryId;
  name: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  fromPrice: boolean;
  suvPrice?: string;
  priceNote?: string;
  included: readonly string[];
  treatmentTime?: string;
  guarantee?: string;
  image: string;
  active: boolean;
  order: number;
  popular: boolean;
};

export const serviceCategories = [
  { id: 'tvatt', name: 'Tvätt', description: 'Utvändig och invändig tvätt med tydliga priser.' },
  { id: 'helrekond', name: 'Helrekonditionering', description: 'När bilen behöver ett mer komplett omhändertagande.' },
  { id: 'keramiskt', name: 'Keramiskt lackskydd', description: 'Långvarigt skydd och finish för lacken.' },
  { id: 'ovrigt', name: 'Övrig bilvård', description: 'Kompletterande behandlingar för bilens interiör och lack.' },
  { id: 'dack', name: 'Däck', description: 'Däckservice och däckhotell.' },
] as const;

export const services = [
  {
    id: 'utvandig-tvatt', category: 'tvatt', name: 'Utvändig tvätt',
    shortDescription: 'Utvändig tvätt för en renare bil.', fullDescription: 'Utvändig tvätt för bilen.',
    price: '195 kr', fromPrice: false, suvPrice: 'SUV: 250 kr', included: [], image: '/images/oskar-truck-exterior.png', active: true, order: 1, popular: true,
  },
  {
    id: 'utvandig-tvatt-asfalt', category: 'tvatt', name: 'Utvändig tvätt med asfaltborttagning',
    shortDescription: 'Utvändig tvätt med asfaltborttagning.', fullDescription: 'Utvändig tvätt inklusive asfaltborttagning.',
    price: '400 kr', fromPrice: false, suvPrice: 'SUV: 500 kr', included: ['Asfaltborttagning'], image: '/images/oskar-truck-exterior.png', active: true, order: 2, popular: false,
  },
  {
    id: 'bronstvatt', category: 'tvatt', name: 'Bronstvätt',
    shortDescription: 'Noggrann handtvätt in- och utvändigt.', fullDescription: 'En komplett handtvätt för både utsida och insida.',
    price: '400 kr', fromPrice: false, suvPrice: 'SUV / 7-sits: 450 kr', included: ['Utvändig handtvätt', 'Invändig handtvätt', 'Avfettning', 'Fälgrengöring', 'Däcktvätt', 'Fönsterputs', 'Torkning'], image: '/images/oskar-truck-exterior.png', active: true, order: 3, popular: true,
  },
  {
    id: 'silvertvatt', category: 'tvatt', name: 'Silvertvätt',
    shortDescription: 'Handtvätt med asfaltborttagning.', fullDescription: 'En mer omfattande handtvätt med asfaltborttagning.',
    price: '600 kr', fromPrice: false, suvPrice: 'SUV / 7-sits: 700 kr', included: ['Utvändig handtvätt', 'Invändig handtvätt', 'Avfettning', 'Fälgrengöring', 'Däcktvätt', 'Asfaltborttagning', 'Fönsterputs', 'Torkning'], image: '/images/oskar-truck-exterior.png', active: true, order: 4, popular: false,
  },
  {
    id: 'guldtvatt', category: 'tvatt', name: 'Guldtvätt',
    shortDescription: 'Den mest omfattande tvätten, inklusive motortvätt.', fullDescription: 'En komplett tvätt för både in- och utsida, inklusive motortvätt.',
    price: '800 kr', fromPrice: false, suvPrice: 'SUV / 7-sits: 900 kr', included: ['Utvändig handtvätt', 'Invändig handtvätt', 'Avfettning', 'Fälgrengöring', 'Däcktvätt', 'Asfaltborttagning', 'Motortvätt', 'Fönsterputs', 'Torkning'], image: '/images/oskar-truck-rear.png', active: true, order: 5, popular: false,
  },
  {
    id: 'helrekond-1', category: 'helrekond', name: 'Helrekonditionering nr 1',
    shortDescription: 'Polering, vaxning och invändig samt utvändig rengöring.', fullDescription: 'En komplett helrekond med rengöring, polering och vaxning.',
    price: '2 500 kr', fromPrice: true, included: ['Polering', 'Vaxning', 'Invändig rengöring', 'Utvändig rengöring'], image: '/images/oskar-truck-exterior.png', active: true, order: 6, popular: true,
  },
  {
    id: 'helrekond-2', category: 'helrekond', name: 'Helrekonditionering nr 2',
    shortDescription: 'Helrekond med lackförsegling och motortvätt.', fullDescription: 'En mer omfattande helrekond med lackförsegling och motortvätt.',
    price: '3 000 kr', fromPrice: true, included: ['Polering', 'Vaxning', 'Invändig rengöring', 'Utvändig rengöring', 'Lackförsegling', 'Motortvätt'], image: '/images/oskar-truck-exterior.png', active: true, order: 7, popular: false,
  },
  {
    id: 'keramiskt-brons', category: 'keramiskt', name: 'Brons – keramiskt lackskydd',
    shortDescription: 'Enstegs keramiskt lackskydd med 18 månaders garanti.', fullDescription: 'Keramiskt lackskydd i Brons-nivå.',
    price: '3 999 kr', fromPrice: false, included: ['Guldtvätt', 'Premium+ polering', 'Enstegs keramiskt lackskydd'], treatmentTime: '24 h', guarantee: '18 månader', image: '/images/vax-v2.png', active: true, order: 8, popular: true,
  },
  {
    id: 'keramiskt-silver', category: 'keramiskt', name: 'Silver – keramiskt lackskydd',
    shortDescription: 'Tvåstegs keramiskt lackskydd med 24 månaders garanti.', fullDescription: 'Keramiskt lackskydd i Silver-nivå.',
    price: '4 999 kr', fromPrice: false, included: ['Guldtvätt', 'Premium+ polering', 'Tvåstegs keramiskt lackskydd'], treatmentTime: '36 h', guarantee: '24 månader', image: '/images/vax-v2.png', active: true, order: 9, popular: false,
  },
  {
    id: 'keramiskt-guld', category: 'keramiskt', name: 'Guld – keramiskt lackskydd',
    shortDescription: 'Trestegs keramiskt lackskydd med 36 månaders garanti.', fullDescription: 'Keramiskt lackskydd i Guld-nivå.',
    price: '5 999 kr', fromPrice: false, included: ['Guldtvätt', 'Premium+ polering', 'Trestegs keramiskt lackskydd'], treatmentTime: '36 h', guarantee: '36 månader', image: '/images/vax-v2.png', active: true, order: 10, popular: false,
  },
  {
    id: 'lackforsegling', category: 'ovrigt', name: 'Lackförsegling',
    shortDescription: 'Skyddande lackförsegling.', fullDescription: 'Lackförsegling för bilen.',
    price: '1 100 kr', fromPrice: true, included: [], image: '/images/vax-v2.png', active: true, order: 11, popular: false,
  },
  {
    id: 'kemtvatt-saten', category: 'ovrigt', name: 'Kemtvätt säten',
    shortDescription: 'Kemtvätt av bilens säten.', fullDescription: 'Kemtvätt av säten.',
    price: '700 kr', fromPrice: true, included: [], image: '/images/oskar-truck-front-interior.png', active: true, order: 12, popular: false,
  },
  {
    id: 'kemtvatt-golv', category: 'ovrigt', name: 'Kemtvätt golv',
    shortDescription: 'Kemtvätt av bilens golv.', fullDescription: 'Kemtvätt av golv.',
    price: '500 kr', fromPrice: true, included: [], image: '/images/oskar-truck-rear-interior.png', active: true, order: 13, popular: false,
  },
  {
    id: 'kemtvatt-tak', category: 'ovrigt', name: 'Kemtvätt tak',
    shortDescription: 'Kemtvätt av bilens tak.', fullDescription: 'Kemtvätt av tak.',
    price: '500 kr', fromPrice: true, included: [], image: '/images/oskar-truck-front-interior.png', active: true, order: 14, popular: false,
  },
  {
    id: 'dackbyte-bultsmorjning', category: 'dack', name: 'Däckbyte inkl. bultsmörjning',
    shortDescription: 'Däckbyte med bultsmörjning.', fullDescription: 'Däckbyte inklusive bultsmörjning.',
    price: '300 kr', fromPrice: false, included: ['Bultsmörjning'], image: '/images/oskar-truck-exterior.png', active: true, order: 15, popular: false,
  },
  {
    id: 'dackbyte-hotell', category: 'dack', name: 'Däckbyte inkl. däcktvätt och däckhotell',
    shortDescription: 'Däckbyte med däcktvätt och däckhotell.', fullDescription: 'Däckbyte inklusive däcktvätt och däckhotell.',
    price: '700 kr', fromPrice: false, included: ['Däcktvätt', 'Däckhotell'], image: '/images/oskar-truck-exterior.png', active: true, order: 16, popular: false,
  },
  {
    id: 'dackhotell', category: 'dack', name: 'Däckhotell',
    shortDescription: 'Förvaring av dina däck.', fullDescription: 'Däckhotell för dina däck.',
    price: '400 kr', fromPrice: false, included: [], image: '/images/oskar-truck-exterior.png', active: true, order: 17, popular: false,
  },
  {
    id: 'dacktvatt', category: 'dack', name: 'Däcktvätt',
    shortDescription: 'Rengöring av däcken.', fullDescription: 'Däcktvätt.',
    price: '150 kr', fromPrice: false, included: [], image: '/images/oskar-truck-exterior.png', active: true, order: 18, popular: false,
  },
] as const satisfies readonly Service[];

export const activeServices: readonly Service[] = services.filter((service) => service.active).sort((a, b) => a.order - b.order);
export const popularServices = activeServices.filter((service) => service.popular);
export const getService = (id: string) => activeServices.find((service) => service.id === id);
export const priceLabel = (service: Service) => `${service.fromPrice ? 'Från ' : ''}${service.price}`;
