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
  FileText,
  ShieldCheck,
  ChevronRight,
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
    image: "assistant-original",
  },
  {
    name: "Shopee integration",
    icon: ShoppingBag,
    tag: "Close to the purchase. Limited reach.",
    body: "Warranty records sit beside the shopping history people already use.",
    trade:
      "Purchases from other platforms and physical stores remain outside the system.",
    num: "02",
    image: "early-flow-13",
  },
  {
    name: "Email / Gmail",
    icon: Mail,
    tag: "Passive capture. Uneven information.",
    body: "An extension could collect receipts from an existing inbox with little manual effort.",
    trade:
      "Inbox access raises privacy concerns; inconsistent receipt formats complicate collection.",
    num: "03",
    image: "receipt-button-after",
  },
  {
    name: "Apple Wallet",
    icon: Layers,
    tag: "A familiar place. Less to maintain.",
    body: "Merchant-issued passes bring product, receipt and coverage details into one familiar place.",
    trade:
      "Depends on merchant support and excludes people who do not use Apple Wallet.",
    num: "04",
    image: "wallet-overview",
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
              <img src={img(c.image)} alt="" loading="lazy" />
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
const scenarios = [
  {
    question: "Is this issue covered?",
    short: "Understand coverage",
    icon: ShieldCheck,
    user: "What does my headphone warranty cover?",
    heading: "Start with the right product.",
    explanation:
      "A general question can refer to more than one purchase. The assistant first helps identify the warranty, then explains the relevant coverage.",
    reply: "I found two headphones. Which one do you mean?",
    action: "Sony WH-1000XM5",
    result:
      "The prototype explains parts and labour coverage in plain language, alongside the product’s warranty details.",
    next: "View the warranty",
    asset: "warranty-pass",
  },
  {
    question: "Where is my receipt?",
    short: "Retrieve a receipt",
    icon: FileText,
    user: "Where is the receipt for my Sony headphones?",
    heading: "Bring the evidence into reach.",
    explanation:
      "Retrieval is part of the conversation. Connect the question to the purchase record so the user does not need to remember where it was saved.",
    reply: "Let’s find the purchase record attached to your warranty.",
    action: "Find Sony purchase record",
    result:
      "The warranty pass keeps the product and purchase information together, with access to the original proof of purchase.",
    next: "View purchase details",
    asset: "warranty-pass",
  },
  {
    question: "How do I make a claim?",
    short: "Find the next step",
    icon: MessageCircle,
    user: "How do I make a claim for my headphones?",
    heading: "Turn uncertainty into a next step.",
    explanation:
      "Guidance connects back to the claim flow. The user can describe the issue, attach evidence and follow the progress of the claim.",
    reply:
      "First, check the coverage for this product. Then describe what went wrong and add relevant photos or video.",
    action: "Show the claim steps",
    result:
      "The team’s claim form asks for the issue and supporting evidence. A separate timeline explains the status and any action needed.",
    next: "View the claim form",
    asset: "claim-form",
  },
];
export function AssistantDemo() {
  const [selected, setSelected] = useState(0);
  const [step, setStep] = useState(0);
  const s = scenarios[selected];
  return (
    <div className="assistant-layout">
      <div className="assistant-copy">
        <Label light>06 / MY INTERACTION DESIGN</Label>
        <h2>
          A question. A little clarity. <em>A way forward.</em>
        </h2>
        <p>
          Instead of asking people to decode a warranty, I focused on helping
          them ask the question they already have.
        </p>
        <div className="scenario-buttons" aria-label="Assistant scenarios">
          {scenarios.map((c, i) => (
            <button
              aria-pressed={selected === i}
              onClick={() => {
                setSelected(i);
                setStep(0);
              }}
              key={c.question}
              className={selected === i ? "active" : ""}
            >
              <c.icon size={19} />
              <span>{c.question}</span>
              <ArrowUpRight size={18} />
            </button>
          ))}
        </div>
        <div className="scenario-description" aria-live="polite">
          <h3>{s.heading}</h3>
          <p>{s.explanation}</p>
        </div>
        <p className="demo-note">
          Interactive illustration · scripted, not live AI.
          <br />
          Receipt and claim dialogues illustrate capabilities described in the
          project; they are not tested screens.
        </p>
      </div>
      <div className="demo-stage">
        <div className="demo-phone">
          <div className="device-status">
            <span>9:41</span>
            <span>● ▰</span>
          </div>
          <div className="demo-header">
            <MessageCircle size={20} />
            <strong>Warranty Assistant</strong>
            <span>✳</span>
          </div>
          <div className="demo-messages" aria-live="polite">
            <span className="conversation-label">{s.short}</span>
            <div className="user-bubble">{s.user}</div>
            <div className="assistant-bubble">
              <span className="assistant-symbol">✳</span>
              <p>{s.reply}</p>
            </div>
            {step === 0 ? (
              <button className="product-choice" onClick={() => setStep(1)}>
                <span>
                  <small>CONTINUE THE SCENARIO</small>
                  {s.action}
                </span>
                <ChevronRight size={18} />
              </button>
            ) : step === 1 ? (
              <>
                <div className="user-bubble">{s.action}</div>
                <div className="assistant-bubble result">
                  <strong>
                    {selected === 0
                      ? "Coverage, in plain language"
                      : selected === 1
                        ? "Your purchase information"
                        : "From question to claim"}
                  </strong>
                  <p>{s.result}</p>
                  <button onClick={() => setStep(2)}>
                    {s.next}
                    <ArrowRight size={15} />
                  </button>
                </div>
              </>
            ) : (
              <div className="demo-source">
                <img
                  src={img(s.asset)}
                  alt={
                    selected === 2
                      ? "Original claim form from Assignment 3"
                      : "Original warranty pass from Assignment 3"
                  }
                />
                <span>Original project screen · A3</span>
              </div>
            )}
          </div>
          <div className="demo-footer">
            <span>{step + 1} / 3</span>
            <button onClick={() => setStep(0)}>Restart scenario ↺</button>
          </div>
        </div>
        <span className="stage-caption">
          Try a question, then follow the next action.
        </span>
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
