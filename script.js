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
        id: 101,
        role: "E-commerce Platform Redesign",
        company: "ShopEasy",
        logo: "🛒",
        description: "Complete UI overhaul for a popular e-commerce platform. Looking for passionate designers and developers.",
        skills: ["React", "Node.js", "Figma", "CSS"],
        location: "Remote",
        locationType: "remote",
        duration: "2 months",
        stipend: "₹35,000 (fixed)",
        category: "tech",
        type: "project"
    },
    {
        id: 102,
        role: "Mobile App for Healthcare",
        company: "HealthFirst",
        logo: "🏥",
        description: "Build a patient management app using React Native. Opportunity to make a real impact in healthcare.",
        skills: ["React Native", "Firebase", "UX", "TypeScript"],
        location: "Boston, MA",
        locationType: "hybrid",
        duration: "3 months",
        stipend: "₹50,000 (fixed)",
        category: "tech",
        type: "project"
    },
    {
        id: 103,
        role: "Brand Identity Design",
        company: "StartupXYZ",
        logo: "✨",
        description: "Create complete brand identity including logo, color palette, and design system for an emerging startup.",
        skills: ["Branding", "Illustrator", "Photoshop", "Design"],
        location: "Remote",
        locationType: "remote",
        duration: "1 month",
        stipend: "₹20,000 (fixed)",
        category: "design",
        type: "project"
    },
    {
        id: 104,
        role: "Market Research Study",
        company: "InsightLab",
        logo: "🔍",
        description: "Conduct comprehensive market research for a new product launch. Analyze consumer behavior and trends.",
        skills: ["Research", "Surveys", "Data Analysis", "Excel"],
        location: "Remote",
        locationType: "remote",
        duration: "6 weeks",
        stipend: "₹25,000 (fixed)",
        category: "business",
        type: "project"
    },
    {
        id: 105,
        role: "AI Chatbot Development",
        company: "BotWorks",
        logo: "🤖",
        description: "Develop an intelligent customer support chatbot using NLP and machine learning techniques.",
        skills: ["Python", "NLP", "TensorFlow", "APIs"],
        location: "Seattle, WA",
        locationType: "onsite",
        duration: "2 months",
        stipend: "₹45,000 (fixed)",
        category: "data",
        type: "project"
    },
    {
        id: 106,
        role: "Social Media Campaign",
        company: "ViralMedia",
        logo: "📱",
        description: "Plan and execute a viral marketing campaign for a new product launch across multiple platforms.",
        skills: ["Social Media", "Content", "Strategy", "Analytics"],
        location: "Los Angeles, CA",
        locationType: "hybrid",
        duration: "1 month",
        stipend: "₹18,000 (fixed)",
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

// New Filter Elements
const liveSearchInput = document.getElementById('liveSearchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const locationFilter = document.getElementById('locationFilter');
const stipendFilter = document.getElementById('stipendFilter');
const durationFilter = document.getElementById('durationFilter');
const resetFiltersBtn = document.getElementById('resetFilters');
const resultsCount = document.getElementById('resultsCount');
const toggleFiltersBtn = document.getElementById('toggleFilters');
const filterPanel = document.getElementById('filterPanel');
const activeFilterCount = document.getElementById('activeFilterCount');

// ===== Current Filter State =====
let currentFilter = 'all';        // Category filter (tech, design, etc.)
let currentSearch = '';           // Live search text
let currentCategory = 'all';      // Type filter (internship/project)
let currentLocation = 'all';      // Location type filter
let currentStipend = 'all';       // Paid/Unpaid filter
let currentDuration = 'all';      // Duration filter

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
    
    // Determine badge type
    const badgeClass = item.type === 'internship' ? 'badge-internship' : 'badge-project';
    const badgeText = item.type === 'internship' ? 'Internship' : 'Project';
    
    return `
        <div class="card" data-id="${item.id}" data-category="${item.category}" data-type="${item.type}">
            <div class="card-header">
                <div class="card-logo">${item.logo}</div>
                <div class="card-info">
                    <h3 class="card-title">${roleTitle}</h3>
                    <span class="card-company">${item.company}</span>
                </div>
                <span class="card-badge ${badgeClass}">${badgeText}</span>
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

// Helper function to parse duration from string
function parseDuration(durationStr) {
    if (!durationStr) return 0;
    const match = durationStr.match(/(\d+)/); // Extract number
    return match ? parseInt(match[1]) : 0;
}

// Helper function to check if item matches duration filter
function matchesDuration(item, filter) {
    if (filter === 'all') return true;
    const months = parseDuration(item.duration);
    switch (filter) {
        case '1-2': return months >= 1 && months <= 2;
        case '3-4': return months >= 3 && months <= 4;
        case '5-6': return months >= 5 && months <= 6;
        default: return true;
    }
}

// Helper function to check if item is paid
function isPaid(item) {
    if (!item.stipend) return false;
    const stipendLower = item.stipend.toLowerCase();
    return !stipendLower.includes('unpaid') && !stipendLower.includes('0');
}

// Main filter function for any item
function filterItem(item) {
    // Category filter (tech, design, marketing, etc.)
    const matchesCategory = currentFilter === 'all' || item.category === currentFilter;
    
    // Type filter (internship/project)
    const matchesType = currentCategory === 'all' || item.type === currentCategory;
    
    // Search filter (role, skills, company)
    const roleTitle = (item.role || item.title || '').toLowerCase();
    const skills = item.skills || item.tags || [];
    const company = (item.company || '').toLowerCase();
    const searchTerm = (currentSearch || '').toLowerCase();
    const matchesSearch = !currentSearch || currentSearch === '' || 
                         roleTitle.includes(searchTerm) ||
                         company.includes(searchTerm) ||
                         skills.some(skill => (skill || '').toLowerCase().includes(searchTerm));
    
    // Location filter
    const matchesLocation = currentLocation === 'all' || 
                           (item.locationType && item.locationType === currentLocation);
    
    // Stipend filter (paid/unpaid)
    let matchesStipend = true;
    if (currentStipend === 'paid') {
        matchesStipend = isPaid(item);
    } else if (currentStipend === 'unpaid') {
        matchesStipend = !isPaid(item);
    }
    
    // Duration filter
    const matchesDur = matchesDuration(item, currentDuration);
    
    return matchesCategory && matchesType && matchesSearch && 
           matchesLocation && matchesStipend && matchesDur;
}

function renderCards() {
    // Filter internships and projects
    const filteredInternships = internships.filter(filterItem);
    const filteredProjects = projects.filter(filterItem);
    
    // Update results count
    updateResultsCount(filteredInternships.length, filteredProjects.length);

    // Render internships
    if (internshipsGrid) {
        if (filteredInternships.length > 0) {
            internshipsGrid.innerHTML = filteredInternships.map(createCard).join('');
        } else {
            internshipsGrid.innerHTML = `
                <div class="no-results">
                    <div class="no-results-icon">🔍</div>
                    <h3>No internships found</h3>
                    <p>Try adjusting your filters or search terms</p>
                </div>
            `;
        }
    }
    
    // Render projects
    if (projectsGrid) {
        if (filteredProjects.length > 0) {
            projectsGrid.innerHTML = filteredProjects.map(createCard).join('');
        } else {
            projectsGrid.innerHTML = `
                <div class="no-results">
                    <div class="no-results-icon">📁</div>
                    <h3>No projects found</h3>
                    <p>Try adjusting your filters or search terms</p>
                </div>
            `;
        }
    }

    // Add staggered animation to cards
    document.querySelectorAll('.card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.05}s`;
    });
}

