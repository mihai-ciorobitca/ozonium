export const clinic = {
  phone: "0232 222 280",
  phoneHref: "tel:+40232222280",
  whatsapp: "https://wa.me/40735862702",
  email: "contact@ozonium.ro",
  locations: [
    "Strada Anastasie Panu 30A, Iași",
    "Bulevardul Primăverii 4, Iași",
  ],
};

export const services = [
  {
    slug: "neurologie",
    name: "Neurologie",
    tag: "Echilibru & sănătatea sistemului nervos",
    icon: "brain",
    summary:
      "Consultații și evaluări pentru a înțelege simptomele și a găsi pașii potriviți pentru tine.",
    image: "neuro-vestibulara-echipa.jpg",
    needs: [
      "Amețeli și tulburări de echilibru",
      "Dureri de cap",
      "Tulburări de memorie",
    ],
    procedures: [
      "Consultație neurologică",
      "Evaluare și recuperare vestibulară",
      "Ecografie Doppler cerebrală",
      "Stimulare cognitivă asistată de computer",
    ],
    description:
      "O evaluare atentă este primul pas. Medicul neurolog discută cu tine despre simptome, istoricul medical și felul în care acestea îți influențează viața. Investigațiile și recomandările sunt adaptate situației tale.",
  },
  {
    slug: "ortopedie",
    name: "Ortopedie",
    tag: "Mișcare & sănătatea articulațiilor",
    icon: "bone",
    summary:
      "Evaluarea durerilor articulare și a problemelor de mobilitate, cu un plan adaptat nevoilor tale.",
    image: "despre-doctor-victor.jpg",
    needs: [
      "Dureri de spate sau articulații",
      "Mobilitate redusă",
      "Recuperare după traumatisme",
    ],
    procedures: [
      "Consultație de ortopedie-traumatologie",
      "Evaluarea afecțiunilor articulare",
      "Infiltrații, la indicația medicului",
      "Coordonarea planului de recuperare",
    ],
    description:
      "Începem prin a înțelege sursa disconfortului. Consultația include discutarea simptomelor, examinarea clinică și analiza investigațiilor disponibile, pentru a stabili împreună următorii pași.",
  },
  {
    slug: "recuperare-medicala",
    name: "Recuperare medicală",
    tag: "Mobilitate & autonomie",
    icon: "activity",
    summary:
      "Kinetoterapie, fizioterapie și terapie manuală pentru o recuperare ghidată, pas cu pas.",
    image: "recuperare-sala-kineto.jpg",
    needs: [
      "Recuperare după intervenții",
      "Dureri musculare",
      "Limitări de mișcare",
    ],
    procedures: [
      "Kinetoterapie individualizată",
      "Fizioterapie",
      "Terapie manuală",
      "Consultație de medicină fizică și reabilitare",
    ],
    description:
      "Recuperarea începe cu obiective realiste și un program potrivit pentru tine. Echipa urmărește mobilitatea, forța și funcția, adaptând exercițiile și procedurile pe parcurs.",
  },
  {
    slug: "ozonoterapie",
    name: "Ozonoterapie",
    tag: "Evaluare & tratament personalizat",
    icon: "sparkles",
    summary:
      "Proceduri cu oxigen-ozon, recomandate individual în urma unei evaluări medicale.",
    image: "despre-doctor-victor.jpg",
    needs: [
      "Evaluarea opțiunilor de tratament",
      "Dureri articulare",
      "Consultație de specialitate",
    ],
    procedures: [
      "Autohemoterapie majoră și minoră",
      "Infiltrații locale și intraarticulare",
      "Aplicații locale",
      "Evaluarea indicațiilor și contraindicațiilor",
    ],
    description:
      "Ozonoterapia utilizează un amestec de oxigen și ozon în proceduri medicale specifice. Medicul evaluează indicațiile, contraindicațiile și alternativele înainte de a recomanda o procedură. Nu înlocuiește automat tratamentul prescris pentru o afecțiune.",
  },
  {
    slug: "laboratorul-de-echilibru",
    name: "Laboratorul de Echilibru",
    tag: "Postură & recuperare vestibulară",
    icon: "scan",
    summary:
      "Evaluări și recuperare asistată de tehnologie pentru postură, mișcare și echilibru.",
    image: "premium-dwall.jpg",
    needs: [
      "Amețeli și instabilitate",
      "Probleme de postură",
      "Evaluarea mișcării",
    ],
    procedures: [
      "Evaluare vestibulară",
      "Analiză posturală 3D",
      "Recuperare vestibulară și posturală",
      "Recuperare funcțională cu D-Wall",
    ],
    description:
      "Combinăm evaluarea clinică și tehnologia pentru a înțelege felul în care te miști și îți menții echilibrul. Rezultatele ajută echipa să adapteze un program de recuperare la profilul tău funcțional.",
  },
  {
    slug: "psihologie-clinica",
    name: "Psihologie clinică",
    tag: "Claritate & sprijin emoțional",
    icon: "heart",
    summary:
      "Un spațiu de ascultare, evaluare și consiliere, cu respect pentru ritmul și povestea ta.",
    image: "contact-clinic-photo.jpg",
    needs: [
      "Stres și anxietate",
      "Adaptarea la un diagnostic",
      "Sprijin în recuperare",
    ],
    procedures: [
      "Evaluare psihologică clinică",
      "Consiliere psihologică",
      "Sprijin pentru adaptare",
      "Colaborare cu echipa medicală",
    ],
    description:
      "Starea emoțională face parte din sănătatea ta. Într-un cadru confidențial, poți discuta despre dificultățile pe care le întâmpini și despre resursele care te pot ajuta să le gestionezi.",
  },
  {
    slug: "proceduri-regenerative",
    name: "Proceduri regenerative",
    tag: "Opțiuni evaluate de medic",
    icon: "leaf",
    summary:
      "Consultații pentru proceduri precum PRP și Ortoplasma, în funcție de indicația medicală.",
    image: "despre-doctor-victor.jpg",
    needs: [
      "Afecțiuni articulare",
      "Evaluarea opțiunilor de tratament",
      "Consultație de specialitate",
    ],
    procedures: [
      "Plasmă îmbogățită cu plachete (PRP)",
      "Ortoplasma",
      "Evaluarea eligibilității",
      "Monitorizare medicală",
    ],
    description:
      "Medicul discută cu tine despre opțiunile disponibile, limitele și riscurile lor. Procedurile sunt recomandate doar după evaluarea individuală și în contextul planului tău de îngrijire.",
  },
  {
    slug: "ecografie",
    name: "Ecografie",
    tag: "Investigații & evaluare",
    icon: "stethoscope",
    summary:
      "Investigații musculo-scheletale și Doppler cerebral, corelate cu evaluarea clinică.",
    image: "contact-clinic-photo.jpg",
    needs: [
      "Evaluarea mușchilor și articulațiilor",
      "Investigații recomandate de medic",
      "Clarificarea diagnosticului",
    ],
    procedures: [
      "Ecografie musculo-scheletală",
      "Ecografie Doppler cerebrală",
      "Evaluare clinică",
      "Recomandări individualizate",
    ],
    description:
      "Ecografia ajută medicul să obțină informații despre structurile evaluate. Alegerea investigației și interpretarea rezultatelor se fac în contextul simptomelor și al consultației.",
  },
  {
    slug: "medicina-fizica-recuperare-medicala",
    name: "Medicină fizică și reabilitare",
    tag: "Evaluare & plan de recuperare",
    icon: "stethoscope",
    summary:
      "Consultație de specialitate pentru un program de recuperare construit în jurul funcției și obiectivelor tale.",
    image: "mfr-pagina.jpg",
    needs: [
      "Limitări funcționale",
      "Evaluare înainte de recuperare",
      "Recomandări de proceduri",
    ],
    procedures: [
      "Consultație de medicină fizică și reabilitare",
      "Ecografie musculo-scheletală",
      "Coordonarea programului de recuperare",
      "Reevaluare funcțională",
    ],
    description:
      "Medicul de medicină fizică și reabilitare evaluează mobilitatea, funcția și impactul simptomelor asupra activităților zilnice. Recomandarea individuală poate reuni exerciții terapeutice și proceduri fizicale, cu obiective explicate și reevaluare pe parcurs.",
  },
  {
    slug: "recuperare-premium",
    name: "Recuperare funcțională avansată",
    tag: "Tehnologie & mișcare ghidată",
    icon: "scan",
    summary:
      "Evaluare posturală, recuperare asistată digital și opțiuni personalizate pentru sprijin și mers.",
    image: "premium-dwall.jpg",
    needs: [
      "Evaluarea posturii",
      "Antrenarea mișcării",
      "Evaluare pentru talonete",
    ],
    procedures: [
      "Analiză posturală 3D",
      "Recuperare posturală",
      "D-Wall",
      "Talonete personalizate",
    ],
    description:
      "Tehnologia completează evaluarea clinică. Folosim informații despre postură și mișcare pentru a ghida exercițiile și recomandările, adaptând programul la nevoile și toleranța fiecărui pacient.",
  },
] as const;

