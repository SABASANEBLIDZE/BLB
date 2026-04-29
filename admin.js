const adminPassword = "blb2026";
const SITE_CONTENT_STORAGE_KEY = "blb_site_content";
const ADMIN_LANGUAGE_STORAGE_KEY = "blbLanguage";
const supportedLanguages = ["ka", "en", "ru"];
const durationUnitByLang = { ka: "წთ", en: "min", ru: "мин" };

const storedAdminLang = localStorage.getItem(ADMIN_LANGUAGE_STORAGE_KEY);
let activeServiceLang = supportedLanguages.includes(storedAdminLang) ? storedAdminLang : "ka";

const text = (ka, en, ru) => ({ ka, en, ru });

const adminTranslations = {
  ka: {
    loginTitle: "ადმინი",
    loginText: "შეიყვანე ადმინისტრატორის პაროლი, რომ შეცვალო ცოცხალი სერვისები, ფასები და ფოტოები.",
    passwordLabel: "პაროლი",
    passwordPlaceholder: "შეიყვანე პაროლი",
    enterButton: "შესვლა",
    topEyebrow: "სამართავი პანელი",
    dashboardTitle: "Brow & Lash Bar კონტენტი",
    dashboardText: "Supabase ჩართულია. შენახული KA, EN და RU სერვისები ყველა მოწყობილობაზე გამოჩნდება.",
    backButton: "საიტზე დაბრუნება",
    servicesTitle: "სერვისები",
    servicesText: "დაარედაქტირე ერთი ენა ერთდროულად. ფასი, დრო და ფოტო საერთოა.",
    galleryTitle: "გალერეის ფოტოები",
    saveTitle: "კონტენტის შენახვა",
    saveText: "შენახვა კონტენტს Supabase-ში აქვეყნებს. ლოკალური ასლი მხოლოდ სარეზერვოდ რჩება.",
    saveButton: "ცვლილებების შენახვა",
    resetButton: "საწყისზე დაბრუნება",
    exportButton: "JSON ასლის შექმნა",
    exportPlaceholder: "სურვილისამებრ JSON ასლი აქ გამოჩნდება.",
    incorrectPassword: "პაროლი არასწორია.",
    loaded: "ცოცხალი მრავალენოვანი კონტენტი Supabase-დან ჩაიტვირთა.",
    noRemote: "Supabase-ში კონტენტი ვერ მოიძებნა. ჩატვირთულია საწყისი კონტენტი.",
    loadFailed: "Supabase-დან ჩატვირთვა ვერ მოხერხდა. ჩატვირთულია საწყისი კონტენტი.",
    saving: "მრავალენოვანი კონტენტი ინახება...",
    saved: "სამივე ენის კონტენტი Supabase-ში შეინახა.",
    saveFailed: "Supabase-ში შენახვა ვერ მოხერხდა. ლოკალური ასლი შენარჩუნებულია.",
    resetDone: "ამ ბრაუზერში კონტენტი საწყისზე დაბრუნდა.",
    exportDone: "JSON სარეზერვო ასლი შეიქმნა.",
    service: "სერვისი",
    title: "სათაური",
    description: "აღწერა",
    category: "კატეგორია",
    duration: "ხანგრძლივობა",
    price: "ფასი",
    image: "ფოტოს URL",
    shared: "საერთო",
    durationHint: "შეიყვანე მხოლოდ რიცხვი",
    galleryImage: "გალერეის ფოტო",
    imageUrl: "ფოტოს URL",
    altText: "Alt ტექსტი"
  },
  en: {
    loginTitle: "Admin",
    loginText: "Enter the admin password to edit live services, prices and images.",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter password",
    enterButton: "Enter",
    topEyebrow: "Production admin",
    dashboardTitle: "Brow & Lash Bar content",
    dashboardText: "Supabase is connected. Saved KA, EN and RU services publish across all devices.",
    backButton: "Back to website",
    servicesTitle: "Services",
    servicesText: "Edit one language at a time. Price, duration and image stay shared.",
    galleryTitle: "Gallery Images",
    saveTitle: "Save content",
    saveText: "Save publishes live content to Supabase. A local backup is kept only as a fallback.",
    saveButton: "Save changes",
    resetButton: "Reset to default",
    exportButton: "Export JSON backup",
    exportPlaceholder: "Optional JSON backup will appear here.",
    incorrectPassword: "Incorrect password.",
    loaded: "Loaded live multilingual content from Supabase.",
    noRemote: "No Supabase content found. Default content is loaded.",
    loadFailed: "Could not load Supabase content. Default content is loaded.",
    saving: "Saving multilingual content...",
    saved: "Saved all three languages to Supabase.",
    saveFailed: "Supabase save failed. Local backup was kept.",
    resetDone: "Reset to default content for this browser.",
    exportDone: "JSON backup generated.",
    service: "Service",
    title: "Title",
    description: "Description",
    category: "Category",
    duration: "Duration",
    price: "Price",
    image: "Image URL",
    shared: "shared",
    durationHint: "Enter the number only",
    galleryImage: "Gallery image",
    imageUrl: "Image URL",
    altText: "Alt text"
  },
  ru: {
    loginTitle: "Админ",
    loginText: "Введите пароль администратора, чтобы редактировать услуги, цены и изображения.",
    passwordLabel: "Пароль",
    passwordPlaceholder: "Введите пароль",
    enterButton: "Войти",
    topEyebrow: "Панель управления",
    dashboardTitle: "Контент Brow & Lash Bar",
    dashboardText: "Supabase подключен. Сохраненные услуги KA, EN и RU публикуются на всех устройствах.",
    backButton: "Вернуться на сайт",
    servicesTitle: "Услуги",
    servicesText: "Редактируйте один язык за раз. Цена, время и фото остаются общими.",
    galleryTitle: "Изображения галереи",
    saveTitle: "Сохранение контента",
    saveText: "Сохранение публикует контент в Supabase. Локальная копия остается только как резерв.",
    saveButton: "Сохранить изменения",
    resetButton: "Вернуть исходное",
    exportButton: "Создать JSON-копию",
    exportPlaceholder: "Необязательная JSON-копия появится здесь.",
    incorrectPassword: "Неверный пароль.",
    loaded: "Многоязычный контент загружен из Supabase.",
    noRemote: "Контент в Supabase не найден. Загружен исходный контент.",
    loadFailed: "Не удалось загрузить контент из Supabase. Загружен исходный контент.",
    saving: "Многоязычный контент сохраняется...",
    saved: "Контент всех трех языков сохранен в Supabase.",
    saveFailed: "Не удалось сохранить в Supabase. Локальная копия сохранена.",
    resetDone: "Контент в этом браузере возвращен к исходному.",
    exportDone: "JSON-копия создана.",
    service: "Услуга",
    title: "Название",
    description: "Описание",
    category: "Категория",
    duration: "Длительность",
    price: "Цена",
    image: "URL изображения",
    shared: "общее",
    durationHint: "Введите только число",
    galleryImage: "Изображение галереи",
    imageUrl: "URL изображения",
    altText: "Alt-текст"
  }
};

