"use client";

import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

interface FilterTagProps {
  label: string;
  onRemove: () => void;
}

const FilterTag = ({ label, onRemove }: FilterTagProps) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm bg-[var(--color-yellow)] bg-opacity-10 text-[var(--color-fg)]"
  >
    {label}
    <button
      onClick={onRemove}
      className="hover:text-[var(--color-red)] transition-colors"
    >
      <FiX size={14} />
    </button>
  </motion.span>
);

export default FilterTag;