export const doctors = [
  {
    name: "Dr. Victor Cucoș",
    role: "Medic primar Ortopedie–Traumatologie",
    image: "despre-doctor-victor.jpg",
    specialty: "Ortopedie",
    service: "ortopedie",
  },
  {
    name: "Dr. Liliana Cucoș",
    role: "Medic primar Neurologie · Doctor în științe medicale",
    image: "despre-doctor-liliana.jpg",
    specialty: "Neurologie",
    service: "neurologie",
  },
  {
    name: "Dr. Carolina Ciubara",
    role: "Medic primar Neurologie",
    image: "despre-doctor-ciubara.jpg",
    specialty: "Neurologie",
    service: "neurologie",
  },
];

export const faqs = [
  {
    q: "Nu știu ce specialitate să aleg. Cum procedez?",
    a: "Sună-ne la 0232 222 280 sau scrie-ne pe WhatsApp. Spune-ne pe scurt ce te preocupă, iar echipa te va ajuta să alegi consultația potrivită. Diagnosticul și recomandările de tratament se stabilesc de către medic.",
  },
  {
    q: "Ce trebuie să aduc la prima consultație?",
    a: "Adu documentele medicale relevante, rezultatele investigațiilor anterioare și lista medicamentelor pe care le iei. La programare, echipa îți poate confirma dacă sunt necesare alte documente sau o pregătire specifică.",
  },
  {
    q: "Unde se află clinica?",
    a: "Ne găsești în Iași, pe Strada Anastasie Panu 30A și pe Bulevardul Primăverii 4. Confirmă cu echipa locația în care se desfășoară consultația sau procedura ta.",
  },
  {
    q: "Cum aflu costul consultației sau al tratamentului?",
    a: "Poți consulta lista de tarife din pagina Prețuri sau poți cere detalii echipei înainte de programare. Costul unui program de recuperare depinde de recomandarea individuală și de procedurile incluse.",
  },
  {
    q: "Pot începe direct un program de recuperare?",
    a: "Echipa îți va spune dacă este necesară o evaluare medicală înainte de începerea programului. Un plan personalizat pornește de la istoricul tău, starea actuală și obiectivele de recuperare.",
  },
];
