import { UserResponseModel } from '@data/models/user.model';

export interface HeaderProps {
  user: UserResponseModel | null;
}

export interface ProfileButtonsProps {
  user: UserResponseModel;
}
