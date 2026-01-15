'use client'

import { useState } from 'react'
import './resume.css'

const translations = {
  en: {
    name: 'KPPMCH DIGITAL SERVICE',
    address: 'Kamphaeng Phet, Thailand',
    vol: 'PROJECT SHOWCASE',
    latestEdition: 'Now Live!',
    dateLocale: 'en-US',
    summaryTitle: 'A New Digital Platform for KPPMCH',
    summaryContent: 'Introducing the KPPMCH Digital Service Hub, a comprehensive platform developed to streamline internal operations for the Kamphaeng Phet Municipal Community Hospital. This system centralizes key administrative tasks into a single, user-friendly interface, enhancing efficiency for all hospital personnel.',
    featuresTitle: 'Core Features',
    features: [
        'General Medical Examination',
        'Traditional Chinese Medicine (Acupuncture)',
        'Traditional Thai Medicine',
        'Telemedicine Service',
        'Antenatal Care (ANC) Clinic',
        'Health Promotion',
        'Sanitation and Environment',
        'Disease Control',
        'Community Service Unit',
        'Emergency Service (in collaboration with 1669)',
    ],
    techTitle: 'Technology & Principles',
    techIntro: 'The platform is built with a focus on modern, scalable, and maintainable technologies:',
    techStack: [
        'Frontend: Next.js, React.js',
        'Backend & API: Node.js, RESTful API Design',
        'Database: HOSxP',
        'Architecture: Clean Architecture for testability and maintenance.',
        'Testing & Quality: System Integration Testing (SIT), Functional & Regression Testing.',
        'Tools & AI: Git, Vercel, Gemini for logic validation, LINE API integration.',
    ],
    developerTitle: 'About The Developer',
    developerName: 'Ratchanon Noknoy',
    developerRole: 'Full Stack Engineer',
    developerBio: 'A Software Engineering graduate from Mae Fah Luang University, specializing in building full-stack web applications. This project demonstrates the application of modern software engineering principles to create efficient, real-world solutions.',
  },
  th: {
    name: 'บริการดิจิทัล รพ.เทศบาลฯ',
    address: 'กำแพงเพชร, ประเทศไทย',
    vol: 'นำเสนอโปรเจกต์',
    latestEdition: 'เปิดให้บริการแล้ว!',
    dateLocale: 'th-TH',
    summaryTitle: 'แพลตฟอร์มดิจิทัลใหม่สำหรับ รพ.เทศบาลฯ',
    summaryContent: 'ขอแนะนำศูนย์บริการดิจิทัลของโรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร (KPPMCH) แพลตฟอร์มที่พัฒนาขึ้นเพื่อเพิ่มประสิทธิภาพการดำเนินงานภายในโรงพยาบาล ระบบนี้รวบรวมงานธุรการที่สำคัญไว้ในอินเทอร์เฟซเดียวที่ใช้งานง่าย ช่วยเพิ่มประสิทธิภาพการทำงานของบุคลากรทุกคน',
    featuresTitle: 'ฟีเจอร์หลัก',
    features: [
        'ตรวจรักษาโรคทั่วไป',
        'แพทย์แผนจีน (ฝังเข็ม)',
        'แพทย์แผนไทย',
        'บริการการแพทย์ทางไกล (Telemedicine)',
        'คลินิกฝากครรภ์',
        'งานส่งเสริมสุขภาพ',
        'งานสุขาภิบาลและสิ่งแวดล้อม',
        'งานควบคุมโรค',
        'ออกหน่วยบริการชุมชน',
        'บริการฉุกเฉิน (ร่วมกับ 1669)',
    ],
    techTitle: 'เทคโนโลยีและหลักการ',
    techIntro: 'แพลตฟอร์มนี้สร้างขึ้นโดยมุ่งเน้นเทคโนโลยีที่ทันสมัย ขยายขนาดได้ และบำรุงรักษาง่าย:',
    techStack: [
        'Frontend: Next.js, React.js',
        'Backend & API: Node.js, RESTful API Design',
        'Database: HOSxP',
        'Architecture: Clean Architecture เพื่อให้ทดสอบและบำรุงรักษาได้ง่าย',
        'Testing & Quality: การทดสอบระบบ (SIT), Functional & Regression Testing',
        'Tools & AI: Git, Vercel, Gemini สำหรับตรวจสอบตรรกะ, การเชื่อมต่อ LINE API',
    ],
    developerTitle: 'เกี่ยวกับผู้พัฒนา',
    developerName: 'รัชชานนท์ นกน้อย',
    developerRole: 'Full Stack Engineer',
    developerBio: 'บัณฑิตสาขาวิศวกรรมซอฟต์แวร์จากมหาวิทยาลัยแม่ฟ้าหลวง มีความเชี่ยวชาญในการสร้างเว็บแอปพลิเคชันแบบ Full-stack โปรเจกต์นี้แสดงให้เห็นถึงการประยุกต์ใช้หลักการวิศวกรรมซอฟต์แวร์สมัยใหม่เพื่อสร้างโซลูชันที่มีประสิทธิภาพสำหรับปัญหาในโลกจริง',
  }
};

