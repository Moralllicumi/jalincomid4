-- Create movies table with all necessary fields
CREATE TABLE public.movies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  thumbnail_url TEXT NOT NULL,
  embed_code TEXT NOT NULL,
  duration TEXT NOT NULL,
  release_date DATE NOT NULL,
  category TEXT NOT NULL DEFAULT 'Ação',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.movies ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (movies are public)
CREATE POLICY "Movies are viewable by everyone" 
ON public.movies 
FOR SELECT 
USING (true);

-- Admin users can manage movies (for now we'll make it open, later we can add user roles)
CREATE POLICY "Anyone can insert movies" 
ON public.movies 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update movies" 
ON public.movies 
FOR UPDATE 
USING (true);

CREATE POLICY "Anyone can delete movies" 
ON public.movies 
FOR DELETE 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_movies_updated_at
BEFORE UPDATE ON public.movies
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some sample data
INSERT INTO public.movies (title, description, thumbnail_url, embed_code, duration, release_date, category) VALUES
('Vingadores: Ultimato', 'Os Vingadores se reúnem para derrotar Thanos e restaurar o universo.', 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500', '<iframe width="560" height="315" src="https://www.youtube.com/embed/TcMBFSGVi1c" frameborder="0" allowfullscreen></iframe>', '3h 1min', '2019-04-25', 'Ação'),
('Interestelar', 'Uma equipe de exploradores viaja através de um buraco de minhoca no espaço.', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500', '<iframe width="560" height="315" src="https://www.youtube.com/embed/zSWdZVtXT7E" frameborder="0" allowfullscreen></iframe>', '2h 49min', '2014-11-06', 'Ficção Científica'),
('Parasita', 'Uma família pobre se infiltra na vida de uma família rica.', 'https://images.unsplash.com/photo-1489599856739-5ad7be2c52c1?w=500', '<iframe width="560" height="315" src="https://www.youtube.com/embed/5xH0HfJHsaY" frameborder="0" allowfullscreen></iframe>', '2h 12min', '2019-05-30', 'Drama'),
('John Wick', 'Um ex-assassino sai da aposentadoria para vingar a morte de seu cachorro.', 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500', '<iframe width="560" height="315" src="https://www.youtube.com/embed/C0BMx-qxsP4" frameborder="0" allowfullscreen></iframe>', '1h 41min', '2014-10-24', 'Ação'),
('A Origem', 'Um ladrão que invade sonhos recebe a tarefa de plantar uma ideia.', 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500', '<iframe width="560" height="315" src="https://www.youtube.com/embed/YoHD9XEInc0" frameborder="0" allowfullscreen></iframe>', '2h 28min', '2010-07-16', 'Ficção Científica'),
('Coringa', 'A origem do icônico vilão do Batman.', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500', '<iframe width="560" height="315" src="https://www.youtube.com/embed/zAGVQLHvwOY" frameborder="0" allowfullscreen></iframe>', '2h 2min', '2019-10-04', 'Drama');