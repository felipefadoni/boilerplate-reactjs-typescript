export interface UserEntity {
  id: string;
  login: string;
  full_name: string;
  email: string;
}

export interface UserScopeSmp {
  id: string;
  login: string;
  fullName: string;
  email: string;
  companyId: string;
}
