import { Prisma, User as PrismaUser } from '@prisma/client';

import User from '@domain/user';
import UserRepository from '@domain/user-repository';
import { prisma } from '../../../db/prisma-client';

const createUserPrisma = async (input: Prisma.UserCreateInput) => {
  return (await prisma.user.create({
    data: input,
  })) as PrismaUser;
};

class PostgreSqlUserRepository implements UserRepository {
  async createUser(user: User): Promise<void> {
    const __user = await createUserPrisma(
      {
        id: 'sdsad3fgda',
        firstName: 'sdfbgldsjhkfbjk',
        lastName: 'asdsadasd',
        email: 'khsdbgkhjdsbflakjs',
        password: 'hsjdbfjkhsdbfljksd',
        roleId: 3,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    );

    console.log(typeof __user);

    return;
  }

}

export default PostgreSqlUserRepository;
