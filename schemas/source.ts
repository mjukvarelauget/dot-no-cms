import { defineField } from "sanity";
import { BsBookmarkPlusFill } from "react-icons/bs";

export default defineField({
  name: "source",
  title: "Kilde",
  type: "document",
  icon: BsBookmarkPlusFill,
  fields: [
    {
      title: "Intern tittel",
      name: "title",
      type: "string",
      description: "Navn for internt i Sanity",
    },
    {
      name: "source",
      title: "Apa eller liggnende",
      type: "string",
      description: "Smell inn en så APAete streng som mulig her takk",
    },
    {
      name: "url",
      type: "url",
      title: "Lenke",
      description: "Lenke til hvor mange kan hente ressurs om mulig",
    },
  ],
});
