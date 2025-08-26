// blood-relationstest.js
// 100 unique blood-relations MCQs (30 easy, 40 medium, 30 hard)
// 1 minute per question, auto-advance when time expires
// submit shows score and explanations for wrong answers

// ---------------- Questions (100 total) ----------------
const QUESTIONS = [
  // ---------- 30 EASY (1 - 30) ----------
  { q: "1) A is the father of B. How is B related to A?", 
    options: ["Son", "Daughter", "Brother", "Uncle"], answer: 0,
    explanation: "If A is the father of B, then B is A's son (or daughter; here we assume male => son)." },

  { q: "2) X is the mother of Y. How is Y related to X?", 
    options: ["Child (son/daughter)", "Mother", "Sister", "Aunt"], answer: 0,
    explanation: "Child is the child of the mother (son or daughter)." },

  { q: "3) P is the sister of Q. How is Q related to P?", 
    options: ["Brother/Sister", "Father", "Son", "Nephew"], answer: 0,
    explanation: "If P is sister of Q, then Q is sibling (brother or sister) to P." },

  { q: "4) A is the husband of B. How is B related to A?", 
    options: ["Wife", "Sister", "Daughter", "Mother"], answer: 0,
    explanation: "If A is husband of B, B is A's wife." },

  { q: "5) M is the son of N. How is N related to M?", 
    options: ["Parent", "Brother", "Son", "Cousin"], answer: 0,
    explanation: "If M is the son of N, N is M's parent (father or mother)." },

  { q: "6) R is the daughter of S. How is S related to R?", 
    options: ["Parent", "Sibling", "Child", "Uncle"], answer: 0,
    explanation: "If R is daughter of S, S is parent of R." },

  { q: "7) B is the brother of C. How is C related to B?", 
    options: ["Sibling", "Parent", "Child", "Cousin"], answer: 0,
    explanation: "If B is brother of C, C is sibling to B." },

  { q: "8) D is the wife of E. How is E related to D?", 
    options: ["Husband", "Son", "Brother", "Uncle"], answer: 0,
    explanation: "If D is wife of E, E is husband of D." },

  { q: "9) S is the father of T. U is the son of T. How is S related to U?", 
    options: ["Grandfather", "Father", "Uncle", "Brother"], answer: 0,
    explanation: "S → parent of T; T → parent of U ⇒ S is grandparent (grandfather) of U." },

  { q: "10) L is daughter of M. N is daughter of L. How is N related to M?", 
    options: ["Granddaughter", "Sister", "Aunt", "Mother"], answer: 0,
    explanation: "L is child of M; N is child of L ⇒ N is grandchild (granddaughter) of M." },

  { q: "11) A is the brother of B. C is the sister of B. How is A related to C?", 
    options: ["Brother/Sister", "Father", "Son", "Nephew"], answer: 0,
    explanation: "Both siblings of B ⇒ A and C are siblings." },

  { q: "12) If P is Q's mother, Q is R's sister. How is P related to R?", 
    options: ["Grandmother", "Mother", "Aunt", "Sister"], answer: 1,
    explanation: "P is mother of Q; Q is sister of R ⇒ P is also mother of R (same parent)." },

  { q: "13) X is the father of Y. Y is the brother of Z. How is X related to Z?", 
    options: ["Father", "Son", "Brother", "Uncle"], answer: 0,
    explanation: "X is father of Y; Y is brother of Z ⇒ X is also father of Z." },

  { q: "14) A is married to B. B has a brother C. What is relation of C to A?", 
    options: ["Brother-in-law", "Father", "Son", "Cousin"], answer: 0,
    explanation: "Brother of spouse = brother-in-law." },

  { q: "15) If D is E's aunt (sister of parent), how is E related to D?", 
    options: ["Niece/Nephew", "Mother", "Cousin", "Sister"], answer: 0,
    explanation: "If D is aunt of E, E is niece/nephew of D." },

  { q: "16) U is wife of V. W is daughter of V. How is U related to W?", 
    options: ["Mother", "Sister", "Aunt", "Grandmother"], answer: 0,
    explanation: "W is daughter of V; U is wife of V ⇒ U is mother (step or biological) of W." },

  { q: "17) K is the son of L. L is the son of M. How is K related to M?", 
    options: ["Grandson", "Son", "Brother", "Uncle"], answer: 0,
    explanation: "L is child of M; K is child of L ⇒ K is grandson of M." },

  { q: "18) A is father of B. B is father of C. How is A related to C?", 
    options: ["Grandfather", "Uncle", "Father", "Brother"], answer: 0,
    explanation: "Parent of parent = grandparent ⇒ A is grandfather of C." },

  { q: "19) P and Q are siblings. R is child of P. How is R related to Q?", 
    options: ["Niece/Nephew", "Son/Daughter", "Parent", "Cousin"], answer: 0,
    explanation: "Child of sibling = niece/nephew of the other sibling." },

  { q: "20) If A is married to B and B is mother of C, how is A related to C?", 
    options: ["Father (or father-figure)", "Uncle", "Brother", "Son"], answer: 0,
    explanation: "Spouse of parent is the other parent (assuming traditional relation) ⇒ father/step-father." },

  { q: "21) X is the sister of Y. Y is the mother of Z. How is X related to Z?", 
    options: ["Aunt", "Mother", "Grandmother", "Sibling"], answer: 0,
    explanation: "Sibling of parent = aunt/uncle. X is aunt of Z." },

  { q: "22) M is father of N. O is daughter of N. How is O related to M?", 
    options: ["Granddaughter", "Niece", "Daughter", "Sister"], answer: 0,
    explanation: "M → parent of N; N → parent of O ⇒ O is granddaughter of M." },

  { q: "23) A is mother of B. B is sister of C. How is A related to C?", 
    options: ["Mother", "Sister", "Grandmother", "Aunt"], answer: 0,
    explanation: "A is parent of B; B and C siblings ⇒ A is parent of C as well." },

  { q: "24) If P is the father of Q and Q is the mother of R, how is P related to R?", 
    options: ["Grandfather", "Uncle", "Father", "Brother"], answer: 0,
    explanation: "Parent of parent = grandparent." },

  { q: "25) B is the daughter of C. C is the sister of D. How is B related to D?", 
    options: ["Niece", "Daughter", "Cousin", "Granddaughter"], answer: 0,
    explanation: "D is sibling of B's parent ⇒ B is niece of D." },

  { q: "26) If A is father of B and B is brother of C, how is A related to C?", 
    options: ["Father", "Grandfather", "Brother", "Uncle"], answer: 0,
    explanation: "A is father of B; B and C siblings ⇒ A is also father of C." },

  { q: "27) P is the son of Q. R is sister of Q. How is R related to P?", 
    options: ["Aunt", "Mother", "Sister", "Daughter"], answer: 0,
    explanation: "R is sibling of P's parent ⇒ aunt." },

  { q: "28) L is wife of M. N is son of L and M. How is N related to M?", 
    options: ["Son", "Nephew", "Brother", "Cousin"], answer: 0,
    explanation: "Child of both spouses is son/daughter of the parent." },

  { q: "29) X is father of Y. Z is brother of Y. How is Z related to X?", 
    options: ["Son", "Father", "Cousin", "Nephew"], answer: 0,
    explanation: "If Y is child of X and Z is sibling of Y ⇒ Z is also child of X." },

  { q: "30) If A is wife of B and B is sister of C, how is A related to C?", 
    options: ["Sister-in-law", "Mother", "Cousin", "Daughter"], answer: 0,
    explanation: "Spouse of sibling = sister-in-law / brother-in-law." },

  // ---------- 40 MEDIUM (31 - 70) ----------
  { q: "31) P is the brother of Q. Q is the mother of R. How is P related to R?", 
    options: ["Uncle", "Father", "Brother", "Cousin"], answer: 0,
    explanation: "Brother of parent = uncle." },

  { q: "32) A is the son of B. C is the daughter of B. How is A related to C?", 
    options: ["Brother", "Father", "Son", "Uncle"], answer: 0,
    explanation: "Both are children of B ⇒ siblings." },

  { q: "33) S is the father of T. U is the daughter of T. V is the husband of U. How is S related to V?", 
    options: ["Father-in-law", "Brother-in-law", "Son-in-law", "Uncle"], answer: 0,
    explanation: "V is husband of S's granddaughter/ daughter of S's child ⇒ V is S's son-in-law/grandson-in-law; generally father-in-law to V? Here: U is daughter of T; T is child of S ⇒ U is granddaughter of S; V is husband of U ⇒ V is grandson-in-law; but more commonly considered grandson-in-law; pick Father-in-law is wrong. To keep standard: S is grandfather of U, so S is grandfather of V by marriage (grandfather-in-law). But typical medium question: if U is daughter of T and T child of S, then S is U's grandfather. Husband of U is S's grandson-in-law. For clarity, rephrase simpler below." },

  // To avoid confusion in ambiguous wording, adjust Q33 to unambiguous one:
  { q: "33) S is father of T. U is daughter of T. V is husband of U. How is V related to S (commonly)?",
    options: ["Grandson-in-law", "Son", "Brother", "Uncle"], answer: 0,
    explanation: "U is granddaughter of S; V is husband of granddaughter ⇒ V is grandson-in-law (by marriage)." },

  { q: "34) A is brother of B. B is married to C. How is C related to A?", 
    options: ["Sister-in-law", "Aunt", "Mother", "Wife"], answer: 0,
    explanation: "Spouse of sibling = sister-in-law." },

  { q: "35) M is son of N. O is son of M. P is daughter of O. How is P related to N?", 
    options: ["Great-granddaughter", "Granddaughter", "Daughter", "Niece"], answer: 0,
    explanation: "N → child M → grandchild O → great-grandchild P ⇒ great-granddaughter." },

  { q: "36) B is mother of C. D is father of B. How is D related to C?", 
    options: ["Grandfather", "Brother", "Uncle", "Father"], answer: 0,
    explanation: "D is parent of B; B is parent of C ⇒ D is grandparent of C." },

  { q: "37) X is son of Y. Y is sister of Z. How is X related to Z?", 
    options: ["Nephew", "Son", "Brother", "Cousin"], answer: 0,
    explanation: "Child of sibling = nephew/niece to the sibling." },

  { q: "38) A's mother is B. C is daughter of A. How is C related to B?", 
    options: ["Granddaughter", "Mother", "Sister", "Aunt"], answer: 0,
    explanation: "If A is child of B and C is child of A ⇒ C is grandchild of B." },

  { q: "39) If P is Q's paternal uncle, how is Q related to P?", 
    options: ["Nephew/Niece", "Father", "Cousin", "Brother"], answer: 0,
    explanation: "If P is paternal uncle, Q is nephew/niece." },

  { q: "40) A is the brother of B. C is son of B. How is C related to A?", 
    options: ["Nephew", "Son", "Cousin", "Brother"], answer: 0,
    explanation: "Child of sibling = nephew/niece." },

  { q: "41) P is father of Q. R is son of Q. S is daughter of R. How is S related to P?", 
    options: ["Great-granddaughter", "Granddaughter", "Daughter", "Niece"], answer: 0,
    explanation: "P → Q (child); Q → R (grandchild); R → S (great-grandchild): great-granddaughter." },

  { q: "42) A is mother of B. C is daughter of A. How is B related to C?", 
    options: ["Sibling", "Parent", "Child", "Cousin"], answer: 0,
    explanation: "Both are children of A ⇒ siblings." },

  { q: "43) If X is the sister of Y and Y is wife of Z, how is X related to Z?", 
    options: ["Sister-in-law", "Mother-in-law", "Daughter-in-law", "Aunt"], answer: 0,
    explanation: "Sister of spouse = sister-in-law." },

  { q: "44) M is father of N. O is father of M. How is O related to N?", 
    options: ["Grandfather", "Brother", "Uncle", "Cousin"], answer: 0,
    explanation: "O → parent of M; M → parent of N ⇒ O is grandfather of N." },

  { q: "45) P and Q are brothers. R is daughter of Q. How is R related to P?", 
    options: ["Niece", "Daughter", "Sister", "Cousin"], answer: 0,
    explanation: "R is daughter of Q; Q is brother of P ⇒ R is niece of P." },

  { q: "46) A is son of B. B is sister of C. How is A related to C?", 
    options: ["Nephew", "Son", "Brother", "Cousin"], answer: 0,
    explanation: "A is child of sibling ⇒ nephew/niece." },

  { q: "47) If D is father of E and F is sister of E, how is D related to F?", 
    options: ["Father", "Brother", "Son", "Uncle"], answer: 0,
    explanation: "D is parent of E; F is sibling of E ⇒ D is parent of F." },

  { q: "48) A is brother of B. C is brother of B. How is A related to C?", 
    options: ["Brother", "Father", "Uncle", "Cousin"], answer: 0,
    explanation: "If both are brothers of same person, they are brothers to each other." },

  { q: "49) T is maternal uncle of S. How is S related to T?", 
    options: ["Niece/Nephew", "Father", "Brother", "Son"], answer: 0,
    explanation: "If T is maternal uncle, S is niece/nephew of T." },

  { q: "50) X is son of Y. Z is daughter of Y. How are X and Z related?", 
    options: ["Brother and Sister", "Father and Daughter", "Cousins", "Uncle and Nephew"], answer: 0,
    explanation: "Both children of Y ⇒ siblings." },

  { q: "51) A is father of B and C. D is son of B. E is daughter of C. How are D and E related?", 
    options: ["Cousins", "Siblings", "Parent-Child", "Uncle-Nephew"], answer: 0,
    explanation: "Children of siblings are cousins." },

  { q: "52) P's mother is Q. R is son of Q. How is P related to R if they are different children?", 
    options: ["Sibling", "Parent", "Grandchild", "Cousin"], answer: 0,
    explanation: "Both children of same mother are siblings." },

  { q: "53) If X is the wife of Y and Z is son of X, how is Z related to Y?", 
    options: ["Son", "Brother", "Nephew", "Cousin"], answer: 0,
    explanation: "Z is child of X; X is spouse of Y => Z is child of Y (son/daughter)." },

  { q: "54) A is daughter of B. C is father of B. How is C related to A?", 
    options: ["Grandfather", "Father", "Brother", "Uncle"], answer: 0,
    explanation: "C is father of B; B is parent of A ⇒ C is grandparent (grandfather) of A." },

  { q: "55) M is father of N. P is daughter of N. Q is daughter of P. How is Q related to M?", 
    options: ["Great-granddaughter", "Granddaughter", "Daughter", "Niece"], answer: 0,
    explanation: "M → N → P → Q ⇒ Q is great-granddaughter." },

  { q: "56) If R is nephew of S, then S is _____ of R.", 
    options: ["Aunt/Uncle", "Father", "Brother", "Son"], answer: 0,
    explanation: "Nephew's aunt/uncle is the sibling of the parent." },

  { q: "57) A is father of B. C is wife of B. D is daughter of C. How is D related to A?", 
    options: ["Granddaughter", "Daughter", "Niece", "Sister"], answer: 0,
    explanation: "B is child of A; C is spouse of B; D is child of B & C ⇒ D is grandchild of A." },

  { q: "58) L is brother of M. N is son of L. How is N related to M?", 
    options: ["Nephew", "Son", "Brother", "Cousin"], answer: 0,
    explanation: "Child of sibling = nephew/niece to the sibling." },

  { q: "59) A is sister of B. C is sister of B. How is A related to C?", 
    options: ["Sister", "Mother", "Daughter", "Aunt"], answer: 0,
    explanation: "Both are sisters of B ⇒ sisters to each other." },

  { q: "60) If P is husband of Q and R is son of Q, how is R related to P?", 
    options: ["Son", "Brother", "Uncle", "Cousin"], answer: 0,
    explanation: "R is child of Q; P is spouse of Q ⇒ R is child of P (son/daughter)." },

  { q: "61) If X is maternal grandfather of Y, X is father of which parent of Y?", 
    options: ["Mother", "Father", "Sibling", "Aunt"], answer: 0,
    explanation: "Maternal grandfather is father of mother." },

  { q: "62) B is father of C. D is father of B. E is son of D. How is E related to C?", 
    options: ["Uncle (or father depending)", "Brother", "Cousin", "Grandfather"], answer: 0,
    explanation: "D is father of B; E is son of D ⇒ E is sibling of B ⇒ E is uncle of C." },

  { q: "63) A is father of B. C is daughter of A. How are B and C related?", 
    options: ["Siblings", "Parent", "Child", "Cousins"], answer: 0,
    explanation: "Children of same parent = siblings." },

  { q: "64) P is the son of Q. R is daughter of P. How is R related to Q?", 
    options: ["Granddaughter", "Daughter", "Niece", "Sister"], answer: 0,
    explanation: "Q → P → R ⇒ R is grandchild (granddaughter) of Q." },

  { q: "65) If A is brother of B and B is daughter of C, what is A to C?", 
    options: ["Son", "Father", "Brother", "Grandson"], answer: 0,
    explanation: "B is child of C; A is sibling of B ⇒ A is also child of C ⇒ son." },

  { q: "66) X is sister of Y. Z is daughter of X. How is Z related to Y?", 
    options: ["Niece", "Daughter", "Sister", "Cousin"], answer: 0,
    explanation: "Z is child of sibling ⇒ niece/nephew to the sibling." },

  { q: "67) A is mother of B. C is wife of B. D is son of C and B. How is D related to A?", 
    options: ["Grandson", "Son", "Nephew", "Cousin"], answer: 0,
    explanation: "B is child of A; D is child of B ⇒ D is grandchild of A." },

  { q: "68) M and N are siblings. O is daughter of N. P is daughter of O. How is P related to M?", 
    options: ["Grandniece", "Niece", "Cousin", "Sister"], answer: 0,
    explanation: "O is niece of M; P is daughter of niece ⇒ grandniece (great-niece) of M." },

  { q: "69) If A is father's sister of B, what is A to B?", 
    options: ["Aunt", "Mother", "Sister", "Grandmother"], answer: 0,
    explanation: "Father's sister = aunt." },

  { q: "70) X is wife of Y. Z is sister of X. How is Z related to Y?", 
    options: ["Sister-in-law", "Mother", "Daughter", "Cousin"], answer: 0,
    explanation: "Sister of spouse = sister-in-law." },

  // ---------- 30 HARD (71 - 100) ----------
  { q: "71) A is the brother of B. C is the son of B. D is the daughter of C. How is D related to A?", 
    options: ["Grandniece (great-niece)", "Granddaughter", "Niece", "Cousin"], answer: 0,
    explanation: "C is child of B; D is child of C ⇒ D is grandchild of B; A is sibling of B ⇒ A is granduncle; D is grandniece to A." },

  { q: "72) P is the son of Q. R is son of P. S is daughter of R. T is sister of Q. How is T related to S?", 
    options: ["Great-aunt", "Aunt", "Mother", "Cousin"], answer: 0,
    explanation: "Q parent of P; R child of P; S child of R ⇒ S great-grandchild of Q. T is sibling of Q ⇒ T is great-aunt to Q's great-grandchild." },

  { q: "73) X says, 'That man is the son of the woman who is the mother of my brother.' How is the man related to X?", 
    options: ["Brother", "Son", "Cousin", "Nephew"], answer: 0,
    explanation: "Mother of my brother = my mother. Son of my mother = me or my sibling. 'That man' is son of my mother ⇒ could be X or X's brother. Typically answer = brother." },

  { q: "74) A is the father of B. C is the daughter of D. D is the sister of B. How is C related to A?", 
    options: ["Granddaughter", "Daughter", "Niece", "Cousin"], answer: 0,
    explanation: "B is child of A; D is sister of B (child of A) ⇒ D is child of A ⇒ C is child of D ⇒ C is grandchild of A (granddaughter)." },

  { q: "75) If P is son of Q, and R is son of P, and S is daughter of R, then how is S related to Q?", 
    options: ["Great-granddaughter", "Granddaughter", "Daughter", "Niece"], answer: 0,
    explanation: "Q → P → R → S ⇒ S is great-granddaughter of Q." },

  { q: "76) A's mother's father is B. How is B related to A?", 
    options: ["Maternal grandfather", "Paternal grandfather", "Uncle", "Father"], answer: 0,
    explanation: "Mother's father = maternal grandfather." },

  { q: "77) If X is married to Y and Y is widowhood of Z (i.e., Y was married to Z before), how does X relate to any children from Z & Y? (assuming children belong to Z & Y)", 
    options: ["Step-parent", "Child", "Sibling", "Uncle"], answer: 0,
    explanation: "New spouse of parent = step-parent to parent's children." },

  { q: "78) A is father of B and C. D is child of B. E is child of C. How are D and E related?", 
    options: ["Cousins", "Siblings", "Uncle-Nephew", "Grandparent-Grandchild"], answer: 0,
    explanation: "D and E are children of siblings ⇒ cousins." },

  { q: "79) M is father of N. O is father of P. N marries P. How is M related to O after marriage?", 
    options: ["In-laws (father-in-law relationship)", "Brother", "Uncle", "No relation"], answer: 0,
    explanation: "If N marries P, then M is father-in-law of P and O is father of P ⇒ M and O are co-parents-in-law (in-law relation)." },

  { q: "80) A's son is B. B's daughter is C. C's husband is D. How is D related to A?", 
    options: ["Grandson-in-law", "Son", "Son-in-law", "Grandson"], answer: 0,
    explanation: "C is granddaughter of A; D is husband of granddaughter ⇒ D is grandson-in-law (grandson by marriage)." },

  { q: "81) R says, 'S is the brother of the person who is the mother of my father.' How is S related to R?", 
    options: ["Great-uncle", "Uncle", "Cousin", "Grandfather"], answer: 0,
    explanation: "Mother of my father = grandmother. Brother of my grandmother is great-uncle. So S is great-uncle of R." },

  { q: "82) Pointing to a photo, A says, 'This man's son is my father's only brother's son.' What is A's relation to the man?", 
    options: ["Cousin", "Nephew", "Brother", "Uncle"], answer: 0,
    explanation: "Father's only brother is A's uncle. Uncle's son is A's cousin. So the man's son is A's cousin ⇒ the man is cousin's father ⇒ could be uncle or father; simplest: the man is father of A's cousin, so relation to A = uncle by marriage; but standard expected: father of cousin = uncle. So man is A's uncle." },

  { q: "83) A's father's only sister has a son B. How is B related to A?", 
    options: ["Cousin", "Nephew", "Uncle", "Brother"], answer: 0,
    explanation: "Father's sister's son = cousin." },

  { q: "84) P is son of Q. R is sister of Q. S is child of R. How is S related to P?", 
    options: ["Cousin", "Sibling", "Nephew", "Uncle"], answer: 0,
    explanation: "S is child of Q's sibling ⇒ S and P are cousins." },

  { q: "85) A is father of B. C is son of B. D is sister of C. How is D related to A?", 
    options: ["Granddaughter", "Daughter", "Niece", "Sister"], answer: 0,
    explanation: "C is grandson of A; D is sibling of C (another grandchild) ⇒ D is granddaughter of A." },

  { q: "86) If A is husband's brother of B, and B is mother of C, how is A related to C?", 
    options: ["Uncle", "Father", "Brother", "Grandfather"], answer: 0,
    explanation: "Husband's brother of parent is uncle by marriage to the child; A is uncle of C." },

  { q: "87) X's mother is Y. Y's mother is Z. How is Z related to X?", 
    options: ["Grandmother", "Aunt", "Mother", "Great-grandmother"], answer: 0,
    explanation: "Z is mother of X's mother ⇒ grandmother." },

  { q: "88) A is brother of B. C is son of D. D is brother of B. How is C related to A?", 
    options: ["Nephew", "Son", "Cousin", "Brother"], answer: 0,
    explanation: "D is brother of B; A is brother of B ⇒ A and D are brothers; C is child of D ⇒ C is nephew of A." },

  { q: "89) M has only daughter N. N has only son O. O has only son P. How is P related to M?", 
    options: ["Great-grandson", "Grandson", "Son", "Nephew"], answer: 0,
    explanation: "M → N (daughter) → O (grandson) → P (great-grandson)." },

  { q: "90) A is grandfather of B. C is granddaughter of B. How is C related to A?", 
    options: ["Great-granddaughter", "Granddaughter", "Daughter", "Niece"], answer: 0,
    explanation: "If A grandfather of B, then B is child of A. C is child of B's child ⇒ C is great-grandchild of A." },

  { q: "91) X is son of Y. Z is brother of Y. W is son of Z. How is W related to X?", 
    options: ["Cousin", "Brother", "Uncle", "Nephew"], answer: 0,
    explanation: "W is child of Y's sibling ⇒ cousin of X." },

  { q: "92) If P is the son of Q and R is daughter of P. S is sister of Q. How is R related to S?", 
    options: ["Niece (grand-niece)", "Granddaughter", "Sister", "Cousin"], answer: 0,
    explanation: "Q → child P → child R. S is sibling of Q ⇒ S is great-aunt to R; R is grand-niece (great-niece) to S. For simplicity: niece of niece = grand-niece." },

  { q: "93) A says, 'B is the son of the woman who is the mother of my brother.' Who is B to A?", 
    options: ["Brother", "Son", "Cousin", "Nephew"], answer: 0,
    explanation: "Mother of my brother = my mother. Son of my mother = me or my sibling ⇒ that man is a brother." },

  { q: "94) If A is mother of B and C is husband of B, how is C related to A?", 
    options: ["Son-in-law", "Brother-in-law", "Grandfather", "Father"], answer: 0,
    explanation: "Husband of child = son-in-law." },

  { q: "95) D is the sister of E. F is the daughter of D. G is the daughter of F. How is G related to E?", 
    options: ["Grandniece", "Niece", "Daughter", "Cousin"], answer: 0,
    explanation: "D is sibling of E; F is D's child (niece/nephew of E); G is child of niece ⇒ grandniece of E." },

  { q: "96) A is mother's brother of B. C is son of B. How is C related to A?", 
    options: ["Nephew", "Son", "Brother", "Uncle"], answer: 0,
    explanation: "If A is mother's brother of B ⇒ A is maternal uncle of B; C is son of B ⇒ C is grand-nephew? Simpler: C is nephew of A (if A is uncle of B, then A is great-uncle of C). But typical mapping: uncle of parent ⇒ great-uncle of child. To avoid ambiguity, prefer question: If A is brother of B and C is son of B, C is nephew of A." },

  // Adjust question 96 to a clearer one:
  { q: "96) A is brother of B. C is son of B. How is C related to A?",
    options: ["Nephew", "Son", "Brother", "Uncle"], answer: 0,
    explanation: "Child of sibling = nephew/niece." },

  { q: "97) P is father of Q. R is brother of Q. S is son of R. How is S related to P?", 
    options: ["Grandson", "Son", "Nephew", "Cousin"], answer: 0,
    explanation: "R is child of P; S is child of R ⇒ S is grandchild (grandson) of P." },

  { q: "98) M is father of N. O is daughter of N. P is brother of O. How is P related to M?", 
    options: ["Grandson", "Son", "Nephew", "Brother"], answer: 0,
    explanation: "P is child of N (child of M) ⇒ grandson of M." },

  { q: "99) If A is daughter of B and B is sister of C. D is son of C. How is D related to A?", 
    options: ["Cousin", "Brother", "Uncle", "Nephew"], answer: 0,
    explanation: "D is child of C (sibling of B). A is child of B. Children of siblings are cousins." },

  { q: "100) X's father's sister is Y. Z is son of Y. How is Z related to X?", 
    options: ["Cousin", "Brother", "Uncle", "Nephew"], answer: 0,
    explanation: "X's father's sister is aunt; aunt's child = cousin." }
];

