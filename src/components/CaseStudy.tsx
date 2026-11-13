import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Smartphone,
  ShoppingBag,
  Mail,
  Layers,
  MessageCircle,
} from "lucide-react";

export const img = (name: string) => `/images/${name}.webp`;
export function Label({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`eyebrow ${light ? "light" : ""}`}>
      <span className="tiny-cross">✳</span>
      {children}
    </div>
  );
}
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65 }}
    >
      {children}
    </motion.div>
  );
}
export function Phone({
  name,
  alt,
  className = "",
  eager = false,
}: {
  name: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div className={`phone ${className}`}>
      <img src={img(name)} alt={alt} loading={eager ? "eager" : "lazy"} />
    </div>
  );
}
const concepts = [
  {
    name: "Standalone app",
    icon: Smartphone,
    tag: "Full control. A new commitment.",
    body: "A dedicated home for every warranty, with full control over the experience.",
    trade:
      "Downloading, setting up and maintaining another app adds work to a low-frequency task.",
    num: "01",
    image: "direction-app-original.png",
  },
  {
    name: "Shopee integration",
    icon: ShoppingBag,
    tag: "Close to the purchase. Limited reach.",
    body: "Warranty records sit beside the shopping history people already use.",
    trade:
      "Purchases from other platforms and physical stores remain outside the system.",
    num: "02",
    image: "direction-shopee-original.png",
  },
  {
    name: "Email / Gmail",
    icon: Mail,
    tag: "Passive capture. Uneven information.",
    body: "An extension could collect receipts from an existing inbox with little manual effort.",
    trade:
      "Inbox access raises privacy concerns; inconsistent receipt formats complicate collection.",
    num: "03",
    image: "direction-gmail-original.jpg",
  },
  {
    name: "Apple Wallet",
    icon: Layers,
    tag: "A familiar place. Less to maintain.",
    body: "Merchant-issued passes bring product, receipt and coverage details into one familiar place.",
    trade:
      "Depends on merchant support and excludes people who do not use Apple Wallet.",
    num: "04",
    image: "direction-wallet-original.png",
  },
];
export function Concepts() {
  const [active, setActive] = useState(3);
  const item = concepts[active];
  return (
    <div className="concept-explorer">
      <div className="concept-tabs" aria-label="Explore design directions">
        {concepts.map((c, i) => (
          <button
            key={c.name}
            aria-pressed={i === active}
            onClick={() => setActive(i)}
            className={i === active ? "active" : ""}
          >
            <span className="concept-thumb">
              <img
                src={`/images/${c.image}`}
                alt={`${c.name} — original presentation image`}
                loading="lazy"
              />
            </span>
            <span className="concept-top">
              <c.icon size={25} strokeWidth={1.4} />
              <span>{c.num}</span>
            </span>
            <span className="concept-name">{c.name}</span>
            <span className="concept-bottom">
              {i === 3 ? "Selected direction" : "Explore the trade-off"}
              <ArrowUpRight size={16} />
            </span>
          </button>
        ))}
      </div>
      <div className="concept-detail" aria-live="polite">
        <div>
          <span className="small-label">
            {active === 3 ? "WHY OUR TEAM CHOSE IT" : "THE OPPORTUNITY"}
          </span>
          <h3>{item.tag}</h3>
          <p>{item.body}</p>
        </div>
        <div>
          <span className="small-label">THE TRADE-OFF</span>
          <p>{item.trade}</p>
          {active === 3 && (
            <span className="selected-note">
              <Check size={15} /> Fits occasional use without a new tracking
              routine.
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
export function AssistantDemo() {
  return (
    <div className="assistant-layout">
      <div className="assistant-copy">
        <Label light>06 / MY INTERACTION DESIGN</Label>
        <h2>
          A question. <em>A clear next step.</em>
        </h2>
        <p>
          I designed the assistant to identify the right product first, then
          explain coverage in plain language.
        </p>
        <div className="assistant-principles">
          <div>
            <span>01</span>
            <p>
              <strong>Ask naturally.</strong> People can start with the question
              they already have, instead of learning a new menu.
            </p>
          </div>
          <div>
            <span>02</span>
            <p>
              <strong>Clarify uncertainty.</strong> When a question could mean
              more than one warranty, the assistant asks before answering.
            </p>
          </div>
          <div>
            <span>03</span>
            <p>
              <strong>Return to evidence.</strong> Answers lead to the actual
              warranty, receipt or claim action through a clear button.
            </p>
          </div>
        </div>
      </div>
      <div className="demo-stage">
        <figure className="prototype-phone">
          <img
            src={img("assistant-original")}
            alt="Original AI Warranty Assistant prototype showing headphone selection and plain-language warranty coverage"
          />
          <figcaption>Original Warranty Assistant prototype</figcaption>
        </figure>
      </div>
    </div>
  );
}
const journey = [
  {
    name: "Purchase",
    title: "Start where the purchase happens.",
    text: "In our concept, the merchant issues a digital warranty pass after purchase.",
    asset: "early-flow-13",
    landscape: true,
  },
  {
    name: "Save pass",
    title: "Keep the essentials together.",
    text: "Product, purchase date, expiry, coverage and receipt information live in one pass.",
    asset: "warranty-pass",
  },
  {
    name: "Retrieve",
    title: "Find it at the moment of need.",
    text: "Browse the warranty list, search for a product, or ask the assistant.",
    asset: "wallet-overview",
  },
  {
    name: "Understand",
    title: "Read it. Or ask about it.",
    text: "The warranty pass offers direct coverage access; the assistant adds contextual explanation.",
    asset: "assistant-original",
  },
  {
    name: "Claim",
    title: "Move from information to action.",
    text: "Describe the issue and provide relevant evidence in the team’s claim flow.",
    asset: "claim-form",
  },
  {
    name: "Track",
    title: "Know what happens next.",
    text: "The claim timeline communicates progress, contact details and any action needed.",
    asset: "claim-progress",
  },
];
export function Journey() {
  const [active, setActive] = useState(3);
  return (
    <div className="journey">
      <div className="journey-tabs" aria-label="Explore the final experience">
        {journey.map((s, i) => (
          <button
            key={s.name}
            aria-pressed={active === i}
            className={i === active ? "active" : ""}
            onClick={() => setActive(i)}
          >
            <span>0{i + 1}</span>
            {s.name}
            <ArrowRight size={15} />
          </button>
        ))}
      </div>
      <div className="journey-content">
        <div>
          <span className="small-label">
            THE CONNECTED EXPERIENCE / 0{active + 1}
          </span>
          <h3>{journey[active].title}</h3>
          <p>{journey[active].text}</p>
          <div className="assistance-tag">
            <MessageCircle size={18} /> Optional guidance, alongside the
            interface.
          </div>
        </div>
        <div
          className={`journey-visual ${journey[active].landscape ? "landscape" : ""}`}
        >
          <img
            key={active}
            src={img(journey[active].asset)}
            alt={`${journey[active].name}: original project ${journey[active].landscape ? "wireframe flow" : "prototype screen"}`}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
