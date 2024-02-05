import BlogPostsList from "@/components/blogposts/BlogPostsList";
import { getAllPostsData } from "@/util/datafetching";

const BlogPosts = (props) => {
  return <BlogPostsList list={props.allPosts} />;
};

export default BlogPosts;

export const getStaticProps = async () => {
  const allPostsArray = await getAllPostsData();
  return { props: { allPosts: allPostsArray }, revalidate: 1800 };
};
