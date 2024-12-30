export const projects = [
    {
        title: "Lactometer",
        description: "Developed in collaboration with RaveShape, it's a tool that enables personal trainers to accurately assess their trainees' lactate levels based on running performance.",
        images: ["lact-1.png", "lact-2.png"],
        language: "Python",
        tools: ["Vercel", "Django"],
    },
    {
        title: "strokey",
        description: "Developed in C++ with WINAPI and JUCE, it's a tool that enables users to use their MIDI device to control their computer actions.",
        images: ["strokey-1.png", "strokey-1.png"],
        language: "C++",
        tools: ["JUCE", "WinAPI"],
    },
    {
        title: "spotle_infinity",
        description: "A web application based on the Spotle game that enables users to play custom levels and create their own levels.",
        images: ["spot-1.png", "spot-1.png"],
        language: "JavaScript, HTML, CSS"
    },
    {
        title: "StashExtract",
        description: "Built with Python, it's a tool that enables users to extract and analyze data from the Stash app. GUI available.",
        images: ["stash-1.png", "stash-1.png"],
        language: "Python",
        tools: ["Tkinter", "BeautifulSoup", "selenium"]
    },
    {
        title: "MusicboardExtract",
        description: "Built with Python and deployed in Vercel, it's a tool that enables users to extract and analyze data from the Musicboard app.",
        images: ["mboard-1.png", "mboard-1.png"],
        language: "Python",
        tools: ["Vercel", "BeautifulSoup", "selenium"]
    },
    {
        title: "Tour Advisor",
        description: "One of my student projects, developed in Kotlin, it's a mobile application for users to explore new places and get recommendations.",
        images: ["tour-1.png", "tour-2.png"],
        language: ["Kotlin", "SQL"],
    },
    {
        title: "PacMan-o",
        description: "One of my student projects, developed in Kotlin, it's a mobile application for users to explore new places and get recommendations.",
        images: ["pac-1.png", "pac-2.png"],
        language: "Java",
    },
    {
        title: "FairShare",
        description: "One of my student projects, developed in Kotlin, it's a mobile application for users to explore new places and get recommendations.",
        images: ["fair-1.png", "fair-1.png"],
        language: ["Java", "SQL"],
    },
];

export const tools = [
    {
        name: "Vercel",
        logo: "vercel.png",
        link: "https://vercel.com/",
    },
    {
        name: "Django",
        logo: "django.png",
        link: "https://www.djangoproject.com/",
    },
    {
        name: "JUCE",
        logo: "juce.png",
        link: "https://juce.com/",
    },
    {
        name: "WinAPI",
        logo: "winapi.png",
        link: "https://docs.microsoft.com/en-us/windows/win32/apiindex/windows-api-list",
    },
    {
        name: "Tkinter",
        logo: "tkinter.png",
        link: "https://docs.python.org/3/library/tkinter.html",
    },
    {
        name: "BeautifulSoup",
        logo: "beautifulsoup.png",
        link: "https://www.crummy.com/software/BeautifulSoup/bs4/doc/",
    },
    {
        name: "selenium",
        logo: "selenium.png",
        link: "https://www.selenium.dev/",
    }
];

export function createProjectCard(project) {
    return `
        <div class="col-lg-4">
            <div class="card mb-3">
                <div class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                    ${project.images.map((image, index) => `
                        <div class="carousel-item ${index === 0 ? 'active' : ''}">
                        <img src="images/${image}" class="d-block w-100" alt="Project Image">
                        </div>
                    `).join('')}
                    </div>
                </div>
                <div class="card-body overlay-text">
                    <h5 class="card-title">${project.title}</h5>
                    <div class="row">
                    <div class="col-10">
                        <p class="card-text">${project.description}</p>
                    </div>
                    <div class="col-2 button-plus" id="btn_${project.title}">
                        <button class="learn-more">
                        <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                        </span>
                        <span class="button-text"></span>
                        </button>              </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function createMiniProjectCards(language) {
    const projectsWithLanguage = language.projects;
    console.log(projectsWithLanguage);
    if (projectsWithLanguage.length === 0) {
        return '';
    }
    let html = '<h5>Used on:</h5><div class="container mt-1 projects-container">';
    for (let i = 0; i < projectsWithLanguage.length; i++) {
        html += `
            <div class="litleprojbtn">
                <p>${projectsWithLanguage[i].title}<p>
            </div>
        `;
    }
    html += '</div>';
    return html;
}

  // Function to load project cards
export function loadProjectCards() {
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        projectsContainer.innerHTML = projects.map(createProjectCard).join('');
    }
}

export function loadBtns(){
    var btns = document.querySelectorAll(".button-plus");
    var other = document.querySelectorAll(".litleprojbtn");
    console.log(btns);
    btns.forEach(btn => {
        btn.addEventListener("click", function() {
            var project = projects.find(project => `btn_${project.title}` === btn.id);
            console.log(project);
            createPopup(project.title);
            document.getElementById("popup").style.display = "block";
        });
    });
    console.log(other);
    other.forEach(btn => {
        btn.addEventListener("click", function() {
            //title is in p inside the div
            var title = btn.querySelector("p").innerHTML;
            var project = projects.find(project => project.title === title);
            console.log(project);
            createPopup(project.title);
            document.getElementById("popup").style.display = "block";
        });
    });
    
}

export function loadProjectsPage(){
    loadProjectCards();
    loadBtns();
}

export function createPopup(title) {
    let popdiv = document.getElementById("popup-content");
    fetch('../pages/projects/' + title + '.html')
        .then(response => response.text())
        .then(data => {
            popdiv.innerHTML = data;
        });
}