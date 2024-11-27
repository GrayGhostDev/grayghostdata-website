"use client";

import {
  Brain,
  Database,
  Network,
  Code2,
  LineChart,
  GitMerge,
  Settings,
  Lock,
} from "lucide-react";
import { ServiceDetailLayout } from "@/components/service-detail-layout";
import { ServiceFinder } from "@/components/service-finder";
import { SuccessStoriesCarousel } from "@/components/success-stories-carousel";

export default function AiMachineLearningPage() {
  return (
    <ServiceDetailLayout
      title="AI & Machine Learning"
      description="Harness the power of artificial intelligence and machine learning to transform your business operations and drive innovation."
      iconName="brain"
      serviceType="ai-and-ml"
      features={[
        "Custom AI Solutions",
        "Deep Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "Automated Decision Making",
        "Neural Networks",
        "Machine Learning Pipelines",
        "AI Model Optimization",
      ]}
      benefits={[
        "Enhanced decision making",
        "Improved efficiency",
        "Automated processes",
        "Predictive insights",
        "Competitive advantage",
        "Scalable solutions",
      ]}
      process={[
        {
          title: "Data Collection",
          description: "Gathering and preprocessing data for AI model training.",
          iconName: "database",
        },
        {
          title: "Model Development",
          description: "Building and training custom AI models for your needs.",
          iconName: "code",
        },
        {
          title: "Testing & Validation",
          description: "Rigorous testing to ensure model accuracy and reliability.",
          iconName: "check-square",
        },
        {
          title: "Deployment",
          description: "Seamless integration of AI solutions into your workflow.",
          iconName: "rocket",
        },
        {
          title: "Monitoring",
          description: "Continuous monitoring and optimization of AI performance.",
          iconName: "chart-line",
        },
      ]}
      technologies={[
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Keras",
        "NLTK",
        "OpenCV",
        "MLflow",
        "Kubeflow",
        "Azure ML",
        "AWS SageMaker",
      ]}
      faqs={[
        {
          question: "What types of AI solutions do you develop?",
          answer: "We develop a wide range of AI solutions including predictive analytics, natural language processing, computer vision, and custom machine learning models.",
        },
        {
          question: "How do you ensure AI model accuracy?",
          answer: "We use rigorous testing, cross-validation, and continuous monitoring to ensure our AI models maintain high accuracy and reliability.",
        },
        {
          question: "Can you integrate AI with existing systems?",
          answer: "Yes, we design AI solutions that integrate seamlessly with your existing infrastructure and business processes.",
        },
        {
          question: "What's your approach to MLOps?",
          answer: "We implement automated ML pipelines, version control, and monitoring systems to ensure reliable deployment and maintenance of AI models.",
        },
      ]}
      caseStudies={[
        {
          title: "Predictive Maintenance System",
          description: "Implemented AI-powered predictive maintenance for a manufacturing company.",
          industry: "Manufacturing",
          results: [
            "85% accuracy in failure prediction",
            "40% reduction in downtime",
            "Annual savings of $2.5M",
            "ROI achieved in 6 months",
          ],
        },
        {
          title: "Customer Service AI",
          description: "Developed NLP-based customer service automation system.",
          industry: "Retail",
          results: [
            "70% reduction in response time",
            "90% customer satisfaction",
            "24/7 automated support",
            "Handled 10k+ queries daily",
          ],
        },
      ]}
    >
      <div>
        <section className="py-20 bg-slate-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Find Your Perfect Solution</h2>
              <p className="text-lg text-muted-foreground">
                Discover how our AI & Machine Learning solutions can transform your business operations.
              </p>
            </div>
            <ServiceFinder 
              title="Explore Our AI Solutions"
              description="Find the perfect AI & Machine Learning solution for your business needs."
            />
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
              <p className="text-lg text-muted-foreground">
                See how our AI & Machine Learning solutions have transformed businesses worldwide.
              </p>
            </div>
            <SuccessStoriesCarousel category="technology" />
          </div>
        </section>
      </div>
    </ServiceDetailLayout>
  );
}
