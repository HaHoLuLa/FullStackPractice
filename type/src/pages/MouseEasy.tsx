import { ReactNode, useState, MouseEvent as ReactMouseEvent, useRef } from "react";

interface Props {
  children?: ReactNode;
}

const MouseEasy = ({ children }: Props) => {
  const [rafId, setRafId] = useState<number | null>(null);
  const mouseCursor = useRef<HTMLDivElement | null>(null);

  const handleCursor = (x: number, y: number) => {
    if (mouseCursor.current) {
      mouseCursor.current.style.transform = `translate(${x - 20}px, ${y - 20}px)`;
    }
  };

  const xyHandler = (e: ReactMouseEvent<HTMLDivElement>) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    if (rafId) window.cancelAnimationFrame(rafId);
    const newRafId = window.requestAnimationFrame(() => handleCursor(mouseX, mouseY));
    setRafId(newRafId);
  };

  return (
    <div id="mouse-container" className="w-screen h-screen relative overflow-hidden" onMouseMove={xyHandler}>
      <div id="mouse" ref={mouseCursor} className="cursor" />
      {children}
    </div>
  );
};

export default MouseEasy;
