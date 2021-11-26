AFRAME.registerComponent("diver-rotation-reader", {
    schema: {
        rotationSpeed: { type: "number", default: 0 },
        ascensionSpeed: { type: "number", default: 0 }
    },
    init: function () {
        window.addEventListener("keydown", (e) => {

            this.data.rotationSpeed = this.el.getAttribute("rotation");
            this.data.ascensionSpeed = this.el.getAttribute("position");

            var diverRotation = this.data.rotationSpeed;
            var diverPosition = this.data.ascensionSpeed;

            if (e.key === "ArrowRight") {
                if (diverRotation.x < 25) {
                    diverRotation.x += 0.3;
                    this.el.setAttribute("rotation", diverRotation);
                }
            }
            if (e.key === "ArrowLeft") {
                if (diverRotation.x > -25) {
                    diverRotation.x -= 0.3;
                    this.el.setAttribute("rotation", diverRotation);
                }
            }
            if (e.key === "ArrowUp") {
                if (diverRotation.z < 5) {
                    diverRotation.z += 0.2;
                    this.el.setAttribute("rotation", diverRotation);
                }
                if (diverPosition.y < 2) {
                    diverPosition.y += 0.05;
                    this.el.setAttribute("position", diverPosition);
                }
            }
            if (e.key === "ArrowDown") {
                if (diverRotation.z > -15) {
                    diverRotation.z -= 0.5;
                    this.el.setAttribute("rotation", diverRotation);
                }
                if (diverPosition.y > -5) {
                    diverPosition.y -= 0.01;
                    this.el.setAttribute("position", diverPosition);
                }
            }
        });
    }
});