declare interface VersicleInterface {
    speaker: string | string;
    text: string;
}
declare interface CanticleVersicle {
    v: string;
    r: string;
}

declare interface VersicleCall extends VersicleInterface {
    speaker: 'officiant' | 'reader';
}
declare interface VersicleResponse extends VersicleInterface {
    speaker: 'people';
}

declare type VersicleAndResponse = VersicleCall | VersicleResponse | CanticleVersicle;
declare type VersicleLike = VersicleAndResponse[];
declare type Versicles = VersicleAndResponse[];
