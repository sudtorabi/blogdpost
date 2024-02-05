// import { getFeaturedData } from "@/util/datafetching";
import Hero from "@/components/home-page/hero";
// import FeaturedPosts from "@/components/home-page/featured-posts";

const HomePage = (props) => {
  return (
    <>
      <Hero />
      {/* featured blog posts */}
      {/* <BlogPostsList list={props.featuredPosts} /> */}
      {/* <FeaturedPosts list={props.featuredPosts} /> */}
    </>
  );
};

export default HomePage;

// export const getStaticProps = async () => {
//   const featuredPostsArray = await getFeaturedData();
//   return { props: { featuredPosts: featuredPostsArray }, revalidate: 1800 };
// };
