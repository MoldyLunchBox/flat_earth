import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
    const sceneRef = useRef();

    // ...existing code...
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        sceneRef.current.appendChild(renderer.domElement);


        // texture loading
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('/path/to/your/texture.jpg');
    
        const geometry = new THREE.RingGeometry(0, 2, 32);
        const material = new THREE.MeshStandardMaterial({  map: texture, side: THREE.DoubleSide });
        const ringMesh = new THREE.Mesh(geometry, material)
        scene.add(ringMesh);

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);

            ringMesh.rotation.x += 0.01
            ringMesh.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();


        // light
        const light = new THREE.AmbientLight(0x404040, 2); // soft white light
        scene.add(light);

        // Create a directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 1, 0); // Set the direction of the light
        scene.add(directionalLight);

        // spotlight
        const spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(0, 1, 2);
        spotLight.castShadow = true;

        spotLight.shadow.mapSize.width = 1024;
        spotLight.shadow.mapSize.height = 1024;

        spotLight.shadow.camera.near = 500;
        spotLight.shadow.camera.far = 4000;
        spotLight.shadow.camera.fov = 30;

        scene.add(spotLight);
        return () => {
            sceneRef.current.removeChild(renderer.domElement);
        };
    }, []);
    // ...existing code...


    return <div ref={sceneRef} />;
};

export default ThreeScene;
