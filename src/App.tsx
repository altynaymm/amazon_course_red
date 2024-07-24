import WelcomPage from './screens/WelcomePage';
import VideoPresentationPage from './screens/VideoPresentationPage';
import HomePage from './screens/HomePage';
import { useEffect, useState } from 'react';

function App() {
  const [nextStep, setNextStep] = useState(0);
  const [isSkip, setIsSkip] = useState(false);
  const handlerNextStep = () => {
    setNextStep(nextStep + 1);
  };

  useEffect(() => {
    if (nextStep === 2) {
      console.log(nextStep, isSkip);
      localStorage.setItem('skipPreview', 'true');
      setIsSkip(true);
    }
  }, [nextStep, isSkip, setIsSkip]);

  useEffect(() => {
    if (!isSkip) {
      const skipStorage = localStorage.getItem('skipPreview');
      if (skipStorage !== null) {
        setIsSkip(true);
      }
    }
  }, [isSkip]);

  return (
    <div>
      {isSkip ? (
        <HomePage />
      ) : nextStep === 0 ? (
        <WelcomPage handlerNextStep={handlerNextStep} />
      ) : (
        nextStep === 1 && (
          <VideoPresentationPage handlerNextStep={handlerNextStep} />
        )
      )}
    </div>
  );
}

export default App;
