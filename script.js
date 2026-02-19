// ===== Sample Data =====
const internships = [
    {
        id: 1,
        role: "Frontend Developer Intern",
        company: "TechCorp Solutions",
        logo: "💻",
        description: "Join our dynamic team to build modern web applications using React and TypeScript.",
        skills: ["React", "TypeScript", "CSS", "JavaScript"],
        location: "Remote",
        locationType: "remote",
        duration: "3 months",
        stipend: "₹15,000/month",
        category: "tech",
        type: "internship"
    },
    {
        id: 2,
        role: "UI/UX Design Intern",
        company: "Creative Studio",
        logo: "🎨",
        description: "Work on exciting design projects for top brands using Figma and modern design principles.",
        skills: ["Figma", "UI Design", "Prototyping", "Adobe XD"],
        location: "New York, NY",
        locationType: "onsite",
        duration: "6 months",
        stipend: "₹20,000/month",
        category: "design",
        type: "internship"
    },
    {
        id: 3,
        role: "Data Science Intern",
        company: "DataMinds Inc",
        logo: "📊",
        description: "Analyze large datasets and build ML models using Python and scikit-learn.",
        skills: ["Python", "Machine Learning", "SQL", "Pandas"],
        location: "San Francisco, CA",
        locationType: "hybrid",
        duration: "4 months",
        stipend: "₹25,000/month",
        category: "data",
        type: "internship"
    },
    {
        id: 4,
        role: "Digital Marketing Intern",
        company: "GrowthHQ",
        logo: "📈",
        description: "Help plan and execute digital marketing campaigns. Learn SEO and social media strategy.",
        skills: ["SEO", "Google Analytics", "Content Writing", "Social Media"],
        location: "Work from Home",
        locationType: "remote",
        duration: "3 months",
        stipend: "₹10,000/month",
        category: "marketing",
        type: "internship"
    },
    {
        id: 5,
        role: "Backend Developer Intern",
        company: "CloudNet Systems",
        logo: "⚙️",
        description: "Build scalable APIs and microservices using Node.js and AWS cloud technologies.",
        skills: ["Node.js", "AWS", "MongoDB", "REST APIs"],
        location: "Austin, TX",
        locationType: "onsite",
        duration: "6 months",
        stipend: "₹22,000/month",
        category: "tech",
        type: "internship"
    },
    {
        id: 6,
        role: "Business Analyst Intern",
        company: "ConsultPro",
        logo: "💼",
        description: "Support consulting projects for Fortune 500 clients. Develop analytical skills.",
        skills: ["Excel", "PowerPoint", "Data Analysis", "SQL"],
        location: "Chicago, IL",
        locationType: "hybrid",
        duration: "3 months",
        stipend: "₹18,000/month",
        category: "business",
        type: "internship"
    },
    {
        id: 7,
        role: "Mobile App Developer Intern",
        company: "AppVenture Labs",
        logo: "📱",
        description: "Develop cross-platform mobile applications using React Native and Flutter.",
        skills: ["React Native", "Flutter", "Dart", "Firebase"],
        location: "Bangalore, India",
        locationType: "hybrid",
        duration: "4 months",
        stipend: "₹20,000/month",
        category: "tech",
        type: "internship"
    },
    {
        id: 8,
        role: "Content Writing Intern",
        company: "MediaPulse",
        logo: "✍️",
        description: "Create engaging content for blogs, social media, and marketing campaigns.",
        skills: ["Content Writing", "SEO", "Copywriting", "Research"],
        location: "Remote",
        locationType: "remote",
        duration: "2 months",
        stipend: "₹8,000/month",
        category: "marketing",
        type: "internship"
    },
    {
        id: 9,
        role: "AI/ML Research Intern",
        company: "NeuralTech AI",
        logo: "🤖",
        description: "Work on cutting-edge AI research projects involving deep learning and NLP.",
        skills: ["Python", "TensorFlow", "PyTorch", "NLP"],
        location: "Boston, MA",
        locationType: "onsite",
        duration: "6 months",
        stipend: "₹30,000/month",
        category: "data",
        type: "internship"
    },
    {
        id: 10,
        role: "Graphic Design Intern",
        company: "PixelCraft Studio",
        logo: "🎯",
        description: "Design stunning visuals, banners, and marketing materials for various clients.",
        skills: ["Photoshop", "Illustrator", "Canva", "Branding"],
        location: "Mumbai, India",
        locationType: "hybrid",
        duration: "3 months",
        stipend: "₹12,000/month",
        category: "design",
        type: "internship"
    },
    {
        id: 11,
        role: "DevOps Intern",
        company: "InfraScale Tech",
        logo: "🔧",
        description: "Learn CI/CD pipelines, containerization, and cloud infrastructure management.",
        skills: ["Docker", "Kubernetes", "Jenkins", "Linux"],
        location: "Seattle, WA",
        locationType: "remote",
        duration: "5 months",
        stipend: "₹28,000/month",
        category: "tech",
        type: "internship"
    },
    {
        id: 12,
        role: "HR & Recruitment Intern",
        company: "TalentBridge",
        logo: "👥",
        description: "Assist in recruitment processes, candidate screening, and HR operations.",
        skills: ["Communication", "MS Office", "Recruitment", "Screening"],
        location: "Delhi, India",
        locationType: "onsite",
        duration: "3 months",
        stipend: "₹10,000/month",
        category: "business",
        type: "internship"
    }
];

