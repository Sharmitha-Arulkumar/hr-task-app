import React from "react";
import { useNavigate } from "react-router-dom";
import AppShell from "../components/AppShell";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <AppShell>
      <div className="flex-1 flex flex-col justify-between relative">
        {/* Blurred Dashboard Preview Background */}
        <div className="p-5 space-y-4 blur-[5px] opacity-85 pointer-events-none select-none">
          {/* Top User Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-indigo-100 flex items-center justify-center">
                <img src="/smile-profile.svg" alt="" className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold text-slate-900">
                    Tonald Drump
                  </span>
                  <img
                    src="/verified-symbol.svg"
                    alt=""
                    className="w-3.5 h-3.5"
                  />
                </div>
                <p className="text-xs text-[#6949FF]">
                  Junior Full Stack Developer
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                <img src="/message-2.svg" alt="" className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                <img src="/bell.svg" alt="" className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Purple Work Summary Card */}
          <div className="rounded-2xl bg-linear-to-r from-[#7B5CFF] to-[#5E3BE8] p-4 text-white flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold">My Work Summary</h3>
              <p className="text-[11px] text-indigo-100">
                Today task &amp; presence activity
              </p>
            </div>
            <img
              src="/work-summary.svg"
              alt=""
              className="w-14 h-14 object-contain"
            />
          </div>

          {/* Today Meeting Card */}
          <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4 space-y-2">
            <div className="h-3.5 w-28 bg-slate-800 rounded" />
            <div className="h-2.5 w-44 bg-slate-300 rounded" />
            <div className="h-16 rounded-xl bg-white border border-slate-100 mt-2" />
          </div>

          {/* My Working Account Card */}
          <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4 space-y-2">
            <div className="h-3.5 w-32 bg-slate-800 rounded" />
            <div className="h-20 rounded-xl bg-white border border-slate-100" />
          </div>
        </div>

        {/* Dim Backdrop + Welcome Bottom Sheet */}
        <div className="absolute inset-0 bg-black/55 z-40 flex items-end -mt-11">
          <div className="w-full bg-white rounded-t-[28px] px-6 pt-12 pb-8 relative text-center shadow-2xl">
            {/* Floating Purple Badge with user-octagon.svg */}
            <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#7B5CFF] to-[#5E3BE8] shadow-xl shadow-indigo-500/35 flex items-center justify-center absolute -top-8 left-1/2 -translate-x-1/2">
              <img
                src="/user-octagon.svg"
                alt="Welcome"
                className="w-8 h-8 object-contain"
              />
            </div>

            <h2 className="text-[19px] font-bold text-[#14171F] mb-2">
              Welcome To Work Mate!
            </h2>
            <p className="text-[12px] text-[#6E7485] leading-[1.55] max-w-[310px] mx-auto mb-6">
              To enhance your user experience, please set up your profile first.
              This will help us tailor the app to your needs and ensure you get
              the most out of our features!
            </p>

            <div className="space-y-3">
              <button
                type="button"
                onClick={() => navigate("/profile")}
                className="w-full py-3.5 rounded-full bg-linear-to-r from-[#7B5CFF] to-[#5E3BE8] text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:opacity-95 active:scale-[0.99] transition cursor-pointer"
              >
                Set Up My Profile
              </button>

              <button
                type="button"
                onClick={() => navigate("/home")}
                className="w-full py-3.5 rounded-full bg-white text-[#6949FF] border border-[#6949FF] font-semibold text-sm hover:bg-indigo-50/70 active:scale-[0.99] transition cursor-pointer"
              >
                Explore The App First
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