export default function Page() {
  const [language, setLanguage] = useState('en');
  const t = translations[language];

  return (
    <div className="container">
      <div className="language-switcher">
        <button onClick={() => setLanguage('en')} className={language === 'en' ? 'active' : ''}>EN</button>
        <button onClick={() => setLanguage('th')} className={language === 'th' ? 'active' : ''}>TH</button>
      </div>
      <header>
        {/* <div className="header-image">
          <img src="/RatchanonNoknoy_Profile.png" alt="Profile Picture" />
        </div> */}
        <div className="header-content">
          <h1>
            {t.name}
          </h1>
          <div className="newspaper-meta">
            <span>{t.vol}</span>
            <span suppressHydrationWarning>{new Date().toLocaleDateString(t.dateLocale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>{t.latestEdition}</span>
          </div>
          <div className="contact-info">
            {/* <a href="mailto:ratchanon.noknoy2318@gmail.com" className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>ratchanon.noknoy2318@gmail.com</span>
            </a> */}
            {/* <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>+66 98 746 2598</span>
            </div> */}
            <a href="https://github.com/ratchanon-noknoy2318/hospital-service-hub" target="_blank" rel="noopener noreferrer" className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <span>github.com/ratchanon-noknoy2318/hospital-service-hub</span>
            </a>
            {/* <a href="https://www.linkedin.com/in/ratchanon-noknoy" target="_blank" rel="noopener noreferrer" className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              <span>linkedin.com/in/ratchanon-noknoy</span>
            </a> */}
            <a href="https://kppmch-service.vercel.app/" target="_blank" rel="noopener noreferrer" className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.71"></path></svg>
              <span>kppmch-service.vercel.app</span>
            </a>
             <a href="https://www.google.com/maps/place/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%8A%E0%B8%99+%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%8A%E0%B8%A3/@16.47835,99.5256528,17z/data=!3m1!4b1!4m6!3m5!1s0x30de186b88443659:0x8a986d2f46f070b1!8m2!3d16.4783449!4d99.5282277!16s%2Fg%2F1td5tll9?entry=ttu&g_ep=EgoyMDI2MDExMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              <span>{t.address}</span>
            </a>
          </div>
        </div>
      </header>

      <section className="summary-section">
        <div className="header-image">
          <img src="/screenshot.png" alt="screenshot" />
        </div>
        <h2>
          {t.summaryTitle}
        </h2>
        <p>
          {t.summaryContent}
        </p>
      </section>

      <section>
        <h2>
          {t.featuresTitle}
        </h2>
        <ul>
          {t.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>
          {t.techTitle}
        </h2>
        <p>{t.techIntro}</p>
        <ul>
          {t.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>
          {t.developerTitle}
        </h2>
        <div className="developer-info">
          <h3>{t.developerName}</h3>
          <div className="item-sub">{t.developerRole}</div>
          <p>{t.developerBio}</p>
        </div>
      </section>
    </div>
  )
}