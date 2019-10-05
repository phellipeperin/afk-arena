import heroBuilderService from '../heroBuilderService';

export default {
    name: 'heroCelestialDatabase',
    mixins: [heroBuilderService],
    methods: {
        getCelestialHeroes() {
            return [
                this.createHero('Athalia', 'Harbinger of Justice', 'DEX', 'CELESTIAL', 'https://vignette.wikia.nocookie.net/afk-arena/images/3/31/GodA.jpg/revision/latest?cb=20190329064627'),
                this.createHero('Elijah & Lailah', 'Celestial Twins', 'INT', 'CELESTIAL', 'https://vignette.wikia.nocookie.net/afk-arena/images/3/3a/E%26L.jpg/revision/latest/scale-to-width-down/100?cb=20190807124850'),
                this.createHero('Orthros', 'The Seer of Origins', 'STR', 'CELESTIAL', 'https://vignette.wikia.nocookie.net/afk-arena/images/1/1d/TimeG.jpg/revision/latest?cb=20190919100029'),
            ];
        },
    },
};
