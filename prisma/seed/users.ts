import { PrismaClient } from '@prisma/client';

export async function seedUsers(prisma: PrismaClient) {
  await prisma.user.createMany({
    data: [
      {
        username: 'john_doe',
        email: 'john@example.com',
        password_hash: 'hashedpassword1',
      },
      {
        username: 'jane_doe',
        email: 'jane@example.com',
        password_hash: 'hashedpassword2',
      }
    ],
  });
}