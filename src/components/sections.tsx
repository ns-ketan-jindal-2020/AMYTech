"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import {
  ArrowRight,
  Building2,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Laptop,
  MapPin,
  Globe2,
  Mail,
  PieChart,
  Sparkles,
  Users2,
  ChevronDown,
} from "lucide-react";

import {
  adoptionChannels,
  aiUseCases,
  architectureLayers,
  bcCapabilities,
  companyMetrics,
  decisionSupport,
  engagementModels,
  heroHighlights,
  industryWiseGallery,
  industries,
  insightMetrics,
  platformComparison,
  platformTabs,
  presentationPillars,
  processSteps,
  serviceCards,
  siteMeta,
  summaryBullets,
} from "@/lib/content";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function MotionCard({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      whileTap={hover ? { scale: 0.99 } : undefined}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedCount({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.75 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }

    const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!match) {
      return;
    }

    const target = Number.parseFloat(match[1]);
    const suffix = match[2];
    let frame = 0;
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (start === null) {
        start = timestamp;
      }

      const progress = Math.min((timestamp - start) / 900, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(target * eased);

      if (progress < 1) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, [inView, value]);

  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return <span ref={ref}>{value}</span>;
  }

  const suffix = match[2];
  const formatted = Number.isInteger(Number.parseFloat(match[1]))
    ? Math.round(display).toString()
    : display.toFixed(1);

  return <span ref={ref}>{formatted + suffix}</span>;
}

