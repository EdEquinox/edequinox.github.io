import { projects,createMiniProjectCards,loadBtns } from './projects.js';

export const languages = [
    {
        name: "Java",
        projects: getProjectsByLanguage("Java"),
        level: 8,
        logo: "java",
        how: "One of my favorite languages, the one I'm most confortable with even tho I don't use it as much as I used to. I've been using Java for the last 3 years.",
    },
    {
        name: "Python",
        projects: getProjectsByLanguage("Python"),
        level: 7,
        logo: "python",
        how: "I learnt on my own and have been using Python in the last 2 years, and I have developed some projects with it.",
    },
    {
        name: "Kotlin",
        projects: getProjectsByLanguage("Kotlin"),
        level: 7,
        logo: "android",
        how: "I've been more and more passionate about Kotlin and mobile app development. I've been using Kotlin for the last 2 years.",
    },
    {
        name: "JavaScript, HTML, CSS",
        projects: getProjectsByLanguage("JavaScript"),
        level: 6,
        logo: "javascript",
        how: "Although web development is not my or my degree's main focus, I have been using these technologies for the last 2 years.",
    },
    {
        name: "C++",
        projects: getProjectsByLanguage("C++"),
        level: 5,
        logo: "cplusplus",
        how: "I learnt on my degree and have been using C++ in the last 4 years, on and off.",
    },
    {
        name: "SQL",
        projects: getProjectsByLanguage("SQL"),
        level: 4,
        logo: "sqlite",
        how: "One of my weakest spots but even tho I have used it in some projects, I still have a lot to learn.",
    }
];


export function getProjectsByLanguage(language) {
    // Return an array of projects that use the given language, one project can use multiple languages
    return projects.filter(project => project.language.includes(language));
}

export function createLanguageCard(language) {
    return `
        <div class="col-auto hab-col">
            <div class="card mb-4 hab-card" style="max-width: 400px;">
            <div class="card-body p-3">
                <div class="row align-items-center">
                <div class="col-10">
                    <h5 class="card-title">${language.name}</h5>
                    <p class="language-text">${language.how}<br><br><br><br></p>
                    ${createMiniProjectCards(language)}
                </div>
                <div class="col-2 align-self-stretch d-flex flex-column justify-content-between align-items-center">
                    <div class="row logonlvl text-center">
                    <div class="col">
                        <i class="devicon devicon-${language.logo}-plain"></i>
                    </div>
                    </div>
                    <div class="row">
                        <div class="col d-flex p-0">
                        <div class="custom-loader ldr${language.level}0"></div>
                        <p class="skilltxt ms-0 mb-0 text-center">SKILL LEVEL</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    `;
}

export function loadLanguageCards() {
    const languagesContainer = document.getElementById('languages-container');
    if (languagesContainer) {
        languagesContainer.innerHTML = languages.map(createLanguageCard).join('');
    }
}

export function loadLanguagePage(){
    loadLanguageCards();
    loadBtns();
}