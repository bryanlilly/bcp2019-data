import { VersicleResponse } from 'types/call-and-response/index';

const peopleOrdinary: VersicleResponse = {
    speaker: 'people',
    text: 'O come, let us adore him.'
};
const peopleAlleluia: VersicleResponse = {
    speaker: 'people',
    text: 'O come, let us adore him. Alleluia.'
};

export const MorningOffice = {
    all: [
        [
            {
                speaker: 'officiant',
                text: 'The earth is the Lord\'s: *'
            },
            { peopleOrdinary }
        ],
        [
            {
                speaker: 'officiant',
                text: 'Worship the Lord in the beauty of holiness: *'
            },
            { peopleOrdinary }
        ],
        [
            {
                speaker: 'officiant',
                text: 'The earth is the Lord\'s:'
            },
            { peopleOrdinary }
        ]
    ],
    seasonal: {
        advent: [
            {
                speaker: 'officiant',
                text: 'Our King and Savior now draws near: *'
            },
            { peopleOrdinary }
        ],
        christmas: [
            {
                speaker: 'officiant',
                text: 'Alleluia, to us a child is born: *'
            },
            { peopleAlleluia }
        ],
        epiphany: [
            {
                speaker: 'officiant',
                text: 'The Lord has shown forth his glory: *'
            },
            { peopleOrdinary }
        ],
        transfiguration: [
            {
                speaker: 'officiant',
                text: 'The Lord has shown forth his glory: *'
            },
            { peopleOrdinary }
        ],
        presentation: [
            {
                speaker: 'officiant',
                text: 'The Word was made flesh and dwelt among us: *'
            },
            { peopleOrdinary }
        ],
        annunciation: [
            {
                speaker: 'officiant',
                text: 'The Word was made flesh and dwelt among us: *'
            },
            { peopleOrdinary }
        ],
        lent: [
            {
                speaker: 'officiant',
                text: 'The Lord is full of compassion and mercy: *'
            },
            { peopleOrdinary }
        ],
        easterToAscension: [
            {
                speaker: 'officiant',
                text: 'Alleluia, The Lord is risen indeed: *'
            },
            { peopleAlleluia }

        ], // all of easter/until ascension
        ascensionToPentecost: [
            {
                speaker: 'officiant',
                text: 'Alleluia. Christ the Lord has ascended into heaven: *'
            },
            { peopleAlleluia }
        ], // until pentecost
        pentecost: [
            {
                speaker: 'officiant',
                text: 'Alleluia. The Spirit of the Lord renews the face of the Earth: *'
            },
            { peopleAlleluia }
        ],
        trinity: [
            {
                speaker: 'officiant',
                text: 'Father, Son, and Holy Spirit, one God: *'
            },
            { peopleOrdinary }
        ],
        saints: [
            {
                speaker: 'officiant',
                text: 'The Lord is glorious in his saints: *'
            },
            { peopleOrdinary },
        ]
    }
};
