const bookingLinks = {
  vake: "https://n129312.alteg.io/company/62559/personal/menu?o=m-1s9836179",
  saburtalo: "https://n129312.alteg.io/company/641147/personal/menu?o="
};

const SITE_CONTENT_STORAGE_KEY = "blb_site_content";

const translations = {
  ka: {
    skipLink: "შინაარსზე გადასვლა",
    navHome: "მთავარი",
    navAbout: "გამოცდილება",
    navServices: "სერვისები",
    navGallery: "შედეგები",
    navBranches: "ფილიალები",
    navFaq: "FAQ",
    navContact: "კონტაქტი",
    mapEyebrow: "ლოკაციები",
    mapTitle: "იპოვე Brow & Lash Bar-ის ფილიალი, რომელიც შენს დღეს ერგება",
    mapText: "გადართე ვაკესა და საბურთალოს შორის, ნახე ფილიალის დეტალები და გახსენი ზუსტი Google Maps ლოკაცია.",
    openGoogleMaps: "Google Maps-ში გახსნა",
    bookNow: "დაჯავშნა",
    viewServices: "სერვისების ნახვა",
    heroEyebrow: "გაამოკვეთე შენი ბუნებრივი სილამაზე",
    heroTitle: "Brow & Lash Bar",
    heroTitleLineOne: "Brow &",
    heroTitleLineTwo: "Lash Bar",
    heroCta: "დაჯავშნე ვიზიტი",
    heroLead: "აირჩიეთ ფილიალი, ნახეთ სერვისები და დაჯავშნეთ ვიზიტი მარტივად.",
    heroTrustOne: "ორი ფილიალი",
    heroTrustTwo: "ონლაინ ჯავშანი",
    heroTrustThree: "პრემიუმ ზრუნვა",
    metricBranches: "ფილიალი",
    metricServices: "სერვისი",
    metricBooking: "ონლაინ ჯავშანი",
    experienceEyebrow: "გამოცდილება",
    experienceTitle: "პრემიუმ სტუდიოს რიტმი: პერსონალური, სუფთა და ლამაზად გაზომილი",
    experienceText: "კონსულტაციიდან მოვლამდე, თითოეული დეტალი ისეა შექმნილი, რომ ვიზიტი მარტივი იყოს, შედეგი კი დახვეწილი და ბუნებრივი დარჩეს.",
    experienceNoteSmall: "Brow & Lash Bar",
    experienceNoteBig: "მშვიდი ლუქსი, ზუსტი სილამაზის სამუშაო",
    experienceItemOne: "ინდივიდუალური ფორმის დაგეგმვა",
    experienceItemTwo: "რბილი, ბუნებრივი დასრულება",
    experienceItemThree: "მშვიდი სტუდიოს ატმოსფერო",
    floatingBranches: "ვაკე / საბურთალო",
    floatingChoose: "აირჩიე ფილიალი",
    floatingBooking: "ონლაინ ჯავშანი",
    floatingAltegio: "Altegio სისტემით",
    floatingCare: "პრემიუმ ზრუნვა",
    floatingNatural: "ბუნებრივი შედეგები",
    servicesEyebrow: "სიგნატურული სერვისები",
    servicesTitle: "სილამაზის რიტუალები შენი ნაკვთებისთვის",
    servicesText: "გამჭვირვალე ფასები, დახვეწილი ტექნიკა და მშვიდი გზა სერვისის არჩევიდან ფილიალის დაჯავშნამდე.",
    serviceLabel: "სერვისი",
    serviceBook: "დაჯავშნა",
    whyEyebrow: "რატომ გვირჩევენ",
    whyTitle: "დახვეწილი გამოცდილება პირველი კლიკიდან საბოლოო სარკის მომენტამდე",
    whyText: "ჩვენი მიდგომა სუფთა, ზუსტი და პერსონალურია, რათა შედეგმა შენი ბუნებრივი გამომეტყველება გამოკვეთოს.",
    reserveVisit: "ვიზიტის დაჯავშნა",
    resultsEyebrow: "მანამდე / შემდეგ",
    resultsTitle: "შედეგები, რომლებიც დახვეწილია და არასდროს გადაჭარბებული",
    resultsText: "Brow & Lash Bar-ის სტილი არის რბილი სტრუქტურა: წარბები, რომლებიც სახეს ჩარჩოს აძლევს, წამწამები, რომლებიც თვალს ხსნის, და სილამაზის შედეგი, რომელიც კვლავ შენ ხარ.",
    bookResult: "ამ შედეგის დაჯავშნა",
    beforeLabel: "მანამდე",
    afterLabel: "შემდეგ",
    mastersEyebrow: "მასტერები",
    mastersTitle: "სპეციალისტები ბუნებრივი სილამაზის დახვეწილი ხედვით",
    mastersText: "დემო ვერსიისთვის განკუთვნილი გუნდის ბარათები. რეალური სახელები და ფოტოები მოგვიანებით დაემატება.",
    masterOneRole: "წარბის მასტერი",
    masterOneName: "უფროსი სპეციალისტი",
    masterTwoRole: "წამწამის მასტერი",
    masterTwoName: "ლამინირების ექსპერტი",
    masterThreeRole: "სილამაზის მასტერი",
    masterThreeName: "მაკიაჟის არტისტი",
    featureMastersTitle: "პროფესიონალი მასტერები",
    featureMastersText: "კონსულტაცია და ტექნიკა, რომელიც შენს სახეს, ტონსა და ყოველდღიურ რიტმს ერგება.",
    featureMaterialsTitle: "პრემიუმ მასალები",
    featureMaterialsText: "ხარისხიანი ფორმულები და ინსტრუმენტები დახვეწილი შედეგისა და კომფორტული ვიზიტისთვის.",
    featureEnvironmentTitle: "ელეგანტური გარემო",
    featureEnvironmentText: "სუფთა, მშვიდი სტუდიო, სადაც სილამაზის რიტუალი აუჩქარებლად იგრძნობა.",
    featureBranchesTitle: "ორი ფილიალი",
    featureBranchesText: "დაჯავშნე შენთვის მოსახერხებელ სივრცეში: ვაკეში ან საბურთალოზე.",
    galleryEyebrow: "გალერეა",
    galleryTitle: "რბილი, დახვეწილი, კამერისთვის მზად შედეგები",
    galleryText: "დაათვალიერე წარბები, წამწამები და სტუდიოს კადრები. ამ ფოტოებს მოგვიანებით JavaScript-ის ერთი მარტივი სიიდან შეცვლი.",
    filterAll: "ყველა",
    filterBrows: "წარბები",
    filterLashes: "წამწამები",
    filterStudio: "სტუდიო",
    branchesEyebrow: "აირჩიე ფილიალი",
    branchesTitle: "ორი ლამაზი ლოკაცია, ერთი კომფორტული ჯავშნის პროცესი",
    branchesText: "შეარჩიე შენთვის მოსახერხებელი ფილიალი და გააგრძელე ჯავშანი ჩვენს მოდალში.",
    branchLabel: "ფილიალი",
    locationPlaceholder: "მისამართი მალე დაემატება",
    contactPlaceholder: "კონტაქტი: +995 000 00 00 00",
    mapButton: "ლოკაცია",
    bookVake: "ვაკეში დაჯავშნა",
    bookSaburtalo: "საბურთალოზე დაჯავშნა",
    processEyebrow: "როგორ მუშაობს",
    processTitle: "დაჯავშნე სილამაზის ვიზიტი სამ მარტივ ნაბიჯში",
    processOneTitle: "აირჩიე სერვისი",
    processOneText: "იპოვე პროცედურა, რომელიც შენს მიზანსა და დროს ერგება.",
    processTwoTitle: "აირჩიე ფილიალი",
    processTwoText: "Altegio-ს გახსნამდე მიუთითე ვაკე ან საბურთალო.",
    processThreeTitle: "დაჯავშნე Altegio-ში",
    processThreeText: "დაადასტურე დრო ონლაინ, გლუვი მოდალის გამოცდილებით.",
    updatesEyebrow: "მარტივი განახლება",
    updatesTitle: "ფასები, სერვისები და ფოტოები მარტივად განახლდება",
    updatesText: "ფასები, ფოტოები, სერვისების სახელები და აღწერები ერთ სტრუქტურირებულ კონტენტის ზონაშია თავმოყრილი, ამიტომ მცირე განახლებების შენარჩუნება მარტივია.",
    updatesAdmin: "სრული ცოცხალი მართვის პანელი ან CMS მოგვიანებით შეიძლება დაემატოს, თუ საჭირო იქნება ყველა მოწყობილობაზე რეალური რედაქტირება.",
    testimonialsEyebrow: "კლიენტების სიტყვები",
    testimonialsTitle: "შეფასებები კარგი ვიზიტის მშვიდი ბზინვარებით",
    reviewOneText: "შედეგი სუფთა და ბუნებრივი იყო. ძალიან მომეწონა მარტივი ჯავშანი და მშვიდი სტუდიო.",
    reviewOneName: "ნინო, ვაკე",
    reviewTwoText: "წამწამები რბილი და აწეული დარჩა. მასტერმა ყველაფერი გასაგებად ამიხსნა და ვიზიტი პრემიუმად იგრძნობოდა.",
    reviewTwoName: "მარიამი, საბურთალო",
    reviewThreeText: "ლამაზი ფორმა, ზედმეტი სიმკვეთრის გარეშე, უბრალოდ დახვეწილი წარბები. შემდეგი ვიზიტიც მაშინვე დავჯავშნე.",
    reviewThreeName: "ანა, თბილისი",
    faqEyebrow: "FAQ",
    faqTitle: "დაჯავშნამდე",
    faqText: "მთავარი მარტივია: აირჩიე სერვისი, აირჩიე ფილიალი და დაადასტურე ონლაინ.",
    faqOneQ: "როგორ დავჯავშნო?",
    faqOneA: "დააჭირე დაჯავშნას, აირჩიე ვაკე ან საბურთალო, შემდეგ კი სერვისი და დრო ჯავშნის მოდალში.",
    faqTwoQ: "შემიძლია ფილიალის არჩევა?",
    faqTwoA: "დიახ. თითოეული ჯავშანი ფილიალის არჩევით იწყება, ხოლო ფილიალის ბარათები შესაბამის ლოკაციას პირდაპირ ხსნის.",
    faqThreeQ: "რამდენ ხანს გრძელდება სერვისები?",
    faqThreeA: "სერვისების უმეტესობა 20-დან 90 წუთამდე გრძელდება. სავარაუდო დრო თითოეულ სერვისის ბარათზე ჩანს.",
    faqFourQ: "როგორ შევცვალო ვიზიტი?",
    faqFourA: "გამოიყენე Altegio-ს დადასტურების დეტალები ან დაგვიკავშირდი და ვიზიტის განახლებაში დაგეხმარებით.",
    faqFiveQ: "ჯავშანი ონლაინ არის?",
    faqFiveA: "დიახ. ონლაინ ჯავშანი ხელმისაწვდომია Altegio-ს საშუალებით, ამავე ვებსაიტის გამოცდილებაში.",
    contactEyebrow: "კონტაქტი",
    contactTitle: "მზად ხარ Brow & Lash Bar-ის შემდეგი ვიზიტისთვის?",
    contactText: "დაგვირეკე, მოგვწერე Instagram-ზე ან დაჯავშნე ონლაინ ვაკეში ან საბურთალოზე.",
    phoneLabel: "ტელეფონი",
    instagramLabel: "Instagram",
    emailLabel: "ელ.ფოსტა",
    footerAbout: "პრემიუმ წარბისა და წამწამის სტუდია თბილისში, ვაკისა და საბურთალოს ფილიალებით.",
    footerSeo: "წარბის კორექცია, წამწამის ლამინირება, წარბის ლამინირება, წამწამის დაგრძელება და beauty სერვისები თბილისში.",
    copyright: "© 2026 Brow & Lash Bar. ყველა უფლება დაცულია.",
    bookingTitle: "აირჩიე ფილიალი",
    bookingNote: "ფილიალის არჩევის შემდეგ Altegio-ს ჯავშანი ამავე ფანჯარაში გაიხსნება.",
    bookingBack: "უკან"
  },
  en: {
    skipLink: "Skip to content",
    navHome: "Home",
    navAbout: "Experience",
    navServices: "Services",
    navGallery: "Results",
    navBranches: "Branches",
    navFaq: "FAQ",
    navContact: "Contact",
    mapEyebrow: "Locations",
    mapTitle: "Find the Brow & Lash Bar branch that fits your day",
    mapText: "Switch between Vake and Saburtalo, check branch details, and open the exact Google Maps location.",
    openGoogleMaps: "Open in Google Maps",
    bookNow: "Book Now",
    viewServices: "View Services",
    heroEyebrow: "ENHANCE YOUR NATURAL BEAUTY",
    heroTitle: "Brow & Lash Bar",
    heroTitleLineOne: "Brow &",
    heroTitleLineTwo: "Lash Bar",
    heroCta: "BOOK APPOINTMENT",
    heroLead: "Choose a branch, explore services and book your visit with ease.",
    heroTrustOne: "Two branches",
    heroTrustTwo: "Online booking",
    heroTrustThree: "Premium care",
    metricBranches: "branches",
    metricServices: "signature services",
    metricBooking: "online booking",
    experienceEyebrow: "About / Experience",
    experienceTitle: "A premium studio rhythm: personal, clean, and beautifully measured",
    experienceText: "From consultation to aftercare, every detail is designed to make the visit feel effortless while the result stays refined and natural.",
    experienceNoteSmall: "Brow & Lash Bar",
    experienceNoteBig: "Quiet luxury, precise beauty work",
    experienceItemOne: "Individual shape mapping",
    experienceItemTwo: "Soft, natural-looking finishes",
    experienceItemThree: "Calm studio atmosphere",
    floatingBranches: "Vake / Saburtalo",
    floatingChoose: "Choose your branch",
    floatingBooking: "Online Booking",
    floatingAltegio: "Powered by Altegio",
    floatingCare: "Premium Care",
    floatingNatural: "Natural-looking results",
    servicesEyebrow: "Signature services",
    servicesTitle: "Beauty rituals designed around your features",
    servicesText: "Transparent prices, refined technique, and a calm appointment flow from service selection to branch booking.",
    serviceLabel: "Service",
    serviceBook: "Book",
    whyEyebrow: "Why clients choose us",
    whyTitle: "A polished beauty experience from the first click to the final mirror check",
    whyText: "Our approach is clean, precise and personal, with services that enhance your natural expression instead of overpowering it.",
    reserveVisit: "Reserve Your Visit",
    resultsEyebrow: "Before / After",
    resultsTitle: "Results that look polished, never overdone",
    resultsText: "The Brow & Lash Bar look is soft structure: brows that frame the face, lashes that open the eye, and beauty work that still feels like you.",
    bookResult: "Book This Look",
    beforeLabel: "Before",
    afterLabel: "After",
    mastersEyebrow: "Masters",
    mastersTitle: "Specialists with a refined eye for natural beauty",
    mastersText: "Placeholder team cards for a client-ready demo. Real master names and photos can be added later.",
    masterOneRole: "Brow master",
    masterOneName: "Senior Specialist",
    masterTwoRole: "Lash master",
    masterTwoName: "Lamination Expert",
    masterThreeRole: "Beauty master",
    masterThreeName: "Makeup Artist",
    featureMastersTitle: "Professional masters",
    featureMastersText: "Careful consultation and technique selected for your face, skin tone and daily routine.",
    featureMaterialsTitle: "Premium materials",
    featureMaterialsText: "Quality formulas and tools for a refined result and comfortable appointment.",
    featureEnvironmentTitle: "Elegant environment",
    featureEnvironmentText: "A calm, clean studio atmosphere made for beauty rituals that feel unhurried.",
    featureBranchesTitle: "Two branches",
    featureBranchesText: "Book the location that fits your day: Vake or Saburtalo.",
    galleryEyebrow: "Gallery",
    galleryTitle: "Soft, polished, camera-ready results",
    galleryText: "Browse brows, lashes and studio moments. Replace these images later from one simple list in JavaScript.",
    filterAll: "All",
    filterBrows: "Brows",
    filterLashes: "Lashes",
    filterStudio: "Studio",
    branchesEyebrow: "Choose your branch",
    branchesTitle: "Two beautiful locations, one polished booking flow",
    branchesText: "Select the branch that works best for you and continue inside our booking modal.",
    branchLabel: "Branch",
    locationPlaceholder: "Address will be added soon",
    contactPlaceholder: "Contact: +995 000 00 00 00",
    mapButton: "Location",
    bookVake: "Book Vake",
    bookSaburtalo: "Book Saburtalo",
    processEyebrow: "How it works",
    processTitle: "Book your beauty appointment in three simple steps",
    processOneTitle: "Choose service",
    processOneText: "Find the treatment that matches your beauty goal and timing.",
    processTwoTitle: "Select branch",
    processTwoText: "Pick Vake or Saburtalo before the booking page opens.",
    processThreeTitle: "Book through Altegio",
    processThreeText: "Confirm time online in a smooth modal experience.",
    updatesEyebrow: "Easy Content Updates",
    updatesTitle: "Prices, services and photos are simple to update",
    updatesText: "Prices, photos, service names and descriptions are organized in one structured content area, so small updates are easy to maintain.",
    updatesAdmin: "A full live admin panel or CMS can be added later if real editing across all devices is needed.",
    testimonialsEyebrow: "Client words",
    testimonialsTitle: "Reviews with the quiet glow of a good appointment",
    reviewOneText: "The result looked clean and natural. I loved that booking was simple and the studio felt very calm.",
    reviewOneName: "Nino, Vake",
    reviewTwoText: "My lashes stayed soft and lifted. The master explained everything clearly and the whole visit felt premium.",
    reviewTwoName: "Mariam, Saburtalo",
    reviewThreeText: "Beautiful shape, no harsh look, just polished brows. I booked my next visit before leaving.",
    reviewThreeName: "Ana, Tbilisi",
    faqEyebrow: "FAQ",
    faqTitle: "Before you book",
    faqText: "Everything important is simple: choose your service, choose your branch, and confirm online.",
    faqOneQ: "How do I book?",
    faqOneA: "Press Book Now, choose Vake or Saburtalo, then select your service and time in the booking modal.",
    faqTwoQ: "Can I choose the branch?",
    faqTwoA: "Yes. Every booking starts with a branch choice, and branch cards can open the matching location directly.",
    faqThreeQ: "How long do services take?",
    faqThreeA: "Most services take between 20 and 90 minutes. You can see the estimated time on each service card.",
    faqFourQ: "How can I change my appointment?",
    faqFourA: "Use the confirmation details from Altegio or contact the studio so we can help update your visit.",
    faqFiveQ: "Is booking online?",
    faqFiveA: "Yes. Online booking is available through Altegio inside this website experience.",
    contactEyebrow: "Contact",
    contactTitle: "Ready for your next Brow & Lash Bar visit?",
    contactText: "Call, message us on Instagram, or book online for Vake or Saburtalo.",
    phoneLabel: "Phone",
    instagramLabel: "Instagram",
    emailLabel: "Email",
    footerAbout: "Premium brow and lash studio in Tbilisi with branches in Vake and Saburtalo.",
    footerSeo: "Brow shaping, lash lamination, brow lamination, lash extensions and beauty services in Tbilisi.",
    copyright: "© 2026 Brow & Lash Bar. All rights reserved.",
    bookingTitle: "Choose your branch",
    bookingNote: "After choosing a branch, Altegio booking will open inside this same window.",
    bookingBack: "Back"
  }
};

