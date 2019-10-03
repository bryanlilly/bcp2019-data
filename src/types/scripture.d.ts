declare interface IScripture {
    text: string,
    ref: boolean | string
}

declare type Scripture = IScripture;

declare namespace Scripture {
    interface DailyOffice {
        [propName: string]: Scripture[]
    }
}