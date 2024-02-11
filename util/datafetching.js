import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectoryPath = path.join(process.cwd(), "content");

export const getFeaturedData = () => {
  const allPostsData = getAllPostsData();
  const featuredPosts = allPostsData.filter((post) => post.featured);
  return featuredPosts;
};

const extractPostDataFromFile = (fileName) => {
  const filePath = path.join(postsDirectoryPath, fileName);
  const fileData = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileData);
  const postData = { ...data, content, slug: fileName.replace(/\.md$/, "") };
  return postData;
};

export const getAllPostsData = () => {
  const postsFileNames = fs.readdirSync(postsDirectoryPath);
  const allPostsData = postsFileNames.map((filename) =>
    extractPostDataFromFile(filename)
  );
  const sortedPosts = allPostsData.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
};

export const getIndividualPostDetail = (slug) => {
  const postsFileNames = fs.readdirSync(postsDirectoryPath);
  const desiredFileName = postsFileNames.find(
    (fileName) => fileName.replace(/\.md$/, "") === slug
  );
  const postDetail = extractPostDataFromFile(desiredFileName);
  return postDetail;
};

export const getAllSlugs = () => {
  const postsFileNames = fs.readdirSync(postsDirectoryPath);
  const allPostSlugs = postsFileNames.map((name) => name.replace(/\.md$/, ""));
  return allPostSlugs;
};
