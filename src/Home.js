import React from "react";
import { useTheme, ThemeProvider } from "@material-ui/core/styles";
import { useStore } from "./contexts/theme.context";
import styles from "./styles/HomeStyles";
import Particles from "react-particles-js";
// import { Link } from "react-router-dom";
import { Link } from "react-tiger-transition";
function Home() {
  const { isDarkTheme } = useStore();
  const classes = styles(isDarkTheme);
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <div style={{ position: "relative" }}>
          <Particles
            params={{
              autoPlay: true,
              background: {
                color: {
                  value: "none",
                },
              },
              backgroundMask: {
                cover: {
                  color: {
                    value: "#0a192f",
                  },
                },
                enable: false,
              },
              fullScreen: {
                enable: true,
                zIndex: 0,
              },
              detectRetina: true,
              duration: 0,
              fpsLimit: 60,
              interactivity: {
                detectsOn: "canvas",
                events: {
                  onClick: {
                    enable: false,
                    mode: "push",
                  },
                  onDiv: {
                    selectors: [],
                    enable: false,
                    mode: [],
                    type: "circle",
                  },
                  onHover: {
                    enable: true,
                    mode: "bubble",
                  },
                  resize: true,
                },
                modes: {
                  attract: {
                    distance: 200,
                    duration: 0.4,
                    easing: "ease-out-quad",
                    factor: 1,
                    maxSpeed: 50,
                    speed: 1,
                  },
                  bounce: {
                    distance: 200,
                  },
                  bubble: {
                    distance: 400,
                    duration: 2,
                    mix: false,
                    opacity: 0.8,
                    size: 15,
                  },
                  connect: {
                    distance: 80,
                    links: {
                      opacity: 0.5,
                    },
                    radius: 60,
                  },
                  grab: {
                    distance: 400,
                    links: {
                      blink: false,
                      consent: false,
                      opacity: 1,
                    },
                  },
                  light: {
                    area: {
                      gradient: {
                        start: {
                          value: isDarkTheme ? "#ffffff" : "#000000",
                        },
                        stop: {
                          value: isDarkTheme ? "#000000" : "#ffffff",
                        },
                      },
                      radius: 1000,
                    },
                    shadow: {
                      color: {
                        value: isDarkTheme ? "#000000" : "#ffffff",
                      },
                      length: 2000,
                    },
                  },
                  push: {
                    default: true,
                    groups: [],
                    quantity: 4,
                  },
                  remove: {
                    quantity: 2,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 50,
                    easing: "ease-out-quad",
                  },
                  slow: {
                    factor: 3,
                    radius: 200,
                  },
                  trail: {
                    delay: 1,
                    pauseOnStop: false,
                    quantity: 1,
                  },
                },
              },
              manualParticles: [],
              motion: {
                disable: false,
                reduce: {
                  factor: 4,
                  value: true,
                },
              },
              particles: {
                bounce: {
                  horizontal: {
                    random: {
                      enable: false,
                      minimumValue: 0.1,
                    },
                    value: 1,
                  },
                  vertical: {
                    random: {
                      enable: false,
                      minimumValue: 0.1,
                    },
                    value: 1,
                  },
                },
                collisions: {
                  bounce: {
                    horizontal: {
                      random: {
                        enable: false,
                        minimumValue: 0.1,
                      },
                      value: 1,
                    },
                    vertical: {
                      random: {
                        enable: false,
                        minimumValue: 0.1,
                      },
                      value: 1,
                    },
                  },
                  enable: false,
                  mode: "bounce",
                  overlap: {
                    enable: true,
                    retries: 0,
                  },
                },
                color: {
                  value: isDarkTheme ? "#ccd6f6" : "#233554",
                  animation: {
                    h: {
                      count: 0,
                      enable: false,
                      offset: 0,
                      speed: 1,
                      sync: true,
                    },
                    s: {
                      count: 0,
                      enable: false,
                      offset: 0,
                      speed: 1,
                      sync: true,
                    },
                    l: {
                      count: 0,
                      enable: false,
                      offset: 0,
                      speed: 1,
                      sync: true,
                    },
                  },
                },
                destroy: {
                  mode: "none",
                  split: {
                    count: 1,
                    factor: {
                      random: {
                        enable: false,
                        minimumValue: 0,
                      },
                      value: 3,
                    },
                    rate: {
                      random: {
                        enable: false,
                        minimumValue: 0,
                      },
                      value: {
                        min: 4,
                        max: 9,
                      },
                    },
                    sizeOffset: true,
                  },
                },
                gradient: [],
                groups: {},
                life: {
                  count: 0,
                  delay: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 0,
                    sync: false,
                  },
                  duration: {
                    random: {
                      enable: false,
                      minimumValue: 0.0001,
                    },
                    value: 0,
                    sync: false,
                  },
                },
                links: {
                  blink: false,
                  color: {
                    value: isDarkTheme ? "#ccd6f6" : "#111211",
                  },
                  consent: false,
                  distance: 150,
                  enable: true,
                  frequency: 1,
                  opacity: 0.2,
                  shadow: {
                    blur: 5,
                    color: {
                      value: "#90CAF9",
                    },
                    enable: true,
                  },
                  triangles: {
                    enable: false,
                    frequency: 1,
                  },
                  width: 1,
                  warp: true,
                },
                move: {
                  angle: {
                    offset: 0,
                    value: 90,
                  },
                  attract: {
                    distance: 200,
                    enable: false,
                    rotate: {
                      x: 600,
                      y: 1200,
                    },
                  },
                  decay: 0,
                  distance: {},
                  direction: "none",
                  drift: 0,
                  enable: true,
                  gravity: {
                    acceleration: 9.81,
                    enable: false,
                    inverse: false,
                    maxSpeed: 50,
                  },
                  path: {
                    clamp: true,
                    delay: {
                      random: {
                        enable: false,
                        minimumValue: 0,
                      },
                      value: 0,
                    },
                    enable: false,
                    options: {},
                  },
                  outModes: {
                    default: "out",
                    bottom: "out",
                    left: "out",
                    right: "out",
                    top: "out",
                  },
                  random: false,
                  size: false,
                  speed: 1.5,
                  spin: {
                    acceleration: 0,
                    enable: false,
                  },
                  straight: false,
                  trail: {
                    enable: false,
                    length: 10,
                    fillColor: {
                      value: isDarkTheme ? "#000000" : "#ffffff",
                    },
                  },
                  vibrate: false,
                  warp: true,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                    factor: 1000,
                  },
                  limit: 0,
                  value: 40,
                },
                opacity: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 0.5,
                  animation: {
                    count: 0,
                    enable: false,
                    speed: 3,
                    sync: false,
                    destroy: "none",
                    startValue: "random",
                    minimumValue: 0.1,
                  },
                },
                orbit: {
                  animation: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    sync: false,
                  },
                  enable: false,
                  opacity: 1,
                  rotation: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 45,
                  },
                  width: 1,
                },
                reduceDuplicates: false,
                repulse: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                  enabled: false,
                  distance: 1,
                  duration: 1,
                  factor: 1,
                  speed: 1,
                },
                roll: {
                  darken: {
                    enable: false,
                    value: 0,
                  },
                  enable: false,
                  enlighten: {
                    enable: false,
                    value: 0,
                  },
                  speed: 25,
                },
                rotate: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                  animation: {
                    enable: false,
                    speed: 0,
                    sync: false,
                  },
                  direction: "clockwise",
                  path: false,
                },
                shadow: {
                  blur: 0,
                  color: {
                    value: isDarkTheme ? "#000000" : "#ffffff",
                  },
                  enable: true,
                  offset: {
                    x: 0,
                    y: 0,
                  },
                },
                shape: {
                  options: {},
                  type: "circle",
                },
                size: {
                  random: {
                    enable: true,
                    minimumValue: 1,
                  },
                  value: {
                    min: 1,
                    max: 3,
                  },
                  animation: {
                    count: 0,
                    enable: false,
                    speed: 20,
                    sync: false,
                    destroy: "none",
                    startValue: "random",
                    minimumValue: 0.1,
                  },
                },
                stroke: {
                  width: 0,
                },
                tilt: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                  animation: {
                    enable: false,
                    speed: 0,
                    sync: false,
                  },
                  direction: "clockwise",
                  enable: false,
                },
                twinkle: {
                  lines: {
                    enable: false,
                    frequency: 0.05,
                    opacity: 1,
                  },
                  particles: {
                    enable: false,
                    frequency: 0.05,
                    opacity: 1,
                  },
                },
                wobble: {
                  distance: 5,
                  enable: false,
                  speed: 50,
                },
                zIndex: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                  opacityRate: 1,
                  sizeRate: 1,
                  velocityRate: 1,
                },
              },
              pauseOnBlur: true,
              pauseOnOutsideViewport: true,
              responsive: [],
              themes: [],
              zLayers: 100,
            }}
          />
        </div>
        <div className={classes.content}>
          <div className={classes.topHeadings}>
            <h1 className={classes.heading}>Anushka Bahuguna</h1>
            <div className={classes.des}>Web Developer | Graphic Designer</div>
          </div>
          <div className={classes.links}>
            <Link to="/about" transition="scaleUp">
              About
            </Link>

            <Link to="/projects" transition="scaleUp">
              Projects
            </Link>

            <Link to="/contact" transition="scaleUp">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Home;
