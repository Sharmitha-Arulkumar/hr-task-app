import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppShell from "../components/AppShell";

export default function SignUp({ formData, setFormData }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpRefs = useRef([]);

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const updated = [...otp];
    updated[index] = value.slice(-1);
    setOtp(updated);
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowVerifyModal(true);
  };

  return (
    <AppShell>
      {/* Main Form Container (blurs when verification modal is open) */}
      <div
        className={`flex-1 flex flex-col justify-between px-6 pt-3 pb-6 overflow-y-auto transition duration-200 ${
          showVerifyModal ? "blur-[3px] pointer-events-none select-none" : ""
        }`}
      >
        <div>
          {/* Logo & Title Header */}
          <div className="flex flex-col items-center text-center mb-6">
            <img
              src="/Work Mate.svg"
              alt="Work Mate Logo"
              className="w-12 h-12 object-contain mb-3"
            />
            <h1 className="text-[20px] font-bold text-[#14171F] tracking-[-0.01em]">
              Work Mate
            </h1>
            <p className="text-[12px] text-[#6E7485] mt-0.5">
              Register Using Your Credentials
            </p>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* Email */}
            <div>
              <label className="block text-[11.5px] font-medium text-[#6E7485] mb-1.5">
                Email
              </label>
              <div className="relative flex items-center">
                <img
                  src="/sms.svg"
                  alt=""
                  className="w-4 h-4 absolute left-3.5 pointer-events-none"
                />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter Your Email"
                  className="w-full pl-10 pr-4 py-3 text-[13px] text-[#14171F] placeholder-[#9CA3AF] bg-white border border-[#D1D5DB] rounded-xl focus:outline-none focus:border-[#6949FF] transition"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-[11.5px] font-medium text-[#6E7485] mb-1.5">
                Phone Number
              </label>
              <div className="flex items-center border border-[#D1D5DB] rounded-xl bg-white focus-within:border-[#6949FF] transition overflow-hidden">
                <div className="relative flex items-center pl-3.5 pr-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) =>
                      setFormData({ ...formData, countryCode: e.target.value })
                    }
                    className="appearance-none pr-4 py-3 text-[13px] font-medium text-[#14171F] bg-transparent focus:outline-none cursor-pointer"
                  >
                    <option value="INA">INA</option>
                    <option value="IND">IND</option>
                    <option value="USA">USA</option>
                    <option value="SGP">SGP</option>
                  </select>
                  <svg
                    className="w-3.5 h-3.5 text-[#6949FF] pointer-events-none -ml-3"
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
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+62 0000 0000 0000"
                  className="w-full px-2 py-3 text-[13px] text-[#14171F] placeholder-[#9CA3AF] bg-transparent focus:outline-none"
                />
              </div>
            </div>

            {/* Company ID */}
            <div>
              <label className="block text-[11.5px] font-medium text-[#6E7485] mb-1.5">
                Company ID
              </label>
              <div className="relative flex items-center">
                <img
                  src="/sms.svg"
                  alt=""
                  className="w-4 h-4 absolute left-3.5 pointer-events-none"
                />
                <input
                  type="text"
                  required
                  value={formData.companyId}
                  onChange={(e) =>
                    setFormData({ ...formData, companyId: e.target.value })
                  }
                  placeholder="Enter Company ID"
                  className="w-full pl-10 pr-4 py-3 text-[13px] text-[#14171F] placeholder-[#9CA3AF] bg-white border border-[#D1D5DB] rounded-xl focus:outline-none focus:border-[#6949FF] transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-[11.5px] font-medium text-[#6E7485] mb-1.5">
                Password
              </label>
              <div className="relative flex items-center">
                <img
                  src="/finger-scan.svg"
                  alt=""
                  className="w-4 h-4 absolute left-3.5 pointer-events-none"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="My Password"
                  className="w-full pl-10 pr-10 py-3 text-[13px] text-[#14171F] placeholder-[#9CA3AF] bg-white border border-[#D1D5DB] rounded-xl focus:outline-none focus:border-[#6949FF] transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 cursor-pointer"
                >
                  <img
                    src="/eye-slash.svg"
                    alt="Toggle Password"
                    className="w-4 h-4"
                  />
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-[11.5px] font-medium text-[#6E7485] mb-1.5">
                Confirm Password
              </label>
              <div className="relative flex items-center">
                <img
                  src="/finger-scan.svg"
                  alt=""
                  className="w-4 h-4 absolute left-3.5 pointer-events-none"
                />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  placeholder="Confirm My Password"
                  className="w-full pl-10 pr-10 py-3 text-[13px] text-[#14171F] placeholder-[#9CA3AF] bg-white border border-[#D1D5DB] rounded-xl focus:outline-none focus:border-[#6949FF] transition"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3.5 cursor-pointer"
                >
                  <img
                    src="/eye-slash.svg"
                    alt="Toggle Confirm Password"
                    className="w-4 h-4"
                  />
                </button>
              </div>
            </div>

            {/* Terms & Privacy Checkbox */}
            <div className="flex items-center gap-2 pt-1">
              <input
                id="terms"
                type="checkbox"
                checked={formData.agreed}
                onChange={(e) =>
                  setFormData({ ...formData, agreed: e.target.checked })
                }
                className="w-4 h-4 rounded border-[#6949FF] accent-[#6949FF] cursor-pointer"
              />
              <label htmlFor="terms" className="text-[11.5px] text-[#14171F]">
                I agree with{" "}
                <Link
                  to="/terms"
                  className="text-[#6949FF] font-medium hover:underline"
                >
                  terms &amp; conditions
                </Link>{" "}
                and{" "}
                <Link
                  to="/terms"
                  className="text-[#6949FF] font-medium hover:underline"
                >
                  privacy policy
                </Link>
              </label>
            </div>

            {/* Sign Up Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-linear-to-r from-[#7B5CFF] to-[#5E3BE8] text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:opacity-95 active:scale-[0.99] transition cursor-pointer"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

        {/* Bottom Sign In Link */}
        <p className="text-center text-[12px] text-[#14171F] mt-5">
          Already have an account?{" "}
          <Link to="/" className="text-[#6949FF] font-semibold hover:underline">
            Sign in here
          </Link>
        </p>
      </div>

      {/* EMAIL VERIFICATION SENT BOTTOM-SHEET MODAL */}
      {showVerifyModal && (
        <div className="absolute inset-0 bg-black/55 z-40 flex items-end -mt-11">
          <div className="w-full bg-white rounded-t-[28px] px-6 pt-12 pb-8 relative text-center shadow-2xl">
            {/* Floating Purple Envelope Badge with sms-notification.svg */}
            <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#7B5CFF] to-[#5E3BE8] shadow-xl shadow-indigo-500/35 flex items-center justify-center absolute -top-8 left-1/2 -translate-x-1/2">
              <img
                src="/sms-notification.svg"
                alt="Email Verification"
                className="w-8 h-8 object-contain"
              />
            </div>

            <h2 className="text-[19px] font-bold text-[#14171F] mb-2">
              Email Verification Sent!
            </h2>
            <p className="text-[12px] text-[#6E7485] leading-[1.5] max-w-[300px] mx-auto mb-6">
              A verification code will be sent to the email{" "}
              <span className="text-[#374151] font-medium">
                {formData.email || "Hello@work.com"}
              </span>{" "}
              for your account verification process.
            </p>

            {/* 6-Digit OTP Input Boxes */}
            <div className="flex justify-center gap-2 sm:gap-2.5 mb-5">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (otpRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  placeholder="0"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(index, e)}
                  className="w-11 h-12 sm:w-12 sm:h-13 text-center text-xl font-bold text-[#14171F] placeholder-[#9CA3AF] border border-[#D1D5DB] rounded-xl focus:outline-none focus:border-[#6949FF] transition"
                />
              ))}
            </div>

            <p className="text-[12px] text-[#374151] mb-6">
              Haven&apos;t received the verification code?{" "}
              <button
                type="button"
                onClick={() => setOtp(["", "", "", "", "", ""])}
                className="text-[#6949FF] font-semibold hover:underline cursor-pointer"
              >
                Resend it.
              </button>
            </p>

            <button
              type="button"
              onClick={() => navigate("/welcome")}
              className="w-full py-3.5 rounded-full bg-linear-to-r from-[#7B5CFF] to-[#5E3BE8] text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:opacity-95 active:scale-[0.99] transition cursor-pointer"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </AppShell>
  );
}
