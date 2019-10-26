interface Scripture {
    text: string;
    ref: boolean | string;
}

type Scriptures = Scripture[];

export namespace Scripture {
    export interface Seasonal {
        advent?: Scripture | Scriptures;
        christmas?: Scripture | Scriptures;
        epiphany?: Scripture | Scriptures;
        lent?: Scripture | Scriptures;
        holyweek?: Scripture | Scriptures;
        easter?: Scripture | Scriptures;
        easterToAscension?: Scripture | Scriptures;
        ascension?: Scripture | Scriptures;
        ascensionToPentecost?: Scripture | Scriptures;
        pentecost?: Scripture | Scriptures;
        trinity?: Scripture | Scriptures;
        thanksgiving?: Scripture | Scriptures;
        anyseason?: Scripture | Scriptures;

    }
    export interface DailyOffice {
        opening: false | {
            default: null | Scriptures;
            supplemental: Scripture.Seasonal;
        };
        closing: false | Scriptures;
    }
}
