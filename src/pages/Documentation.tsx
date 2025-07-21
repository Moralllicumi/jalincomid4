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