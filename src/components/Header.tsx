import { Link } from "wouter";
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-neutral-900">
      <nav className="container h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200 ps-6">
            <span className="text-3xl font-black text-red-600">NETFLIX</span>
          </a>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/">
            <a>
              <Button 
                variant="ghost" 
                className="text-sm font-medium text-neutral-300 hover:text-white hover:bg-transparent"
              >
                Início
              </Button>
            </a>
          </Link>
          <Link href="/favoritos">
            <a>
              <Button 
                variant="ghost"
                className="flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-red-600 hover:bg-transparent"
              >
                <Heart size={18} />
                Favoritos
              </Button>
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
