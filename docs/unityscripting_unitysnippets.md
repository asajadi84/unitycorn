---
id: unityscripting_unitysnippets
title: قطعه‌کدهای کاربردی در یونیتی
slug: /unityscripting/unitysnippets
---

در این بخش به بررسی تعدادی قطعه‌کد کاربردی می‌پردازیم:

### ممانعت از به خواب رفتن صفحه‌نمایش پلیر در حین بازی

قطعه‌کد در یکی از متدهای `Awake` اولین صحنه نوشته شود.

```clike
Screen.sleepTimeout = SleepTimeout.NeverSleep;
```

### ایجاد ویبره در دستگاه کاربر

(در صورت پشتیبانی)

```clike
HandHeld.Vibrate();
```

### لود کردن صحنه

برای این کار باید فضای نام `UnityEngine.SceneManagement` وارد اسکریپت شود

```clike
SceneManager.LoadScene(index);
```

*`int index` : شماره‌ی صحنه در پنجره‌ی بیلد*

و یا

```clike
SceneManager.LoadScene(name);
```

*`string name` : نام فایل صحنه*

### باز کردن Url (آدرس اینترنتی) در بازی

```clike
Application.OpenUrl(“https://unitycorn.ir”);
```

### باز کردن صفحه‌ی اینستاگرام در بازی

```clike
Application.OpenUrl(“instagram://user?username=unitycorn_ir”);
```

### خروج از بازی

```clike
Application.Quit();
```