<template>
    <span>
        <img
            v-if="faction === 'CELESTIAL'"
            src="https://vignette.wikia.nocookie.net/afk-arena/images/6/62/Celestial_emblem.png/revision/latest/scale-to-width-down/30?cb=20190419043326"
            :width="size"
        >
        <img
            v-if="faction === 'HYPOGEAN'"
            src="https://vignette.wikia.nocookie.net/afk-arena/images/6/6b/Hypogean_emblem.png/revision/latest/scale-to-width-down/30?cb=20190419043346"
            :width="size"
        >
        <img
            v-if="faction === 'LIGHTBEARER'"
            src="https://vignette.wikia.nocookie.net/afk-arena/images/3/33/Lightbearer_emblem.png/revision/latest/scale-to-width-down/30?cb=20190417073153"
            :width="size"
        >
        <img
            v-if="faction === 'MAULER'"
            src="https://vignette.wikia.nocookie.net/afk-arena/images/6/69/Mauler_emblem.png/revision/latest/scale-to-width-down/30?cb=20190417073730"
            :width="size"
        >
        <img
            v-if="faction === 'WYLDER'"
            src="https://vignette.wikia.nocookie.net/afk-arena/images/7/70/Wilder_emblem.png/revision/latest/scale-to-width-down/30?cb=20190417073807"
            :width="size"
        >
        <img
            v-if="faction === 'GRAVEBORN'"
            src="https://vignette.wikia.nocookie.net/afk-arena/images/0/06/Graveborn_emblem.png/revision/latest/scale-to-width-down/30?cb=20190417073841"
            :width="size"
        >
    </span>
</template>

<script>
    export default {
        name: 'HeroItemFaction',
        props: {
            faction: { type: String, required: true },
        },
        data() {
            return {
                size: 24,
            };
        },
    };
</script>

<style scoped>

</style>
