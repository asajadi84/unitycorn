---
id: csharp_tips
title: نکات سی شارپ
slug: /csharp/tips
---

## یک آرایه از value type رفتاری شبیه به reference type دارد

یک نکته‌ی جالب و از قلم افتاده در زبان سی شارپ و جاوا این است که یک آرایه از value type هنگام پاس شدن به درون یک متد رفتاری شبیه به reference type نشان می‌دهد و مقدار آن تحت تاثیر اتفاقات داخل متد قرار می‌گیرد:

```clike
using System;

class Program
{
    static void Main()
    {
        int[] arOriginal = { 10, 20, 30 };
        Console.WriteLine("Original before: " + arOriginal[0]);
        IncrementValue(arOriginal);
        Console.WriteLine("Original after: " + arOriginal[0]);
        Console.ReadKey();
    }
    
    static void IncrementValue(int[] inMethod)
    {
        inMethod[0]++;
        Console.WriteLine("In method: " + inMethod[0]);
    }
}
```

خروجی به صورت زیر است:

```clike
Original before: 10
In method: 11
Original after: 11
```