import axios from 'axios';

class ApiService {
  constructor () {
    this.apiService = axios.create({
      baseURL: 'http://localhost:5000/api'
    });
  }

  getApi() {
    return this.apiService.get('/webdevs') // Detta återger oss en Promise
      .then(({ data }) => data );           // Här sparar vi Promiset
  }

  addApi(body) {
    return this.apiService.post('/webdevs', body) // En promise
      .then(({ data }) => data );                   // Här fångas Promiset och sparas
  }

  editApi(id, body) {
    return this.apiService.put(`/webdevs/${id}`, body) // En promise
      .then(({ data }) => data );
  }

  deleteApi(id) {
    return this.apiService.delete(`/webdevs/${id}`) // En promise
      .then(({ data }) => data );
  }

}

const apiService = new ApiService();

export default apiService;