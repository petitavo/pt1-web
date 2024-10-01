/**
 * Examiner entity
 * @class Examiner
 * @description
 * Represents an examiner. It contains the following properties:
 * @property {number} id - The unique identifier of the examiner
 * @property {string} firstName - The first name of the examiner
 * @property {string} lastName - The last name of the examiner
 * @property {number} nationalProviderIdentifier - The national provider identifier of the examiner
 */
export class Examiner {
    /**
     * Creates an instance of Examiner
     * @param {Object} params - The parameters to create an Examiner
     * @param {number} [params.id=0] - The unique identifier of the examiner
     * @param {string} [params.firstName=''] - The first name of the examiner
     * @param {string} [params.lastName=''] - The last name of the examiner
     * @param {number} [params.nationalProviderIdentifier=0] - The national provider identifier of the examiner
     * @returns {Examiner} - An instance of Examiner
     */
    constructor({ id = 0, firstName = '', lastName = '', nationalProviderIdentifier = 0 }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.nationalProviderIdentifier = nationalProviderIdentifier;
    }
}