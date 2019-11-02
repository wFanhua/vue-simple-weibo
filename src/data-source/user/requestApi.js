import axiosInstance from '../../utils/http/index';

export const userIsExist = userName => axiosInstance.get('/v1/api/user/isExist', { params: { userName } });

export const registerUser = ({ userName, password, gender }) => axiosInstance.post('/v1/api/user/register', { userName, password, gender });