translations.ru = {
  ...translations.en,
  skipLink: "Перейти к содержанию",
  navHome: "Главная",
  navAbout: "Опыт",
  navServices: "Услуги",
  navGallery: "Результаты",
  navBranches: "Филиалы",
  navFaq: "Вопросы",
  navContact: "Контакты",
  mapEyebrow: "Локации",
  mapTitle: "Выберите филиал Brow & Lash Bar",
  mapText: "Переключайтесь между Ваке и Сабуртало, смотрите детали филиала и открывайте точную точку на Google Maps.",
  openGoogleMaps: "Открыть в Google Maps",
  bookNow: "Записаться",
  viewServices: "Смотреть услуги",
  heroEyebrow: "ПОДЧЕРКНИТЕ ЕСТЕСТВЕННУЮ КРАСОТУ",
  heroTitle: "Brow & Lash Bar",
  heroTitleLineOne: "Brow &",
  heroTitleLineTwo: "Lash Bar",
  heroCta: "ЗАПИСАТЬСЯ",
  heroLead: "Выберите филиал, услугу и удобное время онлайн.",
  heroTrustOne: "Два филиала",
  heroTrustTwo: "Онлайн-запись",
  heroTrustThree: "Премиальный уход",
  metricBranches: "филиала",
  metricServices: "услуг",
  metricBooking: "онлайн-запись",
  experienceEyebrow: "Опыт",
  experienceTitle: "Премиальный ритм студии: персонально, чисто и красиво",
  experienceText: "От консультации до ухода каждая деталь создана для легкого визита и естественного результата.",
  experienceNoteSmall: "Brow & Lash Bar",
  experienceNoteBig: "Спокойная роскошь и точная бьюти-работа",
  experienceItemOne: "Индивидуальное построение формы",
  experienceItemTwo: "Мягкий естественный финиш",
  experienceItemThree: "Спокойная атмосфера студии",
  floatingBranches: "Ваке / Сабуртало",
  floatingChoose: "Выберите филиал",
  floatingBooking: "Онлайн-запись",
  floatingAltegio: "Через Altegio",
  floatingCare: "Премиальный уход",
  floatingNatural: "Естественный результат",
  servicesEyebrow: "Фирменные услуги",
  servicesTitle: "Бьюти-ритуалы для ваших черт",
  servicesText: "Понятные цены, аккуратная техника и простой путь от выбора услуги до записи.",
  serviceLabel: "Услуга",
  serviceBook: "Записаться",
  whyEyebrow: "Почему выбирают нас",
  whyTitle: "Продуманный опыт от первого клика до финального результата",
  whyText: "Наш подход чистый, точный и персональный, чтобы результат подчеркивал вашу естественную выразительность.",
  reserveVisit: "Записаться на визит",
  resultsEyebrow: "До / После",
  resultsTitle: "Результаты, которые выглядят изящно и не перегруженно",
  resultsText: "Стиль Brow & Lash Bar - мягкая структура: брови, которые оформляют лицо, и ресницы, которые открывают взгляд.",
  bookResult: "Записаться на этот образ",
  beforeLabel: "До",
  afterLabel: "После",
  mastersEyebrow: "Мастера",
  mastersTitle: "Специалисты с тонким взглядом на естественную красоту",
  mastersText: "Демо-карточки команды. Реальные имена и фото можно добавить позже.",
  masterOneRole: "Мастер бровей",
  masterOneName: "Старший специалист",
  masterTwoRole: "Мастер ресниц",
  masterTwoName: "Эксперт по ламинированию",
  masterThreeRole: "Бьюти-мастер",
  masterThreeName: "Визажист",
  featureMastersTitle: "Профессиональные мастера",
  featureMastersText: "Консультация и техника, подобранные под ваше лицо, тон и ежедневный ритм.",
  featureMaterialsTitle: "Премиальные материалы",
  featureMaterialsText: "Качественные формулы и инструменты для изящного результата и комфортного визита.",
  featureEnvironmentTitle: "Элегантная атмосфера",
  featureEnvironmentText: "Чистая спокойная студия, где бьюти-ритуал ощущается неторопливо.",
  featureBranchesTitle: "Два филиала",
  featureBranchesText: "Запишитесь в удобной локации: Ваке или Сабуртало.",
  galleryEyebrow: "Галерея",
  galleryTitle: "Мягкие, аккуратные, готовые к камере результаты",
  galleryText: "Посмотрите брови, ресницы и атмосферу студии.",
  filterAll: "Все",
  filterBrows: "Брови",
  filterLashes: "Ресницы",
  filterStudio: "Студия",
  branchesEyebrow: "Выберите филиал",
  branchesTitle: "Две красивые локации и один удобный процесс записи",
  branchesText: "Выберите удобный филиал и продолжите запись в модальном окне.",
  branchLabel: "Филиал",
  locationPlaceholder: "Адрес скоро будет добавлен",
  contactPlaceholder: "Контакт: +995 000 00 00 00",
  mapButton: "Локация",
  bookVake: "Записаться в Ваке",
  bookSaburtalo: "Записаться в Сабуртало",
  processEyebrow: "Как это работает",
  processTitle: "Запишитесь на бьюти-визит за три простых шага",
  processOneTitle: "Выберите услугу",
  processOneText: "Найдите процедуру, которая подходит вашей цели и времени.",
  processTwoTitle: "Выберите филиал",
  processTwoText: "Выберите Ваке или Сабуртало перед открытием записи.",
  processThreeTitle: "Запишитесь через Altegio",
  processThreeText: "Подтвердите время онлайн в удобном модальном окне.",
  updatesEyebrow: "Простое обновление",
  updatesTitle: "Цены, услуги и фото легко обновлять",
  updatesText: "Контент вынесен в структурированную зону и может подключаться к backend/CMS.",
  updatesAdmin: "Админ-панель может сохранять данные в Supabase для обновления на всех устройствах.",
  testimonialsEyebrow: "Отзывы клиентов",
  testimonialsTitle: "Отзывы с ощущением спокойного красивого визита",
  reviewOneText: "Результат был чистым и естественным. Понравилась простая запись и спокойная студия.",
  reviewOneName: "Нино, Ваке",
  reviewTwoText: "Ресницы остались мягкими и приподнятыми. Визит ощущался премиально.",
  reviewTwoName: "Мариам, Сабуртало",
  reviewThreeText: "Красивая форма без жесткости, просто аккуратные брови. Следующий визит записала сразу.",
  reviewThreeName: "Ана, Тбилиси",
  faqEyebrow: "Вопросы",
  faqTitle: "Перед записью",
  faqText: "Все просто: выберите услугу, филиал и подтвердите время онлайн.",
  faqOneQ: "Как записаться?",
  faqOneA: "Нажмите Записаться, выберите Ваке или Сабуртало, затем услугу и время в модальном окне.",
  faqTwoQ: "Можно выбрать филиал?",
  faqTwoA: "Да. Каждая запись начинается с выбора филиала.",
  faqThreeQ: "Сколько длятся услуги?",
  faqThreeA: "Большинство услуг длится от 20 до 90 минут.",
  faqFourQ: "Как изменить визит?",
  faqFourA: "Используйте данные подтверждения Altegio или свяжитесь со студией.",
  faqFiveQ: "Запись онлайн?",
  faqFiveA: "Да. Онлайн-запись доступна через Altegio внутри сайта.",
  contactEyebrow: "Контакты",
  contactTitle: "Готовы к следующему визиту в Brow & Lash Bar?",
  contactText: "Позвоните, напишите в Instagram или запишитесь онлайн в Ваке или Сабуртало.",
  phoneLabel: "Телефон",
  instagramLabel: "Instagram",
  emailLabel: "Эл. почта",
  footerAbout: "Премиальная студия бровей и ресниц в Тбилиси с филиалами Ваке и Сабуртало.",
  footerSeo: "Коррекция бровей, ламинирование ресниц, ламинирование бровей, наращивание ресниц и бьюти-услуги в Тбилиси.",
  copyright: "© 2026 Brow & Lash Bar. Все права защищены.",
  bookingTitle: "Выберите филиал",
  bookingNote: "После выбора филиала запись Altegio откроется в этом же окне.",
  bookingBack: "Назад"
};