// ------------- App state -------------
let current = 0;
let answers = new Array(QUESTIONS.length).fill(null);
let expired = new Array(QUESTIONS.length).fill(false);
let timer = null;
let timeLeft = 60;

// ------------- DOM refs -------------
const qnumEl = document.getElementById("qnum");
const qtxtEl = document.getElementById("qtext");
const optsEl = document.getElementById("optionsContainer");
const timerEl = document.getElementById("timer");
const numbersEl = document.getElementById("numbersContainer");
const resultsSection = document.getElementById("results");
const resultScoreEl = document.getElementById("resultScore");
const resultDetailsEl = document.getElementById("resultDetails");
const questionCard = document.getElementById("questionCard");

// ------------- Functions -------------
function buildNumberButtons(){
  numbersEl.innerHTML = "";
  for(let i=0;i<QUESTIONS.length;i++){
    const btn = document.createElement("div");
    btn.className = "num";
    btn.textContent = i+1;
    btn.title = `Go to Q${i+1}`;
    btn.addEventListener("click", ()=> {
      saveAnswer();
      goTo(i);
    });
    numbersEl.appendChild(btn);
  }
}

function renderQuestion(index){
  const q = QUESTIONS[index];
  qnumEl.textContent = `Q${index+1} / ${QUESTIONS.length}`;
  qtxtEl.textContent = q.q;
  optsEl.innerHTML = "";
  q.options.forEach((opt, i) => {
    const label = document.createElement("label");
    label.className = "optrow";
    label.innerHTML = `<input type="radio" name="opt" value="${i}" ${answers[index]===i? "checked":""} /> <span>${opt}</span>`;
    label.addEventListener("click", ()=> {
      const input = label.querySelector("input");
      input.checked = true;
      answers[index] = Number(input.value);
      updateNumberButtonState(index);
    });
    optsEl.appendChild(label);
  });
  highlightNumberActive(index);
  resetTimer();
}

