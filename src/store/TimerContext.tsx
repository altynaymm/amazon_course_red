import React, { createContext, useContext, useState } from 'react';

type TimerContextProps = {
  isTimerExpired: boolean;
  setTimerExpired: () => void;
};

const TimerContext = createContext<TimerContextProps | undefined>(undefined);

export const useTimerContext = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimerContext must be used within a TimerProvider');
  }
  return context;
};

export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isTimerExpired, setIsTimerExpired] = useState(false);

  const setTimerExpired = () => {
    setIsTimerExpired(true);
  };

  return (
    <TimerContext.Provider value={{ isTimerExpired, setTimerExpired }}>
      {children}
    </TimerContext.Provider>
  );
};
