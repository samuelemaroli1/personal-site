const translations = {
    it: {
        'rail.top': 'Profilo',
        'rail.research': 'Ricerca',
        'rail.experience': 'Esperienza',
        'rail.projects': 'Progetti',
        'rail.skills': 'Competenze',
        'rail.education': 'Formazione',
        'rail.contact': 'Contatti',

        'hero.eyebrow': 'AI Engineer & Data Scientist — Torino',
        'hero.headline': 'Costruisco sistemi RAG che funzionano davvero in produzione.',
        'hero.description': 'Ingegnere informatico specializzato in Retrieval-Augmented Generation, fine-tuning di LLM e data engineering enterprise. Attualmente in DedaAI.',
        'hero.cta1': 'Il mio paper',
        'hero.cta2': 'Contattami',

        'exp.label': 'Esperienza',
        'exp.title': 'Percorso professionale',
        'exp.desc': 'Dal 2024 ho sviluppato competenze avanzate in AI, lavorando su progetti che spaziano dai sistemi RAG alla data engineering su larga scala.',
        'exp1.title': 'Apprendista AI Scientist',
        'exp1.period': 'Gen 2026 — Presente',
        'exp1.desc': 'Sviluppo di sistemi RAG avanzati per clienti enterprise. Responsabile dell\'architettura e implementazione di soluzioni AI end-to-end, con focus su ottimizzazione delle performance e integrazione con sistemi esistenti.',
        'exp2.title': 'Apprendista AI Scientist',
        'exp2.period': '2025 — Dic 2025',
        'exp2.desc': 'Sviluppo di pipeline di elaborazione dati automatizzate per la gestione e normalizzazione di file eterogenei in un\'unica struttura unificata. Creazione di chatbot con WatsonX su IBM Cloud, implementazione di soluzioni RAG per l\'ottimizzazione di processi aziendali.',
        'exp3.title': 'Data Analyst & Developer',
        'exp3.period': 'Mag 2024 — Dic 2024',
        'exp3.desc': 'Pulizia e normalizzazione di database enterprise di grandi dimensioni. Creazione di relazioni dati complesse e ottimizzazione di strutture esistenti. Sviluppo del primo progetto chatbot con tecnologie RAG.',

        'skills.label': 'Competenze',
        'skills.title': 'Stack tecnico',

        'proj.label': 'Specializzazione',
        'proj.title': 'RAG Systems & AI Research',
        'proj.desc': 'Area di specializzazione principale: sviluppo e ottimizzazione di sistemi RAG enterprise, dalla ricerca all\'implementazione production-ready.',
        'proj1.title': 'Enterprise RAG System — Tesi Magistrale',
        'proj1.desc': 'Ricerca e sviluppo di un sistema RAG production-ready per applicazioni enterprise. Esplorazione di chunking strategies, embedding models, retrieval optimization e integrazione LLM. Focus su performance, scalabilità e accuracy per il Politecnico di Torino.',
        'proj2.title': 'Multi-Client RAG Solutions — Deda',
        'proj2.desc': 'Progettazione e implementazione di sistemi RAG customizzati per diversi clienti enterprise. Gestione dell\'intero ciclo di sviluppo: dall\'analisi dei requisiti all\'architettura, implementazione e deployment su cloud.',
        'proj3.title': 'RAG Optimization & Experimentation',
        'proj3.desc': 'Sperimentazione su tecniche avanzate di RAG: hybrid search, reranking, query expansion, context compression e prompt engineering per massimizzare la qualità delle risposte in contesti enterprise.',

        'proj4.title': 'Semantic Correspondence',
        'proj4.desc': 'progetto universitario (Advanced ML) — algoritmi di corrispondenza semantica con modelli foundation come DINOv2 e SAM per identificare corrispondenze visive tra immagini.',

        'stat1.label': 'Inizio del percorso in AI',
        'stat2.label': 'Paper peer-reviewed (ACL Anthology)',
        'stat3.label': 'Laurea in Ingegneria Informatica',

        'pub.label': 'Pubblicazione selezionata',
        'pub.venue': 'SemEval-2026 · San Diego, California · Luglio 2026 — Team MINDS',
        'pub.desc': 'Il team MINDS (otto ricercatori del Politecnico di Torino) affronta il rilevamento della polarizzazione online in 22 lingue, confrontando tre paradigmi di modellazione: fine-tuning di encoder multilingue, transfer learning basato su traduzione e reasoning generativo tramite prompting. Per la classificazione multi-label abbiamo introdotto un\'architettura a cascata a due stadi, pensata per ridurre i falsi positivi in condizioni di forte sbilanciamento delle classi. Gli encoder multilingue si sono rivelati il paradigma più efficace per il rilevamento binario della polarizzazione, mentre il prompting con reasoning è risultato competitivo nella classificazione fine-grained delle categorie.',
        'pub.link1': 'Leggi su ACL Anthology →',
        'pub.link2': 'Pagina della challenge →',

        'edu.label': 'Formazione',
        'edu.title': 'Percorso accademico',
        'edu1.degree': 'Laurea Magistrale in Artificial Intelligence & Data Science',
        'edu1.details': '2024 — Settembre 2026 (previsto)',
        'edu1.desc': 'Specializzazione in intelligenza artificiale con focus su deep learning, computer vision, NLP e sistemi di retrieval avanzati. Materia a scelta: Large Language Models. Tesi sui sistemi RAG enterprise.',
        'edu2.degree': 'Laurea Triennale in Ingegneria Informatica',
        'edu2.details': '2019 — Marzo 2024 · Voto: 94/110',
        'edu2.desc': 'Fondamenti di informatica, algoritmi, basi di dati, ingegneria del software e intelligenza artificiale. Tirocinio presso SCAI con sviluppo di soluzioni data-driven.',
        'edu3.degree': 'Diploma di Perito Informatico',
        'edu3.details': '2014 — 2019 · Voto: 92/100',
        'edu3.desc': 'Formazione tecnica in informatica, programmazione, reti e sistemi operativi.',

        'contact.label': 'Contatti',
        'contact.title': 'Mettiamoci in contatto',
        'contact.desc': 'Interessato a collaborare o vuoi saperne di più? Sarò felice di rispondere.',
        'contact.email.label': 'Email',
        'contact.linkedin.label': 'LinkedIn',
        'contact.linkedin.value': 'Connettiti →',
        'contact.github.label': 'GitHub',
        'contact.location.label': 'Sede',
        'contact.location.value': 'Torino, Italia',

        'footer.text': '© 2026 Samuele Maroli. Disponibile per opportunità full-time da settembre 2026.'
    },
    en: {
        'rail.top': 'Profile',
        'rail.research': 'Research',
        'rail.experience': 'Experience',
        'rail.projects': 'Projects',
        'rail.skills': 'Skills',
        'rail.education': 'Education',
        'rail.contact': 'Contact',

        'hero.eyebrow': 'AI Engineer & Data Scientist — Turin, Italy',
        'hero.headline': 'I build RAG systems that actually work in production.',
        'hero.description': 'Computer engineer specialising in Retrieval-Augmented Generation, LLM fine-tuning and enterprise data engineering. Currently at DedaAI.',
        'hero.cta1': 'My paper',
        'hero.cta2': 'Contact me',

        'exp.label': 'Experience',
        'exp.title': 'Professional journey',
        'exp.desc': 'Since 2024 I have developed advanced AI skills, working on projects ranging from RAG systems to large-scale data engineering.',
        'exp1.title': 'Apprentice AI Scientist',
        'exp1.period': 'Jan 2026 — Present',
        'exp1.desc': 'Development of advanced RAG systems for enterprise clients. Responsible for architecture and end-to-end AI solution implementation, with focus on performance optimisation and integration with existing systems.',
        'exp2.title': 'Apprentice AI Scientist',
        'exp2.period': '2025 — Dec 2025',
        'exp2.desc': 'Development of automated data processing pipelines for managing and normalising heterogeneous files into a unified structure. Creation of chatbots with WatsonX on IBM Cloud, implementation of RAG solutions to optimise business processes.',
        'exp3.title': 'Data Analyst & Developer',
        'exp3.period': 'May 2024 — Dec 2024',
        'exp3.desc': 'Cleaning and normalisation of large enterprise databases. Creation of complex data relationships and optimisation of existing structures. Development of the first RAG chatbot project.',

        'skills.label': 'Skills',
        'skills.title': 'Tech stack',

        'proj.label': 'Specialisation',
        'proj.title': 'RAG Systems & AI Research',
        'proj.desc': 'Main specialisation area: development and optimisation of enterprise RAG systems, from research to production-ready implementation.',
        'proj1.title': 'Enterprise RAG System — Master\'s Thesis',
        'proj1.desc': 'Research and development of a production-ready RAG system for enterprise applications. Exploration of chunking strategies, embedding models, retrieval optimisation, and LLM integration. Focus on performance, scalability and accuracy at Politecnico di Torino.',
        'proj2.title': 'Multi-Client RAG Solutions — Deda',
        'proj2.desc': 'Design and implementation of customised RAG systems for various enterprise clients. Full development lifecycle management: from requirements analysis to architecture, implementation and cloud deployment.',
        'proj3.title': 'RAG Optimization & Experimentation',
        'proj3.desc': 'Experimentation on advanced RAG techniques: hybrid search, reranking, query expansion, context compression and prompt engineering to maximise response quality in enterprise contexts.',

        'proj4.title': 'Semantic Correspondence',
        'proj4.desc': 'university project (Advanced ML) — semantic correspondence algorithms using foundation models such as DINOv2 and SAM to identify visual correspondences between images.',

        'stat1.label': 'Started working in AI',
        'stat2.label': 'Peer-reviewed paper (ACL Anthology)',
        'stat3.label': 'Computer Engineering degree',

        'pub.label': 'Selected publication',
        'pub.venue': 'SemEval-2026 · San Diego, California · July 2026 — Team MINDS',
        'pub.desc': 'Team MINDS (eight researchers from Politecnico di Torino) tackles online polarization detection across 22 languages, comparing three modelling paradigms: multilingual encoder fine-tuning, translation-based transfer learning, and prompting-based generative reasoning. For multi-label classification we introduced a two-stage cascaded architecture designed to reduce false positives under severe class imbalance. Multilingual encoders proved the strongest paradigm for binary polarization detection, while reasoning-based prompting was competitive on fine-grained category classification.',
        'pub.link1': 'Read on ACL Anthology →',
        'pub.link2': 'Challenge page →',

        'edu.label': 'Education',
        'edu.title': 'Academic background',
        'edu1.degree': 'Master\'s Degree in Artificial Intelligence & Data Science',
        'edu1.details': '2024 — September 2026 (expected)',
        'edu1.desc': 'Specialisation in artificial intelligence with focus on deep learning, computer vision, NLP and advanced retrieval systems. Elective: Large Language Models. Thesis on enterprise RAG systems.',
        'edu2.degree': 'Bachelor\'s Degree in Computer Engineering',
        'edu2.details': '2019 — March 2024 · Grade: 94/110',
        'edu2.desc': 'Computer science fundamentals, algorithms, databases, software engineering and artificial intelligence. Internship at SCAI developing data-driven solutions.',
        'edu3.degree': 'High School Diploma — IT Technician',
        'edu3.details': '2014 — 2019 · Grade: 92/100',
        'edu3.desc': 'Technical training in computer science, programming, networks and operating systems.',

        'contact.label': 'Contact',
        'contact.title': 'Let\'s get in touch',
        'contact.desc': 'Interested in collaborating or want to know more? I\'ll be happy to reply.',
        'contact.email.label': 'Email',
        'contact.linkedin.label': 'LinkedIn',
        'contact.linkedin.value': 'Connect →',
        'contact.github.label': 'GitHub',
        'contact.location.label': 'Location',
        'contact.location.value': 'Turin, Italy',

        'footer.text': '© 2026 Samuele Maroli. Available for full-time opportunities from September 2026.'
    }
};

function setLang(lang) {
    document.documentElement.lang = lang;
    document.getElementById('btn-it').classList.toggle('active', lang === 'it');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');

    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });
}

setLang('it');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Rail scroll-spy: highlight the index tab for the section in view
const railLinks = document.querySelectorAll('.rail-link');
const railMap = new Map();
railLinks.forEach(link => {
    const id = link.getAttribute('href').slice(1);
    const section = document.getElementById(id);
    if (section) railMap.set(section, link);
});

const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const link = railMap.get(entry.target);
        if (!link) return;
        link.classList.toggle('is-active', entry.isIntersecting);
    });
}, { rootMargin: '-40% 0px -55% 0px' });

railMap.forEach((_, section) => spy.observe(section));
