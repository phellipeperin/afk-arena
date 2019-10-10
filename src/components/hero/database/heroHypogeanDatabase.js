import heroBuilderService from '../heroBuilderService';

export default {
    name: 'heroHypogeanDatabase',
    mixins: [heroBuilderService],
    methods: {
        getHypogeansHeroes() {
            return [
                this.createHero(201, 'Ezizh', 'Hellborn', 'STR', 'HYPOGEAN', 'https://vignette.wikia.nocookie.net/afk-arena/images/2/2f/Bane.jpg/revision/latest?cb=20190428030515'),
                this.createHero(202, 'Mehira', 'The Mind Cager', 'INT', 'HYPOGEAN', 'https://vignette.wikia.nocookie.net/afk-arena/images/b/bc/Mehira.jpg/revision/latest?cb=20190808204656'),
                this.createHero(203, 'Zolrath', 'Voidbinder', 'DEX', 'HYPOGEAN', 'https://vignette.wikia.nocookie.net/afk-arena/images/4/4a/DT.jpg/revision/latest?cb=20190828130814'),
            ];
        },
    },
};
