import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleContent } from '@/components/article-content';

// Article data would typically come from a CMS or database
const articles = {
  "quantum-computing-threat": {
    title: "The Rising Quantum Computing Threat",
    category: "Cybersecurity",
    author: "Dr. Sarah Chen",
    date: "2024-03-20",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80",
    content: `
      # The Quantum Computing Threat

      As quantum computing advances, traditional encryption methods face unprecedented challenges. This article explores the implications and preparatory measures organizations should take.

      ## Understanding the Threat

      Quantum computers possess the potential to break many current encryption standards, particularly those relying on factoring large numbers or solving discrete logarithm problems.

      ## Key Areas of Concern

      1. Public Key Infrastructure (PKI)
      2. Digital Signatures
      3. Key Exchange Protocols
      4. Blockchain Security

      ## Preparatory Measures

      Organizations should begin implementing quantum-resistant cryptography and reviewing their security infrastructure.

      ### Recommended Actions

      - Assess current cryptographic implementations
      - Develop quantum-safe migration plans
      - Monitor NIST standardization efforts
      - Implement hybrid cryptographic solutions

      ## Future Implications

      The transition to quantum-safe cryptography will require significant infrastructure changes and careful planning.
    `,
    tags: ["Quantum", "Encryption", "Security"],
    relatedArticles: [
      "ai-threat-detection",
      "zero-trust-architecture"
    ]
  },
  // Add more articles...
};

export function generateStaticParams() {
  return Object.keys(articles).map((id) => ({
    id,
  }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const article = articles[params.id as keyof typeof articles];
  
  if (!article) {
    return {
      title: 'Article Not Found - Gray Ghost Data Consultants',
    };
  }

  return {
    title: `${article.title} - Gray Ghost Data Consultants`,
    description: article.content.substring(0, 200),
  };
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles[params.id as keyof typeof articles];

  if (!article) {
    notFound();
  }

  return <ArticleContent article={article} />;
}