import { motion } from "framer-motion"

export function LoadingText({
  children,
  as: Component = "p",
  className = "",
  duration = 1,
  zDistance = 10,
  xDistance = 2,
  yDistance = -2,
  spread = 1,
  scaleDistance = 1.1,
  rotateYDistance = 10,
}) {

  const MotionComponent = motion(Component)

  return (
    <MotionComponent
      className={`relative inline-block ${className}`}
      style={{
        perspective: "500px",
        color: "#a1a1aa"
      }}
    >
      {children.split("").map((char, i) => {

        const delay = (i * duration * (1 / spread)) / children.length

        return (
          <motion.span
            key={i}
            style={{ display: "inline-block", whiteSpace: "pre" }}
            initial={{
              translateZ: 0,
              scale: 1,
              rotateY: 0,
              color: "#a1a1aa",
            }}
            animate={{
              translateZ: [0, zDistance, 0],
              translateX: [0, xDistance, 0],
              translateY: [0, yDistance, 0],
              scale: [1, scaleDistance, 1],
              rotateY: [0, rotateYDistance, 0],
              color: ["#a1a1aa", "#ffffff", "#a1a1aa"],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          >
            {char}
          </motion.span>
        )
      })}
    </MotionComponent>
  )
}