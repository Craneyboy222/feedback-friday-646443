/* User model */
import prisma from '../lib/database';

export const createUser = async (username: string, email: string, passwordHash: string, profileInfo?: string) => {
  return await prisma.user.create({
    data: {
      username,
      email,
      passwordHash,
      profileInfo,
    },
  });
};

export const getUserById = async (id: string) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

export const updateUserProfile = async (id: string, profileInfo: string) => {
  return await prisma.user.update({
    where: { id },
    data: { profileInfo },
  });
};