// Supabase is the source of truth. localStorage is used only as a backup/cache.
const defaultEditableContent = {
  services: [
    {
      icon: "BR",
      categoryKey: "brows",
      category: text("წარბები", "Brows", "Брови"),
      categoryLabel: text("წარბები", "Brows", "Брови"),
      title: text("წარბის ფორმირება", "Brow shaping", "Коррекция формы бровей"),
      description: text(
        "ზუსტი ფორმირება, მსუბუქი კორექცია და სახის ფორმაზე მორგებული სუფთა ხაზი.",
        "Precise shaping, soft correction and a clean line designed for your facial architecture.",
        "Точная форма, мягкая коррекция и чистая линия, подобранная под черты лица."
      ),
      durationValue: "30",
      duration: text("30 წთ", "30 min", "30 мин"),
      price: "39 ₾",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=760&q=82"
    },
    {
      icon: "LA",
      categoryKey: "lashes",
      category: text("წამწამები", "Lashes", "Ресницы"),
      categoryLabel: text("წამწამები", "Lashes", "Ресницы"),
      title: text("წამწამის ლამინაცია", "Lash lamination", "Ламинирование ресниц"),
      description: text(
        "აწეული, ბუნებრივი და რბილად გამოკვეთილი წამწამები ყოველდღიური კომფორტისთვის.",
        "Lifted, soft and naturally defined lashes for everyday ease.",
        "Приподнятые, мягкие и естественно подчеркнутые ресницы на каждый день."
      ),
      durationValue: "60",
      duration: text("60 წთ", "60 min", "60 мин"),
      price: "39 ₾",
      image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=760&q=82"
    },
    {
      icon: "BL",
      categoryKey: "brows",
      category: text("წარბები", "Brows", "Брови"),
      categoryLabel: text("წარბები", "Brows", "Брови"),
      title: text("წარბის ლამინაცია", "Brow lamination", "Ламинирование бровей"),
      description: text(
        "მოვლილი, უფრო მოცულობითი წარბები, რომლებიც ფორმას ლამაზად ინარჩუნებს.",
        "Polished, fuller-looking brows that hold their shape beautifully.",
        "Ухоженные и визуально более густые брови, которые красиво сохраняют форму."
      ),
      durationValue: "50",
      duration: text("50 წთ", "50 min", "50 мин"),
      price: "39 ₾",
      image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=760&q=82"
    },
    {
      icon: "EX",
      categoryKey: "lashes",
      category: text("წამწამები", "Lashes", "Ресницы"),
      categoryLabel: text("წამწამები", "Lashes", "Ресницы"),
      title: text("წამწამის დაგრძელება", "Lash extensions", "Наращивание ресниц"),
      description: text(
        "კლასიკური ან რბილი მოცულობა, შერჩეული შენი თვალის ფორმისა და სტილისთვის.",
        "Classic or soft volume selected for your eye shape and personal style.",
        "Классический или мягкий объем, подобранный под форму глаз и ваш стиль."
      ),
      durationValue: "90",
      duration: text("90 წთ", "90 min", "90 мин"),
      price: "39 ₾",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=760&q=82"
    },
    {
      icon: "MU",
      categoryKey: "beauty",
      category: text("სილამაზე", "Beauty", "Красота"),
      categoryLabel: text("სილამაზე", "Beauty", "Красота"),
      title: text("მაკიაჟი", "Makeup", "Макияж"),
      description: text(
        "დახვეწილი სილამაზის მომსახურება დღისთვის, საღამოსთვის ან განსაკუთრებული მომენტისთვის.",
        "Refined beauty service for daytime, evening or a special moment.",
        "Элегантный макияж для дневного образа, вечера или особого события."
      ),
      durationValue: "60",
      duration: text("60 წთ", "60 min", "60 мин"),
      price: "39 ₾",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=760&q=82"
    },
    {
      icon: "CO",
      categoryKey: "consultation",
      category: text("კონსულტაცია", "Consultation", "Консультация"),
      categoryLabel: text("კონსულტაცია", "Consultation", "Консультация"),
      title: text("კონსულტაცია", "Consultation", "Консультация"),
      description: text(
        "პერსონალური რეკომენდაცია ფორმაზე, ფერზე, მოვლასა და შესაფერის სერვისზე.",
        "Personal guidance on shape, color, care and the right service for you.",
        "Индивидуальная консультация по форме, цвету, уходу и выбору подходящей услуги."
      ),
      durationValue: "20",
      duration: text("20 წთ", "20 min", "20 мин"),
      price: "39 ₾",
      image: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?auto=format&fit=crop&w=760&q=82"
    }
  ],
  gallery: [
    {
      category: "brows",
      src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=720&q=82",
      alt: "Refined brow shape"
    },
    {
      category: "lashes",
      src: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=720&q=82",
      alt: "Beautiful lash result"
    },
    {
      category: "studio",
      src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=980&q=82",
      alt: "Elegant beauty studio"
    },
    {
      category: "brows",
      src: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=720&q=82",
      alt: "Natural brow result"
    },
    {
      category: "lashes",
      src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=720&q=82",
      alt: "Premium lash service"
    },
    {
      category: "studio",
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=720&q=82",
      alt: "Clean salon interior"
    }
  ],
  branches: [
    {
      id: "vake",
      name: "Vake",
      address: "Vake, address will be added soon",
      mapUrl: "https://maps.app.goo.gl/DbP7DQKg5sdFCw8p7",
      bookingUrl: "https://n129312.alteg.io/company/62559/personal/menu?o=m-1s9836179"
    },
    {
      id: "saburtalo",
      name: "Saburtalo",
      address: "Saburtalo, address will be added soon",
      mapUrl: "https://maps.app.goo.gl/mwzpxfwD9wopAJXV6",
      bookingUrl: "https://n129312.alteg.io/company/641147/personal/menu?o="
    }
  ]
};

