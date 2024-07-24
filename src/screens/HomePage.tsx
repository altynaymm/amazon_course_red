import Benefits from '@/components/Benefits';
import Footer from '@/components/Footer';
import Highlights from '@/components/Highlights/Highlights';
import Main from '@/components/Main';
import Speakers from '@/components/Speakers/Speakers';
import Steps from '@/components/Steps';
import Tariff from '@/components/Tariff/Tariff';
import Timer from '@/components/UI/Timer';
import { useTimerContext } from '@/store/TimerContext';
import Social from '@components/Social.tsx';
import VideoModal from '@components/VideoModal.tsx';
import { useState } from 'react';

const HomePage = () => {
  const { isTimerExpired } = useTimerContext();
  const [isShowVideoModal, setIsShowVideoModal] = useState(true);

  return (
    <>
      <Main />
      <Benefits />
      <Social />
      <Steps />
      <Speakers />
      <Highlights />
      {!isTimerExpired && <Timer />}
      <Tariff />
      <Footer />
      {isShowVideoModal && (
        <VideoModal onClose={() => setIsShowVideoModal(false)} />
      )}
    </>
  );
};

export default HomePage;
