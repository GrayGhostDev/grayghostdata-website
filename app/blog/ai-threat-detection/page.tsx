"use client";

import { motion } from "framer-motion";
import { Brain, ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AIThreatDetectionArticle() {
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
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
              alt="AI-Powered Threat Detection"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <Brain className="h-12 w-12 text-primary neon-text" />
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
                <span>12 min read</span>
              </div>
            </div>
            <span className="px-3 py-1 bg-primary/20 rounded-full text-xs text-primary border border-primary/20">
              AI & Security
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4 neon-text">
            AI-Powered Threat Detection: Revolutionizing Cybersecurity in the Age of Digital Warfare
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              In an increasingly interconnected world, the volume and complexity of cyber threats are 
              escalating at an unprecedented pace.
            </p>

            <p>
              Cyberattacks have evolved beyond simple malware or phishing schemes into sophisticated, 
              multi-faceted operations capable of crippling critical infrastructures and stealing sensitive data. 
              Traditional threat detection systems, while still valuable, often fall short in identifying advanced 
              threats in real time. Enter artificial intelligence (AI)—a game-changer in the realm of cybersecurity.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">Why Traditional Cybersecurity Falls Short</h2>
            <p>
              Traditional cybersecurity systems rely heavily on signature-based detection and rule-based algorithms. 
              These methods work well for known threats, where specific patterns or signatures can be identified and 
              mitigated. However, they struggle with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Zero-Day Vulnerabilities: Threats that exploit unknown security gaps</li>
              <li>Advanced Persistent Threats (APTs): Sophisticated, stealthy attacks</li>
              <li>High Alert Fatigue: Overwhelming number of false positives</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">The Role of AI in Threat Detection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-xl font-bold mb-4">Behavioral Analysis</h3>
                <p>
                  AI systems analyze user, application, and network behaviors to establish baselines 
                  and detect anomalies.
                </p>
              </div>
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-xl font-bold mb-4">Predictive Analytics</h3>
                <p>
                  Using historical data and trends to predict vulnerabilities and anticipate attacks.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">Real-World Applications</h2>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-lg font-bold mb-2">Phishing Detection</h3>
                <p>
                  AI analyzes email content, sender behavior, and metadata to detect fraudulent communications.
                </p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-lg font-bold mb-2">Ransomware Prevention</h3>
                <p>
                  Monitoring network activity and file access behaviors for early ransomware signs.
                </p>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-lg font-bold mb-2">Fraud Prevention</h3>
                <p>
                  Identifying fraudulent transactions through pattern analysis and behavioral monitoring.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">Implementation Challenges</h2>
            <div className="grid grid-cols-2 gap-4 my-8">
              <div className="col-span-2 md:col-span-1">
                <h3 className="font-bold mb-2">Technical Challenges</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Data privacy concerns</li>
                  <li>Adversarial attacks</li>
                  <li>Infrastructure costs</li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h3 className="font-bold mb-2">Operational Challenges</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Talent acquisition</li>
                  <li>System maintenance</li>
                  <li>False positive management</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">The Future of AI-Powered Security</h2>
            <div className="p-6 bg-primary/5 rounded-lg border border-primary/20 my-8">
              <h3 className="text-xl font-bold mb-4">Emerging Trends</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                  <span>Explainable AI (XAI) for transparent decision-making</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                  <span>Federated learning for collaborative security</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                  <span>Blockchain integration for enhanced integrity</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                  <span>Autonomous Security Operations Centers</span>
                </li>
              </ul>
            </div>

            <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold mb-4">Key Takeaways</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>AI is transforming threat detection and response</li>
                <li>Traditional methods are insufficient for modern threats</li>
                <li>Implementation challenges require careful consideration</li>
                <li>The future promises even more advanced AI capabilities</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {[
              "Artificial Intelligence",
              "Cybersecurity",
              "Threat Detection",
              "Machine Learning",
              "Security Operations",
              "Digital Warfare"
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