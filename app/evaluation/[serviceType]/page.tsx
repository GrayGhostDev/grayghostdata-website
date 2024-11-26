import { evaluationTests } from "@/lib/evaluation-tests";
import { EvaluationContent } from "./evaluation-content";

export async function generateStaticParams() {
  return evaluationTests.map((test) => ({
    serviceType: test.id,
  }));
}

interface EvaluationPageProps {
  params: { serviceType: string };
}

export default async function EvaluationPage({ params }: EvaluationPageProps) {
  const serviceType = params.serviceType;
  const evaluation = evaluationTests.find(test => test.id === serviceType);

  return <EvaluationContent evaluation={evaluation} />;
}
