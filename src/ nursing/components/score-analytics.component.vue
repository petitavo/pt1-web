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
      loading: true,
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
          ? (this.totalScores.reduce((a, b) => a + b, 0) / this.totalScores.length).toFixed(2)
          : 0;
    }
    //#endregion
  },
  methods: {
    //#region Data Loading Methods
    loadMentalStateExams() {
      this.loading = true;
      this.mentalStateExamService.getAll().then(response => {
        this.mentalStateExams = response.data.map(exam => new Mental(exam));
        this.loading = false;
      }).catch(error => {
        console.error(error);
        this.loading = false;
      });
    },
    //#endregion
  },
  //#region Lifecycle Hooks
  created() {
    this.mentalStateExamService = new MentalStateExamService();
    this.loadMentalStateExams();
  }
  //#endregion
};
</script>

<template>
  <div class="card">
    <pv-toast/>
    <pv-card class="mb-4">
      <template #title>
        <div class="flex align-items-center">
          <i class="pi pi-chart-bar mr-2"></i>
          <span>{{ title.plural }} Analytics</span>
        </div>
      </template>
      <template #subtitle>
        <div class="flex align-items-center">
          <i class="pi pi-chart-line mr-2"></i>
          <span>Score Analytics</span>
        </div>
      </template>
      <template #content>
        <pv-data-table :value="[1]" :loading="loading" class="p-datatable-sm">
          <pv-column>
            <template #body>
              <div class="grid">
                <div class="col-12 md:col-6 lg:col-3 mb-3">
                  <pv-card>
                    <template #title>
                      <div class="flex align-items-center justify-content-center">
                        <i class="pi pi-list mr-2"></i>
                        <span>Exam Count</span>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-center">
                        <span class="text-4xl font-bold">{{ examCount }}</span>
                      </div>
                    </template>
                  </pv-card>
                </div>
                <div class="col-12 md:col-6 lg:col-3 mb-3">
                  <pv-card>
                    <template #title>
                      <div class="flex align-items-center justify-content-center">
                        <i class="pi pi-arrow-up mr-2"></i>
                        <span>Highest Score</span>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-center">
                        <span class="text-4xl font-bold">{{ highestScore }}</span>
                      </div>
                    </template>
                  </pv-card>
                </div>
                <div class="col-12 md:col-6 lg:col-3 mb-3">
                  <pv-card>
                    <template #title>
                      <div class="flex align-items-center justify-content-center">
                        <i class="pi pi-arrow-down mr-2"></i>
                        <span>Lowest Score</span>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-center">
                        <span class="text-4xl font-bold">{{ lowestScore }}</span>
                      </div>
                    </template>
                  </pv-card>
                </div>
                <div class="col-12 md:col-6 lg:col-3 mb-3">
                  <pv-card>
                    <template #title>
                      <div class="flex align-items-center justify-content-center">
                        <i class="pi pi-percentage mr-2"></i>
                        <span>Average Score</span>
                      </div>
                    </template>
                    <template #content>
                      <div class="text-center">
                        <span class="text-4xl font-bold">{{ averageScore }}</span>
                      </div>
                    </template>
                  </pv-card>
                </div>
              </div>
            </template>
          </pv-column>
        </pv-data-table>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>

</style>