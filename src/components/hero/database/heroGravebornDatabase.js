import heroBuilderService from '../heroBuilderService';

export default {
    name: 'heroGravebornDatabase',
    mixins: [heroBuilderService],
    methods: {
        getGravebornHeroes() {
            return [
                this.createHero('Grezhul', 'The Corrupted', 'STR', 'GRAVEBORN', 'https://vignette.wikia.nocookie.net/afk-arena/images/4/46/DK.jpg/revision/latest?cb=20181210152237'),
                this.createHero('Shemira', 'The Corpsemaker', 'INT', 'GRAVEBORN', 'https://vignette.wikia.nocookie.net/afk-arena/images/c/c3/NDP.jpg/revision/latest?cb=20181210152255'),
                this.createHero('Thoran', 'The Fallen King', 'STR', 'GRAVEBORN', 'https://vignette.wikia.nocookie.net/afk-arena/images/0/04/SNK.jpg/revision/latest?cb=20190125035043'),
                this.createHero('Isabella', 'The Taken Soul', 'INT', 'GRAVEBORN', 'https://vignette.wikia.nocookie.net/afk-arena/images/f/fe/Wizard.jpg/revision/latest?cb=20181210152313'),
                this.createHero('Nara', 'Heartcarver', 'STR', 'GRAVEBORN', 'https://vignette.wikia.nocookie.net/afk-arena/images/0/0d/Pudge.jpg/revision/latest?cb=20190613092108'),
                this.createHero('Ferael', 'Doomwhisper', 'DEX', 'GRAVEBORN', 'https://vignette.wikia.nocookie.net/afk-arena/images/a/a6/BoneArcher.jpg/revision/latest?cb=20190214090100'),
                this.createHero('Baden', 'The Abomination', 'DEX', 'GRAVEBORN', 'https://vignette.wikia.nocookie.net/afk-arena/images/2/25/GhostSaber.jpg/revision/latest?cb=20190613092037'),
                this.createHero('Kelthur', 'Plaguegrip', 'DEX', 'GRAVEBORN', 'https://vignette.wikia.nocookie.net/afk-arena/images/c/c3/Revenger.jpg/revision/latest?cb=20190613092124'),
            ];
        },
    },
};
