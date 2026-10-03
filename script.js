const topicData = {
	robotics: { kicker: '01 / FOUNDATION', title: 'Robotics & Electronics', summary: 'Learn how sensors, circuits, controllers and motors work together to make machines sense, move and respond.', learnings: ['Sensors, actuators and motor drivers', 'Arduino, ESP32 and Raspberry Pi control', 'LEDs, displays, buzzers and relays', 'Breadboard circuits and safe prototyping'], useTitle: 'Automation and smart machines', use: 'The same building blocks power factory robots, delivery systems, assistive devices and smart products.', project: 'Build a sensor-guided rover that detects an obstacle and changes direction.', image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=85' },
	coding: { kicker: '02 / CREATE', title: 'Programming & Coding', summary: 'Turn ideas into instructions with visual coding first, then Python, C/C++, MicroPython, VS Code and Git.', learnings: ['Block coding, Scratch and PictoBlox', 'Arduino IDE and C/C++ fundamentals', 'Python, MicroPython and control flow', 'VS Code and Git/GitHub workflows'], useTitle: 'Software behind every robot', use: 'Programming is used in embedded products, websites, data tools, automation systems and every autonomous machine.', project: 'Program an ESP32 rover from sensor input to motor movement.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85' },
	ai: { kicker: '03 / THINK', title: 'Artificial Intelligence', summary: 'Understand how data and trained models help machines classify, predict and make useful decisions.', learnings: ['AI and machine learning fundamentals', 'Datasets, features and model concepts', 'Image classification and object detection', 'Pose, gesture and responsible automation'], useTitle: 'Decision support and intelligent tools', use: 'AI is used in quality inspection, healthcare support, agriculture, accessibility tools and logistics.', project: 'Train a simple image classifier that sorts objects into useful categories.', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85' },
	vision: { kicker: '04 / SEE', title: 'Computer Vision', summary: 'Use cameras and code to help a computer interpret images, video, colour, shapes and movement.', learnings: ['Camera-based projects and image processing', 'Object detection, tracking and counting', 'Colour and shape recognition', 'OpenCV with Python'], useTitle: 'Inspection, safety and navigation', use: 'Computer vision helps robots navigate, factories inspect products, and systems understand visual environments.', project: 'Create an AI vision counter that detects and counts objects on a table.', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85' },
	iot: { kicker: '05 / CONNECT', title: 'IoT & Smart Automation', summary: 'Connect sensors, devices and dashboards so physical systems can be monitored and controlled remotely.', learnings: ['Wi-Fi, Bluetooth and MQTT messaging', 'ESP32 smart systems', 'Web dashboards and cloud connectivity', 'Remote monitoring and home automation'], useTitle: 'Connected homes and industries', use: 'IoT is used for smart agriculture, energy monitoring, weather stations, homes and predictive maintenance.', project: 'Build a soil-monitoring station that sends live readings to a web dashboard.', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=85' },
	mechanical: { kicker: '06 / ENGINEER', title: 'Mechanical Design', summary: 'Design the physical body of a machine, from chassis and gears to joints, grippers and printable prototypes.', learnings: ['Chassis, wheels, gears and bearings', 'Mechanical joints and robotic grippers', 'CAD basics and 3D printing', 'Fabrication, assembly and testing'], useTitle: 'Products that move in the real world', use: 'Mechanical design shapes robots, prosthetics, manufacturing tools, drones and every machine that must carry force.', project: 'Design and print a gripper that can pick up and sort different objects.', image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1200&q=85' },
	advanced: { kicker: '07 / ADVANCE', title: 'Advanced Robotics', summary: 'Bring code, electronics, mechanics and AI together to build autonomous systems that navigate and act.', learnings: ['Autonomous robots and obstacle avoidance', 'AGV/AMR and navigation concepts', 'ROS 2 nodes, topics and actions', 'Simulation, SLAM and robot descriptions'], useTitle: 'Autonomous mobility and research', use: 'Advanced robotics is used in warehouses, hospitals, exploration, transport and next-generation research labs.', project: 'Simulate an autonomous mobile robot that maps a room and follows a route.', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=85' },
	scratch: { kicker: 'BEGINNER / VISUAL CODE', title: 'Scratch', summary: 'A friendly block-based environment where beginners learn logic by making stories, games and interactive machines.', learnings: ['Sequences, events and loops', 'Variables, conditions and game logic', 'Creative problem solving', 'First steps toward robotics control'], useTitle: 'Learning logic through play', use: 'Scratch is used in classrooms and creative coding programs to build computational thinking before text-based code.', project: 'Create a robot maze game where a character avoids obstacles and reaches a charging station.', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=85' },
	pictoblox: { kicker: 'BEGINNER / AI ROBOTICS', title: 'PictoBlox', summary: 'Combine block coding with AI, robotics, speech and vision extensions for hands-on smart projects.', learnings: ['Visual programming and hardware control', 'AI camera and speech extensions', 'Robotics logic and events', 'Prototype testing and iteration'], useTitle: 'Accessible AI prototyping', use: 'PictoBlox helps young makers quickly prototype interactive classroom tools, robots and vision experiments.', project: 'Make a camera-enabled robot that recognizes a hand gesture and reacts with lights.', image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=85' },
	tinkercad: { kicker: 'BEGINNER / SIMULATION', title: 'Tinkercad', summary: 'Simulate circuits and design simple 3D parts safely before using real components and tools.', learnings: ['Virtual breadboard wiring', 'Arduino circuit simulation', 'Simple CAD shapes and dimensions', 'Prototype planning and debugging'], useTitle: 'Safer early-stage prototyping', use: 'Simulation is used by engineers and students to test ideas before spending time or materials on a physical build.', project: 'Design a simulated traffic light with buttons, LEDs and a timed controller.', image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1200&q=85' },
	python: { kicker: 'INTERMEDIATE / PROGRAMMING', title: 'Python', summary: 'A readable language for robotics logic, Raspberry Pi GPIO, data, automation and artificial intelligence.', learnings: ['Variables, functions and object-oriented basics', 'GPIO and sensor control', 'Data handling and automation', 'Python libraries for AI and vision'], useTitle: 'Automation and intelligent software', use: 'Python is widely used in research, data science, robotics, web services and rapid AI development.', project: 'Use Python and GPIO to read a distance sensor and control a motor safely.', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=85' },
	opencv: { kicker: 'INTERMEDIATE / COMPUTER VISION', title: 'OpenCV', summary: 'A practical toolkit for reading camera feeds, processing images, tracking objects and building vision counters.', learnings: ['Images, frames and colour spaces', 'Thresholding and image filters', 'Object tracking and contours', 'Python camera applications'], useTitle: 'Seeing and measuring the physical world', use: 'OpenCV supports inspection, retail analytics, sports analysis, robotics navigation and research prototypes.', project: 'Build a colour and shape sorter that guides objects into different trays.', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85' },
	tensorflow: { kicker: 'ADVANCED / MACHINE LEARNING', title: 'TensorFlow / YOLO', summary: 'Work with trained models for image classification and fast object detection in real-time projects.', learnings: ['Training data and model evaluation', 'Classification versus detection', 'Inference and confidence scores', 'Responsible use of vision models'], useTitle: 'Fast visual decisions', use: 'These tools are used for inspection, inventory, traffic analysis, agriculture and assistive technology.', project: 'Train a detector that identifies recyclable items and triggers a sorting mechanism.', image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1200&q=85' },
	ros2: { kicker: 'PROFESSIONAL / ROBOTICS', title: 'ROS 2 / Gazebo', summary: 'Learn the professional robotics ecosystem for reusable nodes, communication, simulation and robot control.', learnings: ['Nodes, topics, services and actions', 'Python and C++ robotics packages', 'Robot descriptions and sensors', 'Gazebo simulation and navigation'], useTitle: 'Robots at research and industry scale', use: 'ROS 2 is used to prototype autonomous vehicles, warehouse robots, research platforms and complex robot behaviors.', project: 'Simulate a mobile robot that publishes sensor data and navigates between waypoints.', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=85' },
	cad: { kicker: 'PROFESSIONAL / FABRICATION', title: 'CAD + 3D Printing', summary: 'Turn a digital design into a physical part that can be assembled, tested and improved.', learnings: ['Sketches, dimensions and constraints', 'Chassis and enclosure design', 'PLA/PETG print planning', 'Iteration from prototype feedback'], useTitle: 'From digital model to manufactured part', use: 'CAD and additive manufacturing are used in product design, robotics, engineering, education and rapid manufacturing.', project: 'Design and print a custom robot chassis with mounts for sensors and a battery.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85' },

	// 6 Lab Station Equipment Definitions
	'station-01': {
		kicker: '01 / EMBEDDED COMPUTING',
		title: 'Microcontroller & Firmware Station',
		summary: 'High-reliability development rigs where students write C/C++ and MicroPython code, flash microcontrollers, and inspect serial data streams.',
		equipmentList: [
			{ logo: '▣', text: 'Arduino Uno, Mega & Nano Development Boards' },
			{ logo: '⌁', text: 'ESP32 Dual-Core Wi-Fi & BLE Microcontrollers' },
			{ logo: 'Py', text: 'Raspberry Pi 4 Model B (4GB) Linux Robotics Rigs' },
			{ logo: '⌘', text: 'Hardware Logic Probes & 8-Channel Bus Analyzers' },
			{ logo: '⌘', text: 'Dual-Monitor Coding Stations with VS Code & Git' }
		],
		learnings: [
			'Arduino Uno, Mega & Nano low-level C/C++ programming',
			'ESP32 Dual-Core Wi-Fi, Bluetooth and RTOS multitasking',
			'Raspberry Pi 4 Model B Linux terminal, GPIO control & Python',
			'Hardware Logic Probes for inspecting I2C, SPI & UART signals',
			'Dual-Monitor Coding Stations with PlatformIO and Git version control'
		],
		useTitle: 'Automotive, Medical & Industrial Firmware Engineering',
		use: 'Deterministic embedded microcontrollers power critical aerospace fly-by-wire controls, automotive anti-lock braking (ABS) systems, and medical infusion pumps. Students master hardware interrupts, timer registers, clock prescalers, and real-time firmware debugging.',
		project: 'Dual-Core ESP32 Telemetry Controller running FreeRTOS multi-threading with hardware logic probe verification.',
		image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85'
	},
	'station-02': {
		kicker: '02 / SENSORS & MECHATRONICS',
		title: 'Sensor & Signal Processing Rig',
		summary: 'Equipped with calibrated measurement devices to test ultrasonic sonar, time-of-flight LiDAR, infrared matrices, and motor driver current loads.',
		equipmentList: [
			{ logo: '◉', text: 'Ultrasonic & ToF Laser Distance Sensors' },
			{ logo: '◈', text: '9-DOF IMU Accelerometer, Gyroscope & Magnetometer' },
			{ logo: '↻', text: 'Servo Torque, Stepper & Back-EMF Testing Dynamometers' },
			{ logo: '⌬', text: 'Regulated Variable 0–30V / 5A DC Bench Power Supplies' },
			{ logo: '⌬', text: 'Digital Multimeters, Shunt Ammeters & Calibration Probes' }
		],
		learnings: [
			'Ultrasonic & Time-of-Flight (ToF) laser distance calibration and speed-of-sound math',
			'9-DOF IMU Accelerometer & Gyroscope spatial orientation filtering (Madgwick / Kalman)',
			'Servo Torque, Stepper Back-EMF and motor driver H-bridge current profiling',
			'Regulated Variable DC Power Supplies with overcurrent and short-circuit protection',
			'True-RMS Digital Multimeters, signal conditioning and analog filtering'
		],
		useTitle: 'Precision Robotics Kinematics & Mechatronics',
		use: 'Intelligent robots rely on noise-free sensor feedback to maintain balance and avoid collisions. Industrial automated guided vehicles and drone flight controllers use sensor signal processing to eliminate electrical noise and calculate millisecond motion vectors.',
		project: 'High-Precision Closed-Loop Dynamometer measuring real-time motor torque and back-EMF spikes under varying mechanical loads.',
		image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85'
	},
	'station-03': {
		kicker: '03 / VISION & SPATIAL AI',
		title: 'Edge AI & Computer Vision Neural Rig',
		summary: 'Students connect wide-angle optical cameras to Python OpenCV environments, executing real-time object tracking, face recognition, and color sorting algorithms.',
		equipmentList: [
			{ logo: 'CV', text: 'Python 3.11 & OpenCV 4 Accelerated Vision Pipeline' },
			{ logo: 'AI', text: 'Google Coral Edge TPU Coprocessor (4 TOPS ML Inference)' },
			{ logo: '◉', text: 'High-FPS Wide-Angle Video Cameras with Low-Distortion Glass' },
			{ logo: 'AI', text: 'Custom Image Dataset Annotation, Augmentation & Training Rig' },
			{ logo: '✦', text: 'Gesture Recognition Arenas & Spatial Coordinate Tracking' }
		],
		learnings: [
			'Python 3.11 & OpenCV 4 real-time frame manipulation and HSV color spaces',
			'Google Coral Edge TPU Coprocessor executing quantized TensorFlow Lite models',
			'High-FPS Wide-Angle Low-Distortion Cameras for sub-millimeter optical inspection',
			'Custom Dataset Annotation, data augmentation and transfer learning models',
			'Gesture Recognition Arenas detecting hand poses and multi-object bounding boxes'
		],
		useTitle: 'Autonomous Navigation, Biometrics & Quality Inspection',
		use: 'High-speed assembly lines, automated fulfillment centers, and autonomous vehicles rely on edge AI vision systems to detect microscopic defects at 120 FPS, verify barcode serialization, and identify pedestrians in adverse weather conditions.',
		project: 'Edge TPU Neural Conveyor Sorter identifying multi-class objects and triggering microsecond servo diversion.',
		image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1400&q=85'
	},
	'station-04': {
		kicker: '04 / IOT & WIRELESS MESH',
		title: 'IoT Telemetry & Wireless Cloud Hub',
		summary: 'Simulating real-world connected factories and smart homes. Students deploy local MQTT brokers, Wi-Fi mesh networks, and live web dashboards.',
		equipmentList: [
			{ logo: '⌁', text: 'Local & Cloud MQTT Brokers with TLS Encryption' },
			{ logo: '☁', text: 'Real-Time Live Web Dashboards with WebSockets & Gauges' },
			{ logo: '⌁', text: 'ESP-NOW Zero-Lag Peer-to-Peer Wireless Mesh Links' },
			{ logo: '◉', text: 'Capacitive Environmental, Soil & Barometric Sensor Clusters' },
			{ logo: '⌬', text: 'Optocoupled Solid-State Relays with 240V AC Isolation' }
		],
		learnings: [
			'Local & Cloud MQTT Brokers with Mosquitto, publish/subscribe topics and QoS levels',
			'Real-Time Live Web Dashboards updating gauges via WebSockets in milliseconds',
			'ESP-NOW Zero-Lag Mesh Links transmitting data packet arrays without Wi-Fi router dependency',
			'Capacitive Soil, Barometric BMP280, and Atmospheric sensor telemetry calibration',
			'Optocoupled Solid-State Relay control with opto-isolation for safe mains switching'
		],
		useTitle: 'Industrial SCADA, Smart Agriculture & Smart Infrastructure',
		use: 'From wind turbines in remote deserts to municipal smart water management, industrial IoT networks aggregate thousands of field sensor readings across encrypted wireless mesh networks, executing automated fail-safe overrides and predictive maintenance.',
		project: 'Resilient Multi-Node Wireless Telemetry Mesh streaming environmental metrics to an encrypted live operations dashboard.',
		image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=85'
	},
	'station-05': {
		kicker: '05 / MECHANICAL FABRICATION',
		title: 'CAD Mechanical Engineering & 3D Print Farm',
		summary: 'From parametric sketches to solid plastic prototypes. Students design mechanical joints, robot chassis, and gearboxes in CAD and print them with millimeter accuracy.',
		equipmentList: [
			{ logo: '3D', text: 'Creality Precision Direct-Drive 3D Printers' },
			{ logo: '✦', text: 'Premium Engineering PLA, PETG & Carbon-Fiber Filaments' },
			{ logo: '3D', text: 'Autodesk Fusion 360 Parametric CAD & Tinkercad Workstations' },
			{ logo: '⚙', text: 'Digital Vernier Calipers (0.01mm) & Screw Pitch Gauges' },
			{ logo: '3D', text: 'Mechanical Assembly Depot with Metric Fasteners, Bearings & Gears' }
		],
		learnings: [
			'Creality Precision 3D Printers with heated beds, dual-gear extruders and mesh bed leveling',
			'Premium PLA, PETG & Carbon-Fiber composites for high-strength mechanical components',
			'Autodesk Fusion 360 parametric 3D sketches, constraints, extrusions and assemblies',
			'Digital Vernier Calipers with 0.01mm resolution for reverse engineering parts',
			'Mechanical Assembly Depot stocked with M2/M3/M4 fasteners, thrust bearings and gear sets'
		],
		useTitle: 'Rapid Prototyping & Aerospace Additive Manufacturing',
		use: 'Robotics companies and aerospace pioneers use parametric CAD modeling and additive manufacturing to iterate structural brackets, bionic linkages, and lightweight motor mounts within hours rather than waiting weeks for traditional machine shops.',
		project: 'Parametric 4-Bar Linkage Bionic Robot Gripper modeled in Fusion 360 and 3D printed with integrated ball-bearing pivots.',
		image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1400&q=85'
	},
	'station-06': {
		kicker: '06 / TESTING & ARENA RUNS',
		title: 'Autonomous Arena & Testing Ground',
		summary: 'The ultimate proving arena. Wheeled rovers, obstacle-avoiders, and AGV machines are stress-tested against real boundary conditions, slope angles, and lighting shifts.',
		equipmentList: [
			{ logo: '⚡', text: '50 Sq Ft Modular Obstacle Arena with Reconfigurable Walls' },
			{ logo: '↻', text: 'Precision High-Contrast Reflective Optical Line Tracks' },
			{ logo: '✦', text: 'Variable Surface Friction Mats (Rubber, Wood, Ramp Inclines)' },
			{ logo: '🛡', text: 'Padded High-Density Foam Safety Perimeter Impact Rails' },
			{ logo: '⏱', text: 'Overhead Optical Lap Traps & Laser Timing Gates' }
		],
		learnings: [
			'50 Sq Ft Modular Obstacle Arena for stress-testing pathfinding algorithms',
			'Precision High-Contrast Line Tracks for tuning PID controller proportional/derivative gains',
			'Variable Surface Friction Mats testing wheel slippage, odometry drift and traction',
			'Padded Safety Perimeter Rails allowing high-velocity testing without prototype damage',
			'Overhead Optical Lap Traps & Laser Timing Gates for millisecond lap benchmarking'
		],
		useTitle: 'Autonomous Ground Vehicles (AGV/AMR) & Safety Proving',
		use: 'Autonomous warehouse robots (like those at Amazon and DHL) and self-driving shuttles must prove strict safety compliance. Real-world physical test tracks validate wheel slippage, battery voltage drops, sudden lighting transitions, and emergency stopping distances.',
		project: 'Dual-PID Autonomous Mobile Rover obstacle-slalom trial with precision lap-time benchmarking and zero perimeter collisions.',
		image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=85'
	}
};

// Map station aliases
topicData['station1'] = topicData['station-01'];
topicData['station-1'] = topicData['station-01'];
topicData['embedded'] = topicData['station-01'];

topicData['station2'] = topicData['station-02'];
topicData['station-2'] = topicData['station-02'];
topicData['sensors'] = topicData['station-02'];
topicData['mechatronics'] = topicData['station-02'];

topicData['station3'] = topicData['station-03'];
topicData['station-3'] = topicData['station-03'];
topicData['spatial-ai'] = topicData['station-03'];

topicData['station4'] = topicData['station-04'];
topicData['station-4'] = topicData['station-04'];
topicData['mesh'] = topicData['station-04'];

topicData['station5'] = topicData['station-05'];
topicData['station-5'] = topicData['station-05'];
topicData['fabrication'] = topicData['station-05'];

topicData['station6'] = topicData['station-06'];
topicData['station-6'] = topicData['station-06'];
topicData['arena'] = topicData['station-06'];

const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
if (menu && nav) {
	menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', open); });
	document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}
const leadForm = document.querySelector('#lead-form');
const toast = document.querySelector('.toast');
const queryForm = document.querySelector('#query-form');
if (toast) {
	[leadForm, queryForm].filter(Boolean).forEach(form => form.addEventListener('submit', event => {
		event.preventDefault();
		const nameInput = form.querySelector('[name="name"]');
		const phoneInput = form.querySelector('[name="phone"]');
		const queryInput = form.querySelector('[name="query"]');

		const name = nameInput ? nameInput.value.trim() : '';
		const phone = phoneInput ? phoneInput.value.trim() : '';
		const query = queryInput ? queryInput.value.trim() : '';

		toast.textContent = "Connecting your query directly via WhatsApp... ✦";
		toast.classList.add('show');

		const waMessage = encodeURIComponent(
			`*Hello RoboNex AI!* 🤖\n\nI want to book a complimentary 45-min hands-on lab trial session.\n\n` +
			`👤 *Parent / Student Name:* ${name}\n` +
			`📞 *Phone / WhatsApp:* ${phone}\n` +
			`💡 *Age & Interest:* ${query}\n\n` +
			`_Sent via RoboNex AI Website_`
		);

		setTimeout(() => {
			window.open(`https://wa.me/919931023041?text=${waMessage}`, '_blank');
			form.reset();
			setTimeout(() => {
				toast.textContent = "Thanks! Your query has been forwarded to WhatsApp. ✦";
			}, 1000);
			setTimeout(() => toast.classList.remove('show'), 4500);
		}, 700);
	}));
}
const definitionPanel = document.querySelector('#definition-panel');
if (definitionPanel) {
	const definitionTitle = definitionPanel.querySelector('h3');
	const definitionText = definitionPanel.querySelector('p');
	const definitionLink = definitionPanel.querySelector('#definition-link');
	const definitionTriggers = document.querySelectorAll('.definition-trigger');
	const getTopicSlug = trigger => {
		if (trigger.id) return trigger.id;
		const label = trigger.textContent.trim().toLowerCase();
		const toolSlugs = [['pictoblox', 'pictoblox'], ['tinkercad', 'tinkercad'], ['scratch', 'scratch'], ['tensorflow', 'tensorflow'], ['opencv', 'opencv'], ['python', 'python'], ['ros 2', 'ros2'], ['cad + 3d', 'cad']];
		return toolSlugs.find(([name]) => label.includes(name))?.[1] || 'robotics';
	};
	const showDefinition = trigger => {
		const topicSlug = getTopicSlug(trigger);
		definitionTitle.textContent = trigger.querySelector('h2')?.textContent || topicData[topicSlug]?.title || trigger.textContent.trim();
		definitionText.textContent = trigger.dataset.definition;
		if (definitionLink) definitionLink.href = `topic.html?topic=${topicSlug}`;
		definitionPanel.hidden = false;
		definitionPanel.classList.add('is-visible');
	};
	definitionTriggers.forEach(trigger => {
		trigger.addEventListener('click', () => showDefinition(trigger));
		trigger.addEventListener('keydown', event => {
			if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); showDefinition(trigger); }
		});
	});
}
const topicPage = document.querySelector('.topic-page');
if (topicPage) {
	const params = new URLSearchParams(window.location.search);
	const rawSlug = params.get('station') || params.get('topic') || 'station-01';
	const slug = rawSlug.toLowerCase().trim();
	const isStation = Boolean(params.get('station')) || slug.includes('station');
	const topic = topicData[slug] || topicData['station-01'] || topicData.robotics;

	document.title = `${topic.title} | RoboNex AI Station Equipment`;
	
	const kickerEl = topicPage.querySelector('#topic-kicker');
	if (kickerEl) kickerEl.textContent = isStation ? `LAB STATION ${topic.kicker}` : topic.kicker;

	const titleEl = topicPage.querySelector('#topic-title');
	if (titleEl) titleEl.textContent = topic.title;

	const summaryEl = topicPage.querySelector('#topic-summary');
	if (summaryEl) summaryEl.textContent = topic.summary;

	const backLink = topicPage.querySelector('#topic-back-link') || topicPage.querySelector('.back-link');
	if (backLink) {
		if (isStation) {
			backLink.href = 'lab.html';
			backLink.textContent = '← Back to Lab Stations';
		} else {
			backLink.href = 'curriculum.html';
			backLink.textContent = '← Back to Learning Tree';
		}
	}

	const topicImage = topicPage.querySelector('#topic-image');
	if (topicImage) {
		topicImage.src = topic.image;
		topicImage.alt = `${topic.title} in the RoboNex engineering lab`;
	}

	const imageBadge = topicPage.querySelector('#topic-image-badge') || topicPage.querySelector('.topic-image-label');
	if (imageBadge) {
		imageBadge.textContent = isStation ? 'STATION EQUIPMENT BENCH' : 'REAL-WORLD PROJECT';
	}

	const panel1Tag = topicPage.querySelector('#topic-panel-1-tag');
	if (panel1Tag) {
		panel1Tag.textContent = isStation ? 'STATION EQUIPMENT & SENSORS' : 'WHAT STUDENTS LEARN';
	}

	const panel1Title = topicPage.querySelector('#topic-panel-1-title');
	if (panel1Title) {
		panel1Title.textContent = isStation ? 'Precision hardware tools & testbenches in this rig.' : 'From idea to working prototype.';
	}

	const learningsList = topicPage.querySelector('#topic-learnings');
	if (learningsList) {
		if (topic.equipmentList && topic.equipmentList.length) {
			learningsList.innerHTML = topic.equipmentList.map(item => `
				<li tabindex="0">
					<span class="learn-icon" title="Equipment tool">${item.logo}</span>
					<span>${item.text}</span>
				</li>
			`).join('');
		} else {
			const learningIcons = ['⌘', '◉', '⚙', '✦'];
			learningsList.innerHTML = topic.learnings.map((item, index) => `
				<li tabindex="0">
					<span class="learn-icon" title="Learning step">${learningIcons[index % learningIcons.length]}</span>
					<span>${item}</span>
				</li>
			`).join('');
		}
	}

	const useTitle = topicPage.querySelector('#topic-use-title');
	if (useTitle) useTitle.textContent = topic.useTitle;

	const useText = topicPage.querySelector('#topic-use');
	if (useText) useText.textContent = topic.use;

	const projectLabel = topicPage.querySelector('#topic-project-label');
	if (projectLabel) {
		projectLabel.textContent = isStation ? 'STATION CAPSTONE BUILD' : 'PROJECT BRIEF';
	}

	const projectText = topicPage.querySelector('#topic-project');
	if (projectText) projectText.textContent = topic.project;
}

const allLearningTrees = document.querySelectorAll('.learning-tree');
if (allLearningTrees.length) {
	const exactLogos = {
		// Curriculum Tree Skills
		'sensors & actuators': '◉',
		'dc, servo & stepper motors': '↻',
		'motor drivers, leds & displays': '↻',
		'arduino, esp32 & raspberry pi': '▣',
		'circuits & breadboard prototyping': '⌬',

		'block coding, scratch & pictoblox': '✦',
		'arduino ide and c/c++ basics': '▣',
		'python & micropython': 'Py',
		'vs code and git/github': 'Py',
		'logic, variables & control flow': '✦',

		'ai & machine learning fundamentals': 'AI',
		'datasets and model concepts': 'AI',
		'image classification': '✦',
		'object and face detection': '✦',
		'pose, gesture & ai automation': 'AI',

		'camera-based projects': '◉',
		'image processing with python': 'Py',
		'object tracking & vision counter': '✦',
		'colour and shape recognition': '✦',
		'opencv foundations': '✦',

		'wi-fi, bluetooth & mqtt': '⌁',
		'esp32 smart systems': '▣',
		'web dashboards & cloud': '⌁',
		'remote sensor monitoring': '◉',
		'smart-home automation': '✦',

		'chassis, wheels, gears & bearings': '3D',
		'mechanical joints and grippers': '3D',
		'cad basics & 3d printing': '3D',
		'prototype development': '✦',
		'fabrication and testing': '✦',

		'autonomous robots': '↻',
		'line following & obstacle avoidance': '✦',
		'agv/amr and navigation concepts': 'R2',
		'ros 2 and robot simulation': '↻',
		'slam, nodes, topics & actions': 'R2',

		// Lab Station Tools & Equipment
		'arduino uno, mega & nano': '▣',
		'esp32 dual-core wi-fi & ble': '⌁',
		'raspberry pi 4 model b (4gb)': 'Py',
		'hardware logic probes & analyzers': '⌘',
		'dual-monitor coding stations': '⌘',
		'ultrasonic & tof laser distance': '◉',
		'9-dof imu accelerometer & gyro': '◈',
		'servo torque & back-emf testing': '↻',
		'regulated variable dc power supplies': '⌬',
		'digital multimeters & probes': '⌬',
		'python 3.11 & opencv 4 pipeline': 'CV',
		'google coral edge tpu coprocessor': 'AI',
		'high-fps wide-angle video cameras': '◉',
		'custom image dataset training rig': 'AI',
		'gesture recognition arenas': '✦',
		'local & cloud mqtt brokers': '⌁',
		'real-time live web dashboards': '☁',
		'esp-now zero-lag mesh links': '⌁',
		'capacitive environmental sensors': '◉',
		'solid-state relay control nodes': '⌬',
		'creality precision 3d printers': '3D',
		'premium pla & petg filaments': '✦',
		'autodesk fusion 360 & tinkercad cad': '3D',
		'digital vernier calipers & gauges': '⚙',
		'mechanical assembly & fastener depot': '3D',
		'50 sq ft modular obstacle arena': '⚡',
		'precision high-contrast line track': '↻',
		'variable surface friction mats': '✦',
		'padded safety perimeter rails': '🛡',
		'overhead speed & lap time traps': '⏱'
	};

	const iconForText = text => {
		const key = text.toLowerCase().trim();
		if (exactLogos[key]) return exactLogos[key];
		for (const [k, v] of Object.entries(exactLogos)) {
			if (key.includes(k) || k.includes(key)) return v;
		}
		if (key.includes('sensor') || key.includes('camera')) return '◉';
		if (key.includes('motor') || key.includes('robot')) return '↻';
		if (key.includes('arduino') || key.includes('esp32')) return '▣';
		if (key.includes('circuit') || key.includes('breadboard')) return '⌬';
		if (key.includes('python')) return 'Py';
		if (key.includes('ai') || key.includes('machine')) return 'AI';
		if (key.includes('wifi') || key.includes('mqtt')) return '⌁';
		if (key.includes('cad') || key.includes('3d') || key.includes('gear')) return '3D';
		if (key.includes('ros') || key.includes('slam')) return 'R2';
		return '✦';
	};

	allLearningTrees.forEach(tree => {
		tree.querySelectorAll('.tree-card li').forEach(item => {
			const text = item.textContent.trim();
			const iconText = iconForText(text);
			item.innerHTML = `<span class="tree-item-logo" title="Skill icon">${iconText}</span><span class="tree-item-text">${text}</span>`;
		});
	});
}
const tiltSurfaces = document.querySelectorAll('[data-tilt]');
if (tiltSurfaces.length && window.matchMedia('(hover: hover)').matches) {
	tiltSurfaces.forEach(surface => {
		surface.addEventListener('pointermove', event => {
			const bounds = surface.getBoundingClientRect();
			const rotateX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -7;
			const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 7;
			surface.style.setProperty('--tilt-x', `${rotateX}deg`);
			surface.style.setProperty('--tilt-y', `${rotateY}deg`);
		});
		surface.addEventListener('pointerleave', () => {
			surface.style.setProperty('--tilt-x', '0deg');
			surface.style.setProperty('--tilt-y', '0deg');
		});
	});
}
const homePage = document.querySelector('.home-page');
if (homePage && 'IntersectionObserver' in window) {
	const revealItems = homePage.querySelectorAll('main > section:not(.home-hero), .method-card, .home-pillar-card, .invention-card, .advantage-card, .arena-card, .age-card, .home-video-teaser');
	revealItems.forEach((item, index) => {
		item.classList.add('scroll-reveal');
		item.style.setProperty('--reveal-delay', `${Math.min((index % 4) * 80, 280)}ms`);
	});
	const revealObserver = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('is-revealed');
				revealObserver.unobserve(entry.target);
			}
		});
	}, { threshold: 0.12 });
	revealItems.forEach(item => revealObserver.observe(item));
}

// Tree Timeline Scroll-Down Reveal for ALL tree cards (Curriculum & Lab)
const treeCards = document.querySelectorAll('.tree-card');
if (treeCards.length && 'IntersectionObserver' in window) {
	const treeObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('in-view');
			}
		});
	}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
	treeCards.forEach(card => treeObserver.observe(card));
} else {
	treeCards.forEach(card => card.classList.add('in-view'));
}

// Top scroll progress bar & dynamic tree progress line
const progressBar = document.createElement('div');
progressBar.id = 'scroll-progress';
document.body.prepend(progressBar);

const updateScrollProgress = () => {
	const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
	const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	if (height > 0) {
		const scrolled = (winScroll / height) * 100;
		progressBar.style.width = scrolled + '%';
	}
	
	const treeProgress = document.getElementById('tree-progress');
	const treeTimeline = document.querySelector('.tree-timeline');
	if (treeProgress && treeTimeline) {
		const rect = treeTimeline.getBoundingClientRect();
		const viewH = window.innerHeight;
		if (rect.top < viewH && rect.bottom > 0) {
			const progress = Math.min(100, Math.max(0, ((viewH * 0.72 - rect.top) / rect.height) * 100));
			treeProgress.style.height = progress + '%';
		}
	}
};
window.addEventListener('scroll', updateScrollProgress, { passive: true });
updateScrollProgress();

// Modern staggered reveal for projects and lab tools
const modernCards = document.querySelectorAll('.all-projects article, .lab-list article');
if (modernCards.length && 'IntersectionObserver' in window) {
	const modernObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('in-view');
				modernObserver.unobserve(entry.target);
			}
		});
	}, { threshold: 0.1 });
	modernCards.forEach((card, idx) => {
		card.classList.add('modern-scroll-item');
		card.style.setProperty('--card-delay', `${(idx % 4) * 90}ms`);
		modernObserver.observe(card);
	});
}


