"use client";

import { useState, useEffect, useRef } from 'react';
import { Terminal, X, Maximize2, Minimize2, Copy, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CommandResponse {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  timestamp?: string;
}

interface TerminalCommand {
  description: string;
  response: string | ((args: string[]) => string);
  usage?: string;
  args?: string[];
}

const commands: Record<string, TerminalCommand> = {
  help: {
    description: 'List available commands',
    response: (args: string[]) => {
      if (args.length > 0) {
        const cmd = args[0].toLowerCase();
        const command = commands[cmd];
        if (command) {
          return `Command: ${cmd}
Description: ${command.description}
${command.usage ? `Usage: ${command.usage}` : ''}
${command.args ? `Arguments: ${command.args.join(', ')}` : ''}`;
        }
        return `Command '${cmd}' not found. Type 'help' for available commands.`;
      }
      return Object.entries(commands)
        .map(([cmd, info]) => `${cmd}: ${info.description}`)
        .join('\n');
    },
    usage: 'help [command]',
    args: ['command']
  },
  status: {
    description: 'Check system security status',
    response: () => {
      const status = ['SECURE', 'ALERT', 'WARNING'][Math.floor(Math.random() * 3)];
      const threats = Math.floor(Math.random() * 5);
      const lastScan = Math.floor(Math.random() * 60);
      return `System Status: ${status}
Threat Level: ${threats > 0 ? 'ELEVATED' : 'LOW'}
Active Threats: ${threats}
Last Scan: ${lastScan} minutes ago
Memory Usage: ${Math.floor(Math.random() * 40 + 60)}%
CPU Load: ${Math.floor(Math.random() * 30 + 20)}%`;
    }
  },
  scan: {
    description: 'Run security scan',
    response: (args: string[]) => {
      const type = args[0]?.toLowerCase() || 'quick';
      const scanTypes = {
        quick: ['Network', 'Vulnerabilities', 'Malware'],
        full: ['Network', 'Vulnerabilities', 'Malware', 'Ports', 'Services', 'Files', 'Registry'],
        custom: ['Network', 'Vulnerabilities']
      };
      
      const steps = scanTypes[type as keyof typeof scanTypes] || scanTypes.quick;
      return `Initiating ${type} security scan...\n${
        steps.map(step => `[✓] Scanning ${step}...`).join('\n')
      }\nScan complete. ${
        Math.random() > 0.8 ? 'Potential vulnerabilities detected.' : 'No threats detected.'
      }`;
    },
    usage: 'scan [type]',
    args: ['quick', 'full', 'custom']
  },
  services: {
    description: 'List available services',
    response: `Available Services:
1. Cybersecurity Solutions
   - Threat Detection
   - Incident Response
   - Security Audits

2. Data Analytics
   - Big Data Processing
   - Machine Learning
   - Business Intelligence

3. Blockchain Services
   - Smart Contract Development
   - Token Creation
   - DeFi Solutions

4. Cloud Security
   - Cloud Infrastructure Protection
   - Access Management
   - Compliance Monitoring

5. Consulting Services
   - Security Assessment
   - Strategy Development
   - Training Programs`
  },
  contact: {
    description: 'Get contact information',
    response: `Contact Information:
Email: contact@grayghostdata.com
Phone: +1 (555) 123-4567
Location: Silicon Valley, CA

Business Hours:
Monday - Friday: 9:00 AM - 6:00 PM PST
Emergency Support: 24/7

Social Media:
Twitter: @GrayGhostData
LinkedIn: /company/grayghost-data`
  },
  analytics: {
    description: 'View system analytics',
    response: () => {
      const stats = {
        threats_blocked: Math.floor(Math.random() * 1000),
        attacks_prevented: Math.floor(Math.random() * 100),
        data_processed: Math.floor(Math.random() * 1000),
        uptime: (99.9 + Math.random() * 0.09).toFixed(2)
      };
      return `System Analytics (Last 24h):
Threats Blocked: ${stats.threats_blocked}
Attacks Prevented: ${stats.attacks_prevented}
Data Processed: ${stats.data_processed}GB
System Uptime: ${stats.uptime}%`;
    }
  },
  time: {
    description: 'Display current time',
    response: () => new Date().toLocaleString()
  }
};

export function TerminalConsole() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; response: CommandResponse }>>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommand = (cmd: string) => {
    const [command, ...args] = cmd.toLowerCase().trim().split(' ');
    let response: CommandResponse;
    const timestamp = new Date().toLocaleTimeString();

    if (command === 'clear') {
      setHistory([]);
      return;
    }

    if (command in commands) {
      const cmdObj = commands[command];
      const result = typeof cmdObj.response === 'function' 
        ? cmdObj.response(args)
        : cmdObj.response;
      
      response = {
        type: 'success',
        message: result,
        timestamp
      };
    } else {
      response = {
        type: 'error',
        message: `Command not found: ${command}. Type 'help' for available commands.`,
        timestamp
      };
    }

    setHistory(prev => [...prev, { command: cmd, response }]);
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);
    setInput('');

    // Auto-scroll to bottom
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const inputCmd = input.toLowerCase();
      const matches = Object.keys(commands).filter(cmd => cmd.startsWith(inputCmd));
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  useEffect(() => {
    if (isOpen) {
      handleCommand('help');
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [isOpen]);

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 bg-background/80 border border-primary/20 hover:bg-primary/20"
        onClick={() => setIsOpen(true)}
      >
        <Terminal className="h-4 w-4 mr-2" />
        Open Terminal
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={cn(
              "fixed bg-background/95 backdrop-blur-sm border border-primary/20 rounded-lg shadow-2xl z-50 flex flex-col",
              isMaximized ? "inset-0" : "inset-4 md:inset-10"
            )}
          >
            <div className="flex items-center justify-between p-4 border-b border-primary/20">
              <div className="flex items-center space-x-2">
                <Terminal className="h-5 w-5 text-primary" />
                <span className="font-mono text-primary">Gray Ghost Terminal</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMaximized(!isMaximized)}
                >
                  {isMaximized ? (
                    <Minimize2 className="h-4 w-4" />
                  ) : (
                    <Maximize2 className="h-4 w-4" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div
              ref={terminalRef}
              className="flex-1 overflow-auto p-4 font-mono text-sm"
            >
              {history.map((entry, i) => (
                <div key={i} className="mb-4 group">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-primary">$</span>
                      <span>{entry.command}</span>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(entry.response.message, i)}
                      >
                        {copiedIndex === i ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className={cn(
                    'ml-4 whitespace-pre-wrap',
                    entry.response.type === 'error' && 'text-red-400',
                    entry.response.type === 'success' && 'text-green-400',
                    entry.response.type === 'warning' && 'text-yellow-400',
                    entry.response.type === 'info' && 'text-blue-400'
                  )}>
                    {entry.response.message}
                  </div>
                  {entry.response.timestamp && (
                    <div className="ml-4 mt-1 text-xs text-muted-foreground">
                      {entry.response.timestamp}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-primary/20">
              <div className="flex items-center space-x-2">
                <span className="text-primary">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none font-mono"
                  placeholder="Type 'help' for available commands..."
                  autoFocus
                />
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}