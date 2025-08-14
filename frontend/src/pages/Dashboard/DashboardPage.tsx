import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Chip,
} from '@mui/material';
import {
  Home,
  People,
  Description,
  Build,
  Payment,
  TrendingUp,
  Notifications,
  Schedule,
} from '@mui/icons-material';
import { useAuth } from '../../contexts/AuthContext';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  // Mock data - in real app, this would come from API
  const stats = {
    properties: 12,
    tenants: 8,
    activeLeases: 7,
    maintenanceRequests: 3,
    pendingPayments: 2,
    monthlyRevenue: 12500,
  };

  const recentActivities = [
    { id: 1, type: 'lease', message: 'New lease signed for Unit 3A', time: '2 hours ago' },
    { id: 2, type: 'maintenance', message: 'Maintenance request completed for Unit 1B', time: '4 hours ago' },
    { id: 3, type: 'payment', message: 'Rent payment received from Unit 2C', time: '1 day ago' },
    { id: 4, type: 'tenant', message: 'New tenant application submitted', time: '2 days ago' },
  ];

  const upcomingTasks = [
    { id: 1, task: 'Lease renewal reminder - Unit 4A', due: 'Tomorrow' },
    { id: 2, task: 'Property inspection - Building B', due: 'Next week' },
    { id: 3, task: 'Maintenance follow-up - Unit 1C', due: 'Next week' },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'lease':
        return <Description color="primary" />;
      case 'maintenance':
        return <Build color="warning" />;
      case 'payment':
        return <Payment color="success" />;
      case 'tenant':
        return <People color="info" />;
      default:
        return <Notifications />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'lease':
        return 'primary';
      case 'maintenance':
        return 'warning';
      case 'payment':
        return 'success';
      case 'tenant':
        return 'info';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome back, {user?.firstName}! 👋
      </Typography>
      
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Here's what's happening with your properties today.
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Home color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6" component="div">
                  {stats.properties}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Total Properties
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <People color="info" sx={{ mr: 1 }} />
                <Typography variant="h6" component="div">
                  {stats.tenants}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Active Tenants
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Description color="success" sx={{ mr: 1 }} />
                <Typography variant="h6" component="div">
                  {stats.activeLeases}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Active Leases
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Build color="warning" sx={{ mr: 1 }} />
                <Typography variant="h6" component="div">
                  {stats.maintenanceRequests}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Open Requests
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Payment color="error" sx={{ mr: 1 }} />
                <Typography variant="h6" component="div">
                  {stats.pendingPayments}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Pending Payments
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <TrendingUp color="success" sx={{ mr: 1 }} />
                <Typography variant="h6" component="div">
                  ${stats.monthlyRevenue.toLocaleString()}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Monthly Revenue
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Main Content Grid */}
      <Grid container spacing={3}>
        {/* Recent Activities */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: 'fit-content' }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <Notifications sx={{ mr: 1 }} />
              Recent Activities
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <List>
              {recentActivities.map((activity, index) => (
                <React.Fragment key={activity.id}>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      {getActivityIcon(activity.type)}
                    </ListItemIcon>
                    <ListItemText
                      primary={activity.message}
                      secondary={activity.time}
                    />
                    <Chip
                      label={activity.type}
                      size="small"
                      color={getActivityColor(activity.type) as any}
                      variant="outlined"
                    />
                  </ListItem>
                  {index < recentActivities.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Upcoming Tasks */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: 'fit-content' }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <Schedule sx={{ mr: 1 }} />
              Upcoming Tasks
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <List>
              {upcomingTasks.map((task, index) => (
                <React.Fragment key={task.id}>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText
                      primary={task.task}
                      secondary={`Due: ${task.due}`}
                    />
                    <Chip
                      label={task.due === 'Tomorrow' ? 'urgent' : 'upcoming'}
                      size="small"
                      color={task.due === 'Tomorrow' ? 'error' : 'default'}
                      variant="outlined"
                    />
                  </ListItem>
                  {index < upcomingTasks.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
