---
id: csharp_oop
title: شی‌گرایی در سی شارپ
slug: /csharp/oop
---

## بررسی تفکر شی‌گرایی

بعد از پیشرفته‌تر شدن تکنولوژی دیجیتال و پیچیدگی روزافزون برنامه‌ها، شباهت اجزای نرم‌افزارها با جهان واقعی بیشتر شد و بنابراین دیگر پارادایم‌های برنامه‌نویسی قدیمی (مثل دستوری) برای ادامه‌ی مسیر پاسخگو نبودند. این اتفاق منجر به ایجاد مفهوم جدیدی در برنامه‌نویسی تحت عنوان شی‌گرایی شد.

> شی‌گرایی در کوتاه‌ترین تعریف خود شیوه‌ای است که هر جزء نرم‌افزار را یک شی در نظر می‌گیرد.

برای مثال این شی در ویندوز می‌تواند یک پنجره، یک فولدر، نشانگر فلش ماوس، تسک بار و یا هر جزء دیگری باشد؛ هیچ محدودیتی برای شی بودن اجزا وجود ندارد و این همان دلیلی است که شی‌گرایی را بسیار شگفت‌انگیز و قدرتمند کرده است.

![image](/img/oop_duck_comic.png)

برنامه‌نویس یک زبان شی‌گرا می‌تواند پس از تعریف یک مفهوم بسیار پیچیده در قالب شی، با آن مثل یک داده‌ی معمولی رفتار کرده و برای مثال تنها با تایپ نام شی آن مهفوم پیچیده را در کد خود استفاده کند. فرض کنید که در یک فریمورک خاص (یونیتی) نوع داده‌ای به نام `AudioClip` وجود دارد که به فایل صوتی اشاره می‌کند. برنامه‌نویس برای اجرای یک صدا در برنامه‌ی خود کافی است فایل صوتی خود را در نوع داده‌ای از این جنس قرار داده و با صدا زدن متد `Play` (که به صورت اختصاصی برای نوع داده‌ی `AudioClip` تعریف شده است) آن را پخش کند.

## ایجاد کلاس و شی در سی شارپ

کلاس یکی از مفاهیم برنامه‌نویسی شی‌گرا است و عبارت است از مجموعه‌ای از اعضا از جمله خصوصیت‌ها (fields) و رفتارهایی (methods) که به یک موجودیت هویت می‌بخشند. در جهان واقعی نیز این دو مقوله به اشیا هویت داده‌اند. برای مثال مفهوم انسان را در نظر بگیرید؛ هر انسانی خصوصیت‌هایی از قبیل نام، قد، وزن، تاریخ تولد و… داشته و رفتارهایی مثل غذا خوردن، خندیدن، خوابیدن و… را از خود بروز می‌دهد.

«انسان» به یک فرد خاص اشاره نمی‌کند؛ بلکه موجودیت‌هایی به دلیل دارا بودن این خصوصیات و رفتارها به عنوان انسان شناخته می‌شوند. در این مثال انسان کلاس و یک فرد خاص شی ساخته شده از روی این کلاس می‌باشد.

> کلاس معادل نوع‌ داده است که بعد از تعریف (معمولاً) از روی آن شی ساخته می‌شود.

به مثال معروف برنامه‌ی اتوماسیون یک دانشگاه برمی‌گردیم؛ فرض کنید قصد ایجاد قابلیتی در برنامه داریم که معدل یک دانشجو را محاسبه کند. برای این کار مفهوم دانشجو باید به برنامه توضیح داده شود که برای این کار به صورت زیر عمل می‌کنیم:

ابتدا کلاس دانشجو را به همراه اعضای آن تعریف می‌کنیم، سپس از روی کلاس دانشجو برای دانشجوی مدنظر (برای مثال آقای اشکان صادقی) شی ساخته و خصوصیات آن را مقداردهی کرده و در نهایت این شی را وارد قسمت محاسبه‌ی معدل می‌کنیم.

برای درک بهتر کنسول اپلیکیشن جدیدی در JetBrains Rider ایجاد کنید. سپس در قسمت Solution Explorer راست کلیک کرده و از منوی باز شده گزینه‌ی Add و سپس Class را انتخاب کنید. در پنجره‌ی باز شده نام `Student` را برای کلاس انتخاب کرده و بر روی OK کلیک کنید.

