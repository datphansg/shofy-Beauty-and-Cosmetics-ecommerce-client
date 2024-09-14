'use client';

import { GoogleOAuthProvider } from "@react-oauth/google";
import { ReactNode } from "react";

const NEXT_PUBLIC_GOOGLE_CLIENT_ID = '1001254574511-3rk0j577me41116ve7pe3skn3teof0ak.apps.googleusercontent.com';

export default function GoogleAuthProviderComponent({ children }: { children: ReactNode }) {
  return <GoogleOAuthProvider clientId={NEXT_PUBLIC_GOOGLE_CLIENT_ID}>{children}</GoogleOAuthProvider>;
}
