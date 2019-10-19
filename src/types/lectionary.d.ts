

declare namespace Lectionary {

    export type Lesson = {
        full: string;
        book: string;
        chap: null | string;
        verses: null | string;
        abbr: boolean | string;
        isApocrypha: boolean | string;
    }

    export type EucharistLessons = {
        a: {
            oldtestament: Lesson | Lesson[];
            psalm: Lesson | Lesson[];
            epistle: Lesson | Lesson[];
            gospel: Lesson | Lesson[];
        };
        b: {
            oldtestament: Lesson | Lesson[];
            psalm: Lesson | Lesson[];
            epistle: Lesson | Lesson[];
            gospel: Lesson | Lesson[];
        };
        c: {
            oldtestament: Lesson | Lesson[];
            psalm: Lesson | Lesson[];
            epistle: Lesson | Lesson[];
            gospel: Lesson | Lesson[];
        };
    }

    export interface Lessons {
        lesson1: Lectionary.Lesson;
        lesson2: Lectionary.Lesson;
    }
    export interface Days {
        1: Lectionary.Lessons;
        2: Lectionary.Lessons;
        3: Lectionary.Lessons;
        4: Lectionary.Lessons;
        5: Lectionary.Lessons;
        6: Lectionary.Lessons;
        7: Lectionary.Lessons;
        8: Lectionary.Lessons;
        9: Lectionary.Lessons;
        10: Lectionary.Lessons;
        11: Lectionary.Lessons;
        12: Lectionary.Lessons;
        13: Lectionary.Lessons;
        14: Lectionary.Lessons;
        15: Lectionary.Lessons;
        16: Lectionary.Lessons;
        17: Lectionary.Lessons;
        18: Lectionary.Lessons;
        19: Lectionary.Lessons;
        20: Lectionary.Lessons;
        21: Lectionary.Lessons;
        22: Lectionary.Lessons;
        23: Lectionary.Lessons;
        24: Lectionary.Lessons;
        25: Lectionary.Lessons;
        26: Lectionary.Lessons;
        27: Lectionary.Lessons;
        28: Lectionary.Lessons;
        29?: Lectionary.Lessons;
        30?: Lectionary.Lessons;
        31?: Lectionary.Lessons;

    }

    // interface Month extends Lectionary.Days {}

    export interface Month {
        morning: Lectionary.Days;
        evening: Lectionary.Days;
    }

    export interface Year {
        0: Lectionary.Month;
        1: Lectionary.Month;
        2: Lectionary.Month;
        3: Lectionary.Month;
        4: Lectionary.Month;
        5: Lectionary.Month;
        6: Lectionary.Month;
        7: Lectionary.Month;
        8: Lectionary.Month;
        9: Lectionary.Month;
        10: Lectionary.Month;
        11: Lectionary.Month;
        12: Lectionary.Month;
    }

    export interface Year {
        jan: Lectionary.Month;
        feb: Lectionary.Month;
        mar: Lectionary.Month;
        apr: Lectionary.Month;
        may: Lectionary.Month;
        jun: Lectionary.Month;
        jul: Lectionary.Month;
        aug: Lectionary.Month;
        sept: Lectionary.Month;
        oct: Lectionary.Month;
        nov: Lectionary.Month;
        dec: Lectionary.Month;
    }
}

export = Lectionary