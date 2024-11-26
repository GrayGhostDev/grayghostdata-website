"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LinkedinIcon, TwitterIcon, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const team = [
  {
    name: "Curtis Jemison",
    role: "CEO & Founder",
    image: "/curtis-jemison.png",
    bio: "Cybersecurity expert with over a decade of experience in enterprise security and blockchain technology.",
    social: {
      linkedin: "https://linkedin.com/in/curtisjemison",
      twitter: "https://twitter.com/curtisjemison",
      github: "https://github.com/curtisjemison",
    },
  },
  {
    name: "Sarah Chen",
    role: "Chief Data Officer",
    image: "/team/sarah-chen.jpg",
    bio: "Data science leader specializing in AI/ML and advanced analytics solutions.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Security Operations",
    image: "/team/marcus-rodriguez.jpg",
    bio: "Security operations expert with extensive experience in threat detection and incident response.",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Dr. Emily Watson",
    role: "Research Director",
    image: "/team/emily-watson.jpg",
    bio: "PhD in Computer Science, leading research initiatives in quantum-resistant cryptography.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function TeamSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry experts dedicated to delivering cutting-edge cybersecurity and
            data analytics solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={itemVariants}>
              <Card className="h-full bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                  <CardDescription className="text-primary/80">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.bio}
                  </p>
                  <div className="flex gap-2">
                    {member.social.linkedin && (
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="hover:text-primary"
                      >
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LinkedinIcon className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {member.social.twitter && (
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="hover:text-primary"
                      >
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <TwitterIcon className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {member.social.github && (
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="hover:text-primary"
                      >
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GithubIcon className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
