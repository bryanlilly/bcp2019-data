declare interface IVersicle {
    speaker: string,
    text: string
}
declare interface ICanticleVersicle {
    v: string,
    r: string
}
declare interface IResponse extends IVersicle {}
declare type VersicleAndResponse = IVersicle | IResponse;
declare type VersicleLike = VersicleAndResponse[];
