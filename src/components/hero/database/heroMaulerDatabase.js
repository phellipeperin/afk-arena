import heroBuilderService from '../heroBuilderService';

export default {
    name: 'heroMaulerDatabase',
    mixins: [heroBuilderService],
    methods: {
        getMaulerHeroes() {
            return [
                this.createHero('Brutus', 'The Blood Claw', 'STR', 'MAULER', 'https://vignette.wikia.nocookie.net/afk-arena/images/4/40/LionJugg.jpg/revision/latest?cb=20181210151644'),
                this.createHero('Khasos', 'The Unruly', 'STR', 'MAULER', 'https://vignette.wikia.nocookie.net/afk-arena/images/2/23/Troll.jpg/revision/latest?cb=20181210151704'),
                this.createHero('Vurk', 'The Devious', 'DEX', 'MAULER', 'https://vignette.wikia.nocookie.net/afk-arena/images/b/b7/Mouse.jpg/revision/latest?cb=20181210151726'),
                this.createHero('Numisu', 'The All Seer', 'INT', 'MAULER', 'https://vignette.wikia.nocookie.net/afk-arena/images/4/42/WD.jpg/revision/latest?cb=20190125035152'),
                this.createHero('Skreg', 'The Cunning', 'STR', 'MAULER', 'https://vignette.wikia.nocookie.net/afk-arena/images/e/e5/Mag.jpg/revision/latest?cb=20190327063441'),
                this.createHero('Warek', 'The Untamed', 'STR', 'MAULER', 'https://vignette.wikia.nocookie.net/afk-arena/images/5/57/Bear.jpg/revision/latest?cb=20190215024308'),
                this.createHero('Antandra', 'Desert Fury', 'DEX', 'MAULER', 'https://vignette.wikia.nocookie.net/afk-arena/images/5/5f/Valkyrie.jpg/revision/latest?cb=20190821234008'),
                this.createHero('Safiya', 'Daughter of the Desert', 'INT', 'MAULER', 'https://vignette.wikia.nocookie.net/afk-arena/images/7/7a/NOD.jpg/revision/latest?cb=20190612094138'),
                this.createHero('Satrana', 'Flame Weaver', 'INT', 'MAULER', 'https://vignette.wikia.nocookie.net/afk-arena/images/7/71/Satrana_Icon.jpg/revision/latest?cb=20190815232505'),
            ];
        },
    },
};
