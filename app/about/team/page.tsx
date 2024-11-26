"use client";

import { motion } from "framer-motion";
import { TeamMember } from "@/types/content";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const teamMembers: TeamMember[] = [
  {
    id: "curtis-jemison",
    name: "Curtis Jemison",
    role: "Founder & CEO",
    bio: "Data science and cybersecurity expert with over 15 years of experience in enterprise data solutions. Previously led data initiatives at Fortune 500 companies.",
    image: "/team/curtis-jemison.jpg",
    expertise: ["Data Science", "Cybersecurity", "Enterprise Architecture", "Cloud Infrastructure"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/curtisjemison",
      twitter: "https://twitter.com/curtisjemison",
      github: "https://github.com/curtisjemison"
    }
  },
  // Add more team members here
];

export default function TeamPage() {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
          Our Team
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Meet the experts behind Gray Ghost Data. We bring together decades of experience
          in data science, cybersecurity, and enterprise solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden h-full bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader className="p-0">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary mb-4">{member.role}</p>
                <p className="text-muted-foreground mb-6">{member.bio}</p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-primary/5 hover:bg-primary/10"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    {member.socialLinks?.linkedin && (
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href={member.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary"
                        >
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                      </Button>
                    )}
                    {member.socialLinks?.twitter && (
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href={member.socialLinks.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary"
                        >
                          <Twitter className="h-5 w-5" />
                          <span className="sr-only">Twitter</span>
                        </a>
                      </Button>
                    )}
                    {member.socialLinks?.github && (
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href={member.socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary"
                        >
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
