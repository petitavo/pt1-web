<script>
import { MentalStateExamService } from "../services/mental-state-exam.service.js";
import { Mental } from "../model/mental-state-exam.entity.js";

export default {
  name: "score-analytics",
  data() {
    return {
      title: { singular: 'Mental State Exam', plural: 'Mental State Exams' },
      mentalStateExams: [],
      mentalStateExamService: null,
    };
  },
  computed: {
    //#region Computed Properties
    totalScores() {
      return this.mentalStateExams.map(exam =>
          exam.orientationScore +
          exam.registrationScore +
          exam.attentionAndCalculationScore +
          exam.recallScore +
          exam.languageScore
      );
    },
    examCount() {
      return this.mentalStateExams.length;
    },
    highestScore() {
      return this.totalScores.length ? Math.max(...this.totalScores) : 0;
    },
    lowestScore() {
      return this.totalScores.length ? Math.min(...this.totalScores) : 0;
    },
    averageScore() {
      return this.totalScores.length
          ? this.totalScores.reduce((a, b) => a + b, 0) / this.totalScores.length
          : 0;
    }
    //#endregion
  },
  //#region Lifecycle Hooks
  created() {
    this.mentalStateExamService = new MentalStateExamService();
    this.mentalStateExamService.getAll().then(response => {
      this.mentalStateExams = response.data.map(exam => new Mental(exam));
    }).catch(error => console.error(error));
  }
  //#endregion
};
</script>

<template>

    <pv-card class="mb-4">
      <template #title>
        {{ title.plural }} Analytics
      </template>
      <template #subtitle>
        Score Analytics
      </template>
      <template #content>
        <div class="grid">
          <div class="col-12 md:col-6 lg:col-3 mb-3">
            <pv-card>
              <template #title>Exam Count</template>
              <template #content>
                <div class="text-center">
                  <span class="text-4xl font-bold">{{ examCount }}</span>
                </div>
              </template>
            </pv-card>
          </div>
          <div class="col-12 md:col-6 lg:col-3 mb-3">
            <pv-card>
              <template #title>Highest Score</template>
              <template #content>
                <div class="text-center">
                  <span class="text-4xl font-bold">{{ highestScore }}</span>
                </div>
              </template>
            </pv-card>
          </div>
          <div class="col-12 md:col-6 lg:col-3 mb-3">
            <pv-card>
              <template #title>Lowest Score</template>
              <template #content>
                <div class="text-center">
                  <span class="text-4xl font-bold">{{ lowestScore }}</span>
                </div>
              </template>
            </pv-card>
          </div>
          <div class="col-12 md:col-6 lg:col-3 mb-3">
            <pv-card>
              <template #title>Average Score</template>
              <template #content>
                <div class="text-center">
                  <span class="text-4xl font-bold">{{ averageScore }}</span>
                </div>
              </template>
            </pv-card>
          </div>
        </div>
      </template>
    </pv-card>

</template>

<style scoped>
</style>