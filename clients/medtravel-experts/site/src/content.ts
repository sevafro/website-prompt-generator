/**
 * All site copy, in both languages.
 *
 * Source of truth: "MedicalTravel Experts — Business Plan & Service
 * Description (2025)". Wording here is condensed for the web but must not
 * add medical claims that are not in that document.
 */

export type Lang = 'en' | 'ru';

export interface Content {
  nav: { home: string; services: string; destinations: string; contact: string };
  hero: {
    badge: string;
    headingLine1: string;
    headingLine2: string;
    subtitle: string;
    cta: string;
    stats: { value: string; label: string }[];
  };
  about: {
    eyebrow: string;
    heading: string;
    positioning: string;
    body: string;
    team: { name: string; role: string; bio: string }[];
  };
  services: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: { key: string; title: string; body: string; points: string[] }[];
  };
  process: {
    eyebrow: string;
    heading: string;
    steps: { title: string; body: string }[];
    accreditationsLabel: string;
    accreditations: string[];
  };
  destinations: {
    eyebrow: string;
    heading: string;
    intro: string;
    filters: { all: string; medical: string; wellness: string; rehab: string };
    items: { flag: string; country: string; focus: string; tags: string[] }[];
    more: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    intro: string;
    name: string;
    contactField: string;
    contactPlaceholder: string;
    interest: string;
    interestOptions: string[];
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    privacy: string;
  };
  footer: {
    tagline: string;
    disclaimers: string[];
    rights: string;
  };
}

