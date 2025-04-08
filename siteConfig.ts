
/**
 * קונפיגורציית האתר - מכיל את כל פרטי האתר והתוכן שלו
 */

import { log, timeLog } from "console";
import { add, sub } from "date-fns";
import { Contact, LogOut, Subtitles } from "lucide-react";
import { y } from "node_modules/framer-motion/dist/types.d-B50aGbjN";
import { text } from "stream/consumers";

// תמונות רקע לכל הדפים
export const backgroundImages = {
  hero: '/files-uploads/back_sunset.png',    // רקע לעמוד הראשי
  about: '/files-uploads/city_back.png',     // רקע לעמוד אודות
  services: '/files-uploads/city_water.png',  // רקע לעמוד שירותים
  contact: '/files-uploads/back_water.png',  // רקע לעמוד צור קשר
}

// פרטי האתר הכלליים - משמשים בכל הדפים
export const siteConfig = {
  // פרטי האתר
  siteName: "ניצן קול בע״מ",
  legalName: "ניצן קול בע\"מ",
  siteDescription: "ניהול, פיקוח וייעוץ הנדסי מתקדם",
  siteTagline: "מצוינות הנדסית משלב הרעיון עד לרגע המפתח!",
  siteUrl: "https://www.nizankol.co.il",
  logo: {
    main: "/files-uploads/logob.png",
    alttxt: "ניצן קול בע\"מ",
    alternate: "/files-uploads/logonw.png",
    mainalt: "/files-uploads/logo.png",
  },

  // פרטי קשר
  contactinfo: {
    email: "office@nizankol.co.il",
    other_email: "ye.avocado@gamil.com",
    phone: "050-8588766",
    whatsapp: "972508588766",
    address: "אורלוזורוב 55, רמת גן, ישראל",
    workingHours: {
      days: "ראשון-חמישי",
      hours: "09:00-18:00"
    },
    formSubject: "פנייה חדשה מאתר ניצן קול",
    formConfirmationMessage: "תודה שפנית אלינו! נחזור אליך בהקדם.",
  },
  contact: {
    title: " צרו איתנו קשר",
    description: "נשמח לעזור לך בכל שאלה או בקשה.",
    subtitle: "יש לכם שאלה או רוצים לעבוד יחד? אל תהססו לפנות אלינו דרך אחד מערוצי התקשורת למטה.",
    buttonText: "שלח הודעה",
    contacttitle: "פרטי התקשורת",
    addresstitle: "כתובת:",
    phonetitle: "טלפון:",
    mailtitle: "אימייל:",
    picture: "/files-uploads/contact.png",
    picturealt: "ניצן קול בע״מ",
    form: [
      {
        label: "שם מלא",
        type: "text",
        name: "name",
        placeholder: "הכנס את שמך המלא",
        required: true,
      },
      {
        label: "כתובת אימייל",
        type: "email",
        name: "email",
        placeholder: "דוא״ל ליצירת קשר",
        required: true,
      },
      {
        label: "ההודעה שלך",
        type: "textarea",
        name: "message",
        placeholder: "איך נוכל לעזור לך?",
        required: true,
      },

    ]
  },
  // פרטי חברה
  company: {
    techSupplierIds: [
      { id: "102800", description: "ספק טכניון" },
      { id: "11018703", description: "ספק משהב\"ט" },
    ],
    foundedYear: 2013,
    completedProjects: "100+",
    completedlable: "פרויקטים שהושלמו",
    experienceYears: "100+",
    experiencelable: "שנות נסיון מצטבר ",
    //clientSatisfaction: "98%",
  },

  // קישורים בתפריט
  navigation: [

    { name: "אודות", href: "#about" },
    { name: "שירותים", href: "#services" },
    { name: "שאלות?", href: "#faq" },
    { name: "צור קשר", href: "#contact" },
  ],

  // hero section
  hero: {
    title: "ניהול, יעוץ ופיקוח על פרויקטי בינוי ומערכות עתירות	",
    subtitle: "פתרונות הנדסיים יצירתיים מחוץ לקופסא	",
    subtitleAdd: "חוות דעת משפטיות ",

    text: "אנו מתמחים בניהול פרויקטים, פיקוח בנייה, תיאום בין קבלנים וייעוץ הנדסי מקצועי. עם ניסיון של מעל 10 שנים בתחום, אנו מבטיחים שירות איכותי ומקצועי.",
    blocktitle: "אנו מתמחים בניהול פרויקטים, פיקוח בנייה, תיאום בין קבלנים וייעוץ הנדסי מקצועי. עם ניסיון של מעל 10 שנים בתחום, אנו מבטיחים שירות איכותי ומקצועי.",

    blocktext: [
      { text: "מומחים בפיקוח בנייה וחוות דעת משפטיות" },
      { text: "אנו מספקים שירותי פיקוח מקצועיים" },
      { text: "חוות דעת לבתי משפט" },
      { text: "בדיקות איכות מקיפות" },
      { text: "הניסיון והמקצועיות שלנו לשירותכם" },
    ],
  },
  // תוכן עמוד אודות
  about: {
    title: "מי אנחנו?",
    pertitle: "",
    paragraphs: [
      "חברת ניצן קול בע\"מ עוסקת במתן שירותי ניהול, פיקוח ובקרה, תיאום, וייעוץ הנדסי לפרויקטים בעולם הבניה והתשתיות.",
      "דגש החברה הוא על פרויקטים עתירי מערכות ומתן פתרונות להוזלת עלויות בפרויקטים.",
      "החברה מחוייבת למתן פתרונות כוללים לפרויקט - באיכויות גבוהות ובזמינות הנדרשת ע\"י הלקוח.",
      "לאנשי החברה ניסיון נרחב שנצבר בפרויקטים עתירי מערכות בארץ ובחו\"ל. , החל מייעוץ בשלבי התכנון הראשוני ועד המסירה."
    ],
    youtubeurl: "https://www.youtube.com/embed/Ih2Mrj7m1nE?si=C4VZW09uV3_bOiw5",
    youtubealt: "ניצן קול בע״מ",
    videotitle: "ניצן קול בע״מ",
    videoenabled: false,
    aboutimage: '/files-uploads/pic.jpg',
    imagealt: "ניצן קול בע״מ"
  },

  footer: {
    logo: "/files-uploads/logow.png",
    alttxt: "ניצן קול בע\"מ",
    title: "ניצן קול בע\"מ",
    description: "מצוינות הנדסית משלב הרעיון עד לרגע המפתח! חברת ניהול, פיקוח וייעוץ הנדסי מובילה בישראל.",
  },
  // לקוחות נבחרים
  clients: {
    clienttitle: "לקוחים נבחרים",
    clientlist: [
      { name: "משרד ראש הממשלה" },
      { name: "משרד הביטחון" },
      { name: "הטכניון" },
      { name: "The David Kempinski Tel Aviv" },
      { name: "גופים ציבוריים ובינלאומיים נוספים" },
    ]
  },
  // הגדרות נגישות
  accessibility: {
    enabled: true,
    toolbar: {
      position: "right", // "right" או "left"
      skipContentText: "דלג לתוכן",
      title: "אפשרויות נגישות",
      tools: [
        { name: "resize-plus", title: "הגדל טקסט" },
        { name: "resize-minus", title: "הקטן טקסט" },
        //{ name: "grayscale", title: "גווני אפור" },
        { name: "high-contrast", title: "ניגודיות גבוהה" },
        { name: "negative", title: "ניגודיות שלילית" },
        { name: "light-background", title: "רקע בהיר" },
        { name: "links-underline", title: "הדגשת קישורים" },
        { name: "readable-font", title: "פונט קריא" },
        { name: "reset", title: "איפוס" }
      ],
      focusable: true,
      removeTargetFromLinks: false,
      addRoleToLinks: true,
      savePreferences: true,
      saveExpiration: 12 // שעות
    }
  },
  // רשתות חברתיות
  social: {
    youtube: {
      logourl: "/files-uploads/youtube.png",
      url: "https://www.youtube.com/@nizankol",
      channelName: "ניצן קול בע\"מ"
    },
    twitter: {
      logourl: "/files-uploads/twitter.png",
      handle: "@nizankol",
      url: "https://twitter.com/nizankol"
    },
    facebook: {
      logourl: "/files-uploads/facebook.png",
      url: "https://www.facebook.com/nizankol"
    },
    linkedin: {
      logourl: "/files-uploads/linkedin.png",
      url: "https://www.linkedin.com/company/nizankol"
    },
    instagram: {
      logourl: "/files-uploads/instagram.png",
      url: "https://www.instagram.com/nizankol"
    },
    whatsupp: {
      logourl: "/files-uploads/whatsapp.png",
      url: "https://wa.me/972508588766"
    },
  }
};