function SectionShell({
  id,
  eyebrow,
  title,
  description,
  className,
  disableInViewAnimation,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
  disableInViewAnimation?: boolean;
  children: ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={disableInViewAnimation ? "visible" : "hidden"}
      whileInView={disableInViewAnimation ? undefined : "visible"}
      viewport={
        disableInViewAnimation ? undefined : { once: true, amount: 0.2 }
      }
      transition={{ duration: 0.5 }}
      variants={fadeUp}
      className={cn("scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8", className)}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <Badge className="mb-4 border-primary/10 bg-primary/5 text-primary">
            {eyebrow}
          </Badge>
          <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            {description}
          </p>
        </div>
        {children}
      </div>
    </motion.section>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14"
    >
      <div className="absolute inset-0 -z-10 bg-hero-glow" />
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-8 text-white shadow-glow sm:p-10 lg:p-12"
        >
          <Badge className="border-white/10 bg-white/10 text-white/90">
            Microsoft partner for digital transformation
          </Badge>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight tracking-tight text-balance text-white sm:text-5xl lg:text-7xl">
            AMY Tech DMCC builds connected Microsoft experiences for modern
            business operations.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            {siteMeta.description}
          </p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {heroHighlights.map((item) => (
              <motion.div
                key={item}
                variants={staggerItem}
                whileHover={{ y: -3, scale: 1.02 }}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button variant="accent" size="lg" asChild>
              <Link href="#services" className="inline-flex items-center gap-2">
                Explore the portfolio <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/15 bg-white/5 text-white hover:bg-white/10"
              asChild
            >
              <Link href="#contact">Contact AMY Tech</Link>
            </Button>
          </div>

          <motion.div
            className="mt-10 grid gap-4 sm:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {insightMetrics.map((metric) => (
              <motion.div
                key={metric.label}
                variants={staggerItem}
                whileHover={{ y: -5, scale: 1.02 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="text-2xl font-semibold text-white">
                  <AnimatedCount value={metric.value} />
                </div>
                <div className="mt-1 text-sm text-white/70">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="grid gap-6"
        >
          <Card className="relative overflow-hidden border-border/70 bg-card/95 p-0 shadow-glow">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.13),transparent_30%)]" />
            <CardContent className="relative p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
                    Brand view
                  </div>
                  <h2 className="mt-2 font-display text-2xl tracking-tight text-foreground">
                    A clean, modern Microsoft ecosystem story
                  </h2>
                </div>
                <Badge className="border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                  Dubai
                </Badge>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-border/70 bg-gradient-to-br from-slate-950 to-slate-800 p-5 text-white shadow-panel">
                <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                  <div>
                    <div className="text-sm uppercase tracking-[0.3em] text-white/55">
                      Presentation asset
                    </div>
                    <h3 className="mt-3 font-display text-3xl tracking-tight">
                      Microsoft Dynamics 365 ecosystem
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">
                      The extracted deck includes Microsoft Dynamics branding,
                      ERP architecture, and solution diagrams that now inform
                      the website structure.
                    </p>
                  </div>
                  <div className="relative h-44 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                    <Image
                      src="/pptx-media/image2.png"
                      alt="Microsoft Dynamics 365 branding from the extracted deck"
                      fill
                      className="object-contain p-4"
                      priority
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {presentationPillars.map((pillar) => (
              <MotionCard
                key={pillar.title}
                className={cn("overflow-hidden", pillar.accent)}
              >
                <CardHeader>
                  <CardTitle className="text-white">{pillar.title}</CardTitle>
                  <CardDescription>{pillar.description}</CardDescription>
                </CardHeader>
              </MotionCard>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function OverviewSection() {
  return (
    <SectionShell
      id="overview"
      eyebrow="Presentation overview"
      title="From corporate profile to a richer website narrative"
      description="The slide deck is organized around AMY Tech's Microsoft partnership story, service breadth, productized solutions, delivery model, and customer-facing outcomes."
    >
      <motion.div
        className="grid items-stretch gap-4 lg:grid-cols-[0.95fr_1.05fr]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <MotionCard hover={false}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Core story</CardTitle>
              <CardDescription>What the deck says at a glance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-7 text-muted-foreground">
              {summaryBullets.map((bullet) => (
                <div key={bullet} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <span>{bullet}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </MotionCard>
        <motion.div
          className="grid items-stretch gap-4 sm:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {serviceCards.slice(0, 4).map((item) => (
            <MotionCard key={item.title}>
              <Card className="group h-full transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.summary}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {item.bullets.slice(0, 3).map((bullet) => (
                    <div
                      key={bullet}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </MotionCard>
          ))}
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}

export function ServicesSection() {
  return (
    <SectionShell
      id="services"
      eyebrow="Services"
      title="A complete delivery portfolio built around Microsoft technologies"
      description="The deck positions AMY Tech as a partner for implementation, recovery, training, support, low-code delivery, UX, and managed capacity."
    >
      <motion.div
        className="grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {serviceCards.map((card) => (
          <MotionCard key={card.title} className="h-full">
            <Card className="h-full">
              <CardHeader>
                <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.summary}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {card.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </MotionCard>
        ))}
      </motion.div>
    </SectionShell>
  );
}

export function PlatformSection() {
  return (
    <SectionShell
      id="platform"
      eyebrow="Platform depth"
      title="How the Microsoft stack is translated into business outcomes"
      description="Tabbed content maps the slide content into clear solution clusters that are easier to scan on desktop and mobile."
    >
      <Tabs defaultValue="bc" className="w-full">
        <TabsList>
          {platformTabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {platformTabs.map((tab) => (
          <TabsContent
            key={tab.id}
            value={tab.id}
            forceMount
            className="data-[state=inactive]:hidden"
          >
            <MotionCard hover={false} className="h-full">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{tab.title}</CardTitle>
                  <CardDescription>{tab.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {tab.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-border/70 bg-muted/30 p-4 text-sm leading-6 text-foreground"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MotionCard>
          </TabsContent>
        ))}
      </Tabs>
    </SectionShell>
  );
}

export function CapabilitiesSection() {
  return (
    <SectionShell
      id="capabilities"
      eyebrow="Business Central"
      title="Business Central capability map"
      description="The source slides describe a broad ERP footprint covering financial management, sales, service, supply chain, manufacturing, reporting, and Microsoft 365 integrations."
    >
      <motion.div
        className="grid items-stretch gap-4 lg:grid-cols-[1.08fr_0.92fr]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <MotionCard hover={false}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Functional coverage</CardTitle>
              <CardDescription>
                Module coverage extracted from the deck
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {bcCapabilities.map((row) => (
                  <div
                    key={row.module}
                    className="rounded-2xl border border-border/70 bg-muted/20 p-4"
                  >
                    <div className="font-medium text-foreground">
                      {row.module}
                    </div>
                    <div className="mt-2 space-y-1 text-sm leading-6 text-muted-foreground">
                      {row.details.map((detail) => (
                        <div key={detail} className="flex gap-2">
                          <ChevronRight className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </MotionCard>

        <MotionCard hover={false}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Business Central comparison</CardTitle>
              <CardDescription>
                How the deck frames the value proposition
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-hidden rounded-2xl border border-border/70">
                <table className="w-full border-collapse text-left text-sm">
                  <thead className="bg-muted/40 text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3 font-medium">Capability</th>
                      <th className="px-4 py-3 font-medium">What it means</th>
                    </tr>
                  </thead>
                  <tbody>
                    {platformComparison.map((row) => (
                      <tr key={row.label} className="border-t border-border/70">
                        <td className="px-4 py-3 font-medium text-foreground">
                          {row.label}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </MotionCard>
      </motion.div>
    </SectionShell>
  );
}

export function ProcessSection() {
  return (
    <SectionShell
      id="process"
      eyebrow="Delivery process"
      title="A four-step workflow that moves from discovery to support"
      description="Process slides are translated into a practical stepper that explains how AMY Tech works with customers from the first conversation through ongoing support."
    >
      <motion.ol
        className="relative grid gap-4 lg:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="absolute left-[1.25rem] top-0 hidden h-full w-px bg-gradient-to-b from-primary/40 via-primary/15 to-transparent lg:block" />
        {processSteps.map((step, index) => (
          <motion.li key={step.title} className="relative">
            <MotionCard hover={false} className="relative overflow-hidden">
              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 font-display text-lg font-semibold text-primary shadow-sm shadow-primary/10">
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.35 }}
                    >
                      {index + 1}
                    </motion.span>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
              </Card>
            </MotionCard>
          </motion.li>
        ))}
      </motion.ol>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Unified cloud approach</CardTitle>
            <CardDescription>
              How the deck describes the Microsoft cloud story
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            {architectureLayers.slice(1, 5).map((layer) => (
              <div
                key={layer.title}
                className="rounded-2xl border border-border/70 bg-muted/20 p-4"
              >
                <div className="font-medium text-foreground">{layer.title}</div>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border/70 bg-background px-2.5 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customer adoption and consumption</CardTitle>
            <CardDescription>
              Device-agnostic access and cross-app workflows
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {adoptionChannels.map((channel) => (
                <AccordionItem key={channel.title} value={channel.title}>
                  <AccordionTrigger>{channel.title}</AccordionTrigger>
                  <AccordionContent>{channel.summary}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  );
}

export function ArchitectureSection() {
  return (
    <SectionShell
      id="architecture"
      eyebrow="Architecture"
      title="A layered Microsoft architecture that unifies data, apps, and intelligence"
      description="Architecture slides become a vertical stack that explains how people, productivity tools, business apps, and AI work together on the Microsoft cloud."
    >
      <motion.div
        className="grid gap-4 lg:grid-cols-5"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {architectureLayers.map((layer, index) => (
          <MotionCard key={layer.title} className="relative overflow-hidden">
            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {index === 0 ? (
                    <Users2 className="h-5 w-5" />
                  ) : index === 1 ? (
                    <Laptop className="h-5 w-5" />
                  ) : index === 2 ? (
                    <Building2 className="h-5 w-5" />
                  ) : index === 3 ? (
                    <PieChart className="h-5 w-5" />
                  ) : (
                    <Cloud className="h-5 w-5" />
                  )}
                </div>
                <CardTitle className="text-lg">{layer.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {layer.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-border/70 bg-muted/20 px-3 py-2 text-sm text-muted-foreground"
                  >
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>
          </MotionCard>
        ))}
      </motion.div>
    </SectionShell>
  );
}

export function InsightsSection() {
  return (
    <SectionShell
      id="insights"
      eyebrow="Insights and AI"
      title="Decision support, Copilot, and AI use cases"
      description="The deck highlights practical ways to move from reporting toward prediction, automation, and guided decision-making."
    >
      <motion.div
        className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <MotionCard hover={false}>
          <Card>
            <CardHeader>
              <CardTitle>Decision support</CardTitle>
              <CardDescription>
                Directly reflected from the slide content
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {decisionSupport.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/70 bg-muted/20 p-4"
                >
                  <div className="font-medium text-foreground">
                    {item.title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.summary}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </MotionCard>

        <MotionCard hover={false}>
          <Card>
            <CardHeader>
              <CardTitle>AI use cases</CardTitle>
              <CardDescription>
                Marketing, forecasting, collections, and cash-flow analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <motion.div
                className="grid gap-4 md:grid-cols-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {aiUseCases.map((item) => (
                  <MotionCard
                    key={item.title}
                    className="rounded-2xl border border-border/70 bg-muted/20 p-4"
                  >
                    <div className="flex items-center gap-2 text-primary">
                      <BrainCircuit className="h-4 w-4" />
                      <div className="font-medium text-foreground">
                        {item.title}
                      </div>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.challenge}
                    </p>
                    <div className="mt-3 rounded-2xl bg-background px-3 py-2 text-sm leading-6 text-foreground">
                      {item.value}
                    </div>
                  </MotionCard>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </MotionCard>
      </motion.div>

      <motion.div
        className="mt-6 grid gap-4 lg:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {insightMetrics.map((metric) => (
          <MotionCard key={metric.label}>
            <Card>
              <CardHeader>
                <CardDescription>{metric.label}</CardDescription>
                <CardTitle className="text-3xl">
                  <AnimatedCount value={metric.value} />
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                {metric.detail}
              </CardContent>
            </Card>
          </MotionCard>
        ))}
      </motion.div>
    </SectionShell>
  );
}

function EngagementModelsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Engagement models</CardTitle>
          <CardDescription>How the company delivers work</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-2">
          {engagementModels.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.01 }}
              transition={{ delay: index * 0.03, duration: 0.3 }}
              className="rounded-2xl border border-border/70 bg-muted/20 p-4"
            >
              <div className="font-medium text-foreground">{item.title}</div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}

function IndustryCoverageCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Industry coverage</CardTitle>
          <CardDescription>
            Verticals explicitly named in the deck
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.01 }}
                transition={{ delay: index * 0.02, duration: 0.28 }}
                className="rounded-2xl border border-border/70 bg-muted/20 px-3 py-3 text-sm text-foreground"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function IndustryLogoGroupCard({
  group,
}: {
  group: { industry: string; images: string[] };
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.02 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-xl border border-border/70 bg-muted/20 p-4"
    >
      <h4 className="mb-3 text-sm font-semibold text-foreground">
        {group.industry}
      </h4>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {group.images.map((src, index) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ delay: index * 0.015, duration: 0.25 }}
            whileHover={{ scale: 1.03, y: -2 }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border/70 bg-background"
          >
            <Image
              src={src}
              alt={`${group.industry} customer logo ${index + 1}`}
              fill
              className="object-contain p-2"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function EngagementSection() {
  return (
    <SectionShell
      id="engagement"
      eyebrow="Engagement and industries"
      title="Flexible delivery models aligned with real industry needs"
      description="The company presents multiple engagement models and a broad set of verticals supported by the same Microsoft delivery discipline."
      disableInViewAnimation
    >
      <div className="grid items-stretch gap-4 xl:grid-cols-2">
        <EngagementModelsCard />
        <IndustryCoverageCard />
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>AMY Customers-Industry Wise</CardTitle>
          <CardDescription>
            Logos are grouped by industry as shown in the PPT.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {industryWiseGallery.map((group) => (
              <IndustryLogoGroupCard key={group.industry} group={group} />
            ))}
          </div>
        </CardContent>
      </Card>
    </SectionShell>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-6 overflow-hidden rounded-[2rem] border border-border/70 bg-slate-950 p-8 text-white shadow-glow lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
        <div>
          <Badge className="border-white/10 bg-white/10 text-white/90">
            Thank you
          </Badge>
          <h2 className="mt-6 font-display text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            Build the website around the real corporate profile.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">
            The deck concludes with AMY Tech DMCC contact details, address,
            website, and LinkedIn presence. Those details are preserved here so
            the site can function as a production-ready destination.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-white/85">
                <MapPin className="h-4 w-4" /> Address
              </div>
              <p className="mt-3 text-sm leading-6 text-white/70">
                {siteMeta.address}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-white/85">
                <Globe2 className="h-4 w-4" /> Website and LinkedIn
              </div>
              <div className="mt-3 space-y-2 text-sm leading-6 text-white/70">
                <a
                  href={siteMeta.website}
                  className="block break-all text-cyan-300 hover:text-cyan-200"
                >
                  {siteMeta.website}
                </a>
                <a
                  href={siteMeta.linkedIn}
                  className="block break-all text-cyan-300 hover:text-cyan-200"
                >
                  {siteMeta.linkedIn}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {siteMeta.contacts.map((person) => (
              <Card
                key={person.name}
                className="border-white/10 bg-white/5 text-white shadow-none"
              >
                <CardHeader>
                  <CardTitle className="text-white">{person.name}</CardTitle>
                  <CardDescription className="text-white/65">
                    Business contact
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <a
                      href={`mailto:${person.email}`}
                      className="break-all text-cyan-300 hover:text-cyan-200"
                    >
                      {person.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{person.phone}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-white/10 bg-white/5 text-white shadow-none">
            <CardHeader>
              <CardTitle className="text-white">Next steps</CardTitle>
              <CardDescription className="text-white/65">
                Use this site as the customer-facing corporate profile
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-white/70">
              <div className="flex gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                <span>
                  Review the extracted content layer and refine any slide text
                  that needs manual cleanup.
                </span>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                <span>
                  Replace or expand media assets as needed from the unpacked
                  presentation media folder.
                </span>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                <span>
                  Deploy the site with analytics, forms, and content management
                  once the design is approved.
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
