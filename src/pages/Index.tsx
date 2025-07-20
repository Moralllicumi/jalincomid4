import { useState, useMemo } from "react";
import { MovieHeader } from "@/components/MovieHeader";
import { CategoryFilter } from "@/components/CategoryFilter";
import { MovieCard } from "@/components/MovieCard";
import { VideoModal } from "@/components/VideoModal";
import { useMovies } from "@/hooks/useMovies";

interface Movie {
  id: string;
  title: string;
  description?: string;
  thumbnail_url: string;
  embed_code: string;
  duration: string;
  release_date: string;
  category: string;
}

const Index = () => {
  const { movies, loading } = useMovies();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter movies based on search and category
  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
        (movie.description?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
      
      const matchesCategory = selectedCategory === "" || movie.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [movies, searchQuery, selectedCategory]);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <MovieHeader onSearch={setSearchQuery} searchQuery={searchQuery} />
        <CategoryFilter 
          selectedCategory={selectedCategory} 
          onCategoryChange={setSelectedCategory} 
        />
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="video-card animate-pulse">
                <div className="video-thumbnail bg-muted"></div>
                <div className="p-4">
                  <div className="h-4 bg-muted rounded mb-2"></div>
                  <div className="h-3 bg-muted rounded mb-1"></div>
                  <div className="h-3 bg-muted rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <MovieHeader onSearch={setSearchQuery} searchQuery={searchQuery} />
      <CategoryFilter 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory} 
      />
      
      <main className="container mx-auto px-4 py-8">
        {filteredMovies.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Nenhum filme encontrado</h2>
            <p className="text-muted-foreground">
              {searchQuery || selectedCategory
                ? "Tente ajustar os filtros ou buscar por outros termos."
                : "Ainda não há filmes cadastrados."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={() => handleMovieClick(movie)}
              />
            ))}
          </div>
        )}
      </main>

      <VideoModal
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
