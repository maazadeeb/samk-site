import { createClient } from 'contentful';
import RecipeListItem from '../components/RecipeListItem';

const response = [
  {
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
      id: '7ioO0RMmVaRDeWoCET6SEr',
      type: 'Entry',
      createdAt: '2022-04-18T00:16:51.507Z',
      updatedAt: '2022-04-18T00:16:51.507Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'recipe',
        },
      },
      locale: 'en-US',
    },
    fields: {
      title: 'Chilli Maggi',
      slug: 'chilli-maggi',
      thumbnail: {
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
      },
      featuredImage: {
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
      },
      ingredients: ['Maggi', 'Chilli'],
      cookingTime: 2,
      method: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
        ],
        nodeType: 'document',
      },
    },
  },
  {
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
      id: '6KNlZ9lqBFQC66AkRj9FiO',
      type: 'Entry',
      createdAt: '2022-04-17T23:59:53.798Z',
      updatedAt: '2022-04-17T23:59:53.798Z',
      environment: {
        sys: {
          id: 'master',
          type: 'Link',
          linkType: 'Environment',
        },
      },
      revision: 1,
      contentType: {
        sys: {
          type: 'Link',
          linkType: 'ContentType',
          id: 'recipe',
        },
      },
      locale: 'en-US',
    },
    fields: {
      title: 'Butter Maggi',
      slug: 'butter-maggi',
      thumbnail: {
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
      },
      featuredImage: {
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
      },
      ingredients: ['Maggi', 'Water', 'Butter'],
      cookingTime: 2,
      method: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: 'Heading 4',
                nodeType: 'text',
              },
            ],
            nodeType: 'heading-4',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: 'Heading 5',
                nodeType: 'text',
              },
            ],
            nodeType: 'heading-5',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: 'Heading 6',
                nodeType: 'text',
              },
            ],
            nodeType: 'heading-6',
          },
          {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    content: [
                      {
                        data: {},
                        marks: [],
                        value: 'Boil water in a pan',
                        nodeType: 'text',
                      },
                    ],
                    nodeType: 'paragraph',
                  },
                ],
                nodeType: 'list-item',
              },
              {
                data: {},
                content: [
                  {
                    data: {},
                    content: [
                      {
                        data: {},
                        marks: [],
                        value: 'Add ',
                        nodeType: 'text',
                      },
                      {
                        data: {},
                        marks: [
                          {
                            type: 'bold',
                          },
                        ],
                        value: 'Maggi Masala',
                        nodeType: 'text',
                      },
                      {
                        data: {},
                        marks: [],
                        value: '. This is ',
                        nodeType: 'text',
                      },
                      {
                        data: {},
                        marks: [
                          {
                            type: 'italic',
                          },
                        ],
                        value: 'italics',
                        nodeType: 'text',
                      },
                      {
                        data: {},
                        marks: [],
                        value: ' and ',
                        nodeType: 'text',
                      },
                      {
                        data: {},
                        marks: [
                          {
                            type: 'underline',
                          },
                        ],
                        value: 'underlined',
                        nodeType: 'text',
                      },
                      {
                        data: {},
                        marks: [],
                        value: ' for no reason.',
                        nodeType: 'text',
                      },
                    ],
                    nodeType: 'paragraph',
                  },
                ],
                nodeType: 'list-item',
              },
              {
                data: {},
                content: [
                  {
                    data: {},
                    content: [
                      {
                        data: {},
                        marks: [],
                        value: 'Add noodles',
                        nodeType: 'text',
                      },
                    ],
                    nodeType: 'paragraph',
                  },
                ],
                nodeType: 'list-item',
              },
              {
                data: {},
                content: [
                  {
                    data: {},
                    content: [
                      {
                        data: {},
                        marks: [],
                        value: 'Add ',
                        nodeType: 'text',
                      },
                      {
                        data: {
                          uri: 'https://en.wikipedia.org/wiki/Butter',
                        },
                        content: [
                          {
                            data: {},
                            marks: [],
                            value: 'butter',
                            nodeType: 'text',
                          },
                        ],
                        nodeType: 'hyperlink',
                      },
                      {
                        data: {},
                        marks: [],
                        value: '',
                        nodeType: 'text',
                      },
                    ],
                    nodeType: 'paragraph',
                  },
                ],
                nodeType: 'list-item',
              },
            ],
            nodeType: 'unordered-list',
          },
          {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'Note: It takes longer than 2 mins. Sorry.',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'paragraph',
              },
            ],
            nodeType: 'blockquote',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: '',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: '',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
        ],
        nodeType: 'document',
      },
    },
  },
];
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: 'recipe',
  });

  return {
    props: {
      recipes: res.items,
      // recipes: response,
    },
  };
}

export default function Recipes({ recipes }) {
  console.log(recipes);
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeListItem key={recipe.sys.id} recipe={recipe} />
      ))}
      <style jsx>{`
        .recipe-list {
        }
      `}</style>
    </div>
  );
}
