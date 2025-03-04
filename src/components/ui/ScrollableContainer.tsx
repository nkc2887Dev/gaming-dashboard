import React, { ReactNode, useRef, useState, useEffect } from "react";

interface ScrollableContainerProps {
  children: ReactNode;
  className?: string;
}

const ScrollableContainer: React.FC<ScrollableContainerProps> = ({
  children,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current) {
        setIsScrollable(
          containerRef.current.scrollHeight > containerRef.current.clientHeight,
        );
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => window.removeEventListener("resize", checkOverflow);
  }, [children]);

  return (
    <div
      ref={containerRef}
      className={`relative ${isScrollable ? "overflow-y-auto" : "overflow-hidden"} ${className}`}
      style={{
        minHeight: "0vh",
        maxHeight: isScrollable ? "80vh" : "auto",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollableContainer;
