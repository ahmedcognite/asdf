import { Post, User } from './types';

export interface IApi {
  _user: User | null;
  login(args: { username: string; password: string }): Promise<User>;
  getLoggedInUserPosts(): Promise<Post[]>;
  getAllPosts(args?: {
    pageSize?: number;
    pageNumber?: number;
  }): Promise<Post[]>;
  getSinglePost(args: { id: number }): Promise<Post>;
}
