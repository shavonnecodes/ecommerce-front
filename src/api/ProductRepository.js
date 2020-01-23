import axios from 'axios';

export class ProductRepository {
    url = 'http://localhost:8080/';
    config = {
        headers: {}
    };

    getAllProducts() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject();
                });
        })
    }

    getProductById(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/product/${id}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject();
                });
        })
    }

    updateproduct(id, product) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/products/${id}`, product, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject();
                });
        })
    }

    addproduct(id, product) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}`, product, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject();
                });
        })
    }

    deleteproduct(id) {
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/delete/${id}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject();
                });
        })
    }

}