let editableContent = loadEditableContent();
let currentStatusKey = "";

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => [...document.querySelectorAll(selector)];
const adminT = (key) => adminTranslations[activeServiceLang]?.[key] || adminTranslations.en[key] || key;

function loadEditableContent() {
  const storedContent = localStorage.getItem(SITE_CONTENT_STORAGE_KEY);
  if (!storedContent) return structuredClone(defaultEditableContent);

  try {
    return mergeEditableContent(JSON.parse(storedContent));
  } catch (error) {
    console.warn("Could not load admin content from localStorage.", error);
    return structuredClone(defaultEditableContent);
  }
}

function mergeEditableContent(content = {}) {
  return {
    ...structuredClone(defaultEditableContent),
    ...content,
    services: Array.isArray(content.services) && content.services.length > 0
      ? content.services.map((service, index) => normalizeEditableService(service, defaultEditableContent.services[index]))
      : structuredClone(defaultEditableContent.services),
    gallery: Array.isArray(content.gallery) && content.gallery.length > 0
      ? content.gallery
      : structuredClone(defaultEditableContent.gallery),
    branches: Array.isArray(content.branches) && content.branches.length > 0
      ? content.branches
      : structuredClone(defaultEditableContent.branches)
  };
}

function normalizeEditableService(service = {}, fallback = {}) {
  const categorySource = service.category && typeof service.category === "object"
    ? service.category
    : service.categoryLabel;
  const normalizedCategory = toMultilingualText(
    categorySource,
    fallback.category || fallback.categoryLabel
  );
  const durationValue = getDurationValue(service.durationValue || service.duration, fallback.durationValue || fallback.duration);
  const duration = makeDurationText(durationValue);

  return {
    ...fallback,
    ...service,
    title: toMultilingualText(service.title, fallback.title),
    description: toMultilingualText(service.description, fallback.description),
    categoryKey: service.categoryKey || (typeof service.category === "string" ? service.category : fallback.categoryKey || ""),
    category: normalizedCategory,
    categoryLabel: normalizedCategory,
    durationValue,
    duration,
    image: service.image || fallback.image || "",
    price: service.price || fallback.price || ""
  };
}

