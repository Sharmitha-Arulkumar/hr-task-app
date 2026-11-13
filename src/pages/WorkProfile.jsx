import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppShell from "../components/AppShell";

export default function WorkProfile({ profile, setProfile }) {
  const navigate = useNavigate();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setProfile({ ...profile, avatarUrl: previewUrl, hasPhoto: true });
    } else {
      setProfile({ ...profile, hasPhoto: true });
    }
  };

  const handleConfirmUpdate = () => {
    setProfile({ ...profile, isUpdated: true, hasPhoto: true });
    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  const isModalOpen = showConfirmModal || showSuccessModal;

  return (
    <AppShell>
      {/* Main Form View (Blurs when confirmation/success modal is open) */}
      <div
        className={`flex-1 flex flex-col bg-[#F5F6FA] min-h-0 transition duration-200 ${
          isModalOpen ? "blur-[4px] pointer-events-none select-none" : ""
        }`}
      >
        {/* Top Navigation Bar */}
        <div className="bg-white px-5 py-3 flex items-center justify-between shrink-0">
          <button
            type="button"
            onClick={() => navigate("/profile")}
            className="w-8 h-8 rounded-full bg-[#F5F6FA] flex items-center justify-center text-[#6949FF] hover:bg-indigo-50 transition cursor-pointer"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-[16px] font-bold text-[#14171F] tracking-[-0.01em]">
            My Work Profile
          </h1>
          <div className="w-8" />
        </div>

        {/* Scrollable Form Cards */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setShowConfirmModal(true);
          }}
          className="flex-1 overflow-y-auto px-4 pt-3 pb-24 space-y-3.5"
        >
          {/* Personal Data Information Card */}
          <div className="bg-white rounded-2xl p-4 shadow-2xs space-y-4">
            <div>
              <h2 className="text-[13.5px] font-bold text-[#14171F]">
                Personal Data Information
              </h2>
              <p className="text-[11px] text-[#6E7485]">
                Your personal data information
              </p>
            </div>

            {/* Upload Photo Box */}
            <div className="flex flex-col items-center py-1">
              <div className="relative">
                <label className="w-24 h-24 rounded-2xl border border-dashed border-[#A796FF] bg-[#F7F6FF] flex flex-col items-center justify-center cursor-pointer overflow-hidden hover:bg-indigo-50/70 transition">
                  {profile.avatarUrl ? (
                    <img
                      src={profile.avatarUrl}
                      alt="Uploaded Avatar"
                      className="w-full h-full object-cover"
                    />
                  ) : profile.hasPhoto ? (
                    <img
                      src="/upload-photo.svg"
                      alt="Profile Avatar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src="/upload-image.svg"
                      alt="Upload"
                      className="w-7 h-7 object-contain"
                    />
                  )}
                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </label>

                {/* Top-Right Purple Action Badge */}
                <button
                  type="button"
                  onClick={() =>
                    setProfile({ ...profile, hasPhoto: !profile.hasPhoto })
                  }
                  title="Toggle sample avatar"
                  className="w-6 h-6 rounded-full bg-[#6949FF] flex items-center justify-center shadow-md absolute -top-2 -right-2 cursor-pointer"
                >
                  <img
                    src={profile.hasPhoto ? "/refresh.svg" : "/export.svg"}
                    alt=""
                    className="w-3.5 h-3.5 object-contain brightness-0 invert"
                  />
                </button>
              </div>

              <span className="text-[12px] font-semibold text-[#14171F] mt-2.5">
                Upload Photo
              </span>
              <span className="text-[10px] text-[#6E7485] text-center leading-[1.4] mt-0.5">
                Format should be in .jpeg .png atleast
                <br />
                800×800px and less than 5MB
              </span>
            </div>

            {/* First Name */}
            <div>
              <label className="block text-[11.5px] font-medium text-[#6E7485] mb-1.5">
                First Name
              </label>
              <div className="relative flex items-center">
                <img
                  src="/user.svg"
                  alt=""
                  className="w-4 h-4 absolute left-3.5 pointer-events-none"
                />
                <input
                  type="text"
                  value={profile.firstName}
                  onChange={(e) =>
                    setProfile({ ...profile, firstName: e.target.value })
                  }
                  placeholder="First Name"
                  className="w-full pl-10 pr-4 py-3 text-[13px] text-[#14171F] border border-[#D1D5DB] rounded-xl focus:outline-none focus:border-[#6949FF] transition"
                />
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-[11.5px] font-medium text-[#6E7485] mb-1.5">
                Last Name
              </label>
              <div className="relative flex items-center">
                <img
                  src="/user.svg"
                  alt=""
                  className="w-4 h-4 absolute left-3.5 pointer-events-none"
                />
                <input
                  type="text"
                  value={profile.lastName}
                  onChange={(e) =>
                    setProfile({ ...profile, lastName: e.target.value })
                  }
                  placeholder="Last Name"
                  className="w-full pl-10 pr-4 py-3 text-[13px] text-[#14171F] border border-[#D1D5DB] rounded-xl focus:outline-none focus:border-[#6949FF] transition"
                />
              </div>
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-[11.5px] font-medium text-[#6E7485] mb-1.5">
                Date of Birth
              </label>
              <div className="relative flex items-center">
                <img
                  src="/calendar.svg"
                  alt=""
                  className="w-4 h-4 absolute left-3.5 pointer-events-none"
                />
                <select
                  value={profile.dob}
                  onChange={(e) =>
                    setProfile({ ...profile, dob: e.target.value })
                  }
                  className={`w-full appearance-none pl-10 pr-9 py-3 text-[13px] bg-white border border-[#D1D5DB] rounded-xl focus:outline-none focus:border-[#6949FF] transition cursor-pointer ${
                    profile.dob ? "text-[#14171F]" : "text-[#9CA3AF]"
                  }`}
                >
                  <option value="">Date of Birth</option>
                  <option value="10 December 1997">10 December 1997</option>
                  <option value="15 August 1996">15 August 1996</option>
                  <option value="22 March 1998">22 March 1998</option>
                </select>
                <svg
                  className="w-4 h-4 text-[#6949FF] absolute right-3.5 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Position */}
            <div>
              <label className="block text-[11.5px] font-medium text-[#6E7485] mb-1.5">
                Position
              </label>
              <div className="relative flex items-center">
                <img
                  src="/keyboard.svg"
                  alt=""
                  className="w-4 h-4 absolute left-3.5 pointer-events-none"
                />
                <select
                  value={profile.position}
                  onChange={(e) =>
                    setProfile({ ...profile, position: e.target.value })
                  }
                  className={`w-full appearance-none pl-10 pr-9 py-3 text-[13px] bg-white border border-[#D1D5DB] rounded-xl focus:outline-none focus:border-[#6949FF] transition cursor-pointer ${
                    profile.position ? "text-[#14171F]" : "text-[#9CA3AF]"
                  }`}
                >
                  <option value="">Select Position</option>
                  <option value="Junior Full Stack Developer">
                    Junior Full Stack Developer
                  </option>
                  <option value="Product Designer">Product Designer</option>
                  <option value="Frontend Engineer">Frontend Engineer</option>
                </select>
                <svg
                  className="w-4 h-4 text-[#6949FF] absolute right-3.5 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Address Card */}
          <div className="bg-white rounded-2xl p-4 shadow-2xs space-y-2">
            <div>
              <h2 className="text-[13.5px] font-bold text-[#14171F]">
                Address
              </h2>
              <p className="text-[11px] text-[#6E7485]">
                Your current domicile
              </p>
            </div>
            <div className="relative flex items-center pt-1">
              <img
                src="/location-tick.svg"
                alt=""
                className="w-4 h-4 absolute left-3.5 pointer-events-none"
              />
              <input
                type="text"
                value={profile.address}
                onChange={(e) =>
                  setProfile({ ...profile, address: e.target.value })
                }
                placeholder="Taman Anggrek"
                className="w-full pl-10 pr-4 py-3 text-[13px] text-[#14171F] placeholder-[#9CA3AF] border border-[#D1D5DB] rounded-xl focus:outline-none focus:border-[#6949FF] transition"
              />
            </div>
          </div>

          {/* Bottom Update Profile */}
          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full sm:max-w-[412px] sm:bottom-6 bg-white px-6 py-4 border-t border-slate-100 z-30">
            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-linear-to-r from-[#7B5CFF] to-[#5E3BE8] text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:opacity-95 active:scale-[0.99] transition cursor-pointer"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>

      {/* MODAL 1: UPDATE PROFILE CONFIRMATION */}
      {showConfirmModal && (
        <div className="absolute inset-0 bg-black/55 z-40 flex items-end -mt-11">
          <div className="w-full bg-white rounded-t-[28px] px-6 pt-12 pb-8 relative text-center shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#7B5CFF] to-[#5E3BE8] shadow-xl shadow-indigo-500/35 flex items-center justify-center absolute -top-8 left-1/2 -translate-x-1/2">
              <img
                src="/user-profile.svg"
                alt="Update Profile"
                className="w-8 h-8 object-contain brightness-0 invert"
              />
            </div>

            <h2 className="text-[19px] font-bold text-[#14171F] mb-2">
              Update Profile
            </h2>
            <p className="text-[12px] text-[#6E7485] leading-[1.55] max-w-[300px] mx-auto mb-6">
              Are you sure you want to update your profile? This will help us
              improve your experience and provide personalized features.
            </p>

            <div className="space-y-3">
              <button
                type="button"
                onClick={handleConfirmUpdate}
                className="w-full py-3.5 rounded-full bg-linear-to-r from-[#7B5CFF] to-[#5E3BE8] text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:opacity-95 active:scale-[0.99] transition cursor-pointer"
              >
                Yes, Update Profile
              </button>
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="w-full py-3.5 rounded-full bg-white text-[#6949FF] border border-[#6949FF] font-semibold text-sm hover:bg-indigo-50/70 active:scale-[0.99] transition cursor-pointer"
              >
                No, Let me check
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: PROFILE UPDATED! SUCCESS */}
      {showSuccessModal && (
        <div className="absolute inset-0 bg-black/55 z-40 flex items-end -mt-11">
          <div className="w-full bg-white rounded-t-[28px] px-6 pt-12 pb-8 relative text-center shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#7B5CFF] to-[#5E3BE8] shadow-xl shadow-indigo-500/35 flex items-center justify-center absolute -top-8 left-1/2 -translate-x-1/2">
              <img
                src="/user-profile.svg"
                alt="Profile Updated"
                className="w-8 h-8 object-contain brightness-0 invert"
              />
            </div>

            <h2 className="text-[19px] font-bold text-[#14171F] mb-2">
              Profile Updated!
            </h2>
            <p className="text-[12px] text-[#6E7485] leading-[1.55] max-w-[290px] mx-auto mb-6">
              Your profile has been successfully updated. We&apos;re excited to
              see you take this step!
            </p>

            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="w-full py-3.5 rounded-full bg-linear-to-r from-[#7B5CFF] to-[#5E3BE8] text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:opacity-95 active:scale-[0.99] transition cursor-pointer"
            >
              Visit My Profile
            </button>
          </div>
        </div>
      )}
    </AppShell>
  );
}
