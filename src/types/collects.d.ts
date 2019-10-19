declare interface Collect {
    id: number | string;
    title: string;
    text: string;
}

declare interface DailyOfficeCollects {
    daily: Collect[];
    saturday?: Collect;
    missions?: Collect[];
}
