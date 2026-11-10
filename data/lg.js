window.PP = window.PP || { lr: [], rc: [], lg: [], cards: [], types: {}, loaded: [] };
window.PP.lg.push(
{
 "id": "G1",
 "title": "The Recital",
 "kind": "Basic sequencing",
 "d": 2,
 "setup": "Seven students—Fern, Gil, Hana, Ivo, Jada, Kofi, and Lena—will each perform one solo at a recital. The solos are performed one at a time, in positions 1 through 7. The order must conform to the following conditions:",
 "rules": [
  "Gil performs before Ivo.",
  "Kofi performs immediately after Hana.",
  "Fern performs either first or seventh.",
  "Lena performs before Jada, and Jada performs before Gil."
 ],
 "tip": "Build one chain: Lena – Jada – Gil – Ivo. Treat Hana–Kofi as a block. Fern sits on an end, so split into two scenarios: Fern first or Fern seventh.",
 "qs": [
  {
   "id": "G1-1",
   "t": "lg-accept",
   "d": 1,
   "q": "Which one of the following could be the order in which the students perform, from first to seventh?",
   "c": [
    "Lena, Jada, Fern, Gil, Hana, Kofi, Ivo",
    "Fern, Lena, Gil, Jada, Hana, Kofi, Ivo",
    "Fern, Lena, Jada, Hana, Kofi, Gil, Ivo",
    "Hana, Lena, Kofi, Jada, Gil, Ivo, Fern",
    "Fern, Lena, Jada, Ivo, Gil, Hana, Kofi"
   ],
   "a": 2,
   "x": "Run each rule against the choices. Rule 3 knocks out Fern third; rule 4 knocks out Gil before Jada; rule 2 knocks out the one where Kofi doesn't directly follow Hana; rule 1 knocks out Ivo before Gil.",
   "w": [
    "Breaks rule 3: Fern performs either first or seventh.",
    "Breaks rule 4: Lena performs before Jada, and Jada performs before Gil.",
    "Breaks no rule — a complete, valid arrangement.",
    "Breaks rule 2: Kofi performs immediately after Hana.",
    "Breaks rule 1: Gil performs before Ivo."
   ]
  },
  {
   "id": "G1-2",
   "t": "lg-must",
   "d": 2,
   "q": "Which one of the following must be true?",
   "c": [
    "Lena performs first or second.",
    "Ivo performs sixth or seventh.",
    "Hana performs before Jada.",
    "Gil performs after Lena.",
    "Fern performs first."
   ],
   "a": 3,
   "x": "Rule 4 gives the chain Lena → Jada → Gil, so Gil always performs after Lena. Every other answer has a counterexample.",
   "w": [
    "Not necessarily. Counterexample: Fern · Hana · Kofi · Lena · Jada · Gil · Ivo",
    "Not necessarily. Counterexample: Fern · Lena · Jada · Gil · Ivo · Hana · Kofi",
    "Not necessarily. Counterexample: Fern · Lena · Jada · Gil · Hana · Kofi · Ivo",
    "True in every valid arrangement.",
    "Not necessarily. Counterexample: Hana · Kofi · Lena · Jada · Gil · Ivo · Fern"
   ]
  },
  {
   "id": "G1-3",
   "t": "lg-cond",
   "d": 2,
   "q": "If Hana performs first, which one of the following must be true?",
   "c": [
    "Lena performs fourth.",
    "Jada performs fourth.",
    "Gil performs fourth.",
    "Ivo performs fifth.",
    "Fern performs first."
   ],
   "a": 1,
   "x": "Hana first puts Kofi second, which pushes Fern to seventh. The chain Lena–Jada–Gil–Ivo must fill 3 through 6 in order: Lena 3, Jada 4, Gil 5, Ivo 6.",
   "w": [
    "Not necessarily. Counterexample: Hana · Kofi · Lena · Jada · Gil · Ivo · Fern",
    "True in every valid arrangement.",
    "Not necessarily. Counterexample: Hana · Kofi · Lena · Jada · Gil · Ivo · Fern",
    "Not necessarily. Counterexample: Hana · Kofi · Lena · Jada · Gil · Ivo · Fern",
    "Not necessarily. Counterexample: Hana · Kofi · Lena · Jada · Gil · Ivo · Fern"
   ]
  },
  {
   "id": "G1-4",
   "t": "lg-false",
   "d": 3,
   "q": "Which one of the following CANNOT be true?",
   "c": [
    "Gil performs third.",
    "Kofi performs seventh.",
    "Hana performs second.",
    "Lena performs fourth.",
    "Jada performs sixth."
   ],
   "a": 4,
   "x": "Jada needs both Gil and Ivo after her. Even with Fern first, the latest Jada can go is fifth.",
   "w": [
    "This can happen: Lena · Jada · Gil · Hana · Kofi · Ivo · Fern",
    "This can happen: Fern · Lena · Jada · Gil · Ivo · Hana · Kofi",
    "This can happen: Fern · Hana · Kofi · Lena · Jada · Gil · Ivo",
    "This can happen: Fern · Hana · Kofi · Lena · Jada · Gil · Ivo",
    "No valid arrangement allows this."
   ]
  },
  {
   "id": "G1-5",
   "t": "lg-count",
   "d": 3,
   "q": "How many of the students could perform fourth?",
   "c": [
    "two",
    "three",
    "four",
    "five",
    "six"
   ],
   "a": 4,
   "x": "Walk through both scenarios (Fern first, Fern seventh) and slide the Hana–Kofi block through the chain. Every student except Fern turns up fourth somewhere — six in all.",
   "w": [
    "The answer is six, not two.",
    "The answer is six, not three.",
    "The answer is six, not four.",
    "The answer is six, not five.",
    "Correct — the answer is six."
   ]
  },
  {
   "id": "G1-6",
   "t": "lg-cond",
   "d": 4,
   "q": "If Ivo performs fifth, which one of the following could be true?",
   "c": [
    "Hana performs sixth.",
    "Gil performs third.",
    "Fern performs seventh.",
    "Lena performs first.",
    "Kofi performs sixth."
   ],
   "a": 0,
   "x": "With Ivo fifth and Fern seventh, there's no room for the Hana–Kofi block. So Fern is first: Fern, Lena, Jada, Gil, Ivo, then Hana and Kofi in six and seven.",
   "w": [
    "Possible. For example: Fern · Lena · Jada · Gil · Ivo · Hana · Kofi",
    "No valid arrangement allows this.",
    "No valid arrangement allows this.",
    "No valid arrangement allows this.",
    "No valid arrangement allows this."
   ]
  }
 ]
},
{
 "id": "G2",
 "title": "The Committee",
 "kind": "In/out grouping",
 "d": 3,
 "setup": "A committee of exactly five will be selected from eight candidates—Patel, Quan, Ruiz, Sato, Tran, Umar, Vance, and Wong. The selection must conform to the following conditions:",
 "rules": [
  "If Patel is selected, Quan is not selected.",
  "If Ruiz is selected, Sato is selected.",
  "If Sato is selected, Umar is not selected.",
  "Tran or Umar, or both, are selected.",
  "If Vance is not selected, Wong is selected."
 ],
 "tip": "Count first. Patel and Quan can't both go, and Sato and Umar can't both go — so at most six candidates are ever available, and five must be chosen. Only one more can be dropped.",
 "qs": [
  {
   "id": "G2-1",
   "t": "lg-accept",
   "d": 2,
   "q": "Which one of the following could be the five candidates selected?",
   "c": [
    "Patel, Quan, Sato, Tran, Wong",
    "Quan, Ruiz, Tran, Umar, Vance",
    "Quan, Sato, Tran, Umar, Wong",
    "Patel, Ruiz, Sato, Tran, Vance",
    "Patel, Ruiz, Sato, Vance, Wong"
   ],
   "a": 3,
   "x": "Rule by rule: Patel with Quan breaks rule 1; Ruiz without Sato breaks rule 2; Sato with Umar breaks rule 3; neither Tran nor Umar breaks rule 4.",
   "w": [
    "Breaks rule 1: If Patel is selected, Quan is not selected.",
    "Breaks rule 2: If Ruiz is selected, Sato is selected.",
    "Breaks rule 3: If Sato is selected, Umar is not selected.",
    "Breaks no rule — a complete, valid arrangement.",
    "Breaks rule 4: Tran or Umar, or both, are selected."
   ]
  },
  {
   "id": "G2-2",
   "t": "lg-must",
   "d": 4,
   "q": "Which one of the following must be true?",
   "c": [
    "Tran is selected.",
    "Vance is selected.",
    "Ruiz is selected.",
    "Sato is selected.",
    "Patel is selected."
   ],
   "a": 0,
   "x": "Suppose Tran is out. Rule 4 forces Umar in, rule 3 forces Sato out, rule 2 forces Ruiz out. Now you can pick at most one of Patel and Quan, plus Umar, Vance, and Wong — only four. So Tran must be selected.",
   "w": [
    "True in every valid arrangement.",
    "Not necessarily. Counterexample: Selected: Patel, Ruiz, Sato, Tran, Wong",
    "Not necessarily. Counterexample: Selected: Patel, Sato, Tran, Vance, Wong",
    "Not necessarily. Counterexample: Selected: Patel, Tran, Umar, Vance, Wong",
    "Not necessarily. Counterexample: Selected: Quan, Ruiz, Sato, Tran, Vance"
   ]
  },
  {
   "id": "G2-3",
   "t": "lg-cond",
   "d": 3,
   "q": "If Umar is selected, which one of the following must be true?",
   "c": [
    "Patel is selected.",
    "Ruiz is selected.",
    "Vance and Wong are both selected.",
    "Quan is not selected.",
    "Sato is selected."
   ],
   "a": 2,
   "x": "Umar in → Sato out → Ruiz out. To reach five you need one of Patel and Quan plus Umar, Tran, Vance, and Wong — so Vance and Wong are both in.",
   "w": [
    "Not necessarily. Counterexample: Selected: Quan, Tran, Umar, Vance, Wong",
    "Not necessarily. Counterexample: Selected: Patel, Tran, Umar, Vance, Wong",
    "True in every valid arrangement.",
    "Not necessarily. Counterexample: Selected: Quan, Tran, Umar, Vance, Wong",
    "Not necessarily. Counterexample: Selected: Patel, Tran, Umar, Vance, Wong"
   ]
  },
  {
   "id": "G2-4",
   "t": "lg-false",
   "d": 4,
   "q": "Which one of the following pairs of candidates CANNOT both be left off the committee?",
   "c": [
    "Patel and Quan",
    "Ruiz and Sato",
    "Ruiz and Umar",
    "Quan and Vance",
    "Vance and Wong"
   ],
   "a": 4,
   "x": "From the counting deduction, only one of the six available candidates can go unused. Dropping both Vance and Wong leaves too few people to fill five seats.",
   "w": [
    "This can happen: Selected: Ruiz, Sato, Tran, Vance, Wong",
    "This can happen: Selected: Patel, Tran, Umar, Vance, Wong",
    "This can happen: Selected: Patel, Sato, Tran, Vance, Wong",
    "This can happen: Selected: Patel, Ruiz, Sato, Tran, Wong",
    "No valid arrangement allows this."
   ]
  },
  {
   "id": "G2-5",
   "t": "lg-count",
   "d": 4,
   "q": "How many of the eight candidates could be left off the committee?",
   "c": [
    "four",
    "five",
    "six",
    "seven",
    "eight"
   ],
   "a": 3,
   "x": "Only Tran is required in every selection; each of the other seven sits out of at least one valid committee.",
   "w": [
    "The answer is seven, not four.",
    "The answer is seven, not five.",
    "The answer is seven, not six.",
    "Correct — the answer is seven.",
    "The answer is seven, not eight."
   ]
  },
  {
   "id": "G2-6",
   "t": "lg-sub",
   "d": 5,
   "q": "Which one of the following, if substituted for the condition that if Vance is not selected, Wong is selected, would have the same effect in determining the selection?",
   "c": [
    "If Vance is selected, Wong is not selected.",
    "Tran is selected.",
    "Ruiz is selected.",
    "At least one of Patel and Quan is selected.",
    "Vance is selected."
   ],
   "a": 1,
   "x": "Here's the twist: the Vance/Wong rule is redundant. The numbers already prevent both from sitting out. So a replacement that is itself already implied changes nothing — and Tran's selection is already forced by the other rules.",
   "w": [
    "Changes the outcomes — it would rule out Selected: Patel, Sato, Tran, Vance, Wong",
    "Produces exactly the same set of outcomes as the original rule.",
    "Changes the outcomes — it would rule out Selected: Patel, Sato, Tran, Vance, Wong",
    "Changes the outcomes — it would rule out Selected: Ruiz, Sato, Tran, Vance, Wong",
    "Changes the outcomes — it would rule out Selected: Patel, Ruiz, Sato, Tran, Wong"
   ]
  }
 ]
},
{
 "id": "G3",
 "title": "Volunteer Shifts",
 "kind": "Distribution",
 "d": 3,
 "setup": "Six volunteers—Ana, Ben, Cho, Dev, Eli, and Fay—will each be assigned to exactly one of three shifts: morning, afternoon, or evening. Exactly two volunteers are assigned to each shift. The assignment must conform to the following conditions:",
 "rules": [
  "Ana and Ben are not assigned to the same shift.",
  "Cho is assigned to the morning shift.",
  "If Dev is assigned to the afternoon shift, Eli is assigned to the evening shift.",
  "Fay is assigned to a later shift than Ben."
 ],
 "tip": "Three columns, two slots each. Cho is fixed in the morning. Rule 4 means Ben is never in the evening and Fay is never in the morning.",
 "qs": [
  {
   "id": "G3-1",
   "t": "lg-accept",
   "d": 1,
   "q": "Which one of the following could be an accurate assignment of volunteers to shifts?",
   "c": [
    "Morning: Cho, Ana; afternoon: Ben, Fay; evening: Dev, Eli",
    "Morning: Cho, Dev; afternoon: Ana, Ben; evening: Eli, Fay",
    "Morning: Cho, Ben; afternoon: Ana, Fay; evening: Dev, Eli",
    "Morning: Ana, Eli; afternoon: Cho, Ben; evening: Dev, Fay",
    "Morning: Cho, Ben; afternoon: Dev, Eli; evening: Ana, Fay"
   ],
   "a": 2,
   "x": "Fay sharing Ben's shift breaks rule 4; Ana with Ben breaks rule 1; Cho outside the morning breaks rule 2; Dev in the afternoon without Eli in the evening breaks rule 3.",
   "w": [
    "Breaks rule 4: Fay is assigned to a later shift than Ben.",
    "Breaks rule 1: Ana and Ben are not assigned to the same shift.",
    "Breaks no rule — a complete, valid arrangement.",
    "Breaks rule 2: Cho is assigned to the morning shift.",
    "Breaks rule 3: If Dev is assigned to the afternoon shift, Eli is assigned to the evening shift."
   ]
  },
  {
   "id": "G3-2",
   "t": "lg-must",
   "d": 2,
   "q": "Which one of the following must be true?",
   "c": [
    "Fay is assigned to the evening shift.",
    "Ben is not assigned to the evening shift.",
    "Ana is assigned to the afternoon shift.",
    "Dev is assigned to the evening shift.",
    "Eli and Fay are assigned to the same shift."
   ],
   "a": 1,
   "x": "Fay must be on a later shift than Ben, so Ben can never take the last shift.",
   "w": [
    "Not necessarily. Counterexample: Morning: Ben, Cho · Afternoon: Ana, Fay · Evening: Dev, Eli",
    "True in every valid arrangement.",
    "Not necessarily. Counterexample: Morning: Ana, Cho · Afternoon: Ben, Dev · Evening: Eli, Fay",
    "Not necessarily. Counterexample: Morning: Ana, Cho · Afternoon: Ben, Dev · Evening: Eli, Fay",
    "Not necessarily. Counterexample: Morning: Ana, Cho · Afternoon: Ben, Eli · Evening: Dev, Fay"
   ]
  },
  {
   "id": "G3-3",
   "t": "lg-cond",
   "d": 3,
   "q": "If Ana is assigned to the morning shift, which one of the following must be true?",
   "c": [
    "Dev is assigned to the afternoon shift.",
    "Eli is assigned to the evening shift.",
    "Fay is assigned to the afternoon shift.",
    "Ben is assigned to the afternoon shift.",
    "Dev and Fay are assigned to the same shift."
   ],
   "a": 3,
   "x": "Ana joins Cho, so the morning is full. Ben can't be in the evening, so Ben takes the afternoon — which pushes Fay to the evening.",
   "w": [
    "Not necessarily. Counterexample: Morning: Ana, Cho · Afternoon: Ben, Eli · Evening: Dev, Fay",
    "Not necessarily. Counterexample: Morning: Ana, Cho · Afternoon: Ben, Eli · Evening: Dev, Fay",
    "Not necessarily. Counterexample: Morning: Ana, Cho · Afternoon: Ben, Dev · Evening: Eli, Fay",
    "True in every valid arrangement.",
    "Not necessarily. Counterexample: Morning: Ana, Cho · Afternoon: Ben, Dev · Evening: Eli, Fay"
   ]
  },
  {
   "id": "G3-4",
   "t": "lg-cond",
   "d": 4,
   "q": "If Dev and Fay are assigned to the same shift, which one of the following could be true?",
   "c": [
    "Ana is assigned to the evening shift.",
    "Eli is assigned to the morning shift.",
    "Ben is assigned to the evening shift.",
    "Dev is assigned to the morning shift.",
    "Fay is assigned to the morning shift."
   ],
   "a": 0,
   "x": "If Dev and Fay share the afternoon, Eli goes to the evening (rule 3) and Ben to the morning (rule 4), which leaves Ana in the evening. That works.",
   "w": [
    "Possible. For example: Morning: Ben, Cho · Afternoon: Dev, Fay · Evening: Ana, Eli",
    "No valid arrangement allows this.",
    "No valid arrangement allows this.",
    "No valid arrangement allows this.",
    "No valid arrangement allows this."
   ]
  },
  {
   "id": "G3-5",
   "t": "lg-false",
   "d": 3,
   "q": "Which one of the following CANNOT be true?",
   "c": [
    "Ana and Dev are both assigned to the evening shift.",
    "Ben and Eli are both assigned to the afternoon shift.",
    "Fay is assigned to the afternoon shift.",
    "Eli is assigned to the evening shift.",
    "Dev and Eli are both assigned to the afternoon shift."
   ],
   "a": 4,
   "x": "Rule 3: if Dev is in the afternoon, Eli must be in the evening. They can't share the afternoon.",
   "w": [
    "This can happen: Morning: Ben, Cho · Afternoon: Eli, Fay · Evening: Ana, Dev",
    "This can happen: Morning: Ana, Cho · Afternoon: Ben, Eli · Evening: Dev, Fay",
    "This can happen: Morning: Ben, Cho · Afternoon: Ana, Fay · Evening: Dev, Eli",
    "This can happen: Morning: Ana, Cho · Afternoon: Ben, Dev · Evening: Eli, Fay",
    "No valid arrangement allows this."
   ]
  },
  {
   "id": "G3-6",
   "t": "lg-count",
   "d": 4,
   "q": "How many of the volunteers could be assigned to the morning shift?",
   "c": [
    "two",
    "three",
    "four",
    "five",
    "six"
   ],
   "a": 2,
   "x": "Cho always. Ben, Ana, and Dev can each join Cho. Fay can't (she must follow Ben). Eli can't either: with Eli in the morning, Ben takes the afternoon, Fay and Ana the evening, Dev the afternoon — and rule 3 then demands Eli in the evening. Four in all.",
   "w": [
    "The answer is four, not two.",
    "The answer is four, not three.",
    "Correct — the answer is four.",
    "The answer is four, not five.",
    "The answer is four, not six."
   ]
  }
 ]
},
{
 "id": "G4",
 "title": "Intern Presentations",
 "kind": "Hybrid: sequencing + attributes",
 "d": 4,
 "setup": "Five interns—Gita, Hal, Jun, Kai, and Lia—will each give one presentation, one per day, Monday through Friday. Each presentation is either in person or virtual. The schedule must conform to the following conditions:",
 "rules": [
  "Exactly two of the presentations are virtual.",
  "The Wednesday presentation is virtual.",
  "No two virtual presentations are given on consecutive days.",
  "Hal presents earlier in the week than Jun.",
  "Kai's presentation is in person.",
  "Gita presents on the day immediately before or immediately after Lia."
 ],
 "tip": "Virtual days: Wednesday plus exactly one more, and it can't touch Wednesday — so it's Monday or Friday. Tuesday and Thursday are always in person. Kai never takes a virtual day.",
 "qs": [
  {
   "id": "G4-1",
   "t": "lg-accept",
   "d": 2,
   "q": "Which one of the following could be the order in which the interns present, from Monday through Friday?",
   "c": [
    "Hal, Gita, Lia, Jun, Kai",
    "Jun, Hal, Gita, Lia, Kai",
    "Hal, Gita, Kai, Lia, Jun",
    "Gita, Hal, Lia, Kai, Jun",
    "Gita, Lia, Jun, Kai, Hal"
   ],
   "a": 0,
   "x": "Hal after Jun knocks out two answers; Kai on Wednesday breaks the in-person rule; Gita and Lia must be on neighboring days.",
   "w": [
    "Hal before Jun, Gita next to Lia, and Kai on Friday in person with Monday and Wednesday virtual. Everything checks out.",
    "Hal must present before Jun.",
    "Kai would present on Wednesday — but Wednesday is virtual and Kai presents in person.",
    "Gita (Monday) and Lia (Wednesday) aren't on neighboring days.",
    "Hal must present before Jun."
   ]
  },
  {
   "id": "G4-2",
   "t": "lg-must",
   "d": 3,
   "q": "Which one of the following must be true?",
   "c": [
    "Hal presents on Monday.",
    "The Thursday presentation is virtual.",
    "Gita presents on Tuesday.",
    "Jun's presentation is in person.",
    "Exactly one of the Monday and Friday presentations is virtual."
   ],
   "a": 4,
   "x": "Wednesday is virtual, and the second virtual day can't be Tuesday or Thursday. So exactly one of Monday and Friday is virtual.",
   "w": [
    "Not necessarily. Counterexample: Mon Gita (virtual) · Tue Lia · Wed Hal (virtual) · Thu Jun · Fri Kai",
    "Not necessarily. Counterexample: Mon Gita (virtual) · Tue Lia · Wed Hal (virtual) · Thu Jun · Fri Kai",
    "Not necessarily. Counterexample: Mon Gita (virtual) · Tue Lia · Wed Hal (virtual) · Thu Jun · Fri Kai",
    "Not necessarily. Counterexample: Mon Gita · Tue Lia · Wed Hal (virtual) · Thu Kai · Fri Jun (virtual)",
    "True in every valid arrangement."
   ]
  },
  {
   "id": "G4-3",
   "t": "lg-cond",
   "d": 3,
   "q": "If Kai presents on Monday, which one of the following must be true?",
   "c": [
    "Hal presents on Tuesday.",
    "The Friday presentation is virtual.",
    "Jun presents on Friday.",
    "Gita presents on Wednesday.",
    "Lia's presentation is virtual."
   ],
   "a": 1,
   "x": "Kai on Monday must be in person, so the second virtual day has to be Friday.",
   "w": [
    "Not necessarily. Counterexample: Mon Kai · Tue Gita · Wed Lia (virtual) · Thu Hal · Fri Jun (virtual)",
    "True in every valid arrangement.",
    "Not necessarily. Counterexample: Mon Kai · Tue Hal · Wed Jun (virtual) · Thu Gita · Fri Lia (virtual)",
    "Not necessarily. Counterexample: Mon Kai · Tue Gita · Wed Lia (virtual) · Thu Hal · Fri Jun (virtual)",
    "Not necessarily. Counterexample: Mon Kai · Tue Hal · Wed Gita (virtual) · Thu Lia · Fri Jun (virtual)"
   ]
  },
  {
   "id": "G4-4",
   "t": "lg-could",
   "d": 4,
   "q": "Which one of the following could be true?",
   "c": [
    "Kai presents on Wednesday.",
    "Both the Monday and the Friday presentations are virtual.",
    "Hal presents on Friday.",
    "Jun presents on Tuesday.",
    "Gita's and Lia's presentations are both virtual."
   ],
   "a": 3,
   "x": "Jun on Tuesday forces Hal to Monday. Gita and Lia take Wednesday and Thursday, and Kai takes Friday in person, with Monday virtual. It works.",
   "w": [
    "No valid arrangement allows this.",
    "No valid arrangement allows this.",
    "No valid arrangement allows this.",
    "Possible. For example: Mon Hal (virtual) · Tue Jun · Wed Gita (virtual) · Thu Lia · Fri Kai",
    "No valid arrangement allows this."
   ]
  },
  {
   "id": "G4-5",
   "t": "lg-false",
   "d": 4,
   "q": "Which one of the following CANNOT be true?",
   "c": [
    "Hal's presentation is virtual.",
    "Lia presents on Wednesday.",
    "Kai presents on Friday and the Monday presentation is in person.",
    "Jun presents on Wednesday.",
    "Gita presents on Thursday."
   ],
   "a": 2,
   "x": "Kai on Friday must be in person, so Friday isn't virtual — which forces Monday to be the second virtual day.",
   "w": [
    "This can happen: Mon Gita (virtual) · Tue Lia · Wed Hal (virtual) · Thu Jun · Fri Kai",
    "This can happen: Mon Hal (virtual) · Tue Gita · Wed Lia (virtual) · Thu Jun · Fri Kai",
    "No valid arrangement allows this.",
    "This can happen: Mon Hal (virtual) · Tue Kai · Wed Jun (virtual) · Thu Gita · Fri Lia",
    "This can happen: Mon Hal (virtual) · Tue Jun · Wed Lia (virtual) · Thu Gita · Fri Kai"
   ]
  },
  {
   "id": "G4-6",
   "t": "lg-count",
   "d": 3,
   "q": "For how many of the interns is it possible that his or her presentation is virtual?",
   "c": [
    "one",
    "two",
    "three",
    "four",
    "five"
   ],
   "a": 3,
   "x": "Everyone except Kai can land on a virtual day: Hal (Monday or Wednesday), Jun (Wednesday or Friday), and Gita or Lia (either can take Wednesday). Four interns.",
   "w": [
    "The answer is four, not one.",
    "The answer is four, not two.",
    "The answer is four, not three.",
    "Correct — the answer is four.",
    "The answer is four, not five."
   ]
  }
 ]
},
{
 "id": "G5",
 "title": "Food Trucks",
 "kind": "Matching",
 "d": 4,
 "setup": "Three food trucks—Xochi, Yuzu, and Zest—each serve at least one of four cuisines: Greek, Korean, Mexican, and Thai. The trucks' menus must conform to the following conditions:",
 "rules": [
  "Each cuisine is served by at least one of the trucks.",
  "Xochi serves more of the cuisines than Yuzu does.",
  "No truck serves both Korean and Thai.",
  "Zest serves Mexican.",
  "Any truck that serves Greek also serves Mexican.",
  "Yuzu and Zest do not serve any cuisine in common."
 ],
 "tip": "List the legal menus first: Korean and Thai never pair, and Greek always brings Mexican. Then notice Yuzu shares nothing with Zest, which serves Mexican — so Yuzu has no Mexican, therefore no Greek. Yuzu serves exactly one cuisine: Korean or Thai.",
 "qs": [
  {
   "id": "G5-1",
   "t": "lg-accept",
   "d": 2,
   "q": "Which one of the following could be a complete and accurate list of the cuisines each truck serves?",
   "c": [
    "Xochi: Korean, Mexican; Yuzu: Thai; Zest: Mexican",
    "Xochi: Mexican; Yuzu: Korean; Zest: Greek, Mexican, Thai",
    "Xochi: Greek, Korean; Yuzu: Thai; Zest: Mexican",
    "Xochi: Greek, Mexican; Yuzu: Korean; Zest: Mexican, Thai",
    "Xochi: Greek, Korean, Mexican; Yuzu: Thai; Zest: Mexican, Thai"
   ],
   "a": 3,
   "x": "No Greek anywhere breaks rule 1; Xochi tied with Yuzu breaks rule 2; Greek without Mexican breaks rule 5; Yuzu and Zest sharing Thai breaks rule 6.",
   "w": [
    "Breaks rule 1: Each cuisine is served by at least one of the trucks.",
    "Breaks rule 2: Xochi serves more of the cuisines than Yuzu does.",
    "Breaks rule 5: Any truck that serves Greek also serves Mexican.",
    "Breaks no rule — a complete, valid arrangement.",
    "Breaks rule 6: Yuzu and Zest do not serve any cuisine in common."
   ]
  },
  {
   "id": "G5-2",
   "t": "lg-must",
   "d": 4,
   "q": "Which one of the following must be true?",
   "c": [
    "Yuzu serves Korean.",
    "Xochi serves Mexican.",
    "Zest serves exactly two of the cuisines.",
    "Xochi serves Greek.",
    "Zest serves Greek."
   ],
   "a": 1,
   "x": "Yuzu serves just one cuisine, so Xochi needs at least two. Every legal menu with two or more cuisines includes Mexican, because Korean and Thai can't pair and Greek needs Mexican.",
   "w": [
    "Not necessarily. Counterexample: Xochi: Greek, Mexican · Yuzu: Thai · Zest: Korean, Mexican",
    "True in every valid arrangement.",
    "Not necessarily. Counterexample: Xochi: Greek, Mexican · Yuzu: Korean · Zest: Greek, Mexican, Thai",
    "Not necessarily. Counterexample: Xochi: Korean, Mexican · Yuzu: Korean · Zest: Greek, Mexican, Thai",
    "Not necessarily. Counterexample: Xochi: Greek, Mexican · Yuzu: Korean · Zest: Mexican, Thai"
   ]
  },
  {
   "id": "G5-3",
   "t": "lg-cond",
   "d": 4,
   "q": "If Xochi serves exactly two of the cuisines, which one of the following could be true?",
   "c": [
    "Zest serves exactly one cuisine.",
    "Xochi serves Greek and Korean.",
    "Zest serves Greek and Thai.",
    "Yuzu serves Mexican.",
    "No truck serves Greek."
   ],
   "a": 2,
   "x": "With two cuisines, Xochi serves Mexican plus one other. Xochi and Yuzu then cover only two of Greek, Korean, and Thai, so Zest must cover the third. Zest with Greek, Mexican, and Thai — and Yuzu on Korean — works.",
   "w": [
    "No valid arrangement allows this.",
    "No valid arrangement allows this.",
    "Possible. For example: Xochi: Greek, Mexican · Yuzu: Korean · Zest: Greek, Mexican, Thai",
    "No valid arrangement allows this.",
    "No valid arrangement allows this."
   ]
  },
  {
   "id": "G5-4",
   "t": "lg-false",
   "d": 3,
   "q": "Which one of the following CANNOT be true?",
   "c": [
    "Exactly one of the trucks serves Mexican.",
    "Xochi and Zest both serve Greek.",
    "Yuzu serves Thai and Zest serves Korean.",
    "Xochi serves three of the cuisines.",
    "Zest serves only Mexican."
   ],
   "a": 0,
   "x": "Zest serves Mexican, and Xochi must too (any menu of two or more includes Mexican). So at least two trucks serve Mexican.",
   "w": [
    "No valid arrangement allows this.",
    "This can happen: Xochi: Greek, Mexican · Yuzu: Korean · Zest: Greek, Mexican, Thai",
    "This can happen: Xochi: Greek, Mexican · Yuzu: Thai · Zest: Korean, Mexican",
    "This can happen: Xochi: Greek, Korean, Mexican · Yuzu: Korean · Zest: Mexican, Thai",
    "This can happen: Xochi: Greek, Korean, Mexican · Yuzu: Thai · Zest: Mexican"
   ]
  },
  {
   "id": "G5-5",
   "t": "lg-count",
   "d": 4,
   "q": "What is the maximum total number of cuisines served, counting each cuisine once for every truck that serves it?",
   "c": [
    "five",
    "six",
    "seven",
    "eight",
    "nine"
   ],
   "a": 2,
   "x": "Yuzu is capped at one. Xochi and Zest can each serve three (Greek, Mexican, plus Korean or Thai), as long as Zest avoids Yuzu's cuisine. 3 + 1 + 3 = 7.",
   "w": [
    "The answer is seven, not five.",
    "The answer is seven, not six.",
    "Correct — the answer is seven.",
    "The answer is seven, not eight.",
    "The answer is seven, not nine."
   ]
  },
  {
   "id": "G5-6",
   "t": "lg-cond",
   "d": 3,
   "q": "If Zest serves Korean, which one of the following must be true?",
   "c": [
    "Xochi serves Greek.",
    "Zest serves Greek.",
    "Xochi serves Thai.",
    "Xochi serves exactly two of the cuisines.",
    "Yuzu serves Thai."
   ],
   "a": 4,
   "x": "Yuzu serves exactly one of Korean or Thai and can't share with Zest. Zest has Korean, so Yuzu must be Thai.",
   "w": [
    "Not necessarily. Counterexample: Xochi: Korean, Mexican · Yuzu: Thai · Zest: Greek, Korean, Mexican",
    "Not necessarily. Counterexample: Xochi: Greek, Mexican · Yuzu: Thai · Zest: Korean, Mexican",
    "Not necessarily. Counterexample: Xochi: Greek, Mexican · Yuzu: Thai · Zest: Korean, Mexican",
    "Not necessarily. Counterexample: Xochi: Greek, Korean, Mexican · Yuzu: Thai · Zest: Korean, Mexican",
    "True in every valid arrangement."
   ]
  }
 ]
},
{
 "id": "G6",
 "title": "The Race",
 "kind": "Relative ordering",
 "d": 5,
 "setup": "Eight runners—Mara, Nils, Odette, Pia, Rhys, Soren, Tomas, and Vera—finish a race. There are no ties. The order of finish conforms to the following conditions:",
 "rules": [
  "Rhys finishes before Mara.",
  "Mara finishes before both Nils and Odette.",
  "Pia finishes after Nils.",
  "Soren finishes after Odette but before Pia.",
  "Tomas finishes either before Rhys or after Pia.",
  "Vera finishes before Soren."
 ],
 "tip": "Draw a tree: Rhys → Mara → (Nils, Odette); Nils → Pia; Odette → Soren → Pia; Vera → Soren. Tomas floats: either at the very front (before Rhys) or after Pia.",
 "qs": [
  {
   "id": "G6-1",
   "t": "lg-accept",
   "d": 2,
   "q": "Which one of the following could be the order in which the runners finish, from first to last?",
   "c": [
    "Tomas, Rhys, Mara, Nils, Odette, Soren, Vera, Pia",
    "Rhys, Mara, Odette, Nils, Vera, Soren, Pia, Tomas",
    "Rhys, Tomas, Mara, Odette, Nils, Vera, Soren, Pia",
    "Vera, Rhys, Mara, Nils, Pia, Odette, Soren, Tomas",
    "Vera, Mara, Rhys, Odette, Nils, Soren, Pia, Tomas"
   ],
   "a": 1,
   "x": "Vera after Soren breaks rule 6; Tomas between Rhys and Pia breaks rule 5; Soren after Pia breaks rule 4; Mara before Rhys breaks rule 1.",
   "w": [
    "Breaks rule 6: Vera finishes before Soren.",
    "Breaks no rule — a complete, valid arrangement.",
    "Breaks rule 5: Tomas finishes either before Rhys or after Pia.",
    "Breaks rule 4: Soren finishes after Odette but before Pia.",
    "Breaks rule 1: Rhys finishes before Mara."
   ]
  },
  {
   "id": "G6-2",
   "t": "lg-must",
   "d": 3,
   "q": "Which one of the following must be true?",
   "c": [
    "Rhys finishes first.",
    "Vera finishes before Mara.",
    "Nils finishes before Odette.",
    "Tomas finishes last.",
    "Mara finishes before Soren."
   ],
   "a": 4,
   "x": "Mara before Odette (rule 2), and Odette before Soren (rule 4). So Mara finishes before Soren.",
   "w": [
    "Not necessarily. Counterexample: Tomas · Rhys · Mara · Nils · Odette · Vera · Soren · Pia",
    "Not necessarily. Counterexample: Rhys · Mara · Nils · Odette · Vera · Soren · Pia · Tomas",
    "Not necessarily. Counterexample: Rhys · Mara · Odette · Nils · Vera · Soren · Pia · Tomas",
    "Not necessarily. Counterexample: Tomas · Rhys · Mara · Nils · Odette · Vera · Soren · Pia",
    "True in every valid arrangement."
   ]
  },
  {
   "id": "G6-3",
   "t": "lg-count",
   "d": 4,
   "q": "What is the earliest position in which Pia could finish?",
   "c": [
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth"
   ],
   "a": 3,
   "x": "Pia needs Rhys, Mara, Nils, Odette, Soren, and Vera ahead of her — six runners. Seventh is the earliest.",
   "w": [
    "The answer is seven, not fourth.",
    "The answer is seven, not fifth.",
    "The answer is seven, not sixth.",
    "Correct — the answer is seventh.",
    "The answer is seven, not eighth."
   ]
  },
  {
   "id": "G6-4",
   "t": "lg-cond",
   "d": 4,
   "q": "If Tomas finishes first, which one of the following must be true?",
   "c": [
    "Vera finishes second.",
    "Nils finishes fifth.",
    "Pia finishes eighth.",
    "Odette finishes fourth.",
    "Soren finishes sixth."
   ],
   "a": 2,
   "x": "Tomas first means he's the one before Rhys — so no one is left to finish after Pia. Pia is last.",
   "w": [
    "Not necessarily. Counterexample: Tomas · Rhys · Mara · Nils · Odette · Vera · Soren · Pia",
    "Not necessarily. Counterexample: Tomas · Rhys · Mara · Nils · Odette · Vera · Soren · Pia",
    "True in every valid arrangement.",
    "Not necessarily. Counterexample: Tomas · Rhys · Mara · Nils · Odette · Vera · Soren · Pia",
    "Not necessarily. Counterexample: Tomas · Rhys · Mara · Nils · Odette · Vera · Soren · Pia"
   ]
  },
  {
   "id": "G6-5",
   "t": "lg-could",
   "d": 3,
   "q": "Which one of the following could be true?",
   "c": [
    "Odette finishes third.",
    "Vera finishes last.",
    "Nils finishes second.",
    "Soren finishes fourth.",
    "Tomas finishes fourth."
   ],
   "a": 0,
   "x": "Rhys, Mara, Odette, Nils, Vera, Soren, Pia, Tomas works — Odette third.",
   "w": [
    "Possible. For example: Rhys · Mara · Odette · Nils · Vera · Soren · Pia · Tomas",
    "No valid arrangement allows this.",
    "No valid arrangement allows this.",
    "No valid arrangement allows this.",
    "No valid arrangement allows this."
   ]
  },
  {
   "id": "G6-6",
   "t": "lg-count",
   "d": 5,
   "q": "How many of the runners could finish second?",
   "c": [
    "two",
    "three",
    "four",
    "five",
    "six"
   ],
   "a": 2,
   "x": "Second place allows only one runner ahead. Rhys (with Tomas or Vera first), Mara (Rhys first), Vera, and Tomas (Vera first) all qualify. Four.",
   "w": [
    "The answer is four, not two.",
    "The answer is four, not three.",
    "Correct — the answer is four.",
    "The answer is four, not five.",
    "The answer is four, not six."
   ]
  }
 ]
}
);
window.PP.loaded.push("lg");
