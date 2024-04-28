import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "j49d6hlk",
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: "skTR2F99DuCAduzoNfgvGpheFouaWHcBzI5CQxJDz7JxMvQSZkJWI6Gqk07KukHil9QGBVL7EKEeLa2CEN8dfPgB0Ss8fhD9uYyMWdhyMQQgJzJxt0fXUtcA2XrQ26Y4UfL5V0B8lyXyJQKyMdF0GTzNvzxPiRekIKpWSKZtK9ATvtGxD7gU",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