const defaultSiteContent = {
  // CLIENT EDIT AREA — change prices here. You can also edit service names, descriptions, durations, categories and images.
  services: [
    {
      icon: "BR",
      category: "brows",
      categoryLabel: { ka: "წარბები", en: "Brows", ru: "Брови" },
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=760&q=82",
      title: { ka: "წარბის ფორმირება", en: "Brow shaping", ru: "Коррекция формы бровей" },
      description: {
        ka: "ზუსტი ფორმირება, მსუბუქი კორექცია და სახის ფორმაზე მორგებული სუფთა ხაზი.",
        en: "Precise shaping, soft correction and a clean line designed for your facial architecture.",
        ru: "Точная форма, мягкая коррекция и чистая линия, подобранная под черты лица."
      },
      duration: { ka: "30 წთ", en: "30 min", ru: "30 мин" },
      price: "39 ₾"
    },
    {
      icon: "LA",
      category: "lashes",
      categoryLabel: { ka: "წამწამები", en: "Lashes", ru: "Ресницы" },
      image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=760&q=82",
      title: { ka: "წამწამის ლამინაცია", en: "Lash lamination", ru: "Ламинирование ресниц" },
      description: {
        ka: "აწეული, ბუნებრივი და რბილად გამოკვეთილი წამწამები ყოველდღიური კომფორტისთვის.",
        en: "Lifted, soft and naturally defined lashes for everyday ease.",
        ru: "Приподнятые, мягкие и естественно подчеркнутые ресницы на каждый день."
      },
      duration: { ka: "60 წთ", en: "60 min", ru: "60 мин" },
      price: "39 ₾"
    },
    {
      icon: "BL",
      category: "brows",
      categoryLabel: { ka: "წარბები", en: "Brows", ru: "Брови" },
      image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=760&q=82",
      title: { ka: "წარბის ლამინაცია", en: "Brow lamination", ru: "Ламинирование бровей" },
      description: {
        ka: "მოვლილი, უფრო მოცულობითი წარბები, რომლებიც ფორმას ლამაზად ინარჩუნებს.",
        en: "Polished, fuller-looking brows that hold their shape beautifully.",
        ru: "Ухоженные и визуально более густые брови, которые красиво сохраняют форму."
      },
      duration: { ka: "50 წთ", en: "50 min", ru: "50 мин" },
      price: "39 ₾"
    },
    {
      icon: "EX",
      category: "lashes",
      categoryLabel: { ka: "წამწამები", en: "Lashes", ru: "Ресницы" },
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=760&q=82",
      title: { ka: "წამწამის დაგრძელება", en: "Lash extensions", ru: "Наращивание ресниц" },
      description: {
        ka: "კლასიკური ან რბილი მოცულობა, შერჩეული შენი თვალის ფორმისა და სტილისთვის.",
        en: "Classic or soft volume selected for your eye shape and personal style.",
        ru: "Классический или мягкий объем, подобранный под форму глаз и ваш стиль."
      },
      duration: { ka: "90 წთ", en: "90 min", ru: "90 мин" },
      price: "39 ₾"
    },
    {
      icon: "MU",
      category: "beauty",
      categoryLabel: { ka: "სილამაზე", en: "Beauty", ru: "Красота" },
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=760&q=82",
      title: { ka: "მაკიაჟი", en: "Makeup", ru: "Макияж" },
      description: {
        ka: "დახვეწილი სილამაზის მომსახურება დღისთვის, საღამოსთვის ან განსაკუთრებული მომენტისთვის.",
        en: "Refined beauty service for daytime, evening or a special moment.",
        ru: "Элегантный макияж для дневного образа, вечера или особого события."
      },
      duration: { ka: "60 წთ", en: "60 min", ru: "60 мин" },
      price: "39 ₾"
    },
    {
      icon: "CO",
      category: "consultation",
      categoryLabel: { ka: "კონსულტაცია", en: "Consultation", ru: "Консультация" },
      image: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?auto=format&fit=crop&w=760&q=82",
      title: { ka: "კონსულტაცია", en: "Consultation", ru: "Консультация" },
      description: {
        ka: "პერსონალური რეკომენდაცია ფორმაზე, ფერზე, მოვლასა და შესაფერის სერვისზე.",
        en: "Personal guidance on shape, color, care and the right service for you.",
        ru: "Индивидуальная консультация по форме, цвету, уходу и выбору подходящей услуги."
      },
      duration: { ka: "20 წთ", en: "20 min", ru: "20 мин" },
      price: "39 ₾"
    }
  ],

  // CLIENT EDIT AREA — change image URLs here. Replace src values with your own Unsplash, Pexels or local image paths.
  gallery: [
    {
      category: "brows",
      size: "is-tall",
      src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=720&q=82",
      alt: { ka: "დახვეწილი წარბის ფორმა", en: "Refined brow shape", ru: "Аккуратная форма бровей" },
      caption: { ka: "წარბის ფორმირება", en: "Brow shaping", ru: "Оформление бровей" }
    },
    {
      category: "lashes",
      size: "",
      src: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=720&q=82",
      alt: { ka: "ლამაზი წამწამის შედეგი", en: "Beautiful lash result", ru: "Красивый результат ресниц" },
      caption: { ka: "წამწამის ლიფტი", en: "Lash lift", ru: "Лифтинг ресниц" }
    },
    {
      category: "studio",
      size: "is-wide",
      src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=980&q=82",
      alt: { ka: "ელეგანტური beauty სტუდიო", en: "Elegant beauty studio", ru: "Элегантная бьюти-студия" },
      caption: { ka: "სტუდიოს განწყობა", en: "Studio mood", ru: "Атмосфера студии" }
    },
    {
      category: "brows",
      size: "",
      src: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=720&q=82",
      alt: { ka: "ბუნებრივი წარბის შედეგი", en: "Natural brow result", ru: "Естественный результат бровей" },
      caption: { ka: "ბუნებრივი შედეგი", en: "Natural result", ru: "Естественный результат" }
    },
    {
      category: "lashes",
      size: "is-tall",
      src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=720&q=82",
      alt: { ka: "პრემიუმ წამწამის მომსახურება", en: "Premium lash service", ru: "Премиальная услуга для ресниц" },
      caption: { ka: "წამწამის მოვლა", en: "Lash care", ru: "Уход за ресницами" }
    },
    {
      category: "studio",
      size: "",
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=720&q=82",
      alt: { ka: "სუფთა სალონის ინტერიერი", en: "Clean salon interior", ru: "Чистый интерьер салона" },
      caption: { ka: "სუფთა გარემო", en: "Clean space", ru: "Чистое пространство" }
    }
  ],

  // CLIENT EDIT AREA — change branch info here. Add real addresses, phone numbers and map links when ready.
  branches: [
    {
      id: "vake",
      name: { ka: "ვაკე", en: "Vake", ru: "Ваке" },
      description: {
        ka: "პრემიუმ ფილიალი ვაკეში მათთვის, ვისაც მშვიდი, ელეგანტური beauty ვიზიტი სურს.",
        en: "A premium Vake branch for clients who want a calm, elegant beauty visit.",
        ru: "Премиальный филиал в Ваке для спокойного и элегантного бьюти-визита."
      },
      address: { ka: "ვაკე, მისამართი მალე დაემატება", en: "Vake, address will be added soon", ru: "Ваке, адрес скоро будет добавлен" },
      contact: "+995 000 00 00 00",
      mapUrl: "https://maps.app.goo.gl/DbP7DQKg5sdFCw8p7"
    },
    {
      id: "saburtalo",
      name: { ka: "საბურთალო", en: "Saburtalo", ru: "Сабуртало" },
      description: {
        ka: "კომფორტული ფილიალი საბურთალოზე, სწრაფი ონლაინ ჯავშნით და დახვეწილი მომსახურებით.",
        en: "A convenient Saburtalo branch with fast online booking and refined service.",
        ru: "Удобный филиал в Сабуртало с быстрой онлайн-записью и изящным сервисом."
      },
      address: { ka: "საბურთალო, მისამართი მალე დაემატება", en: "Saburtalo, address will be added soon", ru: "Сабуртало, адрес скоро будет добавлен" },
      contact: "+995 000 00 00 00",
      mapUrl: "https://maps.app.goo.gl/mwzpxfwD9wopAJXV6"
    }
  ]
};

