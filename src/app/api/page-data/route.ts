import { NextResponse } from "next/server";

const experienceData = [
    {
       /* icon: "/images/icon/tailwind-icon.svg", */
        role: "Digital Marketing Manager - Intouch Interface",
        location: "Pula, Croatia",
        startYear: "2022",
        endYear: "2025",
        bulletPoints: [
            "Managed end-to-end digital projects including website development, marketing campaign planning, SEO optimization, and advertising strategy execution.",
            "Focused on improving user experience, conversion performance, and digital brand presence.",
            "A/B testing for advertising and Email campaigns, and managing budgets to maximize ROI."
        ]
    },
    {
       /* icon: "/images/icon/tailwind-icon.svg", */
        role: "Marketing Intern - De Fine Marketing",
        location: "Remote",
        startYear: "2020",
        endYear: "2021",
        bulletPoints: [
            "Assisted in the development and execution of digital marketing campaigns across social media and online platforms.",
            "Supported content creation, campaign analysis, and audience targeting strategies to improve brand visibility and engagement.",
            "Collaborated with the marketing team on research, reporting, and performance optimization tasks."
        ]
    },
    {
        /* icon: "/images/icon/asana-icon.svg", */
        role: "Content Creator",
        location: "Remote",
        startYear: "2017",
        endYear: "2020",
        bulletPoints: [
            "Produced and edited video content focused on technology and digital topics.",
            "Worked on visual storytelling, content optimization, and multimedia production supporting digital media communication."
        ]
    },
]

const educationData = [
    {
        date: "Oct 2024 - Sep 2026",
        title: "Master's degree, Creative Management in Processes",
        subtitle: "Istarsko Veleučilište - Università Istriana di scienze applicate"
    },
    {
        date: "Oct 2023 - Mar 2026",
        title: "Master's degree, Informatics for Educational Purposes",
        subtitle: "Faculty of Informatics, Juraj Dobrila University of Pula"
    },
    {
        date: "Oct 2020 - Sep 2023",
        title: "Bachelor's degree, Information Technology",
        subtitle: "Faculty of Informatics, Juraj Dobrila University of Pula"
    }
];


const projectOverview = {
    caseStudies: [
        { name: "Brodarič, Luka.,", subname: " & Babić, Snježana. (2025). The adoption of artificial intelligence tools in education: A case study of primary and secondary school teachers in Pula, Croatia. AHFE International Conference Proceedings, 198. https://doi.org/10.54941/ahfe1006809", url: "https://www.croris.hr/crosbi/publikacija/prilog-skup/896000" },
        { name: "Brodarič, Luka.,", subname: " & Belli, Ilenia. (2025). Using artificial intelligence tools in email marketing. Zbornik Istarskog veleučilišta - Rivista dell’ Università Istriana di scienze applicate, 4(1), 23-29.", url: "https://hrcak.srce.hr/336646" },
        { name: "Brodarič, Luka.,", subname: " Bubalo, Alan., & Orehovački, Tihomir. (2025). Determinants of autonomous vehicle adoption among Croatian residents. In H. Krömker (Ed.), HCI in mobility, transport, and automotive systems (Lecture Notes in Computer Science, Vol. 15818). Springer. https://doi.org/10.1007/978-3- 031-92692-1_3", url: "https://link.springer.com/chapter/10.1007/978-3-031-92692-1_3" },

    ],
    sideProjects: [
       /* { name: "Formless", url: "#" },
        { name: "Gridsnap", comingSoon: true }, */
        { name: "Bonko", comingSoon: true },
     /* { name: "Siteflow Page Builder", comingSoon: true }, */
    ]
};


export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        projectOverview
    });
};