import AllPosts from "@/components/posts/AllPosts";
import { getAllPostsData } from "@/util/datafetching";

const BlogPosts = (props) => {
  return <AllPosts list={props.allPosts} />;
};

export default BlogPosts;

export const getStaticProps = () => {
  const allPostsArray = getAllPostsData();
  return { props: { allPosts: allPostsArray }, revalidate: 1800 };
};