فایل جدیدی با نام `Student.cs` ایجاد می‌شود که محتوای آن به صورت زیر است:

```clike
namespace ConsoleApplication1
{
    public class Student
    {
        
    }
}
```

در این کلاس خصوصیات مدنظر خود برای یک دانشجو را به صورت متغیرهایی که متعلق به کلاس هستند و فیلد نامیده می‌شوند تعریف می‌کنیم:

```clike
namespace ConsoleApplication1
{
    public class Student
    {
        //Fields:
        public string firstName;
        public string lastName;
        public int studentNumber;
        
        public int credit;
        
        public float mathGrade;
        public float physicsGrade;
        public float programmingGrade;
    }
}
```

![image](/img/csharp_class_declaration.png)

سپس عملیات‌های مرتبط با دانشجو را به صورت متد به کلاس اضافه می‌کنیم:

```clike
using System;

namespace ConsoleApplication1
{
    public class Student
    {
        //Fields:
        public string firstName;
        public string lastName;
        public int studentNumber;
        
        public int credit;
        
        public float mathGrade;
        public float physicsGrade;
        public float programmingGrade;
        
        //Methods:
        public void ChargeCredit(int amount)
        {
            credit += amount;
        }
        
        public void PrintScores()
        {
            Console.WriteLine("Math Grade:\t" + mathGrade);
            Console.WriteLine("Physics Grade:\t" + physicsGrade);
            Console.WriteLine("Programming Grade:\t" + programmingGrade);
        }
    }
}
```

متد `ChargeCredit` یک عدد دریافت کرده و به مقدار آن به موجودی حساب دانشجو اضافه می‌کند و متد `PrintScores` نیز نمرات دانشجو را چاپ می‌کند.

:::note نکته
در این کد مشاهده می‌شود که قبل از تعریف هر یک از اعضا از کلمه‌ی کلیدی `public` استفاده شده است. این کلمه یک access modifier است و سطح دسترسی اعضای کلاس را تعیین می‌کند. در صورتی که یک عضو به صورت `public` تعریف شود از سایر کلاس‌ها نیز می‌توان به آن عضو دسترسی داشت؛ در مقابل در صورتی که access modifier یک عضو `private` باشد (با نوشتن کلمه‌ی کلیدی `private` قبل از تعریف عضو در کلاس) تنها درون بلوک کلاس می‌توان به آن دسترسی داشت. از این قابلیت در مبحث «محرمانگی» طراحی شی‌گرا استفاده می‌شود.
:::

پس از تعریف کلاس `Student` به کد اصلی (فایل `Program.cs`) بازگشته و به صورت زیر از روی کلاس شی تعریف می‌کنیم:

```clike
namespace ConsoleApplication1
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            Student student1 = new Student();
        }
    }
}
```

در سطر 7 متغیری به نام `student1` از نوع داده‌ی `Student` ایجاد کردیم. سپس با کلمه‌ی کلیدی `new` دستور ساختن یک شی از نوع `Student` و قرار دادن آن در متغیر `student1` را دادیم.

به منظور دسترسی (خواندن/نوشتن) به اعضای یک کلاس یا شی از عملگری به نام dot operator (عملگر نقطه) استفاده می‌شود. به این صورت که پس از نوشتن نام کلاس یا شی کاراکتر نقطه تایپ شده و سپس نام عضو نوشته می‌شود. در این حالت intellisense اعضای قابل دسترسی در آن بلوک را به صورت خودکار لیست می‌کند.

با استفاده از این عملگر فیلدهای شی جدید را مقداردهی می‌کنیم:

```clike
namespace ConsoleApplication1
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            Student student1 = new Student();
            
            student1.firstName = "Ashkan";
            student1.lastName = "Sadeghi";
            student1.studentNumber = 2121009;
            
            student1.credit = 200000;
            
            student1.mathGrade = 18.5f;
            student1.physicsGrade = 14f;
            student1.programmingGrade = 20f;
        }
    }
}
```

![image](/img/csharp_object_declaration.png)

