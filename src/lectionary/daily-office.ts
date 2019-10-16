import jan from './Months/jan';
import feb from './Months/feb';
import mar from './Months/mar';
import apr from './Months/apr';
import may from './Months/may';
import jun from './Months/jun';
import jul from './Months/jul';
import aug from './Months/aug';
import sep from './Months/sept';
import oct from './Months/oct';
import nov from './Months/nov';
import dec from './Months/dec';

export default {
    OneYear: {
        0: jan,
        1: feb,
        2: mar,
        3: apr,
        4: may,
        5: jun,
        6: jul,
        7: aug,
        8: sep,
        9: oct,
        10: nov,
        11: dec
    },
    TwoYear: {
        odd: {
            0: jan.morning,
            1: feb.morning,
            2: mar.morning,
            3: apr.morning,
            4: may.morning,
            5: jun.morning,
            6: jul.morning,
            7: aug.morning,
            8: sep.morning,
            9: oct.morning,
            10: nov.morning,
            11: dec.morning
        },
        even: {
            0: jan.evening,
            1: feb.evening,
            2: mar.evening,
            3: apr.evening,
            4: may.evening,
            5: jun.evening,
            6: jul.evening,
            7: aug.evening,
            8: sep.evening,
            9: oct.evening,
            10: nov.evening,
            11: dec.evening
        }
    }
};
