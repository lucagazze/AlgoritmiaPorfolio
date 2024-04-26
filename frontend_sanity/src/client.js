import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "j49d6hlk",
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: "skMpp4I5QC52Xn5gGwP04Om6BqG92JXL1YRfQbZO2ka8ES1YJIUcmW1izYdyJ3eTfQ8HOmWtsOLykDxzjB8YEMrJtlVBuN2BuqehWIQXHfTF2zDVypxeGATDT36sgCbKMqhRlQqOPAD8RMJPQrsrabwYL9ij2dPi6T8tV1qiV2yBwl7njgrA",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
