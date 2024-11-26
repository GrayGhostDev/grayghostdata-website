import { Metadata } from 'next';
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/content";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { generateMetadata as generateSEOMetadata } from "@/components/seo/meta-tags";
import { generateBlogPostStructuredData } from "@/components/seo/structured-data";
import Script from 'next/script';
import { MotionDiv } from "@/components/motion-wrapper";

// This would typically come from a CMS or API
const blogPosts = [
  {
    slug: "future-of-quantum-safe-cryptography",
    title: "The Future of Quantum-Safe Cryptography",
    description: "Exploring the latest developments in post-quantum cryptography and their implications for cybersecurity.",
    content: `
    <h2>Introduction</h2>
    <p>As quantum computing continues to advance, the need for quantum-safe cryptography becomes increasingly critical. Traditional cryptographic methods that we rely on today may become vulnerable to attacks from quantum computers, potentially exposing sensitive data and communications.</p>

    <h2>Understanding Quantum Computing Threats</h2>
    <p>Quantum computers leverage quantum mechanical phenomena to perform calculations exponentially faster than classical computers for certain types of problems. This capability poses a significant threat to current cryptographic systems, particularly those based on factoring large numbers or computing discrete logarithms.</p>

    <h2>Post-Quantum Cryptography Solutions</h2>
    <p>Researchers and organizations worldwide are developing new cryptographic algorithms that can withstand attacks from both quantum and classical computers. These solutions typically fall into several categories:</p>
    <ul>
      <li>Lattice-based cryptography</li>
      <li>Hash-based signatures</li>
      <li>Multivariate cryptography</li>
      <li>Code-based cryptography</li>
    </ul>

    <h2>Implementation Challenges</h2>
    <p>While theoretical solutions exist, implementing quantum-safe cryptography presents several challenges:</p>
    <ul>
      <li>Performance overhead</li>
      <li>Key size management</li>
      <li>Integration with existing systems</li>
      <li>Standardization efforts</li>
    </ul>

    <h2>Future Outlook</h2>
    <p>The transition to quantum-safe cryptography will be a gradual process requiring careful planning and coordination across industries.</p>`,
    author: {
      id: "jane-smith",
      name: "Dr. Jane Smith",
      role: "Principal Cryptographer",
      image: "/images/team/jane-smith.jpg",
      expertise: ["Cryptography", "Quantum Computing", "Cybersecurity"],
      socialLinks: {
        linkedin: "https://linkedin.com/in/jane-smith",
        twitter: "https://twitter.com/janesmith",
      }
    },
    publishedAt: "2024-02-15",
    readingTime: "8 min read",
    category: "Cybersecurity",
    tags: ["Cryptography", "Quantum Computing", "Security", "Technology"],
    image: "/images/blog/quantum-cryptography.jpg",
    featured: true
  }
];

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

const post = blogPosts[0];

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata({
    title: post.title,
    description: post.description,
    image: post.image,
    type: 'article',
    publishedTime: post.publishedAt,
    author: post.author.name,
    section: post.category,
    tags: post.tags,
  });
}

export default function BlogPostPage() {
  const structuredData = generateBlogPostStructuredData({
    title: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.publishedAt,
    authorName: post.author.name,
    authorUrl: post.author.socialLinks?.linkedin,
    publisherName: 'Gray Ghost Data',
    publisherLogo: 'https://grayghostdata.com/images/logo.png',
    url: `https://grayghostdata.com/blog/${post.slug}`,
  });

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen pt-24 pb-16">
        <article className="container max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Link href="/blog">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
            
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{post.description}</p>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {post.readingTime}
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <OptimizedImage
                    src={post.author.image}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{post.author.name}</div>
                  <div className="text-sm text-muted-foreground">{post.author.role}</div>
                </div>
              </div>
            </MotionDiv>
          </div>
          
          <div className="relative aspect-video w-full mb-12 rounded-lg overflow-hidden">
            <OptimizedImage
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
          
          <div className="prose prose-gray dark:prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="flex items-center justify-between py-6 border-t">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
