"use client";

import { motion } from "framer-motion";
import { Shield, Lock, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";

export default function CybersecurityCaseStudy() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
              Enterprise Security Transformation
            </h1>
            <p className="text-xl text-muted-foreground">
              How we helped TechCorp Solutions achieve zero security breaches and
              99.9% uptime through comprehensive security measures.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="relative h-16 w-48">
                  <OptimizedImage
                    src="/images/success-stories/techcorp-logo.png"
                    alt="TechCorp Solutions"
                    width={192}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">TechCorp Solutions</h3>
                  <p className="text-sm text-muted-foreground">Technology Industry</p>
                </div>
              </div>

              <div className="prose prose-gray dark:prose-invert">
                <p>
                  TechCorp Solutions, a leading technology provider, faced significant
                  security challenges as they scaled their operations globally. They
                  needed a comprehensive security transformation to protect their
                  assets and maintain customer trust.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-background/50 backdrop-blur-sm rounded-lg border border-primary/20">
                  <div className="text-2xl font-bold text-primary">-85%</div>
                  <div className="text-sm text-muted-foreground">
                    Security Incidents
                  </div>
                </div>
                <div className="p-4 bg-background/50 backdrop-blur-sm rounded-lg border border-primary/20">
                  <div className="text-2xl font-bold text-primary">-60%</div>
                  <div className="text-sm text-muted-foreground">
                    Response Time
                  </div>
                </div>
                <div className="p-4 bg-background/50 backdrop-blur-sm rounded-lg border border-primary/20">
                  <div className="text-2xl font-bold text-primary">$2M+</div>
                  <div className="text-sm text-muted-foreground">
                    Cost Savings
                  </div>
                </div>
                <div className="p-4 bg-background/50 backdrop-blur-sm rounded-lg border border-primary/20">
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">
                    System Uptime
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-video rounded-lg overflow-hidden"
            >
              <OptimizedImage
                src="/images/success-stories/techcorp.jpg"
                alt="TechCorp Solutions Case Study"
                width={960}
                height={540}
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-lg bg-destructive/10">
                  <Shield className="h-6 w-6 text-destructive" />
                </div>
                <h2 className="text-2xl font-bold">The Challenge</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert">
                <ul>
                  <li>Legacy security infrastructure unable to handle modern threats</li>
                  <li>Increasing number of security incidents</li>
                  <li>Long incident response times</li>
                  <li>High operational security costs</li>
                  <li>Complex compliance requirements</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Our Solution</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert">
                <ul>
                  <li>Implemented next-generation security infrastructure</li>
                  <li>Deployed AI-powered threat detection</li>
                  <li>Automated incident response procedures</li>
                  <li>Established 24/7 security monitoring</li>
                  <li>Streamlined compliance processes</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Details */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Implementation Process</h2>
            <p className="text-lg text-muted-foreground">
              Our systematic approach to transforming TechCorp's security infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Security Assessment",
                description:
                  "Comprehensive evaluation of existing security measures and vulnerabilities",
                icon: FileText,
              },
              {
                title: "Infrastructure Upgrade",
                description:
                  "Implementation of modern security tools and technologies",
                icon: Shield,
              },
              {
                title: "Process Automation",
                description:
                  "Automation of security monitoring and incident response",
                icon: Lock,
              },
              {
                title: "Continuous Improvement",
                description:
                  "Ongoing optimization of security measures and processes",
                icon: CheckCircle2,
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-background/50 backdrop-blur-sm rounded-lg border border-primary/20"
              >
                <div className="p-2 w-fit rounded-lg bg-primary/10 mb-4">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto p-8 bg-background/50 backdrop-blur-sm rounded-lg border border-primary/20"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative h-16 w-16 rounded-full overflow-hidden">
                <OptimizedImage
                  src="/images/success-stories/techcorp.jpg"
                  alt="Sarah Johnson"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">
                  CTO, TechCorp Solutions
                </div>
              </div>
            </div>
            <blockquote className="text-lg italic text-muted-foreground">
              "Gray Ghost Data's security transformation has been a game-changer for
              our organization. We've seen dramatic improvements in our security
              posture, and the automated systems have significantly reduced our
              response times. The cost savings have exceeded our expectations, and
              we now have complete confidence in our ability to protect our assets
              and maintain customer trust."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Security?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us to discuss how we can help strengthen your organization's
              security posture and achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Schedule a Consultation</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/services/cybersecurity-assessment">View Our Services</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
