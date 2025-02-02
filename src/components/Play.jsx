import React, { useEffect, useState } from "react";

function Play() {
    // State to hold pupil offset values
    const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Get the center of the window (you can adjust this if needed)
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            // Calculate the delta between mouse and center
            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;

            // Set a maximum offset (so the pupil doesn't exit the eye)
            const maxOffset = 10;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const clampedDistance = Math.min(distance, maxOffset);

            // Calculate the angle (direction) for the movement
            const angle = Math.atan2(deltaY, deltaX);

            // Compute the x and y offsets based on the angle
            const offsetX = clampedDistance * Math.cos(angle);
            const offsetY = clampedDistance * Math.sin(angle);

            setPupilOffset({ x: offsetX, y: offsetY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="play w-full h-screen overflow-hidden">
            {/* Background image preserved */}
            <div
                data-scroll
                data-scroll-speed="-.6"
                className="relative w-full h-full bg-[url('./src/assets/play-bg.jpg')] bg-cover bg-center"
            >
                {/* Absolute container for the eyes */}
                <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                    {/* Eye 1 */}
                    <div className="relative flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
                        <div className="relative bg-zinc-900 w-28 h-28 flex items-center justify-center rounded-full">
                            <div
                                className="bg-zinc-100 w-4 h-4 rounded-full absolute"
                                style={{
                                    left: "50%",
                                    top: "50%",
                                    transform: `translate(-50%, -50%) translate(${pupilOffset.x}px, ${pupilOffset.y}px)`,
                                }}
                            ></div>
                        </div>
                    </div>

                    {/* Eye 2 */}
                    <div className="relative flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
                        <div className="relative bg-zinc-900 w-28 h-28 flex items-center justify-center rounded-full">
                            <div
                                className="bg-zinc-100 w-4 h-4 rounded-full absolute"
                                style={{
                                    left: "50%",
                                    top: "50%",
                                    transform: `translate(-50%, -50%) translate(${pupilOffset.x}px, ${pupilOffset.y}px)`,
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Play;
