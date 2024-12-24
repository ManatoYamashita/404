import { Recipe } from '../types/banana';

interface bananaInfoProps {
  type: string;
  recipes: Recipe[];
}

export default function BananaInfo({ type, recipes }: bananaInfoProps) {
  return (
    <div className="banana__info">
      <small>Recipes for</small>
      <h2 data-splitting>{type}</h2>
      <div className="banana__info__recipes">
        {recipes.map((recipe, index) => (
          <a 
            key={index} 
            href={recipe.url} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span>{recipe.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