const projects = [
    {
        id: 7,
        title: "E-commerce Platform Redesign",
        company: "ShopEasy",
        logo: "🛒",
        description: "Complete UI overhaul for a popular e-commerce platform. Looking for passionate designers and developers.",
        tags: ["React", "Node.js", "Figma"],
        location: "Remote",
        duration: "2 months",
        category: "tech",
        type: "project"
    },
    {
        id: 8,
        title: "Mobile App for Healthcare",
        company: "HealthFirst",
        logo: "🏥",
        description: "Build a patient management app using React Native. Opportunity to make a real impact in healthcare.",
        tags: ["React Native", "Firebase", "UX"],
        location: "Boston, MA",
        duration: "3 months",
        category: "tech",
        type: "project"
    },
    {
        id: 9,
        title: "Brand Identity Design",
        company: "StartupXYZ",
        logo: "✨",
        description: "Create complete brand identity including logo, color palette, and design system for an emerging startup.",
        tags: ["Branding", "Illustrator", "Design"],
        location: "Remote",
        duration: "1 month",
        category: "design",
        type: "project"
    },
    {
        id: 10,
        title: "Market Research Study",
        company: "InsightLab",
        logo: "🔍",
        description: "Conduct comprehensive market research for a new product launch. Analyze consumer behavior and trends.",
        tags: ["Research", "Surveys", "Analysis"],
        location: "Remote",
        duration: "6 weeks",
        category: "business",
        type: "project"
    },
    {
        id: 11,
        title: "AI Chatbot Development",
        company: "BotWorks",
        logo: "🤖",
        description: "Develop an intelligent customer support chatbot using NLP and machine learning techniques.",
        tags: ["Python", "NLP", "TensorFlow"],
        location: "Seattle, WA",
        duration: "2 months",
        category: "data",
        type: "project"
    },
    {
        id: 12,
        title: "Social Media Campaign",
        company: "ViralMedia",
        logo: "📱",
        description: "Plan and execute a viral marketing campaign for a new product launch across multiple platforms.",
        tags: ["Social Media", "Content", "Strategy"],
        location: "Los Angeles, CA",
        duration: "1 month",
        category: "marketing",
        type: "project"
    }
];

