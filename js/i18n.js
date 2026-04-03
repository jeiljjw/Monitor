/* ===================================================================
   i18n — Minimal Client-Side Translation Engine
   =================================================================== */

const TRANSLATIONS = {
  en: {
    // Meta
    "meta.title": "What Is My Screen Resolution — Free Screen Resolution Checker",
    "meta.description": "Instantly check your screen resolution, color depth, pixel ratio, and more. Free online tool — no data sent to any server.",

    // Nav
    "nav.home": "Home",
    "nav.blog": "Blog",

    // Language
    "lang.current": "Language",

    // Hero
    "hero.label": "Your Screen Resolution is",
    "hero.width": "Screen Width",
    "hero.height": "Screen Height",
    "hero.unit": "Measurements are in pixels (px).",
    "hero.total_pre": "Total pixels on your screen is",
    "hero.refresh": "Refresh",

    // Info table
    "info.title": "Other Information:",
    "info.device_res": "Device Resolution",
    "info.inner_res": "Device Inner Resolution",
    "info.dpr": "DPR (Device Pixel Ratio)",
    "info.dims": "Display Dimensions (width x height)",
    "info.diag": "Screen Diagonal",
    "info.color": "Color Depth (bits per pixel)",
    "info.pixel": "Pixel Depth",
    "info.aspect": "Display Aspect Ratio",
    "info.wide": "Widescreen",
    "info.vp": "Browser Viewport",
    "info.wide_yes_ultra": "Yes — Ultra Wide",
    "info.wide_yes": "Yes",
    "info.wide_no": "No",

    // Footer
    "footer.text": "Check your screen resolution — no data is sent to any server.",
    "footer.text2": "ScreenResolution — <a href=\"index.html\">Check your screen size</a> · Free screen detection tool",

    // Blog — article header
    "blog.meta.published": "Published",
    "blog.meta.last_updated": "Last Updated",
    "blog.meta.read": "min read",

    // Blog — h1
    "blog.h1": "What Is My Screen Size? Complete Guide to Screen Resolution (2026)",

    // Blog — figure captions
    "blog.figcap.resolution": "Screen resolution is defined by the total number of pixels across the width and height of the display. A higher pixel count yields sharper, more detailed images.",
    "blog.figcap.comparison": "Different device classes have vastly different physical screen sizes and resolution ranges. Understanding these differences helps guide purchasing decisions.",
    "blog.figcap.howto": "A simple three-step process to discover your screen size on any device: locate your device, open display settings, and read your resolution details.",

    // Blog — intro paragraphs
    "blog.p.intro1": "If you've ever asked yourself \"what is my screen size?\", you're not alone. Millions of people search for this question every month to understand their display resolution, optimize software settings, buy the right monitor, or troubleshoot visual issues. Whether you're <a href=\"index.html\">looking to check your screen size</a> right now or want a deeper understanding of how resolutions work, this guide covers everything you need to know.",
    "blog.p.intro2": "Screen size and screen resolution are related but distinct concepts. Screen size refers to the physical diagonal measurement of your display (measured in inches), while screen resolution refers to the number of pixels displayed horizontally and vertically. Together, they determine how sharp and detailed your screen appears to the human eye.",

    // Blog — h2 What Is My Screen Size?
    "blog.h2.whatis": "What Is My Screen Size?",
    "blog.p.whatis1": "When you ask \"what is my screen size,\" you're typically looking for one of two things: your screen's physical size (measured in inches diagonally) or your screen's resolution (measured in pixels). Both are important for different reasons.",
    "blog.p.whatis2": "Your screen resolution tells you how many individual pixels — tiny dots of light — make up your display. A monitor that is 1920 pixels wide and 1080 pixels tall is said to have a Full HD resolution. Each pixel can display millions of colors, and together they create the images you see on screen. The more pixels packed into the same physical space, the sharper and clearer your content appears.",
    "blog.p.whatis3": "Your physical screen size is the diagonal distance from one corner of the visible display area to the opposite corner. A 24-inch monitor, a 15.6-inch laptop, or a 6.1-inch smartphone — those are all physical screen sizes. This measurement doesn't tell you how many pixels are on the screen, only how large the panel is physically.",
    "blog.p.whatis4": "The combination of these two measurements gives you your pixel density, measured in PPI (pixels per inch). A 15-inch laptop with 1920x1080 resolution has much higher PPI than a 27-inch monitor with the same resolution. That's why text looks crisper on smaller screens at the same resolution.",

    // Blog — h2 Understanding Screen Resolution
    "blog.h2.resolution": "Understanding Screen Resolution",
    "blog.p.res1": "Screen resolution is expressed as two numbers: width x height. The first number represents how many horizontal pixels your screen displays from left to right. The second number represents the vertical pixel count from top to bottom.",
    "blog.p.res2": "For example, a 1920x1080 display has 1,920 pixels across its width and 1,080 pixels along its height. Multiply those together and you get over 2 million individual pixels (2,073,600 to be exact). Each one independently displays a specific color at any given moment, working together to form the complete image.",
    "blog.p.res3": "The aspect ratio — the proportional relationship between width and height — matters just as much as total pixel count. Most modern displays use a 16:9 widescreen aspect ratio. This means for every 16 pixels horizontally, there are 9 pixels vertically. Ultrawide monitors use ratios like 21:9, while professional photo and video editing monitors sometimes use 16:10 for extra vertical workspace.",
    "blog.p.res4": "Why does resolution matter? Higher resolutions let you fit more content on screen simultaneously. At 1920x1080, you might see one document. At 3840x2160 (4K), you can comfortably view two full documents side-by-side with room to spare. For tasks like video editing, code development, or data analysis, higher resolution directly translates to higher productivity.",

    // Blog — h2 How to Check Your Screen Size
    "blog.h2.howto": "How to Check Your Screen Size",
    "blog.p.howto1": "If you're wondering, \"what is my screen size right now?\" the easiest way is to use an online tool. Our <a href=\"index.html\">free screen resolution checker</a> instantly detects your exact screen resolution, device pixel ratio, color depth, and more — all without installing anything.",
    "blog.p.howto2": "Alternatively, visit our page to instantly find <strong>what is my screen size</strong> without navigating through device menus. The tool works on desktops, laptops, tablets, and phones — any device with a web browser.",

    // Blog — h3 On Windows
    "blog.h3.windows": "On Windows",
    "blog.p.windows": "Right-click an empty area of your desktop and select <strong>Display settings</strong>. Under <strong>Scale &amp; layout</strong>, you'll see your display resolution listed. The native resolution is your actual hardware resolution. If you want to know the physical size of your monitor, you'll need to check the model number printed on the bezel or in the manufacturer's documentation.",

    // Blog — h3 On macOS
    "blog.h3.macos": "On macOS",
    "blog.p.macos": "Click the Apple menu, go to <strong>About This Mac</strong>, then click <strong>Displays</strong> or <strong>More Info</strong>. macOS shows your resolution and lets you choose scaled options. To find physical screen size, click the Apple menu &gt; <strong>About This Mac</strong> — the overview tab lists your Mac's display size (e.g., \"14-inch MacBook Pro\").",

    // Blog — h3 On Mobile
    "blog.h3.mobile": "On Mobile Devices (iPhone, Android)",
    "blog.p.mobile": "On iPhone, go to <strong>Settings</strong> &gt; <strong>Display &amp; Brightness</strong> &gt; <strong>Display Zoom</strong> — this shows your resolution. On Android, go to <strong>Settings</strong> &gt; <strong>Display</strong> &gt; <strong>Screen resolution</strong>. Most phones list their physical size in the product specs page online — for instance, an iPhone 15 Pro has a 6.1-inch OLED display at 2556x1179 pixels.",

    // Blog — CTA
    "blog.cta.text": "Want to check your exact screen resolution right now?",
    "blog.cta.button": "Check What Is My Screen Size \u2192",

    // Blog — h2 Common Screen Sizes
    "blog.h2.common": "Common Screen Sizes and Resolutions",
    "blog.p.common_intro": "Here's a comprehensive table of the most common display resolutions you'll encounter across devices. Understanding these standards helps you design websites, configure software, or choose the right monitor for your workflow:",
    "blog.common.hd": "HD (720p)",
    "blog.common.fhd": "Full HD (1080p)",
    "blog.common.qhd": "QHD / 2K (1440p)",
    "blog.common.uhd": "4K UHD (2160p)",
    "blog.common.ultrawide": "Ultrawide QHD",
    "blog.common.fivek": "5K",
    "blog.common.eightk": "8K",
    "blog.common.hd_devices": "Entry-level monitors, budget TVs",
    "blog.common.fhd_devices": "Standard laptops, mainstream monitors",
    "blog.common.qhd_devices": "Gaming monitors, premium laptops",
    "blog.common.uhd_devices": "Content creators, professionals, high-end monitors",
    "blog.common.ultrawide_devices": "Ultrawide productivity monitors",
    "blog.common.fivek_devices": "Apple iMac 27\", professional workstations",
    "blog.common.eightk_devices": "High-end TVs, professional visualization",
    "blog.common.table_name": "Resolution Name",
    "blog.common.table_dim": "Pixel Dimensions",
    "blog.common.table_aspect": "Aspect Ratio",
    "blog.common.table_devices": "Common Devices",
    "blog.p.common_outro": "As of 2026, Full HD (1920x1080) remains the most common resolution among web visitors, followed closely by 1440p. However, 4K adoption continues to grow rapidly, especially among users who do photo editing, video production, or gaming. When designing websites, it's important to test your layouts at multiple resolutions to ensure a good experience for all users.",

    // Blog — h2 Screen Size vs Resolution
    "blog.h2.vs": "Screen Size vs Resolution — Key Differences",
    "blog.p.vs_intro": "This is one of the most common points of confusion. Let's clarify the distinction:",
    "blog.li.vs_size": "<strong>Screen Size</strong> is a <em>physical</em> measurement — the diagonal distance across your display in inches. A 27-inch monitor is physically larger than a 24-inch monitor.",
    "blog.li.vs_res": "<strong>Screen Resolution</strong> is a <em>digital</em> measurement — the number of pixels in the horizontal and vertical dimensions. A 3840x2160 (4K) display has more pixels than a 1920x1080 (Full HD) display.",
    "blog.li.vs_ppi": "<strong>Pixel Density (PPI)</strong> combines both. It tells you how many pixels are packed into each inch of screen. An iPhone with a 6-inch screen at high resolution has higher pixel density than a 27-inch monitor at Full HD.",
    "blog.p.vs_analogy": "A useful analogy: imagine two canvases of different sizes painted with the same total number of dots. The smaller canvas will have dots packed more tightly together, creating a smoother, more detailed painting. The larger canvas will look more pixelated and coarse. That's pixel density in action.",
    "blog.p.vs_importance": "This is why a 27-inch monitor displaying 1920x1080 resolution can look noticeably blurry for text and fine details compared to a 24-inch monitor at the same resolution. The pixels are simply spread thinner across the larger physical area. For text-heavy work like programming or writing, pixel density matters a great deal for comfort and readability.",

    // Blog — h2 How to Measure Your Screen Size
    "blog.h2.measure": "How to Measure Your Screen Size",
    "blog.p.measure_intro": "If you need to know your monitor's physical screen size but can't find it in the specifications, you can measure it yourself with a simple tape measure:",
    "blog.oli.measure1": "<strong>Use a flexible measuring tape or ruler</strong> — a standard metal ruler won't work for the diagonal measurement",
    "blog.oli.measure2": "<strong>Measure only the visible screen area</strong> — do not include the plastic or metal frame (bezel) around the display",
    "blog.oli.measure3": "<strong>Measure diagonally</strong> — from the bottom-left corner of the visible display to the top-right corner",
    "blog.oli.measure4": "<strong>Read the measurement in inches</strong> — this is your screen size. If using a metric tape, divide centimeters by 2.54",
    "blog.p.measure_outro": "For monitors, you'll typically see sizes like 24\", 27\", 32\", or 34\" (ultrawide). Laptops commonly come in 13.3\", 14\", 15.6\", and 16\" variants. Tablets range from 8\" (mini) to 13\" (Pro). Phones are typically 6\" to 6.7\" diagonally.",
    "blog.p.measure_link": "On most computers, you can also quickly find <a href=\"index.html\">what is my screen size</a> using our free detection tool. It automatically reads your device's capabilities and displays the exact resolution, aspect ratio, and estimated physical dimensions.",

    // Blog — FAQ
    "blog.h2.faq": "Frequently Asked Questions",
    "blog.faq.q1": "How do I know my screen size?",
    "blog.faq.a1": "The quickest way is to use our <a href=\"index.html\">automatic screen resolution checker</a>. It detects your resolution instantly without any setup. You can also find it in your operating system's Display Settings on Windows, About This Mac on macOS, or Display settings on mobile devices.",
    "blog.faq.q2": "What is a Full HD screen size?",
    "blog.faq.a2": "Full HD (FHD) refers to a screen resolution of 1920x1080 pixels. This is currently the most common resolution for laptops, monitors, and many TVs. It offers a good balance of sharpness and performance. At typical viewing distances, Full HD appears sharp on screens up to about 24 inches. Larger screens benefit from higher resolutions like 1440p or 4K.",
    "blog.faq.q3": "How is screen size measured?",
    "blog.faq.a3": "Screen size is measured as the diagonal distance from one corner of the visible display area to the opposite corner, expressed in inches. The measurement excludes the bezel (frame) around the screen. A 27-inch monitor has a 27-inch diagonal measurement across the visible panel.",
    "blog.faq.q4": "Does higher resolution mean better quality?",
    "blog.faq.a4": "Generally yes, but it depends. A higher resolution means more pixels, which can produce sharper text and finer image detail. However, if you sit too far from the screen, your eye may not perceive the extra detail. The sweet spot depends on screen size, viewing distance, and your visual acuity.",
    "blog.faq.q5": "What is the best screen resolution for gaming?",
    "blog.faq.a5": "For gaming, 1920x1080 (Full HD) at 144+ Hz is the most popular choice for competitive play because it maximizes frame rates. For single-player games where visual quality matters more, 2560x1440 (1440p QHD) or 3840x2160 (4K) provide stunning image quality. The \"best\" resolution depends on your GPU capabilities and monitor budget.",

    // Blog — Summary
    "blog.h2.summary": "Summary",
    "blog.p.summary1": "Knowing your screen size and resolution is one of the first steps to getting the most out of your digital experience. Whether you're buying a new monitor, troubleshooting display issues, or simply curious about your device's capabilities, understanding these measurements empowers you to make informed decisions.",
    "blog.p.summary2": "Remember: screen <em>size</em> is measured in inches (physical), screen <em>resolution</em> is measured in pixels (digital), and pixel density (PPI) tells you how sharp the image will appear. All three matter when choosing displays, designing websites, or configuring applications.",
    "blog.p.summary3": "If you haven't checked yet, now's the perfect time to find out <a href=\"index.html\"><strong>what is my screen size</strong></a> and resolution with our free instant detection tool. It works on any device with a web browser and tells you everything you need to know in seconds.",

    // Blog h3s for SVG image titles
    "blog.img.resolution_title": "Screen Resolution Visualization",
    "blog.img.comparison_title": "Screen Size Comparison",
    "blog.img.howto_title": "How to Check Your Screen Size"
  },

  ko: {
    // Meta
    "meta.title": "내 화면 해상도는? &mdash; 무료 화면 해상도 확인",
    "meta.description": "순식간에 화면 해상도, 색상 깊이, 픽셀 비율 등을 확인하세요. 무료 온라인 도구 &mdash; 서버로 데이터가 전송되지 않습니다.",

    // Nav
    "nav.home": "홈",
    "nav.blog": "블로그",

    // Language
    "lang.current": "언어",

    // Hero
    "hero.label": "현재 화면 해상도는",
    "hero.width": "화면 너비",
    "hero.height": "화면 높이",
    "hero.unit": "측정 단위는 픽셀(px)입니다.",
    "hero.total_pre": "화면의 전체 픽셀 수:",
    "hero.refresh": "새로고침",

    // Info table
    "info.title": "추가 정보:",
    "info.device_res": "기기 해상도",
    "info.inner_res": "기기 내부 해상도",
    "info.dpr": "DPR (디바이스 픽셀 비율)",
    "info.dims": "디스플레이 크기 (너비 x 높이)",
    "info.diag": "화면 대각선",
    "info.color": "색상 깊이 (픽셀당 비트)",
    "info.pixel": "픽셀 깊이",
    "info.aspect": "디스플레이 종횡비",
    "info.wide": "와이드스크린",
    "info.vp": "브라우저 뷰포트",
    "info.wide_yes_ultra": "예 — 울트라 와이드",
    "info.wide_yes": "예",
    "info.wide_no": "아니요",

    // Footer
    "footer.text": "화면 해상도를 확인하세요. 서버로 데이터가 전송되지 않습니다.",
    "footer.text2": "ScreenResolution &mdash; <a href=\"index.html\">화면 크기 확인</a> &middot; 무료 화면 감지 도구",

    // Blog
    "blog.meta.published": "게시일",
    "blog.meta.last_updated": "최종 수정",
    "blog.meta.read": "분 읽기",
    "blog.h1": "내 화면 크기는? 화면 해상도 완벽 가이드 (2026)",

    // Blog figure captions
    "blog.figcap.resolution": "화면 해상도는 디스플레이의 가로 및 세로 픽셀 수로 정의됩니다. 픽셀 수가 많을수록 더 선명하고 상세한 이미지를 제공합니다.",
    "blog.figcap.comparison": "다양한 기기 종류는 물리적 화면 크기와 해상도 범위가 크게 다릅니다. 이러한 차이를 이해하면 올바른 제품 구매에 도움이 됩니다.",
    "blog.figcap.howto": "모든 기기에서 화면 크기를 확인하는 간단한 3단계: 디바이스를 찾고, 디스플레이 설정을 열고, 해상도 세부 정보를 확인하세요.",

    // Blog intro
    "blog.p.intro1": "\"내 화면 크기는 얼마일까?\"라고 고민해 본 적이 있다면, 당신은 혼자가 아닙니다. 매달 수백만 명이 이 질문을 검색하여 디스플레이 해상도를 이해하고, 소프트웨어 설정을 최적화하고, 적합한 모니터를 구매하거나, 시각적 문제를 해결합니다. 지금 <a href=\"index.html\">화면 크기를 확인</a>하거나 해상도 작업 원리를 더 깊이 이해하고 싶다면, 이 가이드가 필요한 모든 것을 다룹니다.",
    "blog.p.intro2": "화면 크기와 화면 해상도는 관련이 있지만 다른 개념입니다. 화면 크기는 디스플레이의 대각선 물리적 측정값(인치)을 말하며, 화면 해상도는 가로·세로로 표시되는 픽셀 수를 의미합니다. 이 두 가지를 합치면 화면이 얼마나 선명하고 상세하게 보이는지가 결정됩니다.",

    // Blog — What Is My Screen Size?
    "blog.h2.whatis": "내 화면 사이즈는?",
    "blog.p.whatis1": "\"내 화면 사이즈는?\"이라고 묻는다면, 일반적으로 두 가지 중 하나를 찾고 있는 것입니다: 화면의 물리적 크기(대각선 인치 측정) 또는 화면의 해상도(픽셀 측정)입니다. 둘 모두 다른 이유로 중요합니다.",
    "blog.p.whatis2": "화면 해상도는 디스플레이를 구성하는 개별 픽셀(작은 빛의 점) 수를 알려줍니다. 1920 x 1080 픽셀 모니터를 풀HD 해상도를 가졌다고 합니다. 각 픽셀은 수백만 가지 색상을 표시할 수 있으며, 함께 작동하여 화면에서 보는 이미지를 만들어냅니다. 같은 물리적 공간에 더 많은 픽셀이 밀집할수록 콘텐츠가 훨씬 더 선명하고 명확하게 나타납니다.",
    "blog.p.whatis3": "물리적 화면 크기는 보이는 디스플레이 영역의 한쪽 모퉁이에서 반대쪽 모퉁이까지의 대각선 거리입니다. 24인치 모니터, 15.6인치 노트북, 6.1인치 스마트폰 — 이것이 전부 물리적 화면 크기입니다. 이 측정은 화면에 몇 개의 픽셀이 있는지는 알려주지 않으며, 패널이 얼마나 크지만 알려줍니다.",
    "blog.p.whatis4": "이 두 가지 측정값을 결합하면 픽셀 밀도(PPI, 인치당 픽셀)가 나옵니다. 1920x1080 해상도의 15인치 노트북은 같은 해상도의 27인치 모니터보다 훨씬 높은 PPI를 가집니다. 같은 해상도에서 작은 화면에서 텍스트가 더 선명해 보이는 이유입니다.",

    // Blog — Understanding Screen Resolution
    "blog.h2.resolution": "화면 해상도 이해하기",
    "blog.p.res1": "화면 해상도는 두 개의 숫자로 표시됩니다: 가로 x 세로. 첫 번째 숫자는 화면이 왼쪽에서 오른쪽으로 표시하는 가로 픽셀 수를 나타냅니다. 두 번째 숫자는 위에서 아래로 표시되는 세로 픽셀 수입니다.",
    "blog.p.res2": "예를 들어 1920x1080 디스플레이는 가로 1,920개, 세로 1,080개의 픽셀을 가집니다. 이 수를 곱하면 200만 개 이상의 개별 픽셀(정확히 2,073,600개)이 나옵니다. 각 픽셀은 주어진 순간에 독립적으로 특정 색상을 표시하며, 함께 작동하여 완전한 이미지를 구성합니다.",
    "blog.p.res3": "종횡비(가로와 세로의 비례 관계)도 총 픽셀 수만큼 중요합니다. 대부분의 현대 디스플레이는 16:9 와이드스크린 종횡비를 사용합니다. 즉, 가로 16픽셀마다 세로 9픽셀이 있습니다. 초와이드 모니터는 21:9 비율을 사용하고, 전문 사진·영상 편집 모니터는 추가 세로 작업 공간을 위해 가끔 16:10을 사용합니다.",
    "blog.p.res4": "해상도가 중요한 이유는? 더 높은 해상도는 동시에 더 많은 콘텐츠를 화면에 표시할 수 있습니다. 1920x1080에서 문서를 하나 볼 수 있다면, 3840x2160 (4K)에서 여백을 두고 두 개의 전체 문서를 나란히 볼 수 있습니다. 동영상 편집, 코드 개발, 데이터 분석 등 작업에서 더 높은 해상도는 직접적으로 더 높은 생산성으로 이어집니다.",

    // Blog — How to Check
    "blog.h2.howto": "화면 사이즈 확인 방법",
    "blog.p.howto1": "\"지금 내 화면 사이즈는?\" 궁금할 때 가장 쉬운 방법은 온라인 도구를 사용하는 것입니다. 우리의 <a href=\"index.html\">무료 화면 해상도 확인 도구</a>가 어떤 설치 없이도 정확한 화면 해상도, 기기 픽셀 비율, 색상 깊이 등을 감지합니다.",
    "blog.p.howto2": "또는 기기 메뉴를 돌아다니지 않고도 순식간에 <strong>내 화면 사이즈</strong>를 찾을 수 있습니다. 이 도구는 데스크톱, 노트북, 태블릿, 스마트폰 등 웹 브라우저가 있는 모든 기기에서 작동합니다.",

    // Blog — Windows
    "blog.h3.windows": "Windows",
    "blog.p.windows": "바탕화면 빈 공간을 마우스 오른쪽 버튼으로 클릭하고 <strong>디스플레이 설정</strong>을 선택합니다. <strong>배율 및 레이아웃</strong> 아래에 디스플레이 해상도가 표시됩니다. 기본 해상도는 실제 하드웨어 해상도입니다. 모니터의 물리적 크기를 알고 싶다면 베젤이나 제조업체 문서에 인쇄된 모델 번호를 확인해야 합니다.",

    // Blog — macOS
    "blog.h3.macos": "macOS",
    "blog.p.macos": "Apple 메뉴를 클릭하고 <strong>이 Mac에 관하여</strong>를 선택한 다음 <strong>디스플레이</strong> 또는 <strong>추가 정보</strong>를 클릭하세요. macOS에서는 해상도가 보이며 선택 항목을 선택할 수 있습니다. 물리적 화면 크기를 찾으려면 Apple 메뉴 &gt; <strong>이 Mac에 관하여</strong>를 클릭하세요 — 개요 탭에 Mac 디스플레이 크기가 표시됩니다.",

    // Blog — Mobile
    "blog.h3.mobile": "모바일 기기 (iPhone, Android)",
    "blog.p.mobile": "iPhone에서는 <strong>설정</strong> &gt; <strong>디스플레이 및 밝기</strong> &gt; <strong>디스플레이 확대/축소</strong>로 이동하면 해상도가 표시됩니다. Android에서는 <strong>설정</strong> &gt; <strong>디스플레이</strong> &gt; <strong>화면 해상도</strong>로 이동하세요. 대부분의 스마트폰 크기는 온라인 제품 사양 페이지에 나열되어 있습니다.",

    // Blog — CTA
    "blog.cta.text": "지금 바로 정확한 화면 해상도를 확인하고 싶으신가요?",
    "blog.cta.button": "내 화면 크기 확인하기 \u2192",

    // Blog — Common Screen Sizes
    "blog.h2.common": "일반적인 화면 크기와 해상도",
    "blog.p.common_intro": "다양한 기기에서 찾아볼 수 있는 가장 일반적인 디스플레이 해상도 표입니다. 이러한 표준을 이해하면 웹사이트를 설계하거나, 소프트웨어를 구성하거나, 적합한 모니터를 선택하는 데 도움이 됩니다:",
    "blog.common.hd": "HD (720p)",
    "blog.common.fhd": "풀HD (1080p)",
    "blog.common.qhd": "QHD / 2K (1440p)",
    "blog.common.uhd": "4K UHD (2160p)",
    "blog.common.ultrawide": "초와이드 QHD",
    "blog.common.fivek": "5K",
    "blog.common.eightk": "8K",
    "blog.common.hd_devices": "기본형 모니터, 예산 TV",
    "blog.common.fhd_devices": "표준 노트북, 일반 모니터",
    "blog.common.qhd_devices": "게이밍 모니터, 프리미엄 노트북",
    "blog.common.uhd_devices": "콘텐츠 제작자, 전문가, 하이엔드 모니터",
    "blog.common.ultrawide_devices": "초와이드 생산성 모니터",
    "blog.common.fivek_devices": "Apple iMac 27\", 전문 워크스테이션",
    "blog.common.eightk_devices": "하이엔드 TV, 전문 시각화",
    "blog.common.table_name": "해상도 이름",
    "blog.common.table_dim": "픽셀 크기",
    "blog.common.table_aspect": "종횡비",
    "blog.common.table_devices": "일반 기기",
    "blog.p.common_outro": "2026년 현재 풀HD (1920x1080)는 웹 방문자 사이에서 가장 일반적인 해상도이며, 그 뒤를 1440p가 바짝 추격하고 있습니다. 특히 사진 편집, 영상 제작, 게임을 하는 사용자 사이에서 4K 채택이 빠르게 계속 성장하고 있습니다.",

    // Blog — Screen Size vs Resolution
    "blog.h2.vs": "화면 크기 vs 해상도 주요 차이",
    "blog.p.vs_intro": "가장 많이 헷갈리는 부분 중 하나입니다. 명확하게 구분해 보겠습니다:",
    "blog.li.vs_size": "<strong>화면 크기</strong>는 <em>물리적</em> 측정값 &mdash; 디스플레이의 대각선 거리 (인치). 27인치 모니터는 24인치 모니터보다 물리적으로 더 큽니다.",
    "blog.li.vs_res": "<strong>화면 해상도</strong>는 <em>디지털</em> 측정값 &mdash; 가로·세로 차원의 픽셀 수. 3840x2160 (4K) 디스플레이는 1920x1080 (풀HD) 디스플레이보다 더 많은 픽셀을 가집니다.",
    "blog.li.vs_ppi": "<strong>픽셀 밀도 (PPI)</strong>는 둘을 통합합니다. 화면 각 인치에 얼마나 많은 픽셀이 밀집되어 있는지를 알려줍니다.",
    "blog.p.vs_analogy": "유용한 비유: 같은 수의 점으로 채워진 크기가 다른 두 캔버스를 상상해 보세요. 작은 캔버스에는 점이 더 조밀하게 채워져 매끄럽고 상세한 그림이 됩니다. 큰 캔버스는 더 거칠고 화소화된 것처럼 보입니다. 이것이 픽셀 밀도입니다.",
    "blog.p.vs_importance": "이것이 27인치 1920x1080 모니터가 같은 해상도의 24인치 모니터보다 텍스트와 세부 사항에서 눈에 띄게 흐릿하게 보일 수 있는 이유입니다. 픽셀이 더 넓은 영역에 더 얇게 퍼져 있습니다.",

    // Blog — How to Measure
    "blog.h2.measure": "화면 크기 측정 방법",
    "blog.p.measure_intro": "명세서에서 모니터의 물리적 화면 크기를 찾을 수 없다면, 테이프 측량으로 직접 측정할 수 있습니다:",
    "blog.oli.measure1": "<strong>유연한 줄자 또는 자를 사용</strong> &mdash; 일반 금속 자는 대각선 측량에 적합하지 않습니다",
    "blog.oli.measure2": "<strong>보이는 화면 영역만 측정</strong> &mdash; 디스플레이 주변의 플라스틱 또는 금속 프레임(베젤)은 포함하지 않습니다",
    "blog.oli.measure3": "<strong>대각선으로 측정</strong> &mdash; 보이는 디스플레이의 왼쪽 아래 모퉁이에서 오른쪽 위 모퉁이까지",
    "blog.oli.measure4": "<strong>인치로 측정값 읽기</strong> &mdash; 이것이 화면 크기입니다. 미터법 테이프를 사용한다면 센티미터을 2.54로 나눕니다",
    "blog.p.measure_outro": "모니터의 일반적인 크기는 24\", 27\", 32\", 또는 34\" (초와이드)입니다. 노트북은 일반적으로 13.3\", 14\", 15.6\", 16\"입니다. 태블릿은 8\" (미니)에서 13\" (프로)까지입니다.",
    "blog.p.measure_link": "컴퓨터에서 무료 감지 도구를 사용하여 <a href=\"index.html\">내 화면 크기</a>를 빠르게 찾을 수도 있습니다. 자동으로 기기 기능을 읽고 정확한 해상도, 종횡비, 추정 물리적 크기를 표시합니다.",

    // Blog — FAQ
    "blog.h2.faq": "자주 묻는 질문",
    "blog.faq.q1": "화면 크기를 어떻게 알 수 있나요?",
    "blog.faq.a1": "가장 빠른 방법은 <a href=\"index.html\">자동 화면 해상도 확인 도구</a>를 사용하는 것입니다. 설정 없이도 즉각적으로 해상도를 감지합니다. Windows의 디스플레이 설정, macOS의 이 Mac에 관하여, 또는 모바일 기기의 디스플레이 설정에서도 찾을 수 있습니다.",
    "blog.faq.q2": "풀HD 화면 크기는 얼마인가요?",
    "blog.faq.a2": "풀HD (FHD)는 1920x1080 픽셀의 화면 해상도를 의미합니다. 이는 현재 노트북, 모니터, TV에서 가장 일반적인 해상도입니다. 일반적인 시청 거리에서 풀HD는 약 24인치까지 선명하게 나타납니다.",
    "blog.faq.q3": "화면 크기는 어떻게 측정하나요?",
    "blog.faq.a3": "화면 크기는 보이는 디스플레이 영역의 한 모퉁이에서 반대쪽 모퉁이까지의 대각선 거리로 측정하며, 인치로 표시됩니다. 화면 주변의 베젤(프레임)은 포함되지 않습니다.",
    "blog.faq.q4": "더 높은 해상도가 더 나은 품질을 의미하나요?",
    "blog.faq.a4": "일반적으로 그렇지만 조건에 따라 다릅니다. 더 높은 해상도는 더 많은 픽셀을 의미하며, 더 선명한 텍스트와 더 미세한 이미지 세부 사항을 생성할 수 있습니다. 그러나 화면에서 너무 멀리 앉으면 눈이 추가 세부 사항을 인지하지 못할 수 있습니다.",
    "blog.faq.q5": "게이밍에 가장 적합한 화면 해상도는?",
    "blog.faq.a5": "게임에서는 1920x1080 (풀HD) 144+ Hz가 프레임 속도를 최대화하기 때문에 경쟁 플레이에 가장 인기 있는 선택입니다. 비디오 편집, 코드 개발, 데이터 분석 등 작업에서 더 높은 해상도는 직접적으로 더 높은 생산성으로 이어집니다.",

    // Blog — Summary
    "blog.h2.summary": "요약",
    "blog.p.summary1": "화면 크기와 해상도를 아는 것은 디지털 경험을 최대한 활용하기 위한 첫 번째 단계 중 하나입니다. 새 모니터를 구매하든, 디스플레이 문제를 해결하든, 또는 단순히 기기 기능에 대해 호기심이 있든, 이러한 측정값을 이해하면 정보에 기반한 결정을 내리는 데 도움이 됩니다.",
    "blog.p.summary2": "기억하세요: 화면 <em>크기</em>는 인치로 측정(물리적), 화면 <em>해상도</em>는 픽셀로 측정(디지털)되며, 픽셀 밀도(PPI)는 이미지가 얼마나 선명하게 나타나는지를 알려줍니다.",
    "blog.p.summary3": "아직 확인하지 않았다면, 지금이 <a href=\"index.html\"><strong>내 화면 크기</strong></a>와 해상도를 무료 즉시 감지 도구로 알아볼 완벽한 시간입니다. 웹 브라우저가 있는 모든 기기에서 작동하며 몇 초 만에 필요한 모든 것을 알려줍니다.",

    // Image titles
    "blog.img.resolution_title": "화면 해상도 시각화",
    "blog.img.comparison_title": "화면 크기 비교",
    "blog.img.howto_title": "화면 크기 확인 방법"
  }
};

