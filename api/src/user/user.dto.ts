import type { User } from '@prisma/client';

export class SearchUserDto implements Partial<User> {
  id?: bigint;
  publicId?: string;
  email?: string;
}
