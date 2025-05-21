import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  style?: React.CSSProperties;
};

const AnimatedLayout = ({ children, style }: Props): React.JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedLayout;
