import { useState } from "react";
import { ArrowUpRight, ArrowDown, ArrowRight, Plus, Minus } from "lucide-react";
import {
  Label,
  Reveal,
  Phone,
  Concepts,
  AssistantDemo,
  Journey,
  img,
} from "./components/CaseStudy";

export function OverviewPage() {
  return (
    <>
      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <Label>DV2008 / INTERFACE DESIGN</Label>
          <h1>
            Rethinking warranty <em>management.</em>
          </h1>
          <p className="hero-deck">
            Less searching. Less second-guessing.
            <br />A clearer way to use what you already own.
          </p>
          <p className="hero-summary">
            Helping young adults retrieve, understand and act on warranty
            information—without another system to maintain.
          </p>
          <a href="#/contribution" className="primary-link">
            Explore my contribution <ArrowUpRight size={18} />
          </a>
          <a className="scroll-note" href="#/research">
            <span className="circle-arrow">
              <ArrowDown size={17} />
            </span>{" "}
            THE THINKING BEHIND THE DESIGN
          </a>
        </div>
        <div className="hero-art">
          <div className="hero-orbit" />
          <span className="art-kicker">WARRANTY, UNDERSTOOD.</span>
          <Phone
            name="wallet-overview"
            alt="Original team prototype showing saved warranty cards"
            className="hero-wallet"
            eager
          />
          <Phone
            name="assistant-original"
            alt="Oswin’s original Warranty Assistant conversation prototype"
            className="hero-assistant"
            eager
          />
          <div className="floating-note">
            <span className="note-dot" />
            <span>
              From stored information
              <br />
              <strong>to useful answers.</strong>
            </span>
          </div>
          <span className="art-caption">
            APPLE WALLET CONCEPT + AI ASSISTANCE
          </span>
        </div>
      </section>
      <section className="about-me wrap" aria-labelledby="about-title">
        <div className="about-portrait">
          <div className="portrait-frame">
            <img
              src={img("oswin-profile")}
              alt="Chen Jui-Tai in front of the Hollywood sign"
            />
          </div>
          <small>
            Chen Jui-Tai
            <br />
            Information Engineering
          </small>
        </div>
        <div className="about-copy">
          <Label>ABOUT THE DESIGNER</Label>
          <h2 id="about-title">
            I build technical systems
            <br />
            <em>around real people.</em>
          </h2>
          <p className="about-lead">
            I’m Chen Jui-Tai, an Information Engineering student at Nanyang
            Technological University. I joined DV2008 to bring my engineering
            background into a more human, visual form of problem solving.
          </p>
          <div className="about-columns">
            <p>
              <strong>What I bring</strong>
              <br />
              AI and backend engineering experience across Jubo Health
              Technologies, Binance and Gigabyte Technology. I’ve worked with
              Python, Docker, cloud platforms, LLMs, VLMs, RAG systems and local
              AI deployment.
            </p>
            <p>
              <strong>Why this project</strong>
              <br />I wanted to practise looking past the system itself: what
              people understand, what they forget, and what makes an interaction
              feel worth returning to.
            </p>
          </div>
          <div
            className="strengths"
            aria-label="Strengths brought into the project"
          >
            <span>Systems thinking</span>
            <span>AI prototyping</span>
            <span>Product curiosity</span>
            <span>Clear communication</span>
          </div>
        </div>
      </section>
      <div className="project-meta wrap">
        <div>
          <span>DESIGNER</span>
          <p>Oswin / Chen Jui Tai</p>
        </div>
        <div>
          <span>ROLE</span>
          <p>Product / UX Designer</p>
        </div>
        <div className="meta-focus">
          <span>MY FOCUS</span>
          <p>
            AI Warranty Assistant
            <br />
            <small>Interaction design, research & ideation</small>
          </p>
        </div>
        <div>
          <span>CONTEXT</span>
          <p>
            Team project · 2026
            <br />
            <small>Academic concept</small>
          </p>
        </div>
      </div>
      <section className="overview-index wrap">
        <Label>EXPLORE THE CASE STUDY</Label>
        <div className="chapter-grid">
          {[
            {
              href: "research",
              n: "01",
              title: "Start with the problem",
              text: "What 43 survey responses and 6 interviews revealed.",
            },
            {
              href: "contribution",
              n: "03",
              title: "Explore my contribution",
              text: "How I designed the AI Warranty Assistant experience.",
            },
            {
              href: "contribution",
              n: "04",
              title: "See what testing changed",
              text: "The feedback that shaped clearer entry points.",
            },
          ].map((c) => (
            <a href={`#/${c.href}`} key={c.href}>
              <span>{c.n}</span>
              <h2>{c.title}</h2>
              <p>{c.text}</p>
              <ArrowUpRight size={22} />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export function ResearchPage() {
  return (
    <>
      <section id="research" className="section wrap">
        <Reveal>
          <Label>01 / THE HUMAN PROBLEM</Label>
          <div className="section-heading">
            <h1>
              Saved somewhere. <em>Useful nowhere.</em>
            </h1>
            <p>
              Our team studied how young adults manage warranties. The problem
              began long before a claim: information was scattered, forgotten or
              too much effort to keep.
            </p>
          </div>
          <div className="research-grid">
            <div className="lead-stat">
              <span className="stat-number">
                62.8<span>%</span>
              </span>
              <h3>didn’t track their warranties.</h3>
              <p>
                27 of 43 survey respondents. A tracking tool would need to earn
                its place.
              </p>
              <div className="stat-rule">
                <span style={{ width: "62.8%" }} />
              </div>
            </div>
            <div className="barriers">
              <div>
                <span>01</span>
                <h3>The receipt disappears.</h3>
                <p>62.8% reported losing receipts.</p>
              </div>
              <div>
                <span>02</span>
                <h3>The expiry slips by.</h3>
                <p>53.5% reported forgetting expiry dates.</p>
              </div>
              <div>
                <span>03</span>
                <h3>The admin feels too heavy.</h3>
                <p>51.2% found management time-consuming.</p>
              </div>
            </div>
          </div>
          <div className="research-foot">
            <span>OUR TEAM’S RESEARCH</span>
            <p>
              43 survey respondents · 6 interviews{" "}
              <small>
                Survey: 95.3% aged 18–25. Barrier question allowed multiple
                selections. A1, pp. 17–19, 27.
              </small>
            </p>
          </div>
          <blockquote>
            “If I do not fully understand the terms and conditions of the
            warranty, usually I’ll ignore it.”
            <cite>Interview participant · Assignment 1, p. 31</cite>
          </blockquote>
        </Reveal>
      </section>
      <section className="challenge">
        <div className="wrap">
          <Label>02 / THE DESIGN CHALLENGE</Label>
          <h2>
            How might we make warranties{" "}
            <em>easy to retrieve, understand and act on</em>—without building a
            new tracking habit?
          </h2>
          <span className="challenge-mark" aria-hidden="true">
            ↗
          </span>
        </div>
      </section>
    </>
  );
}

export function DirectionsPage() {
  return (
    <>
      <section id="directions" className="section wrap">
        <Reveal>
          <Label>03 / EXPLORING THE TRADE-OFFS</Label>
          <div className="section-heading">
            <h1>
              Four directions. <em>One less thing to manage.</em>
            </h1>
            <p>
              Our team compared each idea against effort, existing habits and
              occasional use. I contributed to ideation, including the
              standalone app and Apple Wallet directions.
            </p>
          </div>
          <Concepts />
        </Reveal>
      </section>
      <section className="wallet-section wrap">
        <div className="wallet-editorial">
          <Label>04 / OUR TEAM’S DIRECTION</Label>
          <h2>
            A warranty. <em>Already in your wallet.</em>
          </h2>
          <p>
            A merchant-issued digital pass could be added to Apple Wallet after
            purchase. Product, expiry, coverage, receipt and claim details stay
            together until they are needed.
          </p>
          <div className="mini-flow">
            <span>Purchase</span>
            <ArrowRight size={16} />
            <span>Pass issued</span>
            <ArrowRight size={16} />
            <span>Add to Wallet</span>
          </div>
          <p className="source-note">
            Academic concept: merchant support is assumed. This is a proposed
            Wallet experience, not a shipped Apple integration. Access for
            non-Apple users remains a limitation.
          </p>
        </div>
        <div className="pass-stage">
          <Phone
            name="warranty-pass"
            alt="Original Sony headphone warranty pass with purchase, expiry and coverage information"
          />
          <span>ONE PASS. THE DETAILS THAT MATTER.</span>
        </div>
        <details className="flow-details">
          <summary>
            See the early purchase-to-claim wireframes <Plus size={17} />
          </summary>
          <div className="early-flows">
            {[13, 14, 15, 16].map((n) => (
              <img
                key={n}
                src={img(`early-flow-${n}`)}
                alt={`Original early user flow, Assignment 2 page ${n}`}
                loading="lazy"
              />
            ))}
          </div>
        </details>
      </section>
    </>
  );
}

export function ContributionPage() {
  const [showOriginal, setShowOriginal] = useState(false);
  return (
    <>
      <section id="contribution" className="contribution">
        <div className="wrap">
          <Label light>05 / MY CONTRIBUTION</Label>
          <div className="contribution-intro">
            <h1>
              My focus: turning warranty information <em>into answers.</em>
            </h1>
            <div>
              <span className="personal-tag">OSWIN / INTERACTION DESIGN</span>
              <p className="large-copy">
                Having the information isn’t the same as{" "}
                <span>knowing what to do.</span>
              </p>
              <p>
                A centralised pass solved part of the problem. But people could
                still be unsure whether an issue was covered, what the terms
                meant, or how to begin a claim.
              </p>
              <p>
                My main design focus was the AI Warranty Assistant: an optional
                layer for finding information, explaining it in context and
                guiding the next action.
              </p>
              <div className="ownership">
                <div>
                  <strong>My contribution</strong>
                  <span>
                    Assistant experience; research/interviews; early app and
                    Wallet ideation.
                  </span>
                </div>
                <div>
                  <strong>Our team</strong>
                  <span>
                    Shared research findings, product direction, Wallet system
                    and collaborative testing.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <AssistantDemo />
          <button
            className="original-toggle"
            aria-expanded={showOriginal}
            onClick={() => setShowOriginal(!showOriginal)}
          >
            {showOriginal ? <Minus size={18} /> : <Plus size={18} />} View my
            original Assistant prototype screen <span>A3 / P. 9</span>
          </button>
          {showOriginal && (
            <div className="original-panel">
              <img
                src={img("assistant-original")}
                alt="Original AI Warranty Assistant screenshot, identifying headphones and explaining parts and labour coverage"
              />
              <div>
                <h3>The original interaction</h3>
                <p>
                  The conversation resolves which headphones the user means,
                  explains coverage, and links back to the warranty.
                </p>
                <p className="demo-note">
                  This is a design prototype. Its example response is not a
                  verified statement of a real product’s warranty policy.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="section wrap reasoning">
        <Label>07 / THE REASONING BEHIND THE INTERFACE</Label>
        <h2>
          Every interaction <em>has a reason.</em>
        </h2>
        {[
          {
            n: "01",
            p: "Terms are hard to interpret.",
            d: "Start with a question.",
            w: "I used conversation to connect a user’s situation to relevant warranty information. Access alone had not resolved uncertainty.",
          },
          {
            n: "02",
            p: "The next step is unclear.",
            d: "Make the answer actionable.",
            w: "I connected contextual explanations to the warranty and claim journey. Research described both unclear starting points and troublesome processes.",
          },
          {
            n: "03",
            p: "People rarely use warranties.",
            d: "Keep the path easy to recognise.",
            w: "I treated discoverability as part of the interaction. The clearer chat-bubble entry point signals what the assistant is for, without requiring a new habit.",
          },
        ].map((r) => (
          <Reveal className="reason-row" key={r.n}>
            <span>{r.n}</span>
            <div>
              <span className="small-label">THE PROBLEM</span>
              <h3>{r.p}</h3>
            </div>
            <div>
              <span className="small-label">MY DESIGN DECISION</span>
              <h3>{r.d}</h3>
              <p>{r.w}</p>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}

export function TestingPage() {
  return (
    <>
      <section id="testing" className="testing section">
        <div className="wrap">
          <Label>08 / WHAT TESTING CHANGED</Label>
          <div className="section-heading">
            <h1>
              It worked. <em>But could people find it?</em>
            </h1>
            <p>
              Our team tested four tasks with four participants. All completed
              the main claim flow and found the receipt. Coverage and filtering
              exposed a different problem: discoverability.
            </p>
          </div>
          <div className="test-findings">
            <div>
              <strong>4 participants</strong>
              <span>Formative prototype test</span>
            </div>
            <p>
              Most looked for coverage manually and took time to spot it. They
              could use the assistant <strong>when prompted</strong>, but its
              original icon was unclear.
            </p>
          </div>
          <div className="iteration">
            <div className="iteration-label">
              <span className="small-label">MY ASSISTANT FOCUS</span>
              <h3>A small icon. A clearer invitation.</h3>
              <p>
                The entry point needed to communicate conversation, not an
                ambiguous AI symbol.
              </p>
            </div>
            <div className="icon-comparison">
              <div>
                <span className="small-label">BEFORE</span>
                <img
                  src={img("assistant-icon-before")}
                  alt="Original blue sparkle icon"
                />
                <p>AI symbolism</p>
              </div>
              <ArrowRight size={28} strokeWidth={1} />
              <div>
                <span className="small-label">AFTER</span>
                <img
                  src={img("assistant-icon-after")}
                  alt="Revised black chat bubble with sparkle"
                />
                <p>Recognisable conversation</p>
              </div>
            </div>
            <div className="feedback-strip">
              <span>FEEDBACK</span>
              <p>Chatbot icon wasn’t clear.</p>
              <ArrowRight size={18} />
              <span>RESPONSE</span>
              <p>Redesigned as a cleaner chat bubble.</p>
            </div>
          </div>
          <div className="team-iterations">
            <div>
              <span className="small-label">
                TEAM ITERATION / INFORMATION HIERARCHY
              </span>
              <h3>Coverage needed to stand out.</h3>
              <p>
                Terms blended into other details. The team made them a distinct
                blue link and clarified the proof-of-purchase button.
              </p>
              <img
                src={img("receipt-button-after")}
                alt="Updated distinct claim and proof-of-purchase buttons"
                loading="lazy"
              />
            </div>
            <div>
              <span className="small-label">
                TEAM ITERATION / EXPECTED LOCATION
              </span>
              <h3>Put filters where people looked.</h3>
              <p>
                Participants tried the sort control first. The team moved tag
                filtering there, rather than leaving it under search.
              </p>
              <img
                src={img("filter-after")}
                alt="Updated tag filters located under the sort control"
                loading="lazy"
              />
            </div>
          </div>
          <p className="source-note">
            Source: A3, pp. 14–19. These are observations from a small formative
            test. The PDFs do not report a second test after the changes, so
            improved outcomes remain unverified.
          </p>
        </div>
      </section>
    </>
  );
}

export function ExperiencePage() {
  return (
    <>
      <section className="section wrap" id="experience">
        <Label>09 / THE FINAL EXPERIENCE</Label>
        <div className="section-heading">
          <h1>
            One connected journey. <em>Help when it’s needed.</em>
          </h1>
          <p>
            Our team’s final concept connects the purchase to the claim. My
            assistant adds an optional route to understanding, while the direct
            interface stays available.
          </p>
        </div>
        <Journey />
      </section>
    </>
  );
}

export function ReflectionPage() {
  return (
    <>
      <section className="reflection section" id="learning">
        <div className="wrap">
          <Label>10 / WHAT I’M TAKING FORWARD</Label>
          <h1>
            The real design work is making information <em>mean something.</em>
          </h1>
          <div className="reflection-grid">
            <div>
              <span>01</span>
              <h3>Storage is only the beginning.</h3>
              <p>
                I learned to distinguish finding a record from understanding it.
                The assistant’s role became interpretation and guidance,
                alongside the original information.
              </p>
            </div>
            <div>
              <span>02</span>
              <h3>Less maintenance is a design goal.</h3>
              <p>
                More features can create more friction. For an occasional
                experience, the cost of learning and remembering matters as much
                as the available functionality.
              </p>
            </div>
            <div>
              <span>03</span>
              <h3>Discoverability is functionality.</h3>
              <p>
                A useful assistant is only useful if people recognise how to
                reach it. Testing made me pay closer attention to entry points
                and information hierarchy.
              </p>
            </div>
          </div>
          <div className="next-steps">
            <div>
              <span className="small-label">WHAT I WOULD IMPROVE NEXT</span>
              <h3>
                Test the confidence, <em>not just the clicks.</em>
              </h3>
            </div>
            <ol>
              <li>
                Observe more users without prompting them to try the assistant.
              </li>
              <li>
                Explore stronger entry points and measure whether people
                discover them.
              </li>
              <li>
                Investigate trust in AI explanations and the handoff to official
                warranty terms.
              </li>
            </ol>
          </div>
          <p className="source-note">
            These are proposed next steps, not completed research.
          </p>
          <details className="sources">
            <summary>
              Project credits & source notes <Plus size={18} />
            </summary>
            <div>
              <p>
                <strong>Individual case study:</strong> Oswin / Chen Jui Tai.
                Personal contribution is described in the author’s brief.
              </p>
              <p>
                <strong>Team ZZZ WIN:</strong> Choong Zixuan, Zhu Di (Jesse),
                Seaw Zhi Yi, Chen Jui Tai (Oswin).
              </p>
              <p>
                <strong>Assignment 1 — Information Gathering:</strong> pp. 17–19
                (survey sample and barriers), 24 (claim deterrents, 21
                respondents), 27–32 (interviews).{" "}
                <strong>Assignment 2 — Ideation & Prototyping:</strong> pp. 4–12
                (alternatives), 13–16 (early flows), 19–21 (assumptions and
                limitations).{" "}
                <strong>Assignment 3 — Refinement & Final Design:</strong> pp.
                8–12 (prototype screens), 14–19 (testing and revisions), 21–23
                (final journey).
              </p>
              <p>
                All product screenshots are extracted from the supplied project
                PDFs. Interactive dialogues are labelled illustrative. No live
                AI, merchant integration or production warranty service is
                implemented.
              </p>
            </div>
          </details>
        </div>
      </section>
    </>
  );
}
