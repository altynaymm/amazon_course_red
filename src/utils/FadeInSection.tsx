import { FadeInSectionProps } from "@/types/fadeInSection";
import { FC } from "react";
import { useInView } from "react-intersection-observer";

const FadeInSection: FC<FadeInSectionProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`fade-in-section ${
        inView ? "fade-in-section--is-visible" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;