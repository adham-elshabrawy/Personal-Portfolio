export const education = [
  {
    id: 1,
    degree: "Bachelor of Applied Science in Mechatronics & Robotics Automation Engineering",
    institution: "Queen's University",
    location: "Kingston, Ontario, Canada",
    period: "2023 - 2027",
    description: "",
  },
  {
    id: 2,
    degree: "Machine Learning with Python",
    institution: "IBM Course",
    location: "",
    period: "2024",
    description: "Applied best practices in NumPy, scikit-learn, and TensorFlow to solve complex problems in classification, clustering, and deep learning.",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Mechatronics Design Intern",
    company: "FYELabs",
    location: "Hamilton, Ontario, Canada",
    period: "May 2025 - August 2025",
    responsibilities: [
      "Led a team of 5 to automate a food dispenser, defining client requirements and aligning with firmware, PCB, and mechanical teams.",
      "Designed and implemented embedded control logic in C/C++ for a system integrating 8+ motors, and 10+ sensors, reducing operation time by 60%",
      "Spearheaded the automation of a contact lens manufacturing process for an innovative glaucoma treatment,designing the full control sequence and achieving 97% dispensing accuracy.",
    ],
  },
  {
    id: 2,
    title: "Mechatronics Design Intern",
    company: "FYELabs",
    location: "Hamilton, Ontario, Canada",
    period: "May 2024 - August 2024",
    responsibilities: [
      "Integrated a GPS module, accelerometer, and gyroscope with a Raspberry Pi Pico and Raspberry Pi 4, transmitting data over serial to enable real-time speed and position tracking with 95% accuracy.",
      "Designed an airtight battery enclosure in SolidWorks, ensuring zero air ingress/egress and protecting next-generation battery materials from environmental exposure.",
      "Assisted in the circuit design of an industrial automated machine for synthesizing a new plastic material, andvalidated the PCB using an oscilloscope and a logic analyzer to ensure precise and reliable operation.",
      "Participated in agile development processes",
    ],
  },
];

export const extracurricularExperience = [
  {
    id: 1,
    title: "Director of Autonomy",
    organization: "Queen's SAE Autodrive",
    location: "Kingston, Ontario, Canada",
    period: "June 2025 - Present",
    responsibilities: [
      "Leading 25+ students across 5 subteams in state estimation, path planning, and control development within the Autonomy division, to advance a Level-4 autonomous vehicle.",
      "Manage project execution with Jira and Git, delivering milestones on schedule.",
      "Implement algorithms in C++ and Python such as D* Lite, Kalman/Particle filters, and Model PredictiveController (MPC) improving system accuracy and performance.",
    ],
  },
  {
    id: 2,
    title: "Electronics Member",
    organization: "Queen's Aerospace Design Team",
    location: "Kingston, Ontario, Canada",
    period: "October 2024 - May 2025",
    responsibilities: [
      "Optimized AUAV flight dynamics through control loop tuning and engineered custom electrical systems, ranging from hardware selection to PCB design in Altium.",
    ],
  },
  {
    id: 3,
    title: "Autonomy Member",
    organization: "Queen's SAE Autodrive",
    location: "Kingston, Ontario, Canada",
    period: "October 2024 - May 2025",
    responsibilities: [
      "1st place in Technical & Safety Reports",
      "2nd place in Mobility Innovation (0-0-0 Challenge)",
      "Utilize LiDAR, cameras, and V2X systems to fuse sensor data for real-time object detection and tracking, ensuring accurate perception for autonomous driving.",
      "Apply probabilistic algorithms to track multiple objects and synchronize sensor inputs, improving detection reliability and decision-making.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Vision-Based Dexterous Robotic Hand",
    description: "Designed and built a 5-DoF Computer vision–controlled robotic hand for remote manipulation in environments inaccessible or unsafe for humans.",
    technologies: ["SolidWorks", "Python", "OpenCV", "C++", "Raspberry Pi", "Git"],
    image: "/Robotic-Hand.PNG",
    link: "https://github.com/adham-elshabrawy/Hand-Tracker",
  },
  {
    id: 2,
    title: "Autonomous Delivery Robot",
    description: "Engineered a ROS2-based autonomous robot for hospital logistics, achieving 93% navigation accuracy via custom SLAM and D* Lite path planning.",
    technologies: ["Python", "C++", "ROS2", "Linux", "Git"],
    image: "/delivery-bot.jpg",
  },
  {
    id: 3,
    title: "S&P 500 Stock Predictor",
    description: "Built a historical data-driven stock predictor leveraging classification algorithms to identify future market movements.",
    technologies: ["Python", "scikit-learn", "pandas", "numpy", "Git"],
    image: "/project-3.jpg",
    link: "https://github.com/adham-elshabrawy/Stock-Predictor",
  },
  {
    id: 4,
    title: "Volt Vision",
    description: "Developed an interactive dashboard that leverages machine learning to predict charging hotspots and simulate the impact of infrastructure upgrades.",
    technologies: ["Python", "scikit-learn", "pandas", "numpy", "Git"],
    image: "/project-3.jpg",
    link: "https://github.com/AnthonyBotticchio/QEC-Programming",
  },
  {
    id: 5,
    title: "KioskFace",
    description: "A secure Android tablet kiosk system that uses automatic face recognition to enable hands-free employee clock-in/out with encrypted biometric data storage and offline support.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Kotlin", "TensorFlow Lite", "Android SDK", "Room", "Git"],
    image: "/project-3.jpg",
    link: "https://github.com/adham-elshabrawy/ID-Verification",
  },
  {
    id: 6,
    title: "AI-Powered Clothing Assistant",
    description: "Developed an AI-powered web application that curates outfit ideas from a digital wardrobe using computer vision and cloud infrastructure.",
    technologies: ["Python", "PostgreSQL", "OpenCV", "AWS", "Git"],
    image: "/project-3.jpg",
    link: "https://github.com/adham-elshabrawy/Smart-Mirror",
  },
];

