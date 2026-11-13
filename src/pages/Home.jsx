import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppShell from "../components/AppShell";

export default function Home({ profile, email }) {
  const navigate = useNavigate();
  const [showSummary, setShowSummary] = useState(Boolean(profile?.isUpdated));

  const fullName =
    profile?.firstName || profile?.lastName
      ? `${profile.firstName} ${profile.lastName}`.trim()
      : "Tonald Drump";

  const avatarSrc =
    profile?.avatarUrl ||
    (showSummary || profile?.hasPhoto
      ? "/upload-photo.svg"
      : "/smile-profile.svg");

  return (
    <AppShell>
      <div className="flex-1 flex flex-col bg-[#F5F6FA] overflow-hidden">
        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto pb-4 space-y-3.5">
          {/* Top Profile Header */}
          <div className="bg-white px-3.5 py-3 pt-4 flex items-center justify-between shadow-2xs">
            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="flex items-center gap-2.5 text-left cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-[#F2F1FF] flex items-center justify-center shrink-0 overflow-hidden">
                <img
                  src={avatarSrc}
                  alt="Avatar"
                  className={
                    avatarSrc === "/smile-profile.svg"
                      ? "object-contain"
                      : "w-full h-full object-cover"
                  }
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-[13.5px] font-bold text-[#14171F]">
                    {fullName}
                  </span>
                  <img
                    src="/verified-symbol.svg"
                    alt="Verified"
                    className="w-3.5 h-3.5 object-contain"
                  />
                </div>
                <p className="text-[11px] text-[#6949FF] font-medium">
                  {showSummary
                    ? profile?.position || "Junior Full Stack Developer"
                    : email || "Tonald@work.com"}
                </p>
              </div>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="w-8 h-8 rounded-full bg-[#F5F6FA] flex items-center justify-center hover:bg-indigo-50 transition cursor-pointer"
              >
                <img
                  src="/message-2.svg"
                  alt="Messages"
                  className="w-4 h-4 object-contain"
                />
              </button>
              <button
                type="button"
                className="w-8 h-8 rounded-full bg-[#F5F6FA] flex items-center justify-center hover:bg-indigo-50 transition cursor-pointer"
              >
                <img
                  src="/bell.svg"
                  alt="Notifications"
                  className="w-4 h-4 object-contain"
                />
              </button>
            </div>
          </div>

          {/* My Work Summary Purple Card (Click to toggle populated view) */}
          <button
            type="button"
            onClick={() => setShowSummary((prev) => !prev)}
            className="mx-4 my-4 w-[calc(100%-2rem)] rounded-xl flex items-center justify-between shadow-sm overflow-hidden cursor-pointer active:scale-[0.99] transition"
          >
            <img
              src="/work-summary.svg"
              alt="Work Summary"
              className="w-full h-full rounded-xl"
            />
          </button>

          {/* Today Meeting Card */}
          <div className="bg-white rounded-2xl mx-4 p-4 shadow-2xs">
            <div className="mb-3">
              <div className="flex items-center gap-1.5">
                <h3 className="text-[13.5px] font-bold text-[#14171F]">
                  Today Meeting
                </h3>
                {showSummary && (
                  <span className="text-[10.5px] font-bold bg-[#EEF0FF] text-[#6949FF] px-1.5 py-0.5 rounded-md">
                    2
                  </span>
                )}
              </div>
              <p className="text-[11px] text-[#6E7485]">
                Your schedule for the day
              </p>
            </div>

            {!showSummary ? (
              <div className="flex flex-col items-center text-center py-4 px-2">
                <img
                  src="/profile-set.svg"
                  alt="No Meeting Available"
                  className="w-24 h-20 object-contain mb-3"
                />
                <h4 className="text-[13px] font-bold text-[#14171F] mb-1">
                  No Meeting Available
                </h4>
                <p className="text-[10.5px] text-[#6E7485] leading-[1.45] max-w-[270px]">
                  It looks like you don&apos;t have any meetings scheduled at
                  the moment. This space will be updated as new meetings are
                  added!
                </p>
              </div>
            ) : (
              <div className="space-y-2.5">
                {/* Meeting 1: Townhall Meeting */}
                <div className="bg-[#F8F9FC] rounded-xl p-3 border border-slate-100 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src="/video.svg"
                        alt="Video"
                        className="w-5 h-5 object-contain"
                      />
                      <span className="text-[12.5px] font-bold text-[#14171F]">
                        Townhall Meeting
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-[#6E7485]">
                      <img
                        src="/clock.svg"
                        alt=""
                        className="w-3.5 h-3.5 object-contain"
                      />
                      <span>01:30 AM - 02:00 AM</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <img
                        src="/meeting-group-1.svg"
                        alt="Participants"
                        className="h-6 w-auto object-contain"
                      />
                      <span className="text-[10.5px] font-semibold text-[#6E7485]">
                        +3
                      </span>
                    </div>
                    <button
                      type="button"
                      className="px-3.5 py-1.5 rounded-full bg-[#6949FF] text-white text-[10.5px] font-semibold hover:opacity-95 transition cursor-pointer"
                    >
                      Join Meet
                    </button>
                  </div>
                </div>

                {/* Meeting 2: Dashboard Report */}
                <div className="bg-[#F8F9FC] rounded-xl p-3 border border-slate-100 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src="/video.svg"
                        alt="Video"
                        className="w-5 h-5 object-contain"
                      />
                      <span className="text-[12.5px] font-bold text-[#14171F]">
                        Dashboard Report
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-[#6E7485]">
                      <img
                        src="/clock.svg"
                        alt=""
                        className="w-3.5 h-3.5 object-contain"
                      />
                      <span>01:30 AM - 02:00 AM</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <img
                      src="/meeting-group-2.svg"
                      alt="Participants"
                      className="h-6 w-auto object-contain"
                    />
                    <button
                      type="button"
                      className="px-3.5 py-1.5 rounded-full bg-[#6949FF] text-white text-[10.5px] font-semibold hover:opacity-95 transition cursor-pointer"
                    >
                      Join Meet
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Today Task Card */}
          <div className="bg-white rounded-2xl mx-4 p-4 shadow-2xs">
            <div className="mb-3">
              <div className="flex items-center gap-1.5">
                <h3 className="text-[13.5px] font-bold text-[#14171F]">
                  Today Task
                </h3>
                {showSummary && (
                  <span className="text-[10.5px] font-bold bg-[#EEF0FF] text-[#6949FF] px-1.5 py-0.5 rounded-md">
                    1
                  </span>
                )}
              </div>
              <p className="text-[11px] text-[#6E7485]">
                The tasks assigned to you for today
              </p>
            </div>

            {!showSummary ? (
              <div className="flex flex-col items-center text-center py-4 px-2">
                <img
                  src="/papers-set.svg"
                  alt="No Tasks Assigned"
                  className="w-24 h-20 object-contain mb-3"
                />
                <h4 className="text-[13px] font-bold text-[#14171F] mb-1">
                  No Tasks Assigned
                </h4>
                <p className="text-[10.5px] text-[#6E7485] leading-[1.45] max-w-[270px]">
                  It looks like you don&apos;t have any tasks assigned to you
                  right now. Don&apos;t worry, this space will be updated as new
                  tasks become available.
                </p>
              </div>
            ) : (
              <div className="bg-[#F8F9FC] rounded-xl p-3 border border-slate-100 space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-[#6949FF] rounded-full">
                    <img
                      src="/flash.svg"
                      alt="Task"
                      className="w-full h-full p-1 object-contain"
                    />
                  </div>
                  <span className="text-[12.5px] font-bold text-[#14171F]">
                    Wiring Dashboard Analytics
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-medium bg-[#E5E7EB] text-[#4B5563] px-2.5 py-0.5 rounded-full">
                    In Progress
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-[#F43F5E] text-white px-2.5 py-0.5 rounded-full">
                    <img
                      src="/flag.svg"
                      alt=""
                      className="w-3 h-3 object-contain brightness-0 invert"
                    />
                    High
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-[#E5E7EB] rounded-full overflow-hidden">
                  <div className="w-4/5 h-full bg-[#6949FF] rounded-full" />
                </div>

                <div className="flex items-center justify-between pt-0.5">
                  <img
                    src="/meeting-group-1.svg"
                    alt="Team"
                    className="h-6 w-auto object-contain"
                  />
                  <div className="flex items-center gap-3 text-[10px] text-[#6E7485] font-medium">
                    <span className="inline-flex items-center gap-1">
                      <img
                        src="/calendar-2.svg"
                        alt=""
                        className="w-3.5 h-3.5 object-contain brightness-60"
                      />
                      27 April
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <img
                        src="/message.svg"
                        alt=""
                        className="w-3.5 h-3.5 object-contain"
                      />
                      2
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Fixed Dark Bottom Navigation Bar */}
        <nav className="fixed sm:sticky bottom-0 left-0 right-0 w-full shrink-0 bg-[#1B1D24] flex items-center justify-between z-40 flex-col">
          {/* Navigation Icons Row */}
          <div className="pt-3.5 pb-2 w-full flex items-center justify-around">
            <button
              type="button"
              onClick={() => {
                setShowSummary(false);
                navigate("/home");
              }}
              className="flex flex-col items-center gap-1.5 cursor-pointer"
            >
              <img
                src="/home-2.svg"
                alt="Home"
                className="w-5 h-5 object-contain"
              />
              <span className="w-3.5 h-[2.5px] bg-white rounded-full" />
            </button>

            <button
              type="button"
              className="flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition cursor-pointer"
            >
              <img
                src="/calendar-2.svg"
                alt="Calendar"
                className="w-5 h-5 object-contain"
              />
            </button>

            <button
              type="button"
              className="flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition cursor-pointer"
            >
              <img
                src="/note-text-2.svg"
                alt="Tasks"
                className="w-5 h-5 object-contain"
              />
            </button>

            <button
              type="button"
              className="flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition cursor-pointer"
            >
              <img
                src="/receipt-2.svg"
                alt="Payroll"
                className="w-5 h-5 object-contain"
              />
            </button>

            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition cursor-pointer"
            >
              <img
                src="/layer-2.svg"
                alt="More"
                className="w-5 h-5 object-contain"
              />
            </button>
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="w-full pb-2 pt-0.5 flex items-center justify-center pointer-events-none select-none">
            <img
              src="/scrollbar-2.svg"
              alt="Home Indicator"
              className="h-0.5 w-auto object-contain brightness-40 invert"
            />
          </div>
        </nav>
      </div>
    </AppShell>
  );
}