// ===================================================================
// i18n Engine
// ===================================================================

let currentLang = 'en';

function applyTranslations(lang) {
  currentLang = lang;
  const t = TRANSLATIONS[lang];
  if (!t) return;

  // Set lang attribute on body
  document.documentElement.setAttribute('lang', lang);

  // Text content elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else if (key.startsWith('blog.li.') || key.startsWith('blog.oli.') || key.startsWith('blog.p.') || key.startsWith('footer.')) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Update blog h1 if present
  const blogH1 = document.querySelector('.article-header h1');
  if (blogH1 && t['blog.h1']) blogH1.textContent = t['blog.h1'];

  // SVG titles
  document.querySelectorAll('svg[title]').forEach(svg => {
    if (svg.title === 'Screen Resolution Pixel Grid' && t['blog.img.resolution_title']) {
      svg.setAttribute('title', t['blog.img.resolution_title']);
    }
  });

  // Image figcaps
  document.querySelectorAll('figcaption[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Update blog content sections
  const blogContent = document.querySelector('.article-content');
  if (blogContent) {
    // h2 section headings
    blogContent.querySelectorAll(':scope > h2').forEach(h2 => {
      const key = h2.getAttribute('data-i18n');
      if (key && t[key]) h2.textContent = t[key];
    });

    // h3 subheadings
    blogContent.querySelectorAll(':scope > h3').forEach(h3 => {
      const key = h3.getAttribute('data-i18n');
      if (key && t[key]) h3.textContent = t[key];
    });

    // Ordered list items
    blogContent.querySelectorAll('ol > li').forEach((li, i) => {
      const key = li.getAttribute('data-i18n');
      if (key && t[key]) li.innerHTML = t[key];
    });

    // Common screen sizes table
    const tableThs = blogContent.querySelectorAll('.data-table thead th');
    const tableKeys = ['blog.common.table_name', 'blog.common.table_dim', 'blog.common.table_aspect', 'blog.common.table_devices'];
    tableThs.forEach((th, i) => {
      if (tableKeys[i] && t[tableKeys[i]]) th.textContent = t[tableKeys[i]];
    });

    // Resolution names and device types
    const resolutionNames = ['blog.common.hd', 'blog.common.fhd', 'blog.common.qhd', 'blog.common.uhd', 'blog.common.ultrawide', 'blog.common.fivek', 'blog.common.eightk'];
    const deviceTypes = ['blog.common.hd_devices', 'blog.common.fhd_devices', 'blog.common.qhd_devices', 'blog.common.uhd_devices', 'blog.common.ultrawide_devices', 'blog.common.fivek_devices', 'blog.common.eightk_devices'];

    blogContent.querySelectorAll('.data-table tbody tr').forEach((tr, i) => {
      if (resolutionNames[i] && t[resolutionNames[i]]) {
        tr.querySelector('td').textContent = t[resolutionNames[i]];
      }
      if (deviceTypes[i] && t[deviceTypes[i]]) {
        const tds = tr.querySelectorAll('td');
        if (tds[3]) tds[3].textContent = t[deviceTypes[i]];
      }
    });

    // FAQ
    blogContent.querySelectorAll('.faq-item').forEach((faq, i) => {
      const qKey = `blog.faq.q${i + 1}`;
      const aKey = `blog.faq.a${i + 1}`;
      const summary = faq.querySelector('summary');
      const answer = faq.querySelector('p') || faq.querySelector('details');
      if (summary && t[qKey]) {
        summary.innerHTML = (t[qKey] || summary.textContent).replace('<summary>', '').replace('</summary>', '');
        summary.textContent = t[qKey];
      }
      if (answer && t[aKey]) {
        answer.innerHTML = t[aKey];
      }
    });

    // CTA
    const ctaBox = blogContent.querySelector('.cta-box');
    if (ctaBox) {
      const ctaP = ctaBox.querySelector('p');
      const ctaA = ctaBox.querySelector('a');
      if (ctaP && t['blog.cta.text']) ctaP.textContent = t['blog.cta.text'];
      if (ctaA && t['blog.cta.button']) ctaA.textContent = t['blog.cta.button'];
    }
  }

  // Update title element
  const titleEl = document.querySelector('head title');
  if (titleEl && t['meta.title']) titleEl.textContent = t['meta.title'];

  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && t['meta.description']) metaDesc.setAttribute('content', t['meta.description']);

  // Update nav link active states
  document.querySelectorAll('.nav-link').forEach(link => {
    const key = link.getAttribute('data-i18n');
    if (key && t[key]) link.textContent = t[key];
  });

  // Update lang button
  const langBtn = document.getElementById('langBtn');
  if (langBtn) {
    const langSpan = langBtn.querySelector('[data-i18n="lang.current"]');
    if (langSpan) langSpan.textContent = t['lang.current'];
  }

  // Re-detect resolution labels if on homepage
  if (typeof detectAll === 'function' && document.getElementById('hero-w')) {
    detectAll();
  }

  // Store preference
  localStorage.setItem('preferredLang', lang);

  console.log('[i18n] Language switched to:', lang);
}

