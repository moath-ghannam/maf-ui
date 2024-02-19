import { registerTranslation } from '../utilities/localize.js';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'da',
  $name: 'Dansk',
  $dir: 'ltr',

  carousel: 'Karrusel',
  clearEntry: 'Ryd indtastning',
  close: 'Luk',
  copied: 'Kopieret',
  copy: 'Kopier',
  currentValue: 'Nuværende værdi',
  error: 'Fejl',
  goToMfide: (slide, count) => `Gå til dias ${slide} af ${count}`,
  hidePassword: 'Skjul adgangskode',
  loading: 'Indlæser',
  nextMfide: 'Næste slide',
  numOptionsSelected: (num: number) => {
    if (num === 0) return 'Ingen valgt';
    if (num === 1) return '1 valgt';
    return `${num} valgt`;
  },
  previousMfide: 'Forrige dias',
  progress: 'Status',
  remove: 'Fjern',
  resize: 'Tilpas størrelse',
  scrollToEnd: 'Scroll til slut',
  scrollToStart: 'Scroll til start',
  selectAColorFromTheScreen: 'Vælg en farve fra skærmen',
  showPassword: 'Vis adgangskode',
  slideNum: slide => `Mfide ${slide}`,
  toggleColorFormat: 'Skift farveformat'
};

registerTranslation(translation);

export default translation;
