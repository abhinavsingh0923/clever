export interface Event {
  title: string;
  description: string;
  badge: string;
  image: string;
  BulletPoints: { title: string; description: string }[];
}

export const events: Event[] = [
  {
    title: "Cohort",
    badge: "dates",
    description: `Our online coding cohorts are ongoing, collaborative events designed to help you develop your skills in various domains like mobile, web, and design development. They provide a supportive community environment where you can learn, grow, and tackle challenges alongside fellow coders.`,
    BulletPoints: [
      {
        title: `Community-Driven Learning`,
        description: `Each cohort focuses on a specific development area. Within the cohort, the community collaboratively creates a minimum of 5 modules with varying difficulty levels (easy, medium, and hard).`,
      },
      {
        title: `Diverse Learning Materials`,
        description: `Modules can consist of projects, competitive programming problems, or a combination of both, offering a wide range of challenges to keep you engaged and tested.`,
      },
    ],
    image:
      "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Tech-Talks",
    description:
      "Get ready to expand your horizons and ignite your coding passion during Coding Week! We have two exciting tech talk tracks lined up, designed to inspire and empower both alumni and current students",
    badge: "dates",
    BulletPoints: [
      {
        title: `Community-Driven Learning`,
        description: `Each cohort focuses on a specific development area. Within the cohort, the community collaboratively creates a minimum of 5 modules with varying difficulty levels (easy, medium, and hard).`,
      },
      {
        title: `Diverse Learning Materials`,
        description: `Modules can consist of projects, competitive programming problems, or a combination of both, offering a wide range of challenges to keep you engaged and tested.`,
      },
    ],
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Coding Week: Unleash Your Inner Coder!",
    badge: "dates",
    description: `Calling all coders, creators, and tech enthusiasts! Coding Week is upon us, and it's time to celebrate your passion for technology! This week is dedicated to fostering creativity, collaboration, and skill development within our vibrant coding community`,
    BulletPoints: [
      {
        title: `Community-Driven Learning`,
        description: `Each cohort focuses on a specific development area. Within the cohort, the community collaboratively creates a minimum of 5 modules with varying difficulty levels (easy, medium, and hard).`,
      },
      {
        title: `Diverse Learning Materials`,
        description: `Modules can consist of projects, competitive programming problems, or a combination of both, offering a wide range of challenges to keep you engaged and tested.`,
      },
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Demystifying New Tech with Workshops: A Deep Dive",
    badge: "dates",
    description:
      "Workshops play a crucial role in Coding Week by providing focused learning experiences on emerging technologies. These intensive sessions, typically lasting one or two days, equip participants with a solid understanding of the latest advancements in the tech world.",
    BulletPoints: [
      {
        title: `Community-Driven Learning`,
        description: `Each cohort focuses on a specific development area. Within the cohort, the community collaboratively creates a minimum of 5 modules with varying difficulty levels (easy, medium, and hard).`,
      },
      {
        title: `Diverse Learning Materials`,
        description: `Modules can consist of projects, competitive programming problems, or a combination of both, offering a wide range of challenges to keep you engaged and tested.`,
      },
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
