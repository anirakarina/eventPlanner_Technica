import type { DocumentData } from 'firebase/firestore';
//import type {workshop} from '../types/workshop.ts';

export type calendar = {
  day: string;
  // workshops: DocumentData[];
  workshops: any[];
}