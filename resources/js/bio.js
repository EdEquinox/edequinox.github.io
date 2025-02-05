export const timestamps=[
    {
        color: "--accent-color:#6E8B85",
        date: "Sept. 2018 - Present",
        title: "STARTED MY DEGREE",
        description: "I started my degree in Computer Engeneering at the Instituto Politécnico de Coimbra, Portugal.",
    },
    {
        color: "--accent-color:#9BC59D",
        date: "July 2019 - Oct. 2024",
        title: "FIREWATCH",
        description: "I started working as a firewatcher in the summer of 2019 and have been doing it every summer since.",
    },
    {
        color: "--accent-color:#CCD584",
        date: "2021 - Present",
        title: "FREELANCING",
        description: "I started freelancing as a developer in 2021 and have been doing it ever since.",
    },
    {
        color: "--accent-color:#C8AD55",
        date: "Jan. 2023 - Present",
        title: "TECHCARE",
        description: "I created my own computer and electronics fixing business, TechCare.",
    },
    {
        color: "--accent-color:#B5864F",
        date: "Aug. 2024 - Present",
        title: "LACTOMETER",
        description: "I developed my biggest project yet, Lactometer, in cooperation with RaveShape.",
    },
]

export const info = {
    name: "José Marques",
    role: "Software Engineering Student",
    location: "Coimbra, Portugal",
    age: 26,
    email: "jmarquesnox@gmail.com",
    social: [
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/josemarques-nox/",
            logo: "linkedin",
        },
        {
            name: "GitHub",
            link: "https://www.github.com/EdEquinox",
            logo: "github",
        }
    ],
    education: "Currently studying Software Engineering at Instituto Politecnico de Engenharia de Coimbra",
    exp: "Freelancing, Computer and Electronics Repairing, Firewatching",
    prj: "Several projects, including a web application for a local business.",
    lead:"Passionate about solving problems. Open source enthusiast. Always learning.",
    role: "Software Engeneering Student & Freelancer",
    bio: `<p class="p-3">
            Hello! I'm José Marques.
            <br>
            I'm a Software Engineering student at Instituto Superior de Engenharia de Coimbra, in Portugal. 
            <br>
            I'm also a freelancer, working on several projects. 
            <br>
            Passionate about solving problems and learning new things, I'm always looking for new challenges and opportunities to grow. 
            <br>
            Currently, I'm looking for an internship in the software development field.
        </p>`,
};

export function createTimestampCard(timestamp) {
    let color = timestamp.color
    let date = timestamp.date
    let title = timestamp.title
    let description = timestamp.description

    return `
        <li style="${color}">
            <div class="date">${date}</div>
            <div class="title">${title}</div>
            <div class="descr">${description}</div>
        </li>
    `;
}

export function loadTimestamps() {
    for (let i = 0; i < timestamps.length; i++) {
        const timestamp = timestamps[i];
        const timestampCard = createTimestampCard(timestamp);
        document.getElementById("timeline").innerHTML += timestampCard;
    }
}

export function loadIcons() {
    for (let i = 0; i < info.social.length; i++) {
        const social = info.social[i];
        document.getElementById("socialscol").innerHTML += `
            <a id="${social.logo}link" href="${social.link}" style=" text-decoration: none; color: inherit">
                <div class="bioicons" id="githublogo">
                    <i class="devicon-${social.logo}-plain"></i>
                </div>
            </a>
        `;
    }
}

export function loadDownload() {
    document.getElementById('downloadBtn').addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = 'data/cv.pdf'; // Replace with the actual path to your PDF file
        link.download = 'JoséMarques_CV.pdf'; // Replace with the desired file name
        link.click();
    });
}

export function loadInfo() {

    document.getElementById("namebio").innerHTML = `<h1 class="display-4" id="namebio">${info.name}</h1>`;
    document.getElementById("rolebio").innerHTML = `<h3 class="text-muted" id="rolebio">${info.role}</h3>`;
    document.getElementById("leadbio").innerHTML = `<p class="lead" id="leadbio">${info.lead}</p>`;
    document.getElementById("biobio").innerHTML = info.bio;
    document.getElementById("locationbio").innerHTML = `<h5>Location</h5><p class="text-muted" id="locationbio">${info.location}</p>`;
    document.getElementById("agebio").innerHTML = `<h5>Age</h5><p class="text-muted" id="agebio">${info.age} years old</p>`;
    document.getElementById("emailbio").innerHTML = `<h5>Email</h5><p class="text-muted" id="emailbio">${info.email}</p>`;
    document.getElementById("educationbio").innerHTML = `<h5>Education</h5><p class="text-muted" id="educationbio">${info.education}</p>`;
    document.getElementById("expbio").innerHTML = `<h5>Working Experience</h5><p class="text-muted" id="expbio">${info.exp}</p>`;
    document.getElementById("prjbio").innerHTML = `<h5>Projects</h5><p class="text-muted" id="prjbio">${info.prj}</p>`;
    
}


export function loadBio() {
    loadInfo();
    loadTimestamps();
    loadIcons();
    loadDownload();
}
