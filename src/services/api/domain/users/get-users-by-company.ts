import { AxiosResponse } from 'axios';
import { api } from '../../api';

export interface GetUsersByCompanyReturn {
  id: string;
  full_name: string;
  email: string;
  profile: string;
  created_at: Date | string;
  updated_at: Date | string;
}
interface ResponseBodyAxiosProps {
  message: string;
  statusCode: number;
  info: null;
  body: {
    rows: GetUsersByCompanyReturn[];
    total: number;
  };
}

interface GetUsersByCompanyProps {
  company_id: string;
  criteria: string | null;
}

export const getUsersByCompany = async ({
  company_id,
  criteria,
}: GetUsersByCompanyProps): Promise<AxiosResponse<ResponseBodyAxiosProps>> => {
  let query = ``;

  if (criteria) query = `?criteria=${criteria}`;

  return api.get(`/users/${company_id}${query}`);
};