function loadSiteContent() {
  return defaultSiteContent;
}

function normalizeContentOverride(content = {}) {
  const normalizedServices = Array.isArray(content.services) && content.services.length > 0
    ? content.services.map((service, index) => normalizeStoredService(service, findDefaultServiceFallback(service, index)))
    : defaultSiteContent.services;
  const normalizedGallery = Array.isArray(content.gallery) && content.gallery.length > 0
    ? content.gallery.map((item, index) => normalizeStoredGalleryItem(item, defaultSiteContent.gallery[index]))
    : defaultSiteContent.gallery;

  return {
    ...defaultSiteContent,
    ...content,
    services: normalizedServices,
    gallery: normalizedGallery,
    branches: Array.isArray(content.branches) && content.branches.length > 0 ? content.branches : defaultSiteContent.branches
  };
}

async function fetchRemoteSiteContent() {
  if (!window.supabaseClient) return null;

  const { data, error } = await window.supabaseClient
    .from("site_content")
    .select("content")
    .eq("id", window.CONTENT_ROW_ID)
    .single();

  if (error) throw error;
  return data?.content || null;
}

async function hydrateRemoteContent() {
  try {
    const remoteContent = await fetchRemoteSiteContent();
    if (!remoteContent) return;
    siteContent = normalizeContentOverride(remoteContent);
    localStorage.setItem(SITE_CONTENT_STORAGE_KEY, JSON.stringify(remoteContent));
    applyTranslations();
  } catch (error) {
    console.warn("Brow & Lash Bar CMS content unavailable; using bundled content.", error);
  }
}

