// src/lib/prefix.ts
export const prefix = process.env.NODE_ENV === 'production'
    ? `/${process.env.NEXT_PUBLIC_REPO || 'winglamproductions'}`
    : '';
