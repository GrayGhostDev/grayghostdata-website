"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>Configure how you receive notifications</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="email-notifications">Email Notifications</Label>
          <Switch id="email-notifications" />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="project-updates">Project Updates</Label>
          <Switch id="project-updates" />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="security-alerts">Security Alerts</Label>
          <Switch id="security-alerts" defaultChecked />
        </div>
      </CardContent>
    </Card>
  );
}
