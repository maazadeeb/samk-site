import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

const R = {
  metadata: {
    tags: [],
  },
  sys: {
    space: {
      sys: {
        type: 'Link',
        linkType: 'Space',
        id: 'j2gakz4katht',
      },
    },
    id: '2QubDxGb2SQYVfDKbeXHtJ',
    type: 'Asset',
    createdAt: '2022-04-17T23:57:17.956Z',
    updatedAt: '2022-04-17T23:57:17.956Z',
    environment: {
      sys: {
        id: 'master',
        type: 'Link',
        linkType: 'Environment',
      },
    },
    revision: 1,
    locale: 'en-US',
  },
  fields: {
    title: 'maggi',
    description: '',
    file: {
      url: '//images.ctfassets.net/j2gakz4katht/2QubDxGb2SQYVfDKbeXHtJ/8d45c13703d61c6e9e3d2a140065e59f/maggi.jpeg',
      details: {
        size: 359368,
        image: {
          width: 1200,
          height: 1205,
        },
      },
      fileName: 'maggi.jpeg',
      contentType: 'image/jpeg',
    },
  },
};
export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: 'recipe',
  });

  const paths = res.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

// params is the params above
export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'recipe',
    'fields.slug': params.slug, // works because this is unique
  });

  return {
    props: { recipe: items[0] },
    // props: { recipe: R  }, // Use for mocking in dev
  };
}

export default function RecipeDetails({ recipe }) {
  const { featuredImage, title, cookingTime, ingredients, method } =
    recipe.fields;
  console.log(method);

  return (
    <div>
      <div className="banner">
        {featuredImage?.fields?.file?.url && (
          <Image
            src={'https:' + featuredImage.fields.file.url}
            width={featuredImage.fields.file.details.image.width}
            height={featuredImage.fields.file.details.image.height}
          />
        )}
        <h2>{title}</h2>
      </div>

      <div className="info">
        <p>Takes about {cookingTime} mins to cook.</p>
        <h3>Ingredients</h3>

        <ul>
          {ingredients.map((ing) => (
            <li key={ing}>{ing}</li>
          ))}
        </ul>
      </div>

      <div className="method">
        <h3>Method</h3>
        <div>{documentToReactComponents(method)}</div>
      </div>
    </div>
  );
}