const en: Content = {
  nav: {
    home: 'Home',
    services: 'Services',
    destinations: 'Destinations',
    contact: 'Contact',
  },
  hero: {
    badge: 'your personal navigator in international healthcare',
    headingLine1: 'International Healthcare',
    headingLine2: 'Fully Organized.',
    subtitle: 'Check-ups, treatment, wellness and rehabilitation worldwide.',
    cta: 'Request a Free Consultation',
    stats: [
      { value: '15+ Years', label: 'In Medical Tourism' },
      { value: '10 Countries', label: 'Partner Destinations' },
    ],
  },
  about: {
    eyebrow: 'About us',
    heading: 'We find the right doctor and clinic anywhere in the world.',
    positioning:
      'We are not a clinic. We are not a travel agency. We are your personal navigator in international healthcare — matched to your situation, budget and goals.',
    body: 'MedTravel Experts is an international medical travel service for Russian-speaking and English-speaking clients living in the United States and Canada. You pay the clinic directly. We work under partnership agreements with medical institutions, and you receive the full scope, cost and payment terms of a program before any commitment is made.',
    team: [
      {
        name: 'Nadi Frolova',
        role: 'Co-Founder & Client Experience Director',
        bio: 'Process organization, first contact, trip coordination and support for Russian-speaking clients.',
      },
      {
        name: 'Olesya Kulikouski',
        role: 'Co-Founder & Medical Programs Director',
        bio: 'Medical doctor by education with 15+ years in medical tourism and hands-on experience with clinics in South Korea and beyond. Builds our medical programs and clinic relationships.',
      },
      {
        name: 'Vsevolod Frolov',
        role: 'Director of Business Development',
        bio: 'English-speaking client relations, partnerships, and support for clients across the US and Canada.',
      },
    ],
  },
  services: {
    eyebrow: 'What we organize',
    heading: 'Three ways we take care of the journey.',
    intro:
      'With physician agreement, several goals can be combined into a single trip — one trip, a comprehensive approach to your health.',
    items: [
      {
        key: 'medical',
        title: 'Medical Tourism',
        body: 'Comprehensive check-ups, diagnostics, planned treatment, surgery and second medical opinions at accredited international clinics — matched to your diagnosis, timeline and budget.',
        points: [
          'Check-ups and early diagnostics',
          'Second medical opinion',
          'Planned treatment and surgery',
          'Dentistry and aesthetic medicine',
        ],
      },
      {
        key: 'wellness',
        title: 'Preventive Health & Wellness',
        body: 'Care before a serious problem arises. Physician-led prevention, longevity, metabolic health and health-resort programs that begin with an assessment and a personalized plan.',
        points: [
          'Comprehensive screening',
          'Longevity and healthy aging',
          'Metabolic health and weight',
          'Thermal and balneological programs',
        ],
      },
      {
        key: 'rehab',
        title: 'International Rehabilitation',
        body: 'Individualized recovery after surgery, injury, stroke or extended treatment, delivered by a multidisciplinary team within one coordinated program.',
        points: [
          'Neurological and post-stroke',
          'Orthopedic and post-operative',
          'Cardiac and pulmonary',
          'Pediatric rehabilitation',
        ],
      },
    ],
  },
  process: {
    eyebrow: 'How it works',
    heading: 'From first question to follow-up.',
    steps: [
      {
        title: 'Tell us your situation',
        body: 'A free consultation, with no obligation. Share your diagnosis, goals, timeline and budget.',
      },
      {
        title: 'We match clinic and doctor',
        body: 'We only consider licensed institutions authorized to treat international patients, with a dedicated coordinator and disclosed physician qualifications.',
      },
      {
        title: 'You receive a clear proposal',
        body: 'Scope, cost and payment terms in writing, from the clinic, before you commit to anything.',
      },
      {
        title: 'We coordinate the trip',
        body: 'Travel, arrival, translation and clinic logistics — and we stay with you through post-treatment follow-up.',
      },
    ],
    accreditationsLabel: 'Accreditations we look for',
    accreditations: ['JCI', 'GHA', 'Temos International', 'ISO', 'KAHF'],
  },
  destinations: {
    eyebrow: 'Where we work',
    heading: 'Ten countries. One coordinated plan.',
    intro:
      'The right destination depends on your diagnosis, not on a brochure. Here is where our partner network is strongest.',
    filters: {
      all: 'All',
      medical: 'Medical',
      wellness: 'Wellness',
      rehab: 'Rehabilitation',
    },
    items: [
      {
        flag: '🇹🇷',
        country: 'Turkey',
        focus:
          'Check-ups, plastic surgery, hair transplantation, dentistry, bariatric surgery, oncology, cardiology, orthopedics. Partner clinic: ADATIP (JCI-accredited).',
        tags: ['medical', 'rehab'],
      },
      {
        flag: '🇰🇷',
        country: 'South Korea',
        focus:
          'Comprehensive diagnostics, oncology, complex and robotic surgery, orthopedics, neurosurgery and preventive health. Hospitals evaluated under the government KAHF program.',
        tags: ['medical', 'rehab'],
      },
      {
        flag: '🇩🇪',
        country: 'Germany',
        focus:
          'Advanced diagnostics, oncology, neurosurgery, cardiology, orthopedics, chronic disease management and complex rehabilitation.',
        tags: ['medical', 'wellness', 'rehab'],
      },
      {
        flag: '🇦🇹',
        country: 'Austria',
        focus:
          'Modern Mayr Medicine, digestive health, longevity and therapeutic nutrition, plus orthopedic, neurological and cardiac recovery.',
        tags: ['wellness', 'rehab', 'medical'],
      },
      {
        flag: '🇪🇸',
        country: 'Spain',
        focus:
          'Oncology, reproductive medicine, orthopedics, aesthetic medicine, longevity and medical wellness.',
        tags: ['medical', 'wellness'],
      },
      {
        flag: '🇨🇿',
        country: 'Czech Republic',
        focus:
          'Mineral waters and balneology, orthopedics, diagnostics, and both clinical and health-resort rehabilitation.',
        tags: ['wellness', 'rehab', 'medical'],
      },
      {
        flag: '🇨🇭',
        country: 'Switzerland',
        focus:
          'Advanced diagnostics, preventive health, longevity clinics and premium medical wellness.',
        tags: ['medical', 'wellness'],
      },
      {
        flag: '🇦🇪',
        country: 'UAE',
        focus:
          'International-standard clinics, diagnostics, preventive programs, surgery, aesthetic medicine and premium patient support.',
        tags: ['medical'],
      },
      {
        flag: '🇹🇭',
        country: 'Thailand',
        focus:
          'Plastic surgery, dentistry, orthopedics, comprehensive check-ups, stress and weight programs, recovery and resort wellness.',
        tags: ['medical', 'wellness'],
      },
      {
        flag: '🇲🇽',
        country: 'Mexico',
        focus:
          'Especially convenient from the US and Canada. Dentistry, bariatric surgery, plastic surgery, orthopedics and ophthalmology.',
        tags: ['medical'],
      },
      {
        flag: '🇸🇮',
        country: 'Slovenia',
        focus:
          'Thermal resorts and rehabilitation — musculoskeletal, orthopedic, neurological and cardiovascular recovery.',
        tags: ['wellness', 'rehab'],
      },
      {
        flag: '🇬🇪',
        country: 'Georgia',
        focus:
          'Mineral waters, balneological and climate programs, physiotherapy and recovery — an accessible health-resort format.',
        tags: ['wellness'],
      },
    ],
    more: 'Additional destinations — including Israel, Italy, Armenia, Hungary and India — are considered based on your specific medical needs.',
  },
  contact: {
    eyebrow: 'Start here',
    heading: 'Tell us what you need. We will find the way.',
    intro:
      'A first consultation is free and carries no obligation. We usually reply within one business day.',
    name: 'Name',
    contactField: 'WhatsApp or Email',
    contactPlaceholder: '+1 555 000 1234 or you@example.com',
    interest: 'Area of interest',
    interestOptions: [
      'Medical',
      'Wellness',
      'Rehabilitation',
      'Not sure — help me find out',
    ],
    message: 'Message',
    submit: 'Send Request',
    sending: 'Sending…',
    success: 'Thank you. Your request has been sent — we will be in touch shortly.',
    error: 'Something went wrong. Please write to us directly on WhatsApp or by email.',
    privacy:
      'Pricing is not published on this site. It depends on the program and the clinic, and is provided only through a personal consultation.',
  },
  footer: {
    tagline: 'International healthcare — fully organized.',
    disclaimers: [
      'MedTravel Experts is not a medical institution and does not diagnose conditions or prescribe treatment. All medical decisions are made by licensed physicians at the partner clinic.',
      'Accreditation is one of the selection criteria and does not guarantee treatment outcomes. The qualifications of the specific physician are assessed separately.',
      'PRP, ozone therapy and IV infusions are applied only after physician assessment and when medically indicated.',
    ],
    rights: 'All rights reserved.',
  },
};