// ========================================================
// 3D PROJECT LIGHTBOX MODAL WITH BRIEF & SPECIFICATIONS
// ========================================================
const projectDetails = {
	'ai vision counter': {
		category: 'AI & COMPUTER VISION',
		title: 'AI Vision Counter',
		tag: '60 FPS REAL-TIME TRACKING',
		image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
		brief: 'A real-time optical recognition station that counts objects as they pass through a defined camera region of interest. Uses background subtraction, contour detection, and centroid tracking to prevent duplicate counts and log analytics.',
		hardware: ['High-FPS USB Camera', 'Raspberry Pi 4 (4GB)', 'OLED Status Display', 'Buzzer Alert Trigger'],
		software: ['Python 3.11', 'OpenCV 4.8', 'NumPy', 'Centroid Tracking Algorithm'],
		learning: 'Students learn how digital frames are converted into pixel matrices, thresholded, and filtered through spatial contour geometry algorithms.'
	},
	'smart distance meter': {
		category: 'SENSORS & MEASUREMENT',
		title: 'Smart Distance Meter',
		tag: 'MILLIMETER ACCURACY',
		image: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=1200&q=85',
		brief: 'A handheld ultrasonic measurement gauge that pulses high-frequency 40kHz sound waves, measures echo return duration, calculates speed-of-sound compensation based on ambient temperature, and outputs live metric distance on an OLED display.',
		hardware: ['HC-SR04 Ultrasonic Sensor', 'Arduino Nano Controller', '0.96 inch I2C OLED Display', 'Piezo Buzzer & Pushbutton'],
		software: ['Arduino C++', 'Wire & Adafruit SSD1306 Libraries', 'Echo Time-of-Flight Physics Calculations'],
		learning: 'Students master digital timing interrupts, speed-of-sound physics, and I2C serial display communication.'
	},
	'smart traffic light': {
		category: 'AUTOMATION & EMBEDDED SYSTEMS',
		title: 'Smart Traffic Light System',
		tag: 'DYNAMIC TIMING & SENSING',
		image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1200&q=85',
		brief: 'An intelligent intersection controller equipped with infrared vehicle presence sensors and a pedestrian request button. The system dynamically lengthens green lights when traffic congestion is sensed and provides pedestrian crossing windows.',
		hardware: ['Infrared Break-Beam Sensors', 'Arduino Uno Microcontroller', 'Red/Yellow/Green High-Power LEDs', 'Crosswalk Pushbutton'],
		software: ['Arduino C++', 'Finite State Machine (FSM) Architecture', 'Non-blocking millis() Timing'],
		learning: 'Students learn state machine design patterns, debouncing pushbutton signals, and managing asynchronous time without using blocking delay() functions.'
	},
	'obstacle avoiding robot': {
		category: 'AUTONOMOUS ROBOTICS',
		title: 'Autonomous Obstacle-Avoiding Rover',
		tag: 'REAL-TIME COLLISION AVOIDANCE',
		image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=85',
		brief: 'A dual-motor differential drive wheeled rover with a panning ultrasonic sonar mounted on a micro-servo. When an obstacle is detected closer than 25cm, the rover halts, pans left and right to compare clearances, and steers toward the widest clear path.',
		hardware: ['HC-SR04 Ultrasonic Sonar', 'SG90 Micro Servo', 'L298N Dual H-Bridge Driver', 'TT DC Gearmotors & Chassis', 'Li-ion 7.4V Battery Pack'],
		software: ['Arduino C++', 'Servo Control Library', 'Differential Drive Steering Math'],
		learning: 'Students master PWM motor speed modulation, H-bridge directional polarity, and reactive spatial navigation loops.'
	},
	'autonomous obstacle-avoiding rover': {
		category: 'AUTONOMOUS ROBOTICS',
		title: 'Autonomous Obstacle-Avoiding Rover',
		tag: 'REAL-TIME COLLISION AVOIDANCE',
		image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=85',
		brief: 'A dual-motor differential drive wheeled rover with a panning ultrasonic sonar mounted on a micro-servo. When an obstacle is detected closer than 25cm, the rover halts, pans left and right to compare clearances, and steers toward the widest clear path.',
		hardware: ['HC-SR04 Ultrasonic Sonar', 'SG90 Micro Servo', 'L298N Dual H-Bridge Driver', 'TT DC Gearmotors & Chassis', 'Li-ion 7.4V Battery Pack'],
		software: ['Arduino C++', 'Servo Control Library', 'Differential Drive Steering Math'],
		learning: 'Students master PWM motor speed modulation, H-bridge directional polarity, and reactive spatial navigation loops.'
	},
	'smart home automation': {
		category: 'IOT & WIRELESS SYSTEMS',
		title: 'Smart Home Automation Hub',
		tag: 'SECURE WEB & CLOUD CONTROL',
		image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=85',
		brief: 'A connected home node that monitors room temperature, humidity, and light levels, hosting an embedded HTTP web server and syncing with a cloud dashboard to allow parents and students to toggle appliances and view energy metrics.',
		hardware: ['ESP32 Wi-Fi / BLE Microcontroller', 'DHT11 Temp & Humidity Sensor', 'LDR Optical Sensor', '4-Channel Optocoupled Relay Module'],
		software: ['C++ / ESP32 Core', 'Asynchronous Web Server', 'WebSockets / REST API'],
		learning: 'Students understand network protocols (IP addressing, HTTP GET/POST requests, WebSockets) and electrical relay switching safety.'
	},
	'robotic arm': {
		category: 'MECHANICAL DESIGN & KINEMATICS',
		title: 'Vision-Guided Robotic Arm',
		tag: '4-DOF ARTICULATED INVERSE KINEMATICS',
		image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1200&q=85',
		brief: 'A 4-axis articulated robotic arm with base rotation, shoulder, elbow, and a mechanical gripper end-effector. Controlled via potentiometers or an automated inverse kinematics routine that translates target X-Y-Z coordinates into joint servo angles.',
		hardware: ['4x MG996R Metal-Gear Servos', 'PCA9685 16-Channel PWM Servo Driver', 'Laser-Cut Acrylic / 3D-Printed Joint Brackets', 'Dual-Axis Joystick'],
		software: ['Arduino C++ / Python', 'Inverse Kinematics Trigonometric Solvers', 'PCA9685 I2C Driver'],
		learning: 'Students explore spatial geometry, trigonometric joint angles, torque requirements, and mechanical gear reduction.'
	},
	'vision-guided sorting robot arm': {
		category: 'MECHANICAL DESIGN & KINEMATICS',
		title: 'Vision-Guided Sorting Robot Arm',
		tag: '4-DOF ARTICULATED INVERSE KINEMATICS',
		image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
		brief: 'Uses an overhead camera to detect object colors and geometries, calculating inverse kinematics to pick and deposit items into target classification trays.',
		hardware: ['Raspberry Pi 4', '4x Metal-Gear Servos', 'PCA9685 PWM Driver', 'Optical Video Camera'],
		software: ['Python 3', 'OpenCV Vision', 'Trigonometric Inverse Kinematics'],
		learning: 'Students connect digital camera video coordinates with physical servo angles in real time.'
	},
	'iot smart agriculture': {
		category: 'SMART AGRICULTURE & IOT',
		title: 'IoT Smart Soil & Agriculture Node',
		tag: 'AUTOMATED IRRIGATION & TELEMETRY',
		image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85',
		brief: 'An outdoor environmental station measuring soil moisture, sunlight, and air temperature. When soil moisture drops below a threshold, the system triggers a 5V submersible water pump and posts telemetry data to a remote MQTT server.',
		hardware: ['Capacitive Soil Moisture Probe', 'ESP32 Node', '5V Submersible Mini Water Pump', '5V Relay & Silicon Tubing'],
		software: ['MicroPython / Arduino C++', 'MQTT Protocol', 'ThingSpeak / Adafruit IO Cloud'],
		learning: 'Students learn analog sensor calibration, threshold trigger hysteresis, and telemetry publication to cloud IoT databases.'
	},
	'smart iot soil & weather station': {
		category: 'SMART AGRICULTURE & IOT',
		title: 'Smart IoT Soil & Weather Station',
		tag: 'AUTOMATED IRRIGATION & TELEMETRY',
		image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=85',
		brief: 'Monitors soil moisture, temperature, and ambient humidity, pushing real-time alerts and trigger commands to a web dashboard with remote relay control.',
		hardware: ['ESP32 Dual-Core', 'Capacitive Moisture Sensor', 'DHT11 Temp/Humidity', 'OLED Display'],
		software: ['Arduino C++', 'MQTT Protocol', 'Web Dashboard'],
		learning: 'Students learn cloud sensor streaming, threshold logic, and low-latency wireless communication.'
	},
	'remote control car': {
		category: 'WIRELESS ROBOTICS',
		title: 'ESP32 Wi-Fi & Bluetooth Rover',
		tag: 'ZERO-LAG AP STREAMING',
		image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85',
		brief: 'A mobile rover that broadcasts its own Wi-Fi Access Point. Any smartphone or laptop can connect to the rover web page to steer using touch virtual joysticks, toggle headlight LEDs, and trigger sound honks in real time.',
		hardware: ['ESP32 NodeMCU Controller', 'L9110S / L298N Dual Motor Driver', '4WD Acrylic Rover Chassis', 'Rechargeable 18650 Battery Shield'],
		software: ['ESP32 WebSockets', 'HTML5 Touch Joystick Canvas', 'PWM Directional Steering'],
		learning: 'Students understand Access Point vs Station modes, Wi-Fi latency optimization, and full-duplex WebSocket packets.'
	},
	'automatic object sorter': {
		category: 'INDUSTRIAL AUTOMATION',
		title: 'Automatic Optical Object Sorter',
		tag: 'CONVEYOR COLOR DISCRIMINATION',
		image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=85',
		brief: 'A miniature factory automation conveyor. Items move past a TCS3200 color sensor. The system analyzes RGB frequency values, identifies the object color, and fires a fast servo gate to divert items into specific sorting bins.',
		hardware: ['TCS3200 Color Sensor Module', 'Mini DC Conveyor Belt', 'Micro Servo Diverter Gate', 'Arduino Uno', 'Infrared Part-Detection Sensor'],
		software: ['Arduino C++', 'Color Space Frequency Mapping', 'Conveyor Index Timing'],
		learning: 'Students discover industrial SCADA concepts, optical sensor calibration, and closed-loop sorting logic.'
	},
	'face recognition system': {
		category: 'AI SECURITY & PERCEPTION',
		title: 'AI Face Recognition & Security Hub',
		tag: 'NEURAL FACE EMBEDDINGS',
		image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=85',
		brief: 'A smart door lock prototype. A camera feed detects faces using Haar cascades and compares 128-dimensional facial embeddings. Authorized faces trigger a servo door latch and display a personalized welcome message on an LCD.',
		hardware: ['Raspberry Pi 4 with Camera Module', 'SG90 Servo Door Mechanism', '16x2 I2C LCD Display', 'Status Indicator LEDs'],
		software: ['Python 3', 'OpenCV', 'Face_Recognition Library', 'dlib Deep Metric Learning'],
		learning: 'Students understand feature vector extraction, Euclidean distance thresholds, and responsible biometric AI design.'
	},
	'drone technology': {
		category: 'AERIAL ROBOTICS',
		title: 'Autonomous Quadcopter Flight Rig',
		tag: '6-AXIS FLIGHT GYRO STABILIZATION',
		image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=1200&q=85',
		brief: 'An educational drone testbench where students analyze brushless motor thrust, calibrate electronic speed controllers (ESCs), and observe how 6-axis gyro/accelerometer data feeds into PID stabilization loops.',
		hardware: ['Brushless DC Motors & ESCs', 'MPU6050 6-Axis IMU', 'Flight Controller Board', 'Carbon-Fiber Frame & Propellers'],
		software: ['MultiWii / Cleanflight Firmware', 'PID Tuning GUI', 'PWM Throttle Control'],
		learning: 'Students learn aerodynamics, thrust-to-weight ratios, gyroscope drift filtering, and quadcopter pitch/roll/yaw physics.'
	},
	'iot weather station': {
		category: 'ENVIRONMENTAL SCIENCE & IOT',
		title: 'IoT Meteorological Weather Station',
		tag: 'BAROMETRIC PRESSURE & CLOUD SYNC',
		image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85',
		brief: 'A micro-weather station that records barometric atmospheric pressure, altitude estimation, ambient temperature, humidity, and rain precipitation, updating a public cloud dashboard every 60 seconds.',
		hardware: ['BMP280 Barometric Pressure Sensor', 'DHT22 Precision Humidity Sensor', 'Raindrop Detection Board', 'ESP32 Wi-Fi Controller'],
		software: ['Arduino C++', 'HTTP POST Telemetry', 'ThingSpeak Cloud Charts'],
		learning: 'Students understand barometric pressure forecasting, analog sensor calibration, and power-saving deep sleep modes.'
	},
	'autonomous navigation robot': {
		category: 'ADVANCED ROBOTICS & SLAM',
		title: 'Autonomous Pathfinding Rover',
		tag: 'OPTICAL ENCODER ODOMETRY',
		image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85',
		brief: 'An AGV rover that tracks its own X-Y coordinates using wheel encoders and an optical ground sensor. Given a target destination coordinate, it executes waypoint navigation while steering around unexpected obstacles.',
		hardware: ['Dual Optical Quadrature Encoders', 'Arduino Mega 2560', 'L298N Motor Driver', 'Triple Infrared Sensor Array'],
		software: ['C++ Odometry Math', 'Dead-Reckoning Algorithm', 'Waypoint Steering Vector Calculation'],
		learning: 'Students explore robotics math, wheel tick calculations, cumulative odometry drift, and vector steering.'
	},
	'industrial automation prototype': {
		category: 'INDUSTRIAL SCADA & CONVEYORS',
		title: 'Smart Factory Automation Cell',
		tag: 'FAIL-SAFE INDUSTRIAL LOGIC',
		image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85',
		brief: 'A scaled industrial manufacturing cell simulating an automated bottling or assembly line. Features optical part verification, an emergency stop safety latch, and an automated rejection arm for defective parts.',
		hardware: ['DC Conveyor Drive', 'Infrared Gate Sensors', 'Solenoid / Servo Rejecter', 'Emergency Stop E-Stop Mushroom Button', 'Tower Warning Lamp'],
		software: ['State Machine Logic', 'Hardware Interlock Safety System', 'Cycle-Time Performance Logger'],
		learning: 'Students discover industrial automation standards, safety interlocking, emergency stop hardware protocols, and throughput optimization.'
	}
};

