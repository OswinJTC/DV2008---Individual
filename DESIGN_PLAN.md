# Warranty, understood — implementation plan

## 1. Page structure
1. Editorial hero: Rethinking warranty management, two original prototype screens, role and focus.
2. Research: 62.8% do not track (43 survey respondents), 6 interviews; receipt, expiry and effort barriers.
3. Design challenge: retrieve, understand, act without a new habit.
4. Four directions: selectable concepts and their trade-offs, with Apple Wallet selected.
5. Wallet concept: merchant-issued pass and early user flow; explicit academic assumptions.
6. Individual focus: Oswin's assistant work, plus research/interviews and Standalone App/Wallet ideation.
7. Assistant: original screen alongside three selectable, clearly labelled illustrative walkthroughs.
8. Reasoning: interpretation, next action and occasional-use interaction decisions.
9. Testing: 4 participants, observed tasks; original icon before/after; team hierarchy/filter changes.
10. Connected experience: selectable purchase-to-claim stages with source screens.
11. Reflection, untested next steps, team credits and source notes.

## 2. Content hierarchy
Primary: individual interaction design contribution, decision rationale and discoverability iteration.
Secondary: research evidence and team direction establish why this work matters.
Tertiary: methodology, source page references, concept assumptions and credit accessible in concise notes/details.
All shared research and system design attributed to our team; personal contribution is from the user's brief. No invented impact metrics, participant quotations or claim guarantees. Test sample is four; assistant use was prompted; no post-change validation claimed.

## 3. Components
Header + anchor navigation; SectionLabel; original Screenshot/Phone; research stat; ConceptExplorer; selected-direction flow; Contribution band; AssistantDemo with button-driven scenario state; ReasoningRow; icon BeforeAfter; JourneyExplorer; SourceNotes; Footer. Semantic sections, keyboard-native buttons, visible focus, live demo description, reduced motion.

## 4. Visual system
Warm ivory #f7f4ec, dark espresso #30271f, muted olive #777760, tan #b49671, pale sand #e9e2d4. Editorial serif display paired with clean sans-serif body. Large typographic scale, generous margins, thin rules, asymmetrical layouts. Dark contribution section to mark personal ownership. Original product screenshots provide limited blue/cyan accents. Responsive grids, restrained entrance motion, no decorative dashboard cards.

## 5. Source imagery
- A3 p8: final warranties list (embedded image 559).
- A3 p9: original AI assistant conversation (81), warranty pass (82).
- A3 p10: claim form (88), claim progress (89).
- A3 p17: original assistant icon (125), revised chat icon (126), filter revision (127/128).
- A3 p18: coverage emphasis and proof-of-purchase button revisions (133/132).
- A2 pp13–16: early purchase-to-Wallet and claim wireframe flow; present as optional expand-to-view source figure.
Use embedded image extraction to avoid cutting screenshots at slide boundaries. Preserve originals, compress to WebP. Any scripted demo is explicitly illustrative and not a live AI or tested screen.

## Evidence
A1 pp17–19: n=43 survey, tracking and barriers. A1 p24: n=21 subgroup for claim deterrents. A1 pp27–32: n=6 interviews and interpretation barriers. A2 pp4–12: concept trade-offs. A2 pp19–21: merchant assumption and limitations. A3 pp9–12: assistant capability and team system. A3 pp14–19: n=4 usability tests, prompted assistant use, iteration. A3 pp21–23: final flow and information architecture.
Avoid A1 p21's internally inconsistent narrative count, and p35's broader statement about all interviewees; use the explicit p28 finding if needed.


## Revision: chapter-based reading and legibility

Seven navigable pages replace the long single-page structure: Overview, Research, Directions, My contribution, Testing, Final experience, Reflection. Header links, active chapter indication, mobile menu, breadcrumb, and previous/next links support either skimming or sequential reading. Hash routes avoid deployment rewrite dependencies and support shareable direct links.

Typography: local DM Sans replaces the thin serif and repeated italics. Reading text is 16–18px; evidence notes 14px; headings use restrained responsive sizes and balanced natural wrapping. Reduced section spacing, 35–65 character reading measures, stronger muted-text contrast, generous line height and larger interaction labels improve reading. Exact prototype screenshots remain original and can contain smaller source UI text.
