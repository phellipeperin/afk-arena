import heroBuilderService from '../heroBuilderService';

export default {
    name: 'heroWylderDatabase',
    mixins: [heroBuilderService],
    methods: {
        getWylderHeroes() {
            return [
                this.createHero(501, 'Nemora', 'Nature\'s Heart', 'INT', 'WYLDER', 'https://vignette.wikia.nocookie.net/afk-arena/images/d/d0/Yeanling.jpg/revision/latest?cb=20181210151942'),
                this.createHero(502, 'Kaz', 'Hand Of The Wood', 'DEX', 'WYLDER', 'https://vignette.wikia.nocookie.net/afk-arena/images/2/2f/CatAssassin.jpg/revision/latest?cb=20181210152007'),
                this.createHero(503, 'Lyca', 'Keeper Of Glades', 'DEX', 'WYLDER', 'https://vignette.wikia.nocookie.net/afk-arena/images/0/00/POM.jpg/revision/latest?cb=20190125033800'),
                this.createHero(504, 'Tasi', 'Dreamhopper', 'INT', 'WYLDER', 'https://vignette.wikia.nocookie.net/afk-arena/images/6/6e/Puck.jpg/revision/latest?cb=20190125034006'),
                this.createHero(505, 'Ulmus', 'Aldermarrow', 'STR', 'WYLDER', 'https://vignette.wikia.nocookie.net/afk-arena/images/a/ad/TD.jpg/revision/latest?cb=20190215024335'),
                this.createHero(506, 'Seirus', 'Savior of the Sea', 'STR', 'WYLDER', 'https://vignette.wikia.nocookie.net/afk-arena/images/e/e2/TH.jpg/revision/latest?cb=20190329063321'),
                this.createHero(507, 'Eironn', 'Stormsword', 'DEX', 'WYLDER', 'https://vignette.wikia.nocookie.net/afk-arena/images/5/5b/ElfSaber.jpg/revision/latest?cb=20190613092025'),
                this.createHero(508, 'Gorvo', 'The Indomitable', 'STR', 'WYLDER', 'https://vignette.wikia.nocookie.net/afk-arena/images/f/fa/Gorvo.jpg/revision/latest/scale-to-width-down/100?cb=20190807190501'),
                this.createHero(509, 'Lorsan', 'Wind Whisperer', 'INT', 'WYLDER', 'https://vignette.wikia.nocookie.net/afk-arena/images/9/90/BunnyMaster.jpg/revision/latest?cb=20190918153828'),
            ];
        },
    },
};
