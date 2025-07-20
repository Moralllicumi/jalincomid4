interface Category {
  name: string;
  value: string;
}

const categories: Category[] = [
  { name: "Todos", value: "" },
  { name: "Ação", value: "Ação" },
  { name: "Ficção Científica", value: "Ficção Científica" },
  { name: "Drama", value: "Drama" },
  { name: "Comédia", value: "Comédia" },
  { name: "Terror", value: "Terror" },
  { name: "Romance", value: "Romance" },
  { name: "Documentário", value: "Documentário" },
];

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="sticky top-[73px] z-40 bg-background border-b py-3">
      <div className="container mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => onCategoryChange(category.value)}
              className={`category-button whitespace-nowrap flex-shrink-0 ${
                selectedCategory === category.value
                  ? "category-active"
                  : "category-inactive"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};