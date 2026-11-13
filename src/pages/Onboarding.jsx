import React from "react";
import { useNavigate } from "react-router-dom";
import AppShell from "../components/AppShell";

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <AppShell lightStatusBar>
      {/* Full gradient extending behind the status bar */}
      <div className="flex-1 flex flex-col justify-between bg-linear-to-b from-[#7e61fa] to-white -mt-11 pt-14 px-6 pb-9">
        {/* Middle Illustration Section: Today Task.svg & Working Period.svg */}
        <div className="flex-1 flex items-center justify-center my-2">
          <div className="relative w-full max-w-[330px] h-[340px] flex items-center justify-center">
            {/* Back Card: Today Task.svg */}
            <img
              src="/Today Task.svg"
              alt="Today Task"
              className="w-[82%] max-w-[270px] h-auto object-contain drop-shadow-xl -translate-x-4 -translate-y-14 select-none pointer-events-none"
            />

            {/* Front Overlapping Card: Working Period.svg */}
            <img
              src="/Working Period.svg"
              alt="Working Period"
              className="w-[100%] max-w-[340px] h-auto object-contain drop-shadow-2xl absolute translate-x-0 translate-y-34 select-none pointer-events-none"
            />
          </div>
        </div>

        {/* Bottom Text & Action Buttons */}
        <div className="w-full text-center space-y-7 pt-2">
          <div className="space-y-2.5 px-1">
            <h1 className="text-[23px] font-bold text-[#14171F] leading-[1.28] tracking-[-0.01em]">
              Navigate Your Work Journey
              <br />
              Efficient &amp; Easy
            </h1>
            <p className="text-[12.5px] text-[#6E7485] leading-[1.5] max-w-[290px] mx-auto">
              Increase your work management &amp; career development radically
            </p>
          </div>

          <div className="space-y-3.5">
            <button
              type="button"
              onClick={() => navigate("/welcome")}
              className="w-full py-3.5 rounded-full bg-linear-to-r from-[#7B5CFF] to-[#5E3BE8] text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:opacity-95 active:scale-[0.99] transition cursor-pointer"
            >
              Sign In
            </button>

            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="w-full py-3.5 rounded-full bg-white text-[#6949FF] border border-[#6949FF] font-semibold text-sm hover:bg-indigo-50/70 active:scale-[0.99] transition cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
