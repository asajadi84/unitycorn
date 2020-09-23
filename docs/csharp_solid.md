---
id: csharp_solid
title: قواعد SOLID در طراحی شی‌گرا
slug: /csharp/solid
---

طراحی شی‌گرا در کنار مزایای بی‌شمار خود، به دلیل وابستگی زیاد اشیا به یکدیگر می‌تواند گیج‌کننده و پیچیده شود. پس از سال‌ها کدنویسی شی‌گرا توسط توسعه‌دهندگان مختلف مشکلاتی از قبیل تغییر ناخواسته‌ی رفتار کد یا از کار افتادن آن هنگام تغییر قسمت غیرمرتبطی از آن، غیر قابل استفاده بودن کد در سایر پروژه‌ها و… نیز مشاهده شد. یکی از مجموعه قواعدی که برای رفع این مشکلات ایجاد شد قواعد SOLID بود. استفاده از این قواعد باعث آسان‌تر شدن روند توسعه، تمیزی کد و قابلیت درک بیشتر پروژه برای سایر برنامه‌نویسان می‌شود.

![image](/img/oop_solid.png)

*عکس از whereiskieran.com*

## SRP یا قاعده‌ی تک‌وظیفه‌ای (Single responsibility principle)

> There should never be more than one reason for a class to change

این قاعده بیان می‌کند که هر کلاس تنها باید یک وظیفه برعهده داشته باشد. معمولاً این موضوع در هنگام توسعه در یونیتی رعایت می‌شود. چرا که هر اسکریپت تنها برای ایجاد یک رفتار خاص نوشته شده و در قالب کامپوننت به گیم‌آبجکت اضافه می‌شود. به عنوان مثال در صورتی که قصد داشته باشیم گیم‌آبجکت دشمن به سمت نیروهای خودی حرکت کند و پس از رسیدن به آن‌ها شلیک نماید این دو رفتار را باید در دو اسکریپت مجزا نوشته و در قالب دو کامپوننت مجزا به گیم‌آبجکت اضافه کنیم. هرچند که ایجاد این دو رفتار با یک اسکریپت نیز امکان‌پذیر است اما این عمل خوانایی پروژه را کاهش می‌دهد.

## OCP یا قاعده‌ی باز-بسته (Open/closed principle)

> Classes & functions should be open for extension but closed for modification

این قاعده بر این نکته تاکید دارد که طراحی باید به گونه‌ای صورت پذیرد که هنگام افزودن قابلیتی جدید به پروژه، نیاز به بازبینی و اصلاح کدهای قبلی نباشد؛ به عبارت دیگر اجزای برنامه باید بتوانند نسبت به ایجاد امکانات جدید در پروژه از خود انعطاف نشان دهند. این قاعده بر ایجاد abstraction تاکید دارد.

برای مثال فرض کنید می‌خواهیم برنامه‌ای بنویسیم که مساحت اشکال هندسی را محاسبه کند. بدیهی است که مساحت هر شکل با فرمول (و متد) متفاوتی محاسبه می‌شود. برای نوشتن این برنامه ابتدا برای هر شکل هندسی کلاس مخصوص خودش را ایجاد کرده و برای هرکدام از آن کلاس‌ها متد محاسبه‌ی مساحت متناسب با شکل (با نام فرضی `CalculateArea`) می‌نویسیم. سپس اینترفیسی به نام `IShape` ایجاد کرده که تضمین کند کلاس‌های اشکال هندسی این متد را پیاده‌سازی کرده‌اند و اینترفیس را به کلاس‌ها نسبت می‌دهیم.

```clike
using System;

namespace ConsoleApplication1
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            IShape myShape1 = new Circle(10);
            Console.WriteLine("Area is: " + myShape1.CalculateArea());
            
            IShape myShape2 = new Rectangular(10, 20);
            Console.WriteLine("Area is: " + myShape2.CalculateArea());
        }
    }
    
    public interface IShape
    {
        double CalculateArea();
    }
    
    public class Circle : IShape
    {
        private double radius;
        
        public double CalculateArea()
        {
            return radius * radius * 3.14;
        }
        
        //Constructor:
        public Circle(double radius)
        {
            this.radius = radius;
        }
    }
    
    public class Rectangular : IShape
    {
        private double width;
        private double height;
        
        public double CalculateArea()
        {
            return width * height;
        }
        
        //Constructor:
        public Rectangular(double width, double height)
        {
            this.width = width;
            this.height = height;
        }
    }
}
```

در نهایت در کد اصلی (متد `Main`) داده‌های جدیدی از دیتا تایپ اینترفیس ایجاد کرده و شکل‌های هندسی مدنظر را به آن‌ها نسبت می‌دهیم (سطرهای 9 و 12). نوع داده‌ی `IShape` تضمین می‌کند که این اشیا دارای متد `CalculateArea` هستند. بنابراین امکان صدا زدن این متد (فارغ از نوع شکل هندسی) در سطرهای 10 و 13 وجود دارد.

به این طریق هنگام اضافه کردن یک شکل جدید به برنامه، نیازی به تغییر کدهای قبلی نیست و تنها با نسبت دادن اینترفیس `IShape` به کلاس آن می‌توان «بدون دانستن نوع شکل» در سایر نقاط برنامه مساحت آن را به دست آورد.

از دیگر روش‌های رعایت این قاعده استفاده از متدهای توسعه‌یافته می‌باشد. متدهای توسعه یافته امکان اضافه کردن متد به کلاس یا نوع داده‌ای که دسترسی مستقیم به کد آن وجود ندارد را امکان‌پذیر می‌کنند.

## LSP یا قاعده‌ی جانشینی لیسکُو (Liskov substitution principle)

> Sub-types must be substitutable for their base-types

طبق این قاعده اشیای به وجود آمده از کلاس‌های فرزند باید بتوانند جایگزین اشیای به وجود آمده از کلاس والد شوند. برای مثال اگر کلاس «دانشجو» را والد و کلاس «دانشجوی ارشد» را فرزند در نظر بگیریم و کلاس دانشجو متدی virtual برای پرداخت شهریه داشته باشد این متد باید در کلاس دانشجوی ارشد تعریف شده باشد.

یک شی از نوع «دانشجوی ارشد» می‌تواند در اشاره‌گری از نوع «دانشجو» قرار بگیرد. چرا که هر دانشجوی ارشدی دانشجو است اما عکس این موضوع صادق نیست. بنابراین کلاس فرزند باید تمام اعضای کلاس والد را داشته باشد و برای مثال با صدا زدن متدی از کلاس والد توسط کلاس فرزند خطای «وجود نداشتن» رخ ندهد.

## ISP یا قاعده‌ی تفکیک رابط (Interface segregation principle)

> Classes that implement interfaces should not be forced to implement methods they do not use

طبق این قاعده به هیچ کلاسی نباید اینترفیسی نسبت داده شود که توسعه‌دهنده را مجبور به قرار دادن متدهایی در کلاس کند که استفاده و کاربردی ندارند.

## DIP یا قاعده‌ی وارونگی وابستگی (Dependency inversion principle)

> High level objects should not depend on low level implementations

طبق این اصل هیچ کلاسی با سلسله‌مراتب بالاتر نباید در خود از کلاس‌های کم‌مرتبه‌تر نام ببرد. فرض کنید کد مثال محاسبه‌ی مساحت را به صورت زیر تغییر دهیم:

```clike
using System;
namespace ConsoleApplication1
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            //DIP violation!!
            Circle myShape1 = new Circle(10);
            Console.WriteLine("Area is: " + myShape1.CalculateAreaOfCircle());
            
            //DIP violation!!
            Rectangular myShape2 = new Rectangular(10, 20);
            Console.WriteLine("Area is: " + myShape2.CalculateAreaOfRectangular());
        }
    }
    
    public class Circle
    {
        private double radius;
        
        public double CalculateAreaOfCircle()
        {
            return radius * radius * 3.14;
        }
        
        //Constructor:
        public Circle(double radius)
        {
            this.radius = radius;
        }
    }
    
    public class Rectangular
    {
        private double width;
        private double height;
        
        public double CalculateAreaOfRectangular()
        {
            return width * height;
        }
        
        //Constructor:
        public Rectangular(double width, double height)
        {
            this.width = width;
            this.height = height;
        }
    }
}
```

خروجی این کد تفاوتی با کد قبلی ندارد. اما به جای استفاده از abstraction و اینترفیس متدهای محاسبه‌ی مساحت (با این که یک کار را انجام می‌دهند) با نام‌های متفاوت و کاملاً وابسته به نوع کلاسشان فراخوانی می‌شوند (سطرهای 11 و 15). این امر توسعه‌پذیری کلاس مرتبه‌بالاتر را به شدت کاهش داده و آن را وابسته به زیرمجموعه‌هایش می‌کند.