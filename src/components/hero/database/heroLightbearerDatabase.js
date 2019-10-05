import heroBuilderService from '../heroBuilderService';

export default {
    name: 'heroLightbearerDatabase',
    mixins: [heroBuilderService],
    methods: {
        getLightbearerHeroes() {
            return [
                this.createHero('Estrilda', 'Knight Of Valor', 'STR', 'LIGHTBEARER', 'https://vignette.wikia.nocookie.net/afk-arena/images/3/31/Uhlan.jpg/revision/latest?cb=20181210150421'),
                this.createHero('Belinda', 'Beam of Hope', 'INT', 'LIGHTBEARER', 'https://vignette.wikia.nocookie.net/afk-arena/images/b/b6/Priest.jpg/revision/latest?cb=20181210150452'),
                this.createHero('Raine', 'Death\'s Denier', 'DEX', 'LIGHTBEARER', 'https://vignette.wikia.nocookie.net/afk-arena/images/5/59/NBH.jpg/revision/latest?cb=20181210150527'),
                this.createHero('Fawkes', 'Death\'s Defeat', 'DEX', 'LIGHTBEARER', 'https://vignette.wikia.nocookie.net/afk-arena/images/c/c5/DevilHunter.jpg/revision/latest?cb=20190329063323'),
                this.createHero('Lucius', 'Lightbringer', 'STR', 'LIGHTBEARER', 'https://vignette.wikia.nocookie.net/afk-arena/images/c/c6/OK.jpg/revision/latest?cb=20190306063550'),
                this.createHero('Thane', 'The Exalted', 'DEX', 'LIGHTBEARER', 'https://vignette.wikia.nocookie.net/afk-arena/images/1/19/SwordMaster.jpg/revision/latest?cb=20190306063527'),
                this.createHero('Hendrik', 'The Defender', 'STR', 'LIGHTBEARER', 'https://vignette.wikia.nocookie.net/afk-arena/images/b/b7/GK.jpg/revision/latest?cb=20190613091734'),
                this.createHero('Rowan', 'The Roamer', 'INT', 'LIGHTBEARER', 'https://vignette.wikia.nocookie.net/afk-arena/images/f/fd/Rowan_Icon.png/revision/latest?cb=20190808210919'),
                this.createHero('Gwyneth', 'The Fair Maiden', 'STR', 'LIGHTBEARER', 'https://vignette.wikia.nocookie.net/afk-arena/images/f/f4/Longbow.jpg/revision/latest?cb=20190828131109'),
                this.createHero('Rosaline', 'The Kind', 'INT', 'LIGHTBEARER', 'https://vignette.wikia.nocookie.net/afk-arena/images/0/0a/Rosaline.jpg/revision/latest/scale-to-width-down/100?cb=20190807183749'),
            ];
        },
    },
};
