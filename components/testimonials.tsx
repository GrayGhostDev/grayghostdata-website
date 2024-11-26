"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Gray Ghost's cybersecurity solutions have transformed our security posture. Their AI-driven threat detection caught several potential breaches before they could cause damage.",
    author: "Sarah Chen",
    title: "CTO, TechVision Inc.",
    image: "/testimonials/sarah.jpg"
  },
  {
    quote: "The data analytics insights provided by Gray Ghost helped us increase our operational efficiency by 40%. Their team's expertise is unmatched.",
    author: "Michael Rodriguez",
    title: "Head of Operations, DataFlow Systems",
    image: "/testimonials/michael.jpg"
  },
  {
    quote: "Implementing Gray Ghost's RWA tokenization solution streamlined our asset management process. Their blockchain expertise is truly impressive.",
    author: "Emily Thompson",
    title: "Director of Innovation, AssetTech Global",
    image: "/testimonials/emily.jpg"
  }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="h-full"
    >
      <Card className="h-full bg-primary/5 border-none hover:bg-primary/10 transition-colors duration-300">
        <CardContent className="p-6">
          <Quote className="h-8 w-8 text-primary/40 mb-4" />
          <p className="text-lg mb-6 text-foreground/80 italic">
            "{testimonial.quote}"
          </p>
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={testimonial.image} alt={testimonial.author} />
              <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-foreground">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{testimonial.title}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export function Testimonials() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div ref={containerRef} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading companies worldwide to deliver exceptional
            cybersecurity and data solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
