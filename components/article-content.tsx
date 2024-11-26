"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from 'react-markdown';

interface ArticleContentProps {
  article: {
    title: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
    content: string;
    tags: string[];
  };
}

export function ArticleContent({ article }: ArticleContentProps) {
  return (
    <div className="min-h-screen pt-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <article className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <Button
            variant="ghost"
            className="mb-8 cyber-dots"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News
          </Button>

          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-primary/20 rounded-full text-xs text-primary border border-primary/20">
                {article.category}
              </span>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-2" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-4 neon-text">{article.title}</h1>
          <div className="flex items-center space-x-2 mb-8">
            <span className="text-sm text-muted-foreground">By</span>
            <span className="text-sm text-primary">{article.author}</span>
          </div>

          <div className="prose prose-invert max-w-none mb-8">
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/10 rounded-full text-xs border border-primary/20 flex items-center"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </article>
    </div>
  );
}