import { Block } from "payload/types";
import { MediaType } from "../../collections/Media";
import stat, { Type as StatType } from "../../fields/stats";

export type Image = {
  image: MediaType;
};

export type Type = {
  images: Image[];
  stats: StatType[];
};

const ImageStatCollage: Block = {
  slug: "image-stat-collage",
  labels: {
    singular: "Image Stat Collage",
    plural: "Image Stat Collages",
  },
  fields: [
    {
      name: "stats",
      type: "array",
      label: "Statistics",
      minRows: 1,
      maxRows: 3,
      fields: [stat],
    },
    {
      name: "images",
      label: "Images",
      type: "array",
      minRows: 3,
      maxRows: 6,
      fields: [
        {
          type: "upload",
          name: "image",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};

export default ImageStatCollage;