function findDefaultServiceFallback(service = {}, index = 0) {
  const rawTitle = typeof service.title === "string" ? service.title : service.title?.en;
  return defaultSiteContent.services.find((defaultService) => {
    return rawTitle && defaultService.title?.en?.toLowerCase() === rawTitle.toLowerCase();
  }) || defaultSiteContent.services[index] || defaultSiteContent.services[0];
}

const RU_SERVICE_TEXT = {
  "Brow shaping": "Коррекция формы бровей",
  "Precise shaping, soft correction and a clean line designed for your facial architecture.": "Точная форма, мягкая коррекция и чистая линия, подобранная под черты лица.",
  "Brow lamination": "Ламинирование бровей",
  "Polished, fuller-looking brows that hold their shape beautifully.": "Ухоженные и визуально более густые брови, которые красиво сохраняют форму.",
  "Lash lamination": "Ламинирование ресниц",
  "Lifted, soft and naturally defined lashes for everyday ease.": "Приподнятые, мягкие и естественно подчеркнутые ресницы на каждый день.",
  "Lash extensions": "Наращивание ресниц",
  "Classic or soft volume selected for your eye shape and personal style.": "Классический или мягкий объем, подобранный под форму глаз и ваш стиль.",
  "Makeup": "Макияж",
  "Refined beauty service for daytime, evening or a special moment.": "Элегантный макияж для дневного образа, вечера или особого события.",
  "Consultation": "Консультация",
  "Personal guidance on shape, color, care and the right service for you.": "Индивидуальная консультация по форме, цвету, уходу и выбору подходящей услуги.",
  "30 min": "30 мин",
  "50 min": "50 мин",
  "60 min": "60 мин",
  "90 min": "90 мин",
  "20 min": "20 мин",
  Brows: "Брови",
  Lashes: "Ресницы",
  Beauty: "Красота",
  brows: "Брови",
  lashes: "Ресницы",
  beauty: "Красота",
  consultation: "Консультация"
};

