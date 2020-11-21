import React from "react";
import styles from "./Slide.module.css";

const Slide = ({ slides = [] }) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  const handlePrev = () => {
    if (active > 0) setActive((active) => active - 1);
  };

  const handleNext = () => {
    if (active < slides.length - 1) setActive((active) => active + 1);
  };

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  return (
    <section className={styles.container}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.item}>
            {slide.text}
          </div>
        ))}
      </div>

      <nav className={styles.nav}>
        <button onClick={handlePrev}>Anterior</button>
        <button onClick={handleNext}>Próximo</button>
      </nav>
    </section>
  );
};

export default Slide;
