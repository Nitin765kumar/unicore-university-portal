/**
 * UNICORE University - Main JS
 * Developed by: Nitin Kumar
 * Version: 2.0
 */

document.addEventListener('DOMContentLoaded', function () {
    "use strict";

    // 1. NAVBAR SCROLL EFFECT
    const navbar = document.querySelector('#mainNavbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. INITIALIZE AOS (Animate On Scroll)
    // Note: Requires AOS library in your HTML <head> and before </body>
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }

    // 3. SMOOTH SCROLLING FOR INTERNAL LINKS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if it's a modal trigger; if so, don't prevent default
            if (this.hasAttribute('data-bs-toggle')) return;

            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 4. FORM HANDLING (Admission & Contact)
    const forms = ['admissionForm', 'contactForm'];
    
    forms.forEach(formId => {
        const form = document.getElementById(formId);
        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();

                // Button Loading State
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalContent = submitBtn.innerHTML;
                
                submitBtn.disabled = true;
                submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Processing...`;

                // Simulate Server Delay (2 seconds)
                setTimeout(() => {
                    // Success Feedback
                    alert(`Thank you! Your ${formId === 'admissionForm' ? 'Application' : 'Message'} has been sent successfully.`);
                    
                    // Reset Form
                    form.reset();
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalContent;
                }, 2000);
            });
        }
    });

    // 5. MOBILE NAV AUTO-CLOSE
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const menuToggle = document.getElementById('navbarNav');
    
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                const bsCollapse = new bootstrap.Collapse(menuToggle);
                bsCollapse.hide();
            }
        });
    });

});
/**
 * UNICORE University - Course Data Hub
 * Contains 15 detailed course objects
 */
/* =========================================
   UNICORE UNIVERSITY - PROGRAM DETAILS DATA
   Developed by: Nitin Kumar
========================================= */

const courseData = {

    // =====================================
    // TECHNOLOGY COURSES
    // =====================================

    "bca": {
        title: "BCA (Honors)",
        tagline: "Master modern software development and AI-powered applications.",
        description: "The Bachelor of Computer Applications program focuses on software engineering, full stack development, cloud computing, AI fundamentals, and enterprise-level programming technologies.",

        modules: [
            "Python Programming",
            "Full Stack Development",
            "Database Management",
            "Cloud Computing",
            "Artificial Intelligence",
            "Software Engineering"
        ],

        duration: "3 Years",
        eligibility: "10+2 with minimum 50%",
        fees: "₹85,000 / Year",

        syllabus: [
            {
                s: "Year 1",
                d: "Computer Fundamentals, C Programming, Mathematics, Digital Electronics"
            },
            {
                s: "Year 2",
                d: "Python, Java, DBMS, Operating Systems, Web Development"
            },
            {
                s: "Year 3",
                d: "Cloud Computing, AI Basics, Cyber Security, Major Project"
            }
        ]
    },

    "cyber-security": {
        title: "B.Sc. Cyber Security",
        tagline: "Protecting digital infrastructure and cyber ecosystems.",
        description: "Learn ethical hacking, penetration testing, cryptography, network security, and digital forensics with industry-focused practical labs.",

        modules: [
            "Ethical Hacking",
            "Cryptography",
            "Network Security",
            "Digital Forensics",
            "Linux Security",
            "Cyber Law"
        ],

        duration: "3 Years",
        eligibility: "10+2 Science Stream",
        fees: "₹95,000 / Year",

        syllabus: [
            {
                s: "Year 1",
                d: "Networking Basics, Computer Security Fundamentals, Linux Administration"
            },
            {
                s: "Year 2",
                d: "Ethical Hacking, Penetration Testing, Malware Analysis"
            },
            {
                s: "Year 3",
                d: "Cloud Security, Cyber Law, Advanced Security Project"
            }
        ]
    },

    "data-science": {
        title: "B.Sc. Data Science",
        tagline: "Transforming raw data into business intelligence.",
        description: "Master machine learning, analytics, predictive modeling, and AI-driven data systems using modern tools and technologies.",

        modules: [
            "Machine Learning",
            "Python Analytics",
            "Big Data",
            "Deep Learning",
            "Statistics",
            "Data Visualization"
        ],

        duration: "3 Years",
        eligibility: "10+2 with Mathematics",
        fees: "₹1,05,000 / Year",

        syllabus: [
            {
                s: "Year 1",
                d: "Statistics, Python Basics, Data Fundamentals"
            },
            {
                s: "Year 2",
                d: "Machine Learning, SQL, Data Analysis"
            },
            {
                s: "Year 3",
                d: "Deep Learning, AI Systems, Research Project"
            }
        ]
    },

    "software-engineering": {
        title: "B.Tech Software Engineering",
        tagline: "Engineering scalable enterprise software systems.",
        description: "Professional engineering course focused on software architecture, DevOps, scalable systems, and cloud-native development.",

        modules: [
            "Java Development",
            "System Design",
            "DevOps",
            "Cloud Architecture",
            "Agile Methodologies",
            "Software Testing"
        ],

        duration: "4 Years",
        eligibility: "10+2 PCM",
        fees: "₹1,40,000 / Year",

        syllabus: [
            {
                s: "Year 1",
                d: "Programming Fundamentals, Engineering Mathematics"
            },
            {
                s: "Year 2",
                d: "Data Structures, Java, DBMS"
            },
            {
                s: "Year 3",
                d: "Cloud Systems, Agile Development, Testing"
            },
            {
                s: "Year 4",
                d: "Industrial Internship and Major Project"
            }
        ]
    },

    "iot-robotics": {
        title: "B.Tech IoT & Robotics",
        tagline: "Building smart intelligent systems for the future.",
        description: "Specialized engineering program focused on robotics, automation, IoT systems, embedded hardware, and AI-driven devices.",

        modules: [
            "Embedded Systems",
            "Robotics",
            "Automation",
            "IoT Networks",
            "Microcontrollers",
            "AI Robotics"
        ],

        duration: "4 Years",
        eligibility: "10+2 PCM",
        fees: "₹1,55,000 / Year",

        syllabus: [
            {
                s: "Year 1",
                d: "Electronics Basics, C Programming"
            },
            {
                s: "Year 2",
                d: "Microcontrollers, Sensors, IoT Fundamentals"
            },
            {
                s: "Year 3",
                d: "Robotics, Automation Systems"
            },
            {
                s: "Year 4",
                d: "Industrial Robotics Project"
            }
        ]
    },

    // =====================================
    // BUSINESS COURSES
    // =====================================

    "bba": {
        title: "BBA (General)",
        tagline: "Developing tomorrow’s business leaders.",
        description: "Comprehensive business education program focused on management, leadership, entrepreneurship, and strategic operations.",

        modules: [
            "Marketing",
            "Human Resource",
            "Finance",
            "Business Strategy",
            "Operations",
            "Entrepreneurship"
        ],

        duration: "3 Years",
        eligibility: "10+2 Any Stream",
        fees: "₹75,000 / Year",

        syllabus: [
            {
                s: "Year 1",
                d: "Business Communication, Principles of Management"
            },
            {
                s: "Year 2",
                d: "Marketing, HRM, Financial Accounting"
            },
            {
                s: "Year 3",
                d: "Business Strategy, Entrepreneurship"
            }
        ]
    },

    "mba": {
        title: "MBA Global",
        tagline: "Leadership strategies for a global economy.",
        description: "Advanced management program designed for corporate leadership, international business, and strategic decision making.",

        modules: [
            "Leadership",
            "Global Business",
            "Finance",
            "Corporate Strategy",
            "Marketing",
            "Business Analytics"
        ],

        duration: "2 Years",
        eligibility: "Bachelor Degree",
        fees: "₹2,10,000 / Year",

        syllabus: [
            {
                s: "Semester 1",
                d: "Management Fundamentals, Economics"
            },
            {
                s: "Semester 2",
                d: "Corporate Finance, Marketing"
            },
            {
                s: "Semester 3",
                d: "Global Markets, Leadership"
            },
            {
                s: "Semester 4",
                d: "Industry Internship & Capstone"
            }
        ]
    },

    "bcom-finance": {
        title: "B.Com Finance",
        tagline: "Mastering finance, taxation and investments.",
        description: "Focused commerce program covering accounting, taxation, auditing, investment banking and financial systems.",

        modules: [
            "Accounting",
            "Taxation",
            "Auditing",
            "Corporate Finance",
            "Investment Banking",
            "Financial Markets"
        ],

        duration: "3 Years",
        eligibility: "10+2 Commerce",
        fees: "₹70,000 / Year",

        syllabus: [
            {
                s: "Year 1",
                d: "Financial Accounting, Economics"
            },
            {
                s: "Year 2",
                d: "Corporate Finance, Taxation"
            },
            {
                s: "Year 3",
                d: "Auditing, Investment Analysis"
            }
        ]
    },

    "supply-chain": {
        title: "Supply Chain Management",
        tagline: "Optimizing global logistics and operations.",
        description: "Industry-oriented course focused on logistics, procurement, sourcing and distribution systems.",

        modules: [
            "Logistics",
            "Procurement",
            "Inventory Management",
            "Transportation",
            "Global Supply Chain",
            "Warehouse Operations"
        ],

        duration: "2 Years",
        eligibility: "Graduate in Any Discipline",
        fees: "₹90,000 / Year",

        syllabus: [
            {
                s: "Semester 1",
                d: "Supply Chain Fundamentals, Logistics"
            },
            {
                s: "Semester 2",
                d: "Procurement and Inventory Systems"
            },
            {
                s: "Semester 3",
                d: "Global Distribution Networks"
            },
            {
                s: "Semester 4",
                d: "Industry Internship"
            }
        ]
    },

    "entrepreneurship": {
        title: "Entrepreneurship Program",
        tagline: "Transforming innovative ideas into startups.",
        description: "Learn startup building, venture funding, business scaling, branding and entrepreneurial leadership.",

        modules: [
            "Startup Building",
            "Pitching",
            "Funding",
            "Branding",
            "Leadership",
            "Innovation"
        ],

        duration: "3 Years",
        eligibility: "10+2 Any Stream",
        fees: "₹82,000 / Year",

        syllabus: [
            {
                s: "Year 1",
                d: "Business Innovation, Startup Basics"
            },
            {
                s: "Year 2",
                d: "Funding Models, Branding"
            },
            {
                s: "Year 3",
                d: "Scaling Startups and Incubation"
            }
        ]
    },

    // =====================================
    // ARTS COURSES
    // =====================================

    "digital-arts": {
        title: "B.A. Digital Arts",
        tagline: "Blending creativity with modern technology.",
        description: "Creative program covering digital illustration, animation, UI/UX, and visual storytelling.",

        modules: [
            "Graphic Design",
            "3D Modeling",
            "Animation",
            "UI/UX Design",
            "Video Editing",
            "Digital Illustration"
        ],

        duration: "3 Years",
        eligibility: "10+2 Any Stream",
        fees: "₹88,000 / Year",

        syllabus: [
            {
                s: "Year 1",
                d: "Design Principles, Illustration"
            },
            {
                s: "Year 2",
                d: "Animation, Motion Graphics"
            },
            {
                s: "Year 3",
                d: "UI/UX, Portfolio Development"
            }
        ]
    },

    "psychology": {
        title: "B.A. Psychology",
        tagline: "Understanding the science of human behavior.",
        description: "Study human cognition, behavior, emotions and modern counseling techniques.",

        modules: [
            "Clinical Psychology",
            "Counseling",
            "Human Behavior",
            "Mental Health",
            "Cognitive Science",
            "Research Methods"
        ],

        duration: "3 Years",
        eligibility: "10+2 Any Stream",
        fees: "₹76,000 / Year",

        syllabus: [
            {
                s: "Year 1",
                d: "Introduction to Psychology, Human Development"
            },
            {
                s: "Year 2",
                d: "Behavioral Psychology, Counseling"
            },
            {
                s: "Year 3",
                d: "Clinical Psychology and Research"
            }
        ]
    },

    "journalism": {
        title: "B.A. Journalism",
        tagline: "Shaping the future of digital media.",
        description: "Professional journalism course covering reporting, digital media, broadcasting and investigative journalism.",

        modules: [
            "News Reporting",
            "Broadcast Media",
            "Digital Journalism",
            "Public Relations",
            "Media Ethics",
            "Content Production"
        ],

        duration: "3 Years",
        eligibility: "10+2 Any Stream",
        fees: "₹80,000 / Year",

        syllabus: [
            {
                s: "Year 1",
                d: "Communication Basics, Journalism Ethics"
            },
            {
                s: "Year 2",
                d: "Digital Journalism, Reporting"
            },
            {
                s: "Year 3",
                d: "Broadcasting and Media Internship"
            }
        ]
    },

    "fashion-design": {
        title: "Fashion Design",
        tagline: "Designing sustainable global fashion trends.",
        description: "Creative design program focused on textiles, styling, fashion illustration and global fashion industries.",

        modules: [
            "Fashion Illustration",
            "Textile Design",
            "Garment Construction",
            "Styling",
            "Fashion Marketing",
            "Sustainable Fashion"
        ],

        duration: "4 Years",
        eligibility: "10+2 Any Stream",
        fees: "₹1,10,000 / Year",

        syllabus: [
            {
                s: "Year 1",
                d: "Fashion Basics, Sketching"
            },
            {
                s: "Year 2",
                d: "Textile Science, Pattern Making"
            },
            {
                s: "Year 3",
                d: "Fashion Marketing and Styling"
            },
            {
                s: "Year 4",
                d: "Fashion Portfolio & Industry Internship"
            }
        ]
    },

    "film-production": {
        title: "Film Production",
        tagline: "Creating cinematic stories for the modern world.",
        description: "Professional filmmaking program covering cinematography, editing, direction and post-production.",

        modules: [
            "Cinematography",
            "Direction",
            "Script Writing",
            "Video Editing",
            "Sound Design",
            "Post Production"
        ],

        duration: "3 Years",
        eligibility: "10+2 Any Stream",
        fees: "₹1,20,000 / Year",

        syllabus: [
            {
                s: "Year 1",
                d: "Film Theory, Camera Basics"
            },
            {
                s: "Year 2",
                d: "Direction, Editing, Screenplay"
            },
            {
                s: "Year 3",
                d: "Short Film Production & Internship"
            }
        ]
    }
};


/* =========================================
   DYNAMIC COURSE DETAILS LOADER
========================================= */

function initDetail() {

    const params = new URLSearchParams(window.location.search);

    const courseId = params.get("course");

    const course = courseData[courseId];

    if (!course) {

        document.getElementById("main-title").innerText = "Course Not Found";

        return;
    }

    // MAIN CONTENT
    document.getElementById("main-title").innerText = course.title;

    document.getElementById("breadcrumb-active").innerText = course.title;

    document.getElementById("main-tagline").innerText = course.tagline;

    document.getElementById("course-desc").innerText = course.description;

    // SIDEBAR
    document.getElementById("stat-duration").innerText = course.duration;

    document.getElementById("stat-eligibility").innerText = course.eligibility;

    document.getElementById("stat-fees").innerText = course.fees;

    // MODULES
    const learningBox = document.getElementById("learning-points");

    learningBox.innerHTML = "";

    course.modules.forEach(module => {

        learningBox.innerHTML += `
        
        <div class="col-md-6">

            <div class="border rounded-4 p-3 bg-light h-100 shadow-sm">

                <i class="fas fa-check-circle text-primary me-2"></i>

                ${module}

            </div>

        </div>
        `;
    });

    // SYLLABUS
    const accordion = document.getElementById("curriculumAccordion");

    accordion.innerHTML = "";

    course.syllabus.forEach((item, index) => {

        accordion.innerHTML += `

        <div class="accordion-item border rounded-4 mb-3 overflow-hidden">

            <h2 class="accordion-header">

                <button 
                    class="accordion-button ${index !== 0 ? 'collapsed' : ''}"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse${index}">

                    ${item.s}

                </button>

            </h2>

            <div 
                id="collapse${index}"
                class="accordion-collapse collapse ${index === 0 ? 'show' : ''}">

                <div class="accordion-body">

                    ${item.d}

                </div>

            </div>

        </div>
        `;
    });
}


/* =========================================
   RUN ONLY ON DETAILS PAGE
========================================= */

if (window.location.pathname.includes("programs-detail.html")) {

    window.addEventListener("DOMContentLoaded", initDetail);

}
window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }

});
// ==========================
// ADMISSION FORM VALIDATION
// ==========================

const admissionForm = document.getElementById("admissionForm");

if(admissionForm){

    admissionForm.addEventListener("submit", function(event){

        event.preventDefault();

        // Inputs
        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const agree = document.getElementById("agree");

        // Validation
        if(fullName === ""){
            alert("Please enter your full name.");
            return;
        }

        if(email === ""){
            alert("Please enter your email address.");
            return;
        }

        if(phone === ""){
            alert("Please enter your mobile number.");
            return;
        }

        if(!agree.checked){
            alert("Please accept Terms & Conditions.");
            return;
        }

        // Success
        alert("Application Submitted Successfully!");

        // Reset Form
        admissionForm.reset();

    });

}
// =========================
// Student Register Form
// =========================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        // Inputs
        const studentName =
            document.getElementById("registerName").value;

        const studentEmail =
            document.getElementById("registerEmail").value;

        const studentPassword =
            document.getElementById("registerPassword").value;

        // Save Data
        localStorage.setItem("studentName", studentName);
        localStorage.setItem("studentEmail", studentEmail);
        localStorage.setItem("studentPassword", studentPassword);

        // Success Alert
        alert("Account Created Successfully!");

        // Redirect
        window.location.href = "student-login.html";

    });

}
// =========================
// Student Login Form
// =========================


// =========================
// STUDENT LOGIN
// =========================

const loginForm = document.getElementById("studentLoginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        // Inputs
        const loginEmail =
            document.getElementById("loginEmail").value;

        const loginPassword =
            document.getElementById("loginPassword").value;

        // Stored Data
        const savedEmail =
            localStorage.getItem("studentEmail");

        const savedPassword =
            localStorage.getItem("studentPassword");

        // Check
        if (
            loginEmail === savedEmail &&
            loginPassword === savedPassword
        ) {

            // Login Status
            localStorage.setItem("studentLoggedIn", "true");

            alert("Login Successful!");

            // Redirect
            window.location.href =
                "student-dashboard.html";

        } else {

            alert("Invalid Email or Password!");

        }

    });

}
// =========================
// DASHBOARD PROTECTION
// =========================

if (
    window.location.pathname.includes(
        "student-dashboard.html"
    )
) {

    const isLoggedIn =
        localStorage.getItem("studentLoggedIn");

    if (!isLoggedIn) {

        window.location.href =
            "student-login.html";

    }

}
// =========================
// DYNAMIC STUDENT NAME
// =========================

const studentName =
    localStorage.getItem("studentName");

const studentNameDisplay =
    document.getElementById(
        "studentNameDisplay"
    );

const profileName =
    document.getElementById(
        "profileName"
    );

if (studentNameDisplay) {

    studentNameDisplay.innerText =
        studentName;

}

if (profileName) {

    profileName.innerText =
        studentName;

}
// =========================
// LOGOUT
// =========================

const logoutBtn =
    document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        localStorage.removeItem(
            "studentLoggedIn"
        );

        alert("Logged Out Successfully!");

        window.location.href =
            "student-login.html";

    });

}