function withRuText(value, fallbackValue) {
  if (typeof value === "string") {
    return {
      ka: getDefaultLangText(fallbackValue, "ka") || value,
      en: value,
      ru: RU_SERVICE_TEXT[value] || getDefaultLangText(fallbackValue, "ru") || value
    };
  }

  if (value && typeof value === "object") {
    const enValue = value.en || getDefaultLangText(fallbackValue, "en");
    const ruCandidate = value.ru || "";
    const mappedRu = RU_SERVICE_TEXT[ruCandidate] || RU_SERVICE_TEXT[enValue];
    return {
      ...value,
      ru: mappedRu || ruCandidate || getDefaultLangText(fallbackValue, "ru") || enValue || ""
    };
  }

  return fallbackValue;
}

const durationUnits = { ka: "წთ", en: "min", ru: "мин" };

function getDurationValue(value, fallbackValue = "") {
  const rawValue = typeof value === "object" && value !== null
    ? value.en || value.ka || value.ru || ""
    : value || fallbackValue || "";
  const match = String(rawValue).match(/\d+(?:[.,]\d+)?/);
  return match ? match[0].replace(",", ".") : "";
}

function makeDurationText(value) {
  const cleanValue = String(value || "").trim();
  return {
    ka: cleanValue ? `${cleanValue} ${durationUnits.ka}` : "",
    en: cleanValue ? `${cleanValue} ${durationUnits.en}` : "",
    ru: cleanValue ? `${cleanValue} ${durationUnits.ru}` : ""
  };
}

