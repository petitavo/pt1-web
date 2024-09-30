import http from "../../shared/services/http-common.js";

export class  MentalStateExamService{
    resourceEndpoint = '/mental-state-exams';

    getAll() {
        console.log(http.defaults.baseURL);
        console.log(this.resourceEndpoint);
        return http.get(this.resourceEndpoint);
    }

    getById(id) {
        return http.get(`${this.resourceEndpoint}/${id}`);
    }

    create(mentalStateExamResource) {
        return http.post(this.resourceEndpoint, mentalStateExamResource);
    }

    update(id, mentalStateExamResource) {
        return http.put(`${this.resourceEndpoint}/${id}`, mentalStateExamResource);
    }

    delete(id) {
        return http.delete(`${this.resourceEndpoint}/${id}`);
    }

    findByName(name) {
        return http.get(`${this.resourceEndpoint}?name=${name}`);
    }
}