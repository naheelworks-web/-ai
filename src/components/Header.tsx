import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <BookOpen className="h-7 w-7 text-[hsl(45,90%,55%)] transition-transform duration-300 group-hover:scale-110" />
          <span className="font-['Playfair_Display'] text-xl font-bold tracking-wide text-white">
            Forge <span className="text-[hsl(45,90%,55%)]">Books</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors duration-300 ${
              isHome
                ? "text-[hsl(45,90%,55%)]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Collection
          </Link>
          <a
            href="https://www.instagram.com/naheel.com00"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-400 hover:text-[hsl(45,90%,55%)] transition-colors duration-300"
          >
            Instagram
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
