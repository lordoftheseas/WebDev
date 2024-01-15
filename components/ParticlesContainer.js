import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";

const ParticlesContainer = () => {
  // Initialization function for particles
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Callback function for when particles are loaded
  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        // Particle configuration options
        fullScreen: { enable: false },
        background: { color: { value: "" } },
        fps_limit: 120,
        interactivity: {
          events: {
            onClick: { enable: false, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: "true",
          },
          modes: {
            push: {
              quantity: 90,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          // Configuration for individual particles
          color: {
            value: "#e68e2e",
          },
          links: {
            color: "#f5d393",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          // to change the way particles move, you can modify the move section of the configuration
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "out", // Change this to "out" for particles to disappear at the canvas edges
            },
            random: false,
            speed: 1, // You can adjust the speed
            straight: false,
          },

          // move: {
          //   directions: "none",
          //   enable: true,
          //   outModes: {
          //     default: "bounce",
          //   },
          //   random: false,
          //   speed: 1,
          //   straight: false,
          // },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;

/*
Imports: The code imports necessary modules and libraries. react-tsparticles is a React component wrapper for the tsparticles library, which is used for creating particle effects.

ParticlesContainer Component: This is a functional React component named ParticlesContainer.

Initialization Functions: Two functions are defined:

particlesInit: An initialization function for particles, which uses loadFull from tsparticles to load the full engine.
particlesLoaded: A callback function for when particles are loaded (currently empty).
Return Statement: The component returns the Particles component, which renders the particle effect.

className: Styling classes for the particle container.
id: Identifier for the particle container.
init and loaded: Callbacks for particle initialization and loaded states.
options: Object containing various configurations for the particles, including interactivity, particle appearance, and movement behavior.
Particle Options: The options object includes configurations for particles, such as color, links between particles, collision settings, movement behavior, and more.

Export: The component is exported as the default export from the module.

This code sets up a React component that uses the react-tsparticles library to create customizable particle effects with various configurations for appearance and movement.
*/
