"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: "features", label: "Features" },
  { id: "benefits", label: "Benefits" },
  { id: "process", label: "Process" },
  { id: "comparison", label: "Compare" },
  { id: "case-studies", label: "Case Studies" },
  { id: "faq", label: "FAQ" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed bottom-6 right-6 z-50 rounded-full w-12 h-12 bg-primary text-primary-foreground shadow-lg md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-x-4 bottom-4 top-auto rounded-lg bg-background border shadow-lg"
            >
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">Navigation</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="p-4">
                <ul className="space-y-2">
                  {sections.map(({ id, label }) => (
                    <motion.li
                      key={id}
                      whileTap={{ scale: 0.98 }}
                      className="w-full"
                    >
                      <button
                        onClick={() => scrollToSection(id)}
                        className={`w-full flex items-center justify-between p-3 rounded-md text-left ${
                          activeSection === id
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        }`}
                      >
                        <span>{label}</span>
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
