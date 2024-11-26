"use client";

import { motion, useInView } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search, Filter, Tag } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    slug: "future-of-quantum-safe-cryptography",
    title: "The Future of Quantum-Safe Cryptography",
    excerpt: "Exploring the latest developments in post-quantum cryptography and their implications for cybersecurity.",
    author: {
      name: "Dr. Sarah Chen",
      image: "/team/sarah-chen.jpg",
      role: "Chief Cryptography Researcher"
    },
    date: "2024-03-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80",
    category: "Cybersecurity",
    tags: ["Quantum Computing", "Cryptography", "Security"],
    featured: true
  },
  {
    slug: "ai-powered-threat-detection",
    title: "AI-Powered Threat Detection",
    excerpt: "How artificial intelligence is revolutionizing the way we detect and prevent cyber threats.",
    author: {
      name: "Marcus Rodriguez",
      image: "/team/marcus-rodriguez.jpg",
      role: "AI Security Specialist"
    },
    date: "2024-03-10",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
    category: "AI & Security",
    tags: ["AI", "Machine Learning", "Threat Detection"],
    featured: false
  },
  {
    slug: "blockchain-in-asset-tokenization",
    title: "Blockchain in Asset Tokenization",
    excerpt: "Understanding the role of blockchain technology in securing and managing real-world assets.",
    author: {
      name: "Dr. James Wilson",
      image: "/team/james-wilson.jpg",
      role: "Blockchain Researcher"
    },
    date: "2024-03-05",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80",
    category: "Blockchain",
    tags: ["Blockchain", "Tokenization", "DeFi"],
    featured: false
  }
];

const categories = Array.from(new Set(posts.map(post => post.category)));
const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  const filteredPosts = regularPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => post.tags.includes(tag));
    
    return matchesSearch && matchesCategory && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div ref={containerRef} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Latest Insights
          </h1>
          <p className="text-xl text-muted-foreground">
            Expert analysis and thought leadership in cybersecurity, 
            data analytics, and emerging technologies.
          </p>
        </motion.div>

        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-6xl mx-auto mb-16"
          >
            <Link href={`/blog/${featuredPost.slug}`}>
              <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <Badge className="w-fit mb-4">{featuredPost.category}</Badge>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center space-x-4">
                        <div className="relative h-10 w-10 rounded-full overflow-hidden">
                          <Image
                            src={featuredPost.author.image}
                            alt={featuredPost.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{featuredPost.author.name}</p>
                          <p className="text-sm text-muted-foreground">{featuredPost.author.role}</p>
                        </div>
                      </div>
                      <Button variant="ghost" className="ml-auto group-hover:text-primary transition-colors">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        )}

        <div className="max-w-5xl mx-auto mb-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full md:w-auto">
                  <Filter className="h-4 w-4 mr-2" />
                  {selectedCategory || "All Categories"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelectedCategory(null)}>
                  All Categories
                </DropdownMenuItem>
                {categories.map((category) => (
                  <DropdownMenuItem
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleTag(tag)}
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 group">
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-background/80 backdrop-blur-sm">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between pt-6 border-t">
                    <div className="flex items-center space-x-4">
                      <div className="relative h-8 w-8 rounded-full overflow-hidden">
                        <Image
                          src={post.author.image}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">{post.author.name}</p>
                        <p className="text-muted-foreground">{post.author.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-lg text-muted-foreground">
              No articles found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}