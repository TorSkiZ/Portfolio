document.addEventListener("DOMContentLoaded", () => {
    const texts = {
        en: {
            "header-text": "My passion is to connect people.",
            "about-title": "About me",
            "about-text": "Hello! My name is Wiktor Wasiński, and I am a passionate IT enthusiast who has just graduated from technical school. Despite my recent entry into the professional world, I have already gained significant experience in web development and network administration.",
            "experience-title": "Experience",
            "experience-text": "During my time at technical school, I created and managed the official website for the institution. Additionally, I am currently responsible for the website of Euro-Dach Smętek, where I oversee its maintenance and updates. One of my notable projects includes developing a calculator in Python that can plot linear functions. Furthermore, I have built this very portfolio website from scratch using HTML, CSS and JavaScript.",
            "skills-title": "Skills",
            "skill1": "Web Development: Proficient in HTML, CSS and JavaScript for front-end development.",
            "skill2": "Programming: Skilled in Python for scripting and application development.",
            "skill3": "Network Administration: Capable of setting up and managing local networks.",
            "skill4": "Computer Hardware: Experienced in building and repairing computers.",
            "skill5": "Server Administration: Knowledgeable in managing GNU/Linux servers.",
            "interests-title": "Interests",
            "interests-text": "I have a deep interest in all aspects of IT, particularly in network systems, GNU/Linux servers, and programming. At home, I run my own server where I experiment with various technologies and enhance my skills.",
            "certifications-title": "Certifications",
            "cert1": "INF.02 and INF.03 qualifications in the IT profession.",
            "cert2": "Certificate of participation in the 'Czas zawodowców BIS - zawodowa Wielkopolska' project.",
            "goals-title": "Goals",
            "goals-text": "My professional goal is to connect people through the vast potential of the internet. I am committed to leveraging my skills and knowledge to contribute to the ever-evolving field of IT.",
            "footer-text": "Made with passion by Wiktor Wasiński"
        },
        pl: {
            "header-text": "Moją pasją jest łączenie ludzi.",
            "about-title": "O mnie",
            "about-text": "Cześć! Nazywam się Wiktor Wasiński i jestem 20-letnim pasjonatem IT, który właśnie ukończył szkołę średnią. Pomimo mojego niedawnego wejścia na rynek pracy, zdobyłem już znaczące doświadczenie w tworzeniu stron internetowych i administracji sieciami.",
            "experience-title": "Doświadczenie",
            "experience-text": "Podczas nauki w technikum stworzyłem i zarządzałem oficjalną stroną internetową szkoły. Dodatkowo, obecnie odpowiadam za stronę internetową Euro-Dach Smętek, gdzie zajmuję się jej utrzymaniem i aktualizacjami. Jednym z moich godnych uwagi projektów jest opracowanie kalkulatora w Pythonie, który potrafi rysować funkcje liniowe. Ponadto, stworzyłem tę stronę portfolio od podstaw, używając HTML, CSS i JavaScript.",
            "skills-title": "Umiejętności",
            "skill1": "Tworzenie stron internetowych: Znajomość HTML, CSS i JavaScript na potrzeby front-endu.",
            "skill2": "Programowanie: Biegłość w Python na potrzeby pisania skryptów i tworzenia aplikacji.",
            "skill3": "Administracja sieci: Umiejętność konfigurowania i zarządzania sieciami lokalnymi.",
            "skill4": "Sprzęt komputerowy: Doświadczenie w budowie i naprawie komputerów.",
            "skill5": "Administracja serwerami: Znajomość zarządzania serwerami GNU/Linux.",
            "interests-title": "Zainteresowania",
            "interests-text": "Moją pasją są wszystkie aspekty IT, szczególnie systemy sieciowe, serwery GNU/Linux i programowanie. W domu administruję własnym serwerem, na którym eksperymentuję z różnymi technologiami i rozwijam swoje umiejętności.",
            "certifications-title": "Certyfikaty",
            "cert1": "Kwalifikacje INF.02 i INF.03 w zawodzie informatyk.",
            "cert2": "Certyfikat uczestnictwa w projekcie 'Czas zawodowców BIS - zawodowa Wielkopolska'.",
            "goals-title": "Cele",
            "goals-text": "Moim zawodowym celem jest łączenie ludzi poprzez ogromny potencjał internetu. Zobowiązuję się do wykorzystania moich umiejętności i wiedzy, aby przyczynić się do ciągłego rozwoju branży IT.",
            "footer-text": "Stworzone z pasją przez Wiktora Wasińskiego"
        }
    };

    const userLang = navigator.language || navigator.userLanguage;
    const lang = localStorage.getItem('language') || (userLang.includes('pl') ? 'pl' : 'en');

    const setLanguage = (language) => {
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            element.textContent = texts[language][key];
        });
        localStorage.setItem('language', language);
    };

    document.getElementById('en-btn').addEventListener('click', () => setLanguage('en'));
    document.getElementById('pl-btn').addEventListener('click', () => setLanguage('pl'));

    setLanguage(lang);
});