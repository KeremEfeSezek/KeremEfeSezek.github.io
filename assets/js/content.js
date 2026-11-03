/*
  All site text lives here. Every user-facing string has a Turkish (tr) and English (en) version.
  Experience is listed newest first. An item with `fig` or `more` gets a hover window.
*/
window.SITE = {
  contact: {
    email: 'sezekkeremefe@gmail.com',
    github: 'https://github.com/KeremEfeSezek',
    githubLabel: 'github.com/KeremEfeSezek',
    linkedin: 'https://www.linkedin.com/in/keremefesezek',
    linkedinLabel: 'linkedin.com/in/keremefesezek',
    cv: { tr: 'assets/cv/Kerem-Efe-Sezek-CV-TR.pdf', en: 'assets/cv/Kerem-Efe-Sezek-CV-EN.pdf' },
    source: 'https://github.com/KeremEfeSezek/KeremEfeSezek.github.io'
  },

  i18n: {
    tr: {
      'nav.about': 'Hakkımda',
      'nav.exp': 'Deneyim',
      'nav.proj': 'Projeler',
      'nav.skills': 'Yetkinlikler',
      'nav.contact': 'İletişim',
      'nav.menu': 'Menü',
      'nav.close': 'Kapat',
      'nav.cv': 'CV indir',

      'hero.status': 'Fırat Üniversitesi · Bilgisayar Mühendisliği · son sınıf',
      'hero.title': 'Otonom sistemler için elektronik ve gömülü yazılım geliştiriyorum.',
      'hero.sub': "Bu yaz T3 Vakfı'nda uçuş kontrolünü Pixhawk'tan T3 Gemstone O1'e taşıdığımız bir VTOL İHA'nın ilk uçuşuna kadar, Repkon'da titreşimden anomali tespiti ve 12 farklı sensör kartını destekleyen bir izleme uygulaması üzerinde çalıştım. Şu an T3 Gemstone O1 ekosisteminde gönüllü geliştiriciyim.",
      'hero.cta1': 'Deneyimime bak',
      'hero.cta2': 'E-posta gönder',

      'scope.title': 'İVME · X Y Z',
      'scope.sim': 'simülasyon',
      'scope.normal': 'NORMAL',
      'scope.anom': 'ANOMALİ',
      'scope.thr': 'Eşik',
      'scope.events': 'Olay',
      'scope.capHover': 'Repkon stajımdaki problemin küçük bir simülasyonu: titreşim sinyalinde anomali tespiti. İmleci grafiğin üzerinde hızlıca gezdir, sinyali sars.',
      'scope.capTouch': 'Repkon stajımdaki problemin küçük bir simülasyonu: titreşim sinyalinde anomali tespiti. Parmağını grafiğin üzerinde gezdir, sinyali sars.',

      'f1': "İHA'nın uçuş kontrolünü Pixhawk'tan T3 Gemstone O1'e taşıdık; araç bu kartla ilk uçuşunu yaptı.",
      'f2': "farklı ST sensör kartını destekleyen izleme uygulamasını Repkon'da Raspberry Pi 5 üzerinde geliştirdim.",
      'f3': "TEKNOFEST takımındayım; Su Altı Roket Takımı'nda kaptan ve elektronik birim sorumlusuyum.",
      'f4': 'Haziran ayında mezun olmayı bekliyorum.',

      'about.title': 'Hakkımda',
      'about.p1': "Fırat Üniversitesi'nde Bilgisayar Mühendisliği son sınıf öğrencisiyim; gömülü sistemlere ve düşük seviyeli yazılıma odaklanıyorum.",
      'about.p2': "2026 yazında iki staj yaptım. T3 Vakfı Deneyap Kart Birimi'nde bir VTOL İHA'nın uçuş kontrolünü Pixhawk'tan T3 Gemstone O1'e taşıdık; kablajı, alıcı entegrasyonunu ve kalibrasyonu yaptım, araç bu kartla ilk uçuşunu yaptı. Aynı stajda bir haritalandırma robotunun alt sistem yazılımını geliştirdim, Deneyap Kart için örnek projeler ve Fritzing parçası hazırladım. Repkon'da titreşimden anomali tespiti için kart seçip gerçek zamanlı tespit yapan gömülü yazılım yazdım; ardından Raspberry Pi 5 üzerinde 12 farklı ST sensör kartını destekleyen bir izleme uygulaması geliştirdim.",
      'about.p3': 'STM32 ve ESP32 üzerinde firmware, çevre birimi entegrasyonu, güç yönetimi ve sistem mimarisi deneyimimi büyük ölçüde TEKNOFEST takımlarında edindim. İlgi alanlarım otonom sistemler, savunma sanayii, robotik ve gömülü yazılım.',
      'about.now': 'Şu an',
      'about.loc': 'Elazığ, Türkiye',

      'exp.title': 'Deneyim',
      'exp.hintHover': 'Bugünden geriye doğru. Noktalı çizgiyle işaretli satırların üzerine gel, detay penceresi açılır.',
      'exp.hintTouch': 'Bugünden geriye doğru. Noktalı çizgiyle işaretli satırlara dokun, detay açılır.',
      'exp.now': 'Şimdi',
      'exp.present': 'Devam ediyor',
      'exp.fig': 'Şekil',

      'k.volunteer': 'Gönüllü',
      'k.intern': 'Staj',
      'k.club': 'Topluluk',
      'k.edu': 'Eğitim',

      'proj.title': 'Projeler',
      'proj.sub': 'TEKNOFEST takımları, bitirme projesi ve ders projeleri. Şekiller proje raporlarından ve notlarımdan sadeleştirildi; + işaretli düğmeler ek şekil açar.',

      'skills.title': 'Yetkinlikler',
      'skills.sub': 'Devreden uygulamaya, katman katman. İşaretli olanların üzerine gelince nerede kullandığımı görebilirsin.',
      'skills.used': 'Kullandığım yerler',
      'skills.langs': 'Diller',
      'skills.certs': 'Sertifikalar ve eğitimler',
      'skills.native': 'Ana dil',

      'contact.title': 'İletişim',
      'contact.lead': 'Staj, iş ya da bir proje hakkında konuşmak için yazabilirsin.',
      'contact.copy': 'Kopyala',
      'contact.copied': 'Kopyalandı',
      'contact.cvTr': 'Özgeçmiş, Türkçe (PDF)',
      'contact.cvEn': 'Özgeçmiş, İngilizce (PDF)',

      'foot.updated': 'Son güncelleme: Kasım 2026',
      'foot.source': 'Bu sitenin kaynak kodu',

      'pv.close': 'Kapat',
      'logo.click': 'tık',
      'theme.toLight': 'Açık temaya geç',
      'theme.toDark': 'Koyu temaya geç',
      'proj.more': 'Ek şekil'
    },

    en: {
      'nav.about': 'About',
      'nav.exp': 'Experience',
      'nav.proj': 'Projects',
      'nav.skills': 'Skills',
      'nav.contact': 'Contact',
      'nav.menu': 'Menu',
      'nav.close': 'Close',
      'nav.cv': 'Download CV',

      'hero.status': 'Firat University · Computer Engineering · final year',
      'hero.title': 'I build electronics and embedded software for autonomous systems.',
      'hero.sub': 'This summer I interned at the T3 Foundation, where we moved a VTOL UAV from Pixhawk to the T3 Gemstone O1 and saw it through its first flight on the board, and at Repkon, working on vibration anomaly detection and a monitoring app that supports 12 different sensor boards. I now volunteer as a developer in the T3 Gemstone O1 ecosystem.',
      'hero.cta1': 'See my experience',
      'hero.cta2': 'Send an email',

      'scope.title': 'ACCEL · X Y Z',
      'scope.sim': 'simulation',
      'scope.normal': 'NORMAL',
      'scope.anom': 'ANOMALY',
      'scope.thr': 'Threshold',
      'scope.events': 'Events',
      'scope.capHover': 'A small simulation of the problem from my Repkon internship: anomaly detection on a vibration signal. Move the pointer quickly across the plot to shake it.',
      'scope.capTouch': 'A small simulation of the problem from my Repkon internship: anomaly detection on a vibration signal. Drag a finger across the plot to shake it.',

      'f1': 'UAV moved from Pixhawk to the T3 Gemstone O1; it made its first flight on the board.',
      'f2': 'different ST sensor boards supported by the monitoring app I built on a Raspberry Pi 5 at Repkon.',
      'f3': 'TEKNOFEST teams; captain and electronics lead of the Underwater Rocket Team.',
      'f4': 'Expected graduation, in June.',

      'about.title': 'About',
      'about.p1': "I'm a final-year Computer Engineering student at Firat University, focused on embedded systems and low-level software.",
      'about.p2': 'In summer 2026 I did two internships. At the T3 Foundation Deneyap Kart Unit we moved a VTOL UAV from Pixhawk to the T3 Gemstone O1; I did the wiring, receiver integration and calibration, and the aircraft made its first flight on the board. In the same internship I wrote the subsystem software of a mapping robot and prepared example projects and a Fritzing part for Deneyap Kart. At Repkon I selected a board for vibration anomaly detection and wrote embedded software that detects anomalies in real time, then built a Raspberry Pi 5 monitoring app that supports 12 different ST sensor boards.',
      'about.p3': 'Most of my experience with STM32 and ESP32 firmware, peripheral integration, power management and system architecture comes from TEKNOFEST teams. I am interested in autonomous systems, the defense industry, robotics and embedded software.',
      'about.now': 'Now',
      'about.loc': 'Elazig, Turkey',

      'exp.title': 'Experience',
      'exp.hintHover': 'From today backwards. Hover the lines with a dotted underline to open a detail window.',
      'exp.hintTouch': 'From today backwards. Tap the lines with a dotted underline to open the details.',
      'exp.now': 'Now',
      'exp.present': 'Present',
      'exp.fig': 'Figure',

      'k.volunteer': 'Volunteer',
      'k.intern': 'Internship',
      'k.club': 'Society',
      'k.edu': 'Education',

      'proj.title': 'Projects',
      'proj.sub': 'TEKNOFEST teams, my graduation project and course projects. Figures are simplified from project reports and my notes; buttons marked + open extra figures.',

      'skills.title': 'Skills',
      'skills.sub': 'From circuits to applications, layer by layer. Hover the marked ones to see where I used them.',
      'skills.used': 'Where I used it',
      'skills.langs': 'Languages',
      'skills.certs': 'Certificates and training',
      'skills.native': 'Native',

      'contact.title': 'Contact',
      'contact.lead': 'Write to me about an internship, a job or a project.',
      'contact.copy': 'Copy',
      'contact.copied': 'Copied',
      'contact.cvTr': 'Résumé, Turkish (PDF)',
      'contact.cvEn': 'Résumé, English (PDF)',

      'foot.updated': 'Last updated: November 2026',
      'foot.source': 'Source code of this site',

      'pv.close': 'Close',
      'logo.click': 'click',
      'theme.toLight': 'Switch to light theme',
      'theme.toDark': 'Switch to dark theme',
      'proj.more': 'Extra figure'
    }
  },

  now: [
    { tr: 'T3 Gemstone O1 ekosisteminde gönüllü geliştiriciyim.', en: 'Volunteer developer in the T3 Gemstone O1 ecosystem.' },
    { tr: "TEKNOFEST Su Altı Roket Takımı'nda (SARA) kaptan ve elektronik birim sorumlusuyum.", en: 'Captain and electronics lead of the TEKNOFEST Underwater Rocket Team (SARA).' },
    { tr: 'Bitirme projem: mini keşif robotları için yapay zekâ ile görüntü anlamlandırma, T3 Gemstone O1 üzerinde.', en: 'Graduation project: AI-based image understanding for mini reconnaissance robots, on the T3 Gemstone O1.' },
    { tr: "İpek Yolu Merkezi'nde gömülü sistem projelerinde çalışıyor, robotik projelerinde mentörlük yapıyorum.", en: 'Working on embedded projects and mentoring robotics projects at the Ipek Yolu Center.' }
  ],

  experience: [
    {
      id: 't3eco',
      kind: 'volunteer',
      from: null,
      to: null,
      org: { tr: 'T3 Gemstone O1 Ekosistemi', en: 'T3 Gemstone O1 Ecosystem' },
      role: { tr: 'Gönüllü Geliştirici', en: 'Volunteer Developer' },
      place: { tr: 'Uzaktan', en: 'Remote' },
      items: [
        { id: 't3eco-1', text: { tr: 'T3 Gemstone O1 geliştirme kartı ekosistemine gönüllü geliştirici olarak katkı veriyorum.', en: 'Contributing to the T3 Gemstone O1 development board ecosystem as a volunteer developer.' } }
      ]
    },
    {
      id: 'repkon',
      kind: 'intern',
      from: '2026-08',
      to: '2026-08',
      org: { tr: 'Repkon Makina ve Kalıp San. ve Tic. A.Ş.', en: 'Repkon Makina ve Kalıp A.Ş.' },
      role: { tr: 'Stajyer Mühendis · Gömülü Sistemler', en: 'Intern Engineer · Embedded Systems' },
      place: { tr: 'İstanbul', en: 'Istanbul' },
      items: [
        {
          id: 'repkon-pi',
          fig: 'app',
          text: { tr: 'Stajın asıl işi olarak Raspberry Pi 5 üzerinde 12 farklı ST sensör kartını destekleyen; canlı grafik, kayıt ve register kontrolü sunan bir izleme uygulaması geliştirdim.', en: 'As the main work of the internship, built a Raspberry Pi 5 monitoring app that supports 12 different ST sensor boards, with live plots, logging and register control.' },
          title: { tr: 'Canlı sensör izleme uygulaması', en: 'Live sensor monitoring app' },
          more: { tr: "STEVAL-MKI109V3 anakartına takılan ivmeölçer, jiroskop, manyetometre, basınç, nem ve sıcaklık kartlarını tanıyan bir PyQt5 masaüstü uygulaması. Canlı grafik, FFT, eğim ve 6 nokta kalibrasyonu, interrupt ayarları ve register haritası tek yerde; veriler CSV ve SQLite'a kaydediliyor. 12 kartın hepsini tek tek bağlayıp test ettim, arızalı çıkan kartları teşhis edip birini onardım.", en: 'A PyQt5 desktop app that recognizes accelerometer, gyroscope, magnetometer, pressure, humidity and temperature boards on the STEVAL-MKI109V3 motherboard. Live plots, FFT, tilt and 6-point calibration, interrupt settings and the full register map in one place; data is logged to CSV and SQLite. I connected and tested all 12 boards one by one, diagnosed the faulty ones and repaired one of them.' },
          tags: ['Python', 'PyQt5', 'pyqtgraph', 'Raspberry Pi 5']
        },
        {
          id: 'repkon-rt',
          fig: 'process',
          text: { tr: 'Seçtiğim NUCLEO-8L152R8 üzerinde, ivmeölçerden SPI ile okunan titreşim verisinde gerçek zamanlı anomali tespiti yapan gömülü yazılım yazdım.', en: 'Wrote embedded software on the NUCLEO-8L152R8 I selected that detects anomalies in real time in vibration data read from an accelerometer over SPI.' },
          title: { tr: 'Titreşimden anomali tespiti', en: 'Anomaly detection from vibration' },
          more: { tr: 'Şekilde izlediğim süreç var: veri toplama, normal çalışmanın referans modelini (baseline) kurma, sürekli karşılaştırma, eşik aşımı ve bakım ekibine yönlendirme. Yolda ST-LINK sorunlarını ve SPI/CS pin çakışmasını giderip ivme verisini seri port üzerinden doğruladım. Sayfanın en üstündeki osiloskop bu işin basitleştirilmiş bir simülasyonu.', en: 'The figure shows the process I followed: data collection, building a baseline of normal operation, continuous comparison, threshold crossing and routing to the maintenance team. Along the way I fixed ST-LINK issues and an SPI/CS pin conflict and verified the acceleration data over a serial port. The oscilloscope at the top of this page is a simplified simulation of it.' },
          tags: ['STM8', 'SPI', 'MEMS', { tr: 'Anomali tespiti', en: 'Anomaly detection' }]
        },
        {
          id: 'repkon-boards',
          fig: 'boards3',
          text: { tr: 'STEVAL-MKI179V1 titreşim sensörünü sürecek kartı seçmek için STM32F103C8T6, NUCLEO-L476RG ve NUCLEO-8L152R8 kartlarını proje gereksinimlerine göre karşılaştırdım.', en: 'Compared STM32F103C8T6, NUCLEO-L476RG and NUCLEO-8L152R8 against the project requirements to pick the board that drives the STEVAL-MKI179V1 vibration sensor.' },
          title: { tr: 'Kart seçimi', en: 'Board selection' },
          more: { tr: 'Üç geliştirme kartının proje gereksinimlerine göre karşılaştırmalı analizi.', en: 'A comparative analysis of three development boards against the project requirements.' },
          tags: ['STM32', 'STM8', 'NUCLEO']
        }
      ]
    },
    {
      id: 't3vakfi',
      kind: 'intern',
      from: '2026-06',
      to: '2026-07',
      org: { tr: 'T3 Vakfı · Deneyap Kart Birimi', en: 'T3 Foundation · Deneyap Kart Unit' },
      role: { tr: 'Stajyer Mühendis · Gömülü Sistemler ve Donanım', en: 'Intern Engineer · Embedded Systems and Hardware' },
      place: { tr: 'İstanbul', en: 'Istanbul' },
      items: [
        {
          id: 't3-vtol',
          fig: 'vtol',
          text: { tr: "Bir VTOL İHA'nın uçuş kontrolcüsünü Pixhawk'tan T3 Gemstone O1'e taşıdık: kablajı kartın pinout'una göre yeniden kurdum, alıcıyı bağladım, Mission Planner'da kalibrasyonları yaptım. Araç stajın son gününde bu kartla ilk uçuşunu yaptı.", en: "We moved a VTOL UAV's flight controller from Pixhawk to the T3 Gemstone O1: I redid the wiring for the board's pinout, connected the receiver and ran the calibrations in Mission Planner. On the last day of the internship it made its first flight on the board." },
          title: { tr: 'VTOL İHA: Pixhawk → T3 Gemstone O1, ilk uçuş', en: 'VTOL UAV: Pixhawk → T3 Gemstone O1, first flight' },
          more: { tr: "RC alıcısının (FS-iA10B) dokümanda yazan SBUS değil iBUS çıkışlı olduğunu tespit ettim ve ek bir ters çevirici devreye gerek kalmadan doğrudan Main RX'e bağladım. Kartın yedi PWM çıkışını kaldırma motorları, itiş motoru ve servolar arasında planladım; IMU, pusula ve ESC kalibrasyonlarını tamamladım. Araç şu an dört motorlu (quadcopter) modda uçuyor; itiş motorunun devreye alınması sıradaki aşama.", en: 'I found that the RC receiver (FS-iA10B) outputs iBUS, not the SBUS its documentation claimed, and wired it straight to Main RX with no inverter circuit. I planned the board’s seven PWM outputs across the lift motors, the pusher motor and the servos, and completed the IMU, compass and ESC calibrations. The aircraft currently flies in quadcopter mode; enabling the pusher motor is the next step.' },
          tags: ['ArduPilot', 'Mission Planner', 'iBUS', 'VTOL']
        },
        {
          id: 't3-robot',
          fig: 'robot',
          text: { tr: "LiDAR'lı bir haritalandırma robotunun Deneyap Kart v2 üzerindeki alt sistem yazılımını geliştirdim: motor kontrolü, ultrasonik mesafe, IMU ve kablosuz güncelleme; FreeRTOS ile ağ ve kontrol işlerini iki çekirdeğe ayırdım.", en: 'Wrote the Deneyap Kart v2 subsystem software of a LiDAR mapping robot: motor control, ultrasonic ranging, IMU and over-the-air updates, with FreeRTOS splitting networking and control across the two cores.' },
          title: { tr: 'Haritalandırma robotu', en: 'Mapping robot' },
          more: { tr: 'Bağlantı koptuğunda ana döngüyü 2 saniye donduran yeniden bağlanmayı bloklamayan hale getirdim; iki çekirdeğin Wi-Fi donanımına aynı anda erişip kartı resetlemesini bütün ağ işlerini tek çekirdekte toplayarak çözdüm. Yazılım 7 günde 10 sürüm geçirdi; ekip arkadaşımın ROS tabanlı üst sistemiyle ilk haritalandırma testlerini birlikte yaptık.', en: 'I made reconnection non-blocking after it froze the main loop for 2 seconds whenever the link dropped, and stopped the board from resetting when both cores hit the Wi-Fi hardware at once by moving all networking to one core. The software went through 10 versions in 7 days; we ran the first mapping tests together with my teammate’s ROS-based upper system.' },
          tags: ['FreeRTOS', 'Deneyap Kart v2', 'TCP', 'OTA']
        },
        {
          id: 't3-examples',
          fig: 'ota',
          text: { tr: "Deneyap Kart için OTA, kablosuz telemetri ve SD kart örnek projelerini hazırladım; Fritzing kütüphanesinde bulunmayan Deneyap Kart v2 parçasını baştan tasarladım.", en: 'Prepared OTA, wireless telemetry and SD card example projects for Deneyap Kart, and designed the Deneyap Kart v2 part that was missing from the Fritzing library.' },
          title: { tr: 'Örnek projeler ve Fritzing parçası', en: 'Example projects and a Fritzing part' },
          more: { tr: "Örnekler motor kontrolünden ayrılıp tek başına kullanılabilir hale getirildi; telemetri altyapısı herhangi bir sensörün verisini Telnet üzerinden izlemeye yarıyor. Şekildeki OTA örneğinde güncelleme ilerlemesi OLED ekranda görünüyor; şemayı tasarladığım parçayla Fritzing'de çizdim. Parçanın breadboard, şematik ve ikon görünümlerini Inkscape'te vektörel çizip pinleri kartın serigrafisiyle birebir eşleştirdim.", en: 'The examples were separated from the motor control code so each one stands alone; the telemetry base streams any sensor’s data over Telnet. In the OTA example shown, update progress appears on the OLED; I drew the schematic in Fritzing with the part I designed. I drew the part’s breadboard, schematic and icon views as vectors in Inkscape and matched every pin to the board’s silkscreen.' },
          tags: ['OTA', 'Telnet', 'Fritzing', 'Inkscape']
        },
        {
          id: 't3-blok',
          fig: 'blok',
          text: { tr: 'Deneyap Blok için kartları ve modülleri görselleştiren, Wokwi ve MakeCode tarzında etkileşimli bir kart paneli geliştirdim.', en: 'Built an interactive board panel for Deneyap Blok that visualizes boards and modules, in the style of Wokwi and MakeCode.' },
          title: { tr: 'Deneyap Blok kart paneli', en: 'Deneyap Blok board panel' },
          more: { tr: 'Panelde 26 modül sürükle-bırak ile kartın yanına yerleştiriliyor; kablolar kartın gerçek pin koordinatlarına bağlanıyor, hatalı bağlantıda uyarı veriliyor. Pin ve kablo sistemi hizalama, katmanlama ve boyutlandırma hataları için birkaç tur kullanıcı testinden geçti.', en: 'In the panel, 26 modules are dragged and dropped next to the board; wires snap to the board’s real pin coordinates, and a faulty connection raises a warning. The pin and wire system went through several rounds of user testing for alignment, layering and sizing bugs.' },
          tags: ['Deneyap Blok', 'SVG', { tr: 'Arayüz', en: 'UI' }]
        },
        {
          id: 't3-tests',
          fig: 'console',
          text: { tr: '489 T3 Gemstone O1 kartının donanım testlerini yaptım; test noktalarını kart görselinde gösteren etkileşimli bir test arayüzü geliştirdim.', en: 'Ran hardware tests on 489 T3 Gemstone O1 boards and built an interactive test interface that shows each test point on the board image.' },
          title: { tr: 'Elektriksel testler ve test arayüzü', en: 'Electrical tests and test interface' },
          more: { tr: "Test noktalarını dokümandaki tablodan bakıp kart üzerinde elle aramak yerine mevcut test ortamına eklenebilecek bir arayüz: tablodan bir satır seçilince nokta kart görselinde yakınlaşıp işaretleniyor, ölçüm girilince beklenen aralıkla otomatik karşılaştırılıyor. Kartların USB'den güç alabilmesi için PD kontrolcünün EEPROM'una firmware'i, bir kartı master, testtekini slave olarak kullanan bir yöntemle yükledim.", en: 'Instead of looking up test points in a document table and hunting for them on the board, an interface that fits into the existing test setup: selecting a row zooms into the point on the board image and marks it, and an entered measurement is checked against the expected range automatically. So that boards could take power over USB, I loaded firmware into the PD controller’s EEPROM, using one board as master and the board under test as slave.' },
          tags: ['T3 Gemstone O1', 'HTML / CSS / JS', { tr: 'Donanım testi', en: 'Hardware test' }]
        }
      ]
    },
    {
      id: 'ipekyolu',
      from: '2024-11',
      to: null,
      org: { tr: 'İpek Yolu Uluslararası Çocuk ve Gençlik Çalışmaları Merkezi', en: "Ipek Yolu International Youth and Children's Center" },
      role: { tr: 'Öğrenci Mühendis · Girişimci Kuluçka Birimi', en: 'Student Engineer · Entrepreneurship Incubation Unit' },
      place: { tr: 'Elazığ', en: 'Elazig' },
      items: [
        { id: 'iy-1', text: { tr: 'Gömülü sistem projelerinde geliştirme, test ve donanım-yazılım entegrasyonu süreçlerinde görev alıyorum.', en: 'Working on development, testing and hardware-software integration in embedded system projects.' } },
        { id: 'iy-2', text: { tr: 'Öğrencilere yönelik teknik atölyeleri ve sosyal etki odaklı etkinlikleri organize ediyorum.', en: 'Organizing technical workshops and social-impact events for students.' } },
        { id: 'iy-3', text: { tr: 'Robotik projelerinde devre temelleri ve mikrodenetleyici mantığı üzerine mentörlük yapıyorum.', en: 'Mentoring robotics projects on circuit fundamentals and microcontroller logic.' } }
      ]
    },
    {
      id: 'fubet',
      kind: 'club',
      from: '2024-02',
      to: '2024-08',
      org: { tr: 'Fırat Üniversitesi Bilişim ve Eğitim Topluluğu (FÜBET)', en: 'Firat University IT and Education Society (FUBET)' },
      role: { tr: 'Etkinlik Koordinatörü · Gönüllü', en: 'Event Coordinator · Volunteer' },
      place: { tr: 'Elazığ', en: 'Elazig' },
      items: [
        { id: 'fb-1', text: { tr: 'Teknoloji odaklı kariyer zirvelerini koordine ettim ve üniversite-sanayi iş birliği süreçlerini takip ettim.', en: 'Coordinated technology-focused career summits and followed university-industry collaboration.' } },
        { id: 'fb-2', text: { tr: 'Kampüs içi teknik seminer ve workshop çalışmalarının operasyonunu yönettim.', en: 'Ran the operations of on-campus technical seminars and workshops.' } }
      ]
    },
    {
      id: 'firat',
      kind: 'edu',
      from: '2023-08',
      to: null,
      note: { tr: 'Beklenen mezuniyet: Haziran 2027', en: 'Expected graduation: June 2027' },
      org: { tr: 'Fırat Üniversitesi', en: 'Firat University' },
      role: { tr: 'Bilgisayar Mühendisliği · Lisans', en: 'B.Sc. Computer Engineering' },
      place: { tr: 'Elazığ', en: 'Elazig' },
      items: [
        { id: 'fu-1', text: { tr: 'Öne çıkan dersler: Gömülü Sistem Programlama, Mikroişlemciler, Nesnelerin İnterneti, Bilgisayar Organizasyonu ve Mimarisi, Sayısal Tasarım, Sistemler ve Sinyal İşleme, Veri Tabanı Yönetim Sistemleri.', en: 'Highlighted coursework: Embedded System Programming, Microprocessors, Internet of Things, Computer Organization and Architecture, Digital Design, Signals and Systems, Database Management Systems.' } },
        {
          id: 'fu-grad',
          fig: 'grad',
          text: { tr: 'Bitirme projesi: mini keşif robotları için yapay zekâ ile görüntü anlamlandırma, T3 Gemstone O1 üzerinde.', en: 'Graduation project: AI-based image understanding for mini reconnaissance robots, on the T3 Gemstone O1.' },
          title: { tr: 'Bitirme projesi', en: 'Graduation project' },
          more: { tr: 'Proje önerisiyle SAYZEK-ATP 2026-2027 ve HAVELSAN SUIT programlarına başvurdum.', en: 'Applied to the SAYZEK-ATP 2026-2027 and HAVELSAN SUIT programs with this project proposal.' },
          tags: ['T3 Gemstone O1', { tr: 'Görüntü anlamlandırma', en: 'Image understanding' }]
        }
      ]
    }
  ],

  projects: [
    {
      id: 'sara',
      fig: 'mission',
      cap: { tr: 'Görev 2: SARA 3 m derinlikte güvenli bölgeye ilerler, +30° yunuslama açısıyla yüzeye çıkar, burun kapağını CO₂ ile atar ve model roketi ateşler.', en: 'Mission 2: SARA cruises at 3 m depth to the safe zone, surfaces at a +30° pitch, blows off its nose cap with CO₂ and launches the model rocket.' },
      extra: [
        {
          fig: 'route',
          label: { tr: 'Görev 1 rotası', en: 'Mission 1 route' },
          cap: { tr: 'Görev 1: 2 m derinlikte 10 m düz seyir, kıyıdan en az 50 m açılma, 180° dönüş ve başlangıç çizgisine otonom dönüş. Su altında GPS olmadığından konum, INS, basınç sensörü ve su çarkı verisinin Kalman filtresiyle birleştirilmesinden geliyor.', en: 'Mission 1: a straight 10 m run at 2 m depth, out to at least 50 m from shore, a 180° turn and an autonomous return to the start line. With no GPS underwater, position comes from fusing INS, pressure sensor and paddle wheel data in a Kalman filter.' }
        },
        {
          fig: 'gkb',
          label: { tr: 'Görev kontrol bilgisayarı', en: 'Mission computer' },
          cap: { tr: "STM32H747 tabanlı görev kontrol bilgisayarı: Cortex-M7 navigasyonu, Kalman filtresini ve görev durum makinesini 50 Hz'de koşturuyor; Cortex-M4 PWM çıkışlarını, odometriyi ve acil durumu yönetiyor. Çekirdekler paylaşımlı SRAM4 üzerinden haberleşiyor.", en: 'The STM32H747-based mission computer: the Cortex-M7 runs navigation, the Kalman filter and the mission state machine at 50 Hz; the Cortex-M4 handles PWM outputs, odometry and failsafe. The cores talk through shared SRAM4.' }
        },
        {
          fig: 'power',
          label: { tr: 'Güç dağıtımı', en: 'Power distribution' },
          cap: { tr: "6S3P Li-ion paket (21,6 V, 12,6 Ah) BMS'ten sonra enerjilendirme ve acil durdurma rölelerinden geçiyor. İtki, servolar ve CO₂ valfi doğrudan batarya hattından; görev bilgisayarı ve sensörler LM2596 regülatörlü 12 V ve 5 V hatlarından besleniyor.", en: 'A 6S3P Li-ion pack (21.6 V, 12.6 Ah) feeds through the BMS and the arm and emergency stop relays. Thruster, servos and the CO₂ valve run straight off the battery line; the mission computer and sensors run off 12 V and 5 V rails from LM2596 regulators.' }
        }
      ],
      years: { tr: '2024 – devam ediyor', en: '2024 – present' },
      title: { tr: 'TEKNOFEST Su Altı Roket Takımı (SARA)', en: 'TEKNOFEST Underwater Rocket Team (SARA)' },
      role: { tr: 'Takım Kaptanı · Elektronik Birim Sorumlusu', en: 'Team Captain · Electronics Lead' },
      text: {
        tr: "Kıyıdan açılıp su altında otonom seyreden, güvenli bölgede yüzeye çıkıp model roket fırlatan bir su altı roketi geliştiriyoruz. TEKNOFEST 2026 döneminde takım kaptanı ve elektronik birim sorumlusuyum: planlama, bütçe ve ekipler arası koordinasyon bende. Elektronik birim olarak sensör ve eyleyici seçimini, STM32H747 tabanlı görev kontrol bilgisayarının bağlantı mimarisini, 6S3P batarya paketini, güç dağıtımını ve enerjilendirme ile acil durdurma hattını tasarladık.",
        en: 'We are building an underwater rocket that heads out from shore, navigates autonomously underwater, surfaces in a safe zone and launches a model rocket. In the TEKNOFEST 2026 season I am team captain and electronics lead: planning, budget and coordination between the groups are on me. As the electronics group we chose the sensors and actuators and designed the wiring architecture of the STM32H747-based mission computer, the 6S3P battery pack, power distribution, and the arm and emergency stop line.'
      },
      tags: ['STM32H747', { tr: 'Güç dağıtımı', en: 'Power distribution' }, { tr: 'Sistem mimarisi', en: 'System architecture' }, { tr: 'Takım kaptanlığı', en: 'Team lead' }]
    },
    {
      id: 'airdef',
      fig: 'optics',
      cap: { tr: 'Lazer ışını mercek düzeninden geçip hedefte odaklanıyor; odak mesafesi ayarlanarak hassasiyet artırılıyor.', en: 'The laser beam passes through a lens arrangement and focuses on the target; tuning the focal distance improves precision.' },
      extra: [
        {
          fig: 'bench',
          label: { tr: 'Besleme gerilimi testi', en: 'Supply voltage test' },
          cap: { tr: 'Güç kaynağı çıkışları multimetreyle doğrulanıyor: 5,009 V ve 12,00 V.', en: 'Checking the power supply outputs with a multimeter: 5.009 V and 12.00 V.' }
        },
        {
          fig: 'pcbdraft',
          label: { tr: 'Kart taslağı', en: 'Board draft' },
          cap: { tr: 'Takımın kontrol kartı için çizilen taslak; kart üretime geçmedi.', en: 'A draft layout for the team’s control board; it never went into production.' }
        }
      ],
      years: { tr: '2024 – devam ediyor', en: '2024 – present' },
      title: { tr: 'TEKNOFEST Hava Savunma Sistemleri Takımı', en: 'TEKNOFEST Air Defense Systems Team' },
      role: { tr: 'Elektronik Sistem Tasarımı', en: 'Electronic System Design' },
      text: {
        tr: 'Satıh tabanlı savunma sistemi prototiplerinin kavramsal tasarımı ve mimari planlaması. Lazer tabanlı modüllerde hedefleme hassasiyeti için odak noktası optimizasyonu; güç yönetimi, kablolama, acil durum ve lazer sistemi entegrasyonu.',
        en: 'Conceptual design and architecture planning of surface-based defense prototypes. Focal point optimization for targeting precision in laser modules; power management, cabling, emergency and laser system integration.'
      },
      tags: [{ tr: 'Elektronik tasarım', en: 'Electronics design' }, { tr: 'Lazer modülü', en: 'Laser module' }, { tr: 'Güç', en: 'Power' }]
    },
    {
      id: 'grad',
      fig: 'grad',
      years: { tr: '2026 – 2027', en: '2026 – 2027' },
      title: { tr: 'Mini Keşif Robotları için Yapay Zekâ ile Görüntü Anlamlandırma', en: 'AI-Based Image Understanding for Mini Reconnaissance Robots' },
      role: { tr: 'Bitirme projesi', en: 'Graduation project' },
      text: {
        tr: 'Mini keşif robotlarından gelen görüntülerin yapay zekâ ile anlamlandırılması. Projeyi T3 Gemstone O1 üzerinde gerçekleştirip bu yerli kartın bu iş için yeterliliğini görmeyi planlıyorum. Öneriyle SAYZEK-ATP 2026-2027 ve HAVELSAN SUIT programlarına başvurdum.',
        en: 'Interpreting images from mini reconnaissance robots with AI. I plan to build it on the T3 Gemstone O1 to see how well this Turkish-made board handles the task. Applied to SAYZEK-ATP 2026-2027 and HAVELSAN SUIT with the proposal.'
      },
      tags: ['T3 Gemstone O1', { tr: 'Görüntü işleme', en: 'Computer vision' }]
    },
    {
      id: 'pipeline',
      fig: 'pipeline',
      years: { tr: '2026', en: '2026' },
      title: { tr: 'Sel Sırasında Boru Hattı Anomali Tespiti', en: 'Pipeline Anomaly Detection During Floods' },
      role: { tr: 'STM32 · Raspberry Pi', en: 'STM32 · Raspberry Pi' },
      text: {
        tr: 'Su üstü boru hatlarını sel sırasında dal ve enkaz yüküne karşı korumak için titreşim algılama, kamera, STM32 ve Raspberry Pi tabanlı bir tespit sistemi geliştiriyorum.',
        en: 'Building a detection system that protects above-water pipelines from branch and debris loads during floods, using vibration sensing, a camera, STM32 and Raspberry Pi.'
      },
      tags: ['STM32', 'Raspberry Pi', { tr: 'Titreşim', en: 'Vibration' }, { tr: 'Kamera', en: 'Camera' }]
    },
    {
      id: 'mesh',
      fig: 'mesh',
      years: { tr: '2026', en: '2026' },
      title: { tr: 'Fabrika İçi Mesh IoT İzleme Sistemi', en: 'Factory Mesh IoT Monitoring System' },
      role: { tr: 'ESP tabanlı · ders projesi', en: 'ESP-based · course project' },
      text: {
        tr: 'Fabrikada sıcaklık, nem, titreşim ve çalışma saatini izleyen bir ESP mesh ağı tasarlıyorum.',
        en: 'Designing an in-factory ESP mesh network that monitors temperature, humidity, vibration and operating hours.'
      },
      tags: ['ESP32', 'Mesh', 'IoT']
    },
    {
      id: 'uniguide',
      fig: 'uniguide',
      years: { tr: '2026', en: '2026' },
      title: { tr: 'UniGuide AI', en: 'UniGuide AI' },
      role: { tr: 'Takım projesi · Bilgisayar Mühendisliği Tasarım dersi', en: 'Team project · Computer Engineering Design course' },
      text: {
        tr: 'Fırat Üniversitesi yönetmelikleri hakkındaki soruları yanıtlayan bir belge asistanı üzerinde ekip olarak çalışıyoruz.',
        en: 'A team project: a document assistant that answers questions about Firat University regulations.'
      },
      tags: [{ tr: 'Belge asistanı', en: 'Document assistant' }, { tr: 'Takım', en: 'Team' }]
    },
    {
      id: 'fukampus',
      fig: 'fukampus',
      cap: { tr: 'Ekranlar veriye tek bir katmandan ulaşıyor; kimin neyi okuyup yazabileceğini sunucudaki kurallar belirliyor. Her değişiklik otomatik kontrollerden geçip imzalı APK olarak çıkıyor.', en: 'Screens reach the data through a single layer; server-side rules decide who can read and write what. Every change passes automated checks and ships as a signed APK.' },
      years: { tr: '2026', en: '2026' },
      title: { tr: 'FÜKampüs', en: 'FÜKampüs' },
      role: { tr: 'Takım projesi · Mobil Uygulamalar dersi · ortak altyapı', en: 'Team project · Mobile Applications course · shared infrastructure' },
      text: {
        tr: "Fırat Üniversitesi'nde duyuruları, ders programını, ders gruplarını, yemekhaneyi ve kampüs haritasını tek uygulamada toplamayı hedefleyen bir Flutter uygulaması. Yedi kişilik ekipte koordinasyon ve ortak altyapı bende: Firebase Auth ve Firestore kurulumu, sunucu tarafı erişim kuralları ve kural testleri, ekranların veriye ulaştığı ortak CampusRepository katmanı, her Pull Request'te çalışan otomatik kontroller ve kalıcı anahtarla imzalanan APK derlemesi.",
        en: "A Flutter app that aims to bring Firat University's announcements, class schedule, course groups, cafeteria menu and campus map into one place. In a seven-person team I handle coordination and the shared infrastructure: Firebase Auth and Firestore setup, server-side access rules and rule tests, the shared CampusRepository layer every screen reads through, automated checks on every pull request, and APK builds signed with a persistent key."
      },
      tags: ['Flutter', 'Firebase', 'GitHub Actions', { tr: 'Takım', en: 'Team' }]
    }
  ],

  // PCB-style stack-up, top layer first
  stack: [
    {
      id: 'app',
      name: { tr: 'Uygulama ve araçlar', en: 'Applications and tools' },
      items: [
        { id: 'ardupilot', label: 'ArduPilot / Mission Planner', used: [{ tr: "VTOL İHA: Pixhawk'tan T3 Gemstone O1'e geçiş ve ilk uçuş", en: 'VTOL UAV: moving from Pixhawk to T3 Gemstone O1 and the first flight' }] },
        { id: 'pyqt', label: 'PyQt5 / pyqtgraph', used: [{ tr: 'Repkon: canlı sensör izleme uygulaması', en: 'Repkon: live sensor monitoring app' }] },
        { id: 'flutter', label: 'Flutter / Firebase', used: [{ tr: 'FÜKampüs: Firestore kuralları ve ortak veri katmanı', en: 'FÜKampüs: Firestore rules and the shared data layer' }] },
        { id: 'cubeide', label: 'STM32CubeIDE' },
        { id: 'cubemx', label: 'STM32CubeMX' },
        { id: 'git', label: 'Git' },
        { id: 'gha', label: 'GitHub Actions', used: [{ tr: "FÜKampüs: her Pull Request'te otomatik kontroller ve imzalı APK derlemesi", en: 'FÜKampüs: automated checks on every pull request and signed APK builds' }] },
        { id: 'vs', label: 'Visual Studio' },
        { id: 'ssms', label: 'SSMS' }
      ]
    },
    {
      id: 'lang',
      name: { tr: 'Programlama dilleri', en: 'Programming languages' },
      items: [
        { id: 'c', label: 'C' },
        { id: 'cpp', label: 'C++' },
        { id: 'py', label: 'Python', used: [{ tr: 'Repkon: PyQt5 sensör izleme uygulaması', en: 'Repkon: PyQt5 sensor monitoring app' }] },
        { id: 'web', label: 'HTML / CSS / JS', used: [{ tr: 'T3 Gemstone O1 elektriksel test arayüzü', en: 'T3 Gemstone O1 electrical test interface' }] },
        { id: 'dart', label: 'Dart', used: [{ tr: 'FÜKampüs mobil uygulaması', en: 'FÜKampüs mobile app' }] },
        { id: 'cs', label: 'C#' },
        { id: 'java', label: 'Java' },
        { id: 'sql', label: 'SQL' }
      ]
    },
    {
      id: 'os',
      name: { tr: 'RTOS ve işletim sistemi', en: 'RTOS and operating systems' },
      items: [
        { id: 'freertos', label: 'FreeRTOS', used: [{ tr: 'Haritalandırma robotu: ağ ve kontrol işlerini iki çekirdeğe ayırma', en: 'Mapping robot: splitting networking and control across two cores' }] },
        { id: 'baremetal', label: 'Bare-metal', used: [{ tr: 'SARA: STM32H747 görev kontrol bilgisayarı', en: 'SARA: STM32H747 mission computer' }, { tr: 'Repkon: NUCLEO-8L152R8 üzerinde anomali tespiti', en: 'Repkon: anomaly detection on the NUCLEO-8L152R8' }] },
        { id: 'linux', label: { tr: 'Gömülü Linux', en: 'Embedded Linux' }, used: [{ tr: 'Repkon: Raspberry Pi 5 üzerinde sensör uygulaması', en: 'Repkon: sensor app on Raspberry Pi 5' }, { tr: 'Boru hattı anomali tespiti', en: 'Pipeline anomaly detection' }] }
      ]
    },
    {
      id: 'bus',
      name: { tr: 'Haberleşme', en: 'Communication' },
      items: [
        { id: 'uart', label: 'UART', used: [{ tr: 'SARA: INS ve datalogger bağlantısı', en: 'SARA: INS and datalogger links' }, { tr: 'T3 Gemstone O1: master-slave yöntemle PD kontrolcüye firmware', en: 'T3 Gemstone O1: PD controller firmware via master and slave boards' }] },
        { id: 'i2c', label: 'I²C', used: [{ tr: 'SARA: NPI-19 basınç sensörü', en: 'SARA: NPI-19 pressure sensor' }, { tr: 'Deneyap Kart OTA örneği: OLED ekran', en: 'Deneyap Kart OTA example: OLED display' }] },
        { id: 'spi', label: 'SPI', used: [{ tr: 'Repkon: STEVAL-MKI179V1 ivmeölçerini okuma', en: 'Repkon: reading the STEVAL-MKI179V1 accelerometer' }] },
        { id: 'ibus', label: 'iBUS / PWM', used: [{ tr: 'VTOL İHA: FS-iA10B alıcısı ve yedi PWM çıkışının planı', en: 'VTOL UAV: FS-iA10B receiver and the plan for seven PWM outputs' }] },
        { id: 'tcp', label: 'TCP/IP', used: [{ tr: 'Haritalandırma robotunun TCP üzerinden uzaktan kontrolü', en: 'Remote control of the mapping robot over TCP' }, { tr: 'Deneyap Kart: Telnet ile kablosuz telemetri örneği', en: 'Deneyap Kart: wireless telemetry example over Telnet' }] }
      ]
    },
    {
      id: 'mcu',
      name: { tr: 'Mikrodenetleyiciler ve kartlar', en: 'Microcontrollers and boards' },
      items: [
        { id: 'stm32', label: 'STM32 / STM8', used: [{ tr: 'SARA: STM32H747 çift çekirdekli görev kontrol bilgisayarı', en: 'SARA: STM32H747 dual-core mission computer' }, { tr: 'Repkon: NUCLEO-8L152R8 üzerinde gerçek zamanlı anomali tespiti', en: 'Repkon: real-time anomaly detection on the NUCLEO-8L152R8' }, { tr: 'Repkon: STM32F103C8T6, NUCLEO-L476RG ve NUCLEO-8L152R8 karşılaştırması', en: 'Repkon: comparing STM32F103C8T6, NUCLEO-L476RG and NUCLEO-8L152R8' }, { tr: 'Boru hattı anomali tespiti', en: 'Pipeline anomaly detection' }] },
        { id: 'esp32', label: 'ESP32 / Deneyap Kart', used: [{ tr: 'Deneyap Kart v2 haritalandırma robotu', en: 'Deneyap Kart v2 mapping robot' }, { tr: 'Deneyap Kart için OTA, telemetri ve SD kart örnekleri', en: 'OTA, telemetry and SD card examples for Deneyap Kart' }, { tr: 'Fabrika içi mesh IoT', en: 'Factory mesh IoT' }] },
        { id: 'gemstone', label: 'T3 Gemstone O1', used: [{ tr: 'VTOL İHA: uçuş kontrolcüsü olarak ilk uçuş', en: 'VTOL UAV: first flight with it as the flight controller' }, { tr: '489 kartın donanım testi ve test arayüzü', en: 'Hardware tests on 489 boards and the test interface' }, { tr: 'Bitirme projesi', en: 'Graduation project' }, { tr: 'Ekosistemde gönüllü geliştirici', en: 'Volunteer developer in the ecosystem' }] },
        { id: 'rpi', label: 'Raspberry Pi', used: [{ tr: 'Repkon: canlı sensör izleme uygulaması', en: 'Repkon: live sensor monitoring app' }, { tr: 'Boru hattı anomali tespiti', en: 'Pipeline anomaly detection' }] },
        { id: 'arduino', label: 'Arduino' }
      ]
    },
    {
      id: 'pcb',
      name: { tr: 'Devre tasarımı ve simülasyon', en: 'Circuit design and simulation' },
      items: [
        { id: 'altium', label: 'Altium Designer' },
        { id: 'proteus', label: 'Proteus' },
        { id: 'ltspice', label: 'LTspice' },
        { id: 'fritzing', label: 'Fritzing / Inkscape', used: [{ tr: 'Deneyap Kart v2 Fritzing parçasını baştan tasarlama', en: 'Designing the Deneyap Kart v2 Fritzing part from scratch' }] }
      ]
    }
  ],

  languages: [
    { name: { tr: 'Türkçe', en: 'Turkish' }, level: 'native' },
    { name: { tr: 'İngilizce', en: 'English' }, level: 'B2' }
  ],

  certificates: [
    { year: '2026', name: { tr: 'Savunma Sanayii Akademi', en: 'Defense Industry Academy' }, by: { tr: 'Savunma Sanayii Kampüs · Elazığ', en: 'Defense Industry Campus · Elazig' } },
    { year: '2024', name: 'IBM CyberStart', by: 'Kodluyoruz & IBM SkillsBuild' },
    { year: '2024', name: { tr: 'C# Programlama 101', en: 'C# Programming 101' }, by: { tr: 'İstanbul Eğitim Akademisi', en: 'Istanbul Education Academy' } },
    { year: '2024', name: { tr: 'Oyun Geliştirme ve Tasarımı', en: 'Game Development and Design' }, by: 'CODE 23 FIRAT' },
    { year: '2024', name: { tr: 'Mobil Uygulama Geliştirme', en: 'Mobile Application Development' }, by: 'Clomosy' }
  ]
};