function toMultilingualText(value, fallbackValue = {}) {
  const fallback = typeof fallbackValue === "object" && fallbackValue !== null
    ? fallbackValue
    : { ka: fallbackValue || "", en: fallbackValue || "", ru: fallbackValue || "" };

  if (typeof value === "string") {
    return {
      ka: fallback.ka || value,
      en: value,
      ru: fallback.ru || value
    };
  }

  if (value && typeof value === "object") {
    const enValue = value.en || fallback.en || value.ka || value.ru || "";
    return {
      ka: value.ka || fallback.ka || enValue,
      en: enValue,
      ru: value.ru || fallback.ru || enValue
    };
  }

  return {
    ka: fallback.ka || fallback.en || "",
    en: fallback.en || fallback.ka || "",
    ru: fallback.ru || fallback.en || ""
  };
}

function getLangValue(value, lang = activeServiceLang) {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[lang] || value.en || value.ka || "";
}

function getDurationValue(value, fallbackValue = "") {
  const rawValue = typeof value === "object" && value !== null
    ? value.en || value.ka || value.ru || ""
    : value || fallbackValue || "";
  const match = String(rawValue).match(/\d+(?:[.,]\d+)?/);
  return match ? match[0].replace(",", ".") : String(rawValue).replace(/[^\d.]/g, "");
}

