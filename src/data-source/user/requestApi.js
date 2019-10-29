import axiosInstance from '../../utils/http/index';

export const userIsExist = userName => axiosInstance.get('/v1/api/user/isExist', { params: { userName } });
