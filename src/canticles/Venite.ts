import { Canticle } from 'types/canticles/index';

export const VeniteShort: Canticle = {
    id: 'venite-short',
    title: 'Venite',
    englishTitle: 'O Come',
    scriptureRef: 'Psalm 95:1–7',
    text: [
        {
            v: 'O come, let us sing unto the LORD; *',
            r: 'let us heartily rejoice in the strength of our salvation.'
        },
        {
            v: 'Let us come before his presence with thanksgiving *',
            r: 'and show ourselves glad in him with psalms.'
        },
        {
            v: 'For the LORD is a great God *',
            r: 'and a great King above all gods.'
        },
        {
            v: 'In his hands are all the depths of the earth *',
            r: 'and the heights of the hills are his also.'
        },
        {
            v: 'The sea is his, for he made it, *',
            r: 'and his hands prepared the dry land'
        },
        {
            v: 'O come, let us worship and fall down, *',
            r: 'and kneel ebfore the LORD our Maker.'
        },
        {
            v: 'For he is our God, *',
            r: 'and we are the people of his pasture\nand the sheep of his hand.'
        }
    ]
};

export const VeniteExtension = {
    id: 'venite-extension',
    scriptureRef: '8–11',
    text: [
        {
            v: 'Today, if you will hear his voice, harden not your hearts *',
            r: 'as in the provocation, and as in the day of temptation in\n\tthe wilderness,'
        },
        {
            v: 'When your fathers tested me, *',
            r: 'and put me to the proof, though they had seen my works.'
        },
        {
            v: 'Forty years long was I grieved with this generation, and said, *',
            r: '"It is a people that err in their hearts,\n\tfor they have not known my ways,"'
        },
        {
            v: 'Of whom I swore in my wrath *',
            r: 'that they should not enter into my rest'
        }
    ]
};

export const VeniteLong: Canticle = VeniteShort;
VeniteLong.scriptureRef = VeniteLong.scriptureRef + ', ' + VeniteExtension.scriptureRef;
VeniteLong.text.concat(VeniteExtension.text);
