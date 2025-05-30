import type React from "react"
export interface QuizOption {
  value: string
  label: string
  description?: string
  icon?: React.ReactNode
}

export interface QuizQuestion {
  id: string
  question: string
  description?: string
  options: QuizOption[]
}

export type QuizQuestionType = QuizQuestion

export const quizQuestions: QuizQuestion[] = [
  {
    id: "role",
    question: "What's your primary role?",
    description: "We'll tailor recommendations to your specific profession.",
    options: [
      {
        value: "marketer",
        label: "Marketer",
        description: "Content creation, social media, SEO, advertising",
      },
      {
        value: "developer",
        label: "Developer",
        description: "Coding, programming, software development",
      },
      {
        value: "designer",
        label: "Designer",
        description: "UX/UI, graphic design, visual content creation",
      },
      {
        value: "writer",
        label: "Writer",
        description: "Content writing, copywriting, editing",
      },
      {
        value: "entrepreneur",
        label: "Entrepreneur",
        description: "Business owner, startup founder, solopreneur",
      },
      {
        value: "other",
        label: "Other",
        description: "Project manager, executive, student, etc.",
      },
    ],
  },
  {
    id: "goal",
    question: "What's your primary goal with AI tools?",
    options: [
      {
        value: "productivity",
        label: "Boost Productivity",
        description: "Save time and get more done",
      },
      {
        value: "creativity",
        label: "Enhance Creativity",
        description: "Generate ideas and creative content",
      },
      {
        value: "automation",
        label: "Automate Tasks",
        description: "Reduce manual work with automation",
      },
      {
        value: "analysis",
        label: "Data Analysis",
        description: "Extract insights from data",
      },
      {
        value: "learning",
        label: "Learning & Research",
        description: "Accelerate learning and research",
      },
    ],
  },
  {
    id: "budget",
    question: "What's your monthly budget for AI tools?",
    options: [
      {
        value: "free",
        label: "Free Only",
        description: "I'm looking for free tools only",
      },
      {
        value: "low",
        label: "$1-$50/month",
        description: "Limited budget for essential tools",
      },
      {
        value: "medium",
        label: "$51-$200/month",
        description: "Moderate investment in key tools",
      },
      {
        value: "high",
        label: "$200+/month",
        description: "Willing to invest in premium solutions",
      },
    ],
  },
  {
    id: "experience",
    question: "What's your experience level with AI tools?",
    options: [
      {
        value: "beginner",
        label: "Beginner",
        description: "New to AI tools, looking for user-friendly options",
      },
      {
        value: "intermediate",
        label: "Intermediate",
        description: "Some experience, comfortable with technology",
      },
      {
        value: "advanced",
        label: "Advanced",
        description: "Experienced user, looking for powerful features",
      },
    ],
  },
  {
    id: "team",
    question: "Will you be using these tools with a team?",
    options: [
      {
        value: "solo",
        label: "Solo Use",
        description: "Just for myself",
      },
      {
        value: "small",
        label: "Small Team",
        description: "2-10 people",
      },
      {
        value: "large",
        label: "Large Team",
        description: "More than 10 people",
      },
    ],
  },
  {
    id: "use_case",
    question: "What specific use case are you most interested in?",
    options: [
      {
        value: "content",
        label: "Content Creation",
        description: "Writing, editing, and generating content",
      },
      {
        value: "images",
        label: "Image Generation",
        description: "Creating and editing visual content",
      },
      {
        value: "coding",
        label: "Coding Assistance",
        description: "Help with programming and development",
      },
      {
        value: "research",
        label: "Research & Analysis",
        description: "Data processing and information gathering",
      },
      {
        value: "automation",
        label: "Workflow Automation",
        description: "Automating repetitive tasks",
      },
      {
        value: "customer",
        label: "Customer Interaction",
        description: "Chatbots, support, and engagement",
      },
    ],
  },
]
