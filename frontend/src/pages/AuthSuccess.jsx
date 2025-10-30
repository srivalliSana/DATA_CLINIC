import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const email = params.get("email");
    const name = params.get("name");

    if (token && email) {
      // ✅ Save token + full user
      const user = { email, name };
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      setTimeout(() => {
        navigate("/upload-dataset");
      }, 1000);
    } else {
      navigate("/auth/login");
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold text-green-600">
        ✅ Google Login Successful! Redirecting...
      </h1>
    </div>
  );
}
