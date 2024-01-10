export type User = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
};

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: User['id'];
  tags: string[];
  reactions: number;
};
