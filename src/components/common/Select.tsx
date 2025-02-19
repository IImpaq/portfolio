"use client";

import { Fragment } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { FiCheck, FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

interface Option {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  className?: string;
}

export default function Select({
  options,
  value,
  onChange,
  label,
  placeholder = "Select an option",
  className = "",
}: SelectProps) {
  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-[var(--color-gray)] mb-2">
          {label}
        </label>
      )}
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <div>
            <ListboxButton className="relative w-full cursor-pointer rounded-lg bg-[var(--color-bg)] border border-[var(--color-gray)] border-opacity-20 py-2 pl-4 pr-10 text-left focus:outline-none focus:border-[var(--color-yellow)] transition-colors sm:text-sm">
              <span className="block truncate text-[var(--color-fg)]">
                {selectedOption ? (
                  <div className="flex items-center gap-2">
                    {selectedOption.icon}
                    <span>{selectedOption.label}</span>
                  </div>
                ) : (
                  <span className="text-[var(--color-gray)]">
                    {placeholder}
                  </span>
                )}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <motion.div
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiChevronDown
                    className="h-5 w-5 text-[var(--color-gray)]"
                    aria-hidden="true"
                  />
                </motion.div>
              </span>
            </ListboxButton>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-[var(--color-bg)] border border-[var(--color-gray)] border-opacity-20 py-1 text-base shadow-lg focus:outline-none sm:text-sm">
                {options.map((option) => (
                  <ListboxOption
                    key={option.value}
                    value={option.value}
                    className={({ active, selected }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                        active
                          ? "bg-[var(--color-yellow)] bg-opacity-10 text-[var(--color-yellow)]"
                          : selected
                            ? "text-[var(--color-yellow)]"
                            : "text-[var(--color-fg)]"
                      }`
                    }
                  >
                    {({ selected }) => (
                      <div>
                        <span className="flex items-center gap-2 truncate">
                          {option.icon}
                          <span>{option.label}</span>
                        </span>
                        {selected && (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[var(--color-yellow)]">
                            <FiCheck className="h-5 w-5" aria-hidden="true" />
                          </span>
                        )}
                      </div>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        )}
      </Listbox>
    </div>
  );
}
