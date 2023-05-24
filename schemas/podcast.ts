// podcast.js

import { defineField } from "sanity";
import { MdPodcasts } from "react-icons/md";

export default defineField({
  name: "podcast",
  title: "Podcast",
  icon: MdPodcasts,
  description: "Create and configure a podcast",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      description:
        "Remember that if your title is too long, it may be truncated in various podcatchers-",
    },
    {
      name: "subtitle",
      type: "string",
      description: "That catchy tagline.",
    },
    {
      name: "slug",
      title: "Podcast slug",
      type: "slug",
      description: "For when you need to refer to your podcast in a url.",
      options: {
        source: "title",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "description",
      type: "text",
      description:
        "What is this podcast about and why should people subscribe to it?",
    },
    {
      name: "coverArt",
      title: "Cover art",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
        {
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
    },
    {
      name: "language",
      type: "string",
      description: "What language is this podcast in?",
      options: {
        list: ["Engelsk", "Norsk"],
      },
    },
    // {
    //   name: 'itunes',
    //   title: 'iTunes settings',
    //   type: 'itunes',
    //   description: 'iTunes has extra stuff',
    // },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      description: "description",
      media: "coverArt",
    },
  },
});
