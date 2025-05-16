import clsx from 'clsx';
import React from 'react'

interface ButtonProps {
    text:string;
    // onClick: () => void;
    href:string;
    className?: string;
}

export default function Button({
    text,
    href,
    className,
}:ButtonProps) {
  return (
      <a
          type="button"
          href={href}
          className={clsx(className, "bg-primary-teal text-white text-center font-semibold py-3 px-8 rounded-full hover:bg-teal-700 transition")}
      >
          {text}
      </a>
  )
}
