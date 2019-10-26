# Book of Common Prayer 2019 Data
This repository contains the [2019 Book of Common Prayer](https://bcp2019.anglicanchurch.net), released by the [ACNA](http://anglicanchurch.net), modeled as data for consumption in JavaScript projects. The source code is written in [TypeScript](), and compiled into JavaScript, found in the `./dist` directory.

The primary intention for this repository is to be used via an API, found [here](#) (coming soon).

Currently, this data represents the Daily Offices, but will be updated in the future with the two Euchariatic rites, Ordination liturgies, etc.

## Data Documentation
Full documentation is not yet written for the data, but you can find the definition files in [src/types](bcp2019-data/src/types), which document the code via interfaces and types.

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

## Road Map – v1.0.0

1. ~~Antiphons – Daily Office~~

2. ~~Calendars~~
    - ~~Fixed Holidays~~
    - ~~Easter Table – Used to determine moveable holidays~~
    - ~~Proper Table – Used to determine weeks between Trinity and Advent~~

3. Canticles
    - Daily Office
    - TBD

4. Collects
    - ~~Daily Office Ordinary~~
    - Supplemental & Occaisional
    - Propers

5. Creeds
    - ~~Apostles'~~
    - Nicean
    - Athanasian

6. ~~Lectionary~~
    - ~~Daily Office~~
    - ~~Psalter~~
    - ~~Sundays~~
    - ~~Moveable Holy Days~~

7. Prayers
    - ~~Daily Office~~
    - TBD

8. Salutations
    - ~~Daily Office~~
    - TBD

9. Scripture
    - ~~Daily Office Opening and Closing~~
    - TBD

10. Versicles
    - ~~Daily Office~~
    - TBD

Elements for the Eucharistic rites, the Ordinals, etc. will be added in the future, and not necessarily part of the v1 release.

## Installation and Use

TBD