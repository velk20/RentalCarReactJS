import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Register } from './components/auth/register/Register';
import { Layout } from './components/layout/Layout';
import { VehiclesList } from './components/vehicles/vehicle-list/VehiclesList';
import { Vehicle } from './components/vehicles/vehicle/Vehicle';
import { VehicleForm } from './components/vehicles/vehicle-form/VehicleForm';
import { User } from './components/users/user/User';
import { UserForm } from './components/users/user-form/UserForm';
import { UsersList } from './components/users/user-list/UsersList';
import { Login } from './components/auth/login/Login';
import { AuthenticatedRoute } from './utils/guards/AuthenticatedRoute';
import { NonAuthenticatedRoute } from './utils/guards/NonAuthenticatedRoute';
import { AdminRoute } from './utils/guards/AdminRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/register"
          element={
            <NonAuthenticatedRoute>
              <Register />
            </NonAuthenticatedRoute>
          }
        />

        <Route
          exact
          path="/login"
          element={
            <NonAuthenticatedRoute>
              <Login />
            </NonAuthenticatedRoute>
          }
        />

        <Route
          exact
          path="/"
          element={
            <AuthenticatedRoute>
              <Layout />
            </AuthenticatedRoute>
          }
        >
          <Route exact path="/vehicles-list" element={<VehiclesList />} />

          <Route path="/vehicle/:id" element={<Vehicle />} />

          <Route
            path="/vehicle/create"
            element={
              <AdminRoute>
                <VehicleForm />
              </AdminRoute>
            }
          />

          <Route
            path="/vehicle/edit/:id"
            element={
              <AdminRoute>
                <VehicleForm />
              </AdminRoute>
            }
          />

          <Route exact path="users-list" element={<UsersList />} />

          <Route path="/user/:id" element={<User />} />

          <Route
            path="/user/create"
            element={
              <AdminRoute>
                <UserForm />
              </AdminRoute>
            }
          />

          <Route
            path="/user/edit/:id"
            element={
              <AdminRoute>
                <UserForm />
              </AdminRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
