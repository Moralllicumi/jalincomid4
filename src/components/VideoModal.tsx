import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Movie {
  id: string;
  title: string;
  description?: string;
  embed_code: string;
  duration: string;
  release_date: string;
  category: string;
}

interface VideoModalProps {
  movie: Movie | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal = ({ movie, isOpen, onClose }: VideoModalProps) => {
  if (!movie) return null;

  // Extract video ID from embed code for better handling
  const getCleanEmbedCode = (embedCode: string) => {
    // Clean the embed code and make it responsive
    return embedCode
      .replace(/width="[^"]*"/g, 'width="100%"')
      .replace(/height="[^"]*"/g, 'height="100%"')
      .replace(/frameborder="[^"]*"/g, 'frameborder="0"');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0">
        <div className="bg-black">
          {/* Video Player */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <div 
              className="absolute top-0 left-0 w-full h-full"
              dangerouslySetInnerHTML={{ 
                __html: getCleanEmbedCode(movie.embed_code) 
              }}
            />
          </div>
        </div>

        {/* Movie Info */}
        <div className="p-6">
          <DialogHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <DialogTitle className="text-2xl font-bold mb-2">
                  {movie.title}
                </DialogTitle>
                <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full">
                    {movie.category}
                  </span>
                  <span>{movie.duration}</span>
                  <span>{formatDate(movie.release_date)}</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="ml-4"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </DialogHeader>

          {movie.description && (
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Sinopse</h4>
              <p className="text-muted-foreground leading-relaxed">
                {movie.description}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};