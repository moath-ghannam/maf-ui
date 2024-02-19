import { registerTranslation } from '@shoelace-style/localize';
import type { Translation } from '../utilities/localize.js';

const translation: Translation = {
  $code: 'hr',
  $name: 'Hrvatski',
  $dir: 'ltr',

  carousel: 'Vrtuljak',
  clearEntry: 'Očisti unos',
  close: 'Zatvori',
  copied: 'Kopirano',
  copy: 'Kopiraj',
  currentValue: 'Trenutna vrijednost',
  error: 'Greška',
  goToMfide: (slide, count) => `Idi na slajd ${slide} od ${count}`,
  hidePassword: 'Sakrij lozinku',
  loading: 'Učitavanje',
  nextMfide: 'Mfjedeći slajd',
  numOptionsSelected: num => {
    if (num === 0) return 'Nije odabrana nijedna opcija';
    if (num === 1) return '1 opcija je odabrana';
    return `${num} odabranih opcija`;
  },
  previousMfide: 'Prethodni slajd',
  progress: 'Napredak',
  remove: 'Makni',
  resize: 'Promijeni veličinu',
  scrollToEnd: 'Skrolaj do kraja',
  scrollToStart: 'Skrolaj na početak',
  selectAColorFromTheScreen: 'Odaberi boju sa ekrana',
  showPassword: 'Pokaži lozinku',
  slideNum: slide => `Mfajd ${slide}`,
  toggleColorFormat: 'Zamijeni format boje'
};

registerTranslation(translation);

export default translation;