const ru: Content = {
  nav: {
    home: 'Главная',
    services: 'Услуги',
    destinations: 'Направления',
    contact: 'Контакты',
  },
  hero: {
    badge: 'ваш личный навигатор в мировой медицине',
    headingLine1: 'Медицина мира —',
    headingLine2: 'под ключ.',
    subtitle: 'Чек-апы, лечение, оздоровление и реабилитация по всему миру.',
    cta: 'Бесплатная консультация',
    stats: [
      { value: '15+ лет', label: 'в медицинском туризме' },
      { value: '10 стран', label: 'направления-партнёры' },
    ],
  },
  about: {
    eyebrow: 'О нас',
    heading: 'Мы находим нужного врача и клинику в любой точке мира.',
    positioning:
      'Мы не клиника. Мы не турагентство. Мы ваш личный навигатор в международной медицине — с учётом вашей ситуации, бюджета и целей.',
    body: 'MedTravel Experts — международный сервис медицинских поездок для русскоязычных и англоязычных клиентов, живущих в США и Канаде. Вы оплачиваете медицинские услуги напрямую клинике. Мы работаем по партнёрским договорам с медицинскими учреждениями, и вы получаете полный объём, стоимость и условия оплаты программы до принятия любых решений.',
    team: [
      {
        name: 'Нади Фролова',
        role: 'Сооснователь, директор по работе с клиентами',
        bio: 'Организация процессов, первичное общение, координация поездки и сопровождение русскоязычных клиентов.',
      },
      {
        name: 'Олеся Куликовски',
        role: 'Сооснователь, директор медицинских программ',
        bio: 'Врач по образованию, более 15 лет в медицинском туризме, практический опыт работы с клиниками Южной Кореи и других стран. Развивает медицинские программы и отношения с клиниками.',
      },
      {
        name: 'Всеволод Фролов',
        role: 'Директор по развитию бизнеса',
        bio: 'Работа с англоязычными клиентами, партнёрства и поддержка клиентов из США и Канады.',
      },
    ],
  },
  services: {
    eyebrow: 'Что мы организуем',
    heading: 'Три направления заботы о вашем здоровье.',
    intro:
      'По согласованию с врачом несколько задач можно решить за одну поездку — одна поездка, комплексный подход к здоровью.',
    items: [
      {
        key: 'medical',
        title: 'Медицинский туризм',
        body: 'Комплексные чек-апы, диагностика, плановое лечение, операции и второе медицинское мнение в аккредитованных международных клиниках — с учётом диагноза, сроков и бюджета.',
        points: [
          'Чек-апы и ранняя диагностика',
          'Второе медицинское мнение',
          'Плановое лечение и операции',
          'Стоматология и эстетическая медицина',
        ],
      },
      {
        key: 'wellness',
        title: 'Профилактика и wellness',
        body: 'Забота о здоровье до того, как возникнет серьёзная проблема. Профилактика, долголетие, метаболическое здоровье и санаторные программы — начинаются с осмотра врача и персонального плана.',
        points: [
          'Комплексный скрининг',
          'Долголетие и здоровое старение',
          'Метаболизм и контроль веса',
          'Термальные и бальнеологические программы',
        ],
      },
      {
        key: 'rehab',
        title: 'Международная реабилитация',
        body: 'Индивидуальные программы восстановления после операций, травм, инсульта или длительного лечения — работа мультидисциплинарной команды в рамках одной программы.',
        points: [
          'Неврологическая, после инсульта',
          'Ортопедическая и послеоперационная',
          'Кардио- и пульмореабилитация',
          'Детская реабилитация',
        ],
      },
    ],
  },
  process: {
    eyebrow: 'Как это работает',
    heading: 'От первого вопроса до наблюдения после лечения.',
    steps: [
      {
        title: 'Расскажите о своей ситуации',
        body: 'Бесплатная консультация без обязательств. Диагноз, цели, сроки и бюджет.',
      },
      {
        title: 'Мы подбираем клинику и врача',
        body: 'Только лицензированные учреждения с правом лечить иностранных пациентов, отделом сопровождения и открытой информацией о квалификации врачей.',
      },
      {
        title: 'Вы получаете понятное предложение',
        body: 'Объём, стоимость и условия оплаты — письменно, от клиники, до любых обязательств.',
      },
      {
        title: 'Мы организуем поездку',
        body: 'Перелёт, встреча, перевод и логистика в клинике — и сопровождение после лечения.',
      },
    ],
    accreditationsLabel: 'Аккредитации, на которые мы смотрим',
    accreditations: ['JCI', 'GHA', 'Temos International', 'ISO', 'KAHF'],
  },
  destinations: {
    eyebrow: 'Где мы работаем',
    heading: 'Десять стран. Один согласованный план.',
    intro:
      'Правильное направление зависит от вашего диагноза, а не от рекламного буклета. Вот где наша партнёрская сеть сильнее всего.',
    filters: {
      all: 'Все',
      medical: 'Лечение',
      wellness: 'Оздоровление',
      rehab: 'Реабилитация',
    },
    items: [
      {
        flag: '🇹🇷',
        country: 'Турция',
        focus:
          'Чек-апы, пластическая хирургия, пересадка волос, стоматология, бариатрия, онкология, кардиология, ортопедия. Клиника-партнёр: ADATIP (аккредитация JCI).',
        tags: ['medical', 'rehab'],
      },
      {
        flag: '🇰🇷',
        country: 'Южная Корея',
        focus:
          'Комплексная диагностика, онкология, сложная и роботизированная хирургия, ортопедия, нейрохирургия и профилактика. Госпитали оцениваются по программе KAHF.',
        tags: ['medical', 'rehab'],
      },
      {
        flag: '🇩🇪',
        country: 'Германия',
        focus:
          'Углублённая диагностика, онкология, нейрохирургия, кардиология, ортопедия, хронические заболевания и сложная реабилитация.',
        tags: ['medical', 'wellness', 'rehab'],
      },
      {
        flag: '🇦🇹',
        country: 'Австрия',
        focus:
          'Современная Mayr-медицина, здоровье ЖКТ, долголетие и лечебное питание, а также ортопедическое, неврологическое и кардиовосстановление.',
        tags: ['wellness', 'rehab', 'medical'],
      },
      {
        flag: '🇪🇸',
        country: 'Испания',
        focus:
          'Онкология, репродуктивная медицина, ортопедия, эстетическая медицина, долголетие и медицинский wellness.',
        tags: ['medical', 'wellness'],
      },
      {
        flag: '🇨🇿',
        country: 'Чехия',
        focus:
          'Минеральные воды и бальнеология, ортопедия, диагностика, клиническая и санаторная реабилитация.',
        tags: ['wellness', 'rehab', 'medical'],
      },
      {
        flag: '🇨🇭',
        country: 'Швейцария',
        focus:
          'Углублённая диагностика, профилактика, клиники долголетия и премиальный медицинский wellness.',
        tags: ['medical', 'wellness'],
      },
      {
        flag: '🇦🇪',
        country: 'ОАЭ',
        focus:
          'Клиники международного уровня, диагностика, профилактические программы, хирургия, эстетическая медицина и премиальное сопровождение.',
        tags: ['medical'],
      },
      {
        flag: '🇹🇭',
        country: 'Таиланд',
        focus:
          'Пластическая хирургия, стоматология, ортопедия, чек-апы, программы стресса и веса, восстановление и курортный wellness.',
        tags: ['medical', 'wellness'],
      },
      {
        flag: '🇲🇽',
        country: 'Мексика',
        focus:
          'Особенно удобно из США и Канады. Стоматология, бариатрия, пластическая хирургия, ортопедия и офтальмология.',
        tags: ['medical'],
      },
      {
        flag: '🇸🇮',
        country: 'Словения',
        focus:
          'Термальные курорты и реабилитация — опорно-двигательное, ортопедическое, неврологическое и кардиовосстановление.',
        tags: ['wellness', 'rehab'],
      },
      {
        flag: '🇬🇪',
        country: 'Грузия',
        focus:
          'Минеральные воды, бальнеологические и климатические программы, физиотерапия и восстановление — доступный санаторный формат.',
        tags: ['wellness'],
      },
    ],
    more: 'Другие направления — включая Израиль, Италию, Армению, Венгрию и Индию — рассматриваем исходя из ваших медицинских задач.',
  },
  contact: {
    eyebrow: 'Начните здесь',
    heading: 'Расскажите, что нужно. Мы найдём решение.',
    intro:
      'Первая консультация бесплатна и ни к чему не обязывает. Обычно отвечаем в течение одного рабочего дня.',
    name: 'Имя',
    contactField: 'WhatsApp или e-mail',
    contactPlaceholder: '+1 555 000 1234 или you@example.com',
    interest: 'Что вас интересует',
    interestOptions: [
      'Лечение',
      'Оздоровление',
      'Реабилитация',
      'Не знаю — помогите разобраться',
    ],
    message: 'Сообщение',
    submit: 'Отправить запрос',
    sending: 'Отправляем…',
    success: 'Спасибо. Ваш запрос отправлен — мы скоро свяжемся с вами.',
    error: 'Что-то пошло не так. Напишите нам напрямую в WhatsApp или на e-mail.',
    privacy:
      'Цены на сайте не публикуются. Стоимость зависит от программы и клиники и сообщается только на личной консультации.',
  },
  footer: {
    tagline: 'Международная медицина — организовано под ключ.',
    disclaimers: [
      'MedTravel Experts не является медицинским учреждением, не ставит диагнозы и не назначает лечение. Все медицинские решения принимают лицензированные врачи клиники-партнёра.',
      'Аккредитация — один из критериев отбора и не гарантирует результат лечения. Квалификация конкретного врача оценивается отдельно.',
      'PRP, озонотерапия и внутривенные инфузии применяются только после осмотра врача и при наличии показаний.',
    ],
    rights: 'Все права защищены.',
  },
};

export const content: Record<Lang, Content> = { en, ru };
