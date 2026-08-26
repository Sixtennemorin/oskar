export type ServiceCategoryId = 'utvandig' | 'invandig' | 'rekond' | 'lackvard' | 'tillval';

export type Service = {
  id: string;
  category: ServiceCategoryId;
  name: string;
  shortDescription: string;
  fullDescription: string;
  price: string | null;
  fromPrice: boolean;
  priceNote?: string;
  included: readonly string[];
  image: string;
  active: boolean;
  order: number;
  popular: boolean;
};

export const serviceCategories = [
  { id: 'utvandig', name: 'Utvändig bilvård', description: 'För en ren och väl omhändertagen utsida.' },
  { id: 'invandig', name: 'Invändig bilvård', description: 'För kupén och bilens interiöra ytor.' },
  { id: 'rekond', name: 'Rekond', description: 'När bilen behöver lite extra omsorg.' },
  { id: 'lackvard', name: 'Lackvård', description: 'För rengjord och vaxad finish.' },
  { id: 'tillval', name: 'Tillval', description: 'Komplettera din behandling med extra glans och finish.' }
] as const;

export const services = [
  {
    id: 'handtvatt',
    category: 'utvandig',
    name: 'Handtvätt',
    shortDescription: '100 % handtvätt.',
    fullDescription: 'En handtvätt för dig som vill lämna in bilen för utvändig rengöring.',
    price: '195 kr',
    fromPrice: true,
    priceNote: 'Slutpris kan variera beroende på bilens storlek och skick.',
    included: ['100 % handtvätt'],
    image: '/images/oskar-truck-exterior.png',
    active: true,
    order: 1,
    popular: true
  },
  {
    id: 'biltvatt',
    category: 'utvandig',
    name: 'Biltvätt',
    shortDescription: 'Utvändig biltvätt för din bil.',
    fullDescription: 'Biltvätt anpassad efter bilen och den behandling du vill ha.',
    price: null,
    fromPrice: false,
    priceNote: 'Kontakta oss för pris och för att stämma av omfattningen.',
    included: ['Biltvätt'],
    image: '/images/oskar-truck-rear.png',
    active: true,
    order: 2,
    popular: false
  },
  {
    id: 'invandig-bilvard',
    category: 'invandig',
    name: 'Invändig bilvård',
    shortDescription: 'Bilvård för kupén och interiören.',
    fullDescription: 'Vi hjälper dig med bilvård för bilens insida.',
    price: null,
    fromPrice: false,
    priceNote: 'Kontakta oss för pris och för att stämma av bilens behov.',
    included: ['Bilvård av interiören'],
    image: '/images/oskar-truck-rear-interior.png',
    active: true,
    order: 3,
    popular: false
  },
  {
    id: 'komplett-helrekond',
    category: 'rekond',
    name: 'Komplett helrekond',
    shortDescription: 'Invändig och utvändig rekond med vaxning.',
    fullDescription: 'Oskar Bilvårds helrekond-paket med invändig och utvändig rekond samt hållbar vaxning.',
    price: '1 395 kr',
    fromPrice: true,
    priceNote: 'Ordinarie pris 2 790 kr. Erbjudandet kan vara tidsbegränsat.',
    included: ['Invändig & utvändig rekond', 'Schamponering', 'Avfettning', 'Flygrostborttagning', 'Fönsterputs', 'Anpassad däckglans', 'Glasförsegling med vax', 'Detaljerad vaxning med glans i minst 6 månader', 'Tillgång till lånebil'],
    image: '/images/oskar-truck-exterior.png',
    active: true,
    order: 4,
    popular: true
  },
  {
    id: 'bilrekonditionering',
    category: 'rekond',
    name: 'Bilrekonditionering',
    shortDescription: 'Bilvård med fokus på bilens helhetskänsla.',
    fullDescription: 'Rekonditionering för bilen när den behöver mer än en vanlig tvätt.',
    price: null,
    fromPrice: false,
    priceNote: 'Kontakta oss för pris och en bedömning av din bil.',
    included: ['Bilrekonditionering'],
    image: '/images/oskar-truck-front-interior.png',
    active: true,
    order: 5,
    popular: false
  },
  {
    id: 'rengoring-vax',
    category: 'lackvard',
    name: 'Rengöring & vax',
    shortDescription: 'Rengjord och vaxad med omsorg om finishen.',
    fullDescription: 'En behandling för en rengjord och vaxad bil.',
    price: null,
    fromPrice: false,
    priceNote: 'Kontakta oss för pris och för att stämma av behandlingen.',
    included: ['Rengöring', 'Vaxning'],
    image: '/images/vax-v2.png',
    active: true,
    order: 6,
    popular: false
  },
  { id: 'motortvatt', category: 'tillval', name: 'Motortvätt', shortDescription: 'Tillval till din behandling.', fullDescription: 'Motortvätt för alla bilstorlekar.', price: '400 kr', fromPrice: false, included: ['Gäller alla bilstorlekar'], image: '/images/oskar-truck-exterior.png', active: true, order: 7, popular: false },
  { id: 'kemtvatt', category: 'tillval', name: 'Kemtvätt', shortDescription: 'Textilrengöring som tillval.', fullDescription: 'Kemtvätt med textilrengöring för alla bilstorlekar.', price: '600 kr', fromPrice: false, included: ['Textilrengöring', 'Gäller alla bilstorlekar'], image: '/images/oskar-truck-rear-interior.png', active: true, order: 8, popular: false },
  { id: 'grovpolering', category: 'tillval', name: 'Grovpolering', shortDescription: 'Extra korrigering av repor.', fullDescription: 'Grovpolering som tillval för extra korrigering av repor.', price: '1 099 kr (personbil) / 1 299 kr (SUV/större bil)', fromPrice: false, included: ['Extra korrigering av repor'], image: '/images/vax-v2.png', active: true, order: 9, popular: false },
  { id: 'lackforsegling', category: 'lackvard', name: 'Lackförsegling', shortDescription: 'Lackförsegling med ett års hållbarhet.', fullDescription: 'Lackförsegling inklusive polering.', price: '1 599 kr (personbil) / 1 799 kr (SUV/större bil)', fromPrice: false, included: ['Inklusive polering', '1 års hållbarhet'], image: '/images/vax-v2.png', active: true, order: 10, popular: false },
  { id: 'keramiskt-brons', category: 'lackvard', name: 'Keramiskt lackskydd Brons', shortDescription: 'Ett lager keramiskt lackskydd.', fullDescription: 'Keramiskt lackskydd Brons inklusive polering.', price: '2 599 kr', fromPrice: false, included: ['1 lager', '1,5 års hållbarhet', 'Inklusive polering'], image: '/images/vax-v2.png', active: true, order: 11, popular: false },
  { id: 'keramiskt-silver', category: 'lackvard', name: 'Keramiskt lackskydd Silver', shortDescription: 'Två lager keramiskt lackskydd.', fullDescription: 'Keramiskt lackskydd Silver inklusive polering.', price: '3 599 kr', fromPrice: false, included: ['2 lager', '2 års hållbarhet', 'Inklusive polering'], image: '/images/vax-v2.png', active: true, order: 12, popular: false },
  { id: 'keramiskt-guld', category: 'lackvard', name: 'Keramiskt lackskydd Guld', shortDescription: 'Tre lager keramiskt lackskydd.', fullDescription: 'Keramiskt lackskydd Guld inklusive polering.', price: '4 599 kr', fromPrice: false, included: ['3 lager', '3 års hållbarhet', 'Inklusive polering'], image: '/images/vax-v2.png', active: true, order: 13, popular: false }
] as const satisfies readonly Service[];

export const activeServices: readonly Service[] = services.filter((service) => service.active).sort((a, b) => a.order - b.order);
export const popularServices = activeServices.filter((service) => service.popular);
export const getService = (id: string) => activeServices.find((service) => service.id === id);
export const priceLabel = (service: Service) => service.price ? `${service.fromPrice ? 'Från ' : ''}${service.price}` : 'Kontakta oss för pris';
