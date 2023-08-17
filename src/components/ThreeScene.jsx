import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
    const sceneRef = useRef();

    // ...existing code...
    useEffect(() => {
        const scene = new THREE.Scene();
        const container = document.getElementById("threejs")
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        camera.position.set(0, 1, 0);
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        sceneRef.current.appendChild(renderer.domElement);


        // texture loading
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('/textures/earthmap.jpeg');
        const displacementMap = textureLoader.load('/textures/earthbump.jpeg');
        const mountainDisplacement = textureLoader.load('/textures/crust2.jpg');
        const crust = textureLoader.load('/textures/crust.jpg');

        const circleGeometry = new THREE.CircleGeometry(1, 32);
        // const earthMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00, roughness: 0.5, metalness: 0.7 });
        // const earthDisk = new THREE.Mesh(circleGeometry, material);

        const earthGeometry = new THREE.RingGeometry(0, 2, 32);
        const earthMaterial = new THREE.MeshStandardMaterial({  map: texture,  displacementMap: displacementMap,
            displacementScale: 0.5, // Adjust the scale of the displacement effect
            roughness: 0.5,
            metalness: 0.7 });


    const shape = new THREE.Shape();
    shape.absarc(0, 0, 1, 0, Math.PI * 2);
    
    const extrudeSettings = {
      steps: 1,
      depth: 0.2, // Adjust the thickness
      bevelEnabled: false,
    };

    const cylinderGeometry = new THREE.CylinderGeometry(1, 1, 0.06, 32);
    const colors = [
        new THREE.Color('#000000'), // Material 0
        new THREE.Color('#000000'), // Material 1
        new THREE.Color('#000000'), // Material 5
      ];
    const material = new THREE.MeshStandardMaterial({ map: texture,  displacementMap: displacementMap,   displacementScale: 0.5, // Adjust the scale of the displacement effect
    roughness: 0.5,
    metalness: 0.7 });

    const material1 = new THREE.MeshStandardMaterial({ attach:"material-0",  map: crust , roughness: 1,
    metalness: 0})
    const material2 = new THREE.MeshStandardMaterial({ attach:"material-1",   map: texture,
    bumpMap: displacementMap,
    bumpScale: 0.1, // Adjust the bump intensity
    roughness: 0.5,
    metalness: 0.7,});  
    const material3 = new THREE.MeshStandardMaterial({ attach:"material-2", color:"gray", map: crust,
    displacementMap: mountainDisplacement,
    bumpScale: 0.1, // Adjust the bump intensity
    roughness: 0.5,
    metalness: 0.7})
    const materials = [material1, material2, material3];
    const cylinder = new THREE.Mesh(cylinderGeometry, materials);

    // cylinder.rotation.x = Math.PI / 2;
    scene.add(cylinder);

    // scene.add(cylinder);


        camera.position.z = 2.5;
        camera.position.y = 1;
        camera.lookAt(0, 0, 0); // Adjust lookAt point
        const animate = () => {
            requestAnimationFrame(animate);
            // cylinder.rotation.x += 0.01
            cylinder.rotation.y += 0.01;
            
            renderer.render(scene, camera);
        };

        animate();


        // light
        const light = new THREE.AmbientLight(0x404040, 2); // soft white light
        scene.add(light);

        // Create a directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 1, 0); // Set the direction of the light
        // scene.add(directionalLight);

        // spotlight
        const spotLightCrust = new THREE.SpotLight(0xffffff,5);
        spotLightCrust.position.set(0, -1, 2);
        spotLightCrust.castShadow = true;
        
    

        const spotLightSurface = new THREE.SpotLight(0xffffff,5);
        spotLightSurface.position.set(2, 2, -2);
        spotLightSurface.castShadow = true;
        
 

        scene.add(spotLightCrust, spotLightSurface);
        return () => {
            sceneRef.current.removeChild(renderer.domElement);
        };
    }, []);
    // ...existing code...


    return <div ref={sceneRef}  />;
};

export default ThreeScene;
