import React, { useEffect } from "react";
import axiosInstance from "../../Axios";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.post("users/logout/blacklist/", {
      refresh_token: localStorage.getItem("refresh_token"),
    });
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    axiosInstance.defaults.headers["Authorization"] = null;
    navigate("/login");
    window.location.reload();
  });
  return <div>Logout</div>;
}
