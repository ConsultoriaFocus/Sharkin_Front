import Api from './api';
console.log(localStorage.getItem('token'));
const SharkinService = {
    index: () => Api.get('/sharkin/list', {
        headers : {'x-access-token': localStorage.getItem('token')}
    }),
    sharkin: () => Api.post('/sharkin/sharkin',null, {
        headers : {'x-access-token': localStorage.getItem('token')}
    }),
    sharkout: () => Api.put('/sharkin/sharkout',null, {
        headers : {'x-access-token': localStorage.getItem('token')}
    })
}

export default SharkinService;