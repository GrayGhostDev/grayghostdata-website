"use client";

import { createContext, useContext, type ReactNode } from 'react';

export type ServiceType = 
  | 'cybersecurity'
  | 'cloud'
  | 'ai-and-ml'
  | 'data-analytics'
  | 'software-development'
  | 'consulting'
  | 'incident-response'
  | 'security-assessments';

interface ServiceContextType {
  serviceType: ServiceType;
}

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

interface ServiceProviderProps {
  children: ReactNode;
  serviceType: ServiceType;
}

export function ServiceProvider({ children, serviceType }: ServiceProviderProps): JSX.Element {
  return (
    <ServiceContext.Provider value={{ serviceType }}>
      {children}
    </ServiceContext.Provider>
  );
}

export function useService(): ServiceContextType {
  const context = useContext(ServiceContext);
  if (context === undefined) {
    throw new Error('useService must be used within a ServiceProvider');
  }
  return context;
}
