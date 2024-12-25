// import { Recipe } from '@/app/types/banana';

interface bananaInfoProps {
  type: string;
  // recipes: Recipe[];
  introdaction: string;
}

export default function BananaInfo({ type, introdaction }: bananaInfoProps) {
  return (
    <div className="banana__info">
      <small>manapuraza Banana collection</small>
      <h2 data-splitting>{type}</h2>
      <div className="banana__info__recipes">
        {/* {recipes.map((recipe, index) => (
          <a 
            key={index} 
            href={recipe.url} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span>{recipe.title}</span>
          </a>
        ))} */}
        <p>
          {introdaction}
        </p>
      </div>
    </div>
  );
}
