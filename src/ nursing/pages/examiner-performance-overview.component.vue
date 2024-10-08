<script>
import { MentalStateExamService } from "../services/mental-state-exam.service.js";
import { ExaminersService } from "../services/examiners.service.js";
import { Mental } from "../model/mental-state-exam.entity.js";
import { Examiner } from "../model/examiners.entity.js";

export default {
  name: "examiner-performance-overview",
  data() {
    return {
      examiners: [],
      mentalStateExams: [],
      mentalStateExamService: null,
      examinerService: null,
    };
  },
  computed: {
    //#region Computed Properties
    examinerPerformance() {
      return this.examiners.map(examiner => {
        const exams = this.mentalStateExams.filter(exam => exam.examinerId === examiner.id);

        const totalScore = exams.reduce((sum, exam) =>
            sum + exam.orientationScore + exam.registrationScore +
            exam.attentionAndCalculationScore + exam.recallScore + exam.languageScore, 0
        );

        const examCount = exams.length;
        const averageScore = examCount ? totalScore / examCount : 0;

        return {
          examiner,
          examCount,
          averageScore
        };
      });
    }
    //#endregion
  },
  //#region Lifecycle Hooks
  created() {
    this.mentalStateExamService = new MentalStateExamService();
    this.examinerService = new ExaminersService();

    this.mentalStateExamService.getAll().then(response => {
      this.mentalStateExams = response.data.map(exam => new Mental(exam));
    }).catch(error => console.error(error));

    this.examinerService.getAll().then(response => {
      this.examiners = response.data.map(examinerData => new Examiner(examinerData));
    }).catch(error => console.error(error));
  }
  //#endregion
};
</script>

<template>
  <pv-card class="mb-4">
    <template #title>Examiner Performance Overview</template>
    <template #content>
      <div class="grid">
        <div v-for="performance in examinerPerformance" :key="performance.examiner.id" class="col-12 md:col-6 mb-3">
          <pv-card>
            <template #header>
              {{ performance.examiner.firstName }} {{ performance.examiner.lastName }}
            </template>
            <template #title>
              NPI: {{ performance.examiner.nationalProviderIdentifier }}
            </template>
            <template #subtitle>
              Mental State Exam Performance
            </template>
            <template #content>
              <div>
                <p><strong>Assigned Mental State Exam Count:</strong> {{ performance.examCount }}</p>
                <p><strong>Average Total Score:</strong> {{ performance.averageScore.toFixed(2) }}</p>
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