import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import SignUp from "./pages/SignUp";
import Terms from "./pages/Terms";
import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";
import WorkProfile from "./pages/WorkProfile";
import Home from "./pages/Home";

export default function App() {
  const [formData, setFormData] = useState({
    email: "",
    countryCode: "INA",
    phone: "",
    companyId: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });

  const [profile, setProfile] = useState({
    firstName: "Tonald",
    lastName: "Drump",
    dob: "",
    position: "",
    address: "",
    avatarUrl: "",
    hasPhoto: false,
    isUpdated: false,
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route
          path="/signup"
          element={<SignUp formData={formData} setFormData={setFormData} />}
        />
        <Route
          path="/terms"
          element={<Terms formData={formData} setFormData={setFormData} />}
        />
        <Route path="/welcome" element={<Welcome />} />
        <Route
          path="/profile"
          element={<Profile profile={profile} email={formData.email} />}
        />
        <Route
          path="/profile/edit"
          element={<WorkProfile profile={profile} setProfile={setProfile} />}
        />
        <Route
          path="/home"
          element={<Home profile={profile} email={formData.email} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