// Update results count display
function updateResultsCount(internshipCount, projectCount) {
    if (!resultsCount) return;
    
    const total = internshipCount + projectCount;
    let text = '';
    
    if (currentSearch || currentLocation !== 'all' || currentStipend !== 'all' || 
        currentDuration !== 'all' || currentFilter !== 'all') {
        text = `Found <span class="count">${total}</span> result${total !== 1 ? 's' : ''}`;
        if (internshipCount > 0 && projectCount > 0) {
            text += ` (${internshipCount} internship${internshipCount !== 1 ? 's' : ''}, ${projectCount} project${projectCount !== 1 ? 's' : ''})`;
        }
    } else {
        text = `Showing all <span class="count">${total}</span> opportunities`;
    }
    
    resultsCount.innerHTML = text;
}

// ===== Event Listeners =====

// Category Filter Tags
filterTags.forEach(tag => {
    tag.addEventListener('click', () => {
        filterTags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
        currentFilter = tag.dataset.filter;
        updateActiveFilterCount();
        renderCards();
    });
});

// Hero Search (optional - syncs with live search)
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        if (liveSearchInput) liveSearchInput.value = e.target.value;
        toggleClearButton();
        renderCards();
    });
}

// Category filter dropdown (in hero)
if (categoryFilter) {
    categoryFilter.addEventListener('change', (e) => {
        currentCategory = e.target.value;
        renderCards();
    });
}