export const skills = [
  // Languages
  { name: "Python", category: "Languages" },
  { name: "C/C++", category: "Languages" },
  { name: "SQL", category: "Languages" },
  { name: "HTML/CSS", category: "Languages" },
  { name: "MATLAB", category: "Languages" },
  { name: "VHDL", category: "Languages" },
  { name: "Verilog", category: "Languages" },
  { name: "NIOS II Assembly", category: "Languages" },
  { name: "ARM64 Assembly", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Kotlin", category: "Languages" },
  // Software Tools & Frameworks
  { name: "React", category: "Software Tools" },
  { name: "Next.js", category: "Software Tools" },
  { name: "Node.js", category: "Software Tools" },
  { name: "FastAPI", category: "Software Tools" },
  { name: "Docker", category: "Software Tools" },
  { name: "AWS", category: "Software Tools" },
  { name: "SolidWorks", category: "Software Tools" },
  { name: "Altium Designer", category: "Software Tools" },
  { name: "Fusion 360", category: "Software Tools" },
  { name: "LTSpice", category: "Software Tools" },
  { name: "SimuLink", category: "Software Tools" },
  { name: "Figma", category: "Software Tools" },
  { name: "MongoDB", category: "Software Tools" },
  { name: "PostgreSQL", category: "Software Tools" },
  { name: "Room", category: "Software Tools" },
  // Libraries
  { name: "pandas", category: "Libraries" },
  { name: "NumPy", category: "Libraries" },
  { name: "Matplotlib", category: "Libraries" },
  { name: "OpenCV", category: "Libraries" },
  { name: "scikit-learn", category: "Libraries" },
  { name: "PyTorch", category: "Libraries" },
  { name: "TensorFlow", category: "Libraries" },
  { name: "TensorFlow Lite", category: "Libraries" },
  // Productivity Tools
  { name: "Word", category: "Productivity Tools" },
  { name: "Excel", category: "Productivity Tools" },
  { name: "PowerPoint", category: "Productivity Tools" },
  { name: "Jira", category: "Productivity Tools" },
  { name: "Git", category: "Productivity Tools" },
];

export const socialLinks = {
  linkedin: "https://linkedin.com/in/adham-elshabrawy",
  email: "mailto:adhamtarek.el@gmail.com",
  github: "https://github.com/adham-elshabrawy",
};