// ===== DOM Elements =====
const internshipsGrid = document.getElementById('internshipsGrid');
const projectsGrid = document.getElementById('projectsGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const filterTags = document.querySelectorAll('.filter-tag');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.querySelector('.modal-close');
const contactForm = document.getElementById('contactForm');

// ===== Current Filter State =====
let currentFilter = 'all';
let currentSearch = '';
let currentCategory = 'all';

// ===== Render Cards =====
function createCard(item) {
    // Determine location type badge
    const locationTypeClass = {
        'remote': 'location-remote',
        'onsite': 'location-onsite',
        'hybrid': 'location-hybrid'
    }[item.locationType] || 'location-onsite';
    
    const locationTypeText = item.locationType ? 
        item.locationType.charAt(0).toUpperCase() + item.locationType.slice(1) : 'Onsite';
    
    // Use role or title (backward compatibility)
    const roleTitle = item.role || item.title;
    // Use skills or tags (backward compatibility)
    const skills = item.skills || item.tags || [];
    
    return `
        <div class="card" data-id="${item.id}" data-category="${item.category}" data-type="${item.type}">
            <div class="card-header">
                <div class="card-logo">${item.logo}</div>
                <div class="card-info">
                    <h3 class="card-title">${roleTitle}</h3>
                    <span class="card-company">${item.company}</span>
                </div>
                <span class="card-badge badge-internship">Internship</span>
            </div>
            <p class="card-description">${item.description}</p>
            <div class="card-skills">
                <span class="skills-label">Skills:</span>
                <div class="card-tags">
                    ${skills.map(skill => `<span class="tag">${skill}</span>`).join('')}
                </div>
            </div>
            <div class="card-details">
                <div class="detail-item">
                    <span class="detail-icon">📍</span>
                    <span class="detail-text">${item.location}</span>
                    <span class="location-badge ${locationTypeClass}">${locationTypeText}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-icon">⏱️</span>
                    <span class="detail-text">${item.duration}</span>
                </div>
                <div class="detail-item stipend-item">
                    <span class="detail-icon">💰</span>
                    <span class="detail-text stipend">${item.stipend || 'Unpaid'}</span>
                </div>
            </div>
            <div class="card-actions">
                <button class="btn btn-primary" onclick="openModal(${item.id})">Apply Now</button>
            </div>
        </div>
    `;
}

function renderCards() {
    // Filter internships
    const filteredInternships = internships.filter(item => {
        const matchesFilter = currentFilter === 'all' || item.category === currentFilter;
        const matchesCategory = currentCategory === 'all' || item.type === currentCategory;
        const matchesSearch = item.title.toLowerCase().includes(currentSearch) ||
                            item.company.toLowerCase().includes(currentSearch) ||
                            item.tags.some(tag => tag.toLowerCase().includes(currentSearch));
        return matchesFilter && matchesCategory && matchesSearch;
    });

    // Filter projects
    const filteredProjects = projects.filter(item => {
        const matchesFilter = currentFilter === 'all' || item.category === currentFilter;
        const matchesCategory = currentCategory === 'all' || item.type === currentCategory;
        const matchesSearch = item.title.toLowerCase().includes(currentSearch) ||
                            item.company.toLowerCase().includes(currentSearch) ||
                            item.tags.some(tag => tag.toLowerCase().includes(currentSearch));
        return matchesFilter && matchesCategory && matchesSearch;
    });

    // Render
    internshipsGrid.innerHTML = filteredInternships.length > 0 
        ? filteredInternships.map(createCard).join('') 
        : '<p class="no-results">No internships found matching your criteria.</p>';
    
    projectsGrid.innerHTML = filteredProjects.length > 0 
        ? filteredProjects.map(createCard).join('') 
        : '<p class="no-results">No projects found matching your criteria.</p>';

    // Add animation to cards
    document.querySelectorAll('.card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// ===== Event Listeners =====

// Filter tags
filterTags.forEach(tag => {
    tag.addEventListener('click', () => {
        filterTags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
        currentFilter = tag.dataset.filter;
        renderCards();
    });
});

// Search
searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value.toLowerCase();
    renderCards();
});

// Category filter
categoryFilter.addEventListener('change', (e) => {
    currentCategory = e.target.value;
    renderCards();
});

// Mobile menu
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// ===== Modal Functions =====
function openModal(id) {
    const allItems = [...internships, ...projects];
    const item = allItems.find(i => i.id === id);
    
    if (item) {
        modalBody.innerHTML = `
            <div class="modal-header">
                <div class="card-logo" style="width: 64px; height: 64px; font-size: 2rem; margin-bottom: 16px;">${item.logo}</div>
                <h2 style="margin-bottom: 8px;">${item.title}</h2>
                <p style="color: var(--primary); font-weight: 600;">${item.company}</p>
            </div>
            <div class="modal-body" style="margin-top: 24px;">
                <p style="margin-bottom: 20px;">${item.description}</p>
                <div style="margin-bottom: 20px;">
                    <strong>Skills Required:</strong>
                    <div class="card-tags" style="margin-top: 8px;">
                        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
                <div style="display: flex; gap: 20px; margin-bottom: 24px;">
                    <span class="card-location">📍 ${item.location}</span>
                    <span class="card-duration">⏱️ ${item.duration}</span>
                </div>
                <form id="applyForm" style="margin-top: 20px;">
                    <div class="form-group">
                        <input type="text" placeholder="Your Full Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" placeholder="Your Email" required>
                    </div>
                    <div class="form-group">
                        <input type="url" placeholder="LinkedIn Profile URL">
                    </div>
                    <button type="submit" class="btn btn-primary" style="width: 100%;">Submit Application</button>
                </form>
            </div>
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Handle form submission
        const applyForm = document.getElementById('applyForm');
        applyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            modalBody.innerHTML = `
                <div style="text-align: center; padding: 40px 0;">
                    <div style="font-size: 4rem; margin-bottom: 20px;">✅</div>
                    <h2 style="margin-bottom: 16px;">Application Submitted!</h2>
                    <p style="color: var(--gray-500);">Thank you for applying. We'll be in touch soon.</p>
                </div>
            `;
            setTimeout(closeModal, 2000);
        });
    }
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ===== Contact Form =====
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Show success message
    const btn = contactForm.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Message Sent! ✓';
    btn.style.background = 'var(--accent)';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        contactForm.reset();
    }, 2000);
});

// ===== Navbar Scroll Effect =====
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = 'var(--shadow-lg)';
    } else {
        navbar.style.boxShadow = 'var(--shadow)';
    }
    
    lastScroll = currentScroll;
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    renderCards();
    
    // Trigger initial section animations
    setTimeout(() => {
        document.querySelectorAll('.section').forEach(section => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        });
    }, 100);
});