// הוספת שירותים
export const servicesConfig = {
  title: "תחומי פעילות עיקריים",
  subtitle: "השירותים שלנו",
  description: "לפרויקטים בענף הבניה והתשתיות",
  services: [
    {
      title: ' חוות דעת משפטיות',
      description: ' חוות דעת מומחה לבתי משפט, חוות דעת מקצועיות בנושאי מערכות ובינוי .',
      icon: 'ic3',
    },
    {
      title: 'פיקוח בנייה מקצועי',
      description: 'פיקוח צמוד על פרויקטים בכל שלבי הבנייה עם דוחות מפורטים.',
      icon: 'ic4',
    },
    {
      title: '   ייעוץ, ניהול, תיאום ותכנון ',
      description: 'ניהול פרויקטים מהתכנון הראשוני ועד למסירה הסופית.',
      icon: 'ic1',
    },


    {
      title: 'יעוץ מיזוג ואוורור',
      description: 'ייעוץ מקצועי על פי התקנות והדרישות .',
      icon: 'ic5',
    },
  ],
};

// הוספת עדויות לקוחות
export const testimonialsConfig = {
  title: "מה אומרים עלינו הלקוחות",
  subtitle: "גלו כיצד השירותים שלנו עזרו ללקוחות רבים בתחום הנדל״ן והבנייה.",
  testimonials: [
    {
      name: "דוד לוי",
      role: "בעל דירה, תל אביב",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      quote: "חוות הדעת המקצועית שקיבלתי סייעה לי לזכות בתביעה נגד הקבלן. שירות מעולה ומקצועי!",
      rating: 5,
    },
    {
      name: "מיכל כהן",
      role: "עורכת דין, ירושלים",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      quote: "שיתוף הפעולה עם המשרד הוביל לתוצאות מצוינות עבור הלקוחות שלי. מקצועיות ללא פשרות.",
      rating: 5,
    },
    {
      name: "יוסי אברהם",
      role: "יזם נדל״ן, חיפה",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      quote: "הפיקוח הצמוד על הפרויקט חסך לי הרבה כסף וזמן. ממליץ בחום על השירותים המקצועיים!",
      rating: 4,
    },
  ],
};

