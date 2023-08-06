import blockContent from "./blockContent";
import category from "./category";
import post from "./post";
import author from "./author";
import mjukvare from "./mjukvare";
import episode from "./episode";
import podcast from "./podcast";
import source from "./source";

// Then we give our schema to the builder and provide the result to Sanity
export default [
  mjukvare,
  post,
  author,
  category,
  blockContent,
  episode,
  podcast,
  source,
];