const projectModal = document.getElementById('project-modal');
if (projectModal) {
	const modalImg = document.getElementById('modal-img');
	const modalTag = document.getElementById('modal-tag');
	const modalCategory = document.getElementById('modal-category');
	const modalTitle = document.getElementById('modal-project-title');
	const modalBrief = document.getElementById('modal-brief');
	const modalHardware = document.getElementById('modal-hardware');
	const modalSoftware = document.getElementById('modal-software');
	const modalLearning = document.getElementById('modal-learning');
	const closeBtn = document.getElementById('modal-close-btn');
	const dismissBtn = document.getElementById('modal-dismiss-btn');

	const openProjectModal = (key, fallbackImg, fallbackTitle, fallbackDesc) => {
		const normKey = key.toLowerCase().trim();
		let data = projectDetails[normKey];
		if (!data) {
			for (const [k, v] of Object.entries(projectDetails)) {
				if (normKey.includes(k) || k.includes(normKey)) {
					data = v;
					break;
				}
			}
		}

		if (data) {
			modalImg.src = data.image;
			modalImg.alt = data.title;
			modalTag.textContent = `● ${data.tag}`;
			modalCategory.textContent = data.category;
			modalTitle.textContent = data.title;
			modalBrief.textContent = data.brief;
			modalLearning.textContent = data.learning;

			modalHardware.innerHTML = data.hardware.map(hw => `<span class="tech-badge"><b class="tech-badge-logo">⚙</b>${hw}</span>`).join('');
			modalSoftware.innerHTML = data.software.map(sw => `<span class="tech-badge"><b class="tech-badge-logo">Py</b>${sw}</span>`).join('');
		} else {
			modalImg.src = fallbackImg || '';
			modalImg.alt = fallbackTitle || 'Project Preview';
			modalTag.textContent = '● HARDWARE PROTOTYPE';
			modalCategory.textContent = 'ROBOTICS & AI';
			modalTitle.textContent = fallbackTitle || 'Lab Project';
			modalBrief.textContent = fallbackDesc || 'Practical AI and robotics prototype built in our learning lab.';
			modalLearning.textContent = 'Hands-on engineering problem solving using real microcontrollers and code.';
			modalHardware.innerHTML = '<span class="tech-badge"><b class="tech-badge-logo">▣</b>Microcontroller</span><span class="tech-badge"><b class="tech-badge-logo">◉</b>Sensors</span>';
			modalSoftware.innerHTML = '<span class="tech-badge"><b class="tech-badge-logo">Py</b>Python / C++</span>';
		}

		projectModal.classList.add('is-open');
		projectModal.setAttribute('aria-hidden', 'false');
		document.body.style.overflow = 'hidden';
	};

	const closeProjectModal = () => {
		projectModal.classList.remove('is-open');
		projectModal.setAttribute('aria-hidden', 'true');
		document.body.style.overflow = '';
	};

	if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
	if (dismissBtn) dismissBtn.addEventListener('click', closeProjectModal);

	projectModal.addEventListener('click', (e) => {
		if (e.target === projectModal) closeProjectModal();
	});

	window.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && projectModal.classList.contains('is-open')) {
			closeProjectModal();
		}
	});

	// Attach click handlers to all project cards in projects.html
	const projectArticles = document.querySelectorAll('.all-projects article');
	projectArticles.forEach(article => {
		article.style.cursor = 'pointer';
		article.addEventListener('click', (e) => {
			const title = article.querySelector('h2')?.textContent.trim() || '';
			const img = article.querySelector('img')?.src || '';
			const desc = article.querySelector('p')?.textContent.trim() || '';
			openProjectModal(title, img, title, desc);
		});
	});

	// Attach click handlers to invention cards in home.html
	const inventionCards = document.querySelectorAll('.invention-card');
	inventionCards.forEach(card => {
		card.style.cursor = 'pointer';
		card.addEventListener('click', (e) => {
			const title = card.querySelector('h3')?.textContent.trim() || '';
			const img = card.querySelector('img')?.src || '';
			const desc = card.querySelector('p')?.textContent.trim() || '';
			openProjectModal(title, img, title, desc);
		});
	});
}

