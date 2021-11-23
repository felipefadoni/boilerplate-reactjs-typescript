import { AxiosResponse } from 'axios';
import { api } from '../../api';
import { UserEntity, UserScopeSmp } from './entity';

interface ResponseBodyAxiosProps {
  message: string;
  statusCode: number;
  info: null;
  body: UserEntity[] | UserScopeSmp[];
}

interface GetAllUsersProps {
  company_id?: string;
  fleet_id?: string | null;
  criteria?: string;
  scope?: 'smp';
}

export const getAllUsers = async ({
  company_id,
  fleet_id,
  criteria,
  scope,
}: GetAllUsersProps): Promise<AxiosResponse<ResponseBodyAxiosProps>> => {
  let query = ``;

  const formatQuery = (params: string) => (query.length !== 0 ? `&${params}` : `?${params}`);

  if (company_id) query += formatQuery(`companyId=${company_id}`);

  if (fleet_id) query += formatQuery(`fleetId=${fleet_id}`);

  if (criteria) query += formatQuery(`criteria=${criteria}`);

  if (scope) query += formatQuery(`scope=${scope}`);

  return api.get(`/users${query}`);
};
