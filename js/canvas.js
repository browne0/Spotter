"use strict";
var container = document.getElementById('canvas');
    var renderer = new FSS.CanvasRenderer();
    var scene = new FSS.Scene();
    var light = new FSS.Light('#111122', '#00cccc');
    var windowHeight = $('body').height();
    var windowWidth = $(window).width();
    var geometry = new FSS.Plane(windowWidth, windowHeight, 6, 4);
    var material = new FSS.Material('#FFFFFF', '#FFFFFF');
    var mesh = new FSS.Mesh(geometry, material);
    var now, start = Date.now();

    function initialise() {
      scene.add(mesh);
      scene.add(light);
      container.appendChild(renderer.element);
      window.addEventListener('resize', resize);
    }

    function resize() {
      renderer.setSize(container.offsetWidth, windowHeight);
    }

    function animate() {
      now = Date.now() - start;
      light.setPosition((windowWidth/2)*Math.sin(now*0.001), (windowHeight/2)*Math.cos(now*0.0005), 60);
      renderer.render(scene);
      requestAnimationFrame(animate);
    }

    initialise();
    resize();
    animate();
    