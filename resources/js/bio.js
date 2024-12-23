export const timestamps=[
    {
        color: "--accent-color:#41516C",
        date: "Sept. 2018 - Present",
        title: "STARTED MY DEGREE",
        description: "I started my degree in Computer Engeneering at the Instituto Politécnico de Coimbra, Portugal.",
    },
    {
        color: "--accent-color:#FBCA3E",
        date: "July 2019 - Present",
        title: "FIREWATCH",
        description: "I started working as a firewatcher in the summer of 2019 and have been doing it every summer since.",
    },
    {
        color: "--accent-color:#E24A68",
        date: "2021 - Present",
        title: "FREELANCING",
        description: "I started freelancing as a developer in 2021 and have been doing it ever since.",
    },
    {
        color: "--accent-color:#1B5F8C",
        date: "Jan. 2023 - Present",
        title: "TECHCARE",
        description: "I created my own computer and electronics fixing business, TechCare.",
    },
    {
        color: "--accent-color:#4CADAD",
        date: "Aug. 2024 - Present",
        title: "LACTOMETER",
        description: "I developed my biggest project yet, Lactometer, in cooperation with RaveShape.",
    },
]

export const info = {
    name: "José Marques",
    role: "Software Engeneering Student",
    location: "Coimbra, Portugal",
    age: 26,
    email: "jmarquesnox@gmail.com",
    social: [
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/joaopedromarquesnox/",
            logo: "linkedin.png",
        },
        {
            name: "GitHub",
            link: "www.github.com/joaopedromarquesnox",
            logo: "github.png",
        },
        {
            name: "Twitter",
            link: "www.twitter.com/joaopedromarquesnox",
            logo: "twitter.png",
        },
    ],
    education: "Currently studying Software Engineering at Instituto Politecnico de Engenharia de Coimbra",
    exp: "Freelancer, Computer and Electronics Fixer, Firewatcher",
    prj: "Several projects, including a web application for a local business.",
    lead:"Passionate about solving problems. Open source enthusiast. Always learning.",
    role: "Software Engeneering Student & Freelancer",
    bio: `<p class="p-3">
            Hello! I'm José Marques.
            <br>
            I'm a Software Engineering student at the Instituto Politecnico de Engenharia de Coimbra, in Portugal. I'm also a freelancer, working on several projects.
            <br>
            I'm passionate about solving problems and learning new things. I'm always looking for new challenges and opportunities to grow.
            <br>
            I'm currently looking for an internship in the software development field.
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

export function loadInfo() {

    document.getElementById("namebio").innerHTML = `<h1 class="display-4" id="namebio">${info.name}</h1>`;
    document.getElementById("rolebio").innerHTML = `<h3 class="text-muted" id="rolebio">${info.role}</h3>`;
    document.getElementById("leadbio").innerHTML = `<p class="lead" id="leadbio">${info.lead}</p>`;
    document.getElementById("biobio").innerHTML = info.bio;
    document.getElementById("locationbio").innerHTML = `<h5>Location</h5><p class="text-muted" id="locationbio">${info.location}</p>`;
    document.getElementById("agebio").innerHTML = `<h5>Age</h5><p class="text-muted" id="agebio">${info.age} years old</p>`;
    document.getElementById("emailbio").innerHTML = `<h5>Email</h5><p class="text-muted" id="emailbio">${info.email}</p>`;
    document.getElementById("educationbio").innerHTML = `<h5>Education</h5><p class="text-muted" id="educationbio">${info.education}</p>`;
    document.getElementById("expbio").innerHTML = `<h5>Work Experience</h5><p class="text-muted" id="expbio">${info.exp}</p>`;
    document.getElementById("prjbio").innerHTML = `<h5>Projects</h5><p class="text-muted" id="prjbio">${info.prj}</p>`;
    
}


export function loadBio() {
    loadInfo();
    loadTimestamps();
}
