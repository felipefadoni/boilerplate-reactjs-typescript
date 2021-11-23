import { AxiosResponse } from 'axios';
import { api } from '../../api';

interface ResponseBodyAxiosProps {
  message: string;
  statusCode: number;
  info: null;
  body: any;
}

interface Props {
  token: string;
}

export const getAuthenticate = async ({ token }: Props): Promise<AxiosResponse<ResponseBodyAxiosProps>> =>
  api.post(`/users/authenticate`, { token });
