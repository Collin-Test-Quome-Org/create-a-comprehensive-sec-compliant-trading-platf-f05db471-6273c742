import { motion } from 'framer-motion';

// Fake sparkline chart, uses color prop
export const PriceChart = ({ color = 'blue-500' }: { color?: string }) => {
  // Fake points for sparkline
  const points = [2, 4, 3.5, 5, 4, 5.8, 5.5, 7, 6, 8, 7.5, 9];
  const max = Math.max(...points);
  const min = Math.min(...points);
  return (
    <svg width="100%" height="40" viewBox="0 0 120 40" className="overflow-visible">
      <motion.polyline
        fill="none"
        stroke={`var(--tw-${color})`}
        strokeWidth="3"
        points={points.map((p, i) => `${i * 11},${40 - ((p - min) / (max - min)) * 36}`).join(' ')}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
    </svg>
  );
};
