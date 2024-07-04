"use client";

import React, {useEffect, useState} from "react";

interface DynamicGridProps {
  cellSize: number;
  lineColor: string;
}

const DynamicGrid: React.FC<DynamicGridProps> = ({ cellSize, lineColor }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="w-full h-full"
           style={{backgroundImage: `linear-gradient(to right, ${lineColor} 1px, transparent 1px),
                                      linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)`,
                    backgroundSize: `${cellSize}px ${cellSize}px`,
                    mask: `radial-gradient(circle 1000px at ${mousePosition.x}px ${mousePosition.y}px,
                            white 20%, rgba(255, 255, 255, 0.1) 100%)`,
                    WebkitMask: `radial-gradient(circle 1000px at ${mousePosition.x}px ${mousePosition.y}px,
                                  white 20%, rgba(255, 255, 255, 0.1) 100%)`,
          }}
      />
    </div>
  );
};

export default DynamicGrid;
