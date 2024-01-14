import { Api } from './Api';
import { LocalStorageMock } from '../../utils/LocalStorageMock';

describe('Api', () => {
  let api: Api;
  const USERNAME = process.env['API_USERNAME'] || '';
  const PASSWORD = process.env['API_PASSWORD'] || '';

  beforeAll(() => {
    global.localStorage = new LocalStorageMock();

    api = new Api();
  });

  it('should login user', async () => {
    const user = await api.login({
      username: USERNAME,
      password: PASSWORD,
    });
    expect(user).toBeTruthy();
    expect(api._user?.token).toEqual(user.token);
  });

  it('should fetch single post with id 2', async () => {
    const post = await api.getSinglePost({ id: 2 });
    expect(post.id).toBe(2);
  });

  it('should fetch all posts', async () => {
    const posts = await api.getAllPosts();
    expect(posts).not.toHaveLength(0);
  });

  it('should fetch first 20 posts', async () => {
    const posts = await api.getAllPosts({ pageSize: 20, pageNumber: 1 });
    expect(posts).toHaveLength(20);
  });

  it('should fetch logged in user posts', async () => {
    await api.login({
      username: USERNAME,
      password: PASSWORD,
    });
    expect(api._user).not.toBeNull();

    const posts = await api.getLoggedInUserPosts();
    expect(posts).not.toHaveLength(0);
  });
});
