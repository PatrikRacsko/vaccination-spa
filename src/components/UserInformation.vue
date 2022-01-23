<template>
    <h4 v-if="userData">{{ `${userData.first_name} ${userData.last_name}` }}</h4>
</template>

<script setup lang="ts">
    import { UserData } from '@/types/VaccinationTypes';
    import { defineProps } from 'vue';
    defineProps<{
        userData: UserData | null
    }>()
</script>