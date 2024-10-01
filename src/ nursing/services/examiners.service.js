import http from "../../shared/services/http-common.js";

/**
 * Examiners Service
 * @class ExaminersService
 * @description
 * Provides a service to interact with examiner data from the API.
 * It contains the following properties:
 * @property {string} resourceEndpoint - The API endpoint for examiners
 * It contains the following methods:
 * @method getAll - Gets all examiners
 */
export class ExaminersService {
    /**
     * API endpoint for examiners
     * @type {string}
     */
    resourceEndpoint = '/examiners';

    /**
     * Gets all examiners
     * @returns {Promise<axios.AxiosResponse<any>>} - The examiners data
     * @method getAll
     */
    getAll() {
        console.log(http.defaults.baseURL);
        console.log(this.resourceEndpoint);
        return http.get(this.resourceEndpoint);
    }
}