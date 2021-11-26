//Terrain Rotation
AFRAME.registerComponent("ocean-rotation-reader", {
    schema: {
      rotationSpeed: { type: "number", default: 0 },
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.rotationSpeed < 0.1) {
            this.data.rotationSpeed += 0.005;
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.rotationSpeed > -0.1) {
            this.data.rotationSpeed -= 0.005;
          }
        }
      });
    },
    tick: function () {
      var oceanRotation = this.el.getAttribute("rotation");
  
      oceanRotation.y += this.data.rotationSpeed;
  
      this.el.setAttribute("rotation", {
        x: oceanRotation.x,
        y: oceanRotation.y,
        z: oceanRotation.z,
      });
    },
  });