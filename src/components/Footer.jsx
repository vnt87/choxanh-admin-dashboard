import { Heart } from 'lucide-react';

const Footer = () => (
  <footer className="fixed bottom-0 right-0 bg-background text-foreground p-4 text-sm">
    Crafted with <Heart className="inline h-4 w-4 text-red-500" /> by {' '}
    <a 
      href="https://namvu.net" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:underline"
    >
      Nam Vu
    </a>
  </footer>
);

export default Footer;