// Attach click handler for all 6 Lab Station cards in lab.html
const labStationCards = document.querySelectorAll('.lab-tree .tree-card');
labStationCards.forEach((card, idx) => {
	card.style.cursor = 'pointer';
	const stationSlug = card.id || `station-0${idx + 1}`;
	card.addEventListener('click', (e) => {
		if (e.target.closest('a')) return; // Let anchor tag do its default navigation
		window.location.href = `topic.html?station=${stationSlug}`;
	});
});

/* ==========================================================================
   GLOBAL CYBER-GLITTER & STARDUST SPARKLE ENGINE
   ========================================================================== */
function initGlitterEngine() {
	// Check if user prefers reduced motion
	if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		return;
	}

	let canvas = document.getElementById('glitter-canvas');
	if (!canvas) {
		canvas = document.createElement('canvas');
		canvas.id = 'glitter-canvas';
		canvas.setAttribute('aria-hidden', 'true');
		document.body.appendChild(canvas);
	}

	const ctx = canvas.getContext('2d');
	if (!ctx) return;

	let width = (canvas.width = window.innerWidth);
	let height = (canvas.height = window.innerHeight);

	const colors = [
		'rgba(255, 215, 0, ',    // Dark Gold
		'rgba(255, 238, 140, ',  // Bright Warm Gold
		'rgba(0, 245, 255, ',    // Neon Cyber Cyan
		'rgba(198, 255, 0, ',    // Acid Lime
		'rgba(255, 255, 255, '   // Diamond Starlight
	];

	// Ambient floating glitter particles
	const PARTICLE_COUNT = Math.min(35, Math.floor((width * height) / 32000));
	const particles = [];
	const cursorParticles = [];

	class GlitterParticle {
		constructor(isCursor = false, x = 0, y = 0) {
			this.isCursor = isCursor;
			this.reset(isCursor, x, y);
		}

		reset(isCursor = false, x = 0, y = 0) {
			this.isCursor = isCursor;
			this.x = isCursor ? x : Math.random() * width;
			this.y = isCursor ? y : Math.random() * height;
			this.size = isCursor ? Math.random() * 2.6 + 1.2 : Math.random() * 3.2 + 1.2;
			this.colorPrefix = colors[Math.floor(Math.random() * colors.length)];
			this.alpha = isCursor ? 0.45 : Math.random() * 0.22 + 0.05;
			this.maxAlpha = Math.random() * 0.25 + 0.12;
			this.phase = Math.random() * Math.PI * 2;
			this.twinkleSpeed = Math.random() * 0.035 + 0.015;
			this.vx = isCursor ? (Math.random() - 0.5) * 3.2 : (Math.random() - 0.5) * 0.35;
			this.vy = isCursor ? (Math.random() - 0.5) * 3.2 : -(Math.random() * 0.45 + 0.15);
			this.angle = Math.random() * Math.PI * 2;
			this.angularSpeed = (Math.random() - 0.5) * 0.04;
			this.shape = Math.random() > 0.4 ? 'star' : (Math.random() > 0.5 ? 'flare' : 'orb');
			this.decay = isCursor ? Math.random() * 0.025 + 0.02 : 0;
		}

		update() {
			if (this.isCursor) {
				this.x += this.vx;
				this.y += this.vy;
				this.vx *= 0.94;
				this.vy *= 0.94;
				this.alpha -= this.decay;
				this.angle += this.angularSpeed * 2;
				return;
			}

			// Ambient drifting & sinusoidal twinkling
			this.x += this.vx;
			this.y += this.vy;
			this.phase += this.twinkleSpeed;
			this.alpha = (Math.sin(this.phase) * 0.5 + 0.5) * this.maxAlpha;
			this.angle += this.angularSpeed;

			// Wrap edges smoothly
			if (this.y < -15) this.y = height + 15;
			if (this.y > height + 15) this.y = -15;
			if (this.x < -15) this.x = width + 15;
			if (this.x > width + 15) this.x = -15;
		}

		draw(c) {
			if (this.alpha <= 0.02) return;
			c.save();
			c.translate(this.x, this.y);
			c.rotate(this.angle);

			if (this.shape === 'star') {
				// 4-pointed diamond star sparkle (✦)
				const s = this.size;
				const inner = s * 0.22;
				c.beginPath();
				c.moveTo(0, -s * 2.2);
				c.quadraticCurveTo(inner, -inner, s * 2.2, 0);
				c.quadraticCurveTo(inner, inner, 0, s * 2.2);
				c.quadraticCurveTo(-inner, inner, -s * 2.2, 0);
				c.quadraticCurveTo(-inner, -inner, 0, -s * 2.2);
				c.closePath();

				c.fillStyle = this.colorPrefix + this.alpha + ')';
				c.shadowColor = this.colorPrefix + '0.9)';
				c.shadowBlur = s * 1.2;
				c.fill();
			} else if (this.shape === 'flare') {
				// Optical cross sparkle (+)
				const len = this.size * 2.4;
				c.strokeStyle = this.colorPrefix + this.alpha + ')';
				c.lineWidth = 1;
				c.shadowColor = this.colorPrefix + '0.8)';
				c.shadowBlur = this.size * 2;
				c.beginPath();
				c.moveTo(-len, 0);
				c.lineTo(len, 0);
				c.moveTo(0, -len);
				c.lineTo(0, len);
				c.stroke();
			} else {
				// Luminous stardust orb
				c.beginPath();
				c.arc(0, 0, this.size * 0.85, 0, Math.PI * 2);
				c.fillStyle = this.colorPrefix + this.alpha + ')';
				c.shadowColor = this.colorPrefix + '0.7)';
				c.shadowBlur = this.size * 3;
				c.fill();
			}

			c.restore();
		}
	}

	// Initialize ambient pool
	for (let i = 0; i < PARTICLE_COUNT; i++) {
		particles.push(new GlitterParticle(false));
	}

	// Cursor interaction (gentle sparkle trail)
	let lastSpawn = 0;
	window.addEventListener('pointermove', (e) => {
		const now = performance.now();
		if (now - lastSpawn < 32) return; // 30fps throttle on pointer trail
		lastSpawn = now;

		if (cursorParticles.length < 35) {
			cursorParticles.push(new GlitterParticle(true, e.clientX, e.clientY));
			if (Math.random() > 0.4) {
				cursorParticles.push(new GlitterParticle(true, e.clientX + (Math.random() - 0.5) * 12, e.clientY + (Math.random() - 0.5) * 12));
			}
		}
	}, { passive: true });

	// Click / tap burst (mini cyber fireworks)
	window.addEventListener('pointerdown', (e) => {
		const burstCount = 12;
		for (let i = 0; i < burstCount; i++) {
			if (cursorParticles.length < 50) {
				cursorParticles.push(new GlitterParticle(true, e.clientX, e.clientY));
			}
		}
	}, { passive: true });

	// Resize handling
	let resizeTimer;
	window.addEventListener('resize', () => {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(() => {
			width = canvas.width = window.innerWidth;
			height = canvas.height = window.innerHeight;
		}, 120);
	}, { passive: true });

	// Animation loop
	let isRunning = true;
	document.addEventListener('visibilitychange', () => {
		isRunning = !document.hidden;
		if (isRunning) requestAnimationFrame(loop);
	});

	function loop() {
		if (!isRunning) return;

		ctx.clearRect(0, 0, width, height);

		// Draw & update ambient stardust
		for (let i = 0; i < particles.length; i++) {
			particles[i].update();
			particles[i].draw(ctx);
		}

		// Draw & update cursor sparkles
		for (let j = cursorParticles.length - 1; j >= 0; j--) {
			const cp = cursorParticles[j];
			cp.update();
			if (cp.alpha <= 0.02) {
				cursorParticles.splice(j, 1);
			} else {
				cp.draw(ctx);
			}
		}

		requestAnimationFrame(loop);
	}

	requestAnimationFrame(loop);
}

