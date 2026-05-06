"use client";
import { motion } from "framer-motion";

const HeadingComponent = ({ 
  children, 
  size = "large", 
  className = "", 
  style = {},
  gap = "0.25em",
  ...props 
}) => {
  const getFontSize = () => {
    switch (size) {
      case "small":
        return "clamp(1.5rem, 3vw, 2rem)";
      case "medium":
        return "clamp(2rem, 4vw, 2.5rem)";
      case "large":
        return "clamp(2.5rem, 5vw, 3.5rem)";
      case "xlarge":
        return "clamp(3rem, 6vw, 4rem)";
      default:
        return "clamp(2.5rem, 5vw, 3.5rem)";
    }
  };

  return (
    <motion.h1
      className={className}
      style={{
        fontSize: getFontSize(),
        fontWeight: "800",
        lineHeight: "1.1",
        letterSpacing: "-0.02em",
        color: "#1a1a1a",
        fontFamily: "var(--font-DM-Sans), sans-serif",
        display: "flex",
        flexDirection: "column",
        gap: gap,
        margin: "0",
        ...style,
      }}
      {...props}
    >
      {children}
    </motion.h1>
  );
};

export default HeadingComponent;
