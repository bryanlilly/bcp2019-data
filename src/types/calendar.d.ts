declare namespace Calendar {
    const enum Seasons {
        ADVENT = 0,
        CHRISTMAS,
        EPIPHANY,
        LENT,
        EASTER,
        PENTECOST,
        ORDINARY
    }

    const enum Colors {
        PURPLE = 0,
        RED,
        WHITE,
        PINK,
        GREEN
    }

    const enum FeastType {
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

    enum FeastTypeWeights {
        PRINCIPAL = 0,
        HOLY_DAY = 1,
        ANGLICAN = 2,
        ECUMENICAL = 3
    }

    interface RedLetterCommemoration {
        isRedLetter: true,
        weight: FeastTypeWeights.PRINCIPAL | FeastTypeWeights.HOLY_DAY,
        title: String,
        shortTitle?: String,
        type: FeastType | FeastType[],
        color: Colors
    }

    interface BlackLetterCommemoration {
        isRedLetter: false,
        weight: FeastTypeWeights.ANGLICAN | FeastTypeWeights.ECUMENICAL,
        name: String,
        office: String | null,
        death?: number[]
        type: FeastType | FeastType[],
        color: Colors
    }

    type Commemoration = RedLetterCommemoration | BlackLetterCommemoration

    interface Day {
        isFeastDay: boolean,
        // hasOptionalCelebrations?: boolean,
        hasOptionalFeast: boolean,
        season: null | Seasons | string,
        color?: null | Colors,
        commemorations: null | Commemoration[]
    }

    interface Month {
        id: string,
        name: string,
        days: {
            [day: number]: Calendar.Day
        }
    }

    interface Year {
        [month: number]: Calendar.Month
    }
    interface Year  {
        [month: string]: Calendar.Month
    }
}