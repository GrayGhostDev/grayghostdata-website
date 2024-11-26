"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import Script from 'next/script';
import { useState } from "react";
import { ContactForm } from "@/components/forms/contact-form";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { CaseStudyModal } from "@/components/case-study-modal";
import { ServiceEvaluation } from "@/components/service-evaluation";
import { ServiceProvider, ServiceType } from "@/components/service-provider";
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import type { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconProp } from '@fortawesome/fontawesome-svg-core';
import { 
  faDatabase, 
  faChartBar, 
  faBrain, 
  faCog,
  faCode,
  faSearch,
  faLock,
  faCloud,
  faShield,
  faUsers,
  faFileText,
  faRocket,
  faTerminal,
  faEye,
  faExclamationTriangle,
  faBell,
  faChartLine,
  faArrowsAlt,
  faNetworkWired,
  faCheckSquare
} from '@fortawesome/free-solid-svg-icons';

// Add icons to library
library.add(
  faDatabase, 
  faChartBar, 
  faBrain, 
  faCog,
  faCode,
  faSearch,
  faLock,
  faCloud,
  faShield,
  faUsers,
  faFileText,
  faRocket,
  faTerminal,
  faEye,
  faExclamationTriangle,
  faBell,
  faChartLine,
  faArrowsAlt,
  faNetworkWired,
  faCheckSquare
);

interface ServiceDetailLayoutProps {
  title: string;
  description: string;
  iconName: string;
  features?: string[];
  benefits?: string[];
  process?: {
    title: string;
    description: string;
    iconName: string;
  }[];
  technologies?: string[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  caseStudies?: any[];
  serviceType: ServiceType;
  children?: ReactNode;
}

export function ServiceDetailLayout({
  title,
  description,
  iconName,
  features,
  benefits,
  process,
  technologies,
  faqs,
  caseStudies,
  serviceType,
  children,
}: ServiceDetailLayoutProps) {
  const [selectedStudy, setSelectedStudy] = useState<any>(null);
  const icon = iconName?.replace(/-/g, '') as IconProp;

  return (
    <ServiceProvider serviceType={serviceType}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <section className="py-20">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto text-center"
              >
                <div className="mx-auto mb-8 w-16 h-16 text-primary">
                  <FontAwesomeIcon 
                    icon={icon}
                    className="w-full h-full"
                  />
                </div>
                <h1 className="text-4xl font-bold mb-4">{title}</h1>
                <p className="text-xl text-muted-foreground">{description}</p>
              </motion.div>
            </div>
          </section>

          {features && features.length > 0 && (
            <section className="py-20 bg-muted/50">
              <div className="container">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features?.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                        className="bg-background p-6 rounded-lg shadow-sm"
                      >
                        <h3 className="font-medium">{feature}</h3>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {benefits && benefits.length > 0 && (
            <section className="py-20">
              <div className="container">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h2 className="text-3xl font-bold text-center mb-12">Benefits</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits?.map((benefit, index) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                        className="bg-primary/5 p-6 rounded-lg"
                      >
                        <p className="font-medium">{benefit}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {process && process.length > 0 && (
            <section className="py-20 bg-muted/50">
              <div className="container">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {process.map((step, index) => (
                      <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                        className="text-center"
                      >
                        <div className="mx-auto mb-4 w-12 h-12 text-primary">
                          <FontAwesomeIcon 
                            icon={step.iconName.replace(/-/g, '') as IconProp} 
                            className="w-full h-full"
                          />
                        </div>
                        <h3 className="font-bold mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {technologies && technologies.length > 0 && (
            <section className="py-20">
              <div className="container">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
                  <div className="flex flex-wrap justify-center gap-4">
                    {technologies?.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                        className="bg-primary/5 px-4 py-2 rounded-full"
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {faqs && faqs.length > 0 && (
            <section className="py-20 bg-muted/50">
              <div className="container">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                  <div className="max-w-3xl mx-auto space-y-8">
                    {faqs?.map((faq, index) => (
                      <motion.div
                        key={faq.question}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
                        className="bg-background p-6 rounded-lg shadow-sm"
                      >
                        <h3 className="font-bold mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {caseStudies && caseStudies.length > 0 && (
            <section className="py-20">
              <div className="container">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {caseStudies?.map((study, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden rounded-lg border bg-background p-2"
                        onClick={() => setSelectedStudy(study)}
                      >
                        <div className="aspect-video overflow-hidden rounded-md">
                          <OptimizedImage
                            src={study.image || "/images/case-study-placeholder.jpg"}
                            alt={study.title}
                            width={600}
                            height={400}
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            priority={index < 2}
                          />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                        <p className="text-sm text-primary mb-4">{study.industry || study.client}</p>
                        <p className="text-muted-foreground mb-6">{study.description}</p>
                        <div className="space-y-2 mb-6">
                          {study.results.slice(0, 3).map((result: string) => (
                            <div key={result} className="flex items-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                              <span className="text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                        <Button 
                          variant="outline" 
                          onClick={() => setSelectedStudy(study)}
                          className="w-full"
                        >
                          View Full Case Study
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          <section className="py-20 bg-muted/50">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <ContactForm />
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container">
              <div className="max-w-xl mx-auto">
                <NewsletterForm />
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <ServiceEvaluation />
              </div>
            </div>
          </section>

          {children && (
            <section className="py-20">
              <div className="container">
                <div className="max-w-3xl mx-auto">
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    {children}
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>
        <Footer />
        <CaseStudyModal
          study={selectedStudy}
          isOpen={!!selectedStudy}
          onClose={() => setSelectedStudy(null)}
        />
      </div>
    </ServiceProvider>
  );
}
