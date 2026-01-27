import { useEffect, useRef } from "react";
import videoFile from "../assets/media/hero-v.mp4";

export default function ScrollVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;

        if (entry.isIntersecting) {
          videoRef.current.play().catch(() => {});
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ height: "50vh", background: "#000" }}>
      <video
        ref={videoRef}
        src={videoFile}
        muted
        loop
        playsInline
        preload="auto"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
   
        }}
      />
    </section>
  );
}
