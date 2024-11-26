"use client";

import { motion } from "framer-motion";
import { Database, ArrowLeft, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PredictiveAnalyticsArticle() {
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
              src="https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?auto=format&fit=crop&q=80"
              alt="Predictive Analytics Engine"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <Database className="h-12 w-12 text-primary neon-text" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>March 10, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>12 min read</span>
              </div>
            </div>
            <span className="px-3 py-1 bg-primary/20 rounded-full text-xs text-primary border border-primary/20">
              Data Analytics
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4 neon-text">Building a High-Performance Predictive Analytics Engine</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              How we developed a real-time data processing pipeline handling over 1 million events per second and processing 500TB of data daily.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">Project Overview</h2>
            <p>
              Our client needed a scalable solution to process massive amounts of real-time data for predictive analytics. The system needed to handle complex event processing while maintaining sub-second latency.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">Technical Architecture</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Data Ingestion Layer:</strong> Distributed message queues handling 1M+ events/second
              </li>
              <li>
                <strong>Processing Engine:</strong> Stream processing with real-time analytics capabilities
              </li>
              <li>
                <strong>Storage Layer:</strong> Hybrid storage solution combining hot and cold data paths
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-xl font-bold mb-2">Real-time Processing</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Sub-millisecond latency</li>
                  <li>Automatic scaling</li>
                  <li>Fault tolerance</li>
                </ul>
              </div>
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Machine learning models</li>
                  <li>Pattern recognition</li>
                  <li>Anomaly detection</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">Performance Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-xl font-bold mb-2 text-primary">1M+</h3>
                <p className="text-sm">Events processed per second</p>
              </div>
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-xl font-bold mb-2 text-primary">500TB</h3>
                <p className="text-sm">Daily data processing</p>
              </div>
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-xl font-bold mb-2 text-primary">99.99%</h3>
                <p className="text-sm">System uptime</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4 cyber-dots">Implementation Challenges</h2>
            <p>
              The project faced several technical challenges, including data consistency at scale, real-time processing latency, and system reliability. These were addressed through innovative architectural decisions and optimization techniques.
            </p>

            <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold mb-4">Success Factors</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Distributed architecture design</li>
                <li>Custom optimization algorithms</li>
                <li>Robust monitoring and alerting</li>
                <li>Automated scaling mechanisms</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
}