پس از پایان انجام این مراحل، توانستیم مفهوم یک شی (دانشجو) را در قالب کد به کامپایلر بفهمانیم. در نهایت برنامه‌ی محاسبه‌ی معدل را به صورت زیر کامل می‌کنیم:

```clike
using System;

namespace ConsoleApplication1
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            Student student1 = new Student();
            
            student1.firstName = "Ashkan";
            student1.lastName = "Sadeghi";
            student1.studentNumber = 2121009;
            
            student1.credit = 200000;
            
            student1.mathGrade = 18.5f;
            student1.physicsGrade = 14f;
            student1.programmingGrade = 20f;
            
            Console.WriteLine(AverageGrade(student1));
        }
        
        public static float AverageGrade(Student tempStudent)
        {
            return (tempStudent.mathGrade + tempStudent.physicsGrade + tempStudent.programmingGrade) / 3;
        }
    }
}
```

## متد سازنده (constructor)

متد سازنده متدی است که در هنگام ایجاد شی از روی کلاس فراخوانی می‌شود:

![image](/img/csharp_constructor.png)

این متد قابلیت بازتعریف توسط توسعه‌دهنده را دارد. برای این منظور در بدنه‌ی کلاس متدی همنام با نام کلاس و بدون نوع بازگشتی تعریف می‌کنیم. این کار اغلب به منظور مقداردهی فیلدهای private شی در هنگام ساخته شدن انجام می‌شود؛ به این صورت که برای متد سازنده ورودی‌هایی درنظر گرفته و آن‌ها را به فیلدها نسبت می‌دهیم.

```clike
namespace ConsoleApplication1
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            Circle myCircle = new Circle(10);
        }
    }
    
    public class Circle
    {
        private double radius;
        
        //Constructor:
        public Circle(double radius)
        {
            this.radius = radius;
        }
    }
}
```

دقت کنید که در صورتی که برای متد سازنده پارامتر تعریف شده باشد هنگام ساخت شی، متد سازنده باید با آرگومان مناسب آن پارامتر پر شود (سطر 7)

:::note نکته
کلمه‌ی کلیدی `this` به شی ساخته شده از روی کلاس اشاره می‌کند. در مواردی ممکن است امکان دسترسی به فیلد از طریق نام آن وجود نداشته باشد؛ مانند سطر 18 که `radius` به متغیر محلی متد اشاره می‌کند و عملاً دسترسی به فیلد `radius` (به علت همنام بودن آن با متغیر محلی و ارجحیت داشتن متغیر محلی) مسدود شده است. در چنین حالتی برای دسترسی به فیلد از کلمه‌ی کلیدی `this` و dot operation استفاده می‌کنیم.
:::

## اصول کلی شی‌گرایی

تا اینجا مفاهیم شی‌گرایی را با مثال و به صورت عملی بررسی کردیم. برای بررسی مفهوم شی‌گرایی به صورت تئوری، چهار اصل کلی شی‌گرایی که به OOP concepts شهرت دارند به صورت زیر تعریف می‌شوند:

### انتزاع (Abstraction)

اصل انتزاع بیان می‌کند که در شی‌گرایی، با استفاده از نوع داده‌های از قبل موجود می‌توان نوع داده (کلاس)های جدیدی خلق کرد که تاکنون وجود نداشته و بیانگر مفهوم خاصی هستند.

همچنین این اصل کلاس ساخته شده را به صورت یک ساختار یکپارچه و ساده به کاربر نهایی عرضه می‌کند و نه مجموعه‌ای از اعضا؛ برای مثال در کلاس دانشجو نحوه‌ی کار متد محاسبه‌ی معدل برای کاربر نهایی ناشناخته است و دانستن طرز کار آن نیز چندان اهمیتی برای وی ندارد. یعنی اعضای کلاس و سازوکار درون آن ناشناخته بوده و تنها نتیجه‌ی عملیات در دسترس کاربر قرار می‌گیرد. همانند روشن کردن یک خودرو که راننده تنها استارت زده و از اتفاقات درون موتور بی‌خبر است.

### محرمانگی (Encapsulation)

