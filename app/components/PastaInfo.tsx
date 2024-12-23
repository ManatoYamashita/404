import { Recipe } from '../types/pasta';

interface PastaInfoProps {
  type: string;
  recipes: Recipe[];
}

export function PastaInfo({ type, recipes }: PastaInfoProps) {
  return (
    <div className="pasta__info">
      <small>Recipes for</small>
      <h2 data-splitting>{type}</h2>
      <div className="pasta__info__recipes">
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
