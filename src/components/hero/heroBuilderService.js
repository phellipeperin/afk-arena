export default {
    name: 'heroBuilderService',
    methods: {
        createHero(name, title, type, faction, image) {
            return {
                name,
                title,
                type,
                faction,
                image,
            };
        },
    },
};
