// AnimateSection.jsx
const AnimateSection = ({ 
  children, 
  animation = "fade-up", // default animation
  duration = "1000",     // default duration (ms)
  delay = "0"            // default delay (ms)
}) => {
  return (
    <div 
      data-aos={animation} 
      data-aos-duration={duration} 
      data-aos-delay={delay}
    >
      {children}
    </div>
  )
}

export default AnimateSection;
