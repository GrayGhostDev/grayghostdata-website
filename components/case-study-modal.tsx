"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface CaseStudyModalProps {
  study: any;
  isOpen: boolean;
  onClose: () => void;
}

export function CaseStudyModal({ study, isOpen, onClose }: CaseStudyModalProps) {
  if (!study) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{study.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <div className="aspect-video overflow-hidden rounded-lg mb-6">
            <OptimizedImage
              src={study.image || "/images/case-study-placeholder.jpg"}
              alt={study.title}
              width={1200}
              height={675}
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Industry</h3>
              <Badge variant="secondary">{study.industry}</Badge>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Challenge</h3>
              <p className="text-muted-foreground">{study.description}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Results</h3>
              <ul className="space-y-2">
                {study.results.map((result: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
