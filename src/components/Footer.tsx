import { Instagram, Heart, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-[hsl(45,90%,55%)]" />
            <span className="font-['Playfair_Display'] text-lg font-bold text-white">
              Forge <span className="text-[hsl(45,90%,55%)]">Books</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-gray-400 tracking-wide uppercase">
            Curated for personal growth
          </p>

          {/* Instagram CTA */}
          <motion.a
            href="https://www.instagram.com/naheel.com00"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-[hsl(45,90%,55%)] to-[hsl(35,85%,45%)] px-8 py-4 text-black font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
          >
            <Instagram className="h-5 w-5" />
            <span>Follow on Instagram @naheel.com00</span>
          </motion.a>

          {/* Divider */}
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[hsl(45,90%,55%)]/30 to-transparent" />

          {/* Bottom */}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>Made with</span>
            <Heart className="h-3 w-3 text-[hsl(45,90%,55%)]" />
            <span>for seekers of wisdom</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