// ===== Live Search Filter =====
if (liveSearchInput) {
    // Debounce function for performance
    let searchTimeout;
    
    liveSearchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const value = e.target.value;
        
        // Show/hide clear button
        toggleClearButton();
        
        // Debounce search for better performance
        searchTimeout = setTimeout(() => {
            currentSearch = value.toLowerCase();
            // Sync with hero search if exists
            if (searchInput) searchInput.value = value;
            renderCards();
        }, 150);
    });
    
    // Handle Enter key
    liveSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            clearTimeout(searchTimeout);
            currentSearch = liveSearchInput.value.toLowerCase();
            renderCards();
        }
    });
}

// Clear search button
if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
        liveSearchInput.value = '';
        if (searchInput) searchInput.value = '';
        currentSearch = '';
        toggleClearButton();
        liveSearchInput.focus();
        renderCards();
    });
}

// Toggle clear button visibility
function toggleClearButton() {
    if (clearSearchBtn && liveSearchInput) {
        if (liveSearchInput.value.length > 0) {
            clearSearchBtn.classList.add('visible');
        } else {
            clearSearchBtn.classList.remove('visible');
        }
    }
}

// ===== Filter Panel Toggle =====
if (toggleFiltersBtn && filterPanel) {
    toggleFiltersBtn.addEventListener('click', () => {
        filterPanel.classList.toggle('open');
        toggleFiltersBtn.classList.toggle('active');
    });
}

// Update active filter count badge
function updateActiveFilterCount() {
    let count = 0;
    if (currentLocation !== 'all') count++;
    if (currentStipend !== 'all') count++;
    if (currentDuration !== 'all') count++;
    if (currentFilter !== 'all') count++;
    
    if (activeFilterCount) {
        if (count > 0) {
            activeFilterCount.textContent = count;
            activeFilterCount.classList.add('visible');
        } else {
            activeFilterCount.classList.remove('visible');
        }
    }
}

// ===== Dropdown Filters =====

// Location filter
if (locationFilter) {
    locationFilter.addEventListener('change', (e) => {
        currentLocation = e.target.value;
        updateActiveFilterCount();
        renderCards();
    });
}

// Stipend filter (Paid/Unpaid)
if (stipendFilter) {
    stipendFilter.addEventListener('change', (e) => {
        currentStipend = e.target.value;
        updateActiveFilterCount();
        renderCards();
    });
}

// Duration filter
if (durationFilter) {
    durationFilter.addEventListener('change', (e) => {
        currentDuration = e.target.value;
        updateActiveFilterCount();
        renderCards();
    });
}

