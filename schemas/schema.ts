import blockContent from "./blockContent";
import category from "./category";
import post from "./post";
import author from "./author";
import mjukvare from "./mjukvare";

// Then we give our schema to the builder and provide the result to Sanity
export default [mjukvare, post, author, category, blockContent];
