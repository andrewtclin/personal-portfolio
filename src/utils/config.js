//#region particlejs configuration
export const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: { enable: true, value_area: 1000 },
    },
    color: {
      value: ["#969696"],
    },

    line_linked: {
      enable: true,
      distance: 90,
      color: "#c8c8c8",
      opacity: 0.4,
      width: 1,
    },
    size: {
      value: 0.6,
      random: true,
      anim: {
        enable: true,
        speed: 1.181158184520175,
        size_min: 0.8,
        sync: true,
      },
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      out_mode: "out",
    },
  },

  interactivity: {
    detect_on: "window",
    events: {
      onhover: { enable: true, mode: "grab" },
      resize: true,
    },
    modes: {
      grab: { distance: 100, line_linked: { opacity: 0.2 } },
    },
  },
};
//#endregion
