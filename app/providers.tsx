"use client";

import { NextUIProvider } from "@nextui-org/react";
import { GoogleOAuthProvider } from "@react-oauth/google";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoogleOAuthProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </GoogleOAuthProvider>
    </>
  );
}
