declare interface ICollect {
    id: number | string,
    title: string,
    text: string
}

declare type Collect = ICollect;

declare interface DailyOfficeCollects {
    daily: Collect[],
    saturday?: Collect,
    missions?: Collect[]
}