// Initialize language
(function () {
  // Check saved preference
  const saved = localStorage.getItem('preferredLang');
  if (saved && TRANSLATIONS[saved]) {
    currentLang = saved;
  } else {
    // Check URL param
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang && TRANSLATIONS[urlLang]) {
      currentLang = urlLang;
    }
  }

  // Set up lang dropdown toggle
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('langBtn');
    const dropdown = document.getElementById('langDropdown');
    const options = document.querySelectorAll('.lang-option');

    // Update active option
    options.forEach(opt => {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === currentLang);
    });

    // Toggle dropdown
    if (btn && dropdown) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        btn.classList.toggle('open');
        dropdown.classList.toggle('open');
      });

      // Language option click
      options.forEach(opt => {
        opt.addEventListener('click', () => {
          const lang = opt.getAttribute('data-lang');
          if (lang && lang !== currentLang) {
            applyTranslations(lang);
            btn.classList.remove('open');
            dropdown.classList.remove('open');
            options.forEach(o => o.classList.toggle('active', o === opt));
          }
        });
      });

      // Close on outside click
      document.addEventListener('click', () => {
        btn.classList.remove('open');
        dropdown.classList.remove('open');
      });
    }

    // Apply initial language
    if (currentLang !== 'en') {
      applyTranslations(currentLang);
      options.forEach(opt => {
        opt.classList.toggle('active', opt.getAttribute('data-lang') === currentLang);
      });
    }
  });
})();