// Auto-run glitter engine when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initGlitterEngine);
} else {
	initGlitterEngine();
}


// Age & Cohort Course Finder Switcher
function initAgeFinder() {
	const pills = document.querySelectorAll('.age-pill-btn');
	const cards = document.querySelectorAll('.age-roadmap-card');
	if (!pills.length || !cards.length) return;

	pills.forEach(pill => {
		pill.addEventListener('click', () => {
			const targetAge = pill.getAttribute('data-age');
			pills.forEach(p => p.classList.remove('active'));
			pill.classList.add('active');

			cards.forEach(card => {
				if (card.getAttribute('data-age-group') === targetAge) {
					card.classList.add('active');
				} else {
					card.classList.remove('active');
				}
			});
		});
	});
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initAgeFinder);
} else {
	initAgeFinder();
}





// ========================================================
// ROBO CHAT / SMS TEXT BOX POPUP HANDLER
// ========================================================
function initRoboChatBox() {
	const mascotBtn = document.getElementById('robo-mascot-btn');
	const chatPopup = document.getElementById('robo-chat-popup');
	const closeBtn = document.getElementById('robo-chat-close');
	const input = document.getElementById('robo-chat-input');
	const sendSmsBtn = document.getElementById('robo-send-sms-btn');
	const sendWaBtn = document.getElementById('robo-send-wa-btn');
	const chips = document.querySelectorAll('.quick-chip-btn');
	const toast = document.querySelector('.toast');

	if (!mascotBtn || !chatPopup) return;

	function openPopup() {
		chatPopup.classList.add('active');
		chatPopup.setAttribute('aria-hidden', 'false');
		mascotBtn.setAttribute('aria-expanded', 'true');
		if (input) {
			setTimeout(() => input.focus(), 150);
		}
	}

	function closePopup() {
		chatPopup.classList.remove('active');
		chatPopup.setAttribute('aria-hidden', 'true');
		mascotBtn.setAttribute('aria-expanded', 'false');
	}

	mascotBtn.addEventListener('click', (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (chatPopup.classList.contains('active')) {
			closePopup();
		} else {
			openPopup();
		}
	});

	if (closeBtn) {
		closeBtn.addEventListener('click', (e) => {
			e.stopPropagation();
			closePopup();
		});
	}

	// Quick chips click
	chips.forEach(chip => {
		chip.addEventListener('click', () => {
			if (input) {
				input.value = chip.getAttribute('data-text') || chip.textContent.trim();
				input.focus();
			}
		});
	});

	// Send Normal Phone SMS
	if (sendSmsBtn) {
		sendSmsBtn.addEventListener('click', () => {
			const text = (input && input.value.trim()) || "Hi RoboNex AI, I want to inquire about your robotics and AI learning classes. Please guide me.";
			const encoded = encodeURIComponent(text);
			if (toast) {
				toast.textContent = "Opening phone SMS app with your message... 📱";
				toast.classList.add('show');
				setTimeout(() => toast.classList.remove('show'), 3500);
			}
			window.location.href = `sms:+919931023041?body=${encoded}`;
		});
	}

	// Send WhatsApp
	if (sendWaBtn) {
		sendWaBtn.addEventListener('click', () => {
			const text = (input && input.value.trim()) || "Hi RoboNex AI, I want to inquire about your robotics and AI learning classes. Please guide me.";
			const encoded = encodeURIComponent(text);
			if (toast) {
				toast.textContent = "Connecting to WhatsApp... 💬";
				toast.classList.add('show');
				setTimeout(() => toast.classList.remove('show'), 3500);
			}
			window.open(`https://wa.me/919931023041?text=${encoded}`, '_blank');
		});
	}

	// Close on Escape key
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && chatPopup.classList.contains('active')) {
			closePopup();
		}
	});

	// Close when clicking outside
	document.addEventListener('click', (e) => {
		if (chatPopup.classList.contains('active') && !chatPopup.contains(e.target) && !mascotBtn.contains(e.target)) {
			closePopup();
		}
	});
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initRoboChatBox);
} else {
	initRoboChatBox();
}


