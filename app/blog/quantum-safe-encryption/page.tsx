"use client";

import { motion } from "framer-motion";
import { Cpu, ArrowLeft, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function QuantumSafeEncryptionArticle() {
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
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Case Studies
          </Button>

          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80"
              alt="Quantum-Safe Encryption"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <Cpu className="h-12 w-12 text-primary neon-text" />
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
                <span>18 min read</span>
              </div>
            </div>
            <span className="px-3 py-1 bg-primary/20 rounded-full text-xs text-primary border border-primary/20">
              Blockchain Security
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4 neon-text">Quantum-Safe Encryption for Blockchain Assets</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Developing a post-quantum cryptography solution that secures over $2B in blockchain assets against quantum computing threats.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">The Quantum Threat</h2>
            <p>
              With quantum computers advancing rapidly, traditional cryptographic methods are becoming vulnerable. Our solution implements quantum-resistant algorithms to protect blockchain assets against future quantum attacks.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">Technical Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-xl font-bold mb-2">Encryption Layer</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Lattice-based cryptography</li>
                  <li>Hash-based signatures</li>
                  <li>Multivariate cryptography</li>
                </ul>
              </div>
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-xl font-bold mb-2">Security Features</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Forward secrecy</li>
                  <li>Key encapsulation</li>
                  <li>Hybrid encryption schemes</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">Implementation Process</h2>
            <ol className="list-decimal pl-6 space-y-4">
              <li>Assessment of quantum vulnerability surface</li>
              <li>Selection of post-quantum algorithms</li>
              <li>Integration with existing blockchain infrastructure</li>
              <li>Performance optimization and testing</li>
              <li>Security auditing and validation</li>
            </ol>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">Performance Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-xl font-bold mb-2 text-primary">$2B+</h3>
                <p className="text-sm">Assets secured</p>
              </div>
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-xl font-bold mb-2 text-primary">&lt;50ms</h3>
                <p className="text-sm">Transaction latency</p>
              </div>
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-xl font-bold mb-2 text-primary">100%</h3>
                <p className="text-sm">Quantum resistance</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">Technical Architecture</h2>
            <p>
              The solution employs a layered approach to quantum-safe security:
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Base Layer:</strong> Quantum-resistant signature schemes for transaction validation
              </li>
              <li>
                <strong>Network Layer:</strong> Post-quantum key exchange protocols
              </li>
              <li>
                <strong>Application Layer:</strong> Hybrid encryption for backward compatibility
              </li>
            </ul>

            <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold mb-4">Future Implications</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ready for quantum computing era</li>
                <li>Scalable to larger asset volumes</li>
                <li>Adaptable to new quantum threats</li>
                <li>Industry standard setting</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
}