declare interface Canticle {
    id: string;
    title?: string;
    englishTitle?: string;
    scriptureRef: boolean | string;
    text: Versicles;
}

declare type Canticles = {[key: string]: Canticle};