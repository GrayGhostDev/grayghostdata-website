"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle } from 'lucide-react';

export default function ThankYou() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page after 5 seconds
    const timeout = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-8 flex justify-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Thank You!
        </h1>
        <p className="mt-6 text-xl leading-8 text-slate-600">
          Your message has been received. We will be in touch with you shortly.
        </p>
        <p className="mt-4 text-sm text-slate-500">
          You will be redirected to the home page in a few seconds...
        </p>
      </div>
    </section>
  );
}