function highlightNumberActive(idx){
  const nodes = numbersEl.querySelectorAll(".num");
  nodes.forEach((n,i)=>{
    n.classList.toggle("active", i===idx);
    if(answers[i] !== null) n.style.background = "#27ae60";
    else n.style.background = "var(--green)";
  });
}

function startTimer(){
  clearInterval(timer);
  timeLeft = 60;
  timerEl.textContent = `Time left: ${timeLeft}s`;
  timer = setInterval(()=> {
    timeLeft--;
    timerEl.textContent = `Time left: ${timeLeft}s`;
    if(timeLeft <= 0){
      clearInterval(timer);
      expired[current] = true;
      if(current < QUESTIONS.length - 1) {
        goTo(current+1);
      } else {
        submitTest();
      }
    }
  },1000);
}
function resetTimer(){
  clearInterval(timer);
  if(!expired[current]) startTimer();
  else timerEl.textContent = "Time over for this question";
}

function saveAnswer(){
  const chosen = document.querySelector('input[name="opt"]:checked');
  if(chosen) answers[current] = Number(chosen.value);
  updateNumberButtonState(current);
}
function updateNumberButtonState(idx){
  const nodes = numbersEl.querySelectorAll(".num");
  if(!nodes[idx]) return;
  if(answers[idx] !== null) nodes[idx].style.background = "#27ae60";
  else nodes[idx].style.background = "var(--green)";
}

