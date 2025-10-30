import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GoogleCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    // Extract token + user from query params
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const user = params.get("user");

    if (token && user) {
      try {
        localStorage.setItem("token", token);
        localStorage.setItem("user", user); // already a JSON string from backend
        alert("✅ Logged in with Google!");
        navigate("/upload-dataset");
      } catch (err) {
        console.error("Error saving Google login:", err);
        alert("❌ Google login failed");
        navigate("/auth/login");
      }
    } else {
      alert("❌ Google login failed");
      navigate("/auth/login");
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-lg font-medium">⏳ Finishing Google login...</p>
    </div>
  );
}
