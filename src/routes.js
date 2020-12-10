import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerListView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';
import AppSettingsView from 'src/views/appSettings'
import Logout from 'src/views/logout'
import ProtectedRoute from './protected'

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <ProtectedRoute component={AccountView} isAuthcomp={false} /> },
      { path: 'customers', element: <ProtectedRoute component={CustomerListView} isAuthcomp={false} /> },
      { path: 'dashboard', element: <ProtectedRoute component={DashboardView} isAuthcomp={false} /> },
      { path: 'products', element: <ProtectedRoute component={ProductListView} isAuthcomp={false} /> },
      { path: 'settings', element: <ProtectedRoute component={SettingsView} isAuthcomp={false} /> },
      { path: 'configuration', element: <ProtectedRoute component={AppSettingsView} isAuthcomp={false} /> },
      { path: 'logout', element: <ProtectedRoute component={Logout} isAuthcomp={false} /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'auth', element: <ProtectedRoute component={LoginView} isAuthcomp={true} /> },
      // { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      // { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '/', element: <Navigate to="/auth" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