// הוספת שאלות נפוצות (FAQ)
export const faqConfig = {
  title: "שאלות נפוצות",
  subtitle: "מידע שימושי",
  description: "תשובות לשאלות הנפוצות ביותר",
  faqs: [
    {
      question: "האם הינכם עורכים חוות דעת משפטיות רק על מערכות עתירות?",
      answer: "ממש לא.         אנחנו מספקים חוות דעת משפטיות מקצועיות גם בתחום הבינוי כולו – כולל שלד, גמרים, תיאום תוכניות, חריגות ביצוע, תקלות בשטח, כשלים מבניים והתאמה בין תכנון לביצוע.\n\nהחוות דעת שלנו מבוססות על בדיקות יסודיות ונכתבות בהתאם לדרישות משפטיות, כך שניתן להגישן כתיעוד מומחה כחלק מתביעה משפטית, הגנה או תהליך גישור."
    },
    {
      question: "למה חשוב שיועץ מיזוג ילווה את הפרויקט בשטח – ולא רק יחתום על התוכניות?",
      answer: "אצלנו זה בדיוק מה שתקבל: יועץ מקצועי שמכיר את השטח, מדבר עם הקבלנים, בודק את הביצוע בפועל ומונע טעויות בזמן אמת – לפני שהן עולות לך ביוקר.\n\nהליווי בשטח מאפשר זיהוי מיידי של אי-ציות לתוכניות, תיקון טעויות בהתקנה וכן התאמת המערכות לצרכי הלקוח ולדרישות התקן – הכל עוד לפני שהנזק נעשה בלתי הפיך."
    },
    {
      question: "מה קורה כשמתכננים מיזוג בלי לחשוב על רישוי עסקים?",
      answer: "חוזרים אחורה. משנים. משלמים שוב. ומאבדים זמן יקר.\n\nאנחנו יודעים לשלב מראש בין הנדסה, תכנון, דרישות רגולציה וביצוע – וכך חוסכים לך את כל הבלגן הזה. התכנון שלנו מגיע עם \"visão futura\" – כלומר, כל פרט כבר עובר דרישה מול הרשות המקומית כדי לוודא שאין בעיה בהמשך הדרך."
    },
    {
      question: "מה קורה כשאין תיאום נכון מול דרישות טופס 10א'?",
      answer: "עיכובים, דרישות תיקון ותחילתה של סאגה מיותרת.\n\nאצלנו בודקים את הדרישות מראש, מתאמים עם כיבוי אש ודואגים שתעמוד בכל הדרישות – בלי הפתעות. אנחנו מבינים את האזור הדק שבין תכנון לביצוע, ולכן מוודאים שכל הפרטים יושבים טוב לפני ההגשה."
    },
    {
      question: "יש לך ליווי מסודר מול הרשויות בטופס 11א'?",
      answer: "אצלנו לא נשארים לבד.\n\nאנחנו מלווים את הלקוח עד להשלמת הדרישות מול כיבוי אש והגשת המסמכים לתיק הרישוי. הליך זה כולל עריכת התאמות דחופות, טיפול בהערות מהרשויות ווידוא שההכרזה הסופית תצא כמו שצריך – כדי שלא תצטרך לדאוג."
    },
    {
      question: "מה עושים כשמערכות מתנגשות פיזית בשטח?",
      answer: "במהלך הפרויקטים השונים, לא פעם מתקבל גובה ראש נמוך ולא דקורטיבי, דבר המשפיע על הנראות היומיומית ועל חווית המשתמש.\n\nהפתרון שלנו:\n\nמעבר לשימוש בטכנולוגיות תלת מימד, אנו יודעים גם לחשוב מחוץ לקופסאות ולמעשה לייתר את הצורך בשימוש במערכות שונות או להציע חלופות שונות וזאת תוך שימוש בידע בתקנים השונים. הדבר חוסך הן בעלויות והן בזמני הביצוע."
    },
    {
      question: "איך מתמודדים עם בעיה באינטגרציה בין מערכות ביום הבדיקה?",
      answer: "הפתרון שלנו:\n\nביצוע סיור הכנה מקדים. בדיקת הכיול של הרכיבים השונים. איתור נקודות תקלה לפני שהן הופכות לבעיות גדולות.\n\nכך שביום הבדיקה עצמו, הכל עובד בצורה חלקה ומדויקת – ללא תקלות או תקלות אחרונות שאולי יכשילו את כל הפרויקט."
    },
    {
      question: "מה עושים כשקיר נושא נשמט מהתכנון – בזמן יציקה?",
      answer: "במהלך יציקה, התברר שקיר נושא לא מופיע בתוכנית בפועל.\n\nעיכוב בשלב קריטי וסיכון מבני מיידי.\n\nהפתרון שלך:\n\nעצרתי את העבודה, תכננתי תחליף באמצעות עמודי פלדה דקורטיביים, שפתרו את הבעיה והפכו לאלמנט עיצובי אהוב בפרויקט. כך קיבלנו שני ציפורים במכה אחת: פתרון מבני מושלם יחד עם תוספת אסתטית."
    },
    {
      question: "הדיירים טענו לריצוף פגום – רשלנות קבלן?",
      answer: "שברים ו\"חללים\" בריצוף הובילו לדרישה לפיצויים.\n\nחזקות הדעת שלנו הוכיחו:\n\nשהריהוט כבד גרם לנזק, וההדבקה הייתה תקינה.\n\n🔒 התביעה בוטלה – הקבלן יצא נקי ואף ביצע תיקונים בתשלום."
    },
    {
      question: "שכן דרש פיצוי על סדקים – אשמת החפירות?",
      answer: "שכן טען שסדקים נגרמו מעבודות הפרויקט.\n\nחזקות הדעת שלנו הראו:\n\nשהסדקים קדמו לבנייה והבית בנוי ללא היתר.\n\n🔒 התביעה נדחתה – היזם ניצל מהפסד כספי כבד."
    },
    {
      question: "מערכת מיזוג בבניין ציבורי לא סיפקה מספיק אוויר צח – היזם דרש להחליף את כל היחידות.",
      answer: "הפתרון היצירתי שלנו:\n\nבחוות הדעת זיהיתי שהבעיה היא רק במיקום פתחי היניקה – לא במערכות עצמן.\n\nהתוצאה:\n\nהוספנו מפוחים ובקרה חכמה → התקן מולא, חסכון עצום, אפס עיכובים. ✅"
    },
    {
      question: "שליטה בתקנים שהצילה את הפרויקט",
      answer: "בביקורת טופס 4 בפרויקט ציבורי, נדרשנו להחליף את מערכת המיזוג בטענה לאי-עמידה בת\"י 5281 (בניין ירוק).\n\nהבנתנו מיד שהדרישה התבססה על פרשנות שגויה של התקן.\n\nהפתרונות שלנו:\n\n✅ הצגנו שחיבור לממשק ניהול (BMS) קיים כבר דרך מודול תקשורת מובנה.\n\n✅ הבאנו אישורי יצרן + הפניה ישירה לסעיף התקן.\n\n✅ הצענו פתרון תוכנה מינימלי במקום החלפה יקרה.\n\nהתוצאה:\n\nהדרישה בוטלה, טופס 4 אושר, הפרויקט המשיך כמתוכנן – וחסכנו ללקוח מאות אלפי שקלים."
    }
  ],
  faqctatitle: "יש לכם שאלות נוספות?",
  faqctatext: "בואו נעבוד יחד כדי להביא את הרעיונות שלכם לחיים. צרו קשר עוד היום ונתחיל בשיחה על הצרכים שלכם."
};