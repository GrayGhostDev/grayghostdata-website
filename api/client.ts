// Mock API client for security policies
import { SecurityPolicy } from '@/types/security';

class SecurityApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = '/api') {
    this.baseUrl = baseUrl;
  }

  async getPolicies(): Promise<SecurityPolicy[]> {
    // Mock implementation - replace with actual API call
    return [
      {
        id: '1',
        policyName: 'Password Policy',
        description: 'Requirements for password complexity and rotation',
        category: 'Access Control',
        status: 'Active',
        lastUpdated: new Date().toISOString(),
        priority: 'High',
        compliance: ['NIST', 'ISO27001'],
        controls: ['Password Length', 'Special Characters', 'Rotation Period'],
      },
      {
        id: '2',
        policyName: 'Data Encryption',
        description: 'Standards for data encryption at rest and in transit',
        category: 'Data Protection',
        status: 'Active',
        lastUpdated: new Date().toISOString(),
        priority: 'High',
        compliance: ['GDPR', 'HIPAA'],
        controls: ['AES-256', 'TLS 1.3', 'Key Management'],
      },
      // Add more mock policies as needed
    ];
  }

  async updatePolicy(id: string, updates: Partial<SecurityPolicy>): Promise<SecurityPolicy> {
    // Mock implementation - replace with actual API call
    return {
      id,
      policyName: 'Updated Policy',
      description: 'Updated description',
      category: 'Updated Category',
      status: 'Active',
      lastUpdated: new Date().toISOString(),
      priority: 'High',
      compliance: ['Updated'],
      controls: ['Updated'],
      ...updates,
    };
  }

  async createPolicy(policy: Omit<SecurityPolicy, 'id'>): Promise<SecurityPolicy> {
    // Mock implementation - replace with actual API call
    return {
      id: Date.now().toString(),
      ...policy,
      lastUpdated: new Date().toISOString(),
    };
  }

  async deletePolicy(id: string): Promise<void> {
    // Mock implementation - replace with actual API call
    console.log(`Deleting policy ${id}`);
  }
}

export const securityApi = new SecurityApiClient();
