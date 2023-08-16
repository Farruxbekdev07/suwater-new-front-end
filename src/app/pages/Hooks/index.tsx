import axios, { AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

const Mutation = data => {
  return axios
    .post<any, AxiosResponse<any>, FormData>(data.url, data.heroData, {
      headers: data.headers,
    })
    .then(res => {
      console.log(res);
      if (!res.data.errors) {
        data.setUserId(res.data.data._id);
        toast.success(res.data.message);
        data.navigate(data.path ? data.path : '/');
      } else {
        toast.error(res.data.message);
      }
    })
    .catch(e => console.error(e));
};

export const usePost = () => {
  return useMutation(Mutation);
};
