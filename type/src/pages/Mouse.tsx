import { useEffect, FC, ReactNode } from "react";

interface Props {
  children: ReactNode
}

const Mouse: FC<Props> = ({children}) => {
  useEffect(() => {
    const mouseCursor = document.getElementById('mouse');
    const hoverTargets = document.querySelectorAll('.hover-target');

    if (!mouseCursor) return;

    let rafId: number;

    const updateCursor = (x: number, y: number) => {
      mouseCursor.style.left = `${x}px`;
      mouseCursor.style.top = `${y}px`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => updateCursor(x, y));
    };

    const handleScroll = () => {
      const mouseEvent = new MouseEvent('mousemove', {
        view: window,
        bubbles: true,
        cancelable: true,
      });
      window.dispatchEvent(mouseEvent);
    };

    const handleMouseEnter = () => {
      mouseCursor.classList.add("hover")
    };

    const handleMouseLeave = () => {
      mouseCursor.classList.remove("hover")
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    hoverTargets.forEach((item) => {
      item.addEventListener('mouseenter', handleMouseEnter);
      item.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      hoverTargets.forEach((item) => {
        item.removeEventListener('mouseenter', handleMouseEnter);
        item.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <div id="mouse" className="cursor"></div>
      {children}
    </div>
  );
};

export default Mouse;
