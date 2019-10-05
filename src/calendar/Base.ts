const BaseCalendar: Calendar.Year = {
    0: {
        id: 'jan',
        name: 'January',
        days: {
            1: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: Calendar.Seasons.CHRISTMAS,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'The Circumcision and Holy Name of Our Lord Jesus Christ',
                        color: Calendar.Colors.WHITE,
                        type: [Calendar.FeastType.HOLY_DAY]
                    }
                ]
            },
            2: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.CHRISTMAS,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Vedanayagam Samuel Azariah',
                        office: 'Bishop in South India, Evangelist',
                        death: [1945],
                        color: Calendar.Colors.WHITE,
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.MISSIONARY_EVANGELIST
                        ]
                    }
                ]
            },
            6: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: Calendar.Seasons.EPIPHANY,
                commemorations:  [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.PRINCIPAL,
                        title: 'The Epiphany of Our Lord Jesus Christ',
                        shortTitle: 'The Epiphany',
                        color: Calendar.Colors.WHITE,
                        type: [Calendar.FeastType.PRINCIPAL]
                    }
                ]
            },
            10: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'William Laud',
                        office: 'Archbishiop of Canterbury, Martyr',
                        death: [1645],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.MARTYR
                        ],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            13: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Hilary of Poitiers',
                        office: 'Bishop and Teacher of the Faith',
                        death: [367],
                        color: Calendar.Colors.WHITE,
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ]
                    }
                ]
            },
            14: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'St. Kentigern',
                        office: 'Missionary to Strathclyde and Cumbria',
                        death: [603],
                        type: [Calendar.FeastType.MISSIONARY_EVANGELIST],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            17: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Anthony',
                        office: 'Hermit in Egypt',
                        death: [356],
                        type: [Calendar.FeastType.MONASTIC_RELIGIOUS],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            18: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: null,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'The Confession of Peter the Apostle',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.WHITE,
                    }
                ]
            },
            19: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Wulfstan',
                        office: 'Bishop of Worcester',
                        death: [1095],
                        type: [Calendar.FeastType.PASTOR],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            20: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'Fabian',
                        office: 'Bishop of Rome and Martyr',
                        death: [250],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.MARTYR
                        ],
                        color: Calendar.Colors.RED,
                    }
                ]
            },
            21: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Agnes',
                        office: 'Martyr at Rome',
                        death: [304],
                        type: [Calendar.FeastType.MARTYR],
                        color: Calendar.Colors.RED,
                    }
                ]
            },
            22: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Vincent',
                        office: 'Deacon of Saragossa, Martyr',
                        death: [304],
                        type: [Calendar.FeastType.MARTYR],
                        color: Calendar.Colors.RED,
                    }
                ]
            },
            25: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: null,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'The Conversion of Paul the Apostle',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.WHITE,
                    }
                ]
            },
            26: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'Timothy and Titus',
                        office: 'Companions of Paul the Apostle',
                        type: [Calendar.FeastType.PASTOR],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            27: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'Lydia, Dorcas, and Phoebe',
                        office: 'Helpers of the Apostles',
                        type: [Calendar.FeastType.SAINT],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            28: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Thomas Aquinas',
                        office: 'Friar, Priest, and Teacher of the Faith',
                        death: [1274],
                        type: [
                            Calendar.FeastType.MONASTIC_RELIGIOUS,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE,
                    }
                ]
            },
            29: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Lesslie Newbigin',
                        office: 'Bishop and Ecumenist',
                        death: [1998],
                        type: [
                            Calendar.FeastType.ECUMENIST,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            30: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'St. Charles',
                        office: 'King and Martyr',
                        death: [1649],
                        type: [Calendar.FeastType.MARTYR],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            31: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Samuel Shoemaker',
                        office: 'Priest and Renewer of Society',
                        death: [1649],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.RENEWER_OF_SOCIETY
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            }
        }
    },
    1: {
        id: 'feb',
        name: 'February',
        days: {
            1: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'St. Brigid',
                        office: 'Abbess of Kildare',
                        death: [523],
                        type: [Calendar.FeastType.MONASTIC_RELIGIOUS],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            2: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: null,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'The Presention of Our Lord Jesus Christ in the Temple',
                        shortTitle: 'The Presentation',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.WHITE,
                    }
                ]
            },
            3: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Anskar',
                        office: 'Bishop and Missionary to Denmark and Sweden',
                        death: [865],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.MISSIONARY_EVANGELIST
                        ],
                        color: Calendar.Colors.WHITE,
                    }
                ]
            },
            4: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'Cornelius the Centurion',
                        office: null,
                        type: [Calendar.FeastType.SAINT],
                        color: Calendar.Colors.WHITE,
                    }
                ]
            },
            5: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                        {
                            isRedLetter: false,
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'The Martyrs of Japan',
                            office: null,
                            death: [1597],
                            type: [Calendar.FeastType.MARTYR],
                            color: Calendar.Colors.RED,
                        }
                ]
            },
            10: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Scholastica',
                        office: 'Abbess',
                        death: [543],
                        type: [Calendar.FeastType.MONASTIC_RELIGIOUS],
                        color: Calendar.Colors.WHITE,
                    }
                ]
            },
            13: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Absalom Jones',
                        office: 'First African-American Priest',
                        death: [1818],
                        type: [Calendar.FeastType.PASTOR],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            14: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Cyril and St. Methodius',
                        office: 'Apostles to the Slavs',
                        death: [869, 885],
                        type: [Calendar.FeastType.MISSIONARY_EVANGELIST],
                        color: Calendar.Colors.WHITE,
                    },
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Valentine',
                        office: 'Martyr at Rome',
                        death: [269],
                        type: [Calendar.FeastType.MARTYR],
                        color: Calendar.Colors.RED,
                    }
                ]
            },
            15: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Thomas Bray',
                        office: 'Priest and Missionary, founder of SPG and SPCK',
                        death: [1730],
                        type: [
                            Calendar.FeastType.MISSIONARY_EVANGELIST,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE

                    }
                ]
            },
            17: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Janani Luwum',
                        office: 'Archbishop of Uganda and Martyr',
                        death: [1977],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.MARTYR
                        ],
                        color: Calendar.Colors.RED,
                    }
                ]
            },
            18: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'Martin Luther',
                        office: 'Reformer of the Church',
                        death: [1546],
                        type: [Calendar.FeastType.REFORMER_OF_THE_CHURCH],
                        color: Calendar.Colors.WHITE,
                    }
                ]
            },
            21: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'William "Billy" Graham',
                        office: 'Evangelist',
                        death: [2018],
                        type: [Calendar.FeastType.MISSIONARY_EVANGELIST],
                        color: Calendar.Colors.WHITE,
                    }
                ]
            },
            23: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Polycarp',
                        office: 'Bishop of Smyrna, Martyr',
                        death: [156],
                        type: [
                            Calendar.FeastType.MARTYR,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.RED,
                    }
                ]
            },
            24: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: null,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.PRINCIPAL,
                        title: 'Matthias the Apostle',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.RED,
                    }
                ]
            },
            27: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'George Herbert',
                        office: 'Priest and Poet',
                        death: [1633],
                        type: [Calendar.FeastType.PASTOR],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            28: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. John Cassian',
                        office: 'Monk and Teacher of the Faith',
                        death: [453],
                        type: [
                            Calendar.FeastType.MONASTIC_RELIGIOUS,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
        }
    },
    2: {
        id: 'mar',
        name: 'March',
        days: {
            1: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'St. David',
                        office: 'Bishop and Apostle of Wales',
                        death: [601],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.MISSIONARY_EVANGELIST
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            2: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Chad of Mercia',
                        office: 'Bishop of Lichfield and Missionary',
                        death: [672],
                        type: [
                            Calendar.FeastType.MISSIONARY_EVANGELIST,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            3: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'John and Charles Wesley',
                        office: 'Priests and Reformers of the Church',
                        death: [1791, 1788],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.REFORMER_OF_THE_CHURCH
                        ],
                        color: Calendar.Colors.WHITE,
                    }
                ]
            },
            7: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Perpetua, St. Felicitas and their  Companions',
                        office: 'Martyrs at Carthage',
                        death: [203],
                        type: [Calendar.FeastType.MARTYR],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            8: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Felix',
                        office: 'Bishop and Missionary to the Angles',
                        death: [647],
                        type: [
                            Calendar.FeastType.MISSIONARY_EVANGELIST,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE,
                    }
                ]
            },
            10: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Robert Machray',
                        office: 'First Primate of Canada',
                        death: [1904],
                        type: [
                            Calendar.FeastType.MISSIONARY_EVANGELIST,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            12: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Gregory the Great',
                        office: 'Bishop of Rome and Teacher of the Faith',
                        death: [604],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            17: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'St. Patrick',
                        office: 'Bishop and Apostle to the Irish',
                        death: [461],
                        type:[
                            Calendar.FeastType.MISSIONARY_EVANGELIST,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            18: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Cyril',
                        office: 'Bishop of Jerusalem and Teacher of the Faith',
                        death: [386],
                        type: [
                            Calendar.FeastType.TEACHER_OF_FAITH,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            19: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: Calendar.Seasons.LENT,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'St. Joseph, Husband of the Virgin Mary and Guardian of Jesus',
                        shortTitle: 'St. Joseph',
                        type: [Calendar.FeastType.SAINT],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            20: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'St. Cuthbert',
                        office: 'Bishop-Abbot of Lindisfarne and Missionary',
                        death: [687],
                        type: [
                            Calendar.FeastType.MISSIONARY_EVANGELIST,
                            Calendar.FeastType.MONASTIC_RELIGIOUS,
                            Calendar.FeastType.PASTOR,
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            21: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Thomas Cranmer',
                        office: 'Archbishop of Canterbury and Martyr',
                        death: [1556],
                        type: [
                            Calendar.FeastType.MARTYR
                        ],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            22: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'James DeKoven',
                        office: 'Priest',
                        death: [1879],
                        type: [Calendar.FeastType.PASTOR],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            23: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Gregory the Illuminator',
                        office: 'Missionary to Armenia',
                        death: [333],
                        type: [
                            Calendar.FeastType.MISSIONARY_EVANGELIST
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            25: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: null,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'The Annunciation of our Lord Jesus Christ to the Virgin Mary',
                        shortTitle: 'The Annunciation',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.WHITE,
                    }
                ]
            },
            27: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Charles Henry Brent',
                        office: 'Bishop and Missionary to the Philippines',
                        death: [1929],
                        type: [
                            Calendar.FeastType.MISSIONARY_EVANGELIST,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            29: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'John Keble',
                        office: 'Priest and Reformer of the Church',
                        death: [1866],
                        type: [
                            Calendar.FeastType.REFORMER_OF_THE_CHURCH,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            31: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'John Donne',
                        office: 'Priest and Poet',
                        death: [1631],
                        type: [Calendar.FeastType.PASTOR],
                        color: Calendar.Colors.WHITE
                    }
                ]
            }
        }
    },
    3: {
        id: 'apr',
        name: 'April',
        days: {
            1: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Frederick Denison Maurice',
                        office: 'Priest and Renewer of Society',
                        death: [1872],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.RENEWER_OF_SOCIETY
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            2: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Henry Budd',
                        office: 'First Native Priest in Canada',
                        death: [1850],
                        type: [
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            3: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'James Lloyd Breck',
                        office: 'Priest and Missionary',
                        death: [1879],
                        type: [
                            Calendar.FeastType.MISSIONARY_EVANGELIST,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            4: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'Martin Luther King, Jr.',
                        office: 'Renewer of Society',
                        death: [1968],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.RENEWER_OF_SOCIETY
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            7: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'Tikhon of Moscow',
                        office: 'Bishop and Ecumenist',
                        death: [1925],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.ECUMENIST
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            8: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'William Augustus Muhlenberg',
                        office: 'Priest, Reformer of the Church, and Renewer of Society',
                        death: [1877],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.REFORMER_OF_THE_CHURCH,
                            Calendar.FeastType.RENEWER_OF_SOCIETY
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            10: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'William Law',
                        office: 'Priest and Teacher of the Faith',
                        death: [1761],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            11: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'George Augustus Selwyn',
                        office: 'Bishop and Missionary to New Zealand',
                        death: [1631],
                        type: [
                            Calendar.FeastType.MISSIONARY_EVANGELIST,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            19: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'St. Alphege',
                        office: 'Archbishop of Canterbury and Martyr',
                        death: [1012],
                        type: [
                            Calendar.FeastType.MARTYR,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            21: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'St. Anselm',
                        office: 'Archbishop of Canterbury and Teacher of the Faith',
                        death: [1109],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.TEACHER_OF_FAITH],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            23: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. George',
                        office: 'Martyr',
                        death: [304],
                        type: [Calendar.FeastType.MARTYR],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            24: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Arthur Michael Ramsey',
                        office: 'Archbishop of Canterbury, Ecumenist, and Teacher of the Faith',
                        death: [1988],
                        type: [
                            Calendar.FeastType.ECUMENIST,
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            25: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: null,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'St. Mark the Evangelist',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            29: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Catherine of Siena',
                        office: 'Reformer of the Church',
                        death: [1380],
                        type: [Calendar.FeastType.REFORMER_OF_THE_CHURCH],
                        color: Calendar.Colors.WHITE
                    }
                ]
            }
        }
    },
    4: {
        id: 'may',
        name: 'May',
        days: {
            1: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: null,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'Philip and James, Apostles',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            2: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Athanasius',
                        office: 'Bishop of Alexandria and Teacher of the Faith',
                        death: [373],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            8: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Julian of Norwich',
                        office: 'Anchoress',
                        death: [1471],
                        type: [Calendar.FeastType.SAINT],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            9: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Gregory of Nazianzus',
                        office: 'Bishop of Canstantinople and Teacher of the Faith',
                        death: [389],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            15: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Pachomius the Great',
                        office: 'Abbot and Organizer of Monasticism',
                        death: [346],
                        type: [Calendar.FeastType.MONASTIC_RELIGIOUS],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            16: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'The Martyrs of Sudan',
                        office: null,
                        death: [2011],
                        type: [Calendar.FeastType.MARTYR],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            19: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'St. Dunstan',
                        office: 'Archbishop of Caterbury and Reformer of the Church',
                        death: [988],
                        type: [
                            Calendar.FeastType.MONASTIC_RELIGIOUS,
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.REFORMER_OF_THE_CHURCH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            20: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Alcuin of York',
                        office: 'Deacon and Abbot of Tours',
                        death: [804],
                        type: [Calendar.FeastType.MONASTIC_RELIGIOUS],
                        color: Calendar.Colors.WHITE

                    }
                ]
            },
            21: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Helena',
                        office: 'Mother of Constantine and Protector of the Holy Places',
                        death: [330],
                        type: [Calendar.FeastType.SAINT],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            24: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Jackson Kemper',
                        office: 'First Missionary Bishop in the United States',
                        death: [1870],
                        type: [
                            Calendar.FeastType.MISSIONARY_EVANGELIST,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            25: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'St. Bede the Venerable',
                        office: 'Priest and Monk of Jarrow, Teacher of the Faith',
                        death: [735],
                        type: [
                            Calendar.FeastType.MONASTIC_RELIGIOUS,
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            26: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'St. Augustine of Canterbury',
                        office: 'First Archbishop of Canterbury and Missionary',
                        death: [605],
                        type: [
                            Calendar.FeastType.MISSIONARY_EVANGELIST,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            27: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'John Calvin',
                        office: 'Reformer of the Church',
                        death: [1564],
                        type: [Calendar.FeastType.REFORMER_OF_THE_CHURCH],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            30: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Josephine Butler',
                        office: 'Renewer of Society',
                        death: [1906],
                        type: [Calendar.FeastType.RENEWER_OF_SOCIETY],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            31: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: null,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'The Visitation of the Virgin Mary to Elizabeth and Zechariah',
                        shortTitle: 'The Visitation',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.WHITE
                    }
                ]
            }
        }
    },
    5: {
        id: 'jun',
        name: 'June',
        days: {
            1: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Justin',
                        office: 'Teacher of the Faith and Martyr at Rome',
                        death: [165],
                        type: [
                            Calendar.FeastType.MARTYR,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            2: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Blandina and Her Companions',
                        office: 'Martyrs at Lyons',
                        death: [177],
                        type: [Calendar.FeastType.MARTYR,],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            3: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'The Martyrs of Uganda',
                        office: null,
                        death: [1886, 1977],
                        type: [Calendar.FeastType.MARTYR],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            4: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'John XXIII',
                        office: 'Ecumenist, and Reformer of the Church',
                        death: [1963],
                        type: [
                            Calendar.FeastType.ECUMENIST,
                            Calendar.FeastType.REFORMER_OF_THE_CHURCH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            5: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'St. Boniface',
                        office: 'Archbishop of Mainz, Missionary to the Germans, and Martyr',
                        death: [754],
                        type: [
                            Calendar.FeastType.MARTYR,
                            Calendar.FeastType.MISSIONARY_EVANGELIST,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            6: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'William Grant Broughton',
                        office: 'Bishop and Missionary to Australia',
                        death: [1853],
                        type: [
                            Calendar.FeastType.MISSIONARY_EVANGELIST,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            8: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Thomas Ken',
                        office: 'Bishop of Bath and Wells, Non-Juror',
                        death: [1711],
                        type: [
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE,
                    }
                ]
            },
            9: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'St. Columba',
                        office: 'Abbot of Iona and Missionary to the Scots',
                        death: [597],
                        type: [
                            Calendar.FeastType.MISSIONARY_EVANGELIST,
                            Calendar.FeastType.MONASTIC_RELIGIOUS
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            10: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Josephine Butler',
                        office: 'Renewer of Society',
                        death: [1906],
                        type: [Calendar.FeastType.RENEWER_OF_SOCIETY],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            11: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: null,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'Barnabas the Apostle',
                        type: Calendar.FeastType.HOLY_DAY,
                        color: Calendar.Colors.RED
                    }
                ]
            },
            14: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'St. Basil the Great',
                        office: 'Bishop of Caesarea and Teacher of the Faith',
                        death: [379],
                        type: [Calendar.FeastType.TEACHER_OF_FAITH],
                        color: Calendar.Colors.WHITE,
                    }
                ]
            },
            15: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Evelyn Underhill',
                        office: 'Teacher of the Faith',
                        death: [1941],
                        type: [Calendar.FeastType.TEACHER_OF_FAITH],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            18: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Bernard Mizeki',
                        office: 'Catechist and Martyr in Rhodesia',
                        death: [1896],
                        type: [Calendar.FeastType.MARTYR],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            19: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Sundar Singh',
                        office: 'Evangelist in India and Teacher of the Faith',
                        death: [1929],
                        type: [
                            Calendar.FeastType.MISSIONARY_EVANGELIST,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            22: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                            isRedLetter: false,
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'St. Alban',
                            office: 'First Martyr of Britain',
                            death: [240],
                            type: [Calendar.FeastType.MARTYR],
                            color: Calendar.Colors.RED,
                    }
                ]
            },
            24: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'The Nativity of John the Baptist',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.WHITE,
                    }
                ]
            },
            27: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Cyril of Alexandria',
                        office: 'Bishop and Teacher of the Faith',
                        death: [444],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            28: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Irenause',
                        office: 'Bishop of Lyons and Teacher of the Faith',
                        death: [200],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE,
                    }
                ]
            },
            29: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'Peter and Paul',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.RED
                    }
                ]
            }
        }
    },
    6: {
        id: 'jul',
        name: 'July',
        days: {
            1: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'Canaday Day',
                        office: null,
                        type: [Calendar.FeastType.NATIONAL],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            4: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.WHITE,
                commemorations: [
                    {
                            isRedLetter: false,
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'Independance Day (USA)',
                            office: null,
                            type: [Calendar.FeastType.NATIONAL],
                            color: Calendar.Colors.WHITE
                    }
                ]
            },
            11: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Benedict of Nursia',
                        office: 'Abbot and Founder of the Benedictine Order',
                        death: [550],
                        type: [Calendar.FeastType.MONASTIC_RELIGIOUS],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            12: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'Nathan Soderblom',
                        office: 'Archbishop of Uppsala and Ecumenist',
                        death: [1931],
                        type: [
                            Calendar.FeastType.ECUMENIST,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            14: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Bonaventure',
                        office: 'Friar, Bishop, and Teacher of the Faith',
                        death: [240],
                        type: [
                            Calendar.FeastType.MONASTIC_RELIGIOUS,
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE,
                    }
                ]
            },
            15: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Olga and St. Vladimir',
                        office: 'Patrons of the Church in Russia',
                        death: [969, 1016],
                        type: [Calendar.FeastType.SAINT],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            17: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'William White',
                        office: 'Bishop of Pennsylvania and First Presiding Bishop of the Church in the USA',
                        death: [1836],
                        type: [Calendar.FeastType.PASTOR],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            18: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Macrina',
                        office: 'Nun and Teacher of the Faith',
                        death: [379],
                        type: [
                            Calendar.FeastType.MONASTIC_RELIGIOUS,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            19: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Gregory of Nyssa',
                        office: 'Bishop of Nyssa and Teacher of the Faith',
                        death: [396],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            20: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'Margaret of Antioch',
                        office: 'Martyr',
                        death: [306],
                        type: [Calendar.FeastType.MARTYR],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            22: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'Mary Magdalene',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            24: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'Thomas à Kempis',
                        office: 'Priest and Teacher of the Faith',
                        death: [1471],
                        type: [
                            Calendar.FeastType.TEACHER_OF_FAITH,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            25: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'St. James the Elder, Apostle',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            26: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'The Parents of the Virgin Mary',
                        office: null,
                        type: [Calendar.FeastType.SAINT],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            27: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'William Reed Huntington',
                        office: 'Priest and Ecumentist',
                        death: [1909],
                        type: [
                            Calendar.FeastType.ECUMENIST,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            29: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'Lazarus, Mary, and Martha',
                        office: 'Companions of our Lord',
                        type: [Calendar.FeastType.SAINT],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            30: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'William Wilberforce',
                        office: 'Renewer of Society',
                        death: [1833],
                        type: [Calendar.FeastType.RENEWER_OF_SOCIETY],
                        color: Calendar.Colors.WHITE
                    }
                ]
            }
        }
    },
    7: {
        id: 'aug',
        name: 'August',
        days: {
            1: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.CHRISTMAS,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'Joseph of Arimathea',
                        office: null,
                        type: [Calendar.FeastType.SAINT],
                        color: Calendar.Colors.WHITE,
                    }
                ]
            },
            5: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Oswald',
                        office: 'King of Northumbria and Martyr',
                        death: [642],
                        type: [Calendar.FeastType.MARTYR],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            6: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'The Transfiguration of Our Lord Jesus Christ',
                        shortTitle: 'The Transfiguration',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            7: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'John Mason Neale',
                        office: 'Priest and Reformer of the Church',
                        death: [1866],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.REFORMER_OF_THE_CHURCH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            8: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Dominic',
                        office: 'Priest and Friar',
                        death: [1221],
                        type: [
                            Calendar.FeastType.MONASTIC_RELIGIOUS,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            9: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Mary Sumner',
                        office: 'Founder of the Mothers\' Untion and Renewer of Society',
                        death: [1921],
                        type: [Calendar.FeastType.RENEWER_OF_SOCIETY],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            10: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Laurence',
                        office: 'Deacon and Martyr at Rome',
                        death: [258],
                        type: [Calendar.FeastType.MARTYR],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            11: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Clare',
                        office: 'Abbess of Assisi',
                        death: [1253],
                        type: [Calendar.FeastType.MONASTIC_RELIGIOUS],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            12: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Charles Inglis',
                        office: 'First Bishop of Canada',
                        death: [1787],
                        type: [Calendar.FeastType.PASTOR],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            13: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Jeremy Taylor',
                        office: 'Bishop of Down and Connor, Teacher of the Faith',
                        death: [1667],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            14: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'Roger Schutz',
                        office: 'Monk of Taizé and Ecumenist',
                        death: [2005],
                        type: [
                            Calendar.FeastType.ECUMENIST,
                            Calendar.FeastType.MONASTIC_RELIGIOUS
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            15: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'The Virgin Mary, Mother of our Lord Jesus Christ',
                        shortTitle: 'The Virgin Mary',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            20: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Bernard',
                        office: 'Abbot of Clairvaux and Teacher of the Faith',
                        death: [1153],
                        type: [
                            Calendar.FeastType.MONASTIC_RELIGIOUS,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            21: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Jonathan Myrick Daniels',
                        office: 'Martyr',
                        death: [1968],
                        type: [Calendar.FeastType.MARTYR],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            24: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'Bartholomew the Apostle',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            25: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Louis',
                        office: 'King of France',
                        death: [1270],
                        type: [Calendar.FeastType.SAINT],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            27: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Monica',
                        office: 'Mother of St. Augustine of Hippo',
                        death: [387],
                        type: [Calendar.FeastType.SAINT],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            28: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Augustine of Hippo',
                        office: 'Bishop of Hippo and Teacher of the Faith',
                        death: [430],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            29: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'The Beheading of John the Baptist',
                        office: null,
                        type: [Calendar.FeastType.MARTYR],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            30: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Charles Chapman Grafton',
                        office: 'Bishop of Fond du Lac and Ecumenist',
                        death: [1912],
                        type: [
                            Calendar.FeastType.ECUMENIST,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            31: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'St. Aidan',
                        office: 'Abbot-Bishop of Lindisfarne, Missionary to Northumbria',
                        death: [651],
                        type: [
                            Calendar.FeastType.MISSIONARY_EVANGELIST,
                            Calendar.FeastType.MONASTIC_RELIGIOUS
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            }
        }
    },
    8: {
        id: 'sep',
        name: 'September',
        days: {
            2: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'The Martyrs of Papua New Guinea',
                        office: null,
                        death: [1901, 1942],
                        type: [Calendar.FeastType.MARTYR],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            4: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'St. Birinus',
                        office: 'Bishop of Dorchester and Evangelist to Wessex',
                        death: [650],
                        type: [
                            Calendar.FeastType.MISSIONARY_EVANGELIST,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            5: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. (Mother) Teresa of Calcutta',
                        office: 'Renewer of Society',
                        death: [1997],
                        type: [
                            Calendar.FeastType.MONASTIC_RELIGIOUS,
                            Calendar.FeastType.RENEWER_OF_SOCIETY
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            6: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Alan Gardiner',
                        office: 'Missionary and Founder of SAMS',
                        death: [1851],
                        type: [Calendar.FeastType.MISSIONARY_EVANGELIST],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            7: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Hannah More',
                        office: 'Renewer of Society and Founder of Sunday Schools',
                        death: [1833],
                        type: [Calendar.FeastType.RENEWER_OF_SOCIETY],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            9: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Constance and her Companions',
                        office: 'Martyrs of Memphis',
                        death: [1878],
                        type: [Calendar.FeastType.MARTYR],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            10: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Alexander Crummell',
                        office: 'Priest and Missionary to Liberia',
                        death: [1898],
                        type: [
                            Calendar.FeastType.MISSIONARY_EVANGELIST,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            12: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'John Henry Hobart',
                        office: 'Bishop of New York and Reformer of the Church',
                        death: [1830],
                        type: [
                            Calendar.FeastType.REFORMER_OF_THE_CHURCH,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            13: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. John Chrysostom',
                        office: 'Bishop of Constantinople and Teacher of the Faith',
                        death: [407],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            14: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'Holy Cross Day',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            15: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Cyprian',
                        office: 'Bishop of Carthage and Martyr',
                        death: [258],
                        type: [Calendar.FeastType.MARTYR],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            16: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'St. Ninian',
                        office: 'Bishop of Galloway and Missionary to the Picts',
                        death: [432],
                        type: [
                            Calendar.FeastType.MISSIONARY_EVANGELIST,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            17: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Edward Bouverie Pusey',
                        office: 'Priest and Teacher of the Faith',
                        death: [1882],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            19: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'St. Theodore of Tarsus',
                        office: 'Artchbishop of Canterbury',
                        death: [690],
                        type: [Calendar.FeastType.PASTOR],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            20: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'John Coleridge Patteson and his Companions',
                        office: 'Bishop of Melanesia and Martyrs',
                        death: [1871],
                        type: [Calendar.FeastType.MARTYR],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            21: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'St. Matthew, Apostle and Evangelist',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            25: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'Sergius',
                        office: 'Monk and Reformer of the Church in Russia',
                        death: [1392],
                        type: [
                            Calendar.FeastType.MONASTIC_RELIGIOUS,
                            Calendar.FeastType.REFORMER_OF_THE_CHURCH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            26: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Lancelot Andrewes',
                        office: 'Bishop of Winchester and Teacher of the Faith',
                        death: [1626],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            27: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Wilson Carlile',
                        office: 'Evangelist and Founder of the Church Army',
                        death: [1942],
                        type: [Calendar.FeastType.MISSIONARY_EVANGELIST],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            29: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'Holy Michael and All Angels',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            30: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Jerome',
                        office: 'Monk of Bethlehem and Translator of the Bible',
                        death: [420],
                        type: [Calendar.FeastType.MONASTIC_RELIGIOUS],
                        color: Calendar.Colors.WHITE
                    }
                ]
            }
        }
    },
    9: {
        id: 'oct',
        name: 'October',
        days: {
            1: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Remigius',
                        office: 'Bishop of Reims and Missionary to the Franks',
                        death: [533],
                        type: [
                            Calendar.FeastType.MISSIONARY_EVANGELIST,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            3: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'George Bell',
                        office: 'Advocate for the Confessing Church, Bishop and Ecumenist',
                        death: [1958],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.ECUMENIST
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            4: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Francis of Assis',
                        office: 'Friar and Deacon, Reformer of the Church',
                        death: [1226],
                        type: [
                            Calendar.FeastType.MONASTIC_RELIGIOUS,
                            Calendar.FeastType.REFORMER_OF_THE_CHURCH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            6: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'William Tyndale',
                        office: 'Priest, Translator of the Bible, and Martyr',
                        death: [1536],
                        type: [
                            Calendar.FeastType.MARTYR,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            9: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Robert Grosseteste',
                        office: 'Bishop of Lincoln',
                        death: [1253],
                        type: [Calendar.FeastType.PASTOR],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            10: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'St. Paulinus',
                        office: 'Bishop of York and Missionary',
                        death: [644],
                        type: [
                            Calendar.FeastType.MISSIONARY_EVANGELIST,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            11: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Philip',
                        office: 'Deacon and Evangelist',
                        type: [Calendar.FeastType.MISSIONARY_EVANGELIST],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            12: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Cecil Frances Alexander',
                        office: 'Hymn-writer and Teacher of the Faith',
                        death: [1895],
                        type: [Calendar.FeastType.TEACHER_OF_FAITH],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            13: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'St. Edward the Confessor',
                        office: 'King of England',
                        death: [1066],
                        type: [Calendar.FeastType.SAINT],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            14: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Samuel Isaac Joseph Schereschewsky',
                        office: 'Bishop of Shanghai',
                        death: [1906],
                        type: [Calendar.FeastType.PASTOR],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            15: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Teresa of Ávila',
                        office: 'Nun and Reformer of the Church',
                        death: [1582],
                        type: [
                            Calendar.FeastType.MONASTIC_RELIGIOUS,
                            Calendar.FeastType.REFORMER_OF_THE_CHURCH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            16: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Hugh Latimer and Nicholas Ridley',
                        office: 'Bishops and Martyrs',
                        death: [1555],
                        type: [
                            Calendar.FeastType.MARTYR,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            17: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Ignatius',
                        office: 'Bishop of Antioch and Martyr',
                        death: [115],
                        type: [
                            Calendar.FeastType.MARTYR,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            18: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'St. Luke the Evangelist and Companion of Paul',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.RED,
                    }
                ]
            },
            19: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Henry Martyn',
                        office: 'Priest and Missionary to India and Persia',
                        death: [1812],
                        type: [
                            Calendar.FeastType.MISSIONARY_EVANGELIST,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            23: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'St. James of Jerusalem, Bishop and Martyr, Brother of Our Lord',
                        shortTitle: 'St. James, Brother of Our Lord',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            26: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'St. Alfred the Great',
                        office: 'King of the West Saxons and Reformer of the Church',
                        death: [899],
                        type: [Calendar.FeastType.REFORMER_OF_THE_CHURCH],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            28: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'Simon and Jude, Apostles',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.RED
                    }
                ]
            },
        }
    },
    10: {
        id: 'nov',
        name: 'November',
        days: {
            1: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'All Saint\'s Day',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.WHITE,
                    }
                ]
            },
            2: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'Commemoration of the Faithul Departed',
                        office: null,
                        type: [Calendar.FeastType.MARTYR],
                        color: Calendar.Colors.RED,
                    }
                ]
            },
            3: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Richard Hooker',
                        office: 'Priest and Teacher of the Faith',
                        death: [1600],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            5: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'Elizabeth and Zechariah',
                        office: 'Parents of John the Baptist',
                        type: [Calendar.FeastType.SAINT],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            6: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'William Temple',
                        office: 'Archbishop of Canterbury and Teacher of the Faith',
                        death: [1944],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            7: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Willibrord',
                        office: 'Archbishop of Utrecht and Missionary to Frisia',
                        death: [739],
                        type: [
                            Calendar.FeastType.MISSIONARY_EVANGELIST,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            10: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Leo the Great',
                        office: 'Bishop of Rome and Teacher of the Faith',
                        death: [461],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            11: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Martin',
                        office: 'Bishop of Tours',
                        death: [397],
                        type: [Calendar.FeastType.PASTOR],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            13: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Charles Simeon',
                        office: 'Priest and Evangelist',
                        death: [1836],
                        type: [
                            Calendar.FeastType.MISSIONARY_EVANGELIST,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            14: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Consecration of Samuel Seabury',
                        office: 'First Bishop in the United States',
                        death: [1784],
                        type: [Calendar.FeastType.PASTOR],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            15: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Herman of Alaska',
                        office: 'Monk and Missionary to the Native Alaskans',
                        death: [1837],
                        type: [
                            Calendar.FeastType.MISSIONARY_EVANGELIST,
                            Calendar.FeastType.MONASTIC_RELIGIOUS
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            16: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'St. Margaret of Scotland',
                        office: 'Queen of Scotland, Reformer of the Church, and Renewer of Society',
                        death: [1093],
                        type: [
                            Calendar.FeastType.REFORMER_OF_THE_CHURCH,
                            Calendar.FeastType.RENEWER_OF_SOCIETY
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            17: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'St. Hugh of Lincoln',
                        office: 'Bishop of Lincoln and Renewer of Society',
                        death: [1200],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.RENEWER_OF_SOCIETY
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            18: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'Elizabeth of Hungary',
                        office: 'Renwer of Society',
                        death: [1231],
                        type: [Calendar.FeastType.RENEWER_OF_SOCIETY],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            19: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'St. Hilda',
                        office: 'Abbess of Whitby',
                        death: [680],
                        type: [Calendar.FeastType.MONASTIC_RELIGIOUS],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            20: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'St. Edmund',
                        office: 'King of East Anglia and Martyr',
                        death: [870],
                        type: [Calendar.FeastType.MARTYR],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            22: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Cecilia',
                        office: 'Martyr at Rome',
                        death: [230],
                        type: [Calendar.FeastType.MARTYR],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            23: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Clement of Rome',
                        office: 'Bishop or Rome and Martyr',
                        death: [100],
                        type: [
                            Calendar.FeastType.MARTYR,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            25: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ORDINARY,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Catherine of Alexandria',
                        office: 'Martyr',
                        death: [305],
                        type: [Calendar.FeastType.MARTYR],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            29: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Clive Staples Lewis',
                        office: 'Teacher of the Faith',
                        death: [1963],
                        type: [Calendar.FeastType.TEACHER_OF_FAITH],
                        color: Calendar.Colors.WHITE,
                    }
                ]
            },
            30: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: null,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'St. Andrew the Apostle',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.RED,
                    }
                ]
            }
        }
    },
    11: {
        id: 'dec',
        name: 'December',
        days: {
            1: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Alfred the Great',
                        office: 'King of the West Saxons and Reformer of the Church',
                        death: [899],
                        type: [Calendar.FeastType.REFORMER_OF_THE_CHURCH],
                        color: Calendar.Colors.WHITE,
                    }
                ]
            },
            2: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: null,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Alfred the Great',
                        office: 'King of the West Saxons and Reformer of the Church',
                        death: [899],
                        type: [Calendar.FeastType.REFORMER_OF_THE_CHURCH],
                        color: Calendar.Colors.WHITE,
                    }
                ]
            },
            4: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ADVENT,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. John of Damascus',
                        office: 'Priest and Teacher of the Faith',
                        death: [760],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE,
                    }
                ]
            },
            5: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ADVENT,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Clement of Alexandria',
                        office: 'Priest and Teacher of the Faith',
                        death: [210],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            6: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ADVENT,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Nicholas',
                        office: 'Bishop of Myra',
                        death: [326],
                        type: [Calendar.FeastType.PASTOR],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            7: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ADVENT,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Ambrose',
                        office: 'Bishop of Milan and Teacher of the Faith',
                        death: [397],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            8: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ADVENT,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Richard Baxter',
                        office: 'Pastor and Teacher of the Faith',
                        death: [1691],
                        type: [
                            Calendar.FeastType.PASTOR,
                            Calendar.FeastType.TEACHER_OF_FAITH
                        ],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            13: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ADVENT,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ECUMENICAL,
                        name: 'St. Lucy',
                        office: 'Martyr at Syracuse',
                        death: [304],
                        type: [Calendar.FeastType.MARTYR],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            // 16: {
            //     isFeastDay: false,
            //     hasOptionalFeast: false,
            //     season: null,
            //     commemorations: [
            //         {
            //              weight: Calendar.FeastTypeWeights.ANGLICAN,
            //              name: 'O Sapientia,
            //              office: 'O Wisdom from on high',
            //              type: [Calendar.FeastType]
            //              color: Calendar.Colors.PURPLE,
            //         }
            //     ]
            // },
            // 17: {
            //     isFeastDay: false,
            //     hasOptionalFeast: false,
            //     season: null,
            //     commemorations:  [
            //          {
            //              weight: Calendar.FeastTypeWeights.ANGLICAN,
            //              name: 'O Adonai',
            //              office: 'O Lord of Might',
            //              type: [Calendar.FeastType]
            //              color: Calendar.Colors.PURPLE,
            //          }
            //     ]
            // },
            // 18: {
            //     isFeastDay: false,
            //     hasOptionalFeast: false,
            //     season: null,
            //     commemorations:  [
            //          {
            //              weight: Calendar.FeastTypeWeights.ANGLICAN,
            //              name: 'O Radix Jesse',
            //              office: 'O Root of Jesse',
            //              type: [Calendar.FeastType]
            //              color: Calendar.Colors.PURPLE,
            //          }
            //     ]
            // },
            // 19: {
            //     isFeastDay: false,
            //     hasOptionalFeast: false,
            //     season: null,
            //     commemorations:  [
            //          {
            //              weight: Calendar.FeastTypeWeights.ANGLICAN,
            //              name: 'O Clavis David',
            //              office: 'O Key of David',
            //              type: [Calendar.FeastType]
            //              color: Calendar.Colors.PURPLE,
            //          }
            //     ]
            // },
            // 20:  {
            //     isFeastDay: false,
            //     hasOptionalFeast: false,
            //     season: null,
            //     commemorations:  [
            //          {
            //              weight: Calendar.FeastTypeWeights.ANGLICAN,
            //              name: 'O Oriens',
            //              office: 'O Dayspring',
            //              type: [Calendar.FeastType]
            //              color: Calendar.Colors.PURPLE,
            //          }
            //     ]
            // },
            21: {
                isFeastDay: true,
                hasOptionalFeast: true,
                season: Calendar.Seasons.ADVENT,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'Thomas the Apostle',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.RED
                    },
                    //{
                    //  weight: Calendar.FeastTypeWeights.ANGLICAN,
                    //  name: 'O Rex Gentium',
                    //  office: 'O Desire of Nations',
                    //  type: Calendar.FeastType
                    // }
                ]
            },
            // 22: {
            //     isFeastDay: false,
            //     hasOptionalFeast: false,
            //     season: Calendar.Seasons.ADVENT,
            //     commemorations:  [
            //          {
            //              weight: Calendar.FeastTypeWeights.ANGLICAN,
            //              name: 'O Emmanuel,
            //              office: 'O Come, Emmanuel',
            //              type: [Calendar.FeastType]
            //              color: Calendar.Colors.PURPLE,
            //          }
            //     ]
            // },
            // 23: {
            //     isFeastDay: false,
            //     hasOptionalFeast: false,
            //     season: null,
            //     commemorations:  [
            //          {
            //              weight: Calendar.FeastTypeWeights.ANGLICAN,
            //              name: 'O Virgo Virginum,
            //              office: 'O Virgin of Virgins',
            //              type: [Calendar.FeastType]
            //              color: Calendar.Colors.PURPLE,
            //          }
            //     ]
            // },
            25: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: Calendar.Seasons.CHRISTMAS,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.PRINCIPAL,
                        title: 'The Nativity of our Lord Jesus Christ, Christmas',
                        shortTitle: 'Christmas',
                        type: [Calendar.FeastType.PRINCIPAL],
                        color: Calendar.Colors.WHITE
                    }
                ]
            },
            26: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: Calendar.Seasons.CHRISTMAS,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'St. Stephen, Deacon and Martyr',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            27: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: Calendar.Seasons.CHRISTMAS,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'St. John, Apostle and Evangelist',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            28: {
                isFeastDay: true,
                hasOptionalFeast: false,
                season: Calendar.Seasons.CHRISTMAS,
                commemorations: [
                    {
                        isRedLetter: true,
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'The Holy Innocents',
                        type: [Calendar.FeastType.HOLY_DAY],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            29: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.CHRISTMAS,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'Thomas Becket',
                        office: 'Archbishop of Canterbury, Martyr',
                        death: [1170],
                        type: [
                            Calendar.FeastType.MARTYR,
                            Calendar.FeastType.PASTOR
                        ],
                        color: Calendar.Colors.RED
                    }
                ]
            },
            31: {
                isFeastDay: false,
                hasOptionalFeast: true,
                season: Calendar.Seasons.CHRISTMAS,
                commemorations: [
                    {
                        isRedLetter: false,
                        weight: Calendar.FeastTypeWeights.ANGLICAN,
                        name: 'John Wyclif',
                        office: 'Priest and Translator of the Bible into English',
                        death: [1384],
                        type: [Calendar.FeastType.PASTOR],
                        color: Calendar.Colors.WHITE
                    }
                ]
            }
        }
    },
}