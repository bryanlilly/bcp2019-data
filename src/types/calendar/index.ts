export namespace Calendar {
    export const enum Seasons {
        ADVENT = 0,
        CHRISTMAS,
        EPIPHANY,
        LENT,
        EASTER,
        PENTECOST,
        ORDINARY
    }

    export const enum Colors {
        PURPLE = 0,
        RED,
        WHITE,
        PINK,
        GREEN
    }

    export const enum ColorBridge {
        ADVENT = Colors.PURPLE,
        THIRDADVENT = Colors.PINK,
        FOURTHADVENT = Colors.PINK,
        CHRISTMAS = Colors.WHITE,
        EPIPHANY = Colors.WHITE,
        LENT = Colors.PURPLE,
        PASSIONSUNDAY = Colors.RED,
        GOODFRIDAY = Colors.RED,
        EASTER = Colors.WHITE,
        PENTECOST = Colors.RED,
        ORDINARY = Colors.GREEN,
    }

    export const enum FeastType {
        PRINCIPAL = 0,
        HOLY_DAY, // aka 'red-letter days'
        MARTYR, // start aka 'black-letter-days
        MISSIONARY_EVANGELIST,
        TEACHER_OF_FAITH,
        MONASTIC_RELIGIOUS,
        PASTOR,
        ECUMENIST,
        REFORMER_OF_THE_CHURCH,
        RENEWER_OF_SOCIETY,
        SAINT,
        NATIONAL
    }
    export enum FeastTypeWeights {
        PRINCIPAL = 0,
        HOLY_DAY = 1,
        ANGLICAN = 2,
        ECUMENICAL = 3
    }

    export interface RedLetterCommemoration {
        isRedLetter: true;
        weight: FeastTypeWeights.PRINCIPAL | FeastTypeWeights.HOLY_DAY;
        title: string;
        shortTitle?: string;
        type: FeastType | FeastType[];
        color: Colors;
    }

    export interface BlackLetterCommemoration {
        isRedLetter: false;
        weight: FeastTypeWeights.ANGLICAN | FeastTypeWeights.ECUMENICAL;
        name: string;
        office: string | null;
        death?: number[];
        type: FeastType | FeastType[];
        color: Colors;
    }

    export type Commemoration = RedLetterCommemoration | BlackLetterCommemoration;

    export interface Day {
        id: number;
        isFeastDay: boolean;
        // hasOptionalCelebrations?: boolean,
        hasOptionalFeast: boolean;
        season?: Seasons;
        color?: null | Colors;
        commemorations: null | Commemoration[];
    }

    export interface Month {
        id: string;
        name: string;
        days: {
            [day: number]: Calendar.Day;
        };
    }

    export interface Year {
        [month: number]: Calendar.Month;
    }
    // export interface Year  {
    //     [month: string]: Calendar.Month
    // }
}