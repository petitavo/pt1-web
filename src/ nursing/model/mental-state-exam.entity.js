/**
 * Mental State Exam entity
 * @class Mental
 * @description
 * Represents a mental state examination. It contains the following properties:
 * @property {string} id - The unique identifier of the mental state exam
 * @property {string} patientId - The identifier of the patient
 * @property {string} examinerId - The identifier of the examiner
 * @property {string} examDate - The date of the examination
 * @property {number} orientationScore - The score for orientation
 * @property {number} registrationScore - The score for registration
 * @property {number} attentionAndCalculationScore - The score for attention and calculation
 * @property {number} recallScore - The score for recall
 * @property {number} languageScore - The score for language
 */
export class Mental {
    /**
     * Creates an instance of Mental
     * @param {Object} params - The parameters to create a Mental state exam
     * @param {string} [params.id=''] - The unique identifier of the mental state exam
     * @param {string} [params.patientId=''] - The identifier of the patient
     * @param {string} [params.examinerId=''] - The identifier of the examiner
     * @param {string} [params.examDate=''] - The date of the examination
     * @param {number} [params.orientationScore=0] - The score for orientation
     * @param {number} [params.registrationScore=0] - The score for registration
     * @param {number} [params.attentionAndCalculationScore=0] - The score for attention and calculation
     * @param {number} [params.recallScore=0] - The score for recall
     * @param {number} [params.languageScore=0] - The score for language
     * @returns {Mental} - An instance of Mental
     */
    constructor({
                    id = '',
                    patientId = '',
                    examinerId = '',
                    examDate = '',
                    orientationScore = 0,
                    registrationScore = 0,
                    attentionAndCalculationScore = 0,
                    recallScore = 0,
                    languageScore = 0
                }) {
        this.id = id;
        this.patientId = patientId;
        this.examinerId = examinerId;
        this.examDate = examDate;
        this.orientationScore = orientationScore;
        this.registrationScore = registrationScore;
        this.attentionAndCalculationScore = attentionAndCalculationScore;
        this.recallScore = recallScore;
        this.languageScore = languageScore;
    }
}