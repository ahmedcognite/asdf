import { IApi } from './IApi';
import { Post, User } from './types';

export const LS_USER_KEY = 'user';

export class Api implements IApi {
  _user: User | null = null;

  constructor() {
    const storedUser = localStorage?.getItem(LS_USER_KEY) ?? null;

    if (storedUser) {
      this._user = JSON.parse(storedUser);
    }
  }

  async login({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Promise<User> {
    try {
      const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
          // expiresInMins: 60, // optional
        }),
      });

      if (!res.ok) throw new Error(`${res.status} - ${res.statusText}`);

      const user: User = await res.json();
      this._user = user;

      localStorage?.setItem(LS_USER_KEY, JSON.stringify(user));

      return Promise.resolve(user);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  logout() {
    localStorage?.removeItem(LS_USER_KEY);
    this._user = null;
  }

  getUser(): User | null {
    return this._user;
  }

  async getLoggedInUserPosts(): Promise<Post[]> {
    try {
      if (!this._user)
        throw new Error(
          'Error: User is not logged in. Use `login({username: ..., password: ...})` method to login before calling this method.'
        );

      const res = await fetch(
        `https://dummyjson.com/users/${this._user.id}/posts`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${this._user.token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!res.ok) throw new Error(`${res.status} - ${res.statusText}`);

      const resJson = await res.json();
      const posts: Post[] = 'posts' in resJson ? resJson.posts : [];
      return Promise.resolve(posts);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async getAllPosts({
    pageSize = 0,
    pageNumber = 0,
  }: {
    pageSize?: number;
    pageNumber?: number;
  } = {}): Promise<Post[]> {
    try {
      const limit = pageSize || 0;
      const skip = pageNumber * pageSize - pageSize || 0;

      const res = await fetch(
        `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`
      );

      if (!res.ok) throw new Error(`${res.status} - ${res.statusText}`);

      const resJson = await res.json();
      const posts: Post[] = 'posts' in resJson ? resJson.posts : [];
      return Promise.resolve(posts);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async getSinglePost({ id }: { id: number }): Promise<Post> {
    return fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => Promise.resolve(res.json()))
      .catch((err) => Promise.reject(err));
  }
}
