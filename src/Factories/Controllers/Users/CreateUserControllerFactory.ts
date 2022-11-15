import { CreateUserController } from '~/Controllers/Users';
import { UserOutputRepository } from '~/Repositories/UserOutput.repository';
import { UsersRepository } from '~/Repositories/Users.repositoy';
import { UserService } from '~/Services/User.service';

export function CreateUserControllerFactory() {
  const UsersRepositoryInstance = new UsersRepository();
  const UserOutputRepositoryInstance = new UserOutputRepository();
  const UserServiceInstance = new UserService(
    UsersRepositoryInstance,
    UserOutputRepositoryInstance
  );
  return new CreateUserController(UserServiceInstance);
}
