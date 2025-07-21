import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Database, FileText, Folder, Settings, Video, Users } from "lucide-react";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Site
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-2">Documentação do Sistema</h1>
          <p className="text-muted-foreground text-lg">
            Guia completo do sistema de filmes - arquitetura, funcionalidades e uso
          </p>
        </div>

        <div className="grid gap-6">
          {/* Visão Geral */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Visão Geral do Sistema
              </CardTitle>
              <CardDescription>
                Sistema completo de streaming de filmes com design inspirado no YouTube
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">
                Este é um sistema completo de gerenciamento e exibição de filmes construído com tecnologias modernas.
                O design é totalmente responsivo, otimizado para mobile e desktop.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <Video className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="font-semibold">Player Modal</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <Database className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="font-semibold">Banco Supabase</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <Settings className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="font-semibold">Área Admin</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="font-semibold">Interface Usuário</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Estrutura do Projeto */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Folder className="h-5 w-5" />
                Estrutura de Arquivos
              </CardTitle>
              <CardDescription>
                Organização dos componentes e funcionalidades
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                <div className="space-y-1">
                  <div><strong>src/</strong></div>
                  <div className="ml-4">├── <strong>components/</strong></div>
                  <div className="ml-8">├── <Badge variant="secondary">MovieHeader.tsx</Badge> - Cabeçalho com busca</div>
                  <div className="ml-8">├── <Badge variant="secondary">CategoryFilter.tsx</Badge> - Filtros de categoria</div>
                  <div className="ml-8">├── <Badge variant="secondary">MovieCard.tsx</Badge> - Cards dos filmes</div>
                  <div className="ml-8">├── <Badge variant="secondary">VideoModal.tsx</Badge> - Player modal</div>
                  <div className="ml-8">└── <Badge variant="secondary">MovieForm.tsx</Badge> - Formulário admin</div>
                  <div className="ml-4">├── <strong>hooks/</strong></div>
                  <div className="ml-8">└── <Badge variant="secondary">useMovies.ts</Badge> - Gerenciamento de filmes</div>
                  <div className="ml-4">├── <strong>pages/</strong></div>
                  <div className="ml-8">├── <Badge variant="secondary">Index.tsx</Badge> - Página principal</div>
                  <div className="ml-8">├── <Badge variant="secondary">Admin.tsx</Badge> - Área administrativa</div>
                  <div className="ml-8">└── <Badge variant="secondary">Documentation.tsx</Badge> - Esta documentação</div>
                  <div className="ml-4">└── <strong>integrations/supabase/</strong></div>
                  <div className="ml-8">└── <Badge variant="secondary">client.ts</Badge> - Cliente Supabase</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Banco de Dados */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Estrutura do Banco de Dados
              </CardTitle>
              <CardDescription>
                Tabela movies e suas funcionalidades
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Tabela: movies</h4>
                <div className="grid gap-2">
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span className="font-mono">id</span>
                    <Badge>UUID - Chave primária</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span className="font-mono">title</span>
                    <Badge>TEXT - Título do filme</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span className="font-mono">description</span>
                    <Badge variant="outline">TEXT - Descrição (opcional)</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span className="font-mono">thumbnail_url</span>
                    <Badge>TEXT - URL da capa</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span className="font-mono">embed_code</span>
                    <Badge>TEXT - Código embed do vídeo</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span className="font-mono">duration</span>
                    <Badge>TEXT - Duração (ex: "2h 30min")</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span className="font-mono">release_date</span>
                    <Badge>DATE - Data de lançamento</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span className="font-mono">category</span>
                    <Badge>TEXT - Categoria do filme</Badge>
                  </div>
                </div>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2">Políticas de Segurança (RLS)</h4>
                <ul className="space-y-1 text-sm">
                  <li>✅ Leitura pública - Todos podem ver os filmes</li>
                  <li>✅ Inserção liberada - Para área administrativa</li>
                  <li>✅ Atualização liberada - Para área administrativa</li>
                  <li>✅ Exclusão liberada - Para área administrativa</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Categorias */}
          <Card>
            <CardHeader>
              <CardTitle>Categorias Disponíveis</CardTitle>
              <CardDescription>
                Sistema de categorização dos filmes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {[
                  "Todos", "Ação", "Comédia", "Drama", "Terror", 
                  "Ficção Científica", "Romance", "Aventura", "Suspense"
                ].map((category) => (
                  <Badge key={category} variant="outline" className="justify-center py-2">
                    {category}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                As categorias são filtráveis na página principal. "Todos" mostra todos os filmes.
              </p>
            </CardContent>
          </Card>

          {/* Como Usar */}
          <Card>
            <CardHeader>
              <CardTitle>Como Usar o Sistema</CardTitle>
              <CardDescription>
                Guia passo a passo para administradores
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                  Acessar Área Administrativa
                </h4>
                <p className="text-sm text-muted-foreground ml-8">
                  Acesse <code className="bg-muted px-2 py-1 rounded">/licumi</code> para abrir a área administrativa
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                  Adicionar Novo Filme
                </h4>
                <ul className="text-sm text-muted-foreground ml-8 space-y-1">
                  <li>• Clique em "Adicionar Filme"</li>
                  <li>• Preencha todos os campos obrigatórios</li>
                  <li>• Para o embed code, use iframe do YouTube/Vimeo</li>
                  <li>• URL da thumbnail deve ser uma imagem válida</li>
                  <li>• Data no formato brasileiro (DD/MM/AAAA)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                  Gerenciar Filmes Existentes
                </h4>
                <ul className="text-sm text-muted-foreground ml-8 space-y-1">
                  <li>• Use os botões "Editar" para modificar informações</li>
                  <li>• Use os botões "Excluir" para remover filmes</li>
                  <li>• Todas as ações são instantâneas</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Tutoriais de Customização */}
          <Card>
            <CardHeader>
              <CardTitle>📝 Tutoriais de Customização</CardTitle>
              <CardDescription>
                Guias detalhados para modificar e personalizar o sistema
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Tutorial 1: Adicionar Categorias */}
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-lg">🏷️ Como Adicionar Novas Categorias</h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium mb-2">1. Modificar o Componente CategoryFilter</h5>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <p className="text-muted-foreground mb-2">📁 src/components/CategoryFilter.tsx</p>
                      <div className="bg-background p-2 rounded">
                        {`const categories = [
  "Todos", "Ação", "Comédia", "Drama", "Terror",
  "Ficção Científica", "Romance", "Aventura", "Suspense",
  "Documentário", "Animação", "Fantasia" // ← Adicione aqui
];`}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">2. Atualizar o Valor Padrão no Banco</h5>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <p className="text-muted-foreground mb-2">🗄️ SQL Migration</p>
                      <div className="bg-background p-2 rounded">
                        {`-- Opcional: Alterar valor padrão da categoria
ALTER TABLE public.movies 
ALTER COLUMN category SET DEFAULT 'Nova Categoria';`}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">3. Atualizar Formulário Admin</h5>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <p className="text-muted-foreground mb-2">📁 src/components/MovieForm.tsx</p>
                      <div className="bg-background p-2 rounded">
                        {`<option value="Nova Categoria">Nova Categoria</option>`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tutorial 2: Modificar Cores */}
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-lg">🎨 Como Modificar as Cores do Sistema</h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium mb-2">1. Editar Paleta de Cores</h5>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <p className="text-muted-foreground mb-2">📁 src/index.css</p>
                      <div className="bg-background p-2 rounded">
                        {`:root {
  --primary: 0 72% 51%;    /* Cor principal (vermelho) */
  --secondary: 210 40% 98%; /* Cor secundária */
  --accent: 210 40% 96%;    /* Cor de destaque */
  --background: 0 0% 100%;  /* Fundo (branco) */
  --foreground: 222 84% 5%; /* Texto principal (preto) */
}`}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">2. Cores para Modo Escuro</h5>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <div className="bg-background p-2 rounded">
                        {`.dark {
  --primary: 0 72% 51%;     /* Mantém vermelho */
  --background: 222 84% 5%; /* Fundo escuro */
  --foreground: 210 40% 98%; /* Texto claro */
}`}
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-700">
                      💡 <strong>Dica:</strong> Use HSL (Hue, Saturation, Lightness) para facilitar ajustes de luminosidade
                    </p>
                  </div>
                </div>
              </div>

              {/* Tutorial 3: Adicionar Campos */}
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-lg">📋 Como Adicionar Novos Campos aos Filmes</h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium mb-2">1. Criar Migration no Banco</h5>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <p className="text-muted-foreground mb-2">🗄️ SQL Migration</p>
                      <div className="bg-background p-2 rounded">
                        {`-- Exemplo: Adicionar campo rating
ALTER TABLE public.movies 
ADD COLUMN rating DECIMAL(2,1) CHECK (rating >= 0 AND rating <= 10);

-- Exemplo: Adicionar campo director
ALTER TABLE public.movies 
ADD COLUMN director TEXT;`}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">2. Atualizar Interface TypeScript</h5>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <p className="text-muted-foreground mb-2">📁 src/hooks/useMovies.ts</p>
                      <div className="bg-background p-2 rounded">
                        {`interface Movie {
  id: string;
  title: string;
  description?: string;
  rating?: number;     // ← Novo campo
  director?: string;   // ← Novo campo
  // ... outros campos
}`}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">3. Adicionar ao Formulário</h5>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <p className="text-muted-foreground mb-2">📁 src/components/MovieForm.tsx</p>
                      <div className="bg-background p-2 rounded">
                        {`<Input
  type="number"
  step="0.1"
  min="0"
  max="10"
  placeholder="Avaliação (0-10)"
  value={formData.rating || ''}
  onChange={(e) => setFormData({...formData, rating: parseFloat(e.target.value)})}
/>`}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">4. Exibir no Card</h5>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <p className="text-muted-foreground mb-2">📁 src/components/MovieCard.tsx</p>
                      <div className="bg-background p-2 rounded">
                        {`{movie.rating && (
  <div className="flex items-center gap-1">
    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
    <span className="text-sm font-medium">{movie.rating}</span>
  </div>
)}`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tutorial 4: Configurar Player */}
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-lg">🎬 Como Configurar Diferentes Players de Vídeo</h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium mb-2">1. YouTube Embed</h5>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <div className="bg-background p-2 rounded">
                        {`<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/VIDEO_ID" 
  frameborder="0" 
  allowfullscreen>
</iframe>`}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">2. Vimeo Embed</h5>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <div className="bg-background p-2 rounded">
                        {`<iframe 
  src="https://player.vimeo.com/video/VIDEO_ID" 
  width="560" 
  height="315" 
  frameborder="0" 
  allowfullscreen>
</iframe>`}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">3. HTML5 Video</h5>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <div className="bg-background p-2 rounded">
                        {`<video 
  width="560" 
  height="315" 
  controls>
  <source src="URL_DO_VIDEO.mp4" type="video/mp4">
</video>`}
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                    <p className="text-sm text-yellow-700">
                      ⚠️ <strong>Importante:</strong> Para vídeos locais, você precisará configurar storage no Supabase
                    </p>
                  </div>
                </div>
              </div>

              {/* Tutorial 5: Responsividade */}
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-lg">📱 Como Ajustar Responsividade</h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium mb-2">1. Grid de Filmes</h5>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <p className="text-muted-foreground mb-2">📁 src/pages/Index.tsx</p>
                      <div className="bg-background p-2 rounded">
                        {`// Modificar classes do grid
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
  {/* 2 no mobile, 3 no tablet, 4 no desktop, 5 em telas grandes */}
</div>`}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">2. Breakpoints Tailwind</h5>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <div className="bg-background p-2 rounded">
                        {`sm: 640px   // Small devices
md: 768px   // Medium devices  
lg: 1024px  // Large devices
xl: 1280px  // Extra large devices
2xl: 1536px // 2X large devices`}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">3. Player Modal Responsivo</h5>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <p className="text-muted-foreground mb-2">📁 src/components/VideoModal.tsx</p>
                      <div className="bg-background p-2 rounded">
                        {`<div className="w-full max-w-4xl mx-auto p-4">
  <div className="aspect-video w-full">
    {/* Player aqui */}
  </div>
</div>`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tutorial 6: SEO e Meta Tags */}
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-lg">🔍 Como Otimizar SEO</h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium mb-2">1. Meta Tags no HTML</h5>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <p className="text-muted-foreground mb-2">📁 index.html</p>
                      <div className="bg-background p-2 rounded">
                        {`<meta name="description" content="Plataforma de streaming de filmes">
<meta name="keywords" content="filmes, streaming, cinema">
<meta property="og:title" content="CineTube - Seus Filmes Favoritos">
<meta property="og:description" content="Assista aos melhores filmes online">
<meta property="og:image" content="/thumbnail.jpg">`}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">2. Structured Data (JSON-LD)</h5>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <div className="bg-background p-2 rounded">
                        {`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CineTube",
  "url": "https://seusite.com"
}
</script>`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tutorial 7: Performance */}
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-lg">⚡ Como Otimizar Performance</h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium mb-2">1. Lazy Loading de Imagens</h5>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <p className="text-muted-foreground mb-2">📁 src/components/MovieCard.tsx</p>
                      <div className="bg-background p-2 rounded">
                        {`<img 
  src={movie.thumbnail_url}
  alt={movie.title}
  loading="lazy"  // ← Adicione esta propriedade
  className="w-full h-48 object-cover"
/>`}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">2. Paginação de Filmes</h5>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <p className="text-muted-foreground mb-2">📁 src/hooks/useMovies.ts</p>
                      <div className="bg-background p-2 rounded">
                        {`const { data, error } = await supabase
  .from("movies")
  .select("*")
  .range(page * limit, (page + 1) * limit - 1)  // ← Paginação
  .order("created_at", { ascending: false });`}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium mb-2">3. Otimização de Imagens</h5>
                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <p className="text-sm text-green-700">
                        💡 <strong>Dica:</strong> Use serviços como Cloudinary ou ImageKit para otimizar automaticamente as thumbnails
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Troubleshooting */}
          <Card>
            <CardHeader>
              <CardTitle>🔧 Solução de Problemas Comuns</CardTitle>
              <CardDescription>
                Problemas frequentes e suas soluções
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-red-700">❌ Filmes não aparecem na tela</h4>
                <ul className="text-sm text-red-600 mt-2 space-y-1">
                  <li>• Verifique se o Supabase está conectado</li>
                  <li>• Confirme se as políticas RLS estão ativas</li>
                  <li>• Cheque se há dados na tabela movies</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-yellow-700">⚠️ Player não carrega vídeos</h4>
                <ul className="text-sm text-yellow-600 mt-2 space-y-1">
                  <li>• Verifique se o embed_code está correto</li>
                  <li>• Teste o código embed em uma página HTML simples</li>
                  <li>• Confirme se o vídeo está público</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-blue-700">ℹ️ Erro ao adicionar filme</h4>
                <ul className="text-sm text-blue-600 mt-2 space-y-1">
                  <li>• Verifique se todos os campos obrigatórios estão preenchidos</li>
                  <li>• Confirme se a URL da thumbnail é válida</li>
                  <li>• Teste a conexão com o banco de dados</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-700">✅ Site lento para carregar</h4>
                <ul className="text-sm text-green-600 mt-2 space-y-1">
                  <li>• Implemente lazy loading nas imagens</li>
                  <li>• Adicione paginação nos filmes</li>
                  <li>• Otimize as imagens das thumbnails</li>
                  <li>• Use CDN para assets estáticos</li>
                </ul>
              </div>

            </CardContent>
          </Card>

          {/* Tecnologias */}
          <Card>
            <CardHeader>
              <CardTitle>Tecnologias Utilizadas</CardTitle>
              <CardDescription>
                Stack completo do projeto
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="font-semibold">React</div>
                  <div className="text-sm text-muted-foreground">Framework Frontend</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="font-semibold">TypeScript</div>
                  <div className="text-sm text-muted-foreground">Tipagem Estática</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="font-semibold">Tailwind CSS</div>
                  <div className="text-sm text-muted-foreground">Estilização</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="font-semibold">Supabase</div>
                  <div className="text-sm text-muted-foreground">Backend/Database</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="font-semibold">Shadcn/ui</div>
                  <div className="text-sm text-muted-foreground">Componentes UI</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="font-semibold">React Router</div>
                  <div className="text-sm text-muted-foreground">Roteamento</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="font-semibold">Lucide Icons</div>
                  <div className="text-sm text-muted-foreground">Ícones</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="font-semibold">Vite</div>
                  <div className="text-sm text-muted-foreground">Build Tool</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Responsividade */}
          <Card>
            <CardHeader>
              <CardTitle>Design Responsivo</CardTitle>
              <CardDescription>
                Otimização para diferentes dispositivos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">📱 Mobile</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Mínimo 2 filmes por linha</li>
                    <li>• Menu hambúrguer para navegação</li>
                    <li>• Cards otimizados para toque</li>
                    <li>• Player modal responsivo</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2">💻 Desktop</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Mínimo 4 filmes por linha</li>
                    <li>• Navegação horizontal completa</li>
                    <li>• Hover effects nos cards</li>
                    <li>• Player modal ampliado</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Links Importantes */}
          <Card>
            <CardHeader>
              <CardTitle>Links Importantes</CardTitle>
              <CardDescription>
                Acesso rápido às principais funcionalidades
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/">
                  <Button variant="outline" className="w-full">
                    🏠 Página Principal
                  </Button>
                </Link>
                <Link to="/licumi">
                  <Button variant="outline" className="w-full">
                    ⚙️ Área Administrativa
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Documentation;