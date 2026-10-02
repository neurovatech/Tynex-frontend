'use client';

import NextTopLoader from 'nextjs-toploader';
// import { Providers } from './providers';
import { useState } from 'react';

export default function AppProvider({ children }: { children: React.ReactNode }) {
  const [mounted] = useState(true);

  if (!mounted) return null;

  return (
    <div>
      <NextTopLoader color="#d1a77d" showSpinner={false} />
      {children}
    </div>
  );
}

