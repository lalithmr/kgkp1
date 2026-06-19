"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverType, setHoverType] = useState<"button" | "link" | "card" | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const button = target.closest("button") || target.closest(".primary-button") || target.closest(".secondary-button");
      const link = target.closest("a");
      const card = target.closest(".premium-card") || target.closest(".service-card");

      if (button) {
        setIsHovering(true);
        setHoverType("button");
      } else if (link) {
        setIsHovering(true);
        setHoverType("link");
      } else if (card) {
        setIsHovering(true);
        setHoverType("card");
      } else {
        setIsHovering(false);
        setHoverType(null);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      width: 20,
      height: 20,
      backgroundColor: "rgba(43, 76, 101, 0.4)",
      border: "1px solid rgba(43, 76, 101, 0.8)",
      mixBlendMode: "normal" as any,
    },
    button: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      width: 48,
      height: 48,
      backgroundColor: "rgba(43, 76, 101, 0.15)",
      border: "1px solid rgba(43, 76, 101, 0.5)",
      boxShadow: "0 0 15px rgba(43, 76, 101, 0.3)",
      mixBlendMode: "normal" as any,
    },
    link: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      width: 32,
      height: 32,
      backgroundColor: "rgba(43, 76, 101, 0)",
      border: "2px solid rgba(43, 76, 101, 0.6)",
      mixBlendMode: "normal" as any,
    },
    card: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      width: 60,
      height: 60,
      backgroundColor: "rgba(43, 76, 101, 0.05)",
      border: "1px solid rgba(43, 76, 101, 0.3)",
      mixBlendMode: "normal" as any,
    },
  };

  return (
    <>
      <style>{`
        @media (min-width: 1024px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full transition-shadow duration-300"
        animate={isHovering && hoverType ? hoverType : "default"}
        variants={variants}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
    </>
  );
}
