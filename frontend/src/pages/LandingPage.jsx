import { Link } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { MdAudiotrack, MdVideocam } from "react-icons/md";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* hero section */}
      <section className="max-w-4xl mx-auto text-center py-22 md:py-30 px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-10 leading-tight">
          Connect with Anyone,
          <br /> Anywhere, Anytime
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-14">
          ChatVerse is your ultimate chat application enabling seamless
          one-to-one chats, group conversations, file sharing, and crystal-clear
          video calls across the globe.
        </p>
        <Link to="/home">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-3 rounded-md shadow-md transition cursor-pointer">
            Try ChatVerse Now
          </button>
        </Link>
      </section>

      {/* feature section now */}
      <section className="md:px-20 py-10 px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <FeatureCard
            icon={IoChatbubblesSharp}
            title="One-to-One Chat"
            description="Instant messaging with friends or colleagues in a private, secure environment."
          />
          <FeatureCard
            icon={FaUsers}
            title="Group Chat"
            description="Create and join groups to chat, collaborate, and share moments together."
          />
          <FeatureCard
            icon={MdAudiotrack}
            title="Audio, Video & Files"
            description="Share audio clips, videos, and files effortlessly with your contacts and groups."
          />
          <FeatureCard
            icon={MdVideocam}
            title="Global Video Calling"
            description="Stay connected face-to-face with high-quality video calls worldwide."
          />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
