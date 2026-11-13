import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppShell from "../components/AppShell";

export default function Profile({ profile, email }) {
  const navigate = useNavigate();
  const [showAchievements, setShowAchievements] = useState(false);

  const fullName =
    profile?.firstName || profile?.lastName
      ? `${profile.firstName} ${profile.lastName}`.trim()
      : "Tonald Drump";

  const avatarSrc =
    profile?.avatarUrl ||
    (profile?.isUpdated || profile?.hasPhoto
      ? "/upload-photo.svg"
      : "/smile-profile.svg");

  return (
    <AppShell lightStatusBar>
      <div className="flex-1 flex flex-col bg-white -mt-11 overflow-y-auto">
        {/* Top Purple Header Banner */}
        <div className="bg-linear-to-r from-[#7B5CFF] to-[#5E3BE8] pt-16 pb-20 px-5 flex items-center justify-between text-white">
          <button
            type="button"
            onClick={() => navigate(profile?.isUpdated ? "/home" : "/welcome")}
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#6949FF] shadow-xs hover:scale-105 transition cursor-pointer"
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
          <h1 className="text-[16px] font-bold tracking-[-0.01em]">
            My Profile
          </h1>
          <div className="w-8" />
        </div>

        {/* Overlapping Avatar & User Details */}
        <div className="px-5 -mt-12 flex flex-col items-center text-center mb-6">
          <div className="w-[96px] h-[96px] rounded-[10px] bg-white p-1.5 shadow-md mb-3">
            <div className="w-full h-full rounded-[10px] overflow-hidden flex items-center justify-center">
              <img
                src={avatarSrc}
                alt="Profile Avatar"
                className={
                  avatarSrc === "/smile-profile.svg"
                    ? "w-12 h-12 object-contain"
                    : "w-full h-full object-cover"
                }
              />
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <h2 className="text-[16px] font-bold text-[#14171F]">{fullName}</h2>
            <img
              src="/verified-symbol.svg"
              alt="Verified"
              className="w-4 h-4 object-contain"
            />
          </div>
          <p className="text-[11.5px] text-[#6949FF] font-medium mt-0.5">
            {profile?.isUpdated
              ? profile?.position || "Junior Full Stack Developer"
              : email || "Tonald@work.com"}
          </p>
        </div>

        {/* Menu Sections */}
        <div className="px-5 space-y-5 pb-8">
          {/* CONTACT Section (First Image - Visit My Profile) */}
          {profile?.isUpdated && !showAchievements && (
            <div>
              <div className="flex items-center justify-between mb-2 px-1">
                <h3 className="text-[10.5px] font-bold tracking-wider text-[#374151] uppercase">
                  CONTACT
                </h3>
                <button
                  type="button"
                  onClick={() => setShowAchievements(true)}
                  className="text-[10.5px] font-medium text-[#6949FF] hover:underline cursor-pointer"
                >
                  Achievements
                </button>
              </div>
              <div className="bg-[#F7F7FC] rounded-2xl px-4 py-3.5 space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src="/sms.svg"
                    alt=""
                    className="w-4 h-4 object-contain"
                  />
                  <span className="text-[12.5px] font-medium text-[#374151]">
                    {email || "Tonald@gmail.com"}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="/location-tick.svg"
                    alt=""
                    className="w-4 h-4 object-contain"
                  />
                  <span className="text-[12.5px] font-medium text-[#374151]">
                    {profile?.address || "Taman Anggrek"}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* ACHIEVEMENT Section (When You Got Achievements) */}
          {profile?.isUpdated && showAchievements && (
            <div>
              <div className="flex items-center justify-between mb-2.5 px-1">
                <h3 className="text-[12px] font-bold text-[#14171F]">
                  Achievement
                </h3>
                <button
                  type="button"
                  onClick={() => setShowAchievements(false)}
                  className="text-[10.5px] font-medium text-[#6949FF] hover:underline cursor-pointer"
                >
                  Contact
                </button>
              </div>
              <div className="py-1">
                <img
                  src="/achievement-frame.svg"
                  alt="Achievements: Probation Slayer, Junior Of The Month, Employee Of The Year, Top Performer"
                  className="w-50vw h-auto object-contain"
                />
              </div>
            </div>
          )}

          {/* ACCOUNT Group */}
          <div>
            <h3 className="text-[10.5px] font-bold tracking-wider text-[#374151] uppercase mb-2 px-1">
              ACCOUNT
            </h3>
            <div className="bg-[#F7F7FC] rounded-2xl overflow-hidden divide-y divide-white/80">
              <ProfileMenuItem
                icon="/user-profile.svg"
                label={profile?.isUpdated ? "Personal Data" : "My Work Profile"}
                onClick={() => navigate("/profile/edit")}
              />
              <ProfileMenuItem
                icon="/office-assets.svg"
                label="Office Assets"
              />
              <ProfileMenuItem icon="/money.svg" label="Payroll & Tax" />
              <ProfileMenuItem icon="/crown.svg" label="Roles" />
            </div>
          </div>

          {/* SETTINGS Group */}
          <div>
            <h3 className="text-[10.5px] font-bold tracking-wider text-[#374151] uppercase mb-2 px-1">
              SETTINGS
            </h3>
            <div className="bg-[#F7F7FC] rounded-2xl overflow-hidden divide-y divide-white/80">
              <ProfileMenuItem icon="/setting.svg" label="Change Password" />
              <ProfileMenuItem icon="/scroll-version.svg" label="Versioning" />
              <ProfileMenuItem icon="/message-text.svg" label="FAQ and Help" />
              <ProfileMenuItem
                icon="/logout.svg"
                label="Logout"
                onClick={() => navigate("/")}
              />
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function ProfileMenuItem({ icon, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full px-4 py-3.5 flex items-center justify-between hover:bg-[#EFEFFD] active:bg-[#E7E6FC] transition text-left cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <img src={icon} alt="" className="w-[18px] h-[18px] object-contain" />
        <span className="text-[12.5px] font-medium text-[#374151]">
          {label}
        </span>
      </div>
      <svg
        className="w-3.5 h-3.5 text-[#9CA3AF]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}
