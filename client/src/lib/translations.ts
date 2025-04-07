type TranslationKeys = {
  [key: string]: string;
};

type Translations = {
  en: TranslationKeys;
  de: TranslationKeys;
};

export const translations: Translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    
    // Hero section
    "hero.greeting": "Hello, I'm",
    "hero.role": "Senior Full Stack Developer",
    "hero.tagline": "Crafting scalable software with passion and precision",
    "hero.resume_button": "Download Resume",
    "hero.contact_button": "Contact Me",
    
    // About section
    "about.title": "About Me",
    "about.subtitle": "My Introduction",
    "about.description1": "I'm Dakshith Thior Narayana, a full-stack developer based in Germany with over 8 years of experience building web and mobile applications for diverse industries.",
    "about.description2": "My expertise includes both front-end and back-end development with modern frameworks and languages. I focus on creating responsive, user-friendly, and efficient applications that solve real-world problems.",
    "about.description3": "I'm dedicated to continuous learning and staying up-to-date with the latest technologies to deliver the best solutions.",
    "about.experience": "Years Experience",
    "about.projects": "Projects Completed",
    "about.clients": "Happy Clients",
    
    // Skills section
    "skills.title": "Skills",
    "skills.subtitle": "My Technical Skills",
    
    // Experience section
    "experience.title": "Experience",
    "experience.subtitle": "My Work History",
    "experience.position": "Position",
    "experience.company": "Company",
    "experience.period": "Period",
    "experience.technologies": "Technologies",
    
    // Projects section
    "projects.title": "Projects",
    "projects.subtitle": "My Recent Work",
    "projects.filters.all": "All",
    "projects.filters.web": "Web",
    "projects.filters.mobile": "Mobile",
    "projects.filters.backend": "Backend",
    "projects.viewCode": "View Code",
    "projects.liveDemo": "Live Demo",
    "projects.caseStudy": "Case Study",
    
    // Project 1
    "projects.project1.title": "E-Commerce Platform",
    "projects.project1.description": "A full-featured e-commerce platform with real-time inventory management and analytics dashboard.",
    
    // Project 2
    "projects.project2.title": "Health Tracking App",
    "projects.project2.description": "Mobile application for tracking fitness activities, nutrition, and health metrics with personalized insights.",
    
    // Project 3
    "projects.project3.title": "Microservices Platform",
    "projects.project3.description": "Scalable microservices architecture with service discovery, load balancing, and automated deployment.",
    
    // Testimonials section
    "testimonials.title": "Testimonials",
    "testimonials.subtitle": "What Clients Say",
    
    // Contact section
    "contact.title": "Get In Touch",
    "contact.info": "Contact Information",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.location": "Location",
    "contact.connect": "Connect with me",
    "contact.form.title": "Send Me a Message",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.success": "Message sent!",
    "contact.form.success.description": "Thank you for your message. I will get back to you soon.",
    "contact.form.error": "Error sending message",
    "contact.form.error.description": "Please try again later.",
    
    // Footer
    "footer.rights": "All rights reserved.",
    
    // Language switch
    "language": "DE"
  },
  de: {
    // Navigation
    "nav.about": "Über mich",
    "nav.skills": "Fähigkeiten",
    "nav.experience": "Erfahrung",
    "nav.projects": "Projekte",
    "nav.testimonials": "Referenzen",
    "nav.contact": "Kontakt",
    
    // Hero section
    "hero.greeting": "Hallo, ich bin",
    "hero.role": "Senior Full-Stack-Entwickler",
    "hero.tagline": "Entwicklung skalierbarer Software mit Leidenschaft und Präzision",
    "hero.resume_button": "Lebenslauf herunterladen",
    "hero.contact_button": "Kontaktieren Sie mich",
    
    // About section
    "about.title": "Über Mich",
    "about.subtitle": "Meine Vorstellung",
    "about.description1": "Ich bin Dakshith Thior Narayana, ein Full-Stack-Entwickler mit Sitz in Deutschland und mehr als 8 Jahren Erfahrung in der Entwicklung von Web- und mobilen Anwendungen für verschiedene Branchen.",
    "about.description2": "Meine Expertise umfasst sowohl Front-End- als auch Back-End-Entwicklung mit modernen Frameworks und Sprachen. Ich konzentriere mich auf die Erstellung von responsiven, benutzerfreundlichen und effizienten Anwendungen, die reale Probleme lösen.",
    "about.description3": "Ich bin bestrebt, kontinuierlich zu lernen und mich über die neuesten Technologien auf dem Laufenden zu halten, um die besten Lösungen zu liefern.",
    "about.experience": "Jahre Erfahrung",
    "about.projects": "Abgeschlossene Projekte",
    "about.clients": "Zufriedene Kunden",
    
    // Skills section
    "skills.title": "Fähigkeiten",
    "skills.subtitle": "Meine technischen Fähigkeiten",
    
    // Experience section
    "experience.title": "Erfahrung",
    "experience.subtitle": "Mein beruflicher Werdegang",
    "experience.position": "Position",
    "experience.company": "Unternehmen",
    "experience.period": "Zeitraum",
    "experience.technologies": "Technologien",
    
    // Projects section
    "projects.title": "Projekte",
    "projects.subtitle": "Meine neuesten Arbeiten",
    "projects.filters.all": "Alle",
    "projects.filters.web": "Web",
    "projects.filters.mobile": "Mobil",
    "projects.filters.backend": "Backend",
    "projects.viewCode": "Code ansehen",
    "projects.liveDemo": "Live-Demo",
    "projects.caseStudy": "Fallstudie",
    
    // Project 1
    "projects.project1.title": "E-Commerce-Plattform",
    "projects.project1.description": "Eine umfassende E-Commerce-Plattform mit Echtzeit-Bestandsverwaltung und Analytics-Dashboard.",
    
    // Project 2
    "projects.project2.title": "Gesundheits-Tracking-App",
    "projects.project2.description": "Mobile Anwendung zur Verfolgung von Fitnessaktivitäten, Ernährung und Gesundheitsmetriken mit personalisierten Einblicken.",
    
    // Project 3
    "projects.project3.title": "Microservices-Plattform",
    "projects.project3.description": "Skalierbare Mikroservices-Architektur mit Service-Discovery, Lastausgleich und automatisierter Bereitstellung.",
    
    // Testimonials section
    "testimonials.title": "Referenzen",
    "testimonials.subtitle": "Was Kunden sagen",
    
    // Contact section
    "contact.title": "Kontakt aufnehmen",
    "contact.info": "Kontaktinformationen",
    "contact.phone": "Telefon",
    "contact.email": "E-Mail",
    "contact.location": "Standort",
    "contact.connect": "Verbinden Sie sich mit mir",
    "contact.form.title": "Senden Sie mir eine Nachricht",
    "contact.form.name": "Name",
    "contact.form.email": "E-Mail",
    "contact.form.subject": "Betreff",
    "contact.form.message": "Nachricht",
    "contact.form.send": "Nachricht senden",
    "contact.form.sending": "Senden...",
    "contact.form.success": "Nachricht gesendet!",
    "contact.form.success.description": "Vielen Dank für Ihre Nachricht. Ich werde mich in Kürze bei Ihnen melden.",
    "contact.form.error": "Fehler beim Senden der Nachricht",
    "contact.form.error.description": "Bitte versuchen Sie es später noch einmal.",
    
    // Footer
    "footer.rights": "Alle Rechte vorbehalten.",
    
    // Language switch
    "language": "EN"
  }
};