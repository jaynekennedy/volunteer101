export interface ScheduleItem {
  time: string;
  duration: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Facilitator {
  name: string;
  role: string;
  image: string;
}

export const WORKSHOP_CONFIG = {
  date: "22nd October 2026",
  shortDate: "22 Oct 2026",
  day: "Thursday",
  location: "The Xchange Lab, PARC, Taman Subang Ria",
  locationMapsUrl: "https://maps.app.goo.gl/cJh1cDRLb7tUWXb96",
  time: "Registration 6.30pm · Workshop from 7:00pm–8:30pm",
  registrationTime: "6:30pm",
  workshopTime: "7:00pm – 8:30pm",
  duration: "2 hours",
  cost: "Free",
  badge: "2 hours · Limited Seats · Free ·",
  registrationFormUrl: "https://forms.gle/QvAZbHaThLwTskpP9",
};

export const LEARNING_OUTCOMES = [
  {
    number: "01",
    title: "What good volunteering looks like",
    body: "Understand what it means to serve a community.",
    note: "Serving alongside, not 'saving'",
  },
  {
    number: "02",
    title: "How to listen and engage with respect",
    body: "Build trust through conversation, before you try to help.",
    note: "Lend an ear before a hand",
  },
  {
    number: "03",
    title: "Five core principles you can use anywhere",
    body: "Simple foundations for engaging with any community.",
    note: "Tested across 30+ communities",
  },
  {
    number: "04",
    title: "How to check your own assumptions",
    body: "Notice the stories you already carry, and learn to set them aside.",
    note: "Unpack unconscious bias",
  },
];

export const WORKSHOP_TIMELINE: ScheduleItem[] = [
  {
    time: "7:00pm",
    duration: "20 min",
    title: "Welcome and introduction to the Workshop",
    description: "Meet the group and share what brings you here today. Icebreakers over local refreshments, followed by an introduction to the Workshop.",
  },
  {
    time: "7:20pm",
    duration: "40 min",
    title: "The five CoRe principles",
    description: "Principles for engaging with any community, with group reflections and hands-on scenarios.",
  },
  {
    time: "8:00pm",
    duration: "15 min",
    title: "Check your assumptions",
    description: "Explore diverse, changing communities, and discover why we are so much more alike than different.",
  },
  {
    time: "8:15pm",
    duration: "10 min",
    title: "In the field: do's and don'ts",
    description: "The practical basics when joining a mission: ethics, cultural respect, safety, and media etiquette.",
  },
  {
    time: "8:25pm",
    duration: "5 min",
    title: "Closing: (Optional) Choose A Mission",
    description: "See upcoming ground missions and what's next.",
  },
];

export const WHO_ITS_FOR_ITEMS = [
  "Want to give back but don't know where to start",
  "Have volunteered before and want to deepen their skills",
  "Are curious about communities beyond their own",
  "Are willing to listen first",
];

export const RECOGNITION_AWARDS = [
  "ASEAN Outstanding Social Welfare and Development Award (2023)",
  "iF Design Social Impact Prize (2026)",
];

export const MEDIA_FEATURES = [
  "The Edge Malaysia",
  "New Straits Times",
  "Free Malaysia Today",
  "8TV",
  "BFM.my",
];

export const FAQS: FaqItem[] = [
  {
    question: "What is Volunteering 101?",
    answer: "A free, 2-hour interactive workshop on the basics of good volunteering, open to anyone.",
  },
  {
    question: "Do I need experience?",
    answer: "No. It's designed for first-time volunteers as well as people who have volunteered before.",
  },
  {
    question: "Do I have to join a mission afterwards?",
    answer: "No. The workshop stands on its own. If you'd like to put it into practice, you can choose a mission as your next step.",
  },
  {
    question: "Is it really free?",
    answer: "Yes. Just commit your time.",
  },
  {
    question: "Will I be supported on a mission?",
    answer: "Yes. Missions are guided by experienced, trained Volunteers.",
  },
];

export const FACILITATORS: Facilitator[] = [
  {
    name: "Dr Yvonne Lim",
    role: "Head of Social Impact, EPIC",
    image: "https://epic.my/wp-content/uploads/2025/08/W-team-img-04-Dr.-Yvonne-Lim.png",
  },
  {
    name: "Jayne Kennedy",
    role: "Community Engagement & Growth, EPIC",
    image: "https://epic.my/wp-content/uploads/2025/08/W-team-img-02-Jayne-Kennedy.png",
  },
];

