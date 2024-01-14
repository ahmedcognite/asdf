import styles from './Post.module.scss';
import { PropsWithChildren, useState } from 'react';

/* eslint-disable-next-line */
export type PostProps = PropsWithChildren & {
  id?: number;
  title?: string;
  content?: string;
  tags?: string[];
  reactions?: number;
};

export function Post({
  id,
  title,
  content,
  tags = [],
  reactions = 0,
}: PostProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      className={styles.post}
      onClick={() => setIsExpanded((prev: boolean) => !prev)}
    >
      <h2>{title}</h2>
      <p>
        <kbd title="Reactions">
          <span
            role="img"
            aria-label="Reactions"
            title="Reactions"
            className={styles.reactions}
          >
            ♥︎ <b>{reactions}</b>
          </span>
        </kbd>
        {tags.map((tag) => (
          <kbd key={tag} className={styles.tag}>
            {tag}
          </kbd>
        ))}
      </p>
      <p
        className={`${styles.content} ${
          isExpanded ? styles['content--expanded'] : ''
        }`}
      >
        <span>{isExpanded ? '▼' : '▶︎'}</span>&ensp;{content}
      </p>
      <p className={styles.id}>ID: {id}</p>
    </article>
  );
}

export default Post;
