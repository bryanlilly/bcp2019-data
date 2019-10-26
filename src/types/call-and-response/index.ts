export interface VersicleInterface {
    speaker: string | string;
    text: string;
}
export interface CanticleVersicle {
    v: string;
    r: string;
}

export interface VersicleCall extends VersicleInterface {
    speaker: 'officiant' | 'reader';
}
export interface VersicleResponse extends VersicleInterface {
    speaker: 'people';
}

export type VersicleAndResponse = VersicleCall | VersicleResponse | CanticleVersicle;
export type VersicleLike = VersicleAndResponse[];
export type Versicles = VersicleAndResponse[];
