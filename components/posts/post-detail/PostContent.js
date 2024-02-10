import Image from "next/image";
import styles from "./PostContent.module.css";
import ReactMarkdown from "react-markdown";

const PostContent = (props) => {
  const { title, image, slug, content } = props.post;
  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <article className={styles.content}>
      <header className={styles.header}>
        <h1>{title}</h1>
        <Image src={imagePath} alt={title} width={200} height={150} />
      </header>
      <section>
        <ReactMarkdown>{content}</ReactMarkdown>
      </section>
    </article>
  );
};

export default PostContent;