این اصل بیان می‌کند که هیچ قسمتی از برنامه نباید به داده‌هایی که به آن قسمت ارتباطی ندارند دسترسی خواندن/نوشتن داشته باشد. به بیان دیگر نباید هیچ دسترسی غیرلازم به داده‌ها در برنامه وجود داشته باشد. بازوی اجرایی این اصل access modifierها هستند که سطح دسترسی اعضا را تعیین می‌کنند. در سی شارپ شش access modifier وجود دارد که سه عدد از کاربردی‌ترین‌های آن‌ها به شرح زیر است:

* public: این access modifier دسترسی به عضو را در همه‌ی حالات امکان‌پذیر می‌کند.

* private: در صورتی که یک عضو با این access modifier تعریف شود تنها اعضای همان کلاس قابلیت دسترسی به آن را خواهند داشت.

* protected: در صورتی که یک عضو با این access modifier تعریف شود تنها اعضای همان کلاس و اعضای کلاس‌های فرزند آن کلاس قابلیت دسترسی به آن را خواهند داشت.

به عنوان مثال:

```clike
using System;

namespace ConsoleApplication1
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            AccessModifiers accessModifiers = new AccessModifiers();
            
            //Works fine
            accessModifiers.publicVariable = 10;
            
            //ERROR!
            accessModifiers.privateVariable = 10;
        }
    }
    
    public class AccessModifiers
    {
        public int publicVariable;
        private int privateVariable;
    }
}
```

:::note نکته
در صورت ننوشتن access modifier برای یک عضو، access modifier پیش‌فرض آن ساختار در سی شارپ در نظر گرفته می‌شود (این کار توصیه نمی‌شود). برای اطلاعات بیشتر به داکیومنتیشن مایکروسافت مراجعه کنید.
:::

پراپرتی (property): فیلدهای یک شی ممکن است حاوی داده‌های مهمی باشند و بهتر است امکان دسترسی مستقیم به آن‌ها (از طریق dot operator) وجود نداشته باشد. برای محافظت از فیلدها از مفهومی به نام پراپرتی استفاده می‌شود. پراپرتی شباهت زیادی به فیلد داشته و به صورت قراردادی هم‌نام فیلد تعریف می‌شود (فیلد به صورت camelCase و پراپرتی به صورت PascalCase). معمولاً فیلدها با سطح دسترسی protected یا private تعریف شده و به ازای هر فیلد پراپرتی public تعریف می‌شود. در این حالت تنها راه دسترسی به فیلد در خارج از کلاس استفاده از پراپرتی متناظر آن است و تنها آن پراپرتی می‌تواند به فیلد دسترسی داشته باشد.

یک پراپرتی به صورت زیر تعریف می‌شود:

```clike
private int privateVariable;

public int PrivateVariable
{
    get { return privateVariable; }
    set { privateVariable = value; }
}
```

پراپرتی از دو بلوک `get` و `set` که accessor نامیده می‌شوند تشکیل شده است. هنگام خوانده شدن پراپرتی بلوک `get` (یا getter) و هنگام نوشتن بلوک `set` (یا setter) اجرا می‌شود.

> به این طریق می‌توان بر روند خواندن/نوشتن یک فیلد نظارت کرد.

در کد بالا ملاحضه می‌شود که بلوک `get` به طور پیش‌فرض مقدار فیلد متناظرش را بازگردانده و بلوک `set` مقدار جدید داده شده به پراپرتی (`value`) را در فیلد قرار می‌دهد. استفاده از این پراپرتی در این وضعیت تفاوت چندانی با دسترسی مستقیم به فیلد ندارد. اما با تغییر کدهای این بلوک‌ها می‌توان محدودیت‌هایی به منظور حفظ درستی داده‌ها و امنیت ایجاد نمود.

برای مثال فیلد `programmingGrade` در کلاس دانشجو را در نظر بگیرید. بدیهی است که نمره‌ی امتحان برنامه‌نویسی عددی بین صفر تا بیست است و هر عددی خارج از این بازه بی‌معنی است. برای حفظ درستی این فیلد بلوک `set` را به صورت زیر تغییر می‌دهیم:

```clike
private int programmingGrade;

public int ProgrammingGrade
{
    get { return programmingGrade; }
    set
    {
        if (value <= 20 && value >= 0)
        {
            programmingGrade = value;
        }
        else
        {
            Console.WriteLine("Error: The grade is not valid");
        }
    }
}
```

