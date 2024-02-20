import AllPosts from "@/components/posts/AllPosts";
import { getAllPostsData } from "@/util/datafetching";
import Head from "next/head";

const BlogPosts = (props) => {
  return (
    <>
      <Head>
        <title>all posts</title>
      </Head>
      <AllPosts list={props.allPosts} />
    </>
  );
};

export default BlogPosts;

export const getStaticProps = () => {
  const allPostsArray = getAllPostsData();
  return { props: { allPosts: allPostsArray }, revalidate: 1800 };
};
