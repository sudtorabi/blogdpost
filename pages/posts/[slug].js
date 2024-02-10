import PostContent from "@/components/posts/post-detail/PostContent";
import { getAllSlugs, getIndividualPostDetail } from "@/util/datafetching";

const PostDetailPage = (props) => {
  return <PostContent post={props.post} />;
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
