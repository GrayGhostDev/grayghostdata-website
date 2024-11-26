"use client";

import { motion } from "framer-motion";
import { Shield, ArrowLeft, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ZeroDayPreventionArticle() {
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
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
              alt="Zero-Day Threat Prevention"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <Shield className="h-12 w-12 text-primary neon-text" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>March 15, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>15 min read</span>
              </div>
            </div>
            <span className="px-3 py-1 bg-primary/20 rounded-full text-xs text-primary border border-primary/20">
              Cybersecurity
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4 neon-text">Zero-Day Threat Prevention: A Technical Deep Dive</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              How we implemented an AI-powered threat detection system that prevented over 150 potential breaches and achieved a 99.9% detection rate.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">The Challenge</h2>
            <p>
              Our client, a major financial institution, faced increasingly sophisticated cyber threats targeting their digital infrastructure. Traditional security measures were proving inadequate against zero-day exploits and advanced persistent threats (APTs).
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">Technical Solution</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>AI-Powered Analysis:</strong> Implemented deep learning models trained on vast datasets of known attack patterns and normal system behavior.
              </li>
              <li>
                <strong>Real-time Monitoring:</strong> Developed a distributed sensor network processing over 1 million events per second with sub-millisecond latency.
              </li>
              <li>
                <strong>Automated Response:</strong> Created an intelligent response system capable of autonomous threat mitigation without disrupting legitimate operations.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">Implementation Process</h2>
            <ol className="list-decimal pl-6 space-y-4">
              <li>Initial system assessment and vulnerability mapping</li>
              <li>Custom AI model development and training</li>
              <li>Distributed sensor network deployment</li>
              <li>Integration with existing security infrastructure</li>
              <li>Continuous learning and system optimization</li>
            </ol>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">Results and Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-xl font-bold mb-2 text-primary">150+</h3>
                <p className="text-sm">Potential breaches prevented</p>
              </div>
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-xl font-bold mb-2 text-primary">99.9%</h3>
                <p className="text-sm">Threat detection rate</p>
              </div>
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-xl font-bold mb-2 text-primary">60%</h3>
                <p className="text-sm">Reduction in false positives</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">Future Implications</h2>
            <p>
              This implementation has set new standards in zero-day threat prevention, demonstrating the potential of AI-driven security solutions. The system continues to evolve, learning from new threats and adapting its response mechanisms accordingly.
            </p>

            <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold mb-4">Key Takeaways</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>AI-powered security systems can significantly outperform traditional solutions</li>
                <li>Real-time threat detection and response is crucial for modern cybersecurity</li>
                <li>Continuous learning and adaptation are essential for long-term effectiveness</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
}