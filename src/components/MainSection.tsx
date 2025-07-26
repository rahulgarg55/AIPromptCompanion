import React, { useState } from "react";
import pLogo from "../assets/p-logo.svg";
import colImg from "../assets/col-2.png";
import profileAvatar from "../assets/profile-avatar.png";
import profileAvatar2 from "../assets/profile-avatar2.png";
import profileAvatar3 from "../assets/profile-avatar3.png";
import promptTemplateImg from "../assets/prompt-template-img.png";
import toggleImg from "../assets/toggle-img.png";
import bgCard from "../assets/bg-card.png";
import generateIcon from "../assets/gallery-icon.png";
import createdPrompt from "../assets/created-prompt.svg";
import { useNavigate } from "react-router-dom";

const cardBgStyle = {
  backgroundImage: `url(${bgCard})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const MainSection: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true); // toggle on left by default
  const navigate = useNavigate();

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center p-4 transition-colors duration-300 ${
        darkMode ? "bg-[#18192A]" : "bg-[#F5F6FA]"
      } md:p-6`}
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 items-stretch">
        {/* Column 1 */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Effortless Prompt Perfection */}
          <div
            className="rounded-3xl p-6 shadow-lg text-[#F3F6FF] flex flex-col justify-between h-full"
            style={cardBgStyle}
          >
            <div className="flex flex-col gap-2 mb-2">
              <img
                src={pLogo}
                alt="PromptPal Logo"
                className="w-7 h-7 rounded-lg"
              />
              <div className="font-semibold text-2xl md:text-4xl leading-tight tracking-tight mb-4">
                Effortless
                <br />
                Prompt
                <br />
                Perfection
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mt-2 text-xs text-[#AEB8D0]">
                <span className="inline-block px-2 py-1 rounded text-white font-semibold">
                  14 days trial
                </span>
                <br />
                <span className="opacity-70">after – $5/month</span>
              </div>
            </div>
          </div>

          {/* 12K happy users */}
          <div
            className="rounded-3xl p-6 shadow-lg text-[#F3F6FF] flex flex-col items-center justify-center"
            style={cardBgStyle}
          >
            <div className="text-2xl md:text-3xl font-bold text-[#FFB86C]">
              12K
            </div>
            <div className="text-xs text-[#AEB8D0] mb-2">happy users</div>
            <div className="flex -space-x-2 mb-2">
              <img
                src={profileAvatar}
                alt="user1"
                className="w-8 h-8 rounded-full border-2 border-white shadow"
              />
              <img
                src={profileAvatar2}
                alt="user2"
                className="w-8 h-8 rounded-full border-2 border-white shadow"
              />
              <img
                src={profileAvatar3}
                alt="user3"
                className="w-8 h-8 rounded-full border-2 border-white shadow"
              />
            </div>
          </div>

          {/* Generate Button */}
          <div
            className="rounded-3xl p-6 shadow-lg flex items-center justify-center"
            style={cardBgStyle}
          >
            <button className="w-full py-3 px-6 rounded-full bg-gradient-to-br from-[#7B5FFF] to-[#9E57FF] text-white font-semibold text-lg shadow hover:opacity-90 transition flex items-center justify-center gap-2" onClick={() => navigate('/slider')}>
              <img
                src={generateIcon}
                alt="icon"
                className="w-5 h-5 object-contain"
              />
              Generate
            </button>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex-1 md:flex-[2] flex items-center justify-center">
          <img
            src={colImg}
            alt="col-img"
            className="w-full h-auto object-contain max-w-[300px] md:max-w-none"
          />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Toggle Button */}
          <div
            className="rounded-3xl p-6 shadow-lg flex items-center justify-center"
            style={cardBgStyle}
          >
            <button
              aria-label="Toggle dark mode"
              className={`w-14 h-8 rounded-full flex items-center px-1 transition-colors duration-300 border-2 ${
                darkMode
                  ? "bg-[#353657] border-[#7B5FFF]"
                  : "bg-[#E5E7EB] border-[#7B5FFF]"
              }`}
              onClick={() => setDarkMode((d) => !d)}
            >
              <span
                className={`w-6 h-6 rounded-full  transform transition-transform duration-300 flex items-center justify-center ${
                  darkMode
                    ? "translate-x-6 "
                    : "translate-x-0 bg-white border border-[#D1D5DB]"
                }`}
              >
                <img
                  src={toggleImg}
                  alt="toggle"
                  className="w-full h-full object-cover"
                />
              </span>
            </button>
          </div>

          {/* 25M created prompts */}
          <div
            className="rounded-3xl p-6 shadow-lg flex flex-col items-center text-[#F3F6FF]"
            style={cardBgStyle}
          >
            <div className="text-3xl md:text-5xl font-bold bg-gradient-to-br from-[#A07EFF] to-[#8A46FF] bg-clip-text text-transparent">
              25M
            </div>
            <img src={createdPrompt} className="w-16 md:w-auto" />
          </div>

          {/* Prompt templates */}
          <div
            className="rounded-3xl p-6 shadow-lg flex flex-col text-[#F3F6FF] "
            style={cardBgStyle}
          >
            <div className="font-semibold text-xl md:text-3xl mb-2 text-[#F3F6FF]">
              Prompt templates
            </div>
            <div className="text-xs mb-4 text-[#AEB8D0]">
              Use pre-made templates to jumpstart creativity.
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 rounded bg-[#353657] text-xs text-white">
                Rewrite
              </span>
              <span className="px-2 py-1 rounded bg-[#353657] text-xs text-white">
                14 days trial
              </span>
              <span className="px-2 py-1 rounded bg-[#353657] text-xs text-white">
                JPG
              </span>
              <span className="px-2 py-1 rounded bg-[#353657] text-xs text-white">
                PNG
              </span>
              <span className="px-2 py-1 rounded bg-[#353657] text-xs text-white">
                PDF
              </span>
            </div>
            <img
              src={promptTemplateImg}
              alt="Prompt templates"
              className="w-full object-contain rounded mb-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
