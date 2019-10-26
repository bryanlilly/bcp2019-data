import { Versicles } from '../call-and-response/index';

export interface Canticle {
    id: string;
    title?: string;
    englishTitle?: string;
    scriptureRef: boolean | string;
    text: Versicles;
}

export type Canticles = {[key: string]: Canticle};