// Reset all filters
if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
        // Reset all filter values
        currentSearch = '';
        currentFilter = 'all';
        currentCategory = 'all';
        currentLocation = 'all';
        currentStipend = 'all';
        currentDuration = 'all';
        
        // Reset UI elements
        if (liveSearchInput) liveSearchInput.value = '';
        if (searchInput) searchInput.value = '';
        if (locationFilter) locationFilter.value = 'all';
        if (stipendFilter) stipendFilter.value = 'all';
        if (durationFilter) durationFilter.value = 'all';
        if (categoryFilter) categoryFilter.value = 'all';
        
        // Reset category tags
        filterTags.forEach(tag => {
            tag.classList.remove('active');
            if (tag.dataset.filter === 'all') {
                tag.classList.add('active');
            }
        });
        
        toggleClearButton();
        updateActiveFilterCount();
        renderCards();
        
        // Visual feedback
        resetFiltersBtn.textContent = '✓ Reset';
        setTimeout(() => {
            resetFiltersBtn.textContent = 'Reset';
        }, 1000);
    });
}

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
        const roleTitle = item.role || item.title;
        const skills = item.skills || item.tags || [];
        const locationTypeText = item.locationType ? 
            item.locationType.charAt(0).toUpperCase() + item.locationType.slice(1) : 'Onsite';
        const locationTypeClass = {
            'remote': 'location-remote',
            'onsite': 'location-onsite',
            'hybrid': 'location-hybrid'
        }[item.locationType] || 'location-onsite';
        
        modalBody.innerHTML = `
            <div class="modal-header">
                <div class="card-logo" style="width: 64px; height: 64px; font-size: 2rem; margin-bottom: 16px;">${item.logo}</div>
                <h2 style="margin-bottom: 8px;">${roleTitle}</h2>
                <p style="color: var(--primary); font-weight: 600;">${item.company}</p>
            </div>
            <div class="modal-body" style="margin-top: 24px;">
                <p style="margin-bottom: 20px;">${item.description}</p>
                <div style="margin-bottom: 20px;">
                    <strong>Skills Required:</strong>
                    <div class="card-tags" style="margin-top: 8px;">
                        ${skills.map(skill => `<span class="tag">${skill}</span>`).join('')}
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 24px; padding: 16px; background: var(--gray-100); border-radius: 8px;">
                    <div>
                        <span style="font-size: 0.8rem; color: var(--gray-500);">Location</span>
                        <p style="font-weight: 500; display: flex; align-items: center; gap: 8px;">📍 ${item.location} <span class="location-badge ${locationTypeClass}">${locationTypeText}</span></p>
                    </div>
                    <div>
                        <span style="font-size: 0.8rem; color: var(--gray-500);">Duration</span>
                        <p style="font-weight: 500;">⏱️ ${item.duration}</p>
                    </div>
                    <div style="grid-column: span 2;">
                        <span style="font-size: 0.8rem; color: var(--gray-500);">Stipend</span>
                        <p style="font-weight: 600; color: var(--accent); font-size: 1.1rem;">💰 ${item.stipend || 'Unpaid'}</p>
                    </div>
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

// ===== Dark Mode Toggle =====
const themeToggle = document.getElementById('themeToggle');
const THEME_KEY = 'opportunityhub-theme';

// Get saved theme or default to light
function getSavedTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

// Apply theme to document
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
}

// Toggle between light and dark
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
}

// Theme toggle button click
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Listen for system theme changes
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only auto-switch if user hasn't set a preference
        if (!localStorage.getItem(THEME_KEY)) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    // Apply saved theme immediately
    applyTheme(getSavedTheme());
    
    renderCards();
    
    // Trigger initial section animations
    setTimeout(() => {
        document.querySelectorAll('.section').forEach(section => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        });
    }, 100);
});

// Apply theme before DOM loads to prevent flash
(function() {
    const saved = localStorage.getItem('opportunityhub-theme');
    if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
})();
