import igieneOrale from '../assets/images/services/igiene-orale.jpg';
import sbiancamento from '../assets/images/services/sbiancamento-dentale.jpg';
import pediatrica from '../assets/images/services/odontoiatria-pediatrica.jpg';
import implantologiaImg from '../assets/images/services/implantologia.jpg';
import conservativa from '../assets/images/services/conservativa-estetica.jpg';
import cosmesi from '../assets/images/services/cosmesi-dentale.jpg';
import protesi from '../assets/images/services/protesi-dentale.jpg';
import chirurgia from '../assets/images/services/chirurgia-orale.jpg';

// Foto stock a licenza libera (Pexels, uso commerciale consentito senza attribuzione)
// da sostituire in futuro con foto reali dei trattamenti dello studio, quando disponibili.
export const SERVICE_IMAGES = {
  'igiene-orale': { src: igieneOrale, alt: 'Igiene orale professionale: pulizia dei denti in studio' },
  'sbiancamento-dentale': { src: sbiancamento, alt: 'Trattamento di sbiancamento dentale con lampada professionale' },
  'odontoiatria-pediatrica': { src: pediatrica, alt: 'Controllo odontoiatrico pediatrico' },
  implantologia: { src: implantologiaImg, alt: 'Modello di impianto dentale con vite e corona' },
  'conservativa-estetica': { src: conservativa, alt: 'Trattamento conservativo con lampada polimerizzante' },
  'cosmesi-dentale': { src: cosmesi, alt: 'Applicazione di faccette estetiche per cosmesi dentale' },
  'protesi-dentale': { src: protesi, alt: 'Protesi dentale rifinita da un professionista' },
  'chirurgia-orale': { src: chirurgia, alt: 'Dentista che illustra una radiografia al paziente prima dell’intervento' },
} as const;
