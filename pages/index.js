import { getFeaturedData } from "@/util/datafetching";
import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";

const HomePage = (props) => {
  return (
    <>
      <Hero />
      {/* featured blog posts */}
      <FeaturedPosts list={props.featuredPosts} />
    </>
  );
};

export default HomePage;

export const getStaticProps = () => {
  const featuredPostsArray = getFeaturedData();
  return { props: { featuredPosts: featuredPostsArray }, revalidate: 1800 };
};
