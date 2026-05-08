import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { books } from "../data/books";
import { ArrowRight, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(45,90%,55%)]/5 via-transparent to-transparent" />
        
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex items-center justify-center gap-2"
          >
            <Sparkles className="h-5 w-5 text-[hsl(45,90%,55%)]" />
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[hsl(45,90%,55%)]">
              Premium Book Collection
            </span>
            <Sparkles className="h-5 w-5 text-[hsl(45,90%,55%)]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Playfair_Display'] text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Forge{" "}
            <span className="animate-glow-pulse text-[hsl(45,90%,55%)]">
              Books
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400"
          >
            A curated collection of the world's most powerful books on personal
            development, strategy, and human nature. Each volume forged to
            transform minds and shape destinies.
          </motion.p>
        </div>
      </section>

      {/* Books Grid */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {books.map((book, index) => (
            <motion.div key={book.id} variants={itemVariants}>
              <Link
                to={`/book/${book.id}`}
                className="group block"
              >
                <div className="book-card-hover relative overflow-hidden rounded-xl bg-[#0a0a0a] luxury-border p-4">
                  {/* Book Cover */}
                  <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-black">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading={index < 4 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Book Info */}
                  <div className="mt-4 space-y-1">
                    <h3 className="font-['Playfair_Display'] text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[hsl(45,90%,55%)] line-clamp-1">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-500">{book.author}</p>
                    <p className="text-xs text-gray-600 italic line-clamp-1">
                      {book.tagline}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <div className="mt-3 flex items-center gap-2 text-sm text-gray-500 transition-all duration-300 group-hover:text-[hsl(45,90%,55%)]">
                    <span>Explore</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">
            Start Your Journey
          </p>
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-white">
            Knowledge is the{" "}
            <span className="text-[hsl(45,90%,55%)]">ultimate power</span>
          </h2>
        </motion.div>
      </section>
    </div>
  );
}
