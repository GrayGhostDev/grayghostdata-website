"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Briefcase, Users, MapPin, Clock, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Security Engineer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead security engineering initiatives and implement robust security solutions for our clients.",
    responsibilities: [
      "Design and implement security architectures",
      "Conduct security assessments and penetration testing",
      "Lead incident response and threat hunting activities",
      "Mentor junior security engineers"
    ],
    requirements: [
      "5+ years of security engineering experience",
      "Strong knowledge of cloud security",
      "Experience with security tools and frameworks",
      "Excellent problem-solving skills"
    ],
    benefits: [
      "Competitive salary",
      "Remote work flexibility",
      "Health insurance",
      "401(k) matching",
      "Professional development budget"
    ]
  },
  {
    id: 2,
    title: "Data Analytics Consultant",
    department: "Analytics",
    location: "Remote (US)",
    type: "Full-time",
    experience: "3+ years",
    description: "Help clients leverage their data assets through advanced analytics and visualization solutions.",
    responsibilities: [
      "Develop data analytics strategies",
      "Create data visualization dashboards",
      "Perform statistical analysis",
      "Present insights to stakeholders"
    ],
    requirements: [
      "3+ years of data analytics experience",
      "Proficiency in Python and SQL",
      "Experience with BI tools",
      "Strong communication skills"
    ],
    benefits: [
      "Competitive salary",
      "Remote work flexibility",
      "Health insurance",
      "401(k) matching",
      "Professional development budget"
    ]
  },
  {
    id: 3,
    title: "Blockchain Developer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    experience: "2+ years",
    description: "Build and maintain blockchain solutions for asset tokenization and smart contract development.",
    responsibilities: [
      "Develop smart contracts",
      "Implement tokenization solutions",
      "Ensure security best practices",
      "Collaborate with cross-functional teams"
    ],
    requirements: [
      "2+ years of blockchain development",
      "Solidity programming experience",
      "Web3 development knowledge",
      "Strong problem-solving skills"
    ],
    benefits: [
      "Competitive salary",
      "Remote work flexibility",
      "Health insurance",
      "401(k) matching",
      "Professional development budget"
    ]
  }
];

const departments = Array.from(new Set(jobOpenings.map(job => job.department)));
const locations = Array.from(new Set(jobOpenings.map(job => job.location)));
const types = Array.from(new Set(jobOpenings.map(job => job.type)));

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

export default function CareersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = !selectedDepartment || job.department === selectedDepartment;
    const matchesLocation = !selectedLocation || job.location === selectedLocation;
    const matchesType = !selectedType || job.type === selectedType;
    
    return matchesSearch && matchesDepartment && matchesLocation && matchesType;
  });

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
            Join Our Team
          </h1>
          <p className="text-xl text-muted-foreground">
            Help us shape the future of cybersecurity and data analytics
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search positions..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full md:w-auto">
                  <Filter className="h-4 w-4 mr-2" />
                  {selectedDepartment || "All Departments"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelectedDepartment(null)}>
                  All Departments
                </DropdownMenuItem>
                {departments.map((dept) => (
                  <DropdownMenuItem
                    key={dept}
                    onClick={() => setSelectedDepartment(dept)}
                  >
                    {dept}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full md:w-auto">
                  <MapPin className="h-4 w-4 mr-2" />
                  {selectedLocation || "All Locations"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelectedLocation(null)}>
                  All Locations
                </DropdownMenuItem>
                {locations.map((loc) => (
                  <DropdownMenuItem
                    key={loc}
                    onClick={() => setSelectedLocation(loc)}
                  >
                    {loc}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full md:w-auto">
                  <Clock className="h-4 w-4 mr-2" />
                  {selectedType || "All Types"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelectedType(null)}>
                  All Types
                </DropdownMenuItem>
                {types.map((type) => (
                  <DropdownMenuItem
                    key={type}
                    onClick={() => setSelectedType(type)}
                  >
                    {type}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto space-y-6"
        >
          {filteredJobs.map((job) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              className="relative"
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="cursor-pointer" onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <CardDescription>{job.description}</CardDescription>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        expandedJob === job.id ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">
                      <Briefcase className="h-3 w-3 mr-1" />
                      {job.department}
                    </Badge>
                    <Badge variant="secondary">
                      <MapPin className="h-3 w-3 mr-1" />
                      {job.location}
                    </Badge>
                    <Badge variant="secondary">
                      <Clock className="h-3 w-3 mr-1" />
                      {job.type}
                    </Badge>
                    <Badge variant="secondary">
                      <Users className="h-3 w-3 mr-1" />
                      {job.experience}
                    </Badge>
                  </div>
                </CardHeader>
                
                {expandedJob === job.id && (
                  <CardContent className="pt-4 space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2">Responsibilities</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {job.responsibilities.map((resp, index) => (
                          <li key={index}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Requirements</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Benefits</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {job.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full md:w-auto">
                      Apply Now
                    </Button>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-lg text-muted-foreground">
                No positions found matching your criteria.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
