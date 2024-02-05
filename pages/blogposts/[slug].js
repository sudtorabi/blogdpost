import { getStaticPaths } from "next/dist/build/templates/pages";
import { getIndividualPostDetail } from "../../util/datafetching";

const BlogPostDetailPage = (props) => {
  return <div></div>;
};

export default BlogPostDetailPage;

export const getStaticProps = async (context) => {
  const { params } = context;
  const postDetail = await getIndividualPostDetail(params.slug);
  return { props: { post: postDetail } };
};

export const getStaticPaths = () => {};
