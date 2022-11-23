import { Block } from "payload/types";
import link, { Type as LinkType } from "../../fields/link";
import backgroundColor, { Type as BackgroundColorType } from "../../fields/backgroundColor";

export type Action = {
  link: LinkType;
};

export type Type = {
  backgroundColor: BackgroundColorType;
  content: unknown;
  actions: Action[];
};

const CallToAction: Block = {
  slug: "call-to-action",
  labels: {
    singular: "Call to Action",
    plural: "Calls to Action",
  },
  fields: [
    backgroundColor,
    {
      name: "content",
      type: "richText",
      label: "Content",
      required: true,
    },
    {
      name: "actions",
      label: "Actions",
      type: "array",
      minRows: 1,
      maxRows: 2,
      fields: [link],
    },
  ],
};

export default CallToAction;
