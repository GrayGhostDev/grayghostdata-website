import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <SignIn />
    </div>
  );
}

export function generateStaticParams() {
  return [
    // Base paths
    { 'sign-in': [] },
    { 'sign-in': ['sso-callback'] },
    
    // Factor verification
    { 'sign-in': ['factor-one'] },
    { 'sign-in': ['factor-two'] },
    { 'sign-in': ['factor-three'] },
    
    // Password reset flow
    { 'sign-in': ['reset-password'] },
    { 'sign-in': ['continue'] },
    
    // Verification paths
    { 'sign-in': ['verify'] },
    { 'sign-in': ['verify', 'email'] },
    { 'sign-in': ['verify', 'phone'] },
    
    // Error paths
    { 'sign-in': ['error'] },
  ];
}
