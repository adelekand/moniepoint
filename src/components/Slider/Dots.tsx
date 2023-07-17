import { motion } from "framer-motion";

interface DotsProps {
  count: number;
  active: number;
  onClick: (id: number) => void;
}

const Dots = ({ count, active, onClick }: DotsProps) => (
  <div className="dot-container">
    {[...Array(count).keys()].map(id => (
      <motion.div
        key={id}
        onClick={() => onClick(id)}
        className="dot"
        initial={false}
        animate={{
          scale: active === id ? 1.5 : 1,
          opacity: active === id ? 1 : 0.5,
        }}
      />
    ))}
  </div>
)

export default Dots;