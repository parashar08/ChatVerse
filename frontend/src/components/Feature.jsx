const Feature = ({ icon, title, desc }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="text-purple-600 mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{desc}</p>
        </div>
    )
}

export default Feature;