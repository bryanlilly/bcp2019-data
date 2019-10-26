# Book of Common Prayer 2019 Data
This repository contains the [2019 Book of Common Prayer](http://bcp2019.anglicanchurch.net), released by the [ACNA](http://anglicanchurch.net), modeled as data for consumption in JavaScript projects. The source code is written in TypeScript ([website](https://www.typescriptlang.org/), [github](https://github.com/Microsoft/TypeScript)), and compiled into JavaScript, found in the `./dist` directory.

The primary intention for this repository is to be used via an API, found [here](#) (coming soon).

Currently, this data represents the Daily Offices, but will be updated in the future with the two Euchariatic rites, Ordination liturgies, etc.

## Data Documentation
Full documentation is not yet written for the data, but you can find the definition files in [src/types](./src/types), which document the code via interfaces and types.

## Data Overview
### Calendars and Lectionary

**Directories:** `calendars` and `lectionary`

`calendars` contain a base calendar of fixed holy days and feast days, a table for calulating Easter, and a table for calculating the Propers for the weeks between Trinity and Advent.

`lectionary` contain the Daily Office lectionary (one and two-year cycles), the Psalter (one and two-month cycles), and the eucharistic lectionaries for Sundays and Holy Days. It is currently missing moveable Holy Days for the Daily Office lectionary.

### Prayers and Collects

**Directories:** `prayers` and `collects`

`prayers` contain the prayers of Confession for the Daily Offices, the Lord's Prayer, the General Thanksgiving, the Prayer of St. John Chrysostom.

`collects` contain the collects for the Daily Offices, but is currently missing the supplemental collects for those offices.

### Call-and-Response/Versicles

**Directories:** `antiphons`, `salutations`, and `versicles`

_NOTE: Structure and file placement may change._

`antiphons` contain the ordinary and seasonal antiphons used for the Morning Office Invitatory canticle.

`salutations` contain the calls and responses that are more greeting-like or exhortatory in nature. These include the _sursum corda_ ("Lift up your hearts…"), the _vobiscums_ ("The Lord be with you…", "Peace be with you…"), etc.

`versicles` contain the _preces_  such as the _kyrie_ ("Lord, have mercy…"), _DeusInAdiutorium_ ("O God, make speed to save…"), etc.

### Canticles

**Directories:** `canticles`

`canticles` contain the various canticles of the Daily Offices, such as the `Te Deum`, `Magnificat`, and `Nunc Dimittis`.

### Creeds

**Directories:** `creeds`

`creeds` contain the creeds of the Church, i.e., the Apostles', Nicean, and Athanasian creeds.

## Road Map – v1.0.0

1. [x] ~~Antiphons – Daily Office~~

2. [x] ~~Calendars~~
    - [x] ~~Fixed Holidays~~ see: 7a24f8af, 7ddb6ea9, 4b73f05a, 4d2f4bf4, b8441c5c
    - [x] ~~Easter Table – Used to determine moveable holidays~~ see: 1cbbc994, 4cba0f7e
    - [x] ~~Proper Table – Used to determine weeks between Trinity and Advent~~ see: 32b43a18

3. [ ] Canticles
    - [x] ~~Daily Office~~
    - [ ] Supplemental

4. [ ] Collects
    - [x] ~~Daily Office Ordinary~~
    - [ ] Seasonal
    - [ ] Occaisional
    - [x] ~~Propers~~ see: 58a4b992

5. [ ] Creeds
    - [x] ~~Apostles'~~ see: 4a18eba7
    - [ ] Nicean
    - [ ] Athanasian

6. [x] ~~Lectionary~~
    - [x] ~~Daily Office~~ see: 434bdfd4
    - [x] ~~Psalter~~ see: b8a866cb
    - [x] ~~Sundays~~ see: b64d48af, a3d419bf, 39074edf, 6914fd72, b4a6fc55, e94d80d0
    - [x] ~~Moveable Holy Days~~ see: b64d58af, 8cf63584,  dff3e25b, 44a41091, ff5bbddc

7. [] Prayers
    - [x] ~~Daily Office~~
    - TBD

8. [] Salutations
    - [x] ~~Daily Office~~
    - TBD

9. [] Scripture
    - [x] ~~Daily Office Opening and Closing~~ see: 0675ea0c
    - TBD

10. [] Versicles
    - [x] ~~Daily Office~~
    - TBD

Elements for the Eucharistic rites, the Ordinals, etc. will be added in the future, and not necessarily part of the v1 release.

## Installation and Use

TBD
