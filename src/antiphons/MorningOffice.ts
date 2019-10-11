const MorningOffice = {
    ordinary: <VersicleLike[]> [
        [
            {
                speaker: 'officiant',
                text: 'The earth is the Lord\'s: *'
            },
            {
                speaker: 'people',
                text: 'O come, let us adore him.'
            }
        ],
        [
            {
                speaker: 'officiant',
                text: 'Worship the Lord in the beauty of holiness: *'
            },
            {
                speaker: 'people',
                text: 'O come, let us adore him.'
            }
        ],
        [
            {
                speaker: 'officiant',
                text: 'The earth is the Lord\'s:'
            },
            {
                speaker: 'people',
                text: 'O come, let us adore him.'
            }
        ]
    ],
    christmas: <VersicleLike> [
        {
            speaker: 'officiant',
            text: 'Alleluia, to us a child is born: *'
        }
    ],
    epiphany: <VersicleLike> [
        {
            speaker: 'officiant',
            text: 'The Lord has shown forth his glory: *'
        }
    ],
    transfiguration: <VersicleLike> [
        {
            speaker: 'officiant',
            text: 'The Lord has shown forth his glory: *'
        }
    ],
    presentation: <VersicleLike> [
        {
            speaker: 'officiant',
            text: 'The Word was made flesh and dwelt among us: *'
        }
    ],
    annunciation: <VersicleLike> [
        {
            speaker: 'officiant',
            text: 'The Word was made flesh and dwelt among us: *'
        }
    ],
    lent: [],
    easter: [], // all of easter/until ascension
    ascension: [], // until pentecost
    pentecost: [],
    any: [] // Use in ordinary time, or any other season
};

export default MorningOffice;
