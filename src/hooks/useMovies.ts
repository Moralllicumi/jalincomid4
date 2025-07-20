import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Movie {
  id: string;
  title: string;
  description?: string;
  thumbnail_url: string;
  embed_code: string;
  duration: string;
  release_date: string;
  category: string;
  created_at: string;
  updated_at: string;
}

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchMovies = async () => {
    try {
      const { data, error } = await supabase
        .from("movies")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setMovies(data || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar os filmes.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const addMovie = async (movieData: Omit<Movie, "id" | "created_at" | "updated_at">) => {
    try {
      const { data, error } = await supabase
        .from("movies")
        .insert(movieData)
        .select()
        .single();

      if (error) throw error;
      
      setMovies(prev => [data, ...prev]);
      toast({
        title: "Sucesso",
        description: "Filme adicionado com sucesso!",
      });
      return data;
    } catch (error) {
      console.error("Error adding movie:", error);
      toast({
        title: "Erro",
        description: "Não foi possível adicionar o filme.",
        variant: "destructive",
      });
      throw error;
    }
  };

  const updateMovie = async (id: string, movieData: Partial<Movie>) => {
    try {
      const { data, error } = await supabase
        .from("movies")
        .update(movieData)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      
      setMovies(prev => prev.map(movie => movie.id === id ? data : movie));
      toast({
        title: "Sucesso",
        description: "Filme atualizado com sucesso!",
      });
      return data;
    } catch (error) {
      console.error("Error updating movie:", error);
      toast({
        title: "Erro",
        description: "Não foi possível atualizar o filme.",
        variant: "destructive",
      });
      throw error;
    }
  };

  const deleteMovie = async (id: string) => {
    try {
      const { error } = await supabase
        .from("movies")
        .delete()
        .eq("id", id);

      if (error) throw error;
      
      setMovies(prev => prev.filter(movie => movie.id !== id));
      toast({
        title: "Sucesso",
        description: "Filme excluído com sucesso!",
      });
    } catch (error) {
      console.error("Error deleting movie:", error);
      toast({
        title: "Erro",
        description: "Não foi possível excluir o filme.",
        variant: "destructive",
      });
      throw error;
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return {
    movies,
    loading,
    addMovie,
    updateMovie,
    deleteMovie,
    refetch: fetchMovies,
  };
};