export const SITE = {
  name: 'Studio Dentistico Manuela Mereu',
  shortName: 'Studio Mereu',
  doctor: 'Dott.ssa Manuela Mereu',
  address: 'Viale Armando Diaz, 30, Cagliari',
  addressLocality: 'Cagliari',
  addressRegion: 'Sardegna',
  postalCode: '09125',
  phone: '+39 379 2938759',
  phoneHref: 'tel:+393792938759',
  whatsapp: 'https://wa.me/393792938759',
  whatsappMessage: 'Ciao, vorrei prenotare una visita',
  email: 'informazioni@manuelamereu.it',
  hours: 'Lun–Ven 09:00–20:00, Sab–Dom chiuso',
  hoursOpen: '09:00',
  hoursClose: '20:00',
  hoursDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  url: 'https://www.manuelamereu.it',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Servizi', href: '/servizi' },
  { label: 'Chi Siamo', href: '/chi-siamo' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contatti', href: '/contatti' },
] as const;
