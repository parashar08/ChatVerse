const FeatureCard = ({
  icon: Icon,
  title,
  description,
  iconColor = "text-white",
  iconBg = "bg-gradient-to-tr from-blue-500 to-blue-700",
}) => {
  return (
    <div
      className="flex flex-col items-center text-center p-5 border border-gray-200 
      rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm 
      transition-all duration-300 ease-in-out hover:shadow-md 
      hover:scale-[1.02] hover:-translate-y-[2px]"
    >
      <div
        className={`w-12 h-12 mb-4 flex items-center justify-center rounded-full 
        ${iconBg} ${iconColor} shadow-md`}
      >
        <Icon size={24} />
      </div>

      <h4 className="text-base font-semibold text-gray-800 mb-2 transition-colors duration-300 hover:text-blue-700">
        {title}
      </h4>

      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
