# الموقع الرسمي لـ د. أحمد المعيقلي

موقع Next.js عربي احترافي بتصميم مستوحى من الحضارة المصرية القديمة، ومجهز للنشر على Vercel.

## التشغيل محليًا

```bash
npm install
npm run dev
```

ثم افتح:

```bash
http://localhost:3000
```

## التعديل على البيانات

أغلب المحتوى موجود في:

```bash
data/site.js
```

## أهم الملفات

- `app/page.js` الصفحة الرئيسية
- `app/about/page.js` من هو الدكتور
- `app/services/page.js` الخدمات
- `app/articles/page.js` الأبحاث والمقالات
- `app/faq/page.js` الأسئلة الشائعة
- `app/contact/page.js` التواصل
- `app/globals.css` التصميم الكامل
- `public/hero-scene.svg` المشهد الفرعوني الرئيسي

## النشر على Vercel

1. ارفع المشروع على GitHub
2. ادخل إلى Vercel
3. اختر New Project
4. اربط المستودع
5. اضغط Deploy

## ملاحظات

- عدّل `siteUrl` داخل `data/site.js` بعد الحصول على رابط Vercel النهائي.
- إذا أردت دومينًا خاصًا، أضفه من إعدادات Vercel لاحقًا.

## Phase 3 additions
- English version available at `/en`.
- Official request page at `/request` and `/en/request`.
- Official downloads page at `/downloads` and `/en/downloads`.
- Google Analytics can be enabled with `NEXT_PUBLIC_GA_ID`.
- Google Search Console verification can be enabled with `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
- Footer includes professional credit: Designed & Developed by Ramy Elhawary.
