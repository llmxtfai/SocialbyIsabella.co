import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Camera,
  Check,
  Clapperboard,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

type Package = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
  icon: LucideIcon;
};

type AddOn = {
  name: string;
  price: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

type ResumeRole = {
  title: string;
  company: string;
  bullets: string[];
};

const emailHref = "mailto:danikabright@gmail.com";
const phoneHref = "tel:+15613894926";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const packages: Package[] = [
  {
    name: "Essentials",
    price: "$300/month",
    description: "Perfect for businesses looking to build a consistent online presence.",
    features: [
      "12 custom posts each month",
      "Captions written for your brand",
      "Post scheduling",
      "Monthly content calendar",
    ],
    cta: "Get Started",
    icon: CalendarDays,
  },
  {
    name: "Signature",
    price: "$450/month",
    description: "For businesses ready to grow with more strategy and consistent content.",
    features: [
      "20 custom posts each month",
      "Stories",
      "Monthly strategy",
      "Analytics",
      "Content calendar",
    ],
    cta: "Let's Grow",
    featured: true,
    icon: BarChart3,
  },
  {
    name: "Complete",
    price: "$650/month",
    description: "A fully managed experience so you can focus on running your business.",
    features: [
      "Full account management",
      "Reels",
      "Stories",
      "Community engagement",
      "Monthly strategy & reporting",
    ],
    cta: "Work Together",
    icon: HeartHandshake,
  },
];

const addOns: AddOn[] = [
  {
    name: "Content Creation Sessions",
    price: "Starting at $150",
    description: "Professional photo and video content created specifically for your business.",
    image: "/assets/content-session.webp",
    icon: Camera,
  },
  {
    name: "Event Coverage",
    price: "$125/hour",
    description: "Behind-the-scenes content, photography, and social media coverage for events.",
    image: "/assets/event-coverage.webp",
    icon: Clapperboard,
  },
  {
    name: "Custom Packages Available",
    price: "Built around your goals",
    description:
      "Looking for something tailored to your business? I'd love to create a package designed for you.",
    image: "/assets/custom-strategy.webp",
    icon: Sparkles,
  },
];

const storyParagraphs = [
  "I'm originally from Austin, Texas, and I'm currently living in Jupiter, Florida. I'm pursuing my Bachelor's degree in Marketing at Palm Beach Atlantic University. Ever since I was young, I've loved storytelling, photography, and finding creative ways to connect with people. Over time, that passion grew into what I do today. Helping businesses tell their story through thoughtful, intentional content and a touch of fun!",
  "Over the past several years, I've had the opportunity to manage social media for magazines, media personalities, nonprofits, coffee shops, faith-based organizations, and local businesses. Today, I manage multiple client accounts while continuing to grow my experience in social media management, content creation, brand strategy, and digital marketing. I also film and create content for events, capture behind-the-scenes moments, and produce photography and short-form video that helps bring each brand's story to life.",
  "My background in journalism, photography, marketing, and content creation has taught me that social media is about so much more than simply posting. Every business has its own personality, voice, and purpose, and I believe its content should reflect that. I don't believe in one-size-fits-all strategies or following trends just because everyone else is. Instead, I focus on creating content that feels authentic, builds trust, and helps businesses connect with the people they're trying to reach.",
  "Whether I'm behind the camera filming an event, planning a month's worth of content, editing a Reel, writing captions, developing a content strategy, or managing your social media day to day, I approach every project with creativity, intention, and attention to detail. My goal is to become an extension of your business not just someone who schedules posts, but someone who genuinely cares about your brand and the story you're telling.",
  "I'm so excited to officially launch Social by Isabella and begin working with even more incredible brands and business owners. Thank you for being here and supporting this new chapter. I can't wait to connect with you, share my work, and hopefully have the opportunity to tell your story next.",
];

const roles: ResumeRole[] = [
  {
    title: "Social Media Manager",
    company: "Dr. Gina Loudon | Real America's Voice",
    bullets: [
      "Manage daily social media content across Instagram, Facebook, X, and LinkedIn.",
      "Create short-form video content, graphics, captions, and promotional campaigns.",
      "Support digital strategy, brand partnerships, and behind-the-scenes content.",
    ],
  },
  {
    title: "Social Media Manager & Content Creator",
    company: "PocketBook Magazine | Ashley Smith, Publisher",
    bullets: [
      "Manage social media strategy and content for PocketBook Magazine.",
      "Create photography, videography, Reels, Stories, graphics, and editorial content.",
      "Cover local events and collaborate with businesses, entrepreneurs, and community partners.",
    ],
  },
];

const additionalExperience = [
  "Social Media Manager, Moms in Prayer",
  "Barista & Social Media Manager, Roasters Coffee Shop",
  "Social Media Manager & Student Leader, Fellow Christian Students",
  "Photographer & Videographer, Cedar Park High School Athletics",
  "Mission Trip Photographer & Translator, Mission of Hope, Dominican Republic",
];

const awards = [
  "Columbia University CSPA 2024 Scholastic Gold Circle Winner",
  "UIL Yearbook Awards, 1st Place",
  "Best Header, Yearbook Story Spread",
  "Descriptive Writing Award",
  "DECA Ethics Project Award",
];

const skillGroups = [
  "Social Media Management",
  "Content Creation",
  "Photography",
  "Videography",
  "Journalism",
  "Brand Strategy",
  "Digital Marketing",
  "Canva",
  "Event Coverage",
  "Copywriting",
  "Team Collaboration",
];

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
        <a className="text-base font-semibold text-white sm:text-lg" href="#top">
          Social by Isabella
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-white/85 md:flex">
          {navItems.map((item) => (
            <a className="transition hover:text-white" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#fffaf5] px-4 text-sm font-semibold text-[#172033] shadow-sm transition hover:bg-white"
          href={emailHref}
        >
          <Mail aria-hidden="true" className="size-4" />
          <span className="hidden sm:inline">Email Isabella</span>
          <span className="sm:hidden">Email</span>
        </a>
      </div>
    </header>
  );
}

function SectionHeading({
  eyebrow,
  title,
  children,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p
        className={`text-sm font-semibold uppercase ${
          tone === "dark" ? "text-[#f3d8d8]" : "text-[#b75d69]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-semibold leading-tight sm:text-4xl ${
          tone === "dark" ? "text-white" : "text-[#172033]"
        }`}
      >
        {title}
      </h2>
      {children ? (
        <div
          className={`mt-4 text-base leading-7 ${
            tone === "dark" ? "text-white/75" : "text-[#465161]"
          }`}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#172033] text-white" id="top">
      <img
        alt="A warm creative studio workspace with a camera, notebook, phone, flowers, and coastal light."
        className="absolute inset-0 h-full w-full object-cover"
        src="/assets/hero-brand.webp"
      />
      <div className="absolute inset-0 bg-[#172033]/72" />
      <Header />
      <div className="relative z-10 mx-auto flex min-h-[76svh] max-w-7xl items-end px-4 pb-12 pt-28 sm:px-6 sm:pb-16 lg:min-h-[82svh] lg:px-8">
        <div className="max-w-4xl">
          <p className="text-base font-semibold text-[#f3d8d8] sm:text-lg">
            Hey y'all! I'm Isabella Olson
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            Social by Isabella
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
            Helping businesses tell their story through thoughtful content, creative strategy,
            and authentic connection.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#b75d69] px-5 text-sm font-semibold text-white transition hover:bg-[#9f4d59]"
              href={emailHref}
            >
              <Mail aria-hidden="true" className="size-4" />
              Work with Isabella
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/45 px-5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              href="#services"
            >
              View Packages
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
          <div className="mt-9 grid max-w-3xl gap-4 border-t border-white/25 pt-6 text-sm text-white/78 sm:grid-cols-3">
            <p>Austin roots</p>
            <p>Jupiter, Florida based</p>
            <p>Marketing student at Palm Beach Atlantic University</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bg-[#fffaf5] px-4 py-20 sm:px-6 lg:px-8" id="about">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <div className="overflow-hidden rounded-lg border border-[#e9ddd3] bg-white shadow-sm">
            <img
              alt="Portrait of Isabella Olson."
              className="aspect-[4/5] h-full w-full object-cover"
              src="/assets/isabella-portrait.jpg"
            />
          </div>
          <div className="mt-6 grid gap-3 text-sm font-medium text-[#465161] sm:grid-cols-2 lg:grid-cols-1">
            <a className="flex items-center gap-3" href={emailHref}>
              <Mail aria-hidden="true" className="size-4 text-[#b75d69]" />
              danikabright@gmail.com
            </a>
            <a className="flex items-center gap-3" href={phoneHref}>
              <Phone aria-hidden="true" className="size-4 text-[#607b69]" />
              (561) 389-4926
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase text-[#b75d69]">Meet Isabella</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#172033] sm:text-4xl">
            Thoughtful content with a real point of view.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-8 text-[#465161]">
            {storyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="font-semibold text-[#172033]">— Isabella Danika Olson 💖</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PackageCard({ item }: { item: Package }) {
  const Icon = item.icon;

  return (
    <article
      className={`flex h-full flex-col rounded-lg border p-6 shadow-sm ${
        item.featured
          ? "border-[#b75d69] bg-white"
          : "border-[#e9ddd3] bg-[#fffdf9]"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex size-11 items-center justify-center rounded-lg bg-[#f3d8d8] text-[#9f4d59]">
            <Icon aria-hidden="true" className="size-5" />
          </div>
          <h3 className="mt-5 text-2xl font-semibold text-[#172033]">{item.name}</h3>
        </div>
        {item.featured ? (
          <span className="rounded-full bg-[#607b69] px-3 py-1 text-xs font-semibold text-white">
            Most Popular
          </span>
        ) : null}
      </div>
      <p className="mt-4 text-3xl font-semibold text-[#b75d69]">{item.price}</p>
      <p className="mt-4 leading-7 text-[#465161]">{item.description}</p>
      <ul className="mt-6 space-y-3 text-sm text-[#465161]">
        {item.features.map((feature) => (
          <li className="flex gap-3" key={feature}>
            <Check aria-hidden="true" className="mt-0.5 size-4 flex-none text-[#607b69]" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        className={`mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition ${
          item.featured
            ? "bg-[#b75d69] text-white hover:bg-[#9f4d59]"
            : "bg-[#172033] text-white hover:bg-[#28344a]"
        }`}
        href={emailHref}
      >
        {item.cta}
        <ArrowRight aria-hidden="true" className="size-4" />
      </a>
    </article>
  );
}

function AddOnCard({ item }: { item: AddOn }) {
  const Icon = item.icon;

  return (
    <article className="overflow-hidden rounded-lg border border-[#e0d3c8] bg-white shadow-sm">
      <img alt="" className="aspect-[4/3] w-full object-cover" src={item.image} />
      <div className="p-6">
        <div className="flex items-center gap-3 text-[#b75d69]">
          <Icon aria-hidden="true" className="size-5" />
          <p className="text-sm font-semibold uppercase">{item.price}</p>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-[#172033]">{item.name}</h3>
        <p className="mt-3 leading-7 text-[#465161]">{item.description}</p>
      </div>
    </article>
  );
}

function Services() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8" id="services">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Services & Packages" title="Content support that grows with you.">
          <p>
            Every business is different. These packages are designed to grow with you while
            creating content that truly reflects your brand.
          </p>
        </SectionHeading>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {packages.map((item) => (
            <PackageCard item={item} key={item.name} />
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-[#b75d69]">Add-On Services</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#172033] sm:text-4xl">
              Extra production when your calendar needs more.
            </h2>
            <p className="mt-5 leading-8 text-[#465161]">
              Add a focused content session, event coverage, or a custom package when the work
              needs a more tailored plan.
            </p>
            <img
              alt="A clean content strategy calendar with a laptop, camera lens, phone, notebook, and color palette."
              className="mt-8 aspect-[4/3] w-full rounded-lg object-cover shadow-sm"
              src="/assets/services-strategy.webp"
            />
          </div>
          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {addOns.map((item) => (
              <AddOnCard item={item} key={item.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ResumeList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border-l border-white/18 pl-5">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-white/72">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Resume() {
  return (
    <section className="bg-[#172033] px-4 py-20 text-white sm:px-6 lg:px-8" id="resume">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Résumé" title="Isabella Olson" tone="dark">
          <p>
            Jupiter, Florida | Originally from Austin, Texas
            <br />
            danikabright@gmail.com | (561) 389-4926
          </p>
        </SectionHeading>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h3 className="text-xl font-semibold text-white">Professional Summary</h3>
            <p className="mt-4 leading-8 text-white/75">
              Creative and detail-oriented Marketing student with hands-on experience in social
              media management, content creation, photography, videography, journalism, and brand
              strategy. Experienced managing social media for media personalities, magazines,
              nonprofits, coffee shops, faith-based organizations, and local businesses. Passionate
              about helping brands tell authentic stories through intentional content, strategic
              marketing, and creative communication.
            </p>

            <div className="mt-10 border-l border-[#f3d8d8]/35 pl-5">
              <h3 className="text-xl font-semibold text-white">Education</h3>
              <div className="mt-4 space-y-5 text-sm leading-6 text-white/75">
                <p>
                  <span className="block font-semibold text-white">Palm Beach Atlantic University</span>
                  Bachelor of Science in Marketing, In Progress
                </p>
                <p>
                  <span className="block font-semibold text-white">
                    Hill Country Christian School of Austin
                  </span>
                  Diploma of Hope
                </p>
                <p>
                  <span className="block font-semibold text-white">Cedar Park High School</span>
                  Spanish Honors | AP Spanish
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Experience</h3>
            <div className="mt-5 space-y-8">
              {roles.map((role) => (
                <article className="border-l border-[#f3d8d8]/35 pl-5" key={role.company}>
                  <p className="font-semibold text-white">{role.title}</p>
                  <p className="mt-1 text-sm text-[#f3d8d8]">{role.company}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-white/72">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <ResumeList items={additionalExperience} title="Additional Experience" />
          <ResumeList items={awards} title="Awards" />
          <ResumeList items={skillGroups} title="Skills" />
          <ResumeList
            items={["English, Fluent", "Spanish, Fluent", "Italian & Latin, Foundational"]}
            title="Languages"
          />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="bg-[#607b69] px-4 py-16 text-white sm:px-6 lg:px-8" id="contact">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-white/75">Ready to tell your story online?</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
            Let's create something beautiful together.
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <a
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#172033] transition hover:bg-[#fffaf5]"
            href={emailHref}
          >
            <Mail aria-hidden="true" className="size-4" />
            Email Isabella
          </a>
          <a
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/55 px-5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            href={phoneHref}
          >
            <Phone aria-hidden="true" className="size-4" />
            Call Isabella
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#111827] px-4 py-8 text-sm text-white/65 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Social by Isabella</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <a className="flex items-center gap-2 transition hover:text-white" href={emailHref}>
            <Mail aria-hidden="true" className="size-4" />
            danikabright@gmail.com
          </a>
          <a className="flex items-center gap-2 transition hover:text-white" href={phoneHref}>
            <Phone aria-hidden="true" className="size-4" />
            (561) 389-4926
          </a>
          <span className="flex items-center gap-2">
            <MapPin aria-hidden="true" className="size-4" />
            Jupiter, Florida
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
