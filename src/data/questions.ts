import { Question } from '../types/quiz';

export const QUESTIONS_DATA: Question[] = [
  {
    id: 1,
    questionEn: "Which of the following is NOT one of the six characteristics of living things?",
    questionAr: "أي مما يلي ليس من الخصائص الست الأساسية للكائنات الحية؟",
    options: [
      { key: 'A', textEn: 'Metabolism', textAr: 'الأيض (التمثيل الغذائي)' },
      { key: 'B', textEn: 'Homeostasis', textAr: 'الاتزان الداخلي' },
      { key: 'C', textEn: 'Photosynthesis', textAr: 'البناء الضوئي' },
      { key: 'D', textEn: 'Reproduction', textAr: 'التكاثر' }
    ],
    correctAnswer: 'C',
    topic: 'Cell & Living Characteristics',
    topicAr: 'الخلية وخصائص الكائنات الحية',
    explanationEn: "Photosynthesis is specific to autotrophic organisms (plants, algae, some bacteria). The 6 universal characteristics of life are: cellular organization, metabolism, homeostasis, growth/development, reproduction, and response to stimuli.",
    explanationAr: "البناء الضوئي يقتصر على الكائنات ذاتية التغذية فقط كالطحالب والنباتات، بينما الخصائص الست العامة المشتركة بين كل الأحياء هي: التنظيم الخلوي، الأيض، الاتزان الداخلي، النمو والتطور، التكاثر، والاستجابة للمؤثرات.",
    pharmaceuticalInsight: "Understanding universal life traits vs specialized pathways is essential in pharmacognosy when targeting microbial cells without harming human cells.",
    keywords: ['Characteristics of life', 'Photosynthesis', 'Metabolism']
  },
  {
    id: 2,
    questionEn: "The basic organizational unit of life is the:",
    questionAr: "الوحدة البنائية والتنظيمية الأساسية للحياة هي:",
    options: [
      { key: 'A', textEn: 'Tissue', textAr: 'النسيج' },
      { key: 'B', textEn: 'Organ', textAr: 'العضو' },
      { key: 'C', textEn: 'Cell', textAr: 'الخلية' },
      { key: 'D', textEn: 'System', textAr: 'الجهاز الحيوي' }
    ],
    correctAnswer: 'C',
    topic: 'Cell & Living Characteristics',
    topicAr: 'الخلية وخصائص الكائنات الحية',
    explanationEn: "The cell is the fundamental structural, functional, and biological unit of all known organisms. Tissues are groups of cells, organs are groups of tissues, and systems are groups of organs.",
    explanationAr: "الخلية هي أصغر وحدة حية قادرة على أداء جميع وظائف الحياة، وتتجمع الخلايا لتكوين الأنسجة ثم الأعضاء والأجهزة.",
    pharmaceuticalInsight: "Plant secondary metabolites (e.g., alkaloids in vacuoles) are synthesized and stored within specialized plant cells.",
    keywords: ['Cell Theory', 'Biological Organization']
  },
  {
    id: 3,
    questionEn: "All cells arise from:",
    questionAr: "تنشأ جميع الخلايا من:",
    options: [
      { key: 'A', textEn: 'Non-living matter', textAr: 'المادة غير الحية' },
      { key: 'B', textEn: 'Preexisting cells', textAr: 'خلايا حية موجودة مسبقاً' },
      { key: 'C', textEn: 'Tissues', textAr: 'الأنسجة فقط' },
      { key: 'D', textEn: 'Organs', textAr: 'الأعضاء' }
    ],
    correctAnswer: 'B',
    topic: 'Cell & Living Characteristics',
    topicAr: 'الخلية وخصائص الكائنات الحية',
    explanationEn: "According to modern Cell Theory (formulated by Schleiden, Schwann, and Virchow: 'Omnis cellula e cellula'), all living cells arise exclusively from pre-existing cells through cell division.",
    explanationAr: "حسب النظرية الخلوية، لا يمكن للخلايا أن تنشأ تلقائياً من مواد غير حية، بل تنتج دائماً من انقسام خلايا سابقة الوجود.",
    pharmaceuticalInsight: "Plant tissue culture and micropropagation rely directly on this principle to produce uniform medicinal crops under sterile conditions.",
    keywords: ['Virchow', 'Cell Theory', 'Cell Division']
  },
  {
    id: 4,
    questionEn: "Bacteria generally have cells that:",
    questionAr: "تتميز خلايا البكتيريا عموماً بأنها:",
    options: [
      { key: 'A', textEn: 'Have a membrane-bound nucleus', textAr: 'تمتلك نواة محاطة بغشاء' },
      { key: 'B', textEn: 'Lack a defined nucleus', textAr: 'تفتقر إلى نواة محددة محاطة بغشاء' },
      { key: 'C', textEn: 'Have chloroplasts', textAr: 'تحتوي على بلاستيدات خضراء' },
      { key: 'D', textEn: 'Have complex organ systems', textAr: 'تمتلك أجهزة أعضاء معقدة' }
    ],
    correctAnswer: 'B',
    topic: 'Cell & Living Characteristics',
    topicAr: 'الخلية وخصائص الكائنات الحية',
    explanationEn: "Bacteria are prokaryotes; their genetic material is located in a nucleoid region without a true nuclear membrane, unlike eukaryotic plant and animal cells.",
    explanationAr: "البكتيريا كائنات بدائية النوى (Prokaryotes)، حيث تسبح مادتها الوراثية في السيتوبلازم دون غلاف نووي يحيط بها.",
    pharmaceuticalInsight: "Targeting prokaryotic 70S ribosomes vs eukaryotic 80S ribosomes is the foundational basis for antibiotic selectivity.",
    keywords: ['Prokaryote', 'Bacteria', 'Nucleoid']
  },
  {
    id: 5,
    questionEn: "Plants, animals and fungi possess:",
    questionAr: "تمتلك النباتات والحيوانات والفطريات:",
    options: [
      { key: 'A', textEn: 'Cells without DNA', textAr: 'خلايا بدون مادة وراثية DNA' },
      { key: 'B', textEn: 'Membrane-bound nuclei', textAr: 'أنوية حقيقية محاطة بأغشية نووية' },
      { key: 'C', textEn: 'No cellular organization', textAr: 'انعدام التنظيم الخلوي' },
      { key: 'D', textEn: 'Only one cell', textAr: 'خلية واحدة فقط دائماً' }
    ],
    correctAnswer: 'B',
    topic: 'Cell & Living Characteristics',
    topicAr: 'الخلية وخصائص الكائنات الحية',
    explanationEn: "Plants, animals, and fungi are all eukaryotes. Eukaryotic cells are defined by having a membrane-bound nucleus housing genomic DNA along with membrane-bound organelles.",
    explanationAr: "تنتمي النباتات والحيوانات والفطريات لحقيقيات النوى (Eukaryotes)، وتتميز بوجود نواة حقيقية محاطة بغشاء نووي مزدوج وعضيات غشائية.",
    pharmaceuticalInsight: "Fungal infections require specialized antifungal drugs because fungi share eukaryotic cellular machinery with human hosts.",
    keywords: ['Eukaryotes', 'Membrane-bound nucleus', 'Organelles']
  },
  {
    id: 6,
    questionEn: "Metabolism is defined as:",
    questionAr: "يُعرَّف الأيض (Metabolism) بأنه:",
    options: [
      { key: 'A', textEn: 'Cell division only', textAr: 'الانقسام الخلوي فقط' },
      { key: 'B', textEn: 'All chemical reactions occurring inside a living organism', textAr: 'مجموع التفاعلات الكيميائية الحيوية داخل الكائن الحي' },
      { key: 'C', textEn: 'Reproduction of organisms', textAr: 'عملية التكاثر وإنتاج الأفراد' },
      { key: 'D', textEn: 'Response to stimuli', textAr: 'الاستجابة للمؤثرات البيئية' }
    ],
    correctAnswer: 'B',
    topic: 'Metabolism & Homeostasis',
    topicAr: 'الأيض والاتزان الداخلي',
    explanationEn: "Metabolism is the total sum of all biochemical reactions taking place in an organism to maintain life, sustain energy production, and construct cellular components.",
    explanationAr: "الأيض هو المحصلة الكلية لجميع التفاعلات الكيميائية الحيوية المستمرة داخل خلايا الكائن الحي لتحويل الغذاء إلى طاقة وبناء الجزيئات.",
    pharmaceuticalInsight: "Plant metabolism is divided into primary metabolism (vital survival) and secondary metabolism (production of medicinal phytochemicals).",
    keywords: ['Metabolism', 'Biochemical reactions', 'Enzymes']
  },
  {
    id: 7,
    questionEn: "Catabolism involves:",
    questionAr: "تتضمن عمليات الهدم (Catabolism):",
    options: [
      { key: 'A', textEn: 'Building new molecules', textAr: 'بناء جزيئات معقدة جديدة' },
      { key: 'B', textEn: 'Breaking down food to release energy', textAr: 'تفكيك الجزيئات الغذائية المعقدة لتحرير الطاقة' },
      { key: 'C', textEn: 'Producing offspring', textAr: 'إنتاج النسل والتكاثر' },
      { key: 'D', textEn: 'Maintaining body temperature', textAr: 'الحفاظ على درجة حرارة الجسم فقط' }
    ],
    correctAnswer: 'B',
    topic: 'Metabolism & Homeostasis',
    topicAr: 'الأيض والاتزان الداخلي',
    explanationEn: "Catabolism is the degradative branch of metabolism where complex organic compounds (like carbohydrates, fats) are broken down into simpler molecules, yielding usable chemical energy (ATP).",
    explanationAr: "مسار الهدم هو مسار تفكيكي يتم فيه تحطيم الجزيئات المعقدة إلى جزيئات أبسط مع إنتاج الطاقة في صورة ATP.",
    pharmaceuticalInsight: "Cellular respiration (glycolysis and Krebs cycle) in plants is a primary catabolic pathway providing metabolic precursors for drug synthesis.",
    keywords: ['Catabolism', 'ATP', 'Energy release']
  },
  {
    id: 8,
    questionEn: "Anabolism involves:",
    questionAr: "تتضمن عمليات البناء (Anabolism):",
    options: [
      { key: 'A', textEn: 'Breaking down molecules', textAr: 'تفكيك الجزيئات الكبيرة' },
      { key: 'B', textEn: 'Removing waste products', textAr: 'التخلص من الفضلات الخلوية' },
      { key: 'C', textEn: 'Using energy to build new molecules and tissues', textAr: 'استهلاك الطاقة لبناء جزيئات وأنسجة حيوية جديدة' },
      { key: 'D', textEn: 'Responding to stimuli', textAr: 'الاستجابة للمنبهات الخارجية' }
    ],
    correctAnswer: 'C',
    topic: 'Metabolism & Homeostasis',
    topicAr: 'الأيض والاتزان الداخلي',
    explanationEn: "Anabolism is the biosynthetic branch of metabolism that consumes ATP to construct complex biomolecules (such as proteins, nucleic acids, and starch) from smaller building blocks.",
    explanationAr: "مسار البناء هو تفاعل تصنيعي مستهلك للطاقة يتم فيه تكوين جزيئات حيوية معقدة (كالبروتينات والأحماض النووية) من وحدات بنائية بسيطة.",
    pharmaceuticalInsight: "Photosynthesis and secondary metabolite synthesis (e.g. biosynthesis of morphine or paclitaxel) are anabolic processes.",
    keywords: ['Anabolism', 'Biosynthesis', 'Energy consumption']
  },
  {
    id: 9,
    questionEn: "Homeostasis refers to the ability to:",
    questionAr: "يشير مصطلح الاتزان الداخلي (Homeostasis) إلى قدرة الكائن على:",
    options: [
      { key: 'A', textEn: 'Increase body size', textAr: 'زيادة حجم وكتلة الجسم' },
      { key: 'B', textEn: 'Maintain a stable internal environment', textAr: 'الحفاظ على بيئة داخلية ثابتة ومستقرة' },
      { key: 'C', textEn: 'Produce offspring', textAr: 'إنتاج أفراد جدد' },
      { key: 'D', textEn: 'Move from place to place', textAr: 'الحركة والتنقل من مكان لآخر' }
    ],
    correctAnswer: 'B',
    topic: 'Metabolism & Homeostasis',
    topicAr: 'الأيض والاتزان الداخلي',
    explanationEn: "Homeostasis is the physiological mechanism by which organisms regulate their internal physical and chemical conditions (pH, hydration, temperature, osmolarity) despite changing external conditions.",
    explanationAr: "الاتزان الداخلي هو قدرة الكائن الحي على ضبط واستقرار بيئته الداخلية (مثل تركيز الأملاح، الرطوبة، ودرجة الحرارة) رغم تقلبات البيئة المحيطة.",
    pharmaceuticalInsight: "Plants maintain water homeostasis via stomatal opening/closing regulated by abscisic acid (ABA).",
    keywords: ['Homeostasis', 'Internal balance', 'Regulation']
  },
  {
    id: 10,
    questionEn: "Normal human body temperature is approximately:",
    questionAr: "تبلغ درجة حرارة جسم الإنسان الطبيعية تقريباً:",
    options: [
      { key: 'A', textEn: '27°C', textAr: '27 درجة مئوية' },
      { key: 'B', textEn: '32°C', textAr: '32 درجة مئوية' },
      { key: 'C', textEn: '37°C', textAr: '37 درجة مئوية' },
      { key: 'D', textEn: '42°C', textAr: '42 درجة مئوية' }
    ],
    correctAnswer: 'C',
    topic: 'Metabolism & Homeostasis',
    topicAr: 'الأيض والاتزان الداخلي',
    explanationEn: "Normal human core temperature is tightly regulated around 37°C (98.6°F) via thermoregulatory homeostatic feedback in the hypothalamus.",
    explanationAr: "درجة الحرارة الطبيعية لجسم الإنسان تبلغ حوالي 37 مئوية، وهي القيمة المثالية لعمل الإنزيمات الحيوية ويتم الحفاظ عليها عبر آليات الاتزان الحراري.",
    pharmaceuticalInsight: "Antipyretic herbal drugs (such as Salix bark containing salicin, precursor to aspirin) act on the hypothalamus to restore normal temperature.",
    keywords: ['Thermoregulation', '37°C', 'Enzyme optimum']
  },
  {
    id: 11,
    questionEn: "Growth is best described as a:",
    questionAr: "يُوصَف النمو (Growth) بدقة بأنه تغير:",
    options: [
      { key: 'A', textEn: 'Qualitative change', textAr: 'نوعي (كيفي)' },
      { key: 'B', textEn: 'Quantitative measurable increase in size', textAr: 'كمي قابل للقياس في الحجم والكتلة' },
      { key: 'C', textEn: 'Change in genetic information', textAr: 'تغير في المادة الوراثية' },
      { key: 'D', textEn: 'Response to light', textAr: 'استجابة للضوء فقط' }
    ],
    correctAnswer: 'B',
    topic: 'Growth, Genetics & DNA',
    topicAr: 'النمو والوراثة والحمض النووي',
    explanationEn: "Growth refers to a permanent, irreversible quantitative increase in physical dimensions, mass, volume, and cell numbers that can be objectively measured.",
    explanationAr: "النمو هو زيادة كمية قابلة للقياس والوزن في الحجم والكتلة الحيوية وعدد الخلايا، على عكس التطور الذي يمثل تغيراً نوعياً.",
    pharmaceuticalInsight: "Tracking plant biomass growth is a standard parameter in agricultural pharmacognosy to optimize harvest yield.",
    keywords: ['Growth', 'Quantitative', 'Biomass']
  },
  {
    id: 12,
    questionEn: "Development is primarily:",
    questionAr: "يُعتبر التطور (Development) في المقام الأول تغيراً:",
    options: [
      { key: 'A', textEn: 'Quantitative', textAr: 'كمياً عددياً' },
      { key: 'B', textEn: 'Qualitative', textAr: 'نوعياً (كيفياً) في التعقيد والوظيفة' },
      { key: 'C', textEn: 'Metabolic breakdown', textAr: 'هدمياً أيضيّاً' },
      { key: 'D', textEn: 'Reproduction', textAr: 'تكاثرياً بحتاً' }
    ],
    correctAnswer: 'B',
    topic: 'Growth, Genetics & DNA',
    topicAr: 'النمو والوراثة والحمض النووي',
    explanationEn: "Development is qualitative; it encompasses differentiation, morphogenesis, maturation, and acquiring new structures and functional capacities throughout the organism's lifecycle.",
    explanationAr: "التطور هو تغير نوعي يتضمن تمايز الخلايا واكتساب قدرات وأعضاء جديدة وتغيرات وظيفية وشكلية خلال دورة حياة الكائن.",
    pharmaceuticalInsight: "Different plant developmental stages produce markedly different concentrations of medicinal active constituents (e.g. flowering vs seeding stages).",
    keywords: ['Development', 'Qualitative', 'Differentiation']
  },
  {
    id: 13,
    questionEn: "Growth occurs mainly through:",
    questionAr: "يحدث النمو في الكائنات الحية بشكل رئيسي عبر:",
    options: [
      { key: 'A', textEn: 'Cell division', textAr: 'الانقسام الخلوي (Cell division)' },
      { key: 'B', textEn: 'Photosynthesis', textAr: 'البناء الضوئي فقط' },
      { key: 'C', textEn: 'Pollination', textAr: 'التلقيح' },
      { key: 'D', textEn: 'Diffusion', textAr: 'الانتشار البسيط' }
    ],
    correctAnswer: 'A',
    topic: 'Growth, Genetics & DNA',
    topicAr: 'النمو والوراثة والحمض النووي',
    explanationEn: "Growth occurs primarily through mitotic cell division (producing new cells) followed by cell enlargement and elongation (especially in plant meristematic tissues).",
    explanationAr: "يتحقق النمو أساساً من خلال الانقسام الخلوي الميتوزي الذي يضاعف أعداد الخلايا متبوعاً باستطالتها وتضخمها.",
    pharmaceuticalInsight: "Antimitotic anticancer drugs (like Vinca alkaloids vincristine/vinblastine from Catharanthus roseus) specifically inhibit microtubule-driven cell division.",
    keywords: ['Mitosis', 'Cell division', 'Meristem']
  },
  {
    id: 14,
    questionEn: "Development involves:",
    questionAr: "يتضمن التطور (Development) للكائن الحي:",
    options: [
      { key: 'A', textEn: 'Only an increase in body mass', textAr: 'مجرد زيادة في وزن وكتلة الجسم' },
      { key: 'B', textEn: 'Becoming more complex and gaining new abilities', textAr: 'ازدياد التعقيد التركيبي واكتساب قدرات ووظائف جديدة' },
      { key: 'C', textEn: 'Only cell division', textAr: 'الانقسام الخلوي بمفرده' },
      { key: 'D', textEn: 'Waste removal', textAr: 'طرح الفضلات الخلوية' }
    ],
    correctAnswer: 'B',
    topic: 'Growth, Genetics & DNA',
    topicAr: 'النمو والوراثة والحمض النووي',
    explanationEn: "Development is the progressive transition from a simpler form to a more complex state, involving cellular differentiation, tissue specialization, and emergence of specialized organs.",
    explanationAr: "التطور يعني انتقال الكائن الحي من مرحلة بسيطة إلى هيئة أكثر تعقيداً مع ظهور أنسجة متخصصة ووظائف فيزيولوجية مستحدثة.",
    pharmaceuticalInsight: "The induction of glandular trichomes during floral development marks the peak synthesis of essential medicinal oils.",
    keywords: ['Differentiation', 'Specialization', 'Morphogenesis']
  },
  {
    id: 15,
    questionEn: "Genetic information specifying structure and function is carried by:",
    questionAr: "تُحمَل المعلومات الوراثية المحددة للتركيب والوظيفة بواسطة:",
    options: [
      { key: 'A', textEn: 'Protein', textAr: 'البروتينات' },
      { key: 'B', textEn: 'Lipid', textAr: 'الدهون' },
      { key: 'C', textEn: 'DNA', textAr: 'الحمض النووي (DNA)' },
      { key: 'D', textEn: 'Water', textAr: 'الماء' }
    ],
    correctAnswer: 'C',
    topic: 'Growth, Genetics & DNA',
    topicAr: 'النمو والوراثة والحمض النووي',
    explanationEn: "Deoxyribonucleic acid (DNA) is the hereditary macromolecule containing the genetic instructions required for the development, functioning, and reproduction of living organisms.",
    explanationAr: "الحمض النووي الريبوزي منقوص الأكسجين (DNA) هو الجزيء الحيوي الحامل للشفرة الوراثية التي تحدد بروتينات وخصائص الكائن الحي.",
    pharmaceuticalInsight: "DNA barcoding is the cutting-edge pharmaceutical standard for authenticating herbal raw materials and detecting adulteration.",
    keywords: ['DNA', 'Genetic code', 'Heredity']
  },
  {
    id: 16,
    questionEn: "Asexual reproduction generally produces offspring that are:",
    questionAr: "ينتج التكاثر اللاجنسي (Asexual reproduction) أفراداً يكونون عموماً:",
    options: [
      { key: 'A', textEn: 'Genetically identical', textAr: 'متطابقين وراثياً (نسخ متطابقة Clones)' },
      { key: 'B', textEn: 'Always genetically different', textAr: 'مختلفين وراثياً دائماً' },
      { key: 'C', textEn: 'Produced by two parents', textAr: 'ناتجين من أبوين اثنين' },
      { key: 'D', textEn: 'Produced only by animals', textAr: 'مقتصرين على الحيوانات فقط' }
    ],
    correctAnswer: 'A',
    topic: 'Reproduction & Tropisms',
    topicAr: 'التكاثر وحركات الانتحاء النباتي',
    explanationEn: "Asexual reproduction involves a single parent organism without gamete fusion, generating offspring that are genetic clones (genetically identical) of the parent.",
    explanationAr: "ينطوي التكاثر اللاجنسي على فرد أبوي واحد دون إخصاب، مما ينتج نسلاً متطابقاً تماماً في المحتوى الوراثي مع الأصل.",
    pharmaceuticalInsight: "Clonal propagation guarantees consistent chemical potency and medicinal drug concentrations across commercial plant batches.",
    keywords: ['Asexual reproduction', 'Clones', 'Genetic identity']
  },
  {
    id: 17,
    questionEn: "Which organism is given as an example of asexual reproduction?",
    questionAr: "أي كائن ورد كمثال للتكاثر اللاجنسي في المستند؟",
    options: [
      { key: 'A', textEn: 'Human', textAr: 'الإنسان' },
      { key: 'B', textEn: 'Bacteria', textAr: 'البكتيريا (Bacteria)' },
      { key: 'C', textEn: 'Elephant', textAr: 'الفيل' },
      { key: 'D', textEn: 'Hen', textAr: 'الدجاجة' }
    ],
    correctAnswer: 'B',
    topic: 'Reproduction & Tropisms',
    topicAr: 'التكاثر وحركات الانتحاء النباتي',
    explanationEn: "Bacteria reproduce asexually primarily through binary fission, where a single bacterial cell replicates its circular DNA and divides into two genetically identical daughter cells.",
    explanationAr: "تتكاثر البكتيريا لاجنسياً بالانشطار الثنائي (Binary fission)، منتجة خليتين متطابقتين وراثياً.",
    pharmaceuticalInsight: "Industrial fermentation of recombinant bacteria (e.g. for insulin synthesis) exploits rapid asexual reproduction.",
    keywords: ['Binary fission', 'Bacteria', 'Asexual']
  },
  {
    id: 18,
    questionEn: "In sexual reproduction, each parent contributes:",
    questionAr: "في التكاثر الجنسي، يُسهم كل من الأبوين بـ:",
    options: [
      { key: 'A', textEn: 'All genetic material', textAr: 'كامل المادة الوراثية' },
      { key: 'B', textEn: 'Half of the genetic material', textAr: 'نصف المادة الوراثية (مجموعة كروموسومية أحادية n)' },
      { key: 'C', textEn: 'No genetic material', textAr: 'لا يقدم أي مادة وراثية' },
      { key: 'D', textEn: 'Only proteins', textAr: 'بروتينات فقط' }
    ],
    correctAnswer: 'B',
    topic: 'Reproduction & Tropisms',
    topicAr: 'التكاثر وحركات الانتحاء النباتي',
    explanationEn: "In sexual reproduction, haploid gametes (sperm and egg / pollen and ovule) each carry 50% (half) of the genetic material, combining at fertilization to form a diploid zygote with genetic variation.",
    explanationAr: "يسهم كل من الأب والأم بنصف المادة الوراثية عبر الأمشاج الأحادية المجموعة (n)، ليتحدان في لاقحة ثنائية (2n) تجمع صفات جديدة.",
    pharmaceuticalInsight: "Sexual hybridization in medicinal plants is applied by plant breeders to generate novel disease-resistant chemotypes.",
    keywords: ['Sexual reproduction', 'Meiosis', 'Haploid gametes']
  },
  {
    id: 19,
    questionEn: "Plants growing their stems toward sunlight is called:",
    questionAr: "نمو سيقان النباتات باتجاه أشعة الشمس يُسمى:",
    options: [
      { key: 'A', textEn: 'Geotropism', textAr: 'الانتحاء الأرضي' },
      { key: 'B', textEn: 'Phototropism', textAr: 'الانتحاء الضوئي (Phototropism)' },
      { key: 'C', textEn: 'Homeostasis', textAr: 'الاتزان الداخلي' },
      { key: 'D', textEn: 'Metabolism', textAr: 'التمثيل الغذائي' }
    ],
    correctAnswer: 'B',
    topic: 'Reproduction & Tropisms',
    topicAr: 'التكاثر وحركات الانتحاء النباتي',
    explanationEn: "Phototropism is directional growth in response to light. Stems display positive phototropism (bending toward light) caused by auxin accumulation on the shaded side promoting elongation.",
    explanationAr: "الانتحاء الضوئي الإيجابي هو نمو الساق نحو مصدر الضوء بتأثير هرمون الأوكسين الذي يستحث استطالة خلايا الجانب المظلل.",
    pharmaceuticalInsight: "Light quality and photoperiod regulation directly influence plant hormone levels and active ingredient biosynthesis in greenhouses.",
    keywords: ['Phototropism', 'Auxin', 'Stem elongation']
  },
  {
    id: 20,
    questionEn: "Roots growing downward are responding primarily to:",
    questionAr: "تستجيب جذور النباتات النامية إلى الأسفل في التربة بشكل أساسي لـ:",
    options: [
      { key: 'A', textEn: 'Light', textAr: 'الضوء' },
      { key: 'B', textEn: 'Gravity', textAr: 'الجاذبية الأرضية (Gravity)' },
      { key: 'C', textEn: 'Temperature', textAr: 'الحرارة' },
      { key: 'D', textEn: 'Sound', textAr: 'الصوت' }
    ],
    correctAnswer: 'B',
    topic: 'Reproduction & Tropisms',
    topicAr: 'التكاثر وحركات الانتحاء النباتي',
    explanationEn: "Roots exhibit positive gravitropism (geotropism), orienting downward in the direction of the gravitational vector mediated by statolith amyloplasts in the root cap.",
    explanationAr: "تنمو الجذور إلى الأسفل استجابةً للجاذبية الأرضية (انتحاء أرضي موجب) لمساعدتها على تثبيت النبات وامتصاص الماء والمغذيات.",
    pharmaceuticalInsight: "Medicinal roots (such as Ginseng and Licorice) develop active saponins and triterpenes as they penetrate deeper underground layers.",
    keywords: ['Gravitropism', 'Geotropism', 'Root cap']
  },
  {
    id: 21,
    questionEn: "Mimosa pudica is commonly known as:",
    questionAr: "يُعرَف نبات ميموزا بوديكا (Mimosa pudica) في اللغة الشائعة باسم:",
    options: [
      { key: 'A', textEn: 'Sunflower', textAr: 'دوار الشمس' },
      { key: 'B', textEn: 'Touch-me-not', textAr: 'نبتة الست المستحية (Touch-me-not)' },
      { key: 'C', textEn: 'Water lily', textAr: 'زنبق الماء' },
      { key: 'D', textEn: 'Wheat', textAr: 'القمح' }
    ],
    correctAnswer: 'B',
    topic: 'Reproduction & Tropisms',
    topicAr: 'التكاثر وحركات الانتحاء النباتي',
    explanationEn: "Mimosa pudica is widely known as the 'sensitive plant' or 'touch-me-not' because its compound leaves rapidly fold inward upon mechanical touch due to turgor pressure changes in the pulvini.",
    explanationAr: "يُعرف نبات ميموزا بوديكا بـ 'المستحية' أو (Touch-me-not) لانطواء أوراقه الفوري عند اللمس نتيجة تغير ضغط الامتلاء في وسائد الأوراق.",
    pharmaceuticalInsight: "Mimosa pudica extracts possess evaluated pharmacological activities including antimicrobial, wound-healing, and anxiolytic properties.",
    keywords: ['Mimosa pudica', 'Thigmonasty', 'Touch-me-not']
  },
  {
    id: 22,
    questionEn: "Animals are generally:",
    questionAr: "تُصنف الحيوانات من حيث التغذية عموماً بأنها:",
    options: [
      { key: 'A', textEn: 'Autotrophs', textAr: 'ذاتية التغذية' },
      { key: 'B', textEn: 'Heterotrophs', textAr: 'غير ذاتية التغذية (Heterotrophs)' },
      { key: 'C', textEn: 'Producers', textAr: 'منتجات أولية' },
      { key: 'D', textEn: 'Photosynthetic', textAr: 'قادرة على البناء الضوئي' }
    ],
    correctAnswer: 'B',
    topic: 'Plants vs Animals & Adaptations',
    topicAr: 'مقارنة النباتات بالحيوانات والتكيفات',
    explanationEn: "Animals are heterotrophs; they cannot synthesize their own food and must obtain organic carbon and essential nutrients by ingesting other organisms.",
    explanationAr: "الحيوانات كائنات غير ذاتية التغذية تعتمد على استهلاك كائنات حية أخرى للحصول على الطاقة والمركبات العضوية.",
    pharmaceuticalInsight: "Heterotrophic human reliance on botanical autotrophs provides essential vitamins, essential amino acids, and bioactive therapeutics.",
    keywords: ['Heterotroph', 'Consumer', 'Nutrition']
  },
  {
    id: 23,
    questionEn: "Plants are generally:",
    questionAr: "تُصنف النباتات من حيث التغذية عموماً بأنها:",
    options: [
      { key: 'A', textEn: 'Heterotrophs', textAr: 'غير ذاتية التغذية' },
      { key: 'B', textEn: 'Autotrophs', textAr: 'ذاتية التغذية (Autotrophs)' },
      { key: 'C', textEn: 'Predators', textAr: 'مفترسات' },
      { key: 'D', textEn: 'Consumers', textAr: 'مستهلكات أولية' }
    ],
    correctAnswer: 'B',
    topic: 'Plants vs Animals & Adaptations',
    topicAr: 'مقارنة النباتات بالحيوانات والتكيفات',
    explanationEn: "Plants are photoautotrophs; they harness solar radiation to synthesize organic nutrients (such as glucose) from inorganic raw materials (CO2 and H2O).",
    explanationAr: "النباتات كائنات ذاتية التغذية تصنع غذاءها العضوي بنفسها من خلال تحويل الطاقة الضوئية إلى طاقة كيميائية في الروابط العضوية.",
    pharmaceuticalInsight: "Autotrophic carbon fixation produces the carbon skeletons required for constructing complex bioactive glycosides and terpenes.",
    keywords: ['Autotroph', 'Photoautotroph', 'Primary producers']
  },
  {
    id: 24,
    questionEn: "Plants produce their own food mainly through:",
    questionAr: "تنتج النباتات غذاءها الخاص بشكل أساسي عبر عملية:",
    options: [
      { key: 'A', textEn: 'Respiration', textAr: 'التنفس الخلوي' },
      { key: 'B', textEn: 'Photosynthesis', textAr: 'البناء الضوئي (Photosynthesis)' },
      { key: 'C', textEn: 'Digestion', textAr: 'الهضم' },
      { key: 'D', textEn: 'Fermentation', textAr: 'التخمر' }
    ],
    correctAnswer: 'B',
    topic: 'Plants vs Animals & Adaptations',
    topicAr: 'مقارنة النباتات بالحيوانات والتكيفات',
    explanationEn: "Photosynthesis converts light energy into chemical energy: 6CO2 + 6H2O + Light -> C6H12O6 + 6O2, occurring inside chloroplasts containing chlorophyll.",
    explanationAr: "عملية البناء الضوئي داخل البلاستيدات الخضراء تمكن النبات من دمج ثاني أكسيد الكربون والماء بوجود الضوء لإنتاج السكر وغاز الأكسجين.",
    pharmaceuticalInsight: "Chlorophyll and accessory carotenoids are isolated as antioxidant and food-grade pharmaceutical colorants.",
    keywords: ['Photosynthesis', 'Chloroplast', 'Glucose synthesis']
  },
  {
    id: 25,
    questionEn: "A major difference between plants and animals is that animals generally:",
    questionAr: "من الفروق الجوهرية بين الحيوانات والنباتات أن الحيوانات عموماً:",
    options: [
      { key: 'A', textEn: 'Cannot respond to stimuli', textAr: 'لا تستجيب للمؤثرات' },
      { key: 'B', textEn: 'Can move from one place to another', textAr: 'تستطيع الحركة والانتقال من مكان لآخر (Locomotion)' },
      { key: 'C', textEn: 'Are autotrophs', textAr: 'ذاتية التغذية' },
      { key: 'D', textEn: 'Have cell walls', textAr: 'تمتلك جدراناً خلوية صلبة' }
    ],
    correctAnswer: 'B',
    topic: 'Plants vs Animals & Adaptations',
    topicAr: 'مقارنة النباتات بالحيوانات والتكيفات',
    explanationEn: "Animals are predominantly motile, possessing muscular and nervous systems facilitating locomotion. Plants are sessile (rooted in place) and exhibit organ-level growth movements instead.",
    explanationAr: "الحيوانات قادرة على الانتقال الحركي الكامل من مكان لآخر بفضل الأجهزة العضلية والعصبية، بينما النباتات ثابتة مكانياً وتقتصر حركتها على الانتحاء الموضعي.",
    pharmaceuticalInsight: "Because plants cannot flee predators or pathogens, they evolved diverse chemical defense arsenals (bioactive alkaloids, tannins) that serve as medicines.",
    keywords: ['Locomotion', 'Motility', 'Sessile']
  },
  {
    id: 26,
    questionEn: "Animals possess specialized:",
    questionAr: "تمتلك الحيوانات أنظمة متخصصة تتمثل في:",
    options: [
      { key: 'A', textEn: 'Root systems', textAr: 'أجهزة جذرية امتصاصية' },
      { key: 'B', textEn: 'Organ systems and sensory organs', textAr: 'أجهزة أعضاء متخصصة وحواس متطورة' },
      { key: 'C', textEn: 'Chloroplasts', textAr: 'بلاستيدات خضراء' },
      { key: 'D', textEn: 'Waxy leaf coatings', textAr: 'طبقات شمعية سميكة للأوراق' }
    ],
    correctAnswer: 'B',
    topic: 'Plants vs Animals & Adaptations',
    topicAr: 'مقارنة النباتات بالحيوانات والتكيفات',
    explanationEn: "Animals have complex, integrated organ systems (nervous, circulatory, digestive, muscular) and specialized sensory organs (eyes, ears) enabling rapid environmental perception and response.",
    explanationAr: "تتميز الحيوانات بتعقيد أجهزتها الحيوية (العصبي، الدوراني، الهضمي) وامتلاكها لأعضاء حس متخصصة للاستجابة السريعة.",
    pharmaceuticalInsight: "Many plant-derived drugs (like atropine, morphine, and caffeine) specifically target animal neurological receptor systems.",
    keywords: ['Organ systems', 'Sensory organs', 'Animal physiology']
  },
  {
    id: 27,
    questionEn: "Asexual reproduction in plants may occur through:",
    questionAr: "قد يحدث التكاثر اللاجنسي في النباتات من خلال:",
    options: [
      { key: 'A', textEn: 'Vegetative propagation', textAr: 'التكاثر الخضري (Vegetative propagation)' },
      { key: 'B', textEn: 'Fertilization only', textAr: 'الإخصاب فقط' },
      { key: 'C', textEn: 'Courtship', textAr: 'سلوك التودد' },
      { key: 'D', textEn: 'Migration', textAr: 'الهجرة الموسمية' }
    ],
    correctAnswer: 'A',
    topic: 'Plants vs Animals & Adaptations',
    topicAr: 'مقارنة النباتات بالحيوانات والتكيفات',
    explanationEn: "Plants reproduce asexually through vegetative propagation, wherein vegetative parts (roots, stems, leaves) regenerate new individual plants without sexual seed production.",
    explanationAr: "يحدث التكاثر اللاجنسي في النباتات عبر التكاثر الخضري بواسطة أجزاء غير زهرية كالجذور والسيقان والأوراق دون إخصاب.",
    pharmaceuticalInsight: "Vegetative propagation is standard practice to preserve elite chemotypes of medicinal plants such as Mentha (mint) and Zingiber (ginger).",
    keywords: ['Vegetative propagation', 'Asexual plant reproduction']
  },
  {
    id: 28,
    questionEn: "Vegetative propagation can involve:",
    questionAr: "يمكن أن يشمل التكاثر الخضري أجزاء مثل:",
    options: [
      { key: 'A', textEn: 'Stems, roots or leaves', textAr: 'السيقان أو الجذور أو الأوراق' },
      { key: 'B', textEn: 'Only flowers', textAr: 'الأزهار فقط' },
      { key: 'C', textEn: 'Only seeds', textAr: 'البذور فقط' },
      { key: 'D', textEn: 'Only fruits', textAr: 'الثمار فقط' }
    ],
    correctAnswer: 'A',
    topic: 'Plants vs Animals & Adaptations',
    topicAr: 'مقارنة النباتات بالحيوانات والتكيفات',
    explanationEn: "Vegetative propagation utilizes non-reproductive vegetative organs—runners/stolons, rhizomes, tubers, stem cuttings, root suckers, or leaf buds (e.g. Bryophyllum).",
    explanationAr: "يمكن للتكاثر الخضري استخدام السيقان (كالريزومات والدرنات)، أو الجذور، أو الأوراق لإنتاج نباتات كاملة جديدة.",
    pharmaceuticalInsight: "Rhizomes of turmeric (Curcuma longa) and ginger are harvested both for vegetative replanting and curcumin/gingerol extraction.",
    keywords: ['Rhizomes', 'Stems', 'Roots', 'Leaves']
  },
  {
    id: 29,
    questionEn: "Plants exhibit indeterminate growth, meaning they:",
    questionAr: "تُظهر النباتات نمواً غير محدد (Indeterminate growth)، مما يعني أنها:",
    options: [
      { key: 'A', textEn: 'Stop growing immediately after germination', textAr: 'تتوقف عن النمو فوراً بعد الإنبات' },
      { key: 'B', textEn: 'Can continue growing throughout their lifespan', textAr: 'تستطيع مواصلة النمو طوال فترة حياتها' },
      { key: 'C', textEn: 'Never produce flowers', textAr: 'لا تنتج أزهاراً أبداً' },
      { key: 'D', textEn: 'Cannot produce new leaves', textAr: 'لا يمكنها إنتاج أوراق جديدة' }
    ],
    correctAnswer: 'B',
    topic: 'Plants vs Animals & Adaptations',
    topicAr: 'مقارنة النباتات بالحيوانات والتكيفات',
    explanationEn: "Indeterminate growth means growth is not terminated at a predetermined adult size; perennial plants maintain active meristems that generate new organs continuously throughout their lifespan.",
    explanationAr: "النمو غير المحدد يعني أن النبات يحتفظ بأنسجة مرستيمية نشطة تمكنه من الاستمرار في النمو وإضافة فروع وجذور جديدة طيلة حياته.",
    pharmaceuticalInsight: "Continuous meristematic activity enables perpetual pruning and harvesting of medicinal foliage (e.g. Camellia sinensis tea leaves).",
    keywords: ['Indeterminate growth', 'Meristems', 'Continuous growth']
  },
  {
    id: 30,
    questionEn: "Thick waxy coatings on plant leaves help to:",
    questionAr: "تساعد الطبقة الشمعية السميكة (الكوتين) على أوراق النبات في:",
    options: [
      { key: 'A', textEn: 'Increase water loss', textAr: 'زيادة فقدان الماء' },
      { key: 'B', textEn: 'Reduce water loss', textAr: 'تقليل فقدان الماء بالنتح (Reduce water loss)' },
      { key: 'C', textEn: 'Stop photosynthesis', textAr: 'إيقاف البناء الضوئي' },
      { key: 'D', textEn: 'Prevent reproduction', textAr: 'منع التكاثر' }
    ],
    correctAnswer: 'B',
    topic: 'Plants vs Animals & Adaptations',
    topicAr: 'مقارنة النباتات بالحيوانات والتكيفات',
    explanationEn: "The hydrophobic waxy cuticle overlying the leaf epidermis acts as an impermeable barrier that substantially minimizes non-stomatal water loss (transpiration) and guards against desiccation.",
    explanationAr: "تعمل طبقة الكيوتيكل الشمعية كحاجز عازل يمنع تبخر الماء الزائد من خلايا البشرة ويحمي النبات من الجفاف.",
    pharmaceuticalInsight: "Plant epicuticular waxes (such as Carnauba wax from Copernicia prunifera) are widely formulated as pharmaceutical tablet coatings.",
    keywords: ['Cuticle', 'Water loss', 'Xerophytic adaptation']
  },
  {
    id: 31,
    questionEn: "Deep root systems are particularly useful for plants living in:",
    questionAr: "تُعد أنظمة الجذور العميقة مفيدة بشكل خاص للنباتات التي تعيش في:",
    options: [
      { key: 'A', textEn: 'Arid regions', textAr: 'المناطق الجافة والقاحلة (Arid regions)' },
      { key: 'B', textEn: 'Deep oceans', textAr: 'أعماق المحيطات' },
      { key: 'C', textEn: 'Polar ice only', textAr: 'الجليد القطبي فقط' },
      { key: 'D', textEn: 'Completely dark environments', textAr: 'البيئات المظلمة كلياً' }
    ],
    correctAnswer: 'A',
    topic: 'Plants vs Animals & Adaptations',
    topicAr: 'مقارنة النباتات بالحيوانات والتكيفات',
    explanationEn: "In arid and desert environments, xerophytes develop taproots reaching deep subterranean water tables to survive prolonged drought periods.",
    explanationAr: "في المناطق الجافة والصحراوية، تمتد الجذور الوتدية إلى أعماق سحيقة للوصول إلى المياه الجوفية الرطبة والتغلب على الجفاف.",
    pharmaceuticalInsight: "Desert plants (like Aloe and Senna) developed robust biochemical stress pathways that yield unique anthraquinone and resin compounds.",
    keywords: ['Arid regions', 'Taproots', 'Xerophytes']
  },
  {
    id: 32,
    questionEn: "Plants are considered primary producers because they:",
    questionAr: "تُعتبر النباتات منتجات أولية (Primary producers) في النظام البيئي لأنها:",
    options: [
      { key: 'A', textEn: 'Consume animals', textAr: 'تتغذى على الحيوانات' },
      { key: 'B', textEn: 'Convert solar energy into chemical energy', textAr: 'تحول الطاقة الشمسية إلى طاقة كيميائية عضوية' },
      { key: 'C', textEn: 'Produce predators', textAr: 'تنتج كائنات مفترسة' },
      { key: 'D', textEn: 'Decompose organic matter', textAr: 'تُحلل المواد العضوية فقط' }
    ],
    correctAnswer: 'B',
    topic: 'Plants vs Animals & Adaptations',
    topicAr: 'مقارنة النباتات بالحيوانات والتكيفات',
    explanationEn: "Primary producers form the base of trophic food chains by synthesizing biomass directly from inorganic carbon using solar energy via photosynthesis.",
    explanationAr: "تمثل النباتات قاعدة الهرم الغذائي بقدرتها على تثبيت الطاقة الشمسية وتحويلها إلى مركبات سكرية وعضوية تغذي الكائنات الحية الأخرى.",
    pharmaceuticalInsight: "All herbal medicines originate from the photosynthetic energy capture of primary producers.",
    keywords: ['Primary producers', 'Solar energy', 'Chemical energy']
  },
  {
    id: 33,
    questionEn: "Plants help regulate climate by:",
    questionAr: "تساعد النباتات في تنظيم المناخ العالمي من خلال:",
    options: [
      { key: 'A', textEn: 'Absorbing oxygen and releasing carbon dioxide', textAr: 'امتصاص الأكسجين وإطلاق ثاني أكسيد الكربون' },
      { key: 'B', textEn: 'Absorbing carbon dioxide and releasing oxygen through photosynthesis', textAr: 'امتصاص ثاني أكسيد الكربون وإطلاق الأكسجين عبر البناء الضوئي' },
      { key: 'C', textEn: 'Consuming other organisms', textAr: 'استهلاك الكائنات الأخرى' },
      { key: 'D', textEn: 'Producing heat', textAr: 'إنتاج الحرارة المباشرة' }
    ],
    correctAnswer: 'B',
    topic: 'Plants vs Animals & Adaptations',
    topicAr: 'مقارنة النباتات بالحيوانات والتكيفات',
    explanationEn: "Plants act as planetary carbon sinks by capturing atmospheric CO2 (a major greenhouse gas) and producing atmospheric oxygen (O2) via photosynthesis.",
    explanationAr: "تعمل النباتات كرئات خضراء للكوكب بامتصاص غاز ثاني أكسيد الكربون المسبب للاحتباس الحراري وطرح غاز الأكسجين الضروري للحياة.",
    pharmaceuticalInsight: "Protecting botanical ecosystems secures natural biodiversity required for future biopharmaceutical discoveries.",
    keywords: ['Climate regulation', 'Carbon dioxide sink', 'Oxygen']
  },
  {
    id: 34,
    questionEn: "Botany is the scientific study of:",
    questionAr: "علم النبات (Botany) هو الدراسة العلمية لـ:",
    options: [
      { key: 'A', textEn: 'Animals only', textAr: 'الحيوانات فقط' },
      { key: 'B', textEn: 'Plants', textAr: 'النباتات (Plants)' },
      { key: 'C', textEn: 'Microorganisms only', textAr: 'الكائنات الدقيقة فقط' },
      { key: 'D', textEn: 'Human anatomy', textAr: 'تشريح جسم الإنسان' }
    ],
    correctAnswer: 'B',
    topic: 'Botanical Importance & Medicine',
    topicAr: 'أهمية النباتات والطب الدوائي',
    explanationEn: "Botany (plant science / phytology) is the branch of biological sciences dedicated to the comprehensive study of plant life, structure, physiology, genetics, and ecology.",
    explanationAr: "علم النبات هو الفرع العلمي المتخصص في دراسة النباتات بمختلف جوانبها التركيبية، الوظيفية، الوراثية، والتصنيفية.",
    pharmaceuticalInsight: "Pharmaceutical Botany bridges classical plant biology with pharmacognosy, focusing on medicinal flora and drug discovery.",
    keywords: ['Botany', 'Phytology', 'Plant science']
  },
  {
    id: 35,
    questionEn: "Which of the following is included in the study of botany?",
    questionAr: "أي مما يلي يدخل ضمن مجالات دراسة علم النبات؟",
    options: [
      { key: 'A', textEn: 'Plant structure', textAr: 'تركيب وتشريح النبات' },
      { key: 'B', textEn: 'Plant reproduction', textAr: 'تكاثر وتناسل النبات' },
      { key: 'C', textEn: 'Plant classification', textAr: 'تصنيف النبات وتسميته' },
      { key: 'D', textEn: 'All of the above', textAr: 'جميع ما سبق (All of the above)' }
    ],
    correctAnswer: 'D',
    topic: 'Botanical Importance & Medicine',
    topicAr: 'أهمية النباتات والطب الدوائي',
    explanationEn: "Botany encompasses anatomy, morphology, cytology, physiology, genetics, reproduction, taxonomy, and evolutionary relationships of all plant groups.",
    explanationAr: "يشمل علم النبات دراسة البنية والتشريح، وطرق التكاثر، والأنظمة التصنيفية، والعمليات الحيوية، لذا فالإجابة هي جميع ما ذكر.",
    pharmaceuticalInsight: "Pharmacists need comprehensive botanical knowledge to accurately identify crude herbal drugs and avoid toxic adulterants.",
    keywords: ['Botany scope', 'Plant structure', 'Classification']
  },
  {
    id: 36,
    questionEn: "Botanical research contributes to food security by:",
    questionAr: "يُسهم البحث العلمي في مجال النبات في تحقيق الأمن الغذائي من خلال:",
    options: [
      { key: 'A', textEn: 'Reducing crop productivity', textAr: 'تقليل إنتاجية المحاصيل' },
      { key: 'B', textEn: 'Improving crop productivity and resilience', textAr: 'تحسين إنتاجية المحاصيل ورفع مقاومتها للظروف القاسية' },
      { key: 'C', textEn: 'Eliminating crop varieties', textAr: 'القضاء على أصناف المحاصيل المتنوعة' },
      { key: 'D', textEn: 'Preventing disease-resistant crops', textAr: 'منع استنباط سلالات مقاومة للأمراض' }
    ],
    correctAnswer: 'B',
    topic: 'Botanical Importance & Medicine',
    topicAr: 'أهمية النباتات والطب الدوائي',
    explanationEn: "Botanical research develops high-yielding cultivars, drought-tolerant strains, and pest-resistant crops to secure stable food supplies for a growing global population.",
    explanationAr: "تساهم الأبحاث النباتية في استنباط سلالات زراعية وفيرة الإنتاج وأكثر قدرة على تحمل الجفاف والملوحة ومقاومة الآفات.",
    pharmaceuticalInsight: "Nutraceutical and functional food development directly stems from botanical food crop enhancement.",
    keywords: ['Food security', 'Crop yield', 'Resilience']
  },
  {
    id: 37,
    questionEn: "Many plants are important in medicine because they produce:",
    questionAr: "تكتسب العديد من النباتات أهمية بالغة في الطب والصيدلة لأنها تنتج:",
    options: [
      { key: 'A', textEn: 'Bioactive compounds', textAr: 'مركبات حيوية فعالة (Bioactive compounds)' },
      { key: 'B', textEn: 'Only carbohydrates', textAr: 'كربوهيدرات فقط' },
      { key: 'C', textEn: 'Only oxygen', textAr: 'أكسجين فقط' },
      { key: 'D', textEn: 'Inorganic salts only', textAr: 'أملاحاً معدنية غير عضوية فقط' }
    ],
    correctAnswer: 'A',
    topic: 'Botanical Importance & Medicine',
    topicAr: 'أهمية النباتات والطب الدوائي',
    explanationEn: "Plants synthesize diverse bioactive secondary metabolites—such as alkaloids, cardiac glycosides, flavonoids, tannins, and terpenoids—that exert potent therapeutic actions in humans.",
    explanationAr: "تنتج النباتات مستقلبات ثانوية فعالة حيوياً مثل القلويدات والجليكوسيدات والفلافونويدات التي تشكل الأساس الدوائي لعشرات العقاقير المنقذة للحياة.",
    pharmaceuticalInsight: "Over 25% of modern prescription drugs are directly derived from plant bioactive compounds (e.g. Digoxin, Morphine, Quinine).",
    keywords: ['Bioactive compounds', 'Phytotherapy', 'Secondary metabolites']
  },
  {
    id: 38,
    questionEn: "Botanical research can contribute to environmental conservation by:",
    questionAr: "يمكن للبحث النباتي المساهمة في حماية البيئة وصونها من خلال:",
    options: [
      { key: 'A', textEn: 'Increasing soil erosion', textAr: 'زيادة انجراف التربة' },
      { key: 'B', textEn: 'Protecting plant biodiversity', textAr: 'حماية التنوع الحيوي النباتي وصونه' },
      { key: 'C', textEn: 'Destroying habitats', textAr: 'تدمير الموائل الطبيعية' },
      { key: 'D', textEn: 'Increasing pollution', textAr: 'زيادة التلوث البيئي' }
    ],
    correctAnswer: 'B',
    topic: 'Botanical Importance & Medicine',
    topicAr: 'أهمية النباتات والطب الدوائي',
    explanationEn: "Botanical research maps endangered species, establishes seed conservation banks, and restores degraded habitats to safeguard global plant biodiversity.",
    explanationAr: "يساهم علم النبات في حماية وتوثيق النباتات المهددة بالانقراض وإنشاء بنوك الجينات وحماية التنوع البيولوجي للنظم البيئية.",
    pharmaceuticalInsight: "Conserving wild botanical species prevents the loss of undiscovered medicinal plant lineages before their chemistries can be evaluated.",
    keywords: ['Biodiversity', 'Conservation', 'Ecology']
  },
  {
    id: 39,
    questionEn: "Plants contribute to climate-change mitigation by:",
    questionAr: "تساهم النباتات في الحد من آثار التغير المناخي عبر:",
    options: [
      { key: 'A', textEn: 'Releasing more carbon dioxide', textAr: 'إطلاق كميات أكبر من ثاني أكسيد الكربون' },
      { key: 'B', textEn: 'Sequestering carbon dioxide through photosynthesis', textAr: 'احتجاز وتخزين ثاني أكسيد الكربون عبر البناء الضوئي' },
      { key: 'C', textEn: 'Preventing carbon storage', textAr: 'منع تخزين الكربون في التربة' },
      { key: 'D', textEn: 'Increasing atmospheric pollution', textAr: 'زيادة ملوثات الغلاف الجوي' }
    ],
    correctAnswer: 'B',
    topic: 'Botanical Importance & Medicine',
    topicAr: 'أهمية النباتات والطب الدوائي',
    explanationEn: "Through carbon sequestration, plants absorb atmospheric CO2 and incorporate carbon atoms into stable woody biomass, mitigating global warming.",
    explanationAr: "تحتجز النباتات الكربون في أنسجتها الخشبية وأوراقها من خلال التمثيل الضوئي، مما يقلل من تركيز الغازات الدفيئة في الغلاف الجوي.",
    pharmaceuticalInsight: "Sustainable forestry and medicinal plant farming contribute directly to carbon credit programs.",
    keywords: ['Carbon sequestration', 'Climate change', 'Photosynthesis']
  },
  {
    id: 40,
    questionEn: "Genetic engineering can be used to:",
    questionAr: "يمكن استخدام الهندسة الوراثية النباتية في:",
    options: [
      { key: 'A', textEn: 'Improve crop traits', textAr: 'تحسين صفات وخصائص المحاصيل (Improve crop traits)' },
      { key: 'B', textEn: 'Increase pest susceptibility', textAr: 'زيادة حساسية النبات للآفات' },
      { key: 'C', textEn: 'Reduce nutritional value', textAr: 'خفض القيمة الغذائية للمحصول' },
      { key: 'D', textEn: 'Eliminate plant diversity', textAr: 'القضاء على التنوع النباتي' }
    ],
    correctAnswer: 'A',
    topic: 'Botanical Importance & Medicine',
    topicAr: 'أهمية النباتات والطب الدوائي',
    explanationEn: "Plant biotechnology and genetic engineering allow precise insertion of beneficial genes to enhance crop yield, pest resistance, nutritional profiles, and drought tolerance.",
    explanationAr: "تتيح الهندسة الوراثية تحسين سمات المحاصيل مثل رفع مناعتها ضد الآفات، وزيادة محتواها الغذائي، وتحسين جودتها الطبية.",
    pharmaceuticalInsight: "Molecular farming uses genetically engineered plants as biological factories to synthesize recombinant antibodies and human vaccines.",
    keywords: ['Genetic engineering', 'Biotechnology', 'Crop traits']
  },
  {
    id: 41,
    questionEn: "Plant Anatomy and Morphology deals with:",
    questionAr: "يختص فرع تشريح ومورفولوجيا النبات (Anatomy & Morphology) بدراسة:",
    options: [
      { key: 'A', textEn: 'Internal structure and external form of plants', textAr: 'التركيب الداخلي والشكل الظاهري للنباتات' },
      { key: 'B', textEn: 'Animal behavior', textAr: 'سلوك الحيوانات' },
      { key: 'C', textEn: 'Human physiology', textAr: 'فيزيولوجيا جسم الإنسان' },
      { key: 'D', textEn: 'Chemical reactions only', textAr: 'التفاعلات الكيميائية المعزولة فقط' }
    ],
    correctAnswer: 'A',
    topic: 'Branches & Scopes of Botany',
    topicAr: 'فروع ومجالات علم النبات',
    explanationEn: "Morphology studies the external physical forms and organ arrangements of plants, while Anatomy investigates internal tissue and cellular micro-structures (often via microscopy).",
    explanationAr: "المورفولوجيا تدرس الشكل الخارجي للنبات وأعضائه، بينما التشريح يدرس البنية النسيجية والخلوية الداخلية تحت المجهر.",
    pharmaceuticalInsight: "Microscopic anatomical examination of stomata, trichomes, and calcium oxalate crystals is essential in pharmacognostic purity testing.",
    keywords: ['Plant Anatomy', 'Plant Morphology', 'Internal structure']
  },
  {
    id: 42,
    questionEn: "Plant physiology investigates:",
    questionAr: "يبحث علم وظائف أعضاء النبات (Plant Physiology) في:",
    options: [
      { key: 'A', textEn: 'Photosynthesis and respiration', textAr: 'البناء الضوئي والتنفس الخلوي' },
      { key: 'B', textEn: 'Water and nutrient uptake', textAr: 'امتصاص ونقل الماء والمغذيات' },
      { key: 'C', textEn: 'Hormone regulation', textAr: 'التنظيم الهرموني للنمو' },
      { key: 'D', textEn: 'All of the above', textAr: 'جميع ما سبق (All of the above)' }
    ],
    correctAnswer: 'D',
    topic: 'Branches & Scopes of Botany',
    topicAr: 'فروع ومجالات علم النبات',
    explanationEn: "Plant physiology is the study of how plants function, encompassing vital biochemical and biophysical mechanisms including photosynthesis, respiration, transpiration, mineral transport, and phytohormones.",
    explanationAr: "يدرس علم الفسيولوجيا كل العمليات الوظيفية والحيوية للنبات: كالتمثيل الضوئي، التنفس، النقل الوعائي، والإشارات الهرمونية، لذا فالإجابة جميع ما سبق.",
    pharmaceuticalInsight: "Manipulating plant hormone physiology (e.g. jasmonic acid elicitation) dramatically boosts production of pharmaceutical alkaloids.",
    keywords: ['Plant physiology', 'Hormones', 'Respiration']
  },
  {
    id: 43,
    questionEn: "Plant taxonomy and systematics involve:",
    questionAr: "يشمل علم تصنيف النبات والأنظمة الحيوية (Taxonomy & Systematics):",
    options: [
      { key: 'A', textEn: 'Identifying and naming plants', textAr: 'التعرف على النباتات وتسميتها علمياً' },
      { key: 'B', textEn: 'Classifying plants based on characteristics and evolutionary relationships', textAr: 'تصنيف النباتات وفقاً لخصائصها وروابطها التطورية' },
      { key: 'C', textEn: 'Organizing plant species hierarchically', textAr: 'تنظيم الأنواع النباتية في مراتب هرمية' },
      { key: 'D', textEn: 'All of the above', textAr: 'جميع ما سبق (All of the above)' }
    ],
    correctAnswer: 'D',
    topic: 'Branches & Scopes of Botany',
    topicAr: 'فروع ومجالات علم النبات',
    explanationEn: "Taxonomy deals with identification, nomenclature (binomial binomials like Mentha piperita L.), and hierarchical classification based on cladistic and evolutionary relationships.",
    explanationAr: "يتضمن علم التصنيف التعرف على الأنواع، التسمية العلمية الثنائية، والترتيب الهرمي الممنهج المبني على القرابة التطورية والصفات المشتركة.",
    pharmaceuticalInsight: "Correct taxonomic identification (using pharmacopoeial monographs) prevents fatal dispensing mistakes (e.g. confusing Foxglove with Comfrey).",
    keywords: ['Taxonomy', 'Systematics', 'Binomial nomenclature']
  },
  {
    id: 44,
    questionEn: "Plant ecology focuses mainly on:",
    questionAr: "يركز علم البيئة النباتية (Plant Ecology) بشكل أساسي على:",
    options: [
      { key: 'A', textEn: 'Interactions between plants and their environment', textAr: 'التفاعلات والعلاقات المتبادلة بين النباتات وبيئتها' },
      { key: 'B', textEn: 'Plant naming only', textAr: 'تسمية النباتات فقط' },
      { key: 'C', textEn: 'Plant cell division only', textAr: 'انقسام الخلايا النباتية فقط' },
      { key: 'D', textEn: 'Pharmaceutical manufacturing only', textAr: 'التصنيع الدوائي فقط' }
    ],
    correctAnswer: 'A',
    topic: 'Branches & Scopes of Botany',
    topicAr: 'فروع ومجالات علم النبات',
    explanationEn: "Plant ecology investigates the interactions between plants and their biotic (pollinators, herbivores, microbes) and abiotic (soil, sunlight, water, climate) environments.",
    explanationAr: "يدرس علم البيئة النباتية العلاقات المتبادلة والتأثيرات المشتركة بين النبات ومحيطه الحيوي وغير الحيوي.",
    pharmaceuticalInsight: "Ecological environmental stress (UV radiation, altitude) strongly stimulates the synthesis of defensive medicinal antioxidants like polyphenols.",
    keywords: ['Plant ecology', 'Biotic factors', 'Environment']
  },
  {
    id: 45,
    questionEn: "Plant genetics and molecular biology study:",
    questionAr: "يختص علم وراثة النبات والبيولوجيا الجزيئية بدراسة:",
    options: [
      { key: 'A', textEn: 'Genetic makeup and molecular mechanisms', textAr: 'التركيب الوراثي والآليات الجزيئية داخل خلايا النبات' },
      { key: 'B', textEn: 'Weather only', textAr: 'أحوال الطقس فقط' },
      { key: 'C', textEn: 'Animal behavior', textAr: 'سلوك الحيوانات' },
      { key: 'D', textEn: 'Soil erosion only', textAr: 'انجراف التربة فقط' }
    ],
    correctAnswer: 'A',
    topic: 'Branches & Scopes of Botany',
    topicAr: 'فروع ومجالات علم النبات',
    explanationEn: "This field investigates plant genomes, gene expression, heredity patterns, and molecular pathways governing growth, development, and secondary metabolite production.",
    explanationAr: "يبحث هذا العلم في الجينات، تسلسل الـ DNA، والمسارات الإنزيمية الجزيئية المسؤولة عن تشكيل صفات النبات وتخليق مركباته.",
    pharmaceuticalInsight: "Deciphering plant biosynthetic gene clusters has allowed bioengineers to synthesize artemisinin (anti-malarial) inside yeast.",
    keywords: ['Plant genetics', 'Molecular biology', 'Gene expression']
  },
  {
    id: 46,
    questionEn: "DNA sequencing is associated with:",
    questionAr: "يرتبط تحليل تسلسل الحمض النووي (DNA sequencing) بمجال:",
    options: [
      { key: 'A', textEn: 'Plant genetics and molecular biology', textAr: 'علم وراثة النبات والبيولوجيا الجزيئية' },
      { key: 'B', textEn: 'Plant morphology only', textAr: 'المورفولوجيا الظاهرية فقط' },
      { key: 'C', textEn: 'Ethnobotany only', textAr: 'علم النبات الشعبي فقط' },
      { key: 'D', textEn: 'Plant anatomy only', textAr: 'التشريح النسيجي فقط' }
    ],
    correctAnswer: 'A',
    topic: 'Branches & Scopes of Botany',
    topicAr: 'فروع ومجالات علم النبات',
    explanationEn: "DNA sequencing directly decodes nucleotide sequences (A, T, C, G) of plant genomes, serving as a core technique in modern plant molecular biology and genetics.",
    explanationAr: "تحديد تسلسل القواعد النيتروجينية في الـ DNA هو أداة مركزية في علم الوراثة والبيولوجيا الجزيئية لفهم التركيب الجيني للنبات.",
    pharmaceuticalInsight: "Next-generation DNA sequencing enables pharmaceutical quality control to detect counterfeit herbal supplements in powdered capsules.",
    keywords: ['DNA sequencing', 'Genomics', 'Molecular biology']
  },
  {
    id: 47,
    questionEn: "Plant biotechnology includes research on:",
    questionAr: "تشمل أبحاث التكنولوجيا الحيوية النباتية (Plant biotechnology):",
    options: [
      { key: 'A', textEn: 'Plant-derived pharmaceuticals', textAr: 'الأدوية والمستحضرات الصيدلانية المشتقة من النباتات' },
      { key: 'B', textEn: 'Biofuels', textAr: 'الوقود الحيوي المستدام' },
      { key: 'C', textEn: 'Biodegradable materials', textAr: 'المواد القابلة للتحلل الحيوي' },
      { key: 'D', textEn: 'All of the above', textAr: 'جميع ما سبق (All of the above)' }
    ],
    correctAnswer: 'D',
    topic: 'Branches & Scopes of Botany',
    topicAr: 'فروع ومجالات علم النبات',
    explanationEn: "Plant biotechnology applies genetic modification, tissue culture, and bioprocessing to develop pharmaceuticals, bioethanol/biodiesel, and bioplastics.",
    explanationAr: "تجمع التكنولوجيا الحيوية النباتية بين علوم الهندسة الوراثية وتطبيقات إنتاج الأدوية، والوقود الحيوي، والبوليمرات الصديقة للبيئة.",
    pharmaceuticalInsight: "Bioreactor plant cell suspension culture enables sustainable commercial production of rare oncolytic drugs like Taxol without felling Pacific yew trees.",
    keywords: ['Biotechnology', 'Plant pharmaceuticals', 'Biofuels']
  },
  {
    id: 48,
    questionEn: "Plant pathology deals primarily with:",
    questionAr: "يتعامل علم أمراض النبات (Plant Pathology) بشكل أساسي مع:",
    options: [
      { key: 'A', textEn: 'Plant diseases', textAr: 'أمراض النبات وطرق مكافحتها (Plant diseases)' },
      { key: 'B', textEn: 'Plant classification', textAr: 'تصنيف النباتات' },
      { key: 'C', textEn: 'Plant pollination only', textAr: 'تلقيح النبات فقط' },
      { key: 'D', textEn: 'Plant morphology only', textAr: 'الشكل الظاهري فقط' }
    ],
    correctAnswer: 'A',
    topic: 'Branches & Scopes of Botany',
    topicAr: 'فروع ومجالات علم النبات',
    explanationEn: "Plant pathology (phytopathology) is the scientific study of diseases in plants caused by biotic pathogens and environmental conditions, as well as disease management strategies.",
    explanationAr: "علم أمراض النبات يبحث في مسببات الأمراض النباتية، آليات العدوى، وتطوير استراتيجيات المقاومة والوقاية لحماية المحاصيل.",
    pharmaceuticalInsight: "Phytoalexins are antimicrobial compounds synthesized de novo by plants in response to pathogen attack, offering novel lead structures for human antibiotics.",
    keywords: ['Plant pathology', 'Phytopathology', 'Plant diseases']
  },
  {
    id: 49,
    questionEn: "Plant pathogens may include:",
    questionAr: "يمكن أن تشمل مسببات الأمراض النباتية (Pathogens):",
    options: [
      { key: 'A', textEn: 'Fungi', textAr: 'الفطريات' },
      { key: 'B', textEn: 'Bacteria', textAr: 'البكتيريا' },
      { key: 'C', textEn: 'Viruses and nematodes', textAr: 'الفيروسات والديدان الخيطية (النيماتودا)' },
      { key: 'D', textEn: 'All of the above', textAr: 'جميع ما سبق (All of the above)' }
    ],
    correctAnswer: 'D',
    topic: 'Branches & Scopes of Botany',
    topicAr: 'فروع ومجالات علم النبات',
    explanationEn: "Plant infectious diseases are caused by a diverse range of pathogens including fungi (the most common cause), pathogenic bacteria, plant viruses, viroids, and parasitic nematodes.",
    explanationAr: "تصاب النباتات بمسببات أمراض حيوية متعددة تشمل الفطريات، البكتيريا، الفيروسات، والديدان الأسطوانية، مسببة أضراراً بالغة للمحاصيل.",
    pharmaceuticalInsight: "Contamination of stored medicinal herbs by fungal pathogens (such as Aspergillus flavus producing aflatoxins) is a critical hazard in pharmaceutical quality assurance.",
    keywords: ['Pathogens', 'Fungi', 'Bacteria', 'Viruses']
  },
  {
    id: 50,
    questionEn: "Mycorrhizal fungi represent an example of:",
    questionAr: "تُمثل فطريات المايكورايزا (Mycorrhizal fungi) مثالاً على:",
    options: [
      { key: 'A', textEn: 'Beneficial plant-microbe interaction', textAr: 'التفاعل التكافلي المفيد بين النبات والميكروبات' },
      { key: 'B', textEn: 'Plant disease', textAr: 'مرض نباتي مدمر' },
      { key: 'C', textEn: 'Animal predation', textAr: 'افتراس حيواني' },
      { key: 'D', textEn: 'Asexual reproduction', textAr: 'تكاثر لاجنسي' }
    ],
    correctAnswer: 'A',
    topic: 'Branches & Scopes of Botany',
    topicAr: 'فروع ومجالات علم النبات',
    explanationEn: "Mycorrhizae are symbiotic mutualistic associations between fungi and plant roots. The fungus enhances water and mineral (especially phosphorus) uptake while receiving photosynthetic carbohydrates from the plant.",
    explanationAr: "فطريات المايكورايزا تشكل علاقة تكافلية نفعية مع جذور النبات، حيث تزود النبات بالماء والفسفور مقابل حصولها على الكربوهيدرات الناتجة من البناء الضوئي.",
    pharmaceuticalInsight: "Mycorrhizal colonization enhances the root accumulation of active medicinal glycosides in cultivated herbs.",
    keywords: ['Mycorrhizae', 'Symbiosis', 'Mutualism']
  },
  {
    id: 51,
    questionEn: "Ethnobotany studies:",
    questionAr: "يختص علم النبات الشعبي (Ethnobotany) بدراسة:",
    options: [
      { key: 'A', textEn: 'Traditional uses of plants by indigenous and local communities', textAr: 'الاستخدامات التقليدية والتراثية للنباتات لدى المجتمعات والشعوب الأصلية' },
      { key: 'B', textEn: 'Plant cell organelles only', textAr: 'عضيات الخلية النباتية فقط' },
      { key: 'C', textEn: 'Photosynthesis only', textAr: 'البناء الضوئي فقط' },
      { key: 'D', textEn: 'Plant diseases only', textAr: 'أمراض النبات فقط' }
    ],
    correctAnswer: 'A',
    topic: 'Branches & Scopes of Botany',
    topicAr: 'فروع ومجالات علم النبات',
    explanationEn: "Ethnobotany is the interdisciplinary scientific investigation of how indigenous human cultures traditionally perceive, classify, manage, and use native plants for healing, food, and culture.",
    explanationAr: "علم النبات العرقي أو الشعبي يدرس العلاقة بين البشر والنباتات، ويوثق كيفية استخدام القبائل والمجتمعات التقليدية للنباتات البرية في التداوي والعيش.",
    pharmaceuticalInsight: "Ethnobotanical field studies have been the primary historical route for discovering blockbuster pharmaceuticals (e.g. Aspirin, Quinine, Artemisinin).",
    keywords: ['Ethnobotany', 'Indigenous knowledge', 'Traditional medicine']
  },
  {
    id: 52,
    questionEn: "Traditional plant knowledge may include plant uses for:",
    questionAr: "يمكن أن تشمل المعرفة التراثية التقليدية بالنباتات استخدامها في:",
    options: [
      { key: 'A', textEn: 'Food', textAr: 'الغذاء والتغذية' },
      { key: 'B', textEn: 'Medicine', textAr: 'التطبيب والدواء' },
      { key: 'C', textEn: 'Clothing and shelter', textAr: 'صناعة الملابس والمأوى' },
      { key: 'D', textEn: 'All of the above', textAr: 'جميع ما سبق (All of the above)' }
    ],
    correctAnswer: 'D',
    topic: 'Branches & Scopes of Botany',
    topicAr: 'فروع ومجالات علم النبات',
    explanationEn: "Traditional knowledge systems utilize flora comprehensively across basic human needs: staple nutrition, natural herbal medicines, fiber for textile weaving, and timber for construction.",
    explanationAr: "تشمل المعارف التراثية القديمة توظيف النباتات في التغذية اليومية، العلاج الطبيعي، إنتاج ألياف الملابس، ومواد البناء والمسكن، لذا فالإجابة جميع ما سبق.",
    pharmaceuticalInsight: "Ethnopharmacology systematically validates traditional herbal recipes through modern chemical isolation and pharmacological bioassays.",
    keywords: ['Traditional knowledge', 'Herbal medicine', 'Fiber plants']
  },
  {
    id: 53,
    questionEn: "Ex situ plant conservation includes:",
    questionAr: "تشمل طرق الحفظ خارج الموطن الطبيعي (Ex situ conservation) للنباتات:",
    options: [
      { key: 'A', textEn: 'Botanical gardens and seed banks', textAr: 'الحدائق النباتية وبنوك البذور والجينات' },
      { key: 'B', textEn: 'Only natural forests', textAr: 'الغابات الطبيعية فقط' },
      { key: 'C', textEn: 'Predation', textAr: 'الافتراس' },
      { key: 'D', textEn: 'Soil erosion', textAr: 'انجراف التربة' }
    ],
    correctAnswer: 'A',
    topic: 'Branches & Scopes of Botany',
    topicAr: 'فروع ومجالات علم النبات',
    explanationEn: "Ex situ conservation preserves plant species outside their natural native habitats, specifically through botanical gardens, seed cryobanks, field genebanks, and in vitro germplasm repositories.",
    explanationAr: "الحفظ خارج الموطن الطبيعي يعني صون الأنواع النباتية بعيداً عن بيئتها البرية، كما في الحدائق النباتية المتخصصة وبنوك حفظ البذور المجمدة.",
    pharmaceuticalInsight: "Seed banks ensure the indefinite survival of rare medicinal plant germplasm against deforestation and climate extinction.",
    keywords: ['Ex situ conservation', 'Seed banks', 'Botanical gardens']
  },
  {
    id: 54,
    questionEn: "Species reintroduction programs are associated with:",
    questionAr: "ترتبط برامج إعادة توطين الأنواع (Species reintroduction) بمجال:",
    options: [
      { key: 'A', textEn: 'Plant conservation and biodiversity', textAr: 'صون النباتات وحماية التنوع البيولوجي' },
      { key: 'B', textEn: 'Metabolism', textAr: 'عمليات الأيض والتمثيل' },
      { key: 'C', textEn: 'Catabolism', textAr: 'عمليات الهدم' },
      { key: 'D', textEn: 'Homeostasis', textAr: 'الاتزان الداخلي' }
    ],
    correctAnswer: 'A',
    topic: 'Branches & Scopes of Botany',
    topicAr: 'فروع ومجالات علم النبات',
    explanationEn: "Reintroduction programs release cultivated or banked plant species back into their historical natural habitats to restore depleted populations and preserve ecological biodiversity.",
    explanationAr: "برامج إعادة التوطين تهدف لإعادة إكثار وغرس الأنواع النباتية في موائلها الطبيعية الأصلية لاستعادة التوازن البيئي وحماية التنوع الحيوي.",
    pharmaceuticalInsight: "Over-harvested wild medicinal species (like wild Goldenseal or Echinacea) require systematic reintroduction protocols.",
    keywords: ['Reintroduction', 'Biodiversity', 'Plant conservation']
  },
  {
    id: 55,
    questionEn: "Which field studies plant diseases and disease-management strategies?",
    questionAr: "أي المجالات العلمية يختص بدراسة أمراض النبات واستراتيجيات مكافحتها؟",
    options: [
      { key: 'A', textEn: 'Ethnobotany', textAr: 'علم النبات الشعبي' },
      { key: 'B', textEn: 'Plant pathology', textAr: 'علم أمراض النبات (Plant pathology)' },
      { key: 'C', textEn: 'Plant morphology', textAr: 'مورفولوجيا النبات' },
      { key: 'D', textEn: 'Plant taxonomy', textAr: 'علم تصنيف النبات' }
    ],
    correctAnswer: 'B',
    topic: 'Branches & Scopes of Botany',
    topicAr: 'فروع ومجالات علم النبات',
    explanationEn: "Plant pathology specifically researches the etiology, mechanisms, epidemiology, and practical control interventions for agricultural and botanical plant diseases.",
    explanationAr: "علم أمراض النبات (Phytopathology) هو العلم المكرس لتشخيص الأمراض الفطرية والبكتيرية والفيروسية ووضع برامج الحماية والمكافحة.",
    pharmaceuticalInsight: "Controlling plant blights prevents massive economic crop failures and toxin production in medicinal crops.",
    keywords: ['Plant pathology', 'Disease management', 'Crop protection']
  },
  {
    id: 56,
    questionEn: "Which field studies the relationships between plants, animals, fungi and microbes?",
    questionAr: "أي المجالات يدرس العلاقات المتبادلة بين النباتات والحيوانات والفطريات والميكروبات؟",
    options: [
      { key: 'A', textEn: 'Plant ecology', textAr: 'علم البيئة النباتية (Plant ecology)' },
      { key: 'B', textEn: 'Plant anatomy', textAr: 'علم تشريح النبات' },
      { key: 'C', textEn: 'Plant nomenclature', textAr: 'التسمية النباتية' },
      { key: 'D', textEn: 'Plant morphology', textAr: 'مورفولوجيا النبات' }
    ],
    correctAnswer: 'A',
    topic: 'Branches & Scopes of Botany',
    topicAr: 'فروع ومجالات علم النبات',
    explanationEn: "Community and ecosystem plant ecology analyzes multi-trophic biotic interactions—including herbivory, mycorrhizal associations, pollination symbioses, and allelopathy.",
    explanationAr: "علم البيئة النباتية يدرس الشبكة المعقدة من العلاقات الحيوية بين النبات والكائنات الأخرى كالميكروبات، الفطريات، الحشرات والحيوانات في مجتمع بيئي مشترك.",
    pharmaceuticalInsight: "Allelopathy (chemical inhibition of competing plants by root exudates) provides templates for bio-herbicides and novel antibiotics.",
    keywords: ['Plant ecology', 'Symbiosis', 'Biotic interactions']
  },
  {
    id: 57,
    questionEn: "Which of the following is a major role of plants in ecosystems?",
    questionAr: "أي مما يلي يمثل دوراً حيوياً رئيسياً للنباتات في النظم البيئية؟",
    options: [
      { key: 'A', textEn: 'Providing food and oxygen', textAr: 'توفير الغذاء والأكسجين (Providing food and oxygen)' },
      { key: 'B', textEn: 'Acting only as consumers', textAr: 'العمل كمستهلكات فقط' },
      { key: 'C', textEn: 'Destroying biodiversity', textAr: 'تدمير التنوع البيولوجي' },
      { key: 'D', textEn: 'Preventing nutrient cycling', textAr: 'إعاقة تدوير المغذيات' }
    ],
    correctAnswer: 'A',
    topic: 'Branches & Scopes of Botany',
    topicAr: 'فروع ومجالات علم النبات',
    explanationEn: "Plants are foundational to terrestrial life; by fixing carbon and liberating O2 through photosynthesis, they deliver both the oxygen that aerobic organisms breathe and the caloric energy sustaining trophic webs.",
    explanationAr: "تلعب النباتات دور العمود الفقري للحياة على الأرض، حيث تزود الكائنات بالأكسجين اللازم للتنفس والغذاء العضوي اللازم للبقاء.",
    pharmaceuticalInsight: "Ecosystem stability provided by healthy botanical communities preserves habitats essential for global medicinal biodiversity.",
    keywords: ['Oxygen production', 'Food web', 'Ecosystem role']
  },
  {
    id: 58,
    questionEn: "Plants help prevent soil erosion by:",
    questionAr: "تساعد النباتات في منع انجراف التربة وتآكلها من خلال:",
    options: [
      { key: 'A', textEn: 'Their ecological roles in maintaining ecosystem stability', textAr: 'دورها البيئي في تثبيت التربة بشبكات الجذور واستقرار النظام البيئي' },
      { key: 'B', textEn: 'Increasing water loss', textAr: 'زيادة فقدان المياه' },
      { key: 'C', textEn: 'Eliminating vegetation', textAr: 'إزالة الغطاء النباتي' },
      { key: 'D', textEn: 'Increasing atmospheric pollution', textAr: 'زيادة تلوث الهواء' }
    ],
    correctAnswer: 'A',
    topic: 'Branches & Scopes of Botany',
    topicAr: 'فروع ومجالات علم النبات',
    explanationEn: "Plant root architectures physically bind soil particles, while the aerial leaf canopy buffers rainfall kinetic energy, mitigating water and wind soil erosion and preserving ecosystem stability.",
    explanationAr: "تشابك الجذور النباتية يربط ذرات التربة معاً، كما تخفف الأوراق من وطأة تساقط الأمطار والرياح، مما يمنع جرف التربة الخصبة ويحافظ على ثبات النظام البيئي.",
    pharmaceuticalInsight: "Vegetation cover also prevents runoff of agricultural agrochemicals into aquatic and medicinal watersheds.",
    keywords: ['Soil erosion', 'Root binding', 'Ecosystem stability']
  },
  {
    id: 59,
    questionEn: "Which is NOT listed as a scope of botany in the document?",
    questionAr: "أي مما يلي لم يرد كمجال أو فرع من فروع علم النبات في المستند؟",
    options: [
      { key: 'A', textEn: 'Plant Ecology', textAr: 'علم البيئة النباتية' },
      { key: 'B', textEn: 'Plant Genetics', textAr: 'علم وراثة النبات' },
      { key: 'C', textEn: 'Plant Pathology', textAr: 'علم أمراض النبات' },
      { key: 'D', textEn: 'Human Anatomy', textAr: 'تشريح جسم الإنسان (Human Anatomy)' }
    ],
    correctAnswer: 'D',
    topic: 'Branches & Scopes of Botany',
    topicAr: 'فروع ومجالات علم النبات',
    explanationEn: "Human Anatomy is a medical and zoological science dealing with the structural morphology of the human body, not a sub-discipline or scope of botany (plant sciences).",
    explanationAr: "تشريح جسم الإنسان (Human Anatomy) هو فرع من العلوم الطبية والحيوانية وليس من فروع علم النبات (Botany).",
    pharmaceuticalInsight: "While distinct disciplines, human anatomy and plant sciences intersect in pharmacology where plant molecules bind human anatomical receptors.",
    keywords: ['Scopes of botany', 'Human anatomy', 'Non-botanical field']
  },
  {
    id: 60,
    questionEn: "The study of plant taxonomy provides a framework for understanding:",
    questionAr: "توفر دراسة علم تصنيف النبات (Plant Taxonomy) إطاراً علمياً لفهم:",
    options: [
      { key: 'A', textEn: 'Plant diversity and evolution', textAr: 'التنوع النباتي والمسارات التطورية (Plant diversity and evolution)' },
      { key: 'B', textEn: 'Animal migration only', textAr: 'هجرة الحيوانات فقط' },
      { key: 'C', textEn: 'Human development', textAr: 'تطور الإنسان' },
      { key: 'D', textEn: 'Weather patterns only', textAr: 'أنماط الطقس فقط' }
    ],
    correctAnswer: 'A',
    topic: 'Branches & Scopes of Botany',
    topicAr: 'فروع ومجالات علم النبات',
    explanationEn: "Plant taxonomy constructs systematic phylogenetic frameworks that illuminate how plant species evolved, their evolutionary divergence, and the vast morphological and genetic diversity across kingdom Plantae.",
    explanationAr: "يقدم علم تصنيف النبات إطاراً لفهم شجرة التطور النباتي والعلاقات الوراثية وتنوع ملايين الأنواع النباتية على سطح كوكبنا.",
    pharmaceuticalInsight: "Chemotaxonomy utilizes this evolutionary framework: closely related taxonomic plant families often produce similar therapeutic chemical compounds (e.g. Solanaceae alkaloids).",
    keywords: ['Taxonomy', 'Evolution', 'Plant diversity', 'Phylogeny']
  }
];

export const TOPICS_LIST: { id: string; nameEn: string; nameAr: string; count: number }[] = [
  { id: 'all', nameEn: 'All Topics', nameAr: 'جميع المواضيع', count: 60 },
  { id: 'Cell & Living Characteristics', nameEn: 'Cells & Living Characteristics', nameAr: 'الخلية وخصائص الحياة', count: 5 },
  { id: 'Metabolism & Homeostasis', nameEn: 'Metabolism & Homeostasis', nameAr: 'الأيض والاتزان الداخلي', count: 5 },
  { id: 'Growth, Genetics & DNA', nameEn: 'Growth, Development & DNA', nameAr: 'النمو والتطور والوراثة', count: 5 },
  { id: 'Reproduction & Tropisms', nameEn: 'Reproduction & Tropisms', nameAr: 'التكاثر وحركات الانتحاء', count: 6 },
  { id: 'Plants vs Animals & Adaptations', nameEn: 'Plants vs Animals & Adaptations', nameAr: 'مقارنة النبات بالحيوان والتكيفات', count: 12 },
  { id: 'Botanical Importance & Medicine', nameEn: 'Importance & Pharmaceutical Value', nameAr: 'أهمية النبات والقيمة الدوائية', count: 7 },
  { id: 'Branches & Scopes of Botany', nameEn: 'Branches & Scopes of Botany', nameAr: 'فروع ومجالات علم النبات', count: 20 },
];
