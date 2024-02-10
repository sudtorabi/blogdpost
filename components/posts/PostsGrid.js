import PostItem from "./PostItem";
import styles from "./PostsGrid.module.css";

const PostsGrid = (props) => {
  return (
    <ul className={styles.grid}>
      {props.list.map((bp) => (
        <PostItem key={bp.slug} post={bp} />
      ))}
    </ul>
  );
};

export default PostsGrid;
