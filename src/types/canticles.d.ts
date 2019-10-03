declare interface ICanticle {
    id: string,
    title: string,
    englishTitle: string,
    scriptureRef: boolean | string,
    text: ICanticleVersicle[]
}

declare type Canticle = ICanticle;