import Link from 'next/link';
import Image from 'next/image';

const RecipeListItem = ({ recipe }) => {
  const { cookingTime, slug, title, thumbnail } = recipe.fields;
  return (
    <div className="recipe-list-item">
      <div className="thumbnail">
        {thumbnail?.fields?.file?.url && (
          <Image src={getUrl(thumbnail.fields)} width={100} height={100} /> // TODO
        )}
      </div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>Takes approx {cookingTime} mins to make</p>
        </div>
        <div className="actions">
          <Link href={'/recipes/' + slug}>
            <a>Cook this</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const getUrl = (fields) => 'https:' + fields.file.url;

export default RecipeListItem;
