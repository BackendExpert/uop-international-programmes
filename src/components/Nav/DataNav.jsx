const MainNavData = [
    {
        id: 1,
        name: 'Directory',
        link: '#',
    },
    {
        id: 2,
        name: 'WebMail',
        link: '#',
    },
    {
        id: 3,
        name: 'Login',
        link: '#',
    },
    {
        id: 4,
        name: 'Emergency',
        link: '#',
    },
    {
        id: 5,
        name: 'IT Services',
        link: '#',
    },
    {
        id: 6,
        name: 'FAQ',
        link: '#',
    },

]

const secNavData = [
    // About
    {
        id: 1,
        name: 'Home',
        link: '#'
    },

    // Academic

    {
        id: 2,
        name: 'About UOP',
        link: '#'
    },



    // Students

    {
        id: 3,
        name: 'Academic Programs',
        submenu: [
            { id: 1, name: 'Undergraduate', link: '#' },
            { id: 2, name: 'Postgraduate', link: '#' },
        ]
    },

    // Publications

    {
        id: 4,
        name: "Research Opportunities",
        link: '#'
    },

    // Research

    {
        id: 5,
        name: 'Admissions',
        submenu: [
            { id: 1, name: 'Eligibility', link: '#' },
            { id: 2, name: 'Application Process', link: '#' },
            { id: 3, name: 'Visa & Immigration', link: '#' }
        ]
    },

    // Centers & Units

    {
        id: 6,
        name: 'Fees & Scholarships',
        submenu: [
            { id: 1, name: 'Tuition Fees', link: '#' },
            { id: 2, name: 'Available Scholarships', link: '#' },
        ]
    },



    // administration

    {
        id: 7,
        name: "Student Life",
        submenu: [
            { id: 1, name: 'Accommodation', link: '#' },
            { id: 2, name: 'Health Services', link: '#' },
            { id: 3, name: 'Sports & Recreation', link: '#' },
        ]
    },

    // Alumni


    // Vacancies

    {
        id: 8,
        name: 'More',
        submenu: [
            {
                id: 1,
                name: 'International Student Support',
                menusubL: [
                    { id: 1, link: '#', name: 'International Relations Office' },
                    { id: 2, link: '#', name: 'Student Counseling & Career Support' },
                ]
            },
            { id: 2, name: 'Contact Us', link: '#' },
            {
                id: 3,
                name: 'Downloadable Resources',
                menusubL: [
                    { id: 1, link: '#', name: 'Student Handbook (PDF)' },
                    { id: 2, link: '#', name: 'Application Guide (PDF)' },
                    { id: 3, link: '#', name: 'Course Catalogs' },
                ]
            },
            { id: 4, name: 'Apply Now ', link: '#' },
        ]
    }
]

export { MainNavData, secNavData };