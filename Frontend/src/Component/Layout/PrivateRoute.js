import { Navigate } from "react-router-dom";

function PrivateRoute({ children, allowed }) {
  const token = localStorage.getItem("token");
  const userType = parseInt(localStorage.getItem("userType")); // 1 = Admin, 2 = User

  if (!token) {
    return <Navigate to="/Login" replace />;
  }

  if (allowed && !allowed.includes(userType)) {
    return <Navigate to="/" replace />; // redirect if not allowed
  }

  return children;
}

export default PrivateRoute;
