import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMovies } from "@/hooks/useMovies";

const categories = [
  "Ação",
  "Aventura", 
  "Comédia",
  "Drama",
  "Terror",
  "Ficção Científica",
  "Romance",
  "Documentário",
  "Animação",
  "Thriller",
];

const movieSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  description: z.string().optional(),
  thumbnail_url: z.string().url("URL da capa deve ser válida"),
  embed_code: z.string().min(1, "Código embed é obrigatório"),
  duration: z.string().min(1, "Duração é obrigatória"),
  release_date: z.string().min(1, "Data de lançamento é obrigatória"),
  category: z.string().min(1, "Categoria é obrigatória"),
});

type MovieFormData = z.infer<typeof movieSchema>;

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

interface MovieFormProps {
  isOpen: boolean;
  onClose: () => void;
  movie?: Movie | null;
}

export const MovieForm = ({ isOpen, onClose, movie }: MovieFormProps) => {
  const { addMovie, updateMovie } = useMovies();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<MovieFormData>({
    resolver: zodResolver(movieSchema),
    defaultValues: {
      title: "",
      description: "",
      thumbnail_url: "",
      embed_code: "",
      duration: "",
      release_date: "",
      category: "Ação",
    },
  });

  // Reset form when movie changes
  useEffect(() => {
    if (movie) {
      form.reset({
        title: movie.title,
        description: movie.description || "",
        thumbnail_url: movie.thumbnail_url,
        embed_code: movie.embed_code,
        duration: movie.duration,
        release_date: movie.release_date,
        category: movie.category,
      });
    } else {
      form.reset({
        title: "",
        description: "",
        thumbnail_url: "",
        embed_code: "",
        duration: "",
        release_date: "",
        category: "Ação",
      });
    }
  }, [movie, form]);

  const onSubmit = async (data: MovieFormData) => {
    setIsSubmitting(true);
    try {
      if (movie) {
        await updateMovie(movie.id, data);
      } else {
        await addMovie(data as Omit<Movie, "id" | "created_at" | "updated_at">);
      }
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>
              {movie ? "Editar Filme" : "Adicionar Filme"}
            </DialogTitle>
            <Button variant="ghost" size="icon" onClick={handleClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título *</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o título do filme" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Digite a sinopse do filme"
                      className="resize-none"
                      rows={3}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categoria *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a categoria" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Duração *</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 2h 30min" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="release_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data de Lançamento *</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="thumbnail_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL da Capa *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://exemplo.com/imagem.jpg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="embed_code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Código Embed do Vídeo *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='<iframe src="..." width="560" height="315" frameborder="0" allowfullscreen></iframe>'
                      className="resize-none font-mono text-sm"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-4 pt-4">
              <Button type="button" variant="outline" onClick={handleClose}>
                Cancelar
              </Button>
              <Button type="submit" disabled={isSubmitting} className="admin-button">
                {isSubmitting ? "Salvando..." : movie ? "Atualizar" : "Adicionar"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};