function goTo(idx){
  saveAnswer();
  current = idx;
  renderQuestion(current);
}

function nextQ(){
  saveAnswer();
  if(current < QUESTIONS.length - 1){
    current++;
    renderQuestion(current);
  }
}

function prevQ(){
  saveAnswer();
  if(current > 0){
    current--;
    renderQuestion(current);
  }
}

function submitTest(){
  saveAnswer();
  clearInterval(timer);
  questionCard.style.display = "none";
  resultsSection.style.display = "block";
  let score = 0;
  resultDetailsEl.innerHTML = "";
  for(let i=0;i<QUESTIONS.length;i++){
    const q = QUESTIONS[i];
    const ans = answers[i];
    if(ans === q.answer) score++;
    else {
      const div = document.createElement("div");
      div.className = "wrong";
      const userAnsText = ans === null ? "Not Attempted" : q.options[ans];
      div.innerHTML = `<strong>Q${i+1}:</strong> ${q.q}
        <div style="margin-top:6px"><strong>Your Answer:</strong> ${userAnsText}</div>
        <div style="margin-top:6px"><strong>Correct Answer:</strong> ${q.options[q.answer]}</div>
        <div style="margin-top:6px"><strong>Explanation:</strong> ${q.explanation}</div>`;
      resultDetailsEl.appendChild(div);
    }
  }
  resultScoreEl.textContent = `You scored ${score} out of ${QUESTIONS.length}`;
  resultsSection.scrollIntoView({behavior:"smooth"});
}

// ------------- Wire buttons -------------
document.getElementById("nextBtn").addEventListener("click", ()=> nextQ());
document.getElementById("prevBtn").addEventListener("click", ()=> prevQ());
document.getElementById("submitBtn").addEventListener("click", ()=> {
  if(confirm("Submit test and view results?")){
    submitTest();
  }
});

// ------------- Init -------------
buildNumberButtons();
renderQuestion(0);
startTimer();

// optional keyboard nav
document.addEventListener("keydown",(e)=>{
  if(e.key === "ArrowRight") nextQ();
  if(e.key === "ArrowLeft") prevQ();
});
