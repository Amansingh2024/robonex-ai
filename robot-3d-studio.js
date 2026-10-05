/**
 * RoboNex AI - Interactive 3D Robot Studio
 * Features:
 * - 360° Continuous Smooth Rotation & Full Drag-to-Orbit (Touch & Mouse)
 * - 3 High-Detail Procedural Robot Models:
 *     1. Titan-X Biped Humanoid Robot
 *     2. CyberQuad MechaDog (Autonomous AI Quadruped)
 *     3. 6-DOF Industrial Robotic Vision Arm
 * - 4 Chassis Finishes & Materials (Cyber Titanium, Stealth Obsidian, Emerald Cyber, Imperial Gold)
 * - 3 Studio Lighting Environments (Cyber Lab, Warm Showroom, Deep Space)
 * - Blueprint / Wireframe Mode Toggle
 * - Real-Time 360° Telemetry & Compass Angle HUD
 * - Interactive 3D Hotspot Callout Pins
 */

(function () {
  'use strict';

  // Wait until DOM and Three.js are ready
  function initWhenReady() {
    if (typeof THREE === 'undefined') {
      setTimeout(initWhenReady, 50);
      return;
    }
    const container = document.getElementById('robot-3d-canvas-wrap');
    if (!container) return;
    initStudio(container);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWhenReady);
  } else {
    initWhenReady();
  }

  function initStudio(container) {
    // State
    const state = {
      currentModel: 'humanoid', // 'humanoid' | 'dog' | 'arm'
      currentMaterial: 'titanium', // 'titanium' | 'obsidian' | 'emerald' | 'gold'
      currentLight: 'lab', // 'lab' | 'warm' | 'neon'
      isSpinning: true,
      isBlueprint: false,
      spinSpeed: 1.5,
      activeHotspot: null
    };

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a100e, 0.035);

    const width = container.clientWidth || 540;
    const height = container.clientHeight || 420;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 1.8, 4.6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // OrbitControls
    let controls;
    if (typeof THREE.OrbitControls !== 'undefined') {
      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.autoRotate = true;
      controls.autoRotateSpeed = state.spinSpeed;
      controls.maxPolarAngle = Math.PI / 2 + 0.05; // Don't go below ground
      controls.minPolarAngle = 0.2;
      controls.minDistance = 2.2;
      controls.maxDistance = 7.5;
      controls.target.set(0, 0.95, 0);
      controls.update();
    }

    // Material Themes Definition
    const materialThemes = {
      titanium: {
        name: 'Cyber Titanium',
        primary: { color: 0xdde5ee, metalness: 0.9, roughness: 0.2 },
        secondary: { color: 0x222a30, metalness: 0.8, roughness: 0.4 },
        accent: { color: 0x00f5a0, emissive: 0x00f5a0, emissiveIntensity: 0.9 },
        glowColor: 0x00f5a0,
        joint: { color: 0x111618, metalness: 0.95, roughness: 0.15 }
      },
      obsidian: {
        name: 'Stealth Obsidian',
        primary: { color: 0x15181a, metalness: 0.6, roughness: 0.35 },
        secondary: { color: 0x0a0c0d, metalness: 0.8, roughness: 0.5 },
        accent: { color: 0x00d2ff, emissive: 0x00d2ff, emissiveIntensity: 1.0 },
        glowColor: 0x00d2ff,
        joint: { color: 0x252a2e, metalness: 0.9, roughness: 0.2 }
      },
      emerald: {
        name: 'Emerald Cyber',
        primary: { color: 0x0f2b22, metalness: 0.85, roughness: 0.25 },
        secondary: { color: 0x071510, metalness: 0.7, roughness: 0.4 },
        accent: { color: 0xd8ff4b, emissive: 0xd8ff4b, emissiveIntensity: 1.1 },
        glowColor: 0xd8ff4b,
        joint: { color: 0x13382c, metalness: 0.9, roughness: 0.2 }
      },
      gold: {
        name: 'Imperial Gold',
        primary: { color: 0xd4af37, metalness: 0.95, roughness: 0.22 },
        secondary: { color: 0x241d13, metalness: 0.85, roughness: 0.35 },
        accent: { color: 0xffe066, emissive: 0xffa500, emissiveIntensity: 0.85 },
        glowColor: 0xffb700,
        joint: { color: 0x3d301b, metalness: 0.9, roughness: 0.2 }
      }
    };

    // Active Material Instances
    let activeMats = createMaterialSet(state.currentMaterial, state.isBlueprint);

    function createMaterialSet(themeKey, isBlueprint) {
      const theme = materialThemes[themeKey] || materialThemes.titanium;
      if (isBlueprint) {
        return {
          primary: new THREE.MeshBasicMaterial({ color: 0x00e5ff, wireframe: true }),
          secondary: new THREE.MeshBasicMaterial({ color: 0x0077aa, wireframe: true }),
          accent: new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: false }),
          glow: new THREE.MeshBasicMaterial({ color: 0x39ff14 }),
          joint: new THREE.MeshBasicMaterial({ color: 0x005577, wireframe: true }),
          visor: new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true })
        };
      }
      return {
        primary: new THREE.MeshStandardMaterial({
          color: theme.primary.color,
          metalness: theme.primary.metalness,
          roughness: theme.primary.roughness
        }),
        secondary: new THREE.MeshStandardMaterial({
          color: theme.secondary.color,
          metalness: theme.secondary.metalness,
          roughness: theme.secondary.roughness
        }),
        accent: new THREE.MeshStandardMaterial({
          color: theme.accent.color,
          emissive: theme.accent.emissive,
          emissiveIntensity: theme.accent.emissiveIntensity,
          roughness: 0.2
        }),
        glow: new THREE.MeshBasicMaterial({
          color: theme.glowColor
        }),
        joint: new THREE.MeshStandardMaterial({
          color: theme.joint.color,
          metalness: theme.joint.metalness,
          roughness: theme.joint.roughness
        }),
        visor: new THREE.MeshPhysicalMaterial({
          color: theme.accent.color,
          emissive: theme.accent.emissive,
          emissiveIntensity: 0.6,
          metalness: 0.1,
          roughness: 0.1,
          transmission: 0.6,
          transparent: true,
          opacity: 0.85
        })
      };
    }

    // Lighting Systems
    const lightsGroup = new THREE.Group();
    scene.add(lightsGroup);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    lightsGroup.add(ambientLight);

    const mainKeyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    mainKeyLight.position.set(3, 5, 4);
    mainKeyLight.castShadow = true;
    mainKeyLight.shadow.mapSize.width = 1024;
    mainKeyLight.shadow.mapSize.height = 1024;
    mainKeyLight.shadow.bias = -0.001;
    lightsGroup.add(mainKeyLight);

    const fillLight = new THREE.DirectionalLight(0x00d2ff, 0.8);
    fillLight.position.set(-4, 3, -2);
    lightsGroup.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x00f5a0, 1.2);
    rimLight.position.set(0, 4, -4);
    lightsGroup.add(rimLight);

    const platformPointLight = new THREE.PointLight(0x00f5a0, 1.5, 5);
    platformPointLight.position.set(0, 0.2, 0);
    lightsGroup.add(platformPointLight);

    function updateLighting(mode) {
      if (mode === 'warm') {
        ambientLight.color.setHex(0x3a2e1d);
        ambientLight.intensity = 0.55;
        mainKeyLight.color.setHex(0xffcb77);
        mainKeyLight.intensity = 1.6;
        fillLight.color.setHex(0xfe6d73);
        fillLight.intensity = 0.6;
        rimLight.color.setHex(0xffe066);
        rimLight.intensity = 1.3;
        platformPointLight.color.setHex(0xffaa00);
        groundGridMat.color.setHex(0xffaa00);
      } else if (mode === 'neon') {
        ambientLight.color.setHex(0x120826);
        ambientLight.intensity = 0.4;
        mainKeyLight.color.setHex(0x00f0ff);
        mainKeyLight.intensity = 1.5;
        fillLight.color.setHex(0xff007f);
        fillLight.intensity = 1.1;
        rimLight.color.setHex(0x7928ca);
        rimLight.intensity = 1.6;
        platformPointLight.color.setHex(0x00f0ff);
        groundGridMat.color.setHex(0x00f0ff);
      } else {
        // lab (default)
        ambientLight.color.setHex(0xffffff);
        ambientLight.intensity = 0.45;
        mainKeyLight.color.setHex(0xf0faff);
        mainKeyLight.intensity = 1.4;
        fillLight.color.setHex(0x00d2ff);
        fillLight.intensity = 0.8;
        rimLight.color.setHex(0x00f5a0);
        rimLight.intensity = 1.2;
        platformPointLight.color.setHex(0x00f5a0);
        groundGridMat.color.setHex(0x00f5a0);
      }
    }

    // 360° Floor Holographic Platform
    const platformGroup = new THREE.Group();
    scene.add(platformGroup);

    // Floor Base Disk (Shadow Receiver)
    const floorGeo = new THREE.CircleGeometry(2.2, 64);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x080f0c,
      roughness: 0.7,
      metalness: 0.3
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.receiveShadow = true;
    platformGroup.add(floorMesh);

    // Circular Radar Rings & Ticks
    const groundGridMat = new THREE.LineBasicMaterial({
      color: 0x00f5a0,
      transparent: true,
      opacity: 0.45
    });

    function createCircleLine(radius, segments = 64) {
      const pts = [];
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(theta) * radius, 0.005, Math.sin(theta) * radius));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      return new THREE.Line(geo, groundGridMat);
    }

    const ring1 = createCircleLine(0.8);
    const ring2 = createCircleLine(1.4);
    const ring3 = createCircleLine(1.95);
    platformGroup.add(ring1, ring2, ring3);

    // Compass Tick Marks on Outer Ring (every 30 degrees)
    const ticksGroup = new THREE.Group();
    for (let deg = 0; deg < 360; deg += 30) {
      const rad = (deg * Math.PI) / 180;
      const isMajor = deg % 90 === 0;
      const len = isMajor ? 0.16 : 0.08;
      const innerR = 1.95 - len;
      const pts = [
        new THREE.Vector3(Math.cos(rad) * innerR, 0.006, Math.sin(rad) * innerR),
        new THREE.Vector3(Math.cos(rad) * 1.95, 0.006, Math.sin(rad) * 1.95)
      ];
      const tickGeo = new THREE.BufferGeometry().setFromPoints(pts);
      const tickLine = new THREE.Line(
        tickGeo,
        new THREE.LineBasicMaterial({
          color: isMajor ? 0xd8ff4b : 0x00f5a0,
          transparent: true,
          opacity: isMajor ? 0.85 : 0.4
        })
      );
      ticksGroup.add(tickLine);
    }
    platformGroup.add(ticksGroup);

    // Radar Sweeping Scan Line
    const scanPts = [new THREE.Vector3(0, 0.007, 0), new THREE.Vector3(1.95, 0.007, 0)];
    const scanGeo = new THREE.BufferGeometry().setFromPoints(scanPts);
    const scanLine = new THREE.Line(
      scanGeo,
      new THREE.LineBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.65 })
    );
    platformGroup.add(scanLine);

    // Floating Cyber Dust Particle System
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = Math.random() * 2.0;
      const theta = Math.random() * Math.PI * 2;
      particlePos[i * 3] = Math.cos(theta) * r;
      particlePos[i * 3 + 1] = Math.random() * 2.5;
      particlePos[i * 3 + 2] = Math.sin(theta) * r;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00f5a0,
      size: 0.035,
      transparent: true,
      opacity: 0.55
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Robot Stage Container
    const robotStage = new THREE.Group();
    scene.add(robotStage);

    // Current Loaded Model Object
    let currentRobotModel = null;
    let modelAnimations = [];
    let hotspotAnchors = [];

    // ==========================================
    // ROBOT GENERATORS
    // ==========================================

    /**
     * 1. TITAN-X BIPED HUMANOID ROBOT
     */
    function buildHumanoidModel(mats) {
      const group = new THREE.Group();
      group.name = 'TitanX';
      const anims = [];
      const hotspots = [];

      // Main Torso Root
      const torso = new THREE.Group();
      torso.position.y = 1.05;
      group.add(torso);

      // Chest Chassis
      const chestGeo = new THREE.BoxGeometry(0.52, 0.44, 0.32);
      const chest = new THREE.Mesh(chestGeo, mats.primary);
      chest.castShadow = true;
      chest.position.y = 0.15;
      torso.add(chest);

      // Chest Armor Bevel Plates
      const armorPlateGeo = new THREE.BoxGeometry(0.44, 0.22, 0.08);
      const upperArmor = new THREE.Mesh(armorPlateGeo, mats.secondary);
      upperArmor.position.set(0, 0.22, 0.16);
      upperArmor.castShadow = true;
      torso.add(upperArmor);

      // AI Arc-Reactor Core (Glowing Heart)
      const coreOuterGeo = new THREE.TorusGeometry(0.085, 0.02, 16, 32);
      const coreOuter = new THREE.Mesh(coreOuterGeo, mats.joint);
      coreOuter.position.set(0, 0.16, 0.19);
      torso.add(coreOuter);

      const coreInnerGeo = new THREE.CylinderGeometry(0.065, 0.065, 0.03, 24);
      const coreInner = new THREE.Mesh(coreInnerGeo, mats.accent);
      coreInner.rotation.x = Math.PI / 2;
      coreInner.position.set(0, 0.16, 0.19);
      torso.add(coreInner);

      hotspots.push({
        name: 'AI Arc-Core Brain',
        desc: 'Neural edge-inference core running YOLOv8 object vision & PID balancing at 200 Hz.',
        object: coreInner,
        offset: new THREE.Vector3(0, 0, 0.25)
      });

      // Spine & Abdomen Vertebrae
      for (let i = 0; i < 3; i++) {
        const spineSegGeo = new THREE.CylinderGeometry(0.14 - i * 0.015, 0.13 - i * 0.015, 0.05, 16);
        const spineSeg = new THREE.Mesh(spineSegGeo, mats.secondary);
        spineSeg.position.set(0, -0.04 - i * 0.06, 0);
        spineSeg.castShadow = true;
        torso.add(spineSeg);
      }

      // Hydraulic Side Pistons
      const pistonGeo = new THREE.CylinderGeometry(0.018, 0.018, 0.22, 12);
      const pistonL = new THREE.Mesh(pistonGeo, mats.joint);
      pistonL.position.set(-0.2, -0.08, 0.08);
      const pistonR = pistonL.clone();
      pistonR.position.x = 0.2;
      torso.add(pistonL, pistonR);

      // Head & Neck
      const neckGeo = new THREE.CylinderGeometry(0.08, 0.09, 0.1, 16);
      const neck = new THREE.Mesh(neckGeo, mats.joint);
      neck.position.set(0, 0.41, 0);
      torso.add(neck);

      const headGroup = new THREE.Group();
      headGroup.position.set(0, 0.54, 0.02);
      torso.add(headGroup);

      // Angular Helmet
      const helmetGeo = new THREE.BoxGeometry(0.28, 0.26, 0.26);
      const helmet = new THREE.Mesh(helmetGeo, mats.primary);
      helmet.castShadow = true;
      headGroup.add(helmet);

      // Visor / Optics Lenses
      const visorGeo = new THREE.BoxGeometry(0.22, 0.07, 0.06);
      const visor = new THREE.Mesh(visorGeo, mats.visor);
      visor.position.set(0, 0.02, 0.13);
      headGroup.add(visor);

      // Side Antenna Sensors
      const antGeo = new THREE.CylinderGeometry(0.008, 0.008, 0.18, 8);
      const antL = new THREE.Mesh(antGeo, mats.joint);
      antL.rotation.z = -0.3;
      antL.position.set(-0.16, 0.08, -0.04);
      const antTipL = new THREE.Mesh(new THREE.SphereGeometry(0.02, 8, 8), mats.accent);
      antTipL.position.set(0, 0.09, 0);
      antL.add(antTipL);

      const antR = antL.clone();
      antR.rotation.z = 0.3;
      antR.position.x = 0.16;
      headGroup.add(antL, antR);

      hotspots.push({
        name: 'LiDAR & Vision Optics',
        desc: 'Stereo depth perception & 360° laser spatial mapping for autonomous obstacle avoidance.',
        object: visor,
        offset: new THREE.Vector3(0, 0.15, 0.15)
      });

      // Arms (Shoulders, Biceps, Forearms, Hands)
      function createArm(isLeft) {
        const armGroup = new THREE.Group();
        const side = isLeft ? -1 : 1;
        armGroup.position.set(side * 0.35, 0.3, 0);

        // Shoulder Ball Joint
        const shoulderJoint = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 16), mats.joint);
        shoulderJoint.castShadow = true;
        armGroup.add(shoulderJoint);

        // Shoulder Armor Pauldron
        const pauldronGeo = new THREE.BoxGeometry(0.18, 0.14, 0.18);
        const pauldron = new THREE.Mesh(pauldronGeo, mats.primary);
        pauldron.position.set(side * 0.04, 0.06, 0);
        pauldron.castShadow = true;
        armGroup.add(pauldron);

        // Upper Arm / Bicep
        const bicepGeo = new THREE.CylinderGeometry(0.065, 0.055, 0.26, 14);
        const bicep = new THREE.Mesh(bicepGeo, mats.secondary);
        bicep.position.set(side * 0.02, -0.18, 0);
        bicep.castShadow = true;
        armGroup.add(bicep);

        // Elbow Joint
        const elbowGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.1, 12);
        const elbow = new THREE.Mesh(elbowGeo, mats.joint);
        elbow.rotation.z = Math.PI / 2;
        elbow.position.set(side * 0.02, -0.32, 0);
        armGroup.add(elbow);

        // Forearm
        const forearmGeo = new THREE.BoxGeometry(0.1, 0.28, 0.12);
        const forearm = new THREE.Mesh(forearmGeo, mats.primary);
        forearm.position.set(side * 0.02, -0.48, 0.03);
        forearm.rotation.x = -0.15;
        forearm.castShadow = true;
        armGroup.add(forearm);

        // Hand & Fingers
        const hand = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.08), mats.secondary);
        hand.position.set(side * 0.02, -0.65, 0.06);
        armGroup.add(hand);

        for (let f = 0; f < 3; f++) {
          const finger = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.06, 0.02), mats.joint);
          finger.position.set((f - 1) * 0.025, -0.06, 0.02);
          hand.add(finger);
        }

        return armGroup;
      }

      const armLeft = createArm(true);
      const armRight = createArm(false);
      armLeft.rotation.z = 0.08;
      armRight.rotation.z = -0.08;
      torso.add(armLeft, armRight);

      hotspots.push({
        name: 'High-Torque Joint Servos',
        desc: 'Brushless harmonic-drive servos delivering 35 Nm torque with 0.02° precision.',
        object: armLeft,
        offset: new THREE.Vector3(-0.15, 0, 0)
      });

      // Pelvis / Hips
      const pelvisGeo = new THREE.BoxGeometry(0.42, 0.14, 0.26);
      const pelvis = new THREE.Mesh(pelvisGeo, mats.primary);
      pelvis.position.set(0, -0.26, 0);
      pelvis.castShadow = true;
      torso.add(pelvis);

      // Legs (Thighs, Knees, Calves, Feet)
      function createLeg(isLeft) {
        const legGroup = new THREE.Group();
        const side = isLeft ? -1 : 1;
        legGroup.position.set(side * 0.16, -0.32, 0);

        // Hip Joint
        const hip = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), mats.joint);
        legGroup.add(hip);

        // Thigh
        const thighGeo = new THREE.BoxGeometry(0.14, 0.36, 0.16);
        const thigh = new THREE.Mesh(thighGeo, mats.primary);
        thigh.position.set(0, -0.2, 0.02);
        thigh.castShadow = true;
        legGroup.add(thigh);

        // Knee Joint
        const knee = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.14, 16), mats.joint);
        knee.rotation.z = Math.PI / 2;
        knee.position.set(0, -0.4, 0.02);
        legGroup.add(knee);

        // Calf
        const calfGeo = new THREE.BoxGeometry(0.13, 0.38, 0.14);
        const calf = new THREE.Mesh(calfGeo, mats.secondary);
        calf.position.set(0, -0.62, -0.02);
        calf.castShadow = true;
        legGroup.add(calf);

        // Ankle & Stabilizer Foot
        const footGeo = new THREE.BoxGeometry(0.16, 0.08, 0.28);
        const foot = new THREE.Mesh(footGeo, mats.primary);
        foot.position.set(0, -0.84, 0.04);
        foot.castShadow = true;
        legGroup.add(foot);

        // Foot LED Soles
        const soleGlow = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.015, 0.24), mats.accent);
        soleGlow.position.set(0, -0.045, 0);
        foot.add(soleGlow);

        return legGroup;
      }

      const legLeft = createLeg(true);
      const legRight = createLeg(false);
      torso.add(legLeft, legRight);

      // Animation Hooks (Breathing / Subtle Posture Sway)
      anims.push(function (time) {
        torso.position.y = 1.05 + Math.sin(time * 2.2) * 0.035;
        headGroup.rotation.y = Math.sin(time * 1.1) * 0.12;
        headGroup.rotation.x = Math.sin(time * 1.8) * 0.05;
        armLeft.rotation.x = Math.sin(time * 2.2) * 0.08;
        armRight.rotation.x = -Math.sin(time * 2.2) * 0.08;
        coreInner.scale.setScalar(1 + Math.sin(time * 4) * 0.06);
      });

      return { root: group, anims, hotspots };
    }

    /**
     * 2. CYBERQUAD MECHADOG (Autonomous AI Quadruped)
     */
    function buildCyberDogModel(mats) {
      const group = new THREE.Group();
      group.name = 'CyberDog';
      const anims = [];
      const hotspots = [];

      const bodyRoot = new THREE.Group();
      bodyRoot.position.y = 0.72;
      group.add(bodyRoot);

      // Main Torso Chassis
      const chassisGeo = new THREE.BoxGeometry(0.5, 0.24, 0.95);
      const chassis = new THREE.Mesh(chassisGeo, mats.primary);
      chassis.castShadow = true;
      bodyRoot.add(chassis);

      // Top Electronics Deck
      const deckGeo = new THREE.BoxGeometry(0.42, 0.08, 0.75);
      const deck = new THREE.Mesh(deckGeo, mats.secondary);
      deck.position.set(0, 0.15, 0.02);
      deck.castShadow = true;
      bodyRoot.add(deck);

      // Top 360° Spinning LiDAR Puck
      const lidarBase = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.1, 0.06, 20), mats.joint);
      lidarBase.position.set(0, 0.22, 0.15);
      bodyRoot.add(lidarBase);

      const lidarSpinner = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.05, 18), mats.accent);
      lidarSpinner.position.set(0, 0.05, 0);
      lidarBase.add(lidarSpinner);

      hotspots.push({
        name: '360° LiDAR Scanner',
        desc: 'Rotating time-of-flight laser scanner generating 3D spatial point clouds in real time.',
        object: lidarSpinner,
        offset: new THREE.Vector3(0, 0.25, 0)
      });

      // Head / Sensor Nose
      const headGroup = new THREE.Group();
      headGroup.position.set(0, 0.12, 0.54);
      bodyRoot.add(headGroup);

      const headGeo = new THREE.BoxGeometry(0.28, 0.2, 0.24);
      const head = new THREE.Mesh(headGeo, mats.primary);
      head.castShadow = true;
      headGroup.add(head);

      // Dual Camera Eyes
      const eyeGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.03, 16);
      const eyeL = new THREE.Mesh(eyeGeo, mats.accent);
      eyeL.rotation.x = Math.PI / 2;
      eyeL.position.set(-0.07, 0.02, 0.12);
      const eyeR = eyeL.clone();
      eyeR.position.x = 0.07;
      headGroup.add(eyeL, eyeR);

      hotspots.push({
        name: 'AI Dual Spatial Vision',
        desc: 'Binocular AI stereo cameras calculating disparity maps for terrain classification.',
        object: headGroup,
        offset: new THREE.Vector3(0, 0.15, 0.2)
      });

      // 4 Articulated Quadruped Legs
      const legPivots = [];
      const legPositions = [
        { x: -0.28, z: 0.35, isLeft: true }, // Front-Left
        { x: 0.28, z: 0.35, isLeft: false }, // Front-Right
        { x: -0.28, z: -0.35, isLeft: true }, // Rear-Left
        { x: 0.28, z: -0.35, isLeft: false } // Rear-Right
      ];

      legPositions.forEach((pos, idx) => {
        const hipRoot = new THREE.Group();
        hipRoot.position.set(pos.x, 0, pos.z);
        bodyRoot.add(hipRoot);

        // Hip Actuator
        const hip = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.12, 16), mats.joint);
        hip.rotation.z = Math.PI / 2;
        hipRoot.add(hip);

        // Thigh
        const thighGroup = new THREE.Group();
        thighGroup.position.set(pos.isLeft ? -0.06 : 0.06, 0, 0);
        hipRoot.add(thighGroup);

        const thigh = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.32, 0.1), mats.primary);
        thigh.position.set(0, -0.14, -0.04);
        thigh.rotation.x = -0.3;
        thigh.castShadow = true;
        thighGroup.add(thigh);

        // Knee & Shank
        const knee = new THREE.Mesh(new THREE.SphereGeometry(0.05, 12, 12), mats.joint);
        knee.position.set(0, -0.28, -0.09);
        thighGroup.add(knee);

        const shank = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.02, 0.34, 12), mats.secondary);
        shank.position.set(0, -0.44, 0.02);
        shank.rotation.x = 0.45;
        shank.castShadow = true;
        thighGroup.add(shank);

        // Rubber Foot Pad
        const foot = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 12), mats.accent);
        foot.position.set(0, -0.58, 0.09);
        thighGroup.add(foot);

        legPivots.push(hipRoot);
      });

      // Tail Communication Mast
      const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.015, 0.3, 8), mats.joint);
      tail.rotation.x = -0.8;
      tail.position.set(0, 0.1, -0.48);
      bodyRoot.add(tail);

      const tailTip = new THREE.Mesh(new THREE.SphereGeometry(0.02, 8, 8), mats.accent);
      tailTip.position.set(0, 0.15, 0);
      tail.add(tailTip);

      // Animation Hooks (Dynamic stance, spinning LiDAR, tail sway)
      anims.push(function (time) {
        lidarSpinner.rotation.y += 0.08;
        bodyRoot.position.y = 0.72 + Math.sin(time * 3) * 0.02;
        headGroup.rotation.x = Math.sin(time * 1.5) * 0.08;
        headGroup.rotation.y = Math.sin(time * 1.2) * 0.12;
        tail.rotation.z = Math.sin(time * 4) * 0.15;
      });

      return { root: group, anims, hotspots };
    }

    /**
     * 3. 6-DOF PRECISION INDUSTRIAL ROBOTIC VISION ARM
     */
    function buildRoboticArmModel(mats) {
      const group = new THREE.Group();
      group.name = 'RoboArm';
      const anims = [];
      const hotspots = [];

      // Base Pedestal
      const basePedestal = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.48, 0.14, 32), mats.secondary);
      basePedestal.position.y = 0.07;
      basePedestal.castShadow = true;
      group.add(basePedestal);

      // Rotating Turntable Ring
      const turntableRing = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.06, 28), mats.joint);
      turntableRing.position.y = 0.17;
      group.add(turntableRing);

      const armRoot = new THREE.Group();
      armRoot.position.y = 0.2;
      group.add(armRoot);

      // J1: Turret Housing
      const turretHousing = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.28, 0.34), mats.primary);
      turretHousing.position.y = 0.14;
      turretHousing.castShadow = true;
      armRoot.add(turretHousing);

      hotspots.push({
        name: 'Harmonic Drive Base J1',
        desc: 'Continuous 360° rotating turret powered by zero-backlash harmonic gear set.',
        object: turretHousing,
        offset: new THREE.Vector3(0, 0.2, 0.25)
      });

      // J2: Shoulder Pivot
      const shoulderJoint = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.36, 20), mats.joint);
      shoulderJoint.rotation.z = Math.PI / 2;
      shoulderJoint.position.set(0, 0.3, 0);
      armRoot.add(shoulderJoint);

      const upperArmGroup = new THREE.Group();
      upperArmGroup.position.set(0, 0.3, 0);
      armRoot.add(upperArmGroup);

      // Upper Arm Boom
      const boom = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.72, 0.18), mats.primary);
      boom.position.set(0, 0.36, 0);
      boom.castShadow = true;
      upperArmGroup.add(boom);

      // J3: Elbow Pivot
      const elbowJoint = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.28, 18), mats.joint);
      elbowJoint.rotation.z = Math.PI / 2;
      elbowJoint.position.set(0, 0.72, 0);
      upperArmGroup.add(elbowJoint);

      const forearmGroup = new THREE.Group();
      forearmGroup.position.set(0, 0.72, 0);
      upperArmGroup.add(forearmGroup);

      // Forearm Boom
      const forearmBoom = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.58, 0.14), mats.secondary);
      forearmBoom.position.set(0, 0.29, 0);
      forearmBoom.castShadow = true;
      forearmGroup.add(forearmBoom);

      // J4 & J5: Wrist Assembly
      const wrist = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), mats.joint);
      wrist.position.set(0, 0.58, 0);
      forearmGroup.add(wrist);

      const wristGroup = new THREE.Group();
      wristGroup.position.set(0, 0.58, 0);
      forearmGroup.add(wristGroup);

      // End-Effector / Two-Finger Parallel Gripper
      const gripperBase = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.08, 0.12), mats.primary);
      gripperBase.position.set(0, 0.06, 0);
      wristGroup.add(gripperBase);

      const fingerGeo = new THREE.BoxGeometry(0.025, 0.14, 0.04);
      const fingerL = new THREE.Mesh(fingerGeo, mats.accent);
      fingerL.position.set(-0.06, 0.14, 0);
      const fingerR = new THREE.Mesh(fingerGeo, mats.accent);
      fingerR.position.set(0.06, 0.14, 0);
      wristGroup.add(fingerL, fingerR);

      // Gripper Vision Lens & Targeting Crosshair
      const camLens = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.04, 14), mats.joint);
      camLens.rotation.x = Math.PI / 2;
      camLens.position.set(0, 0.06, 0.08);
      wristGroup.add(camLens);

      hotspots.push({
        name: 'Wrist Vision Cam & Gripper',
        desc: '60 FPS macro camera with AI bounding-box targeting & pneumatic claw actuator.',
        object: wristGroup,
        offset: new THREE.Vector3(0, 0.2, 0.15)
      });

      // Kinematic Loop Animation
      anims.push(function (time) {
        armRoot.rotation.y = Math.sin(time * 0.8) * 0.45;
        upperArmGroup.rotation.z = -0.2 + Math.sin(time * 1.2) * 0.25;
        forearmGroup.rotation.z = 0.5 + Math.sin(time * 1.2 + 1.2) * 0.35;
        wristGroup.rotation.z = -0.3 + Math.sin(time * 1.2 + 2.4) * 0.2;

        // Gripper cycle
        const clawDist = 0.035 + Math.sin(time * 2) * 0.025;
        fingerL.position.x = -clawDist;
        fingerR.position.x = clawDist;
      });

      return { root: group, anims, hotspots };
    }

    // ==========================================
    // SWITCH ROBOT MODEL
    // ==========================================
    function loadRobotModel(modelType) {
      if (currentRobotModel) {
        robotStage.remove(currentRobotModel);
        currentRobotModel.traverse(node => {
          if (node.isMesh) {
            node.geometry.dispose();
          }
        });
      }
      modelAnimations = [];
      hotspotAnchors = [];

      let modelData;
      if (modelType === 'dog') {
        modelData = buildCyberDogModel(activeMats);
        if (controls) controls.target.set(0, 0.65, 0);
      } else if (modelType === 'arm') {
        modelData = buildRoboticArmModel(activeMats);
        if (controls) controls.target.set(0, 0.9, 0);
      } else {
        modelData = buildHumanoidModel(activeMats);
        if (controls) controls.target.set(0, 0.95, 0);
      }

      currentRobotModel = modelData.root;
      modelAnimations = modelData.anims;
      hotspotAnchors = modelData.hotspots;
      robotStage.add(currentRobotModel);

      state.currentModel = modelType;
      renderHotspotMarkers();
    }

    // ==========================================
    // HOTSPOTS HUD SYSTEM
    // ==========================================
    const hotspotsOverlay = document.getElementById('robot-hotspots-overlay');
    const hotspotCard = document.getElementById('robot-hotspot-card');

    function renderHotspotMarkers() {
      if (!hotspotsOverlay) return;
      hotspotsOverlay.innerHTML = '';
      if (!hotspotAnchors || hotspotAnchors.length === 0) return;

      hotspotAnchors.forEach((hs, idx) => {
        const pin = document.createElement('button');
        pin.className = 'robot-hotspot-pin';
        pin.setAttribute('type', 'button');
        pin.setAttribute('aria-label', hs.name);
        pin.dataset.index = idx;
        pin.innerHTML = `
          <span class="hotspot-pulse"></span>
          <span class="hotspot-dot">${idx + 1}</span>
          <span class="hotspot-label">${hs.name}</span>
        `;

        pin.addEventListener('click', e => {
          e.stopPropagation();
          showHotspotCard(hs, pin);
        });

        hotspotsOverlay.appendChild(pin);
        hs.domElement = pin;
      });
    }

    function showHotspotCard(hs, pinElement) {
      if (!hotspotCard) return;
      const title = hotspotCard.querySelector('.hotspot-card-title');
      const desc = hotspotCard.querySelector('.hotspot-card-desc');
      if (title) title.textContent = hs.name;
      if (desc) desc.textContent = hs.desc;

      hotspotCard.classList.add('is-active');
      state.activeHotspot = hs;
    }

    // Close hotspot card on canvas click
    renderer.domElement.addEventListener('pointerdown', () => {
      if (hotspotCard) hotspotCard.classList.remove('is-active');
      state.activeHotspot = null;
    });

    const closeHotspotBtn = document.getElementById('close-hotspot-card');
    if (closeHotspotBtn) {
      closeHotspotBtn.addEventListener('click', () => {
        if (hotspotCard) hotspotCard.classList.remove('is-active');
      });
    }

    // Project 3D Hotspot positions to 2D Screen
    const tempVec = new THREE.Vector3();
    function updateHotspotsDOM() {
      if (!hotspotAnchors || hotspotAnchors.length === 0) return;
      const hw = renderer.domElement.clientWidth / 2;
      const hh = renderer.domElement.clientHeight / 2;

      hotspotAnchors.forEach(hs => {
        if (!hs.domElement || !hs.object) return;
        hs.object.getWorldPosition(tempVec);
        if (hs.offset) {
          tempVec.add(hs.offset);
        }
        tempVec.project(camera);

        // Check if behind camera
        if (tempVec.z > 1) {
          hs.domElement.style.display = 'none';
          return;
        }

        const x = tempVec.x * hw + hw;
        const y = -(tempVec.y * hh) + hh;

        hs.domElement.style.display = 'flex';
        hs.domElement.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    }

    // ==========================================
    // UI CONTROLS WIRING
    // ==========================================
    const telemetryYaw = document.getElementById('telemetry-yaw');
    const telemetryFps = document.getElementById('telemetry-fps');

    // 1. Model Selection Buttons
    const modelBtns = document.querySelectorAll('[data-robot-model]');
    modelBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        modelBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        loadRobotModel(btn.dataset.robotModel);
      });
    });

    // 2. 360° Spin Toggle Button
    const spinToggleBtn = document.getElementById('btn-spin-toggle');
    if (spinToggleBtn) {
      spinToggleBtn.addEventListener('click', () => {
        state.isSpinning = !state.isSpinning;
        if (controls) controls.autoRotate = state.isSpinning;
        spinToggleBtn.classList.toggle('active', state.isSpinning);
        const label = spinToggleBtn.querySelector('.btn-label');
        if (label) label.textContent = state.isSpinning ? '360° Spin On' : '360° Spin Off';
      });
    }

    // 3. Blueprint / Wireframe Mode Toggle
    const blueprintBtn = document.getElementById('btn-blueprint-toggle');
    if (blueprintBtn) {
      blueprintBtn.addEventListener('click', () => {
        state.isBlueprint = !state.isBlueprint;
        blueprintBtn.classList.toggle('active', state.isBlueprint);
        activeMats = createMaterialSet(state.currentMaterial, state.isBlueprint);
        loadRobotModel(state.currentModel);
      });
    }

    // 4. Chassis Armor & Material Finish Buttons
    const materialBtns = document.querySelectorAll('[data-robot-finish]');
    materialBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        materialBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.currentMaterial = btn.dataset.robotFinish;
        activeMats = createMaterialSet(state.currentMaterial, state.isBlueprint);
        loadRobotModel(state.currentModel);
      });
    });

    // 5. Studio Lighting Mode Buttons
    const lightBtns = document.querySelectorAll('[data-studio-light]');
    lightBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        lightBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.currentLight = btn.dataset.studioLight;
        updateLighting(state.currentLight);
      });
    });

    // Reset Camera View Button
    const resetCamBtn = document.getElementById('btn-reset-cam');
    if (resetCamBtn) {
      resetCamBtn.addEventListener('click', () => {
        camera.position.set(0, 1.8, 4.6);
        if (controls) {
          controls.target.set(0, 0.95, 0);
          controls.update();
        }
      });
    }

    // Initial Model & Lighting Load
    loadRobotModel(state.currentModel);
    updateLighting(state.currentLight);

    // ==========================================
    // ANIMATION & RENDER LOOP
    // ==========================================
    let clock = new THREE.Clock();
    let frameCount = 0;
    let lastFpsUpdate = 0;

    function animate() {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const delta = clock.getDelta();

      // Update Orbit Controls
      if (controls) {
        controls.update();

        // Update 360° Compass Telemetry in HUD
        if (telemetryYaw) {
          const angleRad = Math.atan2(camera.position.x, camera.position.z);
          let deg = Math.round((angleRad * 180) / Math.PI);
          if (deg < 0) deg += 360;
          telemetryYaw.textContent = `${deg}°`;
        }
      }

      // Rotate Floor Radar Scan Line
      scanLine.rotation.y += 0.025;

      // Animate Floating Cyber Particles
      const pPositions = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        pPositions[i * 3 + 1] += 0.004;
        if (pPositions[i * 3 + 1] > 2.5) {
          pPositions[i * 3 + 1] = 0.01;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Execute Active Robot Kinematic Animations
      modelAnimations.forEach(fn => fn(elapsedTime));

      // Update 2D Position of 3D Hotspot Badges
      updateHotspotsDOM();

      // FPS Meter
      frameCount++;
      if (elapsedTime - lastFpsUpdate > 0.5) {
        if (telemetryFps) {
          const fps = Math.round(frameCount / (elapsedTime - lastFpsUpdate));
          telemetryFps.textContent = `${fps} FPS`;
        }
        frameCount = 0;
        lastFpsUpdate = elapsedTime;
      }

      renderer.render(scene, camera);
    }

    animate();

    // ==========================================
    // RESPONSIVE RESIZE
    // ==========================================
    function handleResize() {
      const w = container.clientWidth;
      const h = container.clientHeight || 420;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }

    window.addEventListener('resize', handleResize);
    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(handleResize);
      ro.observe(container);
    }
  }
})();
