import {Prisma, User as PrismaUser} from '@prisma/client';
import User from '@domain/user';
import UserRepository from '@domain/user-repository';

import {prisma} from '../../../db/prisma-client';
import CreateResponseDto from '@application/user/dto/create-response-dto';

const createUserPrisma = async (input: Prisma.UserCreateInput) => {
  return (await prisma.user.create({
    data: input,
  })) as PrismaUser;
};

class PostgreSqlUserRepository implements UserRepository {
  async createUser(user: User): Promise<CreateResponseDto> {

    const createDto = user.toCreateDto();

    const __user = await createUserPrisma(
      {
        id: createDto.id.value(),
        firstName: createDto.firstName,
        lastName: createDto.lastName,
        email: createDto.email,
        password: createDto.password,
        roleId: createDto.roleId,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    );

    return createDto;
  }

}

export default PostgreSqlUserRepository;
