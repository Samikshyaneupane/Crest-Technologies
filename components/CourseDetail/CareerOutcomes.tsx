import type { CourseData } from "@/Data/courses";

import {
  // FRONTEND
  Code,
  Monitor,
  Layout,
  Globe,

  // QA
  Bug,
  SearchCheck,
  Bot,
  MonitorCheck,

  // PROJECT MANAGEMENT
  ClipboardList,
  Briefcase,
  Users,
  ListChecks,

  // CYBERSECURITY
  ShieldCheck,
  Shield,
  Search,
  Lock,

  // DATA SCIENCE / AI / ML
  BarChart3,
  Database,
  Brain,
  Cpu,

  // FLUTTER
  Smartphone,
  AppWindow,
  Tablet,
  CodeXml,

  // UI/UX
  Palette,
  PenTool,
  LayoutDashboard,


  // MERN
  Layers,
  Boxes,
  Laptop,
  Braces,

  // BACKEND
  Server,
  Network,
  Workflow,
  Terminal,

  // FALLBACK
  CircleCheckBig,
} from "lucide-react";

type Props = {
  course: CourseData;
};

const careerIconsByCourse = {
  // FRONTEND
  "frontend-development-with-reactjs": [
    Code,
    Monitor,
    Layout,
    Globe,
  ],

  // QA AUTOMATION
  "qa-automation": [
    Bug,
    SearchCheck,
    Bot,
    MonitorCheck,
  ],

  // PROJECT MANAGEMENT
  "project-management": [
    ClipboardList,
    Briefcase,
    Users,
    ListChecks,
  ],

  // CYBERSECURITY
  cybersecurity: [
    ShieldCheck,
    Shield,
    Search,
    Lock,
  ],

  // DATA SCIENCE / AI / ML
  "data-science-ai-ml": [
    BarChart3,
    Database,
    Brain,
    Cpu,
  ],

  // FLUTTER
  "flutter-development": [
    Smartphone,
    AppWindow,
    Tablet,
    CodeXml,
  ],

  // UI/UX + PRODUCT DESIGN
  "ui-ux-product-design": [
    Palette,
    PenTool,
    LayoutDashboard,
    
  ],

  // MERN FULL STACK
  "full-stack-development-mern": [
    Layers,
    Boxes,
    Laptop,
    Braces,
  ],

  // BACKEND
  "backend-development": [
    Server,
    Network,
    Workflow,
    Terminal,
  ],
};

export default function CareerOutcomes({ course }: Props) {
  const careerIcons =
    careerIconsByCourse[
      course.slug as keyof typeof careerIconsByCourse
    ] ?? [
      CircleCheckBig,
      CircleCheckBig,
      CircleCheckBig,
      CircleCheckBig,
    ];

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1700px] px-6 lg:px-10">

        {/* HEADING */}
        <h2 className="text-center text-[32px] font-bold text-[#171E63] md:text-[46px] lg:text-[52px]">
          Career Outcomes
        </h2>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-5 max-w-[900px] text-center text-[17px] leading-[1.6] text-[#666666] md:text-[22px]">
          After completion, you&apos;ll be equipped to apply for roles like:
        </p>

        {/* CAREER OUTCOMES */}
        <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-16">
          {course.careers.slice(0, 4).map((career, index) => {
            const Icon = careerIcons[index] ?? CircleCheckBig;

            return (
              <div
                key={career}
                className="flex items-center justify-center gap-5"
              >
                {/* ICON */}
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center">
                  <Icon
                    size={48}
                    strokeWidth={1.7}
                    className="text-black"
                  />
                </div>

                {/* CAREER NAME */}
                <p className="text-[18px] font-medium leading-[1.4] text-black md:text-[21px] lg:text-[22px]">
                  {career}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}