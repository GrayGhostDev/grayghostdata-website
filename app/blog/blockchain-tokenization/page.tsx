"use client";

import { motion } from "framer-motion";
import { Blocks, ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function BlockchainTokenizationArticle() {
  const router = useRouter();

  return (
    <div className="min-h-screen pt-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <article className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            className="mb-8 cyber-dots"
            onClick={() => router.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News
          </Button>

          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80"
              alt="Blockchain Asset Tokenization"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <Blocks className="h-12 w-12 text-primary neon-text" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>March 5, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>15 min read</span>
              </div>
            </div>
            <span className="px-3 py-1 bg-primary/20 rounded-full text-xs text-primary border border-primary/20">
              Blockchain
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4 neon-text">
            Blockchain in Asset Tokenization: Securing and Managing Real-World Assets
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              The convergence of blockchain technology and asset tokenization is reshaping how we manage, 
              trade, and secure real-world assets.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">What Is Asset Tokenization?</h2>
            <p>
              Asset tokenization involves converting the ownership rights of a real-world asset into a 
              digital token on a blockchain. Each token represents a fractional ownership or stake in 
              the asset, enabling it to be traded, stored, or transferred seamlessly across a 
              decentralized network.
            </p>

            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 my-8">
              <h3 className="text-xl font-bold mb-4">Examples:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>High-value real estate property tokenized into thousands of smaller digital units</li>
                <li>Fine art pieces tokenized for fractional ownership</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">The Role of Blockchain in Tokenization</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              {[
                {
                  title: "Immutable Ownership",
                  description: "Decentralized and tamper-proof ownership records"
                },
                {
                  title: "Fractional Ownership",
                  description: "Division of high-value assets into smaller units"
                },
                {
                  title: "Enhanced Liquidity",
                  description: "Quick and easy transfer of traditionally illiquid assets"
                },
                {
                  title: "Reduced Costs",
                  description: "Elimination of intermediaries and automated processes"
                }
              ].map((feature) => (
                <div key={feature.title} className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">Key Use Cases</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Real Estate",
                  description: "Convert properties into digital tokens for fractional ownership"
                },
                {
                  title: "Art & Collectibles",
                  description: "Democratize access to high-value art investments"
                },
                {
                  title: "Stocks & Equities",
                  description: "Streamline trading and reduce settlement times"
                },
                {
                  title: "Commodities",
                  description: "Enable fractional ownership of gold, oil, and other resources"
                },
                {
                  title: "Intellectual Property",
                  description: "Tokenize patents, copyrights, and trademarks"
                }
              ].map((useCase) => (
                <div key={useCase.title} className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="text-lg font-bold mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">Challenges in Asset Tokenization</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="font-bold mb-2">Technical Challenges</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Scalability issues</li>
                  <li>Interoperability concerns</li>
                  <li>Energy consumption</li>
                </ul>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="font-bold mb-2">Regulatory Challenges</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Legal uncertainties</li>
                  <li>Compliance requirements</li>
                  <li>Cross-border regulations</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">The Future of Asset Tokenization</h2>
            <div className="p-6 bg-primary/5 rounded-lg border border-primary/20 my-8">
              <h3 className="text-xl font-bold mb-4">Expected Developments</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                  <span>Global standardization of tokenization protocols</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                  <span>Integration with DeFi platforms</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                  <span>Increased institutional adoption</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                  <span>Expansion to new asset classes</span>
                </li>
              </ul>
            </div>

            <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold mb-4">Key Takeaways</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tokenization is revolutionizing asset management</li>
                <li>Blockchain enables secure and transparent ownership</li>
                <li>Market adoption is growing despite challenges</li>
                <li>The future promises increased accessibility and efficiency</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {[
              "Blockchain",
              "Asset Tokenization",
              "DeFi",
              "Digital Assets",
              "Smart Contracts",
              "Real Estate",
              "Investment"
            ].map((tag) => (
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