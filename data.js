/* ===== ملف البيانات: أضف ما شئت من العناصر في أي مصفوفة ===== */
const SITE={name:"Arafa Al dood",uni:"Al-Zaeem Al-Azhari University",fac:"Faculty of Public Health",batch:"Batch 31",
photo:"images/profile.png",email:"muzamiltaki893@gmail.com"};

/* الشريط المتحرك 📣 — ar يظهر في العربية ويتحرك من اليسار لليمين، en يظهر في الإنجليزية ويتحرك من اليمين لليسار */
const TICKER={ar:["مرحباً بكم في منصتنا .. معاً من أجل مجتمع أكثر صحة","الوقاية خير من العلاج .. كونوا سفراء الصحة في مجتمعاتكم"],en:["Welcome to our platform .. Together for a healthier community","Prevention is better than cure .. be health ambassadors in your community"]};

/* المنشورات: التاريخ بصيغة YYYY-MM-DD — الأحدث يظهر في الصفحة الرئيسية */
const POSTS=[
{id:1,date:"2026-11-20",title:"الصحة سر الحياة",text:"لنحافظ على صحتنا .. فهي أغلى ما نملك. الوقاية خير من العلاج، والتوعية الصحية هي الخطوة الأولى نحو مجتمع سليم.",image:"images/posts/p1.jpg"},
{id:2,date:"2026-11-10",title:"اغسل يديك .. أنقذ حياة",text:"غسل اليدين بالماء والصابون لمدة 20 ثانية يقلل خطر انتقال كثير من الأمراض المعدية. اجعلها عادة يومية قبل الأكل وبعد استخدام المرحاض.",image:"images/posts/p2.jpg"},
{id:3,date:"2026-11-01",title:"انطلاق المنصة",text:"تم إطلاق منصة طلاب الصحة العامة لدعم الاختبارات والمراجع والأدوات. نرحب بملاحظاتكم عبر الدعم الفني.",image:"images/posts/p3.jpg"}
];

/* المواد: في كل سؤال الخيار الأول o[0] هو الصحيح — يقوم البرنامج بخلط الخيارات تلقائياً فلا يثبت موضع الإجابة */
/* المواد: بيانات تعريف المواد هنا، وأسئلة كل مادة في ملف JSON مستقل داخل مجلد questions */
const SUBJECTS=[
{id:"epi",name:"Environmental Health",desc:"ويهتم بدراسة العوامل البيئية المحيطة بالإنسان التي تؤثر في صحته، والعمل على منع المخاطر والأمراض الناتجة عنها..",questionFile:"questions/epi.json",questions:[]},
{id:"bio",name:"الإحصاء الحيوي",desc:"تطبيق الطرق الإحصائية على البيانات الصحية.",questionFile:"questions/bio.json",questions:[]},
{id:"env",name:"صحة البيئة",desc:"أثر البيئة على صحة الإنسان.",questionFile:"questions/env.json",questions:[]},
{id:"hep",name:"تعزيز الصحة والتثقيف",desc:"أساليب نشر الوعي وتغيير السلوك الصحي.",questionFile:"questions/hep.json",questions:[]},
{id:"mgt",name:"إدارة الخدمات الصحية",desc:"تخطيط وتنظيم وإدارة المرافق الصحية.",questionFile:"questions/mgt.json",questions:[]},
{id:"nut",name:"التغذية العامة",desc:"العناصر الغذائية ودورها في الصحة.",questionFile:"questions/nut.json",questions:[]},
{id:"occ",name:"الصحة المهنية",desc:"سلامة العاملين وبيئة العمل.",questionFile:"questions/occ.json",questions:[]},
{id:"inf",name:"الأمراض المعدية",desc:"أسباب العدوى وطرق انتقالها ومكافحتها.",questionFile:"questions/inf.json",questions:[]},
{id:"res",name:"طرق البحث العلمي",desc:"تصميم الدراسات وجمع البيانات وتحليلها.",questionFile:"questions/res.json",questions:[]}
];

/* المكتبة: ضع صورة الغلاف وملف PDF داخل المشروع (مجلد books) */
const BOOKS=[
{id:1,title:"مدخل إلى الصحة العامة",desc:"كتاب تمهيدي في مفاهيم الصحة العامة.",image:"books/b1.jpg",pdf:"books/b1.pdf"},
{id:2,title:"أساسيات الوبائيات",desc:"المفاهيم والمقاييس الأساسية في علم الوبائيات.",image:"books/b2.jpg",pdf:"books/b2.pdf"}
];

/* حزمة الأدوات: type = site أو tool أو app */
const KIT=[
{id:1,name:"منظمة الصحة العالمية",type:"site",image:"images/kit/who.png",link:"https://www.who.int",desc:"المصدر الدولي للإحصاءات والإرشادات الصحية."},
{id:2,name:"PubMed",type:"site",image:"images/kit/pubmed.png",link:"https://pubmed.ncbi.nlm.nih.gov",desc:"قاعدة بيانات الأبحاث الطبية المحكمة."},
{id:3,name:"Epi Info",type:"tool",image:"images/kit/epi.png",link:"https://www.cdc.gov/epiinfo",desc:"أداة مجانية من CDC لتحليل بيانات الوبائيات."},
{id:4,name:"Zotero",type:"tool",image:"images/kit/zotero.png",link:"https://www.zotero.org",desc:"تنظيم المراجع وتوليد الاقتباسات."},
{id:5,name:"KoboToolbox",type:"app",image:"images/kit/kobo.png",link:"https://www.kobotoolbox.org",desc:"تطبيق لجمع بيانات الاستبيانات الميدانية."},
{id:6,name:"Google Scholar",type:"site",image:"images/kit/scholar.png",link:"https://scholar.google.com",desc:"بحث في الأوراق العلمية."},
{id:7,name:"Claude",type:"ai",image:"images/kit/claude.png",link:"https://claude.ai",desc:"مساعد ذكاء اصطناعي من Anthropic للقراءة والكتابة والتحليل.",best:"الأقوى في قراءة الملفات والأبحاث الطويلة وتلخيصها، وتحرير النصوص الأكاديمية بأسلوب سليم، وشرح المفاهيم المعقدة خطوة بخطوة، وكتابة الأكواد وتحليل البيانات."},
{id:8,name:"ChatGPT",type:"ai",image:"images/kit/chatgpt.png",link:"https://chatgpt.com",desc:"مساعد ذكاء اصطناعي من OpenAI متعدد الاستخدامات.",best:"الأقوى في العصف الذهني والأفكار، وتحليل البيانات ورسم المخططات بالبايثون، وتوليد الصور، والمحادثة الصوتية، وتنوع الإضافات والأدوات."},
{id:9,name:"Gemini",type:"ai",image:"images/kit/gemini.png",link:"https://gemini.google.com",desc:"مساعد ذكاء اصطناعي من Google.",best:"الأقوى عند الربط مع خدمات Google (Docs وDrive وGmail) وبحث Google ويوتيوب، وفهم الصور والملفات الكبيرة."},
{id:10,name:"NotebookLM",type:"ai",image:"images/kit/notebooklm.png",link:"https://notebooklm.google.com",desc:"أداة من Google للمذاكرة من مصادرك أنت.",best:"الأقوى في المذاكرة: ارفع كتبك ومحاضراتك فيجيب فقط من مصادرك، ويصنع ملخصات وبطاقات مراجعة وأسئلة وملفات صوتية."},
{id:11,name:"Perplexity",type:"ai",image:"images/kit/perplexity.png",link:"https://www.perplexity.ai",desc:"محرك بحث بالذكاء الاصطناعي يذكر مصادره.",best:"الأقوى في البحث السريع عن معلومة حديثة مع روابط المصادر، ليكون نقطة بداية لإيجاد المراجع (تحقق منها دائماً)."},
{id:12,name:"Consensus",type:"ai",image:"images/kit/consensus.png",link:"https://consensus.app",desc:"محرك بحث في الأوراق العلمية المحكمة.",best:"الأقوى في معرفة ما تقوله الأبحاث العلمية عن سؤال صحي محدد وما درجة الاتفاق بين الدراسات."}
];

/* نشرة الصحة */
const HNEWS=[
{id:1,title:"التغذية المتوازنة أساس المناعة",text:"تناول الخضروات والفواكه والبروتينات والحبوب الكاملة يمنح الجسم ما يحتاجه لمقاومة الأمراض. اجعل طبقك متنوعاً الألوان.",image:"images/news/n1.jpg"},
{id:2,title:"النشاط البدني 150 دقيقة أسبوعياً",text:"توصي منظمة الصحة العالمية بـ150 دقيقة على الأقل من النشاط المعتدل أسبوعياً للبالغين للحد من أمراض القلب والسكري.",image:"images/news/n2.jpg"},
{id:3,title:"النوم الكافي صحة للجسم والعقل",text:"يحتاج البالغ إلى 7–9 ساعات نوم ليلاً. قلة النوم ترتبط بضعف التركيز وارتفاع ضغط الدم.",image:"images/news/n3.jpg"}
];

/* ألعاب: كلمات إنجليزية */
const WORDS=["Epidemiology","Vaccine","Hygiene","Sanitation","Nutrition","Prevalence","Incidence","Pandemic","Pathogen","Immunity","Screening","Outbreak"];

/* لعبة سلة الصحة: [الرمز, 1=صحي 0=ضار] */
const FOODS=[["🍎",1],["🥦",1],["🥕",1],["🍌",1],["🥛",1],["🐟",1],["🥗",1],["💧",1],["🍔",0],["🍟",0],["🍩",0],["🥤",0],["🍬",0],["🚬",0]];
/* لعبة ترتيب الخطوات: t = العنوان ، s = الخطوات بالترتيب الصحيح */
const STEPS=[
{t:"خطوات غسل اليدين",s:["بلّل اليدين بالماء","ضع الصابون","افرك الكفين وبين الأصابع 20 ثانية","اشطف جيداً","جفّف بمنشفة نظيفة"]},
{t:"خطوات التحقيق في فاشية مرضية",s:["تأكيد وجود الفاشية","وضع تعريف الحالة","البحث عن الحالات وعدّها","وصف الحالات (زمان/مكان/شخص)","وضع الفرضيات واختبارها","تطبيق إجراءات المكافحة"]},
{t:"خطوات تحضير محلول الإرواء الفموي",s:["اغسل يديك","استخدم ماءً نظيفاً مغلياً مبرداً","أضف كيس الأملاح إلى الكمية المحددة من الماء","قلّب حتى يذوب تماماً","قدّمه للمريض بجرعات صغيرة متكررة"]},
{t:"خطوات البحث العلمي",s:["تحديد المشكلة","مراجعة الأدبيات","صياغة الأهداف والفرضيات","تصميم الدراسة واختيار العينة","جمع البيانات","تحليل النتائج وكتابة التقرير"]}
];
