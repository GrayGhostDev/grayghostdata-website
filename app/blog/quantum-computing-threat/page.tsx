"use client";

import { motion } from "framer-motion";
import { Shield, ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function QuantumComputingThreatArticle() {
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
              src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80"
              alt="Quantum Computing Threat"
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
                <span>November 16, 2024</span>
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

          <h1 className="text-4xl font-bold mb-4 neon-text">The Rising Quantum Computing Threat: Securing Tomorrow's Digital Frontier</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              In the quiet corridors of labs worldwide, a silent revolution is brewing—a quantum revolution.
            </p>

            <p>
              With each passing year, the advancements in quantum computing bring us closer to a pivotal moment, 
              a point where the unimaginable power of quantum processors may render today's cryptographic safeguards obsolete. 
              This is no longer the stuff of science fiction. The era of quantum supremacy is on the horizon, and with it comes 
              a stark warning for the cybersecurity community: adapt or risk catastrophic vulnerabilities.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">The Quantum Threat Unveiled</h2>
            <p>
              At the heart of modern cybersecurity lies cryptography. Techniques like RSA, ECC (Elliptic Curve Cryptography), 
              and AES (Advanced Encryption Standard) form the backbone of secure communications, protecting everything from 
              personal emails to sensitive financial transactions. These methods rely on the mathematical complexity of problems 
              like factoring large numbers or solving discrete logarithms—tasks that would take classical computers millions of 
              years to complete.
            </p>

            <p>
              Enter quantum computing. Unlike classical computers that process information in binary (0s and 1s), quantum 
              computers use qubits, which can exist in multiple states simultaneously thanks to superposition. This gives 
              quantum machines an exponential advantage in computational power, allowing them to solve specific problems, 
              like those underlying modern encryption, in a fraction of the time.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">Shor's Algorithm: The Harbinger of Doom</h2>
            <p>
              In 1994, mathematician Peter Shor devised an algorithm that demonstrated the potential for quantum computers 
              to crack widely used cryptographic schemes. Shor's algorithm can efficiently factorize large numbers, breaking 
              RSA encryption, and solve discrete logarithms, jeopardizing ECC. While quantum computers capable of running 
              Shor's algorithm on a scale necessary to break modern encryption do not yet exist, their eventual arrival 
              could dismantle decades of digital security overnight.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">The Race for Post-Quantum Cryptography</h2>
            <p>
              In anticipation of the quantum threat, the cybersecurity world has been scrambling to develop cryptographic 
              techniques resistant to quantum attacks. Known as post-quantum cryptography (PQC), this emerging field seeks 
              to create encryption methods that remain secure even against the immense computational power of quantum machines.
            </p>

            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 my-8">
              <h3 className="text-xl font-bold mb-4">NIST's First Four PQC Candidates:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>CRYSTALS-Kyber (Key encapsulation mechanism)</li>
                <li>CRYSTALS-Dilithium (Digital signatures)</li>
                <li>FALCON (Digital signatures)</li>
                <li>SPHINCS+ (Hash-based signatures)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">Preparing for the Quantum Age</h2>
            <div className="space-y-4">
              <p>Organizations and individuals can prepare through:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Stay Informed: Keep abreast of developments in quantum computing and post-quantum cryptography.</li>
                <li>Conduct Cryptographic Audits: Identify cryptographic dependencies within your organization.</li>
                <li>Implement Hybrid Approaches: Combine traditional and post-quantum methods during transition.</li>
                <li>Invest in R&D: Support innovation in quantum-safe technologies.</li>
                <li>Collaborate: Engage with industry consortia and researchers.</li>
              </ul>
            </div>

            <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold mb-4">Key Takeaways</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Quantum computing poses an existential threat to current cryptographic systems</li>
                <li>Post-quantum cryptography development is crucial for future security</li>
                <li>Organizations must begin preparing for the quantum transition now</li>
                <li>Collaboration and proactive measures are essential for quantum readiness</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {["Quantum Computing", "Cybersecurity", "Encryption", "Post-Quantum Cryptography", "Security"].map((tag) => (
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