export type CourseProject = {
  title: string;
  description: string;
};

export type CourseData = {
  slug: string;

  // HERO
  title: string;
  shortDescription: string;
  heroImage: string;
  learners: string;
  rating: string;

  // UPCOMING BATCH
  date: string;
  schedule: string;
  duration: string;

  // COURSE OVERVIEW
  overview: string;

  // WHAT YOU WILL LEARN
  learn: string[];

  // CAREER OUTCOMES
  careers: string[];

  // PROJECTS
  projects: CourseProject[];

  // CLASS OPTIONS
  onlineClass: {
    title: string;
    description: string;
  };

  physicalClass: {
    title: string;
    description: string;
  };

  // CERTIFICATE
  certificateImage: string;
};

export const courseData: Record<string, CourseData> = {
 
  // FRONTEND DEVELOPMENT WITH REACTJS
 
  "frontend-development-with-reactjs": {
    slug: "frontend-development-with-reactjs",

    title: "Frontend Development with ReactJS",

    shortDescription:
      "Master modern web development with ReactJS. Learn component-based architecture, state management, and build responsive applications.",

    heroImage: "/courses/coursedetail.png",
    learners: "1200+",
    rating: "4.5",

    date: "Enrollment Based",
    schedule: "Sunday to Thursday",
    duration: "10 Weeks",

    overview:
      "Our ReactJS course is designed to help learners build powerful user interfaces and scalable web applications using the latest features of React. Whether you're switching from another tech stack or starting fresh, this course covers everything from fundamentals to deployment.",

    learn: [
      "Introduction to JavaScript (ES6+ Essentials)",
      "React Components: Props & State",
      "Lifecycle Methods and Hooks",
      "Event Handling and Conditional Rendering",
      "React Router for SPA Navigation",
      "Redux for State Management",
      "REST API Integration",
      "Debugging and Error Handling",
      "Deploying React Apps",
      "Real-world Project Building",
    ],

    careers: [
      "ReactJS Developer",
      "Frontend Developer",
      "UI Developer",
      "Web Application Developer",
    ],

    projects: [
      {
        title: "Weather App",
        description: "Integrating public APIs",
      },
      {
        title: "To-do List with Redux",
        description: "Full CRUD operations",
      },
      {
        title: "Real-Time Chat App",
        description: "Using React and Firebase",
      },
    ],

    onlineClass: {
      title: "LIVE ONLINE CLASSES",
      description: "From anywhere, via Google Meet",
    },

    physicalClass: {
      title: "PHYSICAL CLASSES",
      description: "Join us at our training center | Old Baneshwor",
    },

    certificateImage: "/courses/certificates/qa-certificate.png",
  },

  
  // QA AUTOMATION
  
  "qa-automation": {
    slug: "qa-automation",

    title: "QA with Automation",

    shortDescription:
      "Master software testing and automation techniques to build reliable, high-quality applications using modern QA tools and practices.",

    heroImage: "/courses/coursedetail.png",
    learners: "1000+",
    rating: "4.5",

    date: "Enrollment Based",
    schedule: "Sunday to Thursday",
    duration: "10 Weeks",

    overview:
      "Our QA Automation course helps learners understand modern software testing practices and develop practical automation skills. Learn testing fundamentals, test case creation, automation, API testing, and real-world QA workflows.",

    learn: [
      "Software Testing Fundamentals",
      "Manual Testing Concepts",
      "Test Case Design and Execution",
      "Bug Reporting and Defect Management",
      "Automation Testing Fundamentals",
      "Web Automation Testing",
      "API Testing",
      "Database Testing",
      "Automation Framework Concepts",
      "Real-world QA Workflows",
    ],

    careers: [
      "QA Automation Engineer",
      "Software QA Engineer",
      "Automation Test Engineer",
      "Software Tester",
    ],

    projects: [
      {
        title: "Web Application Testing",
        description: "Create and execute complete test cases",
      },
      {
        title: "Automation Testing Project",
        description: "Automate web application testing scenarios",
      },
      {
        title: "API Testing Project",
        description: "Test and validate REST APIs",
      },
    ],

    onlineClass: {
      title: "LIVE ONLINE CLASSES",
      description: "From anywhere, via Google Meet",
    },

    physicalClass: {
      title: "PHYSICAL CLASSES",
      description: "Join us at our training center | Old Baneshwor",
    },

    certificateImage: "/Courses/certificates/qa-certificate.png",
  },


  // PROJECT MANAGEMENT
  
  "project-management": {
    slug: "project-management",

    title: "Project Management",

    shortDescription:
      "Develop practical project management skills and learn how to plan, organize, execute, monitor, and successfully deliver projects.",

    heroImage: "/courses/p",
    learners: "800+",
    rating: "4.5",

    date: "Enrollment Based",
    schedule: "Sunday to Thursday",
    duration: "10 Weeks",

    overview:
      "Our Project Management course provides practical knowledge for planning, managing, and delivering successful projects. Learn project lifecycles, Agile methodologies, risk management, stakeholder communication, scheduling, and team coordination.",

    learn: [
      "Project Management Fundamentals",
      "Project Planning and Scope Management",
      "Project Lifecycle",
      "Agile and Scrum Methodologies",
      "Project Scheduling",
      "Resource Management",
      "Risk Management",
      "Stakeholder Management",
      "Project Monitoring and Reporting",
      "Project Closure and Evaluation",
    ],

    careers: [
      "Project Coordinator",
      "Project Manager",
      "Scrum Master",
      "Project Management Associate",
    ],

    projects: [
      {
        title: "Project Planning",
        description: "Create a complete project plan and timeline",
      },
      {
        title: "Agile Project",
        description: "Plan and manage an Agile development cycle",
      },
      {
        title: "Risk Management Plan",
        description: "Identify and manage project risks",
      },
    ],

    onlineClass: {
      title: "LIVE ONLINE CLASSES",
      description: "From anywhere, via Google Meet",
    },

    physicalClass: {
      title: "PHYSICAL CLASSES",
      description: "Join us at our training center | Old Baneshwor",
    },

    certificateImage:
      "/Courses/certificates/qa-certificate.png",
  },

  // CYBERSECURITY
  
  cybersecurity: {
    slug: "cybersecurity",

    title: "Cybersecurity",

    shortDescription:
      "Build essential cybersecurity skills and learn how to identify vulnerabilities, protect systems, secure networks, and respond to security threats.",

    heroImage: "/courses/coursedetail.png",
    learners: "900+",
    rating: "4.5",

    date: "Enrollment Based",
    schedule: "Sunday to Thursday",
    duration: "10 Weeks",

    overview:
      "Our Cybersecurity course introduces learners to modern security concepts and practical techniques used to protect systems, networks, and applications from cyber threats. Gain hands-on knowledge of network security, vulnerabilities, threat detection, and security best practices.",

    learn: [
      "Cybersecurity Fundamentals",
      "Networking and Security Concepts",
      "Common Cyber Threats and Attacks",
      "System and Network Security",
      "Vulnerability Assessment",
      "Web Application Security",
      "Authentication and Access Control",
      "Security Monitoring",
      "Incident Response Fundamentals",
      "Cybersecurity Best Practices",
    ],

    careers: [
      "Cybersecurity Analyst",
      "Security Analyst",
      "SOC Analyst",
      "Information Security Associate",
    ],

    projects: [
      {
        title: "Vulnerability Assessment",
        description: "Identify and document system vulnerabilities",
      },
      {
        title: "Network Security Lab",
        description: "Analyze and secure a simulated network",
      },
      {
        title: "Security Audit",
        description: "Perform a basic security assessment",
      },
    ],

    onlineClass: {
      title: "LIVE ONLINE CLASSES",
      description: "From anywhere, via Google Meet",
    },

    physicalClass: {
      title: "PHYSICAL CLASSES",
      description: "Join us at our training center | Old Baneshwor",
    },

    certificateImage:
      "/Courses/certificates/cybersecurity-certificate.png",
  },

  
  // DATA SCIENCE / AI / ML
  
  "data-science-ai-ml": {
    slug: "data-science-ai-ml",

    title: "Data Science / AI / ML",

    shortDescription:
      "Learn data science, artificial intelligence, and machine learning through practical projects using Python and modern data technologies.",

    heroImage: "/courses/coursedetail.png",
    learners: "1100+",
    rating: "4.5",

    date: "Enrollment Based",
    schedule: "Sunday to Thursday",
    duration: "15 Weeks",

    overview:
      "Our Data Science, AI, and Machine Learning course teaches learners how to analyze data, build predictive models, and understand modern artificial intelligence techniques through hands-on projects and practical applications.",

    learn: [
      "Python for Data Science",
      "NumPy and Pandas",
      "Data Cleaning and Preparation",
      "Data Visualization",
      "Statistics and Probability",
      "Machine Learning Fundamentals",
      "Supervised Learning",
      "Unsupervised Learning",
      "Model Evaluation",
      "Introduction to Artificial Intelligence",
    ],

    careers: [
      "Data Analyst",
      "Junior Data Scientist",
      "Machine Learning Engineer",
      "AI Engineer",
    ],

    projects: [
      {
        title: "Data Analysis Dashboard",
        description: "Analyze and visualize real-world datasets",
      },
      {
        title: "Prediction Model",
        description: "Build and evaluate a machine learning model",
      },
      {
        title: "Customer Segmentation",
        description: "Apply clustering techniques to customer data",
      },
    ],

    onlineClass: {
      title: "LIVE ONLINE CLASSES",
      description: "From anywhere, via Google Meet",
    },

    physicalClass: {
      title: "PHYSICAL CLASSES",
      description: "Join us at our training center | Old Baneshwor",
    },

    certificateImage:
      "/Courses/certificates/data-science-certificate.png",
  },

  // FLUTTER DEVELOPMENT
  
  "flutter-development": {
    slug: "flutter-development",

    title: "Flutter Development",

    shortDescription:
      "Learn to build beautiful, high-performance cross-platform mobile applications for Android and iOS using Flutter and Dart.",

    heroImage: "/courses/coursedetaail.png",
    learners: "850+",
    rating: "4.5",

    date: "Enrollment Based",
    schedule: "Sunday to Thursday",
    duration: "10 Weeks",

    overview:
      "Our Flutter Development course teaches learners how to create modern cross-platform mobile applications using Flutter and Dart. Build responsive interfaces, integrate APIs, manage application state, and develop real-world mobile applications.",

    learn: [
      "Dart Programming Fundamentals",
      "Flutter Fundamentals",
      "Widgets and Layouts",
      "Navigation and Routing",
      "Forms and User Input",
      "State Management",
      "REST API Integration",
      "Local Data Storage",
      "Firebase Integration",
      "Application Deployment",
    ],

    careers: [
      "Flutter Developer",
      "Mobile App Developer",
      "Cross-platform Developer",
      "Junior Software Developer",
    ],

    projects: [
      {
        title: "Weather Application",
        description: "Build a mobile app using weather APIs",
      },
      {
        title: "Task Management App",
        description: "Create a complete mobile CRUD application",
      },
      {
        title: "Firebase Application",
        description: "Build an app with authentication and cloud data",
      },
    ],

    onlineClass: {
      title: "LIVE ONLINE CLASSES",
      description: "From anywhere, via Google Meet",
    },

    physicalClass: {
      title: "PHYSICAL CLASSES",
      description: "Join us at our training center | Old Baneshwor",
    },

    certificateImage: "/Courses/certificates/flutter-certificate.png",
  },


  // UI/UX DESIGN & PRODUCT DESIGN
 
  "ui-ux-product-design": {
    slug: "ui-ux-product-design",

    title: "UI/UX Design & Product Design",

    shortDescription:
      "Learn to design intuitive digital products through user research, wireframing, prototyping, visual design, and user-centered design principles.",

    heroImage: "/courses/coursedetail.png",
    learners: "950+",
    rating: "4.5",

    date: "Enrollment Based",
    schedule: "Sunday to Thursday",
    duration: "10 Weeks",

    overview:
      "Our UI/UX and Product Design course teaches learners how to create meaningful and user-friendly digital experiences. Learn the complete design process from research and ideation to wireframes, prototypes, usability testing, and polished interfaces.",

    learn: [
      "UI/UX Design Fundamentals",
      "User Research",
      "User Personas and User Journeys",
      "Information Architecture",
      "Wireframing",
      "Figma",
      "Visual and Interface Design",
      "Interactive Prototyping",
      "Usability Testing",
      "Product Design Process",
    ],

    careers: [
      "UI Designer",
      "UX Designer",
      "Product Designer",
      "UI/UX Designer",
    ],

    projects: [
      {
        title: "Mobile App Design",
        description: "Design a complete mobile application experience",
      },
      {
        title: "Website Redesign",
        description: "Research and redesign an existing website",
      },
      {
        title: "Product Design Case Study",
        description: "Create a portfolio-ready UX case study",
      },
    ],

    onlineClass: {
      title: "LIVE ONLINE CLASSES",
      description: "From anywhere, via Google Meet",
    },

    physicalClass: {
      title: "PHYSICAL CLASSES",
      description: "Join us at our training center | Old Baneshwor",
    },

    certificateImage: "/Courses/certificates/uiux-certificate.png",
  },

  // FULL STACK DEVELOPMENT (MERN)

  "full-stack-development-mern": {
    slug: "full-stack-development-mern",

    title: "Full Stack Development (MERN)",

    shortDescription:
      "Master full-stack web development using MongoDB, Express.js, ReactJS, and Node.js and build complete production-ready web applications.",

    heroImage: "/courses/mern.png",
    learners: "1200+",
    rating: "4.5",

    date: "Enrollment Based",
    schedule: "Sunday to Thursday",
    duration: "15 Weeks",

    overview:
      "Our MERN Full Stack Development course teaches learners how to build complete modern web applications from frontend to backend. Learn ReactJS, Node.js, Express.js, MongoDB, authentication, API development, and application deployment.",

    learn: [
      "HTML, CSS and JavaScript",
      "Modern JavaScript ES6+",
      "ReactJS Fundamentals",
      "React Hooks and State Management",
      "Node.js Fundamentals",
      "Express.js",
      "REST API Development",
      "MongoDB and Mongoose",
      "Authentication and Authorization",
      "Full Stack Application Deployment",
    ],

    careers: [
      "Full Stack Developer",
      "MERN Stack Developer",
      "Web Developer",
      "JavaScript Developer",
    ],

    projects: [
      {
        title: "E-commerce Application",
        description: "Build a complete MERN e-commerce platform",
      },
      {
        title: "Job Portal",
        description: "Develop a full-stack job management platform",
      },
      {
        title: "Social Media Application",
        description: "Create a full-stack social networking application",
      },
    ],

    onlineClass: {
      title: "LIVE ONLINE CLASSES",
      description: "From anywhere, via Google Meet",
    },

    physicalClass: {
      title: "PHYSICAL CLASSES",
      description: "Join us at our training center | Old Baneshwor",
    },

    certificateImage: "/Courses/certificates/mern-certificate.png",
  },


  // BACKEND DEVELOPMENT
  
  "backend-development": {
    slug: "backend-development",

    title: "Backend Development",

    shortDescription:
      "Learn server-side development, databases, REST APIs, authentication, and backend architecture to build secure and scalable applications.",

    heroImage: "/courses/backend.png",
    learners: "900+",
    rating: "4.5",

    date: "Enrollment Based",
    schedule: "Sunday to Thursday",
    duration: "10 Weeks",

    overview:
      "Our Backend Development course teaches learners how to develop secure and scalable server-side applications. Learn backend programming, database management, REST APIs, authentication, error handling, and deployment through practical projects.",

    learn: [
      "Backend Development Fundamentals",
      "Node.js Fundamentals",
      "Express.js",
      "REST API Development",
      "Database Fundamentals",
      "MongoDB and Mongoose",
      "Authentication and Authorization",
      "Error Handling and Validation",
      "Backend Security",
      "Application Deployment",
    ],

    careers: [
      "Backend Developer",
      "Node.js Developer",
      "API Developer",
      "Junior Software Engineer",
    ],

    projects: [
      {
        title: "REST API",
        description: "Develop a complete CRUD REST API",
      },
      {
        title: "Authentication System",
        description: "Build secure login and user authentication",
      },
      {
        title: "Backend for E-commerce",
        description: "Develop products, users, orders, and API endpoints",
      },
    ],

    onlineClass: {
      title: "LIVE ONLINE CLASSES",
      description: "From anywhere, via Google Meet",
    },

    physicalClass: {
      title: "PHYSICAL CLASSES",
      description: "Join us at our training center | Old Baneshwor",
    },

    certificateImage: "/Courses/certificates/backend-certificate.png",
  },
};