import React from "react";
import Threenavnav from "../components/Threenavnav";
import * as THREE from "three";
import vertex from "./Shaders/Vertex.glsl?raw";
import fragment from "./Shaders/Fragment.glsl?raw";
import gsap from 'gsap';

export default function Dispthreenav() {
  class Site {
    constructor({ dom }) {
      this.time = 0;
      this.container = dom;
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.images = [...document.querySelectorAll(".images img")];
      this.imageStore = [];
      this.uStartIndex = 0;
      this.uEndIndex = 1;

      // THREE.js setup
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75,
        this.width / this.height,
        100,
        2000
      );
      this.camera.position.z = 500; // Adjusted to 500 for better view
      this.camera.fov = 2 * Math.atan(this.height / 2 / 500) * (180 / Math.PI); // Adjusted FOV
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(this.width, this.height);

      // Append to DOM
      if (this.container) {
        this.container.appendChild(this.renderer.domElement);
      } else {
        console.error("Container not found!");
      }
this.hoverOverLinks();
      this.addImages();

      this.resize();
      this.setupResize();
      this.setPosition();
    }

    resize() {
      this.width = this.container.offsetWidth; // Fixed typo: 'offWidth' -> 'offsetWidth'
      this.height = this.container.offsetHeight; // Fixed typo: 'offHeight' -> 'offsetHeight'
      this.renderer.setSize(this.width, this.height);
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();

      this.setPosition();
    }

    setupResize() {
      window.addEventListener("resize", this.resize.bind(this));
    }

    setPosition() {
      this.imageStore.forEach((img) => {
        const bounds = img.img.getBoundingClientRect();
        img.mesh.position.x =
          (bounds.left - this.width / 2 + bounds.width / 2) / 2;
        img.mesh.position.y =
          -(bounds.top - this.height / 2 + bounds.height / 2) / 2;
      });
    }

    addImages() {
      const textureLoader = new THREE.TextureLoader();
      const textures = this.images.map((img) => {
        return new Promise((resolve, reject) => {
          const texture = textureLoader.load(
            img.src,
            () => {
              console.log(`Loaded ${img.src}`);
              resolve(texture);
            },
            undefined,
            (error) => {
              console.error(`Failed to load ${img.src}`, error);
              reject(error);
            }
          );
        });
      });

      // After all textures are loaded, create meshes
      Promise.all(textures)
        .then((loadedTextures) => {
          const uniforms = {
            uTime: { value: 0 },
            uTimeline: { value: 0.2 },
            uStartIndex: { value: 0 },
            uEndIndex: { value: 1 },
            uImage1: { value: loadedTextures[0] },
            uImage2: { value: loadedTextures[1] },
            uImage3: { value: loadedTextures[2] },
            uImage4: { value: loadedTextures[3] },
          };

          this.material = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: vertex,
            fragmentShader: fragment,
            transparent: true, // Transparency enabled
          });

          console.log("Material initialized:", this.material);

          this.images.forEach((img, index) => {
            const bounds = img.getBoundingClientRect();
            console.log(
              `Creating mesh for ${img.src}`,
              bounds.width,
              bounds.height
            );
            const geometry = new THREE.PlaneGeometry(
              bounds.width,
              bounds.height
            );
            const mesh = new THREE.Mesh(geometry, this.material);
            mesh.material.map = loadedTextures[index]; // Apply loaded texture
            mesh.scale.set(1, 1, 1); // Ensure meshes are scaled to visible size
            this.scene.add(mesh);

            // Store mesh details
            this.imageStore.push({
              img: img,
              mesh: mesh,
              top: bounds.top,
              left: bounds.left,
              width: bounds.width,
              height: bounds.height,
            });
          });

          this.setPosition(); // Set positions once all images are added

          // Start the render loop once everything is ready
          this.startRenderLoop();
        })
        .catch((error) => {
          console.error("Error loading textures:", error);
        });
    }

    startRenderLoop() {
      this.render(); // Start the render loop only after material is initialized
    }

    hoverOverLinks() {
      const links = document.querySelectorAll(".links a");
      links.forEach((link, i) => {
        link.addEventListener("mouseover", () => {
          this.material.uniforms.uTimeline.value = 0.0;
          gsap.killTweensOf(this.material.uniforms.uTimeline);
    
          // Update the shader uniforms directly
          this.uEndIndex = i;
          this.material.uniforms.uStartIndex.value = this.uEndIndex; // Ensure it starts from the hovered image
          this.material.uniforms.uEndIndex.value = this.uEndIndex;   // Keep the end index the same
    
          // Animate timeline for smooth transition
          gsap.to(this.material.uniforms.uTimeline, {
            value: 4.0,
            duration: 2,
          });
        });
      });
    }
    

    render() {
      this.time += 0.1;

      // Check if this.material is defined before updating the uniforms
      if (this.material && this.material.uniforms) {
        this.material.uniforms.uTime.value = this.time; // Update time uniform
      } else {
        console.error("Material or uniforms are not defined");
      }

      this.renderer.render(this.scene, this.camera);
      window.requestAnimationFrame(this.render.bind(this));
    }
  }

  React.useEffect(() => {
    const canvasElement = document.querySelector(".canvas");
    if (canvasElement) {
      new Site({
        dom: canvasElement,
      });
    } else {
      console.error("Canvas element not found!");
    }
  }, []);

  return (
    <div>
      <Threenavnav />
    </div>
  );
}
