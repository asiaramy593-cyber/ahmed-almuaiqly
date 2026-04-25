# خطوات النشر والظهور في جوجل

1. ارفع المشروع كاملًا على GitHub.
2. افتح Vercel واختر Add New Project.
3. اختر مستودع المشروع ثم Deploy.
4. بعد النشر انسخ رابط الموقع من Vercel.
5. في Vercel > Settings > Environment Variables أضف:
   NEXT_PUBLIC_SITE_URL = رابط الموقع النهائي
6. افتح Google Search Console وأضف الموقع بنظام URL Prefix.
7. من Sitemaps أضف: sitemap.xml
8. من URL Inspection اطلب Request Indexing للصفحة الرئيسية.
