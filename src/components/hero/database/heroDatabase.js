import heroCelestialDatabase from './heroCelestialDatabase';
import heroHypogeanDatabase from './heroHypogeanDatabase';
import heroLightbearerDatabase from './heroLightbearerDatabase';
import heroMaulerDatabase from './heroMaulerDatabase';
import heroWylderDatabase from './heroWylderDatabase';
import heroGravebornDatabase from './heroGravebornDatabase';

export default {
    name: 'heroDatabase',
    mixins: [
        heroCelestialDatabase,
        heroHypogeanDatabase,
        heroLightbearerDatabase,
        heroMaulerDatabase,
        heroWylderDatabase,
        heroGravebornDatabase,
    ],
    data() {
        return {
            heroList: [],
        };
    },
    created() {
        let heroes = [];
        heroes = heroes.concat(this.getCelestialHeroes());
        heroes = heroes.concat(this.getHypogeansHeroes());
        heroes = heroes.concat(this.getLightbearerHeroes());
        heroes = heroes.concat(this.getMaulerHeroes());
        heroes = heroes.concat(this.getWylderHeroes());
        heroes = heroes.concat(this.getGravebornHeroes());
        this.heroList = heroes;
    },
};