function normalizeStoredService(service = {}, fallback = {}) {
  const normalizedCategory = withRuText(service.categoryLabel || service.category, fallback.categoryLabel || fallback.category);
  const durationValue = service.durationValue || getDurationValue(service.duration, fallback.durationValue || fallback.duration);
  const duration = durationValue ? makeDurationText(durationValue) : withRuText(service.duration, fallback.duration);

  return {
    ...fallback,
    ...service,
    title: withRuText(service.title, fallback.title),
    description: withRuText(service.description, fallback.description),
    durationValue,
    duration,
    categoryKey: service.categoryKey || (typeof service.category === "string" ? service.category : fallback.categoryKey || fallback.category),
    category: normalizedCategory,
    categoryLabel: normalizedCategory,
    image: service.image || fallback.image,
    price: service.price || fallback.price
  };
}

function normalizeStoredGalleryItem(item = {}, fallback = {}) {
  const alt = typeof item.alt === "string"
    ? { ka: getDefaultLangText(fallback.alt, "ka") || item.alt, en: item.alt, ru: item.alt }
    : item.alt || fallback.alt;

  return {
    ...fallback,
    ...item,
    alt,
    caption: item.caption || fallback.caption,
    src: item.src || fallback.src,
    category: item.category || fallback.category
  };
}

function getDefaultLangText(value, lang) {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[lang] || value.en || value.ka || "";
}

let siteContent = loadSiteContent();

const state = {
  lang: translations[localStorage.getItem("blbLanguage")] ? localStorage.getItem("blbLanguage") : "ka",
  activeGalleryFilter: "all",
  activeMapBranch: "vake",
  selectedBookingBranch: null
};

const getText = (value) => {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return value[state.lang] || value.en || value.ka || "";
};

const t = (key) => translations[state.lang]?.[key] || translations.en[key] || key;

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function applyTranslations() {
  document.documentElement.lang = state.lang;
  document.body.lang = state.lang;

  qsa("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = t(key);
  });

  qsa(".lang-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.lang);
  });

  renderServices();
  renderGallery();
  renderBranches();
  renderBookingChoices();
  renderMapSection();
}

function renderServices() {
  const grid = qs("#servicesGrid");
  if (!grid) return;

  grid.innerHTML = siteContent.services.map((service) => `
    <article class="service-card reveal">
      <div class="service-image">
        <img src="${service.image}" alt="${getText(service.title)}" loading="lazy" width="760" height="520">
        <span class="service-icon" aria-hidden="true">${service.icon || "BLB"}</span>
      </div>
      <div class="service-content">
        <span class="service-category">${getText(service.categoryLabel || service.category) || t("serviceLabel")}</span>
        <h3>${getText(service.title)}</h3>
        <p>${getText(service.description)}</p>
        <div class="service-meta">
          <span class="duration">${getText(service.duration)}</span>
          <span class="price">${service.price}</span>
        </div>
        <button class="btn btn-primary js-open-booking js-booking-open" type="button" data-booking-open>${t("serviceBook")}</button>
      </div>
    </article>
  `).join("");

  bindBookingButtons(grid);
  observeReveals(grid);
}

function renderGallery() {
  const grid = qs("#galleryGrid");
  if (!grid) return;

  const items = siteContent.gallery.filter((item) => {
    return state.activeGalleryFilter === "all" || item.category === state.activeGalleryFilter;
  });

  grid.innerHTML = items.map((item) => `
    <figure class="gallery-item ${item.size} reveal">
      <img src="${item.src}" alt="${getText(item.alt)}" loading="lazy" width="720" height="900">
      <figcaption>${getText(item.caption || item.alt || item.category)}</figcaption>
    </figure>
  `).join("");

  observeReveals(grid);
}

function renderBranches() {
  const grid = qs("#branchesGrid");
  if (!grid) return;

  grid.innerHTML = siteContent.branches.map((branch) => `
    <article class="branch-card reveal">
      <div class="branch-top">
        <div>
          <p class="eyebrow">${t("branchLabel")}</p>
          <h3>${getText(branch.name)}</h3>
        </div>
        <span class="branch-badge">${getText(branch.name)}</span>
      </div>
      <p>${getText(branch.description)}</p>
      <div class="branch-info">
        <span>${getText(branch.address) || t("locationPlaceholder")}</span>
        <span>${branch.contact ? `${t("phoneLabel")}: ${branch.contact}` : t("contactPlaceholder")}</span>
      </div>
      <div class="branch-actions">
        <button class="btn btn-primary js-open-booking js-booking-open" type="button" data-booking-open data-branch="${branch.id}" data-booking-branch="${branch.id}">${branch.id === "vake" ? t("bookVake") : t("bookSaburtalo")}</button>
        <a class="btn btn-secondary" href="${branch.mapUrl}" target="_blank" rel="noopener" aria-label="${t("mapButton")} ${getText(branch.name)}">${t("mapButton")}</a>
      </div>
    </article>
  `).join("");

  bindBookingButtons(grid);
  observeReveals(grid);
}

function renderMapSection() {
  const switcher = qs("#mapSwitch");
  const layout = qs("#mapLayout");
  if (!switcher || !layout) return;

  const activeBranch = siteContent.branches.find((branch) => branch.id === state.activeMapBranch) || siteContent.branches[0];
  if (!activeBranch) return;

  switcher.innerHTML = siteContent.branches.map((branch) => `
    <button class="map-tab ${branch.id === activeBranch.id ? "is-active" : ""}" type="button" data-map-branch="${branch.id}">
      ${getText(branch.name)}
    </button>
  `).join("");

  layout.innerHTML = `
    <div class="map-info">
      <p class="eyebrow">${t("branchLabel")}</p>
      <h3>${getText(activeBranch.name)}</h3>
      <p>${getText(activeBranch.description)}</p>
      <div class="branch-info">
        <span>${getText(activeBranch.address) || t("locationPlaceholder")}</span>
        <span>${activeBranch.contact ? `${t("phoneLabel")}: ${activeBranch.contact}` : t("contactPlaceholder")}</span>
      </div>
      <div class="branch-actions">
        <a class="btn btn-primary" href="${activeBranch.mapUrl}" target="_blank" rel="noopener">${t("openGoogleMaps")}</a>
        <button class="btn btn-secondary js-open-booking js-booking-open" type="button" data-booking-open data-branch="${activeBranch.id}" data-booking-branch="${activeBranch.id}">${activeBranch.id === "vake" ? t("bookVake") : t("bookSaburtalo")}</button>
      </div>
    </div>
    <a class="map-card" href="${activeBranch.mapUrl}" target="_blank" rel="noopener" aria-label="${t("openGoogleMaps")} ${getText(activeBranch.name)}">
      <span class="map-grid-bg" aria-hidden="true"></span>
      <span class="map-pin" aria-hidden="true"></span>
      <strong>${getText(activeBranch.name)}</strong>
      <small>${getText(activeBranch.address) || t("locationPlaceholder")}</small>
    </a>
  `;

  qsa("[data-map-branch]", switcher).forEach((button) => {
    button.addEventListener("click", () => {
      state.activeMapBranch = button.dataset.mapBranch;
      renderMapSection();
    });
  });

  bindBookingButtons(layout);
}

