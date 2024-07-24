import { useTimerContext } from '@/store/TimerContext';
import { useEffect, useMemo, useState } from 'react';

const Timer = () => {
  const [remainingTime, setRemainingTime] = useState<number | null>(null);
  const [discountExpired, setDiscountExpired] = useState(false);
  const { setTimerExpired } = useTimerContext();

  const updateTimer = () => {
    const currentTime = new Date().getTime();
    const localTime: string | null = localStorage.getItem('firstVisitTime');
    let firstVisitTime: number;

    if (localTime !== null) {
      firstVisitTime = parseInt(localTime);
    } else {
      firstVisitTime = currentTime;
      localStorage.setItem('firstVisitTime', firstVisitTime.toString());
    }

    const timeDifference =
      24 * 60 * 60 * 1000 - (currentTime - firstVisitTime);

    if (timeDifference <= 0) {
      setDiscountExpired(true);
      setTimerExpired();
      setRemainingTime(0);
    } else {
      setRemainingTime(timeDifference);
    }
  };

  useEffect(() => {
    if (!discountExpired) {
      updateTimer();
      const interval = setInterval(updateTimer, 1000);
      return () => clearInterval(interval);
    }
  }, [discountExpired]);

  const hours = useMemo(
    () =>
      Math.floor((remainingTime ?? 0) / (1000 * 60 * 60))
        .toString()
        .padStart(2, '0'),
    [remainingTime],
  );
  const minutes = useMemo(
    () =>
      Math.floor(((remainingTime ?? 0) % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, '0'),
    [remainingTime],
  );
  const seconds = useMemo(
    () =>
      Math.floor(((remainingTime ?? 0) % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, '0'),
    [remainingTime],
  );

  return (
    <div className="wrapper">
      <div className="timer">
        <div className="timer__title">
          Скидка 10% действует{' '}
          <span className="timer__title--red">24 часа</span> <br />
          Время пошло
        </div>
        <div className="timer__time">
          {discountExpired ? '00:00:00' : `${hours}:${minutes}:${seconds}`}
        </div>
      </div>
    </div>
  );
};

export default Timer;
