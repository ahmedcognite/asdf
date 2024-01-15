import { Post, User } from './types';

export interface IApi {
  _user: User | null;
  login(args: { username: string; password: string }): Promise<User>;
  logout(): void;
  getUser(): User | null;
  getLoggedInUserPosts(): Promise<Post[]>;
  getAllPosts(args?: {
    pageSize?: number;
    pageNumber?: number;
  }): Promise<Post[]>;
  getSinglePost(args: { id: number }): Promise<Post>;
}
