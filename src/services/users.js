import Api from './api.js';
const UserService = {
    register : (params) => Api.post('/users/register', params),
    login : async (params)=> {
        const response = await Api.post('users/login', params);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('Emplantao', response.data.user.EmPlantao);
    },
    logout: () => {
        localStorage.removeItem('user', null);
        localStorage.removeItem('token', null);
        localStorage.removeItem('Emplantao', null);
    },
    changePassword: (params) => Api.put('/users/change-password', params)
}
export default UserService;