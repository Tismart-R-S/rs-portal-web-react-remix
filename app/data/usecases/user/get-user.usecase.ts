import UserRepository from '@data/repositories/user.repository';

const getUserUseCase = async (token: string) => {
  const response = await UserRepository.getData(token);
  return response;
};

export default getUserUseCase;
