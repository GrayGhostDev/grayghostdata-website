"use client";

import { UserButton } from "@clerk/nextjs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Progress } from "@/components/ui/progress";
import { Bell, FileText, Settings, Users } from "lucide-react";

const mockProjects = [
  {
    id: "1",
    name: "Data Analytics Implementation",
    progress: 75,
    status: "active",
    lastUpdate: "2024-01-15",
  },
  {
    id: "2",
    name: "Security Audit",
    progress: 90,
    status: "active",
    lastUpdate: "2024-01-14",
  },
];

const mockNotifications = [
  {
    id: "1",
    title: "Security Report Available",
    description: "Your monthly security report is now available for review.",
    date: "2024-01-15",
  },
  {
    id: "2",
    title: "Project Update",
    description: "New milestone achieved in Data Analytics Implementation.",
    date: "2024-01-14",
  },
];

export default function ClientPortal() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Client Portal</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      <Tabs defaultValue="dashboard" className="space-y-4">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{mockProjects.length}</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Project Progress</CardTitle>
              </CardHeader>
              <CardContent>
                {mockProjects.map((project) => (
                  <div key={project.id} className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-medium">{project.name}</div>
                      <div className="text-sm text-muted-foreground">{project.progress}%</div>
                    </div>
                    <Progress value={project.progress} />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockNotifications.map((notification) => (
                    <div key={notification.id} className="flex flex-col space-y-1">
                      <div className="text-sm font-medium">{notification.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {notification.description}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {notification.date}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="projects">
          <Card>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
              <CardDescription>View and manage your active projects.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Project management content */}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
              <CardDescription>Access your reports and documents.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Document management content */}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>Manage your account settings.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Settings content */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
