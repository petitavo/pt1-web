<script>
import ScoreAnalyticsComponent from "../../ nursing/components/score-analytics.component.vue";

export default {
  name: "home",
  components: {
    ScoreAnalyticsComponent
  }
}
</script>

<template>
  <div class="w-full">
    <pv-card class="mb-4">
      <template #title>
        <h1 class="text-4xl font-bold">{{ $t('home') }}</h1>
      </template>
      <template #content>
        <p class="mb-4">{{ $t('welcome') }}</p>
        <ScoreAnalyticsComponent></ScoreAnalyticsComponent>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
</style>