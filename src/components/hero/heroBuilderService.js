export default {
    name: 'heroBuilderService',
    methods: {
        createHero(id, name, title, type, faction, image) {
            return {
                id,
                name,
                title,
                type,
                faction,
                image,
            };
        },
    },
};