function makeDurationText(value) {
  const cleanValue = String(value || "").trim();
  return supportedLanguages.reduce((duration, lang) => {
    duration[lang] = cleanValue ? `${cleanValue} ${durationUnitByLang[lang]}` : "";
    return duration;
  }, {});
}

async function fetchCmsContent() {
  if (!window.supabaseClient) return null;

  const { data, error } = await window.supabaseClient
    .from("site_content")
    .select("content")
    .eq("id", window.CONTENT_ROW_ID)
    .single();

  if (error) throw error;
  return data?.content || null;
}

async function saveCmsContent(content) {
  if (!window.supabaseClient) throw new Error("Supabase client is not loaded.");

  const { error } = await window.supabaseClient
    .from("site_content")
    .update({
      content,
      updated_at: new Date().toISOString()
    })
    .eq("id", window.CONTENT_ROW_ID);

  if (error) throw error;
  return true;
}

async function hydrateCmsContent() {
  try {
    const remoteContent = await fetchCmsContent();
    if (remoteContent) {
      editableContent = mergeEditableContent(remoteContent);
      localStorage.setItem(SITE_CONTENT_STORAGE_KEY, JSON.stringify(editableContent));
      renderEditors();
      setStatus("loaded");
      return;
    }
    editableContent = structuredClone(defaultEditableContent);
    renderEditors();
    setStatus("noRemote");
  } catch (error) {
    console.warn(error);
    editableContent = structuredClone(defaultEditableContent);
    renderEditors();
    setStatus("loadFailed");
  }
}

function applyAdminTranslations() {
  document.documentElement.lang = activeServiceLang;
  document.body.lang = activeServiceLang;

  qsa("[data-admin-i18n]").forEach((element) => {
    element.textContent = adminT(element.dataset.adminI18n);
  });

  qsa("[data-admin-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", adminT(element.dataset.adminI18nPlaceholder));
  });

  if (currentStatusKey) setStatus(currentStatusKey);
  updateLanguageTabs();
}

function renderEditors() {
  applyAdminTranslations();
  renderServiceEditor();
  renderGalleryEditor();
}

function renderServiceEditor() {
  qs("#serviceEditor").innerHTML = editableContent.services.map((service, index) => `
    <article class="editor-row">
      <div class="editor-row__header">
        <strong>${adminT("service")} ${index + 1}</strong>
        <span>${activeServiceLang.toUpperCase()}</span>
      </div>
      <label>${adminT("title")} (${activeServiceLang.toUpperCase()})
        <input type="text" value="${escapeHtml(getLangValue(service.title))}" data-service-field="title" data-service-index="${index}" data-service-lang="${activeServiceLang}">
      </label>
      <label>${adminT("description")} (${activeServiceLang.toUpperCase()})
        <textarea data-service-field="description" data-service-index="${index}" data-service-lang="${activeServiceLang}">${escapeHtml(getLangValue(service.description))}</textarea>
      </label>
      <label>${adminT("category")} (${activeServiceLang.toUpperCase()})
        <input type="text" value="${escapeHtml(getLangValue(service.category))}" data-service-field="category" data-service-index="${index}" data-service-lang="${activeServiceLang}">
      </label>
      <label>${adminT("duration")} (${adminT("shared")}, ${durationUnitByLang[activeServiceLang]})
        <input type="text" inputmode="decimal" value="${escapeHtml(service.durationValue)}" placeholder="${escapeHtml(adminT("durationHint"))}" data-shared-service-field="durationValue" data-service-index="${index}">
      </label>
      <label>${adminT("price")} (${adminT("shared")})
        <input type="text" value="${escapeHtml(service.price)}" data-shared-service-field="price" data-service-index="${index}">
      </label>
      <label>${adminT("image")} (${adminT("shared")})
        <input type="url" value="${escapeHtml(service.image)}" data-shared-service-field="image" data-service-index="${index}">
      </label>
    </article>
  `).join("");
}

