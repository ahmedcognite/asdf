import styles from './Posts.module.scss';
import { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../../providers';
import { Post as PostType } from '@asdf/sdk';
import { Button, Post } from '@asdf/ui';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

export const Posts: React.FC = () => {
  const { api } = useContext(ApiContext);

  const pageSize = 50;
  const [currentPage, setCurrentPage] = useState(1);
  const [isAllFetched, setIsAllFetched] = useState(false);
  const [posts, setPosts] = useState<PostType[]>([]);

  const { data, error, isLoading } = useQuery({
    queryKey: ['posts', pageSize, currentPage],
    queryFn: () => api?.getAllPosts({ pageSize, pageNumber: currentPage }),
    placeholderData: keepPreviousData,
    staleTime: 5000,
  });

  useEffect(() => {
    if (data) {
      setPosts((prev) => [...prev, ...data]);
    }
    if (data?.length === 0) {
      setIsAllFetched(true);
    }
  }, [data]);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Something went wrong...</p>;

  return (
    <div className={styles['posts-container']}>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          tags={post.tags}
          content={post.body}
          reactions={post.reactions}
        />
      ))}

      {!isAllFetched ? (
        <Button
          onClick={() => {
            if (!isAllFetched) setCurrentPage((prev) => prev + 1);
          }}
        >
          Load more
        </Button>
      ) : (
        <p>All posts have been fetched.</p>
      )}
    </div>
  );
};
