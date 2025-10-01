import ArrowTop from '../assets/Icons/ArrowTop.png'
import ArrowDown from '../assets/Icons/ArrowDown.png'

const Accordion = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div
      className={`py-2 rounded-2xl transition-colors duration-300 ${
        isOpen ? 'bg-[#F9F9F9]' : 'bg-transparent'
      }`}
    >
      {/* Accordion Header */}
      <button
        onClick={onToggle}
        className={`flex justify-between items-center w-full text-left uppercase font-bold 
        text-base sm:text-lg lg:text-xl   /* smaller + consistent */
        leading-snug py-3 px-4 transition-colors duration-300 ${
          isOpen ? 'text-[#3B3B98]' : 'text-gray-800'
        }`}
      >
        <span className="text-left">{question}</span>

        {isOpen ? (
          <img className="w-4 h-3" src={ArrowTop} alt="collapse" />
        ) : (
          <img className="w-4 h-3" src={ArrowDown} alt="expand" />
        )}
      </button>

      {/* Accordion Content */}
      <div
        className={`grid overflow-hidden transition-all duration-300 text-gray-600 
        ease-in-out font-normal 
        text-sm sm:text-base lg:text-[0.95rem] leading-relaxed px-4  
        ${
          isOpen
            ? 'grid-rows-[1fr] opacity-100 py-2'
            : 'grid-rows-[0fr] opacity-0 py-0'
        }`}
      >
        <div className="overflow-hidden text-left">{answer}</div>
      </div>
    </div>
  )
}

export default Accordion
