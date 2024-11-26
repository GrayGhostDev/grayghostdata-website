import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <SignUp />
    </div>
  );
}

export function generateStaticParams() {
  return [
    // Base paths
    { 'sign-up': [] },
    { 'sign-up': ['sso-callback'] },
    
    // Multi-step sign-up
    { 'sign-up': ['continue'] },
    { 'sign-up': ['continue', 'verify-email'] },
    { 'sign-up': ['continue', 'verify-phone-number'] },
    { 'sign-up': ['continue', 'password'] },
    
    // Factor verification
    { 'sign-up': ['factor-one'] },
    { 'sign-up': ['factor-two'] },
    { 'sign-up': ['factor-three'] },
    
    // Verification paths
    { 'sign-up': ['verify'] },
    { 'sign-up': ['verify', 'email'] },
    { 'sign-up': ['verify', 'phone'] },
    
    // Error paths
    { 'sign-up': ['error'] },
  ];
}
