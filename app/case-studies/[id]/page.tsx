import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CaseStudyContent } from '@/components/case-study-content';
import { caseStudies } from '@/lib/case-studies';

export function generateStaticParams() {
  return [
    { id: 'cybersecurity' },
    { id: 'data-analytics' },
    { id: 'blockchain' },
    { id: 'cloud-security' },
    { id: 'iot-security' },
    { id: 'custom-development' },
    { id: 'financial-security' },
    { id: 'healthcare-analytics' },
    { id: 'supply-chain' },
    { id: 'fintech-security' },
    { id: 'cloud-transformation' },
    { id: 'smart-city' }
  ];
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const study = caseStudies[params.id as keyof typeof caseStudies];
  
  if (!study) {
    return {
      title: 'Case Study Not Found - Gray Ghost Data Consultants',
    };
  }

  return {
    title: `${study.title} Case Study | Gray Ghost Data`,
    description: study.description,
    openGraph: {
      title: `${study.title} Case Study | Gray Ghost Data`,
      description: study.description,
      type: 'article',
    },
  };
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const study = caseStudies[params.id as keyof typeof caseStudies];

  if (!study) {
    notFound();
  }

  return <CaseStudyContent study={study} />;
}