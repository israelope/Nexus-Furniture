import React, { useState } from "react";

const ColorSelector = () => {
  const colors = [
    { bg: "#e91e63" },
    { bg: "#4caf50" },
    { bg: "#2196f3" },
    { bg: "#ff9800" },
    { bg: "#9c27b0" },
  ];

  const [activeColor, setActiveColor] = useState(null);

  return (
    <div className="flex gap-2">
      {colors.map((color, index) => {
        const isActive = activeColor === color.bg;

        return (
          <div
            key={index}
            onClick={() => setActiveColor(color.bg)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300`}
            style={{
              backgroundColor: color.bg,
              border: `2px solid ${isActive ? color.bg : "transparent"}`,
              transform: isActive ? "scale(1.2)" : "scale(1)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.border = `2px solid ${color.bg}`)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.border = `2px solid ${
                isActive ? color.bg : "transparent"
              }`)
            }
          ></div>
        );
      })}
    </div>
  );
};

export default ColorSelector;
