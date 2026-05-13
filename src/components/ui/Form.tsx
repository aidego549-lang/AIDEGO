import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({ label, className = "", ...props }: InputProps) => (
  <div className="mb-6">
    <label className="block text-sm font-bold text-text mb-2 uppercase tracking-tight">
      {label}
    </label>
    <input
      className={`w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body ${className}`}
      {...props}
    />
  </div>
);

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const Textarea = ({ label, className = "", ...props }: TextareaProps) => (
  <div className="mb-6">
    <label className="block text-sm font-bold text-text mb-2 uppercase tracking-tight">
      {label}
    </label>
    <textarea
      className={`w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-body min-h-[120px] ${className}`}
      {...props}
    />
  </div>
);

interface CheckboxProps {
  label: string;
  id: string;
  name?: string;
  className?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Checkbox = ({ label, id, name, className = "", checked, onChange }: CheckboxProps) => (
  <div className={`flex items-center gap-3 mb-3 cursor-pointer group ${className}`}>
    <div className="relative flex items-center">
      <input
        type="checkbox"
        id={id}
        name={name}
        className="peer sr-only"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <div className="w-5 h-5 border-2 border-border rounded-md peer-checked:bg-primary peer-checked:border-primary transition-all group-hover:border-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="white"
          className="w-3.5 h-3.5 mx-auto mt-0.5 opacity-0 peer-checked:opacity-100 transition-opacity"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </div>
    </div>
    <label htmlFor={id} className="text-text cursor-pointer select-none font-medium">
      {label}
    </label>
  </div>
);

interface ToggleProps {
  label: string;
  options: string[];
  activeOption: string;
  onChange: (option: string) => void;
}

export const SegmentedToggle = ({ label, options, activeOption, onChange }: ToggleProps) => (
  <div className="mb-6">
    <label className="block text-sm font-bold text-text mb-3 uppercase tracking-tight">
      {label}
    </label>
    <div className="flex bg-surface p-1 rounded-xl border border-border">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-bold transition-all ${
            activeOption === option
              ? "bg-primary text-white shadow-md"
              : "text-text-muted hover:text-text"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);
