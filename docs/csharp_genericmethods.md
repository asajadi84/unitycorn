---
id: csharp_genericmethods
title: متدهای generic سی شارپ
slug: /csharp/genericmethods
---

یکی از متدهایی که بیشترین استفاده را در اسکریپت‌نویسی یونیتی دارد متد

```clike
GetComponent<T>()
```

است. بسیاری از کدنویسان سی شارپ و حتی افرادی که مهارت زیادی در استفاده از سی شارپ دارند ممکن است با این syntax (کاراکترهای `>` و `<` در جلوی نام متد) آشنایی نداشته باشند. در این قسمت به آشنایی با این نوع متدها که متدهای جنریک (ژنریک) نامیده می‌شوند می‌پردازیم.

متدهای جنریک متدهایی هستند که علاوه بر امکان پاس کردن مقادیر به آن‌ها، امکان پاس دادن نوع داده نیز به آن‌ها وجود دارد. البته این کار اتفاق تازه‌ای در زبان سی شارپ نیست و پیش از این نیز می‌توانستیم نوع داده را در قالب آرگومان به متد وارد کنیم. چیزی که تازه است syntax جدید این عمل است که در نسخه‌های جدید سی شارپ اضافه شده است.

با استفاده از این کار می‌توان علاوه بر مقدار، نوع داده را هم به درون متد پاس کرد:

```clike
using System;
class Program
{
    static void Main()
    {
        GenericMethod<int>(2);
        GenericMethod<string>("Ashkan");
        
        Console.ReadKey();
    }
    
    static void GenericMethod<T>(T variable)
    {
        Console.WriteLine("input is {0} and typeof {1}", variable, typeof(T));
    }
}
```

:::note نکته
جنریک می‌تواند در تعریف کلاس هم پاس شود و نه فقط در تعریف متد. یعنی:

```clike
using System;

class Program
{
    static void Main()
    {
        GenericClass<int>.GenericMethod(2);\
        GenericClass<string>.GenericMethod("Ashkan");
        
        Console.ReadKey();\
    }
}

class GenericClass<T>
{
    public static void GenericMethod(T variable)
    {
        Console.WriteLine("input is {0} and typeof {1}", variable, typeof(T));
    }
}
```
:::

:::note نکته
با استفاده از کاما می توان چندین نوع را در درون `<>` پاس کرد.
:::