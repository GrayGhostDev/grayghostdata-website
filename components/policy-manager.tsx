import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  TextField,
  Typography,
  Snackbar,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { securityApi } from '../api/client';
import { SecurityPolicy } from '@/types/security';

const initialPolicy: Partial<SecurityPolicy> = {
  policyName: '',
  description: '',
  status: 'Draft',
  category: '',
  priority: 'Medium',
  compliance: [],
  controls: []
};

const SecurityPolicyManager: React.FC = () => {
  const queryClient = useQueryClient();

  // State for managing policies and notifications
  const [policies, setPolicies] = useState<SecurityPolicy[]>([]);
  const [newPolicy, setNewPolicy] = useState<Partial<SecurityPolicy>>(initialPolicy);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error';
  }>({
    open: false,
    message: '',
    severity: 'success',
  });

  // Fetch existing security policies
  const { isLoading: loadingPolicies, data: queryResult } = useQuery({
    queryKey: ['security-policies'],
    queryFn: () => securityApi.getPolicies(),
  });

  // Mutation for adding a new policy
  const addPolicyMutation = useMutation({
    mutationFn: (policy: Omit<SecurityPolicy, 'id'>) => securityApi.createPolicy(policy),
  });

  // Mutation for toggling policy status
  const togglePolicyMutation = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<SecurityPolicy> }) =>
      securityApi.updatePolicy(id, updates),
  });

  // Effect to update policies when query data changes
  useEffect(() => {
    if (queryResult) {
      setPolicies(queryResult);
    }
  }, [queryResult]);

  // Handle mutation success and error
  useEffect(() => {
    const handleMutationSuccess = () => {
      queryClient.invalidateQueries({ queryKey: ['security-policies'] });
      setNewPolicy(initialPolicy);
      setSnackbar({
        open: true,
        message: 'Operation completed successfully',
        severity: 'success',
      });
    };

    const handleMutationError = (error: Error) => {
      setSnackbar({
        open: true,
        message: `Error: ${error.message}`,
        severity: 'error',
      });
    };

    if (addPolicyMutation.isSuccess) handleMutationSuccess();
    if (togglePolicyMutation.isSuccess) handleMutationSuccess();

    if (addPolicyMutation.isError) handleMutationError(addPolicyMutation.error as Error);
    if (togglePolicyMutation.isError) handleMutationError(togglePolicyMutation.error as Error);
  }, [
    addPolicyMutation.isSuccess,
    togglePolicyMutation.isSuccess,
    addPolicyMutation.isError,
    togglePolicyMutation.isError,
  ]);

  const handleAddPolicy = () => {
    if (
      newPolicy.policyName &&
      newPolicy.description &&
      newPolicy.category &&
      newPolicy.compliance?.length &&
      newPolicy.controls?.length
    ) {
      addPolicyMutation.mutate(newPolicy as Omit<SecurityPolicy, 'id'>);
    } else {
      setSnackbar({
        open: true,
        message: 'All fields are required. Please fill in all the information.',
        severity: 'error',
      });
    }
  };

  const handleTogglePolicy = (policyId: string, newStatus: 'Active' | 'Inactive' | 'Draft' | 'Archived') => {
    togglePolicyMutation.mutate({ id: policyId, updates: { status: newStatus } });
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        Security Policy Manager
      </Typography>

      {loadingPolicies ? (
        <Box display="flex" justifyContent="center" p={3}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Policy Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Compliance Standards</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {policies.map((policy) => (
                <TableRow key={policy.id}>
                  <TableCell>{policy.policyName}</TableCell>
                  <TableCell>{policy.description}</TableCell>
                  <TableCell>{policy.compliance.join(', ')}</TableCell>
                  <TableCell>{policy.category}</TableCell>
                  <TableCell>{policy.priority}</TableCell>
                  <TableCell>{policy.status}</TableCell>
                  <TableCell>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={policy.status === 'Active'}
                          onChange={() => handleTogglePolicy(policy.id, policy.status === 'Active' ? 'Inactive' : 'Active')}
                        />
                      }
                      label={policy.status === 'Active' ? 'Deactivate' : 'Activate'}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Card sx={{ mb: 3 }}>
        <CardHeader title="Add New Security Policy" />
        <CardContent>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Policy Name"
              value={newPolicy.policyName}
              onChange={(e) => setNewPolicy({ ...newPolicy, policyName: e.target.value })}
              fullWidth
            />
            <TextField
              label="Description"
              value={newPolicy.description}
              onChange={(e) => setNewPolicy({ ...newPolicy, description: e.target.value })}
              multiline
              rows={3}
              fullWidth
            />
            <TextField
              label="Category"
              value={newPolicy.category}
              onChange={(e) => setNewPolicy({ ...newPolicy, category: e.target.value })}
              fullWidth
            />
            <TextField
              label="Compliance Standards (comma-separated)"
              value={newPolicy.compliance?.join(', ')}
              onChange={(e) => setNewPolicy({ ...newPolicy, compliance: e.target.value.split(',').map(s => s.trim()) })}
              fullWidth
              helperText="Enter compliance standards separated by commas (e.g., NIST, ISO27001, GDPR)"
            />
            <TextField
              label="Controls (comma-separated)"
              value={newPolicy.controls?.join(', ')}
              onChange={(e) => setNewPolicy({ ...newPolicy, controls: e.target.value.split(',').map(s => s.trim()) })}
              fullWidth
              helperText="Enter security controls separated by commas"
            />
            <FormControl fullWidth>
              <InputLabel>Priority</InputLabel>
              <Select
                value={newPolicy.priority || 'Medium'}
                label="Priority"
                onChange={(e) => setNewPolicy({ ...newPolicy, priority: e.target.value as 'High' | 'Medium' | 'Low' })}
              >
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                value={newPolicy.status || 'Draft'}
                label="Status"
                onChange={(e) => setNewPolicy({ ...newPolicy, status: e.target.value as 'Active' | 'Inactive' | 'Draft' | 'Archived' })}
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
                <MenuItem value="Draft">Draft</MenuItem>
                <MenuItem value="Archived">Archived</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="primary" onClick={handleAddPolicy}>
              Add Policy
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
      >
        <Alert
          severity={snackbar.severity}
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SecurityPolicyManager;