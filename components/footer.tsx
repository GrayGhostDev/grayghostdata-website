"use client";

import { useState } from "react";
import { Shield, Github, Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/grayghostdata",
    icon: Github
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/grayghostdata",
    icon: Linkedin
  },
  {
    name: "Twitter",
    href: "https://twitter.com/grayghostdata",
    icon: Twitter
  },
  {
    name: "Email",
    href: "mailto:curtis@grayghostdata.com",
    icon: Mail
  }
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    try {
      // Here you would typically send the email to your newsletter service
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      toast.success("Thanks for subscribing!");
      setEmail("");
    } catch (error) {
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-background border-t border-border relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5 pointer-events-none" />
      
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Link href="/" className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-primary" />
                <span className="font-bold text-xl">Gray Ghost</span>
              </Link>
              
              <p className="text-sm text-muted-foreground">
                Securing the digital future through innovative solutions and expert consulting.
                We help businesses navigate the complex landscape of cybersecurity and data analytics.
              </p>

              <div className="flex items-center space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <link.icon className="h-5 w-5 text-primary" />
                    <span className="sr-only">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-foreground">Services</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/services/cybersecurity" className="text-muted-foreground hover:text-primary transition-colors">
                      Cybersecurity
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/data-analytics" className="text-muted-foreground hover:text-primary transition-colors">
                      Data Analytics
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/tokenization" className="text-muted-foreground hover:text-primary transition-colors">
                      RWA Tokenization
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/development" className="text-muted-foreground hover:text-primary transition-colors">
                      Software Development
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-foreground">Company</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/security" className="text-muted-foreground hover:text-primary transition-colors">
                      Security
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-semibold mb-2">Stay Updated</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Subscribe to our newsletter for security insights and updates.
                </p>
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="max-w-sm"
                    required
                  />
                  <Button type="submit" disabled={isSubscribing}>
                    {isSubscribing ? (
                      "Subscribing..."
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              <div className="text-sm text-muted-foreground text-right">
                <p>&copy; {new Date().getFullYear()} Gray Ghost Data Consultants LLC.</p>
                <p>All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}