function renderBookingChoices() {
  const container = qs("#bookingBranchChoice");
  if (!container) return;

  container.innerHTML = siteContent.branches.map((branch) => `
    <button class="booking-choice" type="button" data-booking-branch="${branch.id}">
      <span>${t("branchLabel")}</span>
      <strong>${getText(branch.name)}</strong>
      <small>${getText(branch.address)}</small>
    </button>
  `).join("");
}

let revealObserver = null;

function setupRevealObserver() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    qsa(".reveal").forEach((element) => element.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  observeReveals(document);
}

function observeReveals(scope) {
  const elements = qsa(".reveal:not(.is-visible)", scope);
  if (!revealObserver) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  elements.forEach((element) => revealObserver.observe(element));
}

function setupHeader() {
  const header = qs("#siteHeader");
  const toggle = qs(".menu-toggle");
  const panel = qs(".mobile-menu");
  const closeButton = qs(".mobile-menu__close");
  if (!header || !toggle || !panel) return;

  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 16);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const closeMenu = () => {
    panel.classList.remove("is-open");
    header.classList.remove("menu-open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  };

  toggle.addEventListener("click", () => {
    const isOpen = panel.classList.toggle("is-open");
    header.classList.toggle("menu-open", isOpen);
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  closeButton?.addEventListener("click", closeMenu);
  qsa(".mobile-menu__nav a, .mobile-menu .booking-button").forEach((item) => {
    item.addEventListener("click", closeMenu);
  });
}

function setupLanguageSwitcher() {
  qsa(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      localStorage.setItem("blbLanguage", state.lang);
      applyTranslations();
    });
  });
}

function setupGalleryFilters() {
  qsa(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeGalleryFilter = button.dataset.filter;
      qsa(".filter-btn").forEach((filter) => {
        filter.classList.toggle("is-active", filter === button);
      });
      renderGallery();
    });
  });
}

function bindBookingButtons(scope = document) {
  qsa("[data-booking-open], .js-booking-open, .js-open-booking, a[href='#booking']", scope).forEach((button) => {
    if (button.dataset.boundBooking === "true") return;

    button.dataset.boundBooking = "true";
    button.addEventListener("click", (event) => {
      event.preventDefault();
      openBookingModal(button.dataset.bookingBranch || button.dataset.branch || null);
    });
  });
}

function setupBookingModal() {
  const modal = qs("[data-booking-modal]") || qs("#bookingModal");
  const frame = qs("[data-booking-frame]") || qs("#bookingFrame");
  const back = qs("[data-booking-back]") || qs("#bookingBack");

  if (!modal) return;

  modal.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-modal], [data-booking-close]") || event.target === modal) {
      closeBookingModal();
      return;
    }

    const choice = event.target.closest("[data-booking-branch]");
    if (choice) loadBookingBranch(choice.dataset.bookingBranch);
  });

  back?.addEventListener("click", showBookingChoice);

  frame?.addEventListener("load", () => {
    const loader = qs("#bookingLoader");
    if (loader) loader.hidden = true;
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) closeBookingModal();
  });
}

function openBookingModal(branchId = null) {
  const modal = qs("[data-booking-modal]") || qs("#bookingModal");
  if (!modal) return;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  showBookingChoice();

  if (branchId) loadBookingBranch(branchId);

  setTimeout(() => {
    const frameView = qs("[data-booking-view]") || qs("#bookingFrameView");
    const focusTarget = frameView?.hidden ? qs(".modal-close") : qs(".booking-close");
    focusTarget?.focus();
  }, 80);
}

function closeBookingModal() {
  const modal = qs("[data-booking-modal]") || qs("#bookingModal");
  const frame = qs("[data-booking-frame]") || qs("#bookingFrame");
  const loader = qs("#bookingLoader");
  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  frame?.removeAttribute("src");
  if (loader) loader.hidden = true;
}

function showBookingChoice() {
  const choice = qs("[data-booking-choice]") || qs("#bookingChoiceView");
  const view = qs("[data-booking-view]") || qs("#bookingFrameView");
  const frame = qs("[data-booking-frame]") || qs("#bookingFrame");
  const loader = qs("#bookingLoader");
  const dialog = qs("#bookingModal .booking-dialog");

  state.selectedBookingBranch = null;
  if (choice) choice.hidden = false;
  if (view) view.hidden = true;
  frame?.removeAttribute("src");
  if (loader) loader.hidden = true;
  dialog?.classList.remove("is-frame-mode");
}

function loadBookingBranch(branchId) {
  const branch = siteContent.branches.find((item) => item.id === branchId);
  const link = branch?.bookingUrl || bookingLinks[branchId];
  if (!link) return;

  const choice = qs("[data-booking-choice]") || qs("#bookingChoiceView");
  const view = qs("[data-booking-view]") || qs("#bookingFrameView");
  const loader = qs("#bookingLoader");
  const title = qs("[data-booking-title]") || qs("#bookingBranchTitle");
  const dialog = qs("#bookingModal .booking-dialog");
  const frame = qs("[data-booking-frame]") || qs("#bookingFrame");

  state.selectedBookingBranch = branchId;

  if (choice) choice.hidden = true;
  if (view) view.hidden = false;
  if (loader) loader.hidden = false;
  if (title) title.textContent = branch ? getText(branch.name) : branchId;
  dialog?.classList.add("is-frame-mode");
  if (frame) frame.src = link;
}

window.openBookingModal = openBookingModal;

function setupHeroParallax() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const hero = qs(".hero--cinematic");
  if (!hero) return;

  window.addEventListener("scroll", () => {
    const offset = Math.min(window.scrollY * 0.04, 28);
    hero.style.setProperty("--hero-parallax", `${offset}px`);
  }, { passive: true });
}

document.addEventListener("DOMContentLoaded", () => {
  setupRevealObserver();
  applyTranslations();
  setupHeader();
  setupLanguageSwitcher();
  setupGalleryFilters();
  setupBookingModal();
  setupHeroParallax();
  bindBookingButtons(document);
  hydrateRemoteContent();
});

window.addEventListener("storage", (event) => {
  if (event.key !== SITE_CONTENT_STORAGE_KEY) return;
  hydrateRemoteContent();
});
