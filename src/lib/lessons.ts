// src/lib/lessons.ts
export type Lesson = {
  id: string;
  title: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  themeTag: string;
  summary: string;
  content: string;
};

export const LESSONS: Lesson[] = [
  {
    id: "01-intro-to-crowbar",
    title: "Welcome to Crowbar Academy",
    duration: "5 min",
    level: "Beginner",
    themeTag: "Orientation",
    summary: "Get a quick overview of how Crowbar Academy fits into the overall ecosystem.",
    content: `
### Welcome to Crowbar Academy

This is a **  lesson** designed for Phase-2 of the Crowbar launch.

In the live version, this section will include:
- A short explainer video or text
- Key outcomes for the learner
- A clear next step that connects back to the Crowbar platform

For now, treat this as a demo lesson to validate layout, navigation, and SSO flows.
    `,
  },
  // 👉 Add 9 more   lessons
  {
    id: "02-skill-micro-lessons",
    title: "Skill Micro-Lessons Overview",
    duration: "7 min",
    level: "Beginner",
    themeTag: "Skill Event",
    summary: "Understand how micro-lessons are aligned with Skill Event themes.",
    content: `
### Skill Micro-Lessons Overview

This   explains the intent of the Skill micro-lessons.

In production, this will:
- Introduce the Skill Event theme
- Show how this lesson links to Crowbar tiers and benefits
- Provide a simple call-to-action for the learner
    `,
  },
  {
    id: "03-building-habits",
    title: "Building Consistent Learning Habits",
    duration: "8 min",
    level: "Intermediate",
    themeTag: "Habits",
    summary: "A short reflection on learning consistency for members.",
    content: `
### Building Consistent Learning Habits

This   lesson focuses on habits and routines.

Use this space later for:
- A short framework or model
- A reflection prompt
- A small action item for the member
    `,
  },
  {
    id: "04-leveraging-community",
    title: "Leveraging the Crowbar Community",
    duration: "6 min",
    level: "Intermediate",
    themeTag: "Community",
    summary: "  copy about how members can leverage community touchpoints.",
    content: `
### Leveraging the Crowbar Community

Explain how members can:
- Engage with other members
- Participate in Skill Events
- Share outcomes and get feedback
    `,
  },
  {
    id: "05-tier-aligned-learning",
    title: "Tier-Aligned Learning Paths",
    duration: "9 min",
    level: "Advanced",
    themeTag: "Tiers",
    summary: "Describe how lessons map to Crowbar tiers.",
    content: `
### Tier-Aligned Learning Paths

Use this region to illustrate:
- How learning aligns with tier benefits
- Recommended paths per tier
- How to 'unlock' more value with Crowbar membership
    `,
  },
  {
    id: "06-metrics-that-matter",
    title: "Metrics That Actually Matter",
    duration: "7 min",
    level: "Intermediate",
    themeTag: "Outcomes",
    summary: "  on outcome-first learning metrics.",
    content: `
### Metrics That Actually Matter

In the final version, talk about:
- Measuring meaningful progress
- Avoiding vanity metrics
- Connecting learning to business or personal outcomes
    `,
  },
  {
    id: "07-time-boxed-learning",
    title: "Time-Boxed Micro-Learning",
    duration: "5 min",
    level: "Beginner",
    themeTag: "Time",
    summary: "Explore the concept of short, focused learning blocks.",
    content: `
### Time-Boxed Micro-Learning

  for:
- Short learning sprints
- Timeboxing techniques
- Tips for busy professionals
    `,
  },
  {
    id: "08-experiments-not-exams",
    title: "Experiments, Not Exams",
    duration: "10 min",
    level: "Advanced",
    themeTag: "Experimentation",
    summary: "Reframe learning as experimentation instead of evaluation.",
    content: `
### Experiments, Not Exams

Use this space later to:
- Encourage experimentation
- Normalize iteration and failure
- Give simple experiment frameworks
    `,
  },
  {
    id: "09-reflection-loop",
    title: "The Reflection Loop",
    duration: "6 min",
    level: "Intermediate",
    themeTag: "Reflection",
    summary: "  lesson on reflection and iteration loops.",
    content: `
### The Reflection Loop

Final content will:
- Introduce a simple reflection loop
- Provide 2–3 reflection questions
- Suggest a cadence for self-review
    `,
  },
  {
    id: "10-next-steps",
    title: "Next Steps in the Crowbar Ecosystem",
    duration: "4 min",
    level: "Beginner",
    themeTag: "Next Steps",
    summary: "Connect the Academy back to Crowbar dashboard and other sites.",
    content: `
### Next Steps

Use this lesson to bridge to:
- Crowbar dashboard
- TalentKonnect, EcoWorldBuy, CareDuel, and other Phase-2 sites
- Upcoming Skill Events or campaigns
    `,
  },
];
