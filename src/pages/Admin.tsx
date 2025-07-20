import { useState } from "react";
import { ArrowLeft, Plus, Edit, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MovieForm } from "@/components/MovieForm";
import { useMovies } from "@/hooks/useMovies";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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

const Admin = () => {
  const { movies, loading, deleteMovie } = useMovies();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingMovie, setEditingMovie] = useState<Movie | null>(null);

  const handleEdit = (movie: Movie) => {
    setEditingMovie(movie);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setEditingMovie(null);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingMovie(null);
  };

  const handleDelete = async (id: string) => {
    await deleteMovie(id);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-8 w-8 bg-muted rounded animate-pulse"></div>
            <div className="h-8 w-48 bg-muted rounded animate-pulse"></div>
          </div>
          <div className="grid gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-32 bg-muted rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="outline" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <h1 className="text-3xl font-bold">Administração de Filmes</h1>
          </div>
          
          <Button onClick={handleAdd} className="admin-button">
            <Plus className="w-4 h-4 mr-2" />
            Adicionar Filme
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total de Filmes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                {movies.length}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Categorias
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                {new Set(movies.map(m => m.category)).size}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Última Atualização
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                Hoje
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Movies List */}
        <Card>
          <CardHeader>
            <CardTitle>Lista de Filmes</CardTitle>
          </CardHeader>
          <CardContent>
            {movies.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">Nenhum filme cadastrado</h3>
                <p className="text-muted-foreground mb-4">
                  Comece adicionando seu primeiro filme ao catálogo.
                </p>
                <Button onClick={handleAdd} className="admin-button">
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar Primeiro Filme
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {movies.map((movie) => (
                  <div
                    key={movie.id}
                    className="flex items-center gap-4 p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    {/* Thumbnail */}
                    <img
                      src={movie.thumbnail_url}
                      alt={movie.title}
                      className="w-20 h-12 object-cover rounded"
                    />
                    
                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="font-semibold">{movie.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{movie.category}</span>
                        <span>{movie.duration}</span>
                        <span>{formatDate(movie.release_date)}</span>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleEdit(movie)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="outline" size="icon" className="text-destructive">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
                            <AlertDialogDescription>
                              Tem certeza que deseja excluir o filme "{movie.title}"? 
                              Esta ação não pode ser desfeita.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(movie.id)}
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            >
                              Excluir
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Movie Form Modal */}
      <MovieForm
        isOpen={isFormOpen}
        onClose={handleCloseForm}
        movie={editingMovie}
      />
    </div>
  );
};

export default Admin;