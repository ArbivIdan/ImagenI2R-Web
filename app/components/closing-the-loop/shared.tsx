import React from "react";
import Image from "next/image";
import AnimatedSection from "../layout/AnimatedSection";
import { playfair } from "../../../utils/fonts";

export const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  <AnimatedSection className="p-10 md:pe-56 text-primary-content academic-section" id={id}>
    <div className="max-w-4xl">
      <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${playfair.className}`}>{title}</h2>
      {children}
    </div>
  </AnimatedSection>
);

export const Figure = ({
  src,
  alt,
  width,
  height,
  label,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  label: string;
  caption: React.ReactNode;
  priority?: boolean;
}) => (
  <div className="bg-base-200 p-6 rounded-lg mb-6">
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      title="Open full-size image"
      className="flex justify-center bg-white rounded-lg p-2 cursor-zoom-in">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-lg"
        style={{ maxWidth: "100%", height: "auto" }}
        priority={priority}
      />
    </a>
    <p className="text-sm text-gray-600 mt-4 text-center">
      <strong>{label}:</strong> {caption}
    </p>
  </div>
);

export const ToggleGroup = <T extends string>({
  options,
  value,
  onChange,
  variant = "primary",
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
  variant?: "primary" | "secondary";
}) => (
  <div className="flex flex-wrap gap-2">
    {options.map((option) => (
      <button
        key={option.value}
        onClick={() => onChange(option.value)}
        aria-pressed={value === option.value}
        className={`btn btn-sm ${value === option.value ? `btn-${variant}` : "btn-outline"}`}>
        {option.label}
      </button>
    ))}
  </div>
);

export const bestCell = "font-bold bg-blue-100 text-blue-800";

export const formatValue = (value: number) => (value >= 10 ? value.toFixed(2) : value.toFixed(3));

// Renders "x_img", "θ_{k−1}" style subscripts from plain strings.
export const RichText = ({ text }: { text: string }) => (
  <>
    {text.split(/_(\{[^}]*\}|[^\s(),|·.:;]+)/g).map((part, index) =>
      index % 2 === 1 ? <sub key={index}>{part.replace(/^\{|\}$/g, "")}</sub> : part
    )}
  </>
);
