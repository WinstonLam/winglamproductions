'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Locale } from '@/lib/useTranslations'; // Assuming Locale is exported from useTranslations

// Define the shape of the context data
interface LanguageContextType {
  currentLanguage: Locale;
  setCurrentLanguage: (language: Locale) => void;
}


export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define the props for the LanguageProvider
interface LanguageProviderProps {
  children: ReactNode;
  defaultLocale?: Locale;
}

// Create the LanguageProvider component
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children, defaultLocale = 'nl' }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Locale>(defaultLocale);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a custom hook to use the LanguageContext
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
