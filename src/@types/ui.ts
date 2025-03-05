import React from "react";

export interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export interface DialogComponentProps {
  children: React.ReactNode;
  className?: string;
}

export interface IGradientButton {
  label: string;
  redirect?: string;
  className?: string;
  insideLoader?: boolean;
  size?: "lg" | "default" | "sm" | "icon";
  onclick?: () => void;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export interface SelectProps<T> {
  value: T;
  onChange: (value: T) => void;
  children: React.ReactNode;
  className?: string;
}

export interface SelectTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export interface SelectContentProps {
  children: React.ReactNode;
  className?: string;
}

export interface SelectItemProps<T> {
  value: T;
  children: React.ReactNode;
  className?: string;
}

export interface SelectValueProps {
  placeholder: string;
}
