import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function Button({ text, ...props }: Props) {
  return <button {...props}>{text}</button>;
}
