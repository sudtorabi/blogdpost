import BlogPostItem from "./BlogPostItem";

const BlogPostsList = (props) => {
  return (
    <ul>
      {props.list.map((bp) => (
        <BlogPostItem key={bp.id} post={bp} />
      ))}
    </ul>
  );
};

export default BlogPostsList;
