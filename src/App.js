// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Giftcard from './components/Giftcard';
import Alluserdetails from './components/Alluserdetails';
import { AuthProvider } from './context/AuthContext';
import Login from './componentslog/Login';
import Dashboard from './componentslog/Dashboard';
import ProtectedRoute from './componentslog/ProtectedRoute';
import Alltransaction from './components/Alltransaction'
import Singletrans from './components/Singletrans';


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <div>
            <Navigation />
          </div>
          <Routes>

            <Route
              path="/giftcard"
              element={
                <ProtectedRoute>
                  <Giftcard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/alluserdetails"
              element={
                <ProtectedRoute>
                  <Alluserdetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="/singletransaction"
              element={
                <ProtectedRoute>
                  <Singletrans />
                </ProtectedRoute>
              }
            />
             <Route
              path="/alltransactions"
              element={
                <ProtectedRoute>
                  <Alltransaction />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Login />} />

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
