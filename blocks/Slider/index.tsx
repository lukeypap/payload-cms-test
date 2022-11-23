import { Block } from "payload/types";
import { MediaType } from "../../collections/Media";
import backgroundColor, { Type as BackgroundColor } from "../../fields/backgroundColor";

export type Image = {
  image: MediaType;
};

export type Type = {
  backgroundColor: BackgroundColor;
  images: Image[];
};

const Slider: Block = {
  slug: "slider",
  labels: {
    singular: "Slider",
    plural: "Sliders",
  },
  fields: [
    backgroundColor,
    {
      name: "images",
      label: "Images",
      type: "array",
      minRows: 3,
      maxRows: 9,
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

export default Slider;
