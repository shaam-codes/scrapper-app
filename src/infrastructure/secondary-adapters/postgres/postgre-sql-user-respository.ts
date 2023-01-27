import {Prisma, User as PrismaUser} from '@prisma/client';
import User from '../../../domain/user';
import UserRepository from '@domain/user-repository';

import {prisma} from '../../../db/prisma-client';
import CreateResponseDto from '@application/user/dto/create-response-dto';
import Uuid from '../../../domain/uuid';
import GetRequestDto from '../../../application/user/dto/get-request-dto';

const createUserPrisma = async (input: Prisma.UserCreateInput) => {
  return (await prisma.user.create({
    data: input,
  })) as PrismaUser;
};

const getUserPrisma = async (id: string) => {
  return (await prisma.user.findUniqueOrThrow({
    where: {
      id
    }
  })) as PrismaUser;
};

class PostgreSqlUserRepository implements UserRepository {
  async getUser(id: Uuid): Promise<User> {
    const user = await getUserPrisma(id.value());

    const requestDto = new GetRequestDto(
      Uuid.validate(user.id),
      user.firstName,
      user.lastName,
      user.email,
      user.password,
      user.roleId,
      user.isActive,
      user.organizationId,
      user.createdAt,
      user.updatedAt,
    );

    return User.fromGetDto(requestDto);
  }

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
