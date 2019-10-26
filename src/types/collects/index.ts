export interface Collect {
    id: number | string;
    title: string;
    text: string;
}

export interface DailyOfficeCollects {
    daily: Collect[];
    saturday?: Collect;
    missions?: Collect[];
}
