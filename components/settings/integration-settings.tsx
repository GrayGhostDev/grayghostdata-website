"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Slack, Chrome, type LucideIcon } from "lucide-react";

interface Integration {
  name: string;
  description: string;
  icon: LucideIcon;
  connected: boolean;
}

const integrations: Integration[] = [
  {
    name: "GitHub",
    description: "Connect your GitHub account to sync repositories",
    icon: Github,
    connected: false,
  },
  {
    name: "Slack",
    description: "Receive notifications through Slack",
    icon: Slack,
    connected: true,
  },
  {
    name: "Google",
    description: "Connect your Google account for seamless integration.",
    icon: Chrome,
    connected: false,
  },
];

export function IntegrationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Integrations</CardTitle>
        <CardDescription>Connect and manage your integrations</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {integrations.map((integration) => (
          <div
            key={integration.name}
            className="flex items-center justify-between space-x-4 p-4 border rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-muted rounded-lg">
                <integration.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-medium">{integration.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {integration.description}
                </p>
              </div>
            </div>
            <Button variant={integration.connected ? "destructive" : "outline"}>
              {integration.connected ? "Disconnect" : "Connect"}
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
