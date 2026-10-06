/// <reference types="vite/client" />

declare global {
  interface Window {
    lizaed?: {
      getStatus: () => Promise<{ mode: string; backend: string; provider: string }>;
    };
  }
}

export {};