function renderGalleryEditor() {
  qs("#galleryEditor").innerHTML = editableContent.gallery.map((image, index) => `
    <article class="editor-row">
      <strong>${adminT("galleryImage")} ${index + 1}</strong>
      <label>${adminT("imageUrl")}
        <input type="url" value="${escapeHtml(image.src)}" data-gallery-src="${index}">
      </label>
      <label>${adminT("altText")}
        <input type="text" value="${escapeHtml(image.alt)}" data-gallery-alt="${index}">
      </label>
      <label>${adminT("category")}
        <input type="text" value="${escapeHtml(image.category)}" data-gallery-category="${index}">
      </label>
    </article>
  `).join("");
}

function updateLanguageTabs() {
  qsa("[data-admin-lang]").forEach((button) => {
    const isActive = button.dataset.adminLang === activeServiceLang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

function syncFromFields() {
  qsa("[data-service-field]").forEach((input) => {
    const service = editableContent.services[Number(input.dataset.serviceIndex)];
    const field = input.dataset.serviceField;
    const lang = input.dataset.serviceLang;
    if (!service || !field || !lang) return;

    service[field] = toMultilingualText(service[field]);
    service[field][lang] = input.value;

    if (field === "category") {
      service.categoryLabel = toMultilingualText(service.category);
    }
  });

  qsa("[data-shared-service-field]").forEach((input) => {
    const service = editableContent.services[Number(input.dataset.serviceIndex)];
    const field = input.dataset.sharedServiceField;
    if (!service || !field) return;
    service[field] = input.value;

    if (field === "durationValue") {
      service.durationValue = getDurationValue(input.value);
      service.duration = makeDurationText(service.durationValue);
    }
  });

  qsa("[data-gallery-src]").forEach((input) => {
    editableContent.gallery[Number(input.dataset.gallerySrc)].src = input.value;
  });

  qsa("[data-gallery-alt]").forEach((input) => {
    editableContent.gallery[Number(input.dataset.galleryAlt)].alt = input.value;
  });

  qsa("[data-gallery-category]").forEach((input) => {
    editableContent.gallery[Number(input.dataset.galleryCategory)].category = input.value;
  });
}

async function saveContent() {
  const saveButton = qs("#saveContent");
  syncFromFields();
  editableContent = mergeEditableContent(editableContent);
  localStorage.setItem(SITE_CONTENT_STORAGE_KEY, JSON.stringify(editableContent));
  setStatus("saving");
  saveButton.disabled = true;

  try {
    await saveCmsContent(editableContent);
    setStatus("saved");
  } catch (error) {
    console.warn(error);
    setStatus("saveFailed");
  } finally {
    saveButton.disabled = false;
  }
}

function resetContent() {
  localStorage.removeItem(SITE_CONTENT_STORAGE_KEY);
  editableContent = structuredClone(defaultEditableContent);
  renderEditors();
  qs("#exportOutput").value = "";
  setStatus("resetDone");
}

function exportContent() {
  syncFromFields();
  qs("#exportOutput").value = JSON.stringify(mergeEditableContent(editableContent), null, 2);
  setStatus("exportDone");
}

function setStatus(key) {
  currentStatusKey = key;
  const status = qs("#adminStatus");
  if (status) status.textContent = adminT(key);
}

function unlockAdmin() {
  qs("#adminLogin").hidden = true;
  qs("#adminDashboard").hidden = false;
  qs("#adminError").textContent = "";
  renderEditors();
  hydrateCmsContent();
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

document.addEventListener("DOMContentLoaded", () => {
  applyAdminTranslations();

  qs("#passwordForm").addEventListener("submit", (event) => {
    event.preventDefault();
    if (qs("#adminPassword").value === adminPassword) {
      unlockAdmin();
      return;
    }
    qs("#adminError").textContent = adminT("incorrectPassword");
    qs("#adminPassword").focus();
  });

  qsa("[data-admin-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      syncFromFields();
      activeServiceLang = supportedLanguages.includes(button.dataset.adminLang) ? button.dataset.adminLang : "ka";
      localStorage.setItem(ADMIN_LANGUAGE_STORAGE_KEY, activeServiceLang);
      renderEditors();
      if (qs("#adminError").textContent) qs("#adminError").textContent = adminT("incorrectPassword");
    });
  });

  qs("#saveContent").addEventListener("click", saveContent);
  qs("#resetContent").addEventListener("click", resetContent);
  qs("#exportContent").addEventListener("click", exportContent);
});
