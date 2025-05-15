import Feature from "../components/Feature";
import { FiMessageSquare, FiVideo, FiFile, FiUser, FiMic } from 'react-icons/fi';
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 text-gray-800 flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Connect. Chat. Share.</h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl text-gray-700">ChatVerse lets you enjoy seemless 1-to-1 and group chats, share audio, video and files, and even make high-quality video calls - all in one beautiful, secure platform</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          <Feature icon={<FiMessageSquare size={28}/>} title="1-to-1 or Group chat" desc="Stay connected with private and group connections"/>
          <Feature icon={<FiVideo size={28}/>} title="Video calling" desc="Make smooth, high quality video calls with friends and relative."/>
          <Feature icon={<FiFile size={28}/>} title="File sharing" desc="Send images, video and documents instantly"/>
          <Feature icon={<FiMic size={28}/>} title="Voice notes" desc="Send quick audio messages on the go."/>
          <Feature icon={<FiUser size={28}/>} title="User friendly" desc="Beautiful and responsive design for all device."/>
        </div>

        <Link to='/register' className="mt-12 inline-block bg-purple-600 text-white px-6 py-3 rounded-full text-lg hover:bg-purple-700 transition">Get Started for Free</Link>
      </main>
    </div>
  )
}

export default Landing;
