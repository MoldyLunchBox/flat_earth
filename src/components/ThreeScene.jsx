import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
    const sceneRef = useRef();

    // ...existing code...
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        camera.position.set(0, 1, 0);
        renderer.setSize(window.innerWidth, window.innerHeight);
        sceneRef.current.appendChild(renderer.domElement);


        // texture loading
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('/textures/earthmap.jpeg');
        const displacementMap = textureLoader.load('/textures/earthbump.jpeg');
        const circleGeometry = new THREE.CircleGeometry(1, 32);
        // const earthMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00, roughness: 0.5, metalness: 0.7 });
        // const earthDisk = new THREE.Mesh(circleGeometry, material);

        const earthGeometry = new THREE.RingGeometry(0, 2, 32);
        const earthMaterial = new THREE.MeshStandardMaterial({  map: texture,  displacementMap: displacementMap,
            displacementScale: 0.5, // Adjust the scale of the displacement effect
            roughness: 0.5,
            metalness: 0.7 });

            // const displacementMap = textureLoader.load('/textures/earthbump.jpeg');
            // const geometry = new THREE.RingGeometry(0, 2, 32);
            // const material = new THREE.MeshStandardMaterial({  map: texture,  displacementMap: displacementMap,
            //     displacementScale: 0.5, // Adjust the scale of the displacement effect
            //     roughness: 0.5,
            //     metalness: 0.7,side: THREE.DoubleSide });
            // const ringMesh = new THREE.Mesh(geometry, material)
            // ringMesh.rotation.x = Math.PI / 2;
            // scene.add(ringMesh);
     
            // Create a 3D disk with thickness using ExtrudeGeometry
    const shape = new THREE.Shape();
    shape.absarc(0, 0, 1, 0, Math.PI * 2);
    
    const extrudeSettings = {
      steps: 1,
      depth: 0.2, // Adjust the thickness
      bevelEnabled: false,
    };
    
    // const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    // const material = new  THREE.MeshStandardMaterial({  map: texture,  displacementMap: displacementMap,   displacementScale: 0.5, // Adjust the scale of the displacement effect
    // roughness: 0.5,
    // metalness: 0.7 });
    // const disk = new THREE.Mesh(geometry, material);
    // disk.rotation.x = -Math.PI / 2;
    const cylinderGeometry = new THREE.CylinderGeometry(1, 1, 0.2, 32);
    const colors = [
        new THREE.Color('#000000'), // Material 0
        new THREE.Color('#000000'), // Material 1
        new THREE.Color('#000000'), // Material 5
      ];
    const material = new THREE.MeshStandardMaterial({ map: texture,  displacementMap: displacementMap,   displacementScale: 0.5, // Adjust the scale of the displacement effect
    roughness: 0.5,
    metalness: 0.7 });

    const material1 = new THREE.MeshBasicMaterial({ attach:"material-0", color:"#ff0000" })
    const material2 = new THREE.MeshStandardMaterial({ attach:"material-1",   map: texture,  displacementMap: displacementMap,   displacementScale: 1, // Adjust the scale of the displacement effect
    roughness: 0.5,
    metalness: 0.7 });  
    const material3 = new THREE.MeshBasicMaterial({ attach:"material-2", color:"#00ff00" })
    const materials = [material1, material2, material3];
    const cylinder = new THREE.Mesh(cylinderGeometry, materials);

    // cylinder.rotation.x = Math.PI / 2;
    scene.add(cylinder);

    // scene.add(cylinder);


        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            cylinder.rotation.x += 0.01
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
