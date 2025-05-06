

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 250,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "polygon": {
            "nb_sides": 5,
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0,
            "sync": false,
        }
      },
      "size": {
        "value": 2.5,
        "random": true,
        "anim": {
            "enable": true,
            "speed": 1,
            "sync": false,
        }
      },
      "move": {
        "enable": true,
        "direction": "none",
        "random": true,
        "straight": false,
        "speed": 0.5,
        "out_mode": "out",
        "attract.enable": false,
        "attract.rotateX": 600,
        "attract.rotateY": 600,
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1,
      }
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": false,
          "mode": "bubble",
        },
        "onclick": {
          "enable": false
        },
        "modes": {
            "bubble": {
                "distance": 250,
                "size": 0,
                "opacity" : 0,
                "duration": 2,
            }
        }
      }
    },
    "retina_detect": true
  });