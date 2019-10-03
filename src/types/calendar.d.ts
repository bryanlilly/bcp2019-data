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
        PASTOR,
        TEACHER_OF_FAITH,
        MONASTIC_RELIGIOUS,
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

    interface Day {
        isFeastDay: boolean,
        hasOptionalCelebrations: boolean,
        season: null | Calendar.Seasons | string,
        color: null | Calendar.Colors | string,
        celebrations: null | {
            feast?: undefined | {
                weight: Calendar.FeastTypeWeights.PRINCIPAL | Calendar.FeastTypeWeights.HOLY_DAY,
                title: string,
                type: Calendar.FeastType
            },
            optional?: {
                anglican?: {
                    weight: Calendar.FeastTypeWeights.ANGLICAN,
                    name: string,
                    office?: string,
                    death?: number | number[],
                    type: Calendar.FeastType
                } | undefined | null
                ecumenical?: {
                    weight: Calendar.FeastTypeWeights.ECUMENICAL,
                    name: string,
                    office?: string,
                    death?: number | number[],
                    type: Calendar.FeastType
                } | undefined | null
            }
        }
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