// ========================================================
// BULLETPROOF ROBO CHAT POPUP CONTROLLER
// ========================================================
window.toggleRoboChat = function(e) {
	if (e) {
		e.preventDefault();
		e.stopPropagation();
	}
	var popup = document.getElementById('robo-chat-popup');
	var btn = document.getElementById('robo-mascot-btn');
	var input = document.getElementById('robo-chat-input');
	if (!popup) return;

	var isActive = popup.classList.contains('active');
	if (isActive) {
		popup.classList.remove('active');
		popup.setAttribute('aria-hidden', 'true');
		if (btn) btn.setAttribute('aria-expanded', 'false');
	} else {
		popup.classList.add('active');
		popup.setAttribute('aria-hidden', 'false');
		if (btn) btn.setAttribute('aria-expanded', 'true');
		if (input) {
			setTimeout(function() { input.focus(); }, 120);
		}
	}
};

window.closeRoboChat = function(e) {
	if (e) {
		e.preventDefault();
		e.stopPropagation();
	}
	var popup = document.getElementById('robo-chat-popup');
	var btn = document.getElementById('robo-mascot-btn');
	if (popup) {
		popup.classList.remove('active');
		popup.setAttribute('aria-hidden', 'true');
	}
	if (btn) btn.setAttribute('aria-expanded', 'false');
};

window.fillRoboChip = function(btn) {
	var input = document.getElementById('robo-chat-input');
	if (input && btn) {
		input.value = btn.getAttribute('data-text') || btn.innerText.trim();
		input.focus();
	}
};

window.sendRoboSMS = function(e) {
	if (e) e.preventDefault();
	var input = document.getElementById('robo-chat-input');
	var txt = (input && input.value.trim()) || "Hi RoboNex AI, I want to inquire about your robotics and AI learning classes. Please guide me.";
	var toast = document.querySelector('.toast');
	if (toast) {
		toast.textContent = "Opening phone SMS app to text RoboNex (9931023041)... 🤖📱";
		toast.classList.add('show');
		setTimeout(function() { toast.classList.remove('show'); }, 3500);
	}
	window.location.href = "sms:+919931023041?body=" + encodeURIComponent(txt);
};

window.sendRoboWA = function(e) {
	if (e) e.preventDefault();
	var input = document.getElementById('robo-chat-input');
	var txt = (input && input.value.trim()) || "Hi RoboNex AI, I want to inquire about your robotics and AI learning classes. Please guide me.";
	var toast = document.querySelector('.toast');
	if (toast) {
		toast.textContent = "Connecting to WhatsApp (9931023041)... 💬";
		toast.classList.add('show');
		setTimeout(function() { toast.classList.remove('show'); }, 3500);
	}
	window.open("https://wa.me/919931023041?text=" + encodeURIComponent(txt), "_blank");
};

// Document-level close listeners
document.addEventListener('click', function(e) {
	var popup = document.getElementById('robo-chat-popup');
	var btn = document.getElementById('robo-mascot-btn');
	if (popup && popup.classList.contains('active')) {
		if (!popup.contains(e.target) && (!btn || !btn.contains(e.target))) {
			window.closeRoboChat();
		}
	}
});

document.addEventListener('keydown', function(e) {
	if (e.key === 'Escape') {
		window.closeRoboChat();
	}
});


// ========================================================
// SLIDING ROBO MASCOT SCROLL TRACKER (1st Page -> Follows Scroll)
// ========================================================
function updateRoboScrollTrack() {
	var wrapper = document.getElementById('scrolling-robo-wrapper');
	if (!wrapper) return;

	var scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
	var vh = window.innerHeight || 800;

	// Over the first 1.5 screen heights, smoothly slide from top (1st page) toward bottom
	var scrollRange = vh * 1.5;
	var progress = Math.min(1, Math.max(0, scrollY / scrollRange));

	var isMobile = window.innerWidth <= 768;
	var startTop = isMobile ? 190 : 230; // 1st page position
	var endTop = vh - (isMobile ? 150 : 130); // bottom position

	var currentTop = startTop + (endTop - startTop) * progress;
	wrapper.style.top = Math.round(currentTop) + 'px';

	// Smart position for chat popup
	var popup = document.getElementById('robo-chat-popup');
	if (popup) {
		if (currentTop > vh * 0.5) {
			popup.style.bottom = '75px';
			popup.style.top = 'auto';
		} else {
			popup.style.top = '75px';
			popup.style.bottom = 'auto';
		}
	}
}

window.addEventListener('scroll', updateRoboScrollTrack, { passive: true });
window.addEventListener('resize', updateRoboScrollTrack, { passive: true });

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', updateRoboScrollTrack);
} else {
	updateRoboScrollTrack();
}

// ========================================================
// PARENTS FAQ ACCORDION HANDLER (Smooth Single-Open Behavior)
// ========================================================
document.addEventListener('DOMContentLoaded', function() {
	var faqItems = document.querySelectorAll('.faq-accordion-container .faq-item');
	faqItems.forEach(function(item) {
		item.addEventListener('toggle', function() {
			if (item.open) {
				faqItems.forEach(function(other) {
					if (other !== item && other.open) {
						other.open = false;
					}
				});
			}
		});
	});
});
