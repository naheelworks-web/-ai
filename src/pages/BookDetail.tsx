import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getBookById } from "../data/books";
import {
  ArrowLeft,
  BookOpen,
  Lightbulb,
  Quote,
  ChevronRight,
  Languages,
} from "lucide-react";

type Language = "english" | "romanUrdu";

export default function BookDetail() {
  const { id } = useParams<{ id: string }>();
  const book = getBookById(id || "");
  const [language, setLanguage] = useState<Language>("english");

  if (!book) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <h2 className="font-['Playfair_Display'] text-2xl font-bold text-white">
            Book not found
          </h2>
          <Link
            to="/"
            className="mt-4 inline-flex items-center gap-2 text-[hsl(45,90%,55%)] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  const content = book[language];

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Banner */}
      <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(45,90%,55%)]/5 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Collection
            </Link>
          </motion.div>

          {/* Book Header */}
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            {/* Cover Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mx-auto w-full max-w-sm flex-shrink-0 lg:mx-0"
            >
              <div className="overflow-hidden rounded-xl shadow-2xl shadow-black/50">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="h-auto w-full object-cover"
                />
              </div>
            </motion.div>

            {/* Title & Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1"
            >
              <div className="mb-2 flex items-center gap-2 text-sm text-[hsl(45,90%,55%)]">
                <BookOpen className="h-4 w-4" />
                <span className="uppercase tracking-widest">Book Summary</span>
              </div>

              <h1 className="font-['Playfair_Display'] text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {book.title}
              </h1>
              <p className="mt-2 text-lg text-gray-400">{book.author}</p>
              <p className="mt-4 text-gray-500 italic">{book.tagline}</p>

              {/* Language Toggle */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
                  <button
                    onClick={() => setLanguage("english")}
                    className={`toggle-btn ${
                      language === "english"
                        ? "toggle-btn-active"
                        : "toggle-btn-inactive"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLanguage("romanUrdu")}
                    className={`toggle-btn ${
                      language === "romanUrdu"
                        ? "toggle-btn-active"
                        : "toggle-btn-inactive"
                    }`}
                  >
                    Roman Urdu
                  </button>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Languages className="h-4 w-4" />
                  <span>Switch language</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
        >
          {/* Summary */}
          <section className="mb-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(45,90%,55%)]/10">
                <BookOpen className="h-4 w-4 text-[hsl(45,90%,55%)]" />
              </div>
              <h2 className="font-['Playfair_Display'] text-2xl font-bold text-white">
                {language === "english" ? "Summary" : "Khulasa"}
              </h2>
            </div>
            <div className="rounded-xl border border-white/5 bg-[#0a0a0a] p-6 sm:p-8">
              <p className="leading-relaxed text-gray-300">{content.summary}</p>
            </div>
          </section>

          {/* Key Chapters */}
          <section className="mb-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(45,90%,55%)]/10">
                <ChevronRight className="h-4 w-4 text-[hsl(45,90%,55%)]" />
              </div>
              <h2 className="font-['Playfair_Display'] text-2xl font-bold text-white">
                {language === "english" ? "Key Chapters" : "Ahem Babat"}
              </h2>
            </div>
            <div className="space-y-4">
              {content.keyChapters.map((chapter, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-xl border border-white/5 bg-[#0a0a0a] p-6 transition-colors hover:border-[hsl(45,90%,55%)]/20"
                >
                  <h3 className="mb-2 font-['Playfair_Display'] text-lg font-semibold text-[hsl(45,90%,55%)]">
                    {chapter.title}
                  </h3>
                  <p className="leading-relaxed text-gray-400">
                    {chapter.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Practical Lessons */}
          <section className="mb-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(45,90%,55%)]/10">
                <Lightbulb className="h-4 w-4 text-[hsl(45,90%,55%)]" />
              </div>
              <h2 className="font-['Playfair_Display'] text-2xl font-bold text-white">
                {language === "english"
                  ? "Practical Lessons"
                  : "Amali Sabaq"}
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {content.practicalLessons.map((lesson, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-xl border border-white/5 bg-gradient-to-br from-[#0a0a0a] to-[#0d0d0d] p-6"
                >
                  <div className="mb-3 flex h-6 w-6 items-center justify-center rounded-full bg-[hsl(45,90%,55%)]/20 text-xs font-bold text-[hsl(45,90%,55%)]">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-relaxed text-gray-300">
                    {lesson}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Quotes */}
          <section className="mb-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(45,90%,55%)]/10">
                <Quote className="h-4 w-4 text-[hsl(45,90%,55%)]" />
              </div>
              <h2 className="font-['Playfair_Display'] text-2xl font-bold text-white">
                {language === "english" ? "Powerful Quotes" : "Taqatwar Aqwal"}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {content.quotes.map((quote, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="quote-card rounded-xl p-6"
                >
                  <Quote className="mb-3 h-5 w-5 text-[hsl(45,90%,55%)]/50" />
                  <p className="font-['Playfair_Display'] text-lg italic leading-relaxed text-gray-200">
                    &ldquo;{quote}&rdquo;
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
