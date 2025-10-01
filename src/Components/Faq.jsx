import { useState } from 'react'
import Accordion from './Accordion'
import { faqData } from '.'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <main className="p-6 md:p-12 lg:p-20">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Side - Title & Description */}
        <div className="lg:w-2/5">
          <h1 className="uppercase font-bold text-xl sm:text-2xl lg:text-3xl leading-snug p-2">
            Frequently Asked Questions (FAQ)
          </h1>
          <p className="text-gray-600 p-2 font-normal text-sm sm:text-base lg:text-lg leading-relaxed">
            We answer some of the most common questions about our furniture collections, services, and design approach. Whether you’re curious about our latest home collections, customization options, or how we ensure quality and comfort in every piece, we’re here to help.
          </p>
        </div>

        {/* Right Side - Accordion */}
        <div className="lg:w-3/5 h-fit p-2">
          {faqData.map((item, i) => (
            <Accordion
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Faq
