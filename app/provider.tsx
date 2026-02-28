"use client";
import React from "react";
import { ThemeProvider as NextProvider } from "next-themes";

export default function Provider({
  children,
  ...props
}: React.ComponentProps<typeof NextProvider>) {
  return <NextProvider {...props}>{children}</NextProvider>;
}
