import React from "react";
import { useNavigate } from "react-router-dom";
import AppShell from "../components/AppShell";

export default function Terms({ formData, setFormData }) {
  const navigate = useNavigate();

  const handleAgree = () => {
    setFormData({ ...formData, agreed: true });
    navigate("/signup");
  };

  return (
    <AppShell>
      <div className="flex-1 flex flex-col justify-between px-6 pt-3 pb-7 overflow-hidden">
        {/* Title */}
        <h1 className="text-[19px] font-bold text-[#14171F] text-center leading-[1.3] mb-4">
          Terms &amp; Conditions and
          <br />
          Privacy Policy
        </h1>

        {/* Scrollable Legal Text Container */}
        <div className="relative flex-1 overflow-y-auto pr-4 space-y-3 text-[11.5px] text-[#374151] leading-[1.55]">
          <div>
            <p className="font-semibold text-[#14171F]">
              Terms and Conditions:
            </p>
            <p>
              Acceptance: By using the Re-Dus app, you agree to comply with all
              applicable terms and conditions.
            </p>
          </div>

          <p>
            Usage: This app is for personal use only and may not be used for
            commercial purposes without permission.
          </p>

          <p>
            Account: You are responsible for the security of your account and
            all activities that occur within it.
          </p>

          <p>
            Content: You must not upload content that violates copyright,
            privacy, or applicable laws.
          </p>

          <p>
            Changes: We reserve the right to change the terms and conditions at
            any time and will notify you of these changes through the app or via
            email.
          </p>

          <div className="pt-1">
            <p className="font-semibold text-[#14171F]">Privacy Policy:</p>
            <p>
              Data Collection: We collect personal data such as name, email, and
              location to process transactions and improve our services.
            </p>
          </div>

          <p>
            Data Usage: Your data is used for internal purposes such as account
            management, usage analysis, and service offerings.
          </p>

          <p>
            Security: We protect your data with appropriate security measures to
            prevent unauthorized access.
          </p>

          <p>
            Data Sharing: We do not share your personal data with third parties
            without your consent, except as required by law.
          </p>

          <p>
            Your Rights: You can access, update, or delete your personal data at
            any time.
          </p>

          {/* Visual Scrollbar Indicator */}
          <img
            src="/scrollbar-2.svg"
            alt=""
            className="w-1.5 h-32 object-contain fixed sm:absolute right-1.5 top-28 pointer-events-none opacity-80"
          />
        </div>

        {/* Bottom Action Buttons */}
        <div className="pt-4 space-y-3 bg-white">
          <button
            type="button"
            onClick={handleAgree}
            className="w-full py-3.5 rounded-full bg-linear-to-r from-[#7B5CFF] to-[#5E3BE8] text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:opacity-95 active:scale-[0.99] transition cursor-pointer"
          >
            I Agree
          </button>

          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="w-full py-3.5 rounded-full bg-white text-[#6949FF] border border-[#6949FF] font-semibold text-sm hover:bg-indigo-50/70 active:scale-[0.99] transition cursor-pointer"
          >
            Decline
          </button>
        </div>
      </div>
    </AppShell>
  );
}
