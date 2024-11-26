"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "curtis@grayghostdata.com",
    link: "mailto:curtis@grayghostdata.com"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (313) 300-1593",
    link: "tel:+13133001593"
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Ferndale, MI",
    link: "https://goo.gl/maps/Ferndale"
  },
  {
    icon: Clock,
    title: "Hours",
    details: "24/7 Support Available",
    link: "#"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground">
            Have a question or need assistance? We're here to help!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground/90">{item.title}</h3>
                          <a 
                            href={item.link}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.details}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="relative aspect-video rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.0394932544584!2d-83.13634492346979!3d42.460439271074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824cf0d7ee87825%3A0x5e7dc1f35d6c3f1a!2sFerndale%2C%20MI!5e0!3m2!1sen!2sus!4v1709861234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl blur-3xl -z-10" />
            <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}