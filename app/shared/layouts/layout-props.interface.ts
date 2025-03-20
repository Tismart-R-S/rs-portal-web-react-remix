import { UserResponseModel } from '@data/models/user.model';

export interface HeaderProps {
  user: UserResponseModel | null | undefined;
}

export interface ProfileButtonsProps {
  user: UserResponseModel;
}
