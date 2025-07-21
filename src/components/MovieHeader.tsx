import { Search, Play, Settings, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface MovieHeaderProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

export const MovieHeader = ({ onSearch, searchQuery }: MovieHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - YouTube style */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded">
              <Play className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">CineTube</span>
          </Link>

          {/* Search Bar - YouTube style */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative flex">
              <Input
                placeholder="Pesquisar filmes..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="rounded-l-full border-r-0 pl-4 pr-12 focus:border-primary"
              />
              <Button 
                variant="outline" 
                className="rounded-r-full rounded-l-none border-l-0 px-6"
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Link to="/docs">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Docs
              </Button>
            </Link>
            <Link to="/licumi">
              <Button variant="outline" className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Admin
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};