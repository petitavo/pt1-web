import http  from "../../shared/services/http-common.js";

export class ExaminersService{
    resourceEndpoint = '/examiners';

    getAll() {
        console.log(http.defaults.baseURL);
        console.log(this.resourceEndpoint);
        return http.get(this.resourceEndpoint);
    }

    getById(id) {
        return http.get(`${this.resourceEndpoint}/${id}`);
    }

    create(examinerResource) {
        return http.post(this.resourceEndpoint, examinerResource);
    }

    update(id, examinerResource) {
        return http.put(`${this.resourceEndpoint}/${id}`, examinerResource);
    }

    delete(id) {
        return http.delete(`${this.resourceEndpoint}/${id}`);
    }

    findByName(name) {
        return http.get(`${this.resourceEndpoint}?name=${name}`);
    }
}