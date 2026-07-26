# Studio Dentistico Manuela Mereu — sito web

Sito Astro per lo Studio Dentistico Manuela Mereu (Cagliari), in sostituzione del vecchio sito WordPress a pagina singola.

## Avvio rapido

```sh
npm install
npm run dev       # http://localhost:4321
```

```sh
npm run build     # genera il sito statico in ./dist
npm run preview   # anteprima della build di produzione
```

## Struttura del progetto

```text
src/
  content.config.ts        Schema della content collection "services"
  content/services/*.md    Un file per ciascuno degli 8 trattamenti
  data/
    site.ts                Dati reali dello studio (indirizzo, telefono, orari) — unica fonte
    faq.ts                 Domande e risposte della pagina FAQ
    service-images.ts      Mappa trattamento -> immagine (vedi nota sotto)
  components/               Componenti riutilizzabili (Header, Footer, ServiceCard, ContactForm, ...)
  layouts/BaseLayout.astro  Layout comune a tutte le pagine (SEO, header, footer, cookie banner)
  pages/                    Una route per file/cartella (home, servizi, chi-siamo, faq, contatti)
  styles/tokens.css         Design tokens: colori, tipografia, spaziature
  scripts/                  Piccoli script vanilla JS (animazioni scroll, tilt 3D, ecc.)
```

## Cose da sapere prima di modificare

- **Trattamenti**: aggiungere/modificare un servizio si fa editando `src/content/services/*.md` (contenuti) e `src/data/service-images.ts` (immagine associata). La pagina `/servizi/[slug].astro` genera automaticamente tutte le pagine dai file markdown.
- **Immagini dei trattamenti**: sono foto stock gratuite (Pexels, licenza commerciale libera), scelte perché non esistono ancora foto reali dei trattamenti dello studio. Da sostituire con foto vere non appena disponibili.
- **Foto reali dello studio**: quelle in `src/assets/images/studio/` e `team/` sono state recuperate dal vecchio sito e sono autentiche (esterno edificio, sale, ritratto della Dott.ssa Mereu, firma).
- **Form contatti**: `ContactForm.astro` valida i campi in tempo reale ma, non essendoci ancora un backend, invia i dati aprendo il client email del visitatore (mailto:) verso l'indirizzo dello studio. Se si vuole un vero invio silenzioso, va collegato un servizio come Web3Forms o Formspree.
- **Palette colori**: il turchese principale (`--teal` in `src/styles/tokens.css`) è stato campionato dal logo reale dello studio — se si cambia, verificare che resti coerente con quel colore.

## Documentazione Astro

https://docs.astro.build
