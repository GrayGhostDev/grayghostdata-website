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
    <>
      <ServiceDetailLayout
        title="AI & Machine Learning"
        description="Leverage artificial intelligence to automate processes and gain competitive advantages."
        iconName="brain"
        serviceType="ai-and-ml"
        features={[
          "Custom ML Models",
          "Natural Language Processing",
          "Computer Vision",
          "Deep Learning",
          "Predictive Analytics",
          "AI Strategy",
        ]}
        benefits={[
          "Automate processes",
          "Improve decision making",
          "Gain competitive edge",
          "Reduce costs",
          "Increase efficiency",
          "Drive innovation",
        ]}
        process={[
          {
            title: "Model Design",
            description: "Design AI/ML architecture and approach",
            iconName: "network-wired",
          },
          {
            title: "Development",
            description: "Build and train AI models",
            iconName: "code",
          },
          {
            title: "Integration",
            description: "Deploy and integrate AI solutions",
            iconName: "cog",
          },
          {
            title: "Optimization",
            description: "Monitor and improve model performance",
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
      />

      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Your Perfect Solution</h2>
            <p className="text-lg text-muted-foreground">
              Answer a few questions to get personalized AI and machine learning solution recommendations tailored to your needs.
            </p>
          </div>
          <ServiceFinder />
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              See how our AI and machine learning solutions have transformed businesses across industries.
            </p>
          </div>
          <SuccessStoriesCarousel />
        </div>
      </section>
    </>
  );
}
