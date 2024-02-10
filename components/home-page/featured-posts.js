import PostsGrid from "../posts/PostsGrid";
import styles from "./featured-posts.module.css";

const FeaturedPosts = (props) => {
  return (
    <section className={styles.latest}>
      <h2>Featured posts</h2>
      <PostsGrid list={props.list} />
    </section>
  );
};

export default FeaturedPosts;
