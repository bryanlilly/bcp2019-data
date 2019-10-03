const BaseCalendar: Calendar.Year = {
    0: {
        id: 'jan',
        name: 'January',
        days: {
            1: {
                isFeastDay: true,
                hasOptionalCelebrations: false,
                season: Calendar.Seasons.CHRISTMAS,
                color: Calendar.Colors.WHITE,
                celebrations: {
                   feast: {
                       weight: Calendar.FeastTypeWeights.HOLY_DAY,
                       title: 'The Circumcision and Holy Name of Our Lord Jesus Christ',
                       type: Calendar.FeastType.HOLY_DAY
                   }
                }
            },
            2: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: Calendar.Seasons.CHRISTMAS,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Vedanayagam Samuel Azariah',
                            office: 'Bishop in South India',
                            death: 1945,
                            type: Calendar.FeastType.MISSIONARY_EVANGELIST
                        }
                    }
                }
            },
            6: {
                isFeastDay: true,
                hasOptionalCelebrations: false,
                season: Calendar.Seasons.EPIPHANY,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    feast: {
                        weight: Calendar.FeastTypeWeights.PRINCIPAL,
                        title: 'The Epiphany of Our Lord Jesus Christ',
                        type: Calendar.FeastType.PRINCIPAL
                    }
                }
            },
            10: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.RED,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'William Laud',
                            office: 'Archbishiop of Canterbury',
                            death: 1645,
                            type: Calendar.FeastType.MARTYR
                        }
                    }
                }
            },
            13: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'Hilary of Poitiers',
                            office: 'Bishop and Teacher of the Faith',
                            death: 367,
                            type: Calendar.FeastType.TEACHER_OF_FAITH

                        }
                    }
                }
            },
            14: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Kentigern',
                            office: 'Missionary to Strathclyde and Cumbria',
                            death: 603,
                            type: Calendar.FeastType.MISSIONARY_EVANGELIST
                        }
                    }
                }
            },
            17: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'Anthony',
                            office: 'Hermit in Egypt',
                            death: 356,
                            type: Calendar.FeastType.MONASTIC_RELIGIOUS
                        }
                    }
                }
            },
            18: {
                isFeastDay: true,
                hasOptionalCelebrations: false,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    feast: {
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'Confession of Peter the Apostle',
                        type: Calendar.FeastType.HOLY_DAY
                    }
                }
            },
            19: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Wulfstan',
                            office: 'Bishop of Worcester',
                            death: 1095,
                            type: Calendar.FeastType.SAINT
                        }
                    }
                }
            },
            20: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'Fabian',
                            office: 'Bishop of Rome and Martyr',
                            death: 250,
                            type: Calendar.FeastType.MARTYR
                        }
                    }
                }
            },
            21: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'Agnes',
                            office: 'Martyr at Romer',
                            death: 304,
                            type: Calendar.FeastType.MARTYR
                        }
                    }
                }
            },
            22: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'Vincent',
                            office: 'Deacon of Saragossa, Martyr',
                            death: 304,
                            type: Calendar.FeastType.MARTYR
                        }
                    }
                }
            },
            25: {
                isFeastDay: true,
                hasOptionalCelebrations: false,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    feast: {
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'The Conversion of Paul the Apostle',
                        type: Calendar.FeastType.HOLY_DAY
                    }
                }
            },
            26: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'Timothy and Titus',
                            office: 'Companions of Paul the Apostle',
                            type: Calendar.FeastType.SAINT
                        }
                    }
                }
            },
            27: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'Lydia, Dorcas, and Phoebe',
                            office: 'Helpers of the Apostles',
                            type: Calendar.FeastType.SAINT
                        }
                    }
                }
            },
            28: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'Thomas Aquinas',
                            office: 'Friar, Priest, and Teacher of the Faith',
                            death: 1274,
                            type: Calendar.FeastType.TEACHER_OF_FAITH
                        }
                    }
                }
            },
            29: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                       anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Lesslie Newbigin',
                            office: 'Bishop and Ecumenist',
                            death: 1998,
                            type: Calendar.FeastType.ECUMENIST
                        }
                    }
                }
            },
            30: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.RED,
                celebrations: {
                    optional: {
                       anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Charles',
                            office: 'King and Martyr',
                            death: 1649,
                            type: Calendar.FeastType.MARTYR
                        }
                    }
                }
            },
            31: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                       anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Samuel Shoemaker',
                            office: 'Priest and Renewer of Society',
                            death: 1649,
                            type: Calendar.FeastType.RENEWER_OF_SOCIETY
                        }
                    }
                }
            }
        }
    },
    1: {
        id: 'feb',
        name: 'February',
        days: {
            1: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: 'green',
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Brigid',
                            office: 'Abbess of Kildare',
                            death: 523,
                            type: Calendar.FeastType.SAINT
                        }
                    }
                }
            },
            2: {
                isFeastDay: true,
                hasOptionalCelebrations: false,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    feast: {
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'The Presenttion of Our Lord Jesus Christ in the Temple',
                        type: Calendar.FeastType.HOLY_DAY
                    }
                }
            },
            3: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'Anskar',
                            office: 'Bishop and Missionary to Denmark and Sweden',
                            death: 865,
                            type: Calendar.FeastType.MISSIONARY_EVANGELIST
                        }
                    }
                }
            },
            4: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'Cornelius the Centurion',
                            type: Calendar.FeastType.SAINT
                        }
                    }
                }
            },
            5: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.RED,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'Martyrs of Japan',
                            death: 1597,
                            type: Calendar.FeastType.SAINT
                        }
                    }
                }
            },
            10: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'Scholastica',
                            office: 'Abbess',
                            death: 543,
                            type: Calendar.FeastType.SAINT
                        }
                    }
                }
            },
            13: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Absalom Jones',
                            office: 'First African-American Priest',
                            death: 1818,
                            type: Calendar.FeastType.SAINT
                        }
                    }
                }
            },
            14: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'Cyril and Methodius',
                            office: 'Apostles to the Slavs',
                            death: [869, 885],
                            type: Calendar.FeastType.SAINT
                        }
                    }
                }
            },
            15: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Thomas Bray',
                            office: 'Priest and Missionary, founder of SPG and SPCK',
                            death: 1730,
                            type: Calendar.FeastType.MISSIONARY_EVANGELIST
                        }
                    }
                }
            },
            17: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.RED,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Janani Luwum',
                            office: 'Archbishop of Uganda and Martyr',
                            death: 1977,
                            type: Calendar.FeastType.MARTYR
                        }
                    }
                }
            },
            18: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'Martin Luther',
                            office: 'Reformer of the Church',
                            death: 1546,
                            type: Calendar.FeastType.REFORMER_OF_THE_CHURCH
                        }
                    }
                }
            },
            21: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'William "Billy" Graham',
                            office: 'Evangelist',
                            death: 2018,
                            type: Calendar.FeastType.MISSIONARY_EVANGELIST
                        }
                    }
                }
            },
            23: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'Polycarp',
                            office: 'Bishop of Smyrna, Martyr',
                            death: 156,
                            type: Calendar.FeastType.MARTYR
                        }
                    }
                }
            },
            24: {
                isFeastDay: true,
                hasOptionalCelebrations: false,
                season: null,
                color: Calendar.Colors.RED,
                celebrations: {
                    feast: {
                        weight: Calendar.FeastTypeWeights.PRINCIPAL,
                        title: 'Matthias the Apostle',
                        type: Calendar.FeastType.HOLY_DAY
                    }
                }
            },
            27: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'George Herbert',
                            office: 'Priest and Poet',
                            death: 1633,
                            type: Calendar.FeastType.SAINT
                        }
                    }
                }
            },
            28: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'John Cassian',
                            office: 'Monk and Teacher of the Faith',
                            type: Calendar.FeastType.TEACHER_OF_FAITH
                        }
                    }
                }
            },
        }
    },
    2: {
        id: 'mar',
        name: 'March',
        days: {
            1: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'St. David',
                            office: 'Bishop and Apostle of Wales',
                            death: 601,
                            type: Calendar.FeastType.SAINT
                        }
                    }
                }
            },
            2: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Chad of Mercia',
                            office: 'Bishop of Lichfield and Missionary',
                            death: 672,
                            type: Calendar.FeastType.MISSIONARY_EVANGELIST
                        }
                    }
                }
            },
            3: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'John and Charles Wesley',
                            office: 'Priests and Reformers of the Church',
                            death: [1791, 1788],
                            type: Calendar.FeastType.REFORMER_OF_THE_CHURCH
                        }
                    }
                }
            },
            7: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.RED,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'Perpetua and Her Companions',
                            office: 'Martyrs at Carthage',
                            death: 203,
                            type: Calendar.FeastType.MARTYR
                        }
                    }
                }
            },
            8: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Felix',
                            office: 'Bishop and Missionary to the Angles',
                            death: 647,
                            type: Calendar.FeastType.MISSIONARY_EVANGELIST
                        }
                    }
                }
            },
            10: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Robert Machray',
                            office: 'First Primate of Canada',
                            death: 1904,
                            type: Calendar.FeastType.SAINT
                        }
                    }
                }
            },
            12: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.RED,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'St. Gregory the Great',
                            office: 'Bishop of Rome and Teacher of the Faith',
                            death: 604,
                            type: Calendar.FeastType.TEACHER_OF_FAITH
                        }
                    }
                }
            },
            17: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'St. Patrick',
                            office: 'Bishop and Apostle to the Irish',
                            death: 461,
                            type: Calendar.FeastType.SAINT
                        }
                    }
                }
            },
            18: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'St. Cyril',
                            office: 'Bishop of Jerusalem and Teacher of the Faith',
                            death: 386,
                            type: Calendar.FeastType.TEACHER_OF_FAITH
                        }
                    }
                }
            },
            19: {
                isFeastDay: true,
                hasOptionalCelebrations: false,
                season: Calendar.Seasons.LENT,
                color: Calendar.Colors.PURPLE,
                celebrations: {
                    feast: {
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'St. Joseph, Husband of the Virgin Mary and Guardian of Jesus',
                        type: Calendar.FeastType.SAINT
                    }
                }
            },
            20: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'St. Cuthbert',
                            office: 'Bishop-Abbot of Lindisfarne and Missionary',
                            death: 687,
                            type: Calendar.FeastType.MISSIONARY_EVANGELIST
                        }
                    }
                }
            },
            21: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.RED,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Thomas Cranmer',
                            office: 'Archbishop of Canterbury and Martyr',
                            death: 1556,
                            type: Calendar.FeastType.MARTYR
                        }
                    }
                }
            },
            22: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'James DeKoven',
                            office: 'Priest',
                            death: 1879,
                            type: Calendar.FeastType.SAINT
                        }
                    }
                }
            },
            23: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'St. Gregory the Illuminator',
                            office: 'Missionary to Armenia',
                            death: 333,
                            type: Calendar.FeastType.MISSIONARY_EVANGELIST
                        }
                    }
                }
            },
            25: {
                isFeastDay: true,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: {
                    feast: {
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'The Annunciation of our Lord Jesus Christ to the Virgin Mary',
                        type: Calendar.FeastType.HOLY_DAY
                    }
                }
            },
            27: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Charles Henry Brent',
                            office: 'Bishop and Missionary to the Philippines',
                            death: 1929,
                            type: Calendar.FeastType.MISSIONARY_EVANGELIST
                        }
                    }
                }
            },
            29: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'John Keble',
                            office: 'Priest and Reformer of the Church',
                            death: 1866,
                            type: Calendar.FeastType.REFORMER_OF_THE_CHURCH
                        }
                    }
                }
            },
            31: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'John Donne',
                            office: 'Priest and Poet',
                            death: 1631,
                            type: Calendar.FeastType.SAINT
                        }
                    }
                }
            }
        }
    },
    3: {
        id: 'apr',
        name: 'April',
        days: {
            1: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Frederick Denison Maurice',
                            office: 'Priest and Renewer of Society',
                            death: 1872,
                            type: Calendar.FeastType.RENEWER_OF_SOCIETY
                        }
                    }
                }
            },
            2: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Henry Budd',
                            office: 'First Native Priest in Canada',
                            death: 1850,
                            type: Calendar.FeastType.SAINT
                        }
                    }
                }
            },
            3: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'James Lloyd Breck',
                            office: 'Priest and Missionary',
                            death: 1879,
                            type: Calendar.FeastType.MISSIONARY_EVANGELIST
                        }
                    }
                }
            },
            4: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'Martin Luther King, Jr.',
                            office: 'Renewer of Society',
                            death: 1968,
                            type: Calendar.FeastType.RENEWER_OF_SOCIETY
                        }
                    }
                }
            },
            7: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'Tikhon',
                            office: 'Bishop and Ecumenist',
                            death: 1925,
                            type: Calendar.FeastType.ECUMENIST
                        }
                    }
                }
            },
            8: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'William Augustus Muhlenberg',
                            office: 'Priest, Reformer of the Church, and Renewer of Society',
                            death: 1877,
                            type: Calendar.FeastType.REFORMER_OF_THE_CHURCH
                        }
                    }
                }
            },
            10: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'William Law',
                            office: 'Priest and Teacher of the Faith',
                            death: 1761,
                            type: Calendar.FeastType.TEACHER_OF_FAITH
                        }
                    }
                }
            },
            11: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'George Augustus Selwyn',
                            office: 'Bishop and Missionary to New Zealand',
                            death: 1631,
                            type: Calendar.FeastType.MISSIONARY_EVANGELIST
                        }
                    }
                }
            },
            19: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.RED,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'St. Alphege',
                            office: 'Archbishop of Canterbury and Martyr',
                            death: 1012,
                            type: Calendar.FeastType.MARTYR
                        }
                    }
                }
            },
            21: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'St. Anselm',
                            office: 'Archbishop of Canterbury and Teacher of the Faith',
                            death: 1109,
                            type: Calendar.FeastType.TEACHER_OF_FAITH
                        }
                    }
                }
            },
            23: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.RED,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'St. George',
                            office: 'Martyr',
                            death: 304,
                            type: Calendar.FeastType.MARTYR
                        }
                    }
                }
            },
            24: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Arthur Michael Ramsey',
                            office: 'Archbishop of Canterbury, Ecumenist, and Teacher of the Faith',
                            death: 1988,
                            type: Calendar.FeastType.TEACHER_OF_FAITH
                        }
                    }
                }
            },
            25: {
                isFeastDay: true,
                hasOptionalCelebrations: false,
                season: null,
                color: Calendar.Colors.RED,
                celebrations: {
                    feast: {
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'St. Mark the Evangelist',
                        type: Calendar.FeastType.HOLY_DAY
                    }
                }
            },
            29: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'St. Catherine of Siena',
                            office: 'Reformer of the Church',
                            death: 1380,
                            type: Calendar.FeastType.REFORMER_OF_THE_CHURCH
                        }
                    }
                }
            }
        }
    },
    4: {
        id: 'may',
        name: 'May',
        days: {
            1: {
                isFeastDay: true,
                hasOptionalCelebrations: false,
                season: null,
                color: Calendar.Colors.RED,
                celebrations: {
                    feast: {
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'Philip and James, Apostles',
                        type: Calendar.FeastType.HOLY_DAY
                    }
                }
            },
            2: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'St. Athanasius',
                            office: 'Bishop of Alexandria and Teacher of the Faith',
                            death: 373,
                            type: Calendar.FeastType.TEACHER_OF_FAITH
                        }
                    }
                }
            },
            8: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Julian of Norwich',
                            office: 'Anchoress',
                            death: 1471,
                            type: Calendar.FeastType.SAINT
                        }
                    }
                }
            },
            9: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'St. Gregory of Nazianzus',
                            office: 'Bishop of Canstantinople and Teacher of the Faith',
                            death: 389,
                            type: Calendar.FeastType.TEACHER_OF_FAITH
                        }
                    }
                }
            },
            15: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'St. Pachomius the Great',
                            office: 'Abbot and Organizer of Monasticism',
                            death: 346,
                            type: Calendar.FeastType.MONASTIC_RELIGIOUS
                        }
                    }
                }
            },
            16: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.RED,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'The Martyrs of Sudan',
                            death: 2011,
                            type: Calendar.FeastType.MARTYR
                        }
                    }
                }
            },
            19: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'St. Dunstan',
                            office: 'Archbishop of Caterbury and Reformer of the Church',
                            death: 988,
                            type: Calendar.FeastType.SAINT
                        }
                    }
                }
            },
            20: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Alcuin of York',
                            office: 'Deacon and Abbot of Tours',
                            death: 804,
                            type: Calendar.FeastType.SAINT
                        }
                    }
                }
            },
            21: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'St. Helena',
                            office: 'Mother of Constantine and Protector of the Holy Places',
                            death: 330,
                            type: Calendar.FeastType.SAINT
                        }
                    }
                }
            },
            24: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Jackson Kemper',
                            office: 'First Missionary Bishop in the United States',
                            death: 1870,
                            type: Calendar.FeastType.MISSIONARY_EVANGELIST
                        }
                    }
                }
            },
            25: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'St. Bede the Venerable',
                            office: 'Priest and Monk of Jarrow, Teacher of the Faith',
                            death: 735,
                            type: Calendar.FeastType.TEACHER_OF_FAITH
                        }
                    }
                }
            },
            26: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'St. Augustine of Canterbury',
                            office: 'First Archbishop of Canterbury and Missionary',
                            death: 605,
                            type: Calendar.FeastType.MISSIONARY_EVANGELIST
                        }
                    }
                }
            },
            27: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'John Calvin',
                            office: 'Reformer of the Church',
                            death: 1564,
                            type: Calendar.FeastType.REFORMER_OF_THE_CHURCH
                        }
                    }
                }
            },
            30: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Josephine Butler',
                            office: 'Renewer of Society',
                            death: 1906,
                            type: Calendar.FeastType.RENEWER_OF_SOCIETY
                        }
                    }
                }
            },
            31: {
                isFeastDay: true,
                hasOptionalCelebrations: false,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    feast: {
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'The Visitation of the Virgin Mary to Elizabeth and Zechariah',
                        type: Calendar.FeastType.HOLY_DAY
                    }
                }
            }
        }
    },
    5: {
        id: 'jun',
        name: 'June',
        days: {
            1: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.RED,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'St. Justin',
                            office: 'Teacher of the Faith and Martyr at Rome',
                            death: 165,
                            type: Calendar.FeastType.MARTYR
                        }
                    }
                }
            },
            2: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.RED,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'St. Blandina and Her Companions',
                            office: 'Martyrs at Lyons',
                            death: 177,
                            type: Calendar.FeastType.MARTYR
                        }
                    }
                }
            },
            3: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.RED,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'The Martyrs of Uganda',
                            death: [1886, 1977],
                            type: Calendar.FeastType.MARTYR
                        }
                    }
                }
            },
            4: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'John XXIII',
                            office: 'Ecumenist, and Reformer of the Church',
                            death: 1963,
                            type: Calendar.FeastType.ECUMENIST
                        }
                    }
                }
            },
            5: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.RED,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'St. Boniface',
                            office: 'Archbishop of Mainz, Missionary to the Germans, and Martyr',
                            death: 754,
                            type: Calendar.FeastType.MARTYR
                        }
                    }
                }
            },
            6: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'William Grant Broughton',
                            office: 'Bishop and Missionary to Australia',
                            death: 1853,
                            type: Calendar.FeastType.MISSIONARY_EVANGELIST
                        }
                    }
                }
            },
            8: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Thomas Ken',
                            office: 'Bishop of Bath and Wells, Non-Juror',
                            death: 1711,
                            type: Calendar.FeastType.SAINT
                        }
                    }
                }
            },
            9: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'St. Columba',
                            office: 'Abbot of Iona and Missionary to the Scots',
                            death: 597,
                            type: Calendar.FeastType.MISSIONARY_EVANGELIST
                        }
                    }
                }
            },
            10: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: null,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Josephine Butler',
                            office: 'Renewer of Society',
                            death: 1906,
                            type: Calendar.FeastType.RENEWER_OF_SOCIETY
                        }
                    }
                }
            },
            11: {
                isFeastDay: true,
                hasOptionalCelebrations: false,
                season: null,
                color: Calendar.Colors.RED,
                celebrations: {
                    feast: {
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'Barnabas the Apostle',
                        type: Calendar.FeastType.HOLY_DAY
                    }
                }
            },
            14: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'St. Basil the Great',
                            office: 'Bishop of Caesarea and Teacher of the Faith',
                            death: 379,
                            type: Calendar.FeastType.TEACHER_OF_FAITH
                        }
                    }
                }
            },
            15: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Evelyn Underhill',
                            office: 'Teacher of the Faith',
                            death: 1941,
                            type: Calendar.FeastType.TEACHER_OF_FAITH
                        }
                    }
                }
            },
            18: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.RED,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Bernard Mizeki',
                            office: 'Catechist and Martyr in Rhodesia',
                            death: 1896,
                            type: Calendar.FeastType.MARTYR
                        }
                    }
                }
            },
            19: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'Sundar Singh',
                            office: 'Evangelist in India and Teacher of the Faith',
                            death: 1929,
                            type: Calendar.FeastType.TEACHER_OF_FAITH
                        }
                    }
                }
            },
            22: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.RED,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'St. Alban',
                            office: 'First Martyr of Britain',
                            death: 240,
                            type: Calendar.FeastType.MARTYR
                        }
                    }
                }
            },
            24: {
                isFeastDay: true,
                hasOptionalCelebrations: false,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    feast: {
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'The Nativity of John the Baptist',
                        type: Calendar.FeastType.HOLY_DAY
                    }
                }
            },
            27: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'St. Cyril of Alexandria',
                            office: 'Bishop and Teacher of the Faith',
                            death: 444,
                            type: Calendar.FeastType.TEACHER_OF_FAITH
                        }
                    }
                }
            },
            28: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'St. Irenause',
                            office: 'Bishop of Lyons and Teacher of the Faith',
                            death: 200,
                            type: Calendar.FeastType.TEACHER_OF_FAITH
                        }
                    }
                }
            },
            29: {
                isFeastDay: true,
                hasOptionalCelebrations: false,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.RED,
                celebrations: {
                    feast: {
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'Peter and Paul',
                        type: Calendar.FeastType.HOLY_DAY
                    }
                }
            }
        }
    },
    6: {
        id: 'jul',
        name: 'July',
        days: {
            1: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'Canaday Day',
                            type: Calendar.FeastType.NATIONAL
                        }
                    }
                }
            },
            4: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'Independance Day (USA)',
                            type: Calendar.FeastType.NATIONAL
                        }
                    }
                }
            },
            11: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'St. Benedict of Nursia',
                            office: 'Abbot and Founder of the Benedictine Order',
                            death: 550,
                            type: Calendar.FeastType.MONASTIC_RELIGIOUS
                        }
                    }
                }
            },
            12: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'Nathan Soderblom',
                            office: 'Archbishop of Uppsala and Ecumenist',
                            death: 1931,
                            type: Calendar.FeastType.ECUMENIST
                        }
                    }
                }
            },
            14: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'St. Bonaventure',
                            office: 'Friar, Bishop, and Teacher of the Faith',
                            death: 240,
                            type: Calendar.FeastType.TEACHER_OF_FAITH
                        }
                    }
                }
            },
            15: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'St. Olga and St. Vladimir',
                            office: 'Patrons of the Church in Russia',
                            death: [969, 1016],
                            type: Calendar.FeastType.SAINT
                        }
                    }
                }
            },
            17: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'William White',
                            office: 'Bishop of Pennsylvania and First Presiding Bishop of the Church in the USA',
                            death: 1836,
                            type: Calendar.FeastType.PASTOR
                        }
                    }
                }
            },
            18: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'St. Macrina',
                            office: 'Nun and Teacher of the Faith',
                            death: 379,
                            type: Calendar.FeastType.TEACHER_OF_FAITH
                        }
                    }
                }
            },
            19: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'St. Gregory of Nyssa',
                            office: 'Bishop of Nyssa and Teacher of the Faith',
                            death: 396,
                            type: Calendar.FeastType.TEACHER_OF_FAITH
                        }
                    }
                }
            },
            20: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.RED,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'Margaret of Antioch',
                            office: '',
                            death: 306,
                            type: Calendar.FeastType.MARTYR
                        }
                    }
                }
            },
            22: {
                isFeastDay: true,
                hasOptionalCelebrations: false,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    feast: {
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'Mary Magdalene',
                        type: Calendar.FeastType.HOLY_DAY
                    }
                }
            },
            24: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'Thomas à Kempis',
                            office: 'Priest and Teacher of the Faith',
                            death: 1471,
                            type: Calendar.FeastType.TEACHER_OF_FAITH
                        }
                    }
                }
            },
            25: {
                isFeastDay: true,
                hasOptionalCelebrations: false,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.RED,
                celebrations: {
                    feast: {
                        weight: Calendar.FeastTypeWeights.HOLY_DAY,
                        title: 'James the Elder',
                        type: Calendar.FeastType.HOLY_DAY
                    }
                }
            },
            26: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'The Parents of the Virgin Mary',
                            type: Calendar.FeastType.SAINT
                        }
                    }
                }
            },
            27: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'William Reed Huntington',
                            office: 'Priest and Ecumentist',
                            death: 1909,
                            type: Calendar.FeastType.ECUMENIST
                        }
                    }
                }
            },
            29: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        ecumenical: {
                            weight: Calendar.FeastTypeWeights.ECUMENICAL,
                            name: 'Lazarus, Mary, and Martha',
                            office: 'Companions of our Lord',
                            type: Calendar.FeastType.SAINT
                        }
                    }
                }
            },
            30: {
                isFeastDay: false,
                hasOptionalCelebrations: true,
                season: Calendar.Seasons.ORDINARY,
                color: Calendar.Colors.WHITE,
                celebrations: {
                    optional: {
                        anglican: {
                            weight: Calendar.FeastTypeWeights.ANGLICAN,
                            name: 'William Wilberforce',
                            office: 'Renewer of Society',
                            death: 1833,
                            type: Calendar.FeastType.RENEWER_OF_SOCIETY
                        }
                    }
                }
            }
        }
    },
    7: {
        id: 'aug',
        name: 'August',
        days: {
            1: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            2: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            3: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            4: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            5: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            6: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            7: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            8: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            9: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            10: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            11: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            12: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            13: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            14: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            15: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            16: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            17: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            18: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            19: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            20: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            21: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            22: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            23: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            24: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            25: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            26: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            27: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            28: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            29: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            30: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            31: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            }
        }
    },
    8: {
        id: 'sep',
        name: 'September',
        days: {
            1: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            2: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            3: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            4: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            5: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            6: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            7: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            8: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            9: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            10: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            11: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            12: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            13: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            14: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            15: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            16: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            17: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            18: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            19: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            20: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            21: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            22: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            23: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            24: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            25: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            26: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            27: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            28: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            29: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            30: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            31: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            }
        }
    },
    9: {
        id: 'oct',
        name: 'October',
        days: {
            1: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            2: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            3: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            4: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            5: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            6: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            7: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            8: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            9: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            10: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            11: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            12: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            13: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            14: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            15: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            16: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            17: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            18: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            19: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            20: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            21: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            22: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            23: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            24: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            25: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            26: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            27: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            28: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            29: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            30: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            31: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            }
        }
    },
    10: {
        id: 'nov',
        name: 'November',
        days: {
            1: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            2: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            3: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            4: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            5: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            6: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            7: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            8: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            9: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            10: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            11: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            12: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            13: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            14: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            15: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            16: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            17: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            18: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            19: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            20: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            21: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            22: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            23: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            24: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            25: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            26: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            27: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            28: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            29: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            30: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            31: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            }
        }
    },
    11: {
        id: 'dec',
        name: 'December',
        days: {
            1: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            2: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            3: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            4: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            5: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            6: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            7: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            8: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            9: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            10: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            11: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            12: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            13: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            14: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            15: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            16: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            17: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            18: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            19: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            20: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            21: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            22: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            23: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            24: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            25: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            26: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            27: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            28: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            29: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            30: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            },
            31: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: null,
                color: 'green',
                celebrations: null
            }
        }
    },
}