همچنین می‌خواهیم تا زمانی که دانشجو به دانشگاه بدهکار است (اعتبار حساب وی منفی است) امکان دسترسی به نمره‌ی او وجود نداشته و مقدار صفر برگردانده شود. به این منظور بلوک get را به صورت زیر تغییر می‌دهیم:

```clike
public int ProgrammingGrade
{
    get
    {
        if (credit >= 0)
        {
            return programmingGrade;
        }
        else
        {
            Console.WriteLine("Error: The student is debtor");
            return 0;
        }
    }
    set
    {
        if (value <= 20 && value >= 0)
        {
            programmingGrade = value;
        }
        else
        {
            Console.WriteLine("Error: The grade is not valid");
        }
    }
}
```

:::note نکته
با حذف هرکدام از accessorهای `get` و `set` می‌توان فیلد مربوطه را به صورت write-only و read-only درآورد.
:::

:::note نکته
از نسخه‌ی 3 سی شارپ به بعد قابلیتی به نام auto-implemented property به سی شارپ اضافه شد که لزوم تعریف فیلد برای پراپرتی را از بین می‌برد. در یک پراپرتی auto-implemented یک فیلد به صورت مستتر وجود دارد که از طریق accessorهای پراپرتی قابل دسترسی است. به مثال توجه کنید:
:::

```clike
//Without using auto-implemented properties
private int phoneNumber;
private int studentNumber;

public int PhoneNumber
{
    get { return phoneNumber; }
    set { phoneNumber = value; }
}

public int StudentNumber
{
    get { return studentNumber; }
}

//With using auto-implemented properties
public int PhoneNumber { get; set; }
public int StudentNumber { get; private set; }
```

*استفاده از auto-implemented property به دلیل افزایش خوانایی کد بسیار مرسوم‌تر است.*

### ارث‌بری (Inheritance)

![image](/img/oop_inheritance.png)

در هنگام طراحی شی‌گرا مواردی پیش می‌آید که چندین کلاس دارای اعضای یکسان بوده و در دنیای واقعی رابطه‌ی سلسله‌مراتبی داشته باشند. در این حالت برای جلوگیری از تکرار در نوشتن اعضا و همچنین رعایت اصول طراحی شی‌گرا، کلاسی تحت عنوان کلاس والد ایجاد کرده و اعضای مشترک را در آن تعریف می‌کنیم. سپس سایر کلاس‌ها را تنها با اعضای غیرمشترکشان تعریف کرده و با تایپ کاراکتر «دونقطه :» و نوشتن نام کلاس والد در ادامه‌ی نامشان، کلاس جدید را به عنوان فرزند کلاس والد اعلان می‌کنیم.

بعد از این کار امکان دسترسی به اعضای public و protected کلاس والد توسط کلاس فرزند نیز امکان‌پذیر خواهد شد.

> امکان دسترسی کلاس فرزند به اعضای protected کلاس والد تنها تفاوتی است که این سطح دسترسی را از سطح دسترسی private متمایز می‌کند.

برای مثال فرض کنید قصد ایجاد دو کلاس برای «دانشجوی نرم‌افزار» و «دانشجوی پزشکی» با اعضای زیر را داشته باشیم:

![image](/img/medical_student_vs_software_student.png)

راه اول تعریف هر کلاس به صورت جداگانه است:

```clike
public class SoftwareStudent
{
    //Fields:
    public string firstName;
    public string lastName;
    public int studentNumber;
    
    public int credit;
    
    public float mathGrade;
    public float physicsGrade;
    public float programmingGrade;
}

public class MedicalStudent
{
    //Fields:
    public string firstName;
    public string lastName;
    public int studentNumber;
    
    public int credit;
    
    public float biochemistryGrade;
    public float anatomyGrade;
    public float physiologyGrade;
}
```

اما راه دوم که اصولی‌تر و مطابق با طراحی شی‌گراست ایجاد یک کلاس دانشجو به عنوان والد و تعریف دو کلاس دیگر به عنوان فرزندان آن می‌باشد:

![image](/img/medical_and_software_students_inherit_from_student.png)

```clike
public class Student
{
    //Fields:
    public string firstName;
    public string lastName;
    public int studentNumber;
    
    public int credit;
}

public class SoftwareStudent : Student
{
    //Fields:
    public float mathGrade;
    public float physicsGrade;
    public float programmingGrade;
}

public class MedicalStudent : Student
{
    //Fields:
    public float biochemistryGrade;
    public float anatomyGrade;
    public float physiologyGrade;
}
```

:::note نکته
در مثال بالا تنها از روی کلاسهای `SoftwareStudent` و `MedicalStudent` شی ساخته می‌شود و کلاس `Student` تنها برای ارث‌بری این دو کلاس نوشته شده است. در صورتی که مانند این مثال نیاز به ایجاد شی از روی کلاسی نباشد با استفاده از کلمه‌ی کلیدی abstract آن کلاس را به صورت انتزاعی تعریف می‌کنیم. امکان ساختن شی از روی کلاس‌های انتزاعی وجود ندارد و این امر باعث می‌شود که امکان ساخت شی به طور سهوی از روی کلاس وجود نداشته و استانداردهای طراحی صورت گرفته رعایت شوند.
:::

```clike
public abstract class Student
{
    //Data members
}
```

#### override کردن اعضا در ارث‌بری

در صورتی که در کلاس فرزند عضوی مشابه (هم‌نوع و هم‌نام) یکی از اعضای کلاس والد وجود داشته باشد برنامه با خطا مواجه می‌شود. چرا که دیگر امکان دسترسی به عضو کلاس والد وجود نخواهد داشت و استفاده از dot operator منجر به دسترسی به عضو کلاس فرزند می‌شود. در این حالت گفته می‌شود که عضو فرزند، عضو والد را hide کرده است:

```clike
namespace ConsoleApplication1
{
    public class Student
    {
        public string Name { get; set; }
    }
    
    public class PhdStudent : Student
    {
        public string Name { get; set; } //ERROR
    }
}
```

در مواردی، این عمل با علم توسعه‌دهنده به hide شدن عضو والد صورت می‌پذیرد. در این حالت برای این که کامپایلر متوجه منظور توسعه‌دهنده شود عضو والد را به صورت `virtual` و عضو فرزند را به صورت `override` تعریف می‌کنیم:

```clike
namespace ConsoleApplication1
{
    public class Student
    {
        public virtual string Name { get; set; }
    }
    
    public class PhdStudent : Student
    {
        public override string Name { get; set; }
    }
}
```

در این حالت امکان دسترسی به عضو کلاس والد با استفاده از کلمه‌ی کلیدی `base` و dot operator وجود خواهد داشت. برای درک کاربرد این قابلیت فرض کنید قصد داشته باشیم که در هنگام درخواست نام دانشجویان دکتری در ابتدای نامشان عبارت `Dr` نوشته شود. به این منظور کد را به صورت زیر تغییر می‌دهیم:

```clike
namespace ConsoleApplication1
{
    public class Student
    {
        public virtual string Name { get; set; }
    }
    
    public class PhdStudent : Student
    {
        public override string Name
        {
            get { return "Dr. " + base.Name; }
            set { base.Name = value; }
        }
    }
}
```

### چندریختی (Polymorphism)

![image](/img/oop_polymorphism.png)

چندریختی در ساده‌ترین تعریف خود عبارت است از پشتیبانی طراحی برنامه از «امکان انجام عملیاتی خاص بر روی مجموعه کلاس‌هایی که دارای شرایط آن عملیات هستند بدون آن که نوع دقیق کلاس و نحوه‌ی انجام آن عملیات توسط کلاس را بدانیم».

برای مثال فرض کنید در قسمتی از یک برنامه قصد داریم مساحت شکل هندسی داده شده به برنامه (در قالب یک شی) را به دست بیاوریم؛ این شکل هندسی می‌تواند دایره یا مستطیل باشد.

می‌دانیم که هر شکل هندسی دارای مولفه‌های مختص خودش بوده و مساحت آن نیز از فرمول مختص به خودش به دست می‌آید. برای مثال شکل هندسی دایره دارای مولفه‌ی «شعاع» بوده و مساحت آن از فرمول «شعاع x شعاع x عدد پی» به دست می‌آید؛ در صورتی که برای شکل هندسی مستطیل این مولفه‌ها «طول» و «عرض» هستند و مساحت از فرمول «طول x عرض» محاسبه می‌شود.

در این حالت برای تعریف این اشکال هندسی به ازای هر شکل کلاسی ایجاد کرده که مولفه‌های شکل فیلدهای آن و محاسبه‌ی مساحت توسط متدی به نام `CalculateArea` صورت بگیرد:

```clike
using System;

namespace ConsoleApplication1
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            
        }
    }
    
    public class Circle
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
    
    public class Rectangular
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

ما قصد داریم که در متد `Main` این برنامه مساحت شیئی که از نوع شکل هندسی آن باخبر نیستیم را با فراخوانی متد `CalculateArea` محاسبه کنیم. به این منظور باید از مفهومی به نام اینترفیس استفاده کرد.

#### اینترفیس (interface)

اینترفیس یا رابط قراردادی است که مانند یک کلاس دارای اعضا بوده و کلاس‌هایی که از قرارداد پیروی می‌کنند را ملزم به قرار دادن آن اعضا در درونشان می‌کند. برای مثال در این برنامه ملاک «شکل هندسی بودن» یک کلاس را دارا بودن متد `CalculateArea` توسط آن کلاس در نظر می‌گیریم. برای تعریف این قرارداد یک اینترفیس با syntax فوق و همرده با کلاس‌ها تعریف می‌کنیم:

```clike
public interface IShape
{
    double CalculateArea();
}
```

:::note نکته
طبق قواعد نامگذاری در سی شارپ نام اینترفیس‌ها به صورت PascalCase به همراه حرف I (بزرگ) در ابتدای آن نوشته می‌شود تا از کلاس‌ها تمایز داده شوند.
:::

:::note نکته
در یک اینترفیس متدها بدون بدنه تعریف می‌شوند. چرا که بدنه‌ی متد بسته به هر کلاس متفاوت است و وظیفه‌ی اینترفیس تنها یادآوری لزوم وجود آن متد به کلاس می‌باشد.
:::

> پیروی یک کلاس از یک اینترفیس ماهیت و چیستی آن کلاس را افشا می‌کند

حال اینترفیس `IShape` را به دو کلاس اشکال هندسی نسبت می‌دهیم:

```clike
using System;

namespace ConsoleApplication1
{
    internal class Program
    {
        public static void Main(string[] args)
        {
 
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

این نسبت دادن با syntax ارث‌بری مشابه است؛ در حالی که برخلاف ارث‌بری که کلاس تنها می‌تواند یک کلاس والد داشته باشد در پیروی از اینترفیس‌ها با محدودیت مواجه نبوده و می‌تواند به طور همزمان از چندین اینترفیس پیروی کند (در این حالت نام اینترفیس‌ها را با کاما از هم جدا می‌کنیم). البته زبان‌های شی‌گرای دیگری وجود دارند که برخلاف سی شارپ از وراثت چندگانه نیز پشتبانی می‌کنند.

به این ترتیب اینترفیس `IShape` تضمین می‌کند که این دو کلاس متد `CalculateArea` را دارا بوده و در نتیجه شکل هندسی هستند. چرا که در صورت پیروی یک کلاس از یک اینترفیس و نبود اعضای آن اینترفیس در کلاس برنامه با خطا مواجه می‌شود.

در نهایت در متد `Main` متغیری از نوع داده‌ی `IShape` تعریف می‌کنیم. در این متغیر می‌توان هر شیئی که کلاس آن از این رابط پیروی کرده است را قرارداد:

```clike
//Main method:
IShape myShape1 = new Circle(10);
Console.WriteLine("Area is: " + myShape1.CalculateArea());
```

*این برنامه در قسمت «قواعد SOLID در طراحی شی‌گرا» به صورت کامل‌تر آورده شده است.*

در کد بالا برای شی `myShape1` بدون دانستن نوع آن، متد `CalculateArea` را صدا زدیم؛ چرا که اطمینان داریم که این شی قطعاً این متد را درون خود دارد.