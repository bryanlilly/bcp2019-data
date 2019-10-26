import { Versicles } from 'types/call-and-response/index';

export const Kyrie = {
    traditional: [
        {
            speaker: 'officiant',
            text: 'Lord, have mercy upon us.'
        },
        {
            speaker: 'people',
            text: 'Christ, have mercy upon us.'
        },
        {
            speaker: 'officiant',
            text: 'Lord, have mercy upon us.'
        }
    ] as Versicles,
    contemporary: [
        {
            speaker: 'officiant',
            text: 'Lord, have mercy'
        },
        {
            speaker: 'people',
            text: 'Christ, have mercy.'
        },
        {
            speaker: 'officiant',
            text: 'Lord, have mercy.'
        }
    ] as Versicles
};
