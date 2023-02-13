import { User } from '../../../interfaces/user.interface';

export interface CreateUser extends User {
  password: string;
  password2?: string;
}
