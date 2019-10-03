const OldBaseCalendar: Calendar.Year = {
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
            3: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: Calendar.Seasons.CHRISTMAS,
                color: Calendar.Colors.WHITE,
                celebrations: null
            },
            4: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: Calendar.Seasons.CHRISTMAS,
                color: Calendar.Colors.WHITE,
                celebrations: null
            },
            5: {
                isFeastDay: false,
                hasOptionalCelebrations: false,
                season: Calendar.Seasons.CHRISTMAS,
                color: Calendar.Colors.WHITE,
                celebrations: null
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
    2: {
        id: 'jan',
        name: 'January',
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
    3: {
        id: 'jan',
        name: 'January',
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
    4: {
        id: 'jan',
        name: 'January',
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
    5: {
        id: 'jan',
        name: 'January',
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
    6: {
        id: 'jan',
        name: 'January',
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
    7: {
        id: 'jan',
        name: 'January',
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
        id: 'jan',
        name: 'January',
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
        id: 'jan',
        name: 'January',
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
        id: 'jan',
        name: 'January',
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
        id: 'jan',
        name: 'January',
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