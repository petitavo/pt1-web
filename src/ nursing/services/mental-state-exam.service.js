import http from "../../shared/services/http-common.js";

/**
 * Mental State Exam Service
 * @class MentalStateExamService
 * @description
 * Provides a service to interact with mental state exam data from the API.
 * It contains the following properties:
 * @property {string} resourceEndpoint - The API endpoint for mental state exams
 * It contains the following methods:
 * @method getAll - Gets all mental state exams
 */
export class MentalStateExamService {
    /**
     * API endpoint for mental state exams
     * @type {string}
     */
    resourceEndpoint = '/mental-state-exams';

    /**
     * Gets all mental state exams
     * @returns {Promise<axios.AxiosResponse<any>>} - The mental state exams data
     * @method getAll
     */
    getAll() {
        console.log(http.defaults.baseURL);
        console.log(this.resourceEndpoint);
        return http.get(this.resourceEndpoint);
    }
}