export interface UserType {
  email: string;
  name: string;
  id: string | number;
  role?: {
    id: string | number;
    role_id: string | number;
    role_name: string;
  };
}
