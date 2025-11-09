import React, { createContext, useContext, useState } from 'react';
import Popout from '../components/Popout';

type ToastContextType = {
  showToast: (message: string, duration?: number) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<{ message: string; key: number } | null>(null);
  const [duration, setDuration] = useState(2000);

  const showToast = (message: string, duration = 2000) => {
    setDuration(duration);
    setToast({ message, key: Date.now() });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <Popout
          key={toast.key}
          visible={true}
          message={toast.message}
          duration={duration}
        />
      )}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within a ToastProvider');
  return context;
};
