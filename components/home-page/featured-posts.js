const FeaturedPosts = (props) => {
  return (
    <ul>
      {props.list.map((post) => (
        <FeaturedPostDeatil post={post} />
      ))}
    </ul>
  );
};

export default FeaturedPosts;
