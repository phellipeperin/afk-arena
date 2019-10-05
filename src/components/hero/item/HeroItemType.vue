<template>
    <span class="ml-1">
        <img
            v-if="type === 'STR'"
            src="https://vignette.wikia.nocookie.net/afk-arena/images/9/97/Warrior.png/revision/latest/scale-to-width-down/50?cb=20181211130624"
            :width="size"
        >
        <img
            v-if="type === 'DEX'"
            src="https://vignette.wikia.nocookie.net/afk-arena/images/5/59/Rogue.png/revision/latest/scale-to-width-down/50?cb=20181211130613"
            :width="size"
        >
        <img
            v-if="type === 'INT'"
            src="https://vignette.wikia.nocookie.net/afk-arena/images/2/20/Mage.png/revision/latest/scale-to-width-down/50?cb=20181211130557"
            :width="size"
        >
    </span>
</template>

<script>
    export default {
        name: 'HeroItemType',
        props: {
            type: { type: String, required: true },
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
