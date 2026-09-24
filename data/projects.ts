export const projects = [
  {
    id: 1,
    name: 'Mini Redis',
    description: 'A Redis-inspired in-memory key-value database and TCP server implemented from scratch in Java.',
    technologies: ['Java', 'TCP/IP', 'Java NIO', 'ConcurrentHashMap', 'Multithreading', 'Concurrency', 'Docker', 'AWS EC2'],
    features: [
      'TCP client-server communication',
      'Thread-safe storage with ConcurrentHashMap',
      'Automatic expiration (TTL)',
      'Persistence',
      'Supported Commands: SET, GET, DEL, EXISTS, KEYS, SIZE, CLEAR, PING, INFO, SAVE, INCR, DECR, SETNX, EXPIRE, TTL, MSET, MGET'
    ],
    github: 'https://github.com/Dhina-S/Mini-Redis', 
    demo: 'PLACEHOLDER_DEMO',
    featured: true
  },
  {
    id: 2,
    name: 'EventMate',
    description: 'A full-stack event booking and management platform.',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'JPA/Hibernate', 'MySQL', 'Redis', 'React', 'Stripe', 'Cloudinary'],
    features: [
      'Role-based access (Admin, Organizer, User)',
      'Event browsing & management',
      'Hall/seat selection & showtime-based booking',
      'Payment integration & REST APIs'
    ],
    github: 'https://github.com/Dhina-S/EventMate',
    demo: 'https://event-mate-two.vercel.app/',
    featured: false
  },
  {
    id: 3,
    name: 'Smart Public Toilet Cleanliness Monitoring System',
    description: 'An IoT-based public toilet monitoring system designed to monitor environmental conditions and automate cleaning-related responses.',
    technologies: ['ESP8266', 'MQ-135', 'IR Sensor', 'Blynk', 'Arduino', 'C++'],
    features: [
      'Real-time gas and air quality monitoring (MQ-135)',
      'Occupancy detection via IR sensor',
      'Automated fan & pump controls',
      'Blynk dashboard integration'
    ],
    github: 'PLACEHOLDER_GITHUB',
    demo: 'PLACEHOLDER_DEMO',
    featured: false
  }
];
