const Accordion = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div
      className={`py-2 rounded-2xl transition-colors duration-300 ${
        isOpen ? "bg-[#F9F9F9]" : "bg-transparent"
      }`}
    >
      {/* Accordion Header */}
      <button
        onClick={onToggle}
        className={`flex justify-between items-center w-full text-left uppercase font-bold 
        text-base sm:text-lg lg:text-xl
        leading-snug py-3 px-4 transition-colors duration-300 ${
          isOpen ? "text-[#8DEB02]" : "text-gray-800"
        }`}
      >
        <span className="text-left">{question}</span>

        {/* Rotating Plus -> Minus */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>

      {/* Accordion Content */}
      <div
        className={`grid overflow-hidden transition-all duration-300 text-gray-600 
        ease-in-out font-normal 
        text-sm sm:text-base lg:text-[0.95rem] leading-relaxed px-4  
        ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 py-2"
            : "grid-rows-[0fr] opacity-0 py-0"
        }`}
      >
        <div className="overflow-hidden text-left">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
