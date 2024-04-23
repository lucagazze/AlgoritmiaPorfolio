import { defineType, defineField, defineArrayMember } from 'sanity'

export const project = defineType({
  type: "document",
  name: "project",
  fields: [
    defineField({ type: "string", name: "title" }),
    defineField({ type: "slug", name: "slug", options: { source: "title" } }),
    defineField({ type: "text", name: "description" }),
    defineField({
      type: "array",
      name: "content",
      of: [
        defineArrayMember({ type: "block" }),
        defineArrayMember({
          type: "image",
          fields: [{ type: "string", name: "caption" }],
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      type: "array",
      name: "tags",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({ type: "datetime", name: "date" }),
    defineField({ type: "string", name: "client" }),
    defineField({ type: "url", name: "url" }),
    defineField({
      type: "array",
      name: "images",
      of: [
        defineArrayMember({
          type: "image",
          fields: [{ type: "string", name: "caption" }],
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      type: "reference",
      name: "category",
      to: [{ type: "category" }],
    }),
  ],
});

