import PostContent from "@/components/posts/post-detail/PostContent";
import { getAllSlugs, getIndividualPostDetail } from "@/util/datafetching";
import Head from "next/head";
import { useRouter } from "next/router";

const PostDetailPage = (props) => {
  // const router = useRouter();
  return (
    <>
      <Head>
        {/* <title>{router.query.slug}</title> */}
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />;
    </>
  );
};

export default PostDetailPage;

export const getStaticProps = (context) => {
  const { slug } = context.params;
  const postDetail = getIndividualPostDetail(slug);
  return { props: { post: postDetail } };
};

export const getStaticPaths = () => {
  const allSlugs = getAllSlugs();
  const allPagesToPreGenerate = allSlugs.map((slug) => ({
    params: { slug: slug },
  }));
  return { paths: allPagesToPreGenerate, fallback: false };
};
