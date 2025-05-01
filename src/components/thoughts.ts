interface Thought {
  title: string;
  description: string;
  icon: 'rocket' | 'code' | 'sparkles';
}

export const inspirationalThoughts: Thought[] = [
  {
    title: "Mobile Visionary",
    description: "Transform ideas into seamless mobile experiences. Your vision deserves an app that changes lives and defines the future of technology.",
    icon: "rocket"
  },
  {
    title: "Web Innovation",
    description: "Elevate your digital presence with cutting-edge web solutions. Let's create immersive experiences that captivate and convert visitors into loyal customers.",
    icon: "code"
  },
  {
    title: "Innovation Partner",
    description: "Partner with a developer who turns ambitious visions into reality. Your next big idea deserves exceptional execution and innovative solutions.",
    icon: "sparkles"
  }
];