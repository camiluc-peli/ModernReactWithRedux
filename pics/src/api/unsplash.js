import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6186c43896a7b22c226e62381c6fcfa96e643fcf68d8cf2e1adc250365df6190'
    }
});