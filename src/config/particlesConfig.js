import { loadFull } from "tsparticles";

const particlesCOnfig = {
    "fullScreen": {
        "enable": true,
        "zIndex": -1
    },
    "particles": {
        "number": {
            "value": 10,
            "density": {
                "enable": true,
                "value_area": 100
            }
        },
        "color": {
            "value": "#fff"
        },
        "shape": {
            "type": "circle",
        },
        "opacity": {
            "value": 0.5,
            "random": false,
        },
        "size": {
            "value": 5,
            "random": true,
        },
        "line_linked": {
            "enable": window.screen.width > 768 ? false : true,
            "color": "rgb(20, 173, 122)",
            "opacity": .5,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": ["grab"]
            },
        },
        "modes": {
            "grab": {
                "distance": 100,
                "line_linked": {
                    "opacity": 1,
                }
            },
        }
    },
}

//    load full function

const particlesInit = async (main) => {
    await loadFull(main);
}

export {particlesCOnfig , particlesInit}