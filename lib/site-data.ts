export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const campus = {
  name: "Кыргызский государственный технический университет имени И. Раззакова — филиал в Кара-Куле",
  shortName: "Кара-Кульский технический институт КГТУ им. И. Раззакова",
  address: "Кыргызская Республика, город Кара-Куль, улица Сабирова, 2",
  phones: [
    "+996 (3746) 5-11-61",
    "+996 (3746) 5-17-51",
  ],
  officialSite: "https://kstu.kg/",
  branchSite: "https://kstu.kg/filialy/kara-kulskii-tekhnologicheskii-filial",
  yearFounded: 1963,
};

export const navItems: NavItem[] = [
  { label: "Главная", href: "/" },
  {
    label: "Об университете",
    href: "/about",
    children: [
      { label: "История", href: "/about/history" },
      { label: "Руководство", href: "/about/leadership" },
      { label: "Преподаватели", href: "/about/teachers" },
      { label: "Структура", href: "/about/structure" },
      { label: "Документы", href: "/about/documents" },
      { label: "Достижения", href: "/about/achievements" },
      { label: "Фотогалерея", href: "/about/gallery" },
    ],
  },
  {
    label: "Образование",
    href: "/education",
    children: [
      { label: "Бакалавриат", href: "/education/bachelor" },
      { label: "Колледж", href: "/education/college" },
      { label: "Программы", href: "/education" },
    ],
  },
  {
    label: "Абитуриентам",
    href: "/admission",
    children: [
      { label: "Как поступить", href: "/admission/how-to-apply" },
      { label: "Программы", href: "/admission/programs" },
      { label: "Документы", href: "/admission/documents" },
      { label: "Стоимость", href: "/admission/tuition" },
      { label: "FAQ", href: "/admission/faq" },
      { label: "Заявка", href: "/admission/application" },
    ],
  },
  {
    label: "Студентам",
    href: "/students",
    children: [
      { label: "Расписание", href: "/students/schedule" },
      { label: "Ресурсы", href: "/students/resources" },
      { label: "Библиотека", href: "/students/library" },
      { label: "Объявления", href: "/students/announcements" },
      { label: "Возможности", href: "/students/opportunities" },
    ],
  },
  { label: "Новости", href: "/news" },
  { label: "Контакты", href: "/contacts" },
];

export const stats = [
  { value: "1963", label: "год основания" },
  { value: "4", label: "образовательные направления" },
  { value: "6", label: "ключевых профилей" },
  { value: "100%", label: "техническая направленность" },
];

export const programs = [
  {
    slug: "electroenergetics",
    code: "640200",
    title: "Электроэнергетика и электротехника",
    description:
      "Подготовка специалистов по электроснабжению, электрическим станциям, сетям и автоматизации энергосистем.",
    level: "Бакалавриат",
    profiles: ["Электрические станции", "Электроснабжение", "Релейная защита", "Электрические сети и системы"],
  },
  {
    slug: "construction",
    code: "750500",
    title: "Строительство",
    description:
      "Инженерные дисциплины для гидротехнического строительства, проектирования и управления недвижимостью.",
    level: "Бакалавриат",
    profiles: ["Гидротехническое строительство", "Экспертиза и управление недвижимостью"],
  },
  {
    slug: "transport-processes",
    code: "670300",
    title: "Технология транспортных процессов",
    description:
      "Подготовка специалистов по организации дорожного движения и эффективности транспортных систем.",
    level: "Бакалавриат",
    profiles: ["Организация безопасности дорожного движения"],
  },
  {
    slug: "physics-math",
    code: "550200",
    title: "Физико-математическое образование",
    description:
      "Фундаментальная подготовка по физике, математике и научно-техническому мышлению.",
    level: "Бакалавриат",
    profiles: ["Физика", "Математика"],
  },
];

export const timeline = [
  { year: "1963", title: "Основание филиала", text: "Общетехнический факультет Фрунзенского политехнического института начал готовить инженеров для строительства Токтогульской ГЭС." },
  { year: "2009", title: "Переименование в филиал", text: "По приказу КГТУ филиал получил современное название Кара-Кульский филиал." },
  { year: "2010", title: "Организационные преобразования", text: "Филиал развивал управленческую структуру, оставаясь связанным с инженерным образованием региона." },
  { year: "2015", title: "Создание филиала в современной форме", text: "Филиал был оформлен как структурное подразделение в рамках современной организационной модели." },
];

export const faqItems = [
  { q: "Какие направления доступны?", a: "На данный момент в филиале представлены бакалаврские образовательные программы по электроэнергетике, строительству, технологии транспортных процессов и физико-математическому образованию." },
  { q: "Какие документы нужны для поступления?", a: "Обычно требуются документ об образовании, паспорт, справка о состоянии здоровья по необходимости, а также подтверждающие документы по установленной процедуре приёмной комиссии." },
  { q: "Как связаться с приёмной комиссией?", a: "Используйте контакты филиала, указанные на официальной странице и в разделе Контакты этого сайта. Для актуальных требований уточняйте информацию у приёмной комиссии." },
  { q: "Где находится филиал?", a: "Кыргызская Республика, город Кара-Куль, улица Сабирова, 2." },
  { q: "Какие формы обучения доступны?", a: "По официальным материалам филиал работает в формате очного и заочного обучения, а актуальные формы следует уточнять с приёмной комиссией." },
  { q: "Где узнать стоимость обучения?", a: "Сведения об оплате и условиях обучения подтверждаются через официальный приёмный процесс и администрацию филиала." },
];

export const documents = [
  { title: "Положение о приёме", type: "PDF", category: "Приём" },
  { title: "Правила внутреннего распорядка", type: "PDF", category: "Студентам" },
  { title: "Список образовательных программ", type: "PDF", category: "Образование" },
];

export const gallery = [
  { title: "Корпус и учебные аудитории", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" },
  { title: "Компьютерные классы", image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80" },
  { title: "Студенческая жизнь", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80" },
  { title: "Инженерные дисциплины", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80" },
];

export const news = [];

export const quickLinks = [
  { label: "Расписание", href: "/students/schedule" },
  { label: "Образовательные программы", href: "/education" },
  { label: "Документы", href: "/about/documents" },
  { label: "Контакты", href: "/contacts" },
];
