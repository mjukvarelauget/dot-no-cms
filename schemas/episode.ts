import { Rule, defineField } from "sanity";
import { MdPlayCircleOutline } from "react-icons/md";

export default defineField({
  name: "episode",
  title: "Episode",
  icon: MdPlayCircleOutline,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Remember that long titles can be truncated in podcast apps",
      type: "string",
    },
    {
      name: "podcast",
      description: "Choose podcast(s) to publish this episode in",
      type: "array",
      of: [{ type: "reference", weak: true, to: [{ type: "podcast" }] }],
    },
    {
      name: "file",
      title: "Podcast media file",
      description:
        "Most podcatchers support .mp3, but other audio-formats may work as well",
      type: "file",
    },
    {
      name: "fileUrl",
      title: "External location for podcast media file",
      description: "For when you host your podcast media file elsewhere",
      type: "url",
    },
    {
      name: "duration",
      title: "Duration",
      description: "HH:MM:SS",
      type: "string",
    },
    {
      name: "subtitle",
      type: "string",
      title: "Subtitle",
    },
    {
      name: "explicit",
      title: "Explicit content",
      type: "boolean",
    },
    {
      name: "summary",
      title: "Summary",
      description:
        "An episode summary is a string containing one or more descriptive sentences summarizing your episode for potential listeners. You can specify up to 4000 characters.",
      type: "text",
    },
    {
      name: "description",
      title: "Description",
      description: `An episode description is a string containing one or more sentences describing your episode to potential listeners. You can specify up to 4000 characters.`,
      type: "text",
      validation: (Rule: Rule) => Rule.max(4000),
    },
    {
      name: "content",
      title: "Content",
      description:
        "An episode note. Where encoded is a string containing information about your episode.",
      type: "array",
      of: [{ type: "block" }],
    },
    // {
    //   name: 'linkList',
    //   title: 'Link list',
    //   description:
    //     'A more structured way to add links for show notes. Will be compiled at the end of the episode content field in a podcast RSS feed',
    //   type: 'array',
    //   of: [{type: 'linkListItem'}],
    // },
    {
      name: "slug",
      title: "Episode slug",
      type: "slug",
      description: "When you need to refer to your podcast episode in a url",
      options: {
        source: "title",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      options: {
        layout: "tags",
      },
      of: [
        {
          type: "string",
        },
      ],
    },
    // {
    //   name: 'itunes',
    //   title: 'iTunes Settings',
    //   type: 'itunesEpisodeSettings',
    // },
    {
      name: "coverArt",
      title: "Cover art",
      type: "image",
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
      name: "notes",
      type: "reference",
      title: "Tilhørende post",
      to: [{ type: "post" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "podcast.0.title",
      description: "summary",
      media: "coverArt",
      schedule: "schedule",
    },
    prepare({ title, subtitle, description, media, schedule }) {
      return {
        title,
        subtitle,
        description,
        media,
      };
    },
  },
});
