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
        name: 'About',
        submenu: [
            {
                id: 1,
                name: 'The University',
                menusubL: [
                    { id: 1, link: '#',  name: 'History & Heritage'},
                    { id: 2, link: '#',  name: 'University Crest'},
                    { id: 3, link: '#',  name: 'Vision & Mission'},
                    { id: 4, link: '#',  name: 'University Orgnization'},
                    { id: 5, link: '#',  name: 'University Ranking'},
                    { id: 6, link: '#',  name: 'Generak Convocation'},
                    { id: 7, link: '#',  name: 'University Calendar Dates'},
                    { id: 8, link: '#',  name: 'Information Officers'},
                ]
            },
            {
                id: 2,
                name: 'Leadership & Governance',
                menusubL: [
                    { id: 1, link: '#',  name: 'University Organization'},
                    { id: 2, link: '#',  name: 'Officers'},
                    { id: 3, link: '#',  name: 'Council'},
                    { id: 4, link: '#',  name: 'Senate'},
                    { id: 5, link: '#',  name: 'Chancellor'},
                    { id: 6, link: '#',  name: 'Vice-Chancellor'},
                    { id: 7, link: '#',  name: 'Deputy Vice-Chancellor'},
                    { id: 8, link: '#',  name: 'Deans of the Faculties'},
                    { id: 9, link: '#',  name: 'Librarian'},
                    { id: 10, link: '#',  name: 'Registrar'},
                    { id: 11, link: '#',  name: 'Bursar'},
                ]
            },
            {
                id: 3,
                name: 'Past Leaders',
                menusubL: [
                    { id: 1, link: '#',  name: 'Past Chancellors'},
                    { id: 2, link: '#',  name: 'Past Vice-Chancellors'},
                ]
            },
            {
                id: 4,
                name: 'Sustainability',
                link: '#'
            },
            {
                id: 5,
                name: 'Policies',
                link: '#'
            },
            {
                id: 6,
                name: 'International Collaborations',
                link: '#'
            },
        ]
    },

    // Academic

    {
        id: 2,
        name: 'Academic',
        submenu: [
            {
                id: 1,
                name: 'Admission',
                menusubL: [
                    { id: 1, link: '#', name: 'Undergraduate Admissions'},
                    { id: 2, link: '#', name: 'Postgraduate Admissions'},                    
                ]
            },
            {
                id: 2,
                name: 'Faculties',
                menusubL: [
                    { id: 1, link: '#', name: 'Faculty of Agriculture'},
                    { id: 2, link: '#', name: 'Faculty of Allied Health Sciences'},
                    { id: 3, link: '#', name: 'Faculty of Arts'},                    
                    { id: 4, link: '#', name: 'Faculty of Dental Sciences'},
                    { id: 5, link: '#', name: 'Faculty of Engineering'},
                    { id: 6, link: '#', name: 'Faculty of Management'},
                    { id: 7, link: '#', name: 'Faculty of Medicine'},
                    { id: 8, link: '#', name: 'Faculty of Science'},
                    { id: 9, link: '#', name: 'Faculty of Veterinary Medicine & Ani'},
                ]
            },
            {
                id: 3,
                name: 'Postgraduate Institutes',
                menusubL: [
                    { id: 1, link: '#', name: 'Postgraduate Institute of Agriculture (PGIA)'},
                    { id: 2, link: '#', name: 'Postgraduate Institute of Humanities and Social Sciences (PGIHS)'},
                    { id: 3, link: '#', name: 'Postgraduate Institute of Medical Sciences (PGIMS)'},
                    { id: 4, link: '#', name: 'Postgraduate Institute of Science (PGIS)'},
                ]
            },
            {
                id: 4,
                name: 'Centre for Distance and Continuing Education',
                link: '#'
            },
            {
                id: 5,
                name: 'Studentships',
                link: '#'
            },
            {
                id: 6,
                name: 'Library',
                link: '#'
            },
            {
                id: 7,
                name: 'Scholarships',
                menusubL: [
                    { id:1, link: '#', name: 'Academic Awards & Prizes'}
                ]
            },
        ]
    },



    // Students

    {
        id: 3,
        name: 'Students',
        submenu: [
            { id: 1, name: 'Student Accomodation', link: '#' },
            { id: 2, name: 'Student Admission', link: '#' },
            { id: 3, name: 'Student Societies', link: '#' },
            { id: 4, name: 'Sports Facilities', link: '#' },
            { id: 5, name: 'Cultural Activities', link: '#' },
            { id: 6, name: 'Health Centre', link: '#' },
            { id: 7, name: 'Student Services', link: '#' },
            { id: 8, name: 'Counselling & Psychological Support', link: '#' },
            { id: 9, name: 'Religious Activities', link: '#' },
            { id: 10, name: 'Student Discipline', link: '#'},
        ]
    },

    // Publications

    {
        id: 4,
        name: "Publications",
        submenu: [
            { id: 1, link: '#', name: 'Annual Reports' },
            { id: 1, link: '#', name: 'Digital Library' },
            { id: 1, link: '#', name: 'Journals' },
            { id: 1, link: '#', name: 'Newsletters' },
            { id: 1, link: '#', name: 'Sustainability Report' },
            { id: 1, link: '#', name: 'Statistical Handbook' },
            { id: 1, link: '#', name: 'University Calendar' },
            { id: 1, link: '#', name: 'Centenary Development Plan' },
            { id: 1, link: '#', name: 'Action Plan' },
        ]
    },

    // Research

    {
        id: 5,
        name: 'Research',
        link: '/RsearchAll'
    },

    // Centers & Units
    
    {
        id: 6,
        name: 'Centers & Units',
        link: '#'
    },



        // administration

        {
            id: 7,
            name: "Administration",
            submenu: [
                {
                    id: 1,
                    name: 'Administrative Division',
                    menusubL: [
                        { id: 1, link: '#', name: 'Academic Establishments'}, 
                        { id: 2, link: '#', name: 'Capital Works'}, 
                        { id: 3, link: '#', name: 'Corporate Management'}, 
                        { id: 4, link: '#', name: 'Council & Academic'}, 
                        { id: 5, link: '#', name: 'General Service'}, 
                        { id: 6, link: '#', name: 'Legal & Documentation'}, 
                        { id: 7, link: '#', name: 'Non-Academic Estab.'}, 
                        { id: 8, link: '#', name: 'Student Registration'}, 
                        { id: 9, link: '#', name: 'Student Service'},                    
                    ]                
                },
                {
                    id: 2,
                    name: 'Financial Division',
                    menusubL: [
                        { id: 1, link: '#', name: 'Final Accounts'}, 
                        { id: 2, link: '#', name: 'Foriegn Supplies'}, 
                        { id: 3, link: '#', name: 'Loans & ERP'}, 
                        { id: 4, link: '#', name: 'Local Supplies'}, 
                        { id: 5, link: '#', name: 'Payment & Budgetary'}, 
                        { id: 6, link: '#', name: 'Portfolio Investment'}, 
                        { id: 7, link: '#', name: 'Research, Funds & Publica.'}, 
                        { id: 8, link: '#', name: 'Retirement Benefits'}, 
                        { id: 9, link: '#', name: 'Revenue'},  
                        { id: 10, link: '#', name: 'Salaries & Wages'},                   
                        { id: 11, link: '#', name: 'Stores Management'}, 
                        { id: 12, link: '#', name: 'Student Services'}, 
                    ]                
                },
                {
                    id: 3,
                    name: 'Services',
                    menusubL: [
                        { id: 1, link: '#', name: 'Capital Works'}, 
                        { id: 2, link: '#', name: 'Maintenance'}, 
                        { id: 3, link: '#', name: 'Marshal Division'}, 
                        { id: 4, link: '#', name: 'Landscape'}, 
                        { id: 5, link: '#', name: 'Physical Education'}, 
                        { id: 6, link: '#', name: 'Public Relations'}, 
                        { id: 7, link: '#', name: 'Security'}, 
                        { id: 8, link: '#', name: 'Statistics & Information'}, 
                        { id: 9, link: '#', name: 'Student Accommodation'},  
                    ]                
                },
                {
                    id: 4,
                    name: 'Others',
                    menusubL: [
                        { id: 1, link: '#', name: 'Internal Audit'}, 
                    ]                
                }
            ]
        },

            // Alumni
    
    {
        id: 8,
        name: 'Alumni',
        link: '#'
    },

    // Vacancies

    {
        id: 9,
        name: 'Vacancies',
        link: '#'
    }
]

export { MainNavData, secNavData };