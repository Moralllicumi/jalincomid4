import { Clock, Calendar } from "lucide-react";

interface Movie {
  id: string;
  title: string;
  description?: string;
  thumbnail_url: string;
  duration: string;
  release_date: string;
  category: string;
}

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

export const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).getFullYear();
  };

  return (
    <div className="video-card" onClick={onClick}>
      {/* Thumbnail */}
      <div className="video-thumbnail">
        <img
          src={movie.thumbnail_url}
          alt={movie.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <span className="duration-badge">
          {movie.duration}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-foreground">
          {movie.title}
        </h3>
        
        {movie.description && (
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {movie.description}
          </p>
        )}

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{formatDate(movie.release_date)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{movie.duration}</span>
          </div>
        </div>

        <div className="mt-2">
          <span className="inline-block bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full">
            {movie.category}
          </span>
        </div>
      </div>
    </div>
  );
};