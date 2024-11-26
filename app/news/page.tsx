"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const newsArticles = [
  {
    id: "quantum-computing-threat",
    title: "The Rising Quantum Computing Threat",
    excerpt: "Exploring the latest developments in post-quantum cryptography and their implications for cybersecurity.",
    author: "Dr. Sarah Chen",
    date: "2024-03-20",
    readTime: "8 min",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80"
  },
  {
    id: "ai-threat-detection",
    title: "AI-Powered Threat Detection",
    excerpt: "How artificial intelligence is revolutionizing the way we detect and prevent cyber threats.",
    author: "Marcus Rodriguez",
    date: "2024-03-15",
    readTime: "6 min",
    category: "AI & Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
  },
  {
    id: "blockchain-tokenization",
    title: "Blockchain in Asset Tokenization",
    excerpt: "Understanding the role of blockchain technology in securing and managing real-world assets.",
    author: "Dr. James Wilson",
    date: "2024-03-05",
    readTime: "10 min",
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80"
  }
];

const categories = ["All", "Cybersecurity", "AI & Security", "Blockchain", "Data Analytics"];

export default function NewsPage() {
  const router = useRouter();
  const defaultCategory = "All";

  const handleReadMore = (articleId: string) => {
    router.push(`/blog/${articleId}`);
  };

  return (
    <div className="min-h-screen pt-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 neon-text">Latest News & Insights</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest in cybersecurity and technology
          </p>
        </motion.div>

        <Tabs defaultValue={defaultCategory} className="mb-8">
          <TabsList className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:bg-primary/20"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsArticles
                  .filter(article => category === "All" || article.category === category)
                  .map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="h-full bg-background/50 backdrop-blur-sm border-primary/20 hover:neon-border transition-all duration-300">
                        <div className="aspect-video relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 right-4 z-20">
                            <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-xs text-primary border border-primary/20">
                              {article.category}
                            </span>
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle className="cyber-dots">{article.title}</CardTitle>
                          <CardDescription>{article.excerpt}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4" />
                              <span>{article.date}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4" />
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                          <Button 
                            className="w-full neon-border bg-primary/10 hover:bg-primary/20 group"
                            onClick={() => handleReadMore(article.id)}
                          >
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}