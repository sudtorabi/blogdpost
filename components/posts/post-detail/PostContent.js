import Image from "next/image";
import styles from "./PostContent.module.css";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const PostContent = (props) => {
  const { title, image, slug, content } = props.post;
  const imagePath = `/images/posts/${slug}/${image}`;

  const customRenderers = {
    // img(imageData) {
    //   return (
    //     <Image
    //       src={`/images/posts/${slug}/${imageData.src}`}
    //       alt={imageData.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },

    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const imageNode = node.children[0];
        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${slug}/${imageNode.properties.src}`}
              alt={imageNode.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },

    code(codeSnippet) {
      const { className, children } = codeSnippet;
      const language = className.split("-")[1];

      return (
        <SyntaxHighlighter
          language={language}
          // children={children}
          style={atomDark}
        >
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={styles.content}>
      <header className={styles.header}>
        <h1>{title}</h1>
        <Image src={imagePath} alt={title} width={200} height={150} />
      </header>
      <section>
        <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
      </section>
    </article>
  );
};

export default PostContent;
