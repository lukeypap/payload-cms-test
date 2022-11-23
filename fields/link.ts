import { Field } from "payload/types";

export type Type = {
  label: "string";
  url: "string";
};

const link: Field = {
  name: "link",
  type: "group",
  fields: [
    {
      name: "type",
      type: "radio",
      defaultValue: "page",
      options: [
        {
          label: "Page",
          value: "page",
        },
        {
          label: "Custom URL",
          value: "custom",
        },
      ],
      admin: {
        layout: "horizontal",
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "label",
          label: "Label",
          type: "text",
          required: true,
          admin: {
            width: "20%",
          },
        },
        {
          name: "page",
          label: "Page Link",
          type: "relationship",
          relationTo: "pages",
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData?.type === "page",
            width: "20%",
          },
        },
        {
          name: "url",
          label: "Custom URL",
          type: "text",
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData?.type === "custom",
            width: "20%",
          },
        },
      ],
    },
  ],
};

export default link;
