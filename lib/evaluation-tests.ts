export interface EvaluationQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface ServiceEvaluation {
  id: string;
  title: string;
  description: string;
  questions: EvaluationQuestion[];
  serviceType: 'cybersecurity' | 'data-analytics' | 'cloud-security' | 'blockchain';
}

export const evaluationTests: ServiceEvaluation[] = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Readiness Assessment',
    description: 'Evaluate your organization\'s current cybersecurity posture and identify potential vulnerabilities.',
    serviceType: 'cybersecurity',
    questions: [
      {
        id: 'cs-1',
        question: 'How often does your organization conduct security awareness training?',
        options: [
          'Never',
          'Once a year',
          'Quarterly',
          'Monthly or more frequently'
        ],
        correctAnswer: 3,
        explanation: 'Regular security awareness training is crucial for maintaining a strong security posture.'
      },
      {
        id: 'cs-2',
        question: 'What type of authentication does your organization use?',
        options: [
          'Single-factor authentication only',
          'Two-factor authentication for some systems',
          'Multi-factor authentication for all critical systems',
          'Biometric and MFA for all systems'
        ],
        correctAnswer: 2,
        explanation: 'Multi-factor authentication significantly reduces the risk of unauthorized access.'
      }
    ]
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics Maturity Assessment',
    description: 'Assess your organization\'s data analytics capabilities and identify areas for improvement.',
    serviceType: 'data-analytics',
    questions: [
      {
        id: 'da-1',
        question: 'How do you currently collect and store business data?',
        options: [
          'Mostly manual processes and spreadsheets',
          'Basic database systems',
          'Cloud-based data warehouse',
          'Integrated data lake architecture'
        ],
        correctAnswer: 2,
        explanation: 'Modern data storage solutions are essential for effective analytics.'
      },
      {
        id: 'da-2',
        question: 'What level of data visualization do you employ?',
        options: [
          'Basic spreadsheet charts',
          'Standard BI dashboards',
          'Interactive visualizations',
          'Advanced AI-powered analytics'
        ],
        correctAnswer: 2,
        explanation: 'Interactive visualizations help stakeholders better understand data insights.'
      }
    ]
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security Assessment',
    description: 'Evaluate your cloud infrastructure security and compliance readiness.',
    serviceType: 'cloud-security',
    questions: [
      {
        id: 'cl-1',
        question: 'How do you manage cloud access controls?',
        options: [
          'No specific cloud access policies',
          'Basic role-based access control',
          'Comprehensive IAM policies',
          'Zero-trust architecture'
        ],
        correctAnswer: 2,
        explanation: 'Strong IAM policies are fundamental to cloud security.'
      },
      {
        id: 'cl-2',
        question: 'What cloud security monitoring tools do you use?',
        options: [
          'None',
          'Basic cloud provider tools',
          'Third-party security tools',
          'Integrated SIEM solution'
        ],
        correctAnswer: 3,
        explanation: 'Comprehensive security monitoring is essential for cloud environments.'
      }
    ]
  },
  {
    id: 'blockchain',
    title: 'Blockchain Readiness Assessment',
    description: 'Assess your organization\'s readiness for blockchain integration and implementation.',
    serviceType: 'blockchain',
    questions: [
      {
        id: 'bc-1',
        question: 'What is your current level of blockchain knowledge?',
        options: [
          'No knowledge',
          'Basic understanding',
          'Some implementation experience',
          'Advanced implementation experience'
        ],
        correctAnswer: 1,
        explanation: 'Understanding blockchain fundamentals is crucial for successful implementation.'
      },
      {
        id: 'bc-2',
        question: 'What type of blockchain use cases are you considering?',
        options: [
          'Not sure',
          'Supply chain tracking',
          'Smart contracts',
          'Tokenization'
        ],
        correctAnswer: 2,
        explanation: 'Clear use case identification helps in successful blockchain adoption.'
      }
    ]
  }
];
