"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const images = [
  {
    src: "/images/services/cybersecurity-hero.jpg",
    alt: "Cybersecurity Hero",
    title: "Priority Loading",
    description: "Image loads immediately with priority flag",
  },
  {
    src: "/images/services/cloud-security-hero.jpg",
    alt: "Cloud Security Hero",
    title: "Lazy Loading with Skeleton",
    description: "Shows skeleton loader during image load",
  },
  {
    src: "/images/services/invalid-image.jpg",
    alt: "Invalid Image",
    title: "Error Handling",
    description: "Shows fallback image when loading fails",
  },
  {
    src: "/images/services/business-intelligence-hero.jpg",
    alt: "Business Intelligence Hero",
    title: "Blur Effect",
    description: "Demonstrates blur-up loading effect",
  },
];

export default function ImageLoadingDemo() {
  const [reload, setReload] = useState(0);

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
            OptimizedImage Demo
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore the enhanced image loading features with different loading states,
            transitions, and error handling.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="grid" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="single">Single View</TabsTrigger>
            </TabsList>
            <TabsContent value="grid">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {images.map((image, index) => (
                  <Card key={`${image.src}-${reload}`} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <OptimizedImage
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                      <p className="text-muted-foreground">{image.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="single">
              <Card className="overflow-hidden max-w-3xl mx-auto">
                {images.map((image, index) => (
                  <motion.div
                    key={`${image.src}-${reload}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="aspect-video relative">
                      <OptimizedImage
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                      <p className="text-muted-foreground">{image.description}</p>
                    </div>
                  </motion.div>
                ))}
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center mt-8">
            <Button
              size="lg"
              onClick={() => setReload((prev) => prev + 1)}
            >
              Reload Images
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
