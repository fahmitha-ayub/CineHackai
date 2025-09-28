import React, { useEffect, useRef, useState } from "react";
import {
  Mic,
  Code,
  Lightbulb,
  Film,
  Star,
  ChevronRight,
  Play,
  Users,
  X,
} from "lucide-react";
import PillNav from "../components/PillNav";
import Footer from "../footer";

const PreEventsPage = () => {
  const filmStripRef = useRef(null);
  const [showGuidelinesModal, setShowGuidelinesModal] = useState(false);

  // Pre-event activities with E-Pookalam Contest as first event
  const previewEvents = [
    {
      id: 1,
      icon: <Star size={32} />,
      color: "#f59e0b",
      title: "E-Pookalam Contest",
      description:
        "Create AI-generated digital Pookalam designs using tools like DALL·E, MidJourney, or Stable Diffusion",
      isActive: true,
      registrationUrl: "#",
      deadline: "10th September 2025, 11:59 PM",
      eligibility: "Open to all college students",
      regFee: "30₹",
    },
    {
      id: 2,
      icon: <Film size={32} />,
      color: "#3b82f6",
      title: "Guess the Movie",
      description:
        "Guess the movie as fast as you can! Every second counts — only the sharpest eyes and quickest minds will make it to the top.",
      isActive: true,
      registrationUrl: "",
      deadline: "17th September 2025, 7:00 PM",
      eligibility: "Open to all college students",
      regFee: "Free",
      prizes:
        "Top 3 winners get free pass to CineHack.AI offline pre-event at FISAT !!!",
      benefits: "All participants receive duty leave",
    },
    {
      id: 3,
      icon: <Code size={32} />,
      color: "#8b5cf6",
      title: "Intro to Git and GitHub",
      description:
        "Learn version control fundamentals with Git and GitHub in this comprehensive online session by Navneeth M Nambiar, System Engineer at TCS.",
      isActive: true,
      registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdK_yNIqw5HjGfXJR-fBt4v67PQ_g2YKJC8q37QfxRecanoIA/viewform",
      deadline: "1st October 2025, 7:00 PM - 8:00 PM",
      eligibility: "Open to all students",
      regFee: "Free",
      speaker: "Navneeth M Nambiar",
      speakerTitle: "System Engineer at Tata Consultancy Services",
      sessionType: "Online Session",
    },
    {
      id: 4,
      icon: <Users size={32} />,
      color: "#ec4899",
      title: "The Art of Balance: Managing Studies, Career and Passions",
      description:
        "Discover strategies to balance academic pursuits, career goals, and personal passions in this insightful session by Agnes Shibu, Software Developer at IBM.",
      isActive: true,
      registrationUrl: "https://docs.google.com/forms/d/15R1JMzAMC49Q3s41AsotwCocYuNHxuC4fPl1_w8VMqU/edit",
      deadline: "30th September 2025, 7:00 PM - 8:00 PM",
      eligibility: "Open to all students",
      regFee: "Free",
      speaker: "Agnes Shibu",
      speakerTitle: "Software Developer at IBM",
      sessionType: "Online Session",
    },
    { id: 5, icon: <Users size={32} />, color: "#10b981" },
  ];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Animation effects
  useEffect(() => {
    const animateFilmStrip = () => {
      if (filmStripRef.current) {
        filmStripRef.current.style.transform = "translateX(-20px)";
        setTimeout(() => {
          if (filmStripRef.current) {
            filmStripRef.current.style.transform = "translateX(0px)";
          }
        }, 3000);
      }
    };

    const interval = setInterval(animateFilmStrip, 6000);
    animateFilmStrip(); // Run immediately

    return () => clearInterval(interval);
  }, []);

  // Guidelines Modal Component
  const GuidelinesModal = () => {
    if (!showGuidelinesModal) return null;

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-500/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Modal Header */}
          <div className="sticky top-0 bg-gradient-to-r from-red-600 to-orange-500 p-6 rounded-t-2xl border-b border-yellow-500/30">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <Star className="mr-3" size={28} />
                  E-Pookalam Contest Guidelines
                </h2>
                <p className="text-yellow-200 mt-1">
                  Read carefully before submitting your entry
                </p>
              </div>
              <button
                onClick={() => setShowGuidelinesModal(false)}
                className="text-white hover:text-yellow-300 transition-colors p-2"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3 flex items-center">
                    <Star className="mr-2" size={20} />
                    Theme & Tools
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    Create a digital Pookalam using AI tools such as:
                  </p>
                  <ul className="text-gray-300 text-sm space-y-1 ml-4">
                    <li>• DALL·E (OpenAI)</li>
                    <li>• MidJourney</li>
                    <li>• Stable Diffusion</li>
                    <li>• Canva AI</li>
                    <li>• Or any other AI art generator</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-900/20 to-teal-900/20 border border-green-500/20 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3 flex items-center">
                    <Code className="mr-2" size={20} />
                    Prompt Submission
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    You <strong>must submit the exact prompt</strong> used to
                    generate your artwork along with the image in the Google
                    Form. This is mandatory for evaluation.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3 flex items-center">
                    <Lightbulb className="mr-2" size={20} />
                    Originality Required
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Only <strong>original prompts and generated images</strong>{" "}
                    will be accepted. Copying or reusing existing AI
                    art/templates will lead to{" "}
                    <span className="text-red-400 font-semibold">
                      disqualification
                    </span>
                    .
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/20 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3 flex items-center">
                    <Film className="mr-2" size={20} />
                    Format Requirements
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    Submit your design in:
                  </p>
                  <ul className="text-gray-300 text-sm space-y-1 ml-4">
                    <li>
                      • <strong>JPEG</strong> or <strong>PNG</strong> or{" "}
                      <strong>JPG</strong> format
                    </li>
                    <li>• clear visibility</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-500/20 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3 flex items-center">
                    <Users className="mr-2" size={20} />
                    Eligibility
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Open to <strong>all college students</strong>. Show your
                    creativity and celebrate Kerala's rich cultural heritage
                    through AI art!
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3 flex items-center">
                    💰 Registration Fee
                  </h3>
                  <div className="text-center">
                    <p className="text-green-400 font-bold text-3xl">30₹</p>
                    <p className="text-gray-300 text-sm mt-2">
                      Per participant
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-900/40 to-orange-900/40 border-2 border-red-500/40 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-red-400 mb-3 flex items-center">
                    ⏰ Important Deadline
                  </h3>
                  <div className="text-center">
                    <p className="text-white font-bold text-2xl">
                      10th September 2025
                    </p>
                    <p className="text-red-200 text-lg">11:59 PM</p>
                    <p className="text-red-300 text-sm mt-2">Don't miss out!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submission Steps */}
            <div className="bg-gradient-to-br from-gray-800/40 to-black/40 border border-gray-600/30 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">
                How to Submit
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/20">
                  <div className="text-2xl font-bold text-blue-400 mb-2">1</div>
                  <p className="text-white text-sm">
                    Create your AI Pookalam using any AI tool
                  </p>
                </div>
                <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/20">
                  <div className="text-2xl font-bold text-green-400 mb-2">
                    2
                  </div>
                  <p className="text-white text-sm">
                    Save your exact prompt and image (JPEG/PNG)
                  </p>
                </div>
                <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/20">
                  <div className="text-2xl font-bold text-purple-400 mb-2">
                    3
                  </div>
                  <p className="text-white text-sm">
                    Submit both through the Google Form
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd60OgkItSWCTP_MfDxiapTLPWAAL4MPaAHz6IA9gqKsk88IQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold rounded-lg hover:from-green-500 hover:to-green-400 transition-all duration-300 shadow-lg"
              >
                <span>Submit Your Entry</span>
                <ChevronRight size={20} className="ml-2" />
              </a>
              <button
                onClick={() => setShowGuidelinesModal(false)}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-500 text-gray-300 font-bold rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-300"
              >
                Close Guidelines
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const EventCard = ({ event }) => {
    if (event.isActive) {
      // E-Pookalam Contest Card
      if (event.id === 1) {
        return (
          <div className="relative group cursor-pointer">
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 border-2 border-orange-500 shadow-[0_0_0_2px_rgba(255,122,0,0.15)]  hover:scale-105 transition-all duration-300">
              {/* Badge */}
              <div className="px-4 py-2 bg-orange-700/80 border border-orange-500 text-white font-bold text-sm rounded mb-4">
                PRE-EVENT #1 • DIGITAL CONTEST
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-orange-500/20 border border-orange-500 rounded flex items-center justify-center mb-4 text-orange-400">
                <div className="text-white">{event.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2 border-b-2 border-orange-500 pb-1">
                {event.title}
              </h3>

              {/* Description */}
              <p className="text-white/90 text-sm mb-4 flex-grow">
                {event.description}
              </p>

              {/* Key Guidelines */}
              <div className="bg-gray-800/50 border border-gray-600 rounded p-4 mb-4 text-sm">
                <div className="text-gray-300 font-bold mb-2 flex items-center">
                  <Lightbulb size={16} className="mr-2" />
                  Contest Details:
                </div>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Create digital Pookalam designs</li>
                  <li>• Use AI tools (DALL·E, MidJourney, etc.)</li>
                  <li>• Submit original prompts only</li>
                  <li>• Format: JPEG/PNG</li>
                </ul>
              </div>

              {/* Deadline */}
              <div className="bg-gray-800/30 border border-gray-600 rounded p-3 mb-4">
                <div className="text-gray-300 font-semibold text-sm">
                  📅 Deadline
                </div>
                <div className="text-white text-sm font-bold">
                  {event.deadline}
                </div>
              </div>

              {/* Registration Fee */}
              <div className="bg-gray-800/30 border border-gray-600 rounded p-3 mb-4">
                <div className="text-gray-300 font-semibold text-sm">
                  💰 Registration Fee
                </div>
                <div className="text-white text-sm font-bold">
                  {event.regFee}
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setShowGuidelinesModal(false)}
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 text-white font-bold rounded hover:bg-gray-600 transition-colors duration-300"
              >
                <span>Submissions Closed</span>
                <ChevronRight size={16} className="ml-2" />
              </button>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500/60 via-orange-400/60 to-transparent rounded-b"></div>
            </div>
          </div>
        );
      }

      // Guess the Movie Card
      if (event.id === 2) {
        return (
          <div className="relative group cursor-pointer">
            <div className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500 rounded-lg overflow-hidden h-[655px] hover:scale-105 transition-all duration-300">
              {/* Film strip decorative elements */}
              <div className="absolute inset-0 opacity-10">
                {/* Film strip perforations */}
                <div className="absolute left-2 top-0 bottom-0 w-4 bg-gray-700 flex flex-col justify-evenly items-center">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-black rounded-full"
                    ></div>
                  ))}
                </div>
                <div className="absolute right-2 top-0 bottom-0 w-4 bg-gray-700 flex flex-col justify-evenly items-center">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-black rounded-full"
                    ></div>
                  ))}
                </div>
                {/* Central movie elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
                  <div className="w-32 h-32 border-4 border-gray-600 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col">
                {/* Badge */}
                <div className="inline-block mb-4">
                  <div className="px-4 py-2 bg-orange-700/80 border border-orange-500 text-white font-bold text-sm rounded">
                    PRE-EVENT #2 • MOVIE CONTEST
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-orange-900 border border-orange-300 rounded flex items-center justify-center">
                    <div className="text-white">{event.icon}</div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white border-b border-orange-500/50 mb-3">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-white/90 text-sm mb-4 flex-grow">
                  {event.description}
                </p>

                {/* Contest Details */}
                <div className="bg-gray-800/50 border border-gray-600 rounded p-4 mb-4 text-sm">
                  <div className="text-gray-300 font-bold mb-2 flex items-center">
                    <Film size={16} className="mr-2" />
                    Contest Highlights:
                  </div>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Top 3 winners get free pass to offline pre-event</li>
                    <li>• All participants receive duty leave</li>
                  </ul>
                </div>

                {/* Event Details */}
                <div className="bg-gray-800/30 border border-gray-600 rounded p-3 mb-4">
                  <div className="text-gray-300 font-semibold text-sm">
                    📅 Date & Time
                  </div>
                  <div className="text-white text-sm font-bold">
                    {event.deadline}
                  </div>
                </div>

                {/* Registration Fee */}
                <div className="bg-gray-800/30 border border-gray-600 rounded p-3 mb-4">
                  <div className="text-gray-300 font-semibold text-sm">
                    💰 Registration Fee
                  </div>
                  <div className="text-white text-sm font-bold">
                    {event.regFee}
                  </div>
                </div>

                {/* CTA Button */}
                <a className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 text-white font-bold rounded hover:bg-gray-600 transition-colors duration-300">
                  <span>Registrations Closed</span>
                  <ChevronRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        );
      }

      // Intro to Git and GitHub Card
      if (event.id === 3) {
        const currentDate = new Date();
        const eventDate = new Date("2025-10-01T19:00:00");
        const isRegistrationClosed = currentDate > eventDate;

        return (
          <div className="relative group cursor-pointer">
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 border-2 border-orange-500 shadow-[0_0_0_2px_rgba(255,122,0,0.15)]  hover:scale-105 transition-all duration-300">
              {/* Badge */}
              <div className="px-4 py-2 bg-orange-700/80 border border-orange-500 text-white font-bold text-sm rounded mb-4">
                PRE-EVENT #3 • {event.sessionType}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-orange-500/20 border border-orange-500 rounded flex items-center justify-center mb-4 text-orange-400">
                <div className="text-white">{event.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2 border-b-2 border-orange-500 pb-1">
                {event.title}
              </h3>

              {/* Description */}
              <p className="text-white/90 text-sm mb-4 flex-grow">
                {event.description}
              </p>

              {/* Session Info */}
              <div className="bg-gray-800/50 border border-gray-600 rounded p-4 mb-4 text-sm">
                <div className="text-gray-300 font-bold mb-2 flex items-center">
                  <Code size={16} className="mr-2" />
                  Session Details:
                </div>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Speaker: {event.speaker}</li>
                  <li>• {event.speakerTitle}</li>
                  <li>• {event.sessionType}</li>
                </ul>
              </div>

              {/* Event Details */}
              <div className="bg-gray-800/30 border border-gray-600 rounded p-3 mb-4">
                <div className="text-gray-300 font-semibold text-sm">
                  📅 Date & Time
                </div>
                <div className="text-white text-sm font-bold">
                  {event.deadline}
                </div>
              </div>

              {/* Registration Fee */}
              <div className="bg-gray-800/30 border border-gray-600 rounded p-3 mb-4">
                <div className="text-gray-300 font-semibold text-sm">
                  💰 Registration Fee
                </div>
                <div className="text-white text-lg font-bold">
                  {event.regFee}
                </div>
              </div>

              {/* CTA Button */}
              <a
                // href={event.registrationUrl}
                // target="_blank"
                // rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-6 py-3 font-bold rounded transition-colors duration-300 ${
                  isRegistrationClosed
                    ? "bg-gray-700 text-gray-300 cursor-not-allowed"
                    : "bg-orange-700 text-white hover:bg-gray-600"
                }`}
              >
                <span>
                  {isRegistrationClosed
                    ? "Registration Closed"
                    : "Register Now"}
                </span>
                <ChevronRight size={16} className="ml-2" />
              </a>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500/60 via-orange-400/60 to-transparent rounded-b"></div>
            </div>
          </div>
        );
      }

      // The Art of Balance Card
      if (event.id === 4) {
        const currentDate = new Date();
        const eventDate = new Date('2025-09-30T19:00:00');
        const isRegistrationClosed = currentDate > eventDate;

        return (
          <div className="relative group cursor-pointer">
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 border-2 border-orange-500 shadow-[0_0_0_2px_rgba(255,122,0,0.15)] hover:scale-105 transition-all duration-300">
              {/* Film strip decorative elements */}
              <div className="absolute inset-0 opacity-10">
                {/* Film strip perforations */}
                <div className="absolute left-2 top-0 bottom-0 w-4 bg-gray-700 flex flex-col justify-evenly items-center">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-black rounded-full"></div>
                  ))}
                </div>
                <div className="absolute right-2 top-0 bottom-0 w-4 bg-gray-700 flex flex-col justify-evenly items-center">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-black rounded-full"></div>
                  ))}
                </div>
              </div>

              {/* Badge */}
              <div className="px-4 py-2 bg-orange-700/80 border border-orange-500 text-white font-bold text-sm rounded mb-4">
                PRE-EVENT #4 • {event.sessionType}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-orange-500/20 border border-orange-500 rounded flex items-center justify-center mb-4 text-orange-400">
                <div className="text-white">{event.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2 border-b border-orange-500/50 pb-1">
                {event.title}
              </h3>

              {/* Description */}
              <p className="text-white/90 text-sm mb-4 flex-grow">
                {event.description}
              </p>

              {/* Session Info */}
              <div className="bg-gray-800/50 border border-gray-600 rounded p-4 mb-4 text-sm">
                <div className="text-gray-300 font-bold mb-2 flex items-center">
                  <Users size={16} className="mr-2" />
                  Session Details:
                </div>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Speaker: {event.speaker}</li>
                  <li>• {event.speakerTitle}</li>
                  <li>• {event.sessionType}</li>
                </ul>
              </div>

              {/* Event Details */}
              <div className="bg-gray-800/30 border border-gray-600 rounded p-3 mb-4">
                <div className="text-gray-300 font-semibold text-sm">
                  📅 Date & Time
                </div>
                <div className="text-white text-sm font-bold">
                  {event.deadline}
                </div>
              </div>

              {/* Registration Fee */}
              <div className="bg-gray-800/30 border border-gray-600 rounded p-3 mb-4">
                <div className="text-gray-300 font-semibold text-sm">
                  💰 Registration Fee
                </div>
                <div className="text-white text-lg font-bold">
                  {event.regFee}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-6 py-3 font-bold rounded transition-colors duration-300 ${
                  isRegistrationClosed 
                    ? 'bg-gray-700 text-gray-300 cursor-not-allowed' 
                    : 'bg-orange-700 text-white hover:bg-gray-600'
                }`}
              >
                <span>{isRegistrationClosed ? 'Registration Closed' : 'Register Now'}</span>
                <ChevronRight size={16} className="ml-2" />
              </a>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500/60 via-orange-400/60 to-transparent rounded-b"></div>
            </div>
          </div>
        );
      }
    }

    // Coming Soon Card for other events
    return (
      <div className="relative group cursor-pointer">
        {/* Film frame design with perforations */}
        <div className="relative bg-black border-4 border-gray-700 rounded-lg overflow-hidden min-h-[669px]">
          {/* Film perforations */}
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-gray-800 flex flex-col justify-evenly items-center z-10">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-3 h-3 bg-black rounded-full"></div>
            ))}
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-6 bg-gray-800 flex flex-col justify-evenly items-center z-10">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="w-3 h-3 bg-black rounded-full"></div>
            ))}
          </div>

          {/* Coming Soon Overlay */}
          <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-20 group-hover:bg-black/70 transition-all duration-500">
            {/* Film countdown style circle */}
            <div className="relative mb-6">
              <div className="w-20 h-20 border-4 border-yellow-400 rounded-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 border-4 border-transparent border-t-yellow-400 rounded-full animate-spin"></div>
                <span className="text-2xl font-bold text-yellow-400 z-10">
                  ?
                </span>
              </div>
            </div>

            {/* Coming Soon Badge */}
            <div className="relative">
              <div className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full border-2 border-yellow-400 shadow-lg">
                <span className="text-black font-bold text-lg tracking-wider">
                  COMING SOON
                </span>
              </div>

              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-md opacity-50 animate-pulse"></div>
            </div>
          </div>

          {/* Film grain effect */}
          <div
            className="absolute inset-0 opacity-10 z-30 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, transparent 50%, rgba(255,255,255,0.01) 50.1%),
                           radial-gradient(circle at 80% 20%, transparent 50%, rgba(255,255,255,0.01) 50.1%),
                           radial-gradient(circle at 40% 40%, transparent 50%, rgba(255,255,255,0.01) 50.1%)`,
              animation: "filmGrain 8s steps(10) infinite",
            }}
          ></div>

          {/* Frame number */}
          <div className="absolute bottom-2 right-8 text-gray-500 font-mono text-sm z-20">
            {String(event.id).padStart(2, "0")}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 relative overflow-hidden">
      {/* Navigation */}
      <PillNav
        logo="/src/star.png"
        logoAlt="CineHack Logo"
        items={[
          { label: "🢀 Back to Home", href: "/" },
          // { label: "About", href: "/#about" },
          // { label: "Timeline", href: "/#timeline" },
          // { label: "Pre-Events", href: "/pre-events" },
        ]}
        activeHref="/pre-events"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#f59e0b"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#ffffff"
      />

      {/* Guidelines Modal */}
      <GuidelinesModal />

      {/* Background effects */}

      {/* Animated film strip background */}
      <div
        ref={filmStripRef}
        className="absolute top-0 left-0 right-0 h-8 bg-gray-800 flex justify-center items-center opacity-20 transition-transform duration-3000 ease-in-out"
      >
        <div className="flex space-x-4">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 bg-black rounded-full flex-shrink-0"
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
            PRE-EVENT ACTIVITIES
          </h1>

          <div className="inline-block mb-8">
            <div className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-full border border-yellow-500/30">
              <Play className="text-yellow-400" size={20} />
              <span className="text-yellow-400 font-semibold tracking-wider">
                NOW LIVE
              </span>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Join our exciting pre-event activities starting with the E-Pookalam
            Contest! More workshops, tech talks, and networking sessions are
            coming soon.
          </p>
        </div>

        {/* Preview Events Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              EVENT LINEUP
            </span>
          </h2>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {previewEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        {/* Stay Updated */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-gray-900/40 to-black/40 rounded-2xl border border-gray-700/50 mb-36">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              The E-Pookalam Contest is now live! Create your AI-generated
              digital Pookalam and submit by 10th September 2025. More exciting
              pre-events will be announced soon!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center  ">
              <a
                href="https://makemypass.com/event/cinehack-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-400 to-red-600 rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                <span>Register for CineHack.ai</span>
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer className="" />
    </div>
  );
};

export default PreEventsPage;
