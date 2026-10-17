
        window.onload = async () => {
            const response = await fetch('../../../secure/Client.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'insert_record'})
            });

            const result = await response.json();
            console.log(result);
        }
    
        const companyData = {
            healthcare: {
                title: "Malikha Clinic",
                subtitle: "PROJECT DESCRIPTION",
                description: "We focus on high-quality products to support Myanmar healthcare as one-stop service providers relating to medical equipment and machines for hospitals. Since 2016, we have been providing machines, technology & service for public and private markets. We are very honored to represent global brands that have a virtuous reputation over the world. We provide the Saturn 8000 NMI DR Full Installation Service For Malikha Clinic ( Thingangyun ), Yangon.",
                image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
                url: "./sub/test1.html",
                badge: "Medical Division"
            },
            pharma: {
                title: "GMA Pharmaceuticals",
                subtitle: "Pharma Import & Wholesale Distribution",
                description: "We focus on high-quality products to support Myanmar healthcare as one-stop service providers relating to medical equipment and machines for hospitals. Since 2016, we have been providing machines, technology & service for public and private markets. We are very honored to represent global brands that have a virtuous reputation over the world. We provide the Saturn 8000 NMI DR Full Installation Service For Malikha Clinic ( Thingangyun ), Yangon.",
                image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
                url: "./sub/test1.html",
                badge: "Pharma Division"
            },
            diagnostics: {
                title: "GMA Diagnostics",
                subtitle: "Clinical & Laboratory Devices",
                description: "We focus on high-quality products to support Myanmar healthcare as one-stop service providers relating to medical equipment and machines for hospitals. Since 2016, we have been providing machines, technology & service for public and private markets. We are very honored to represent global brands that have a virtuous reputation over the world. We provide the Saturn 8000 NMI DR Full Installation Service For Malikha Clinic ( Thingangyun ), Yangon.",
                image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
                url: "./sub/test1.html",
                badge: "Diagnostics Division"
            },
            medlogistics: {
                title: "GMA MedLogistics",
                subtitle: "Cold-Chain Healthcare Logistics",
                description: "We focus on high-quality products to support Myanmar healthcare as one-stop service providers relating to medical equipment and machines for hospitals. Since 2016, we have been providing machines, technology & service for public and private markets. We are very honored to represent global brands that have a virtuous reputation over the world. We provide the Saturn 8000 NMI DR Full Installation Service For Malikha Clinic ( Thingangyun ), Yangon.",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
                url: "./sub/test1.html",
                badge: "Logistics Division"
            },
            engineering: {
                title: "GMA Engineering & Turnkey",
                subtitle: "Complex Hospital Fitting Solutions",
                description: "We focus on high-quality products to support Myanmar healthcare as one-stop service providers relating to medical equipment and machines for hospitals. Since 2016, we have been providing machines, technology & service for public and private markets. We are very honored to represent global brands that have a virtuous reputation over the world. We provide the Saturn 8000 NMI DR Full Installation Service For Malikha Clinic ( Thingangyun ), Yangon.",
                image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80",
                url: "./sub/test1.html",
                badge: "Engineering Division"
            },
            medtech: {
                title: "GMA MedTech",
                subtitle: "Digital Health & Telemedicine Solutions",
                description: "We focus on high-quality products to support Myanmar healthcare as one-stop service providers relating to medical equipment and machines for hospitals. Since 2016, we have been providing machines, technology & service for public and private markets. We are very honored to represent global brands that have a virtuous reputation over the world. We provide the Saturn 8000 NMI DR Full Installation Service For Malikha Clinic ( Thingangyun ), Yangon.",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
                url: "./sub/test1.html",
                badge: "MedTech Division"
            }
        };

        const companyModal = document.getElementById('company-modal');
        const modalCard = document.getElementById('modal-card');
        const closeModalBtn = document.getElementById('close-company-modal');

        const modalImg = document.getElementById('modal-img');
        const modalBadge = document.getElementById('modal-badge');
        const modalTitle = document.getElementById('modal-title');
        const modalSubtitle = document.getElementById('modal-subtitle');
        const modalDesc = document.getElementById('modal-desc');
        const modalLink = document.getElementById('modal-link');

        document.querySelectorAll('.partner-logos a').forEach((element, index) => {
            const keys = ['healthcare', 'pharma', 'diagnostics', 'medlogistics', 'engineering', 'medtech'];
            const key = keys[index % keys.length];

            element.addEventListener('click', (e) => {
                e.preventDefault();
                const data = companyData[key];

                if (data) {
                    modalImg.src = data.image;
                    modalBadge.textContent = data.badge;
                    modalTitle.textContent = data.title;
                    modalSubtitle.textContent = data.subtitle;
                    modalDesc.textContent = data.description;
                    modalLink.href = data.url;

                    companyModal.classList.remove('hidden');
                    setTimeout(() => {
                        companyModal.classList.remove('opacity-0');
                        modalCard.classList.remove('scale-95');
                        modalCard.classList.add('scale-100');
                    }, 10);
                    document.body.classList.add('overflow-hidden');
                }
            });
        });

        function closeCompanyModal() {
            companyModal.classList.add('opacity-0');
            modalCard.classList.remove('scale-100');
            modalCard.classList.add('scale-95');
            setTimeout(() => {
                companyModal.classList.add('hidden');
            }, 300);
            document.body.classList.remove('overflow-hidden');
        }

        closeModalBtn.addEventListener('click', closeCompanyModal);
        companyModal.addEventListener('click', (e) => {
            if (e.target === companyModal) closeCompanyModal();
        });
    </script>
</body>
    <!-- compay end -->

    <script>
        // Interactive Canvas Background Logic (Supports Light & Dark mode seamlessly)
        const canvas = document.getElementById('bgCanvas');
        const ctx = canvas.getContext('2d');

        let width, height;
        let particles = [];
        
        const config = {
            particleCount: 75,
            maxDistance: 130,
            mouseRadius: 160
        };

        const mouse = {
            x: null,
            y: null
        };

        function resizeCanvas() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 1.2;
                this.vy = (Math.random() - 0.5) * 1.2;
                this.radius = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const dist = Math.hypot(dx, dy);

                    if (dist < config.mouseRadius) {
                        const angle = Math.atan2(dy, dx);
                        const force = (config.mouseRadius - dist) / config.mouseRadius;
                        this.x -= Math.cos(angle) * force * 3;
                        this.y -= Math.sin(angle) * force * 3;
                    }
                }
            }

            draw(isDark) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = isDark ? 'rgba(245, 158, 11, 0.7)' : 'rgba(217, 119, 6, 0.6)';
                ctx.fill();
            }
        }

        function initParticles() {
            resizeCanvas();
            particles = [];
            for (let i = 0; i < config.particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function connectParticles(isDark) {
            const lineRGB = isDark ? '245, 158, 11' : '217, 119, 6';
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.hypot(dx, dy);

                    if (dist < config.maxDistance) {
                        const opacity = 1 - (dist / config.maxDistance);
                        ctx.strokeStyle = `rgba(${lineRGB}, ${opacity * 0.25})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, width, height);
            const isDark = document.documentElement.classList.contains('dark');

            particles.forEach(p => {
                p.update();
                p.draw(isDark);
            });

            connectParticles(isDark);
            requestAnimationFrame(animateParticles);
        }

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        window.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        initParticles();
        animateParticles();

        // Initialize Lenis Smooth Scroll
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smoothWave: true
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // GSAP ScrollTrigger Registration
        gsap.registerPlugin(ScrollTrigger);
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        // Initialize GSAP Scroll Animations
        window.addEventListener('load', () => {
            // Hero Animation
            gsap.from(".hero-text", {
                duration: 1,
                y: 50,
                opacity: 0,
                ease: "power3.out",
                delay: 0.2
            });

            gsap.from(".hero-image", {
                duration: 1,
                scale: 0.9,
                opacity: 0,
                ease: "power3.out",
                delay: 0.4
            });

            // Reveal sections on scroll
            gsap.utils.toArray('.gsap-reveal').forEach((element) => {
                gsap.to(element, {
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out"
                });
            });

            // Service Cards Stagger
            gsap.to(".service-cards .gsap-card", {
                scrollTrigger: {
                    trigger: ".service-cards",
                    start: "top 80%"
                },
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: "power2.out"
            });

            // Partner Logos Stagger
            gsap.to(".partner-logos .gsap-card", {
                scrollTrigger: {
                    trigger: ".partner-logos",
                    start: "top 85%"
                },
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.08,
                ease: "back.out(1.7)"
            });

            // About Stat Cards Stagger Animation
            gsap.from(".stat-cards > div", {
                scrollTrigger: {
                    trigger: ".stat-cards",
                    start: "top 80%"
                },
                scale: 0.8,
                opacity: 0,
                duration: 0.5,
                stagger: 0.15,
                ease: "back.out(1.5)"
            });
        });

        // Dark/Light Theme Toggle
        const themeToggleBtn = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');

        function updateThemeIcon() {
            if (document.documentElement.classList.contains('dark')) {
                themeIcon.className = 'fa-solid fa-lightbulb text-sm';
            } else {
                themeIcon.className = 'fa-regular fa-lightbulb text-sm';
            }
        }

        updateThemeIcon();

        themeToggleBtn.addEventListener('click', () => {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
            updateThemeIcon();
        });

        // Nav Active Underline

        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            // Hover လုပ်စဉ် Underline ပေါ်လာစေရန်
            link.addEventListener('mouseenter', () => {
                const underline = link.querySelector('span');
                underline.classList.remove('w-0');
                underline.classList.add('w-full');
            });

            link.addEventListener('mouseleave', () => {
                if (!link.classList.contains('active-nav')) {
                    const underline = link.querySelector('span');
                    underline.classList.remove('w-full');
                    underline.classList.add('w-0');
                }
            });

            // နှိပ်လိုက်သောအခါ Active ဖြစ်စေရန်
            link.addEventListener('click', (e) => {
                navLinks.forEach(item => {
                    item.classList.remove('text-amber-600', 'dark:text-amber-400', 'font-bold', 'active-nav');
                    item.classList.add('hover:text-amber-600');
                    const span = item.querySelector('span');
                    span.classList.remove('w-full');
                    span.classList.add('w-0');
                });

                link.classList.add('text-amber-600', 'dark:text-amber-400', 'font-bold', 'active-nav');
                link.classList.remove('hover:text-amber-600');
                const activeSpan = link.querySelector('span');
                activeSpan.classList.remove('w-0');
                activeSpan.classList.add('w-full');
            });
        });

        // Mobile Drawer
        const menuBtn = document.getElementById('menu-btn');
        const closeDrawerBtn = document.getElementById('close-drawer');
        const mobileDrawer = document.getElementById('mobile-drawer');
        const mobileOverlay = document.getElementById('mobile-overlay');

        function openDrawer() {
            mobileOverlay.classList.remove('hidden');
            setTimeout(() => {
                mobileOverlay.classList.remove('opacity-0');
                mobileDrawer.classList.remove('translate-x-full');
            }, 10);
            document.body.classList.add('overflow-hidden');
        }

        function closeDrawer() {
            mobileDrawer.classList.add('translate-x-full');
            mobileOverlay.classList.add('opacity-0');
            setTimeout(() => {
                mobileOverlay.classList.add('hidden');
            }, 300);
            document.body.classList.remove('overflow-hidden');
        }

        menuBtn.addEventListener('click', openDrawer);
        closeDrawerBtn.addEventListener('click', closeDrawer);
        mobileOverlay.addEventListener('click', closeDrawer);

        // Header Scroll Effect & Back-to-Top Button Visibility
        const scrollLogo = document.getElementById('scroll-logo');
        const backToTopBtn = document.getElementById('back-to-top');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                scrollLogo.classList.remove('opacity-0', '-translate-x-3', 'pointer-events-none');
                scrollLogo.classList.add('opacity-100', 'translate-x-0');
            } else {
                scrollLogo.classList.remove('opacity-100', 'translate-x-0');
                scrollLogo.classList.add('opacity-0', '-translate-x-3', 'pointer-events-none');
            }

            // Show/Hide Top Button after 300px scroll
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
                backToTopBtn.classList.add('opacity-100', 'translate-y-0');
            } else {
                backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
                backToTopBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
            }
        });

        // Smooth Scroll to Top with Lenis
        backToTopBtn.addEventListener('click', () => {
            lenis.scrollTo(0, { duration: 1.2 });
        });

        // Hero Layout Switcher Logic
        const layoutMedical = document.getElementById('layout-medical');
        const layoutPetro = document.getElementById('layout-petro');
        const tabMedical = document.getElementById('tab-medical');
        const tabPetro = document.getElementById('tab-petro');

        function showMedical() {
            layoutPetro.classList.add('opacity-0');
            setTimeout(() => {
                layoutPetro.classList.add('hidden');
                layoutMedical.classList.remove('hidden');
                setTimeout(() => layoutMedical.classList.remove('opacity-0'), 10);
            }, 200);

            tabMedical.className = 'px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md flex items-center gap-2';
            tabPetro.className = 'px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 flex items-center gap-2';
        }

        function showPetro() {
            layoutMedical.classList.add('opacity-0');
            setTimeout(() => {
                layoutMedical.classList.add('hidden');
                layoutPetro.classList.remove('hidden');
                setTimeout(() => layoutPetro.classList.remove('opacity-0'), 10);
            }, 200);

            tabPetro.className = 'px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md flex items-center gap-2';
            tabMedical.className = 'px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 flex items-center gap-2';
        }

        tabMedical.addEventListener('click', showMedical);
        tabPetro.addEventListener('click', showPetro);

        // Medical Hero Image Slideshow
        const heroSlider = document.getElementById('hero-slider');
        const prevBtn = document.getElementById('prev-slide');
        const nextBtn = document.getElementById('next-slide');
        const dots = document.querySelectorAll('.dot-indicator');
        
        let currentSlide = 0;
        const totalSlides = 5;
        let slideInterval;

        function updateSlider() {
            heroSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
            dots.forEach((dot, index) => {
                if (index === currentSlide) {
                    dot.classList.remove('bg-white/50', 'w-2');
                    dot.classList.add('bg-white', 'w-5');
                } else {
                    dot.classList.remove('bg-white', 'w-5');
                    dot.classList.add('bg-white/50', 'w-2');
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        }

        function startAutoSlide() {
            stopAutoSlide();
            slideInterval = setInterval(nextSlide, 4500);
        }

        function stopAutoSlide() {
            if (slideInterval) clearInterval(slideInterval);
        }

        nextBtn.addEventListener('click', () => { nextSlide(); startAutoSlide(); });
        prevBtn.addEventListener('click', () => { prevSlide(); startAutoSlide(); });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateSlider();
                startAutoSlide();
            });
        });

        updateSlider();
        startAutoSlide();

        // Petro Hero Image Slideshow
        const petroSlider = document.getElementById('petro-slider');
        const petroPrevBtn = document.getElementById('petro-prev-slide');
        const petroNextBtn = document.getElementById('petro-next-slide');
        const petroDots = document.querySelectorAll('.petro-dot-indicator');
        
        let petroCurrentSlide = 0;
        const petroTotalSlides = 5;
        let petroSlideInterval;

        function updatePetroSlider() {
            petroSlider.style.transform = `translateX(-${petroCurrentSlide * 100}%)`;
            petroDots.forEach((dot, index) => {
                if (index === petroCurrentSlide) {
                    dot.classList.remove('bg-white/50', 'w-2');
                    dot.classList.add('bg-white', 'w-5');
                } else {
                    dot.classList.remove('bg-white', 'w-5');
                    dot.classList.add('bg-white/50', 'w-2');
                }
            });
        }

        function nextPetroSlide() {
            petroCurrentSlide = (petroCurrentSlide + 1) % petroTotalSlides;
            updatePetroSlider();
        }

        function prevPetroSlide() {
            petroCurrentSlide = (petroCurrentSlide - 1 + petroTotalSlides) % petroTotalSlides;
            updatePetroSlider();
        }

        function startPetroAutoSlide() {
            stopPetroAutoSlide();
            petroSlideInterval = setInterval(nextPetroSlide, 4500);
        }

        function stopPetroAutoSlide() {
            if (petroSlideInterval) clearInterval(petroSlideInterval);
        }

        petroNextBtn.addEventListener('click', () => { nextPetroSlide(); startPetroAutoSlide(); });
        petroPrevBtn.addEventListener('click', () => { prevPetroSlide(); startPetroAutoSlide(); });

        petroDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                petroCurrentSlide = index;
                updatePetroSlider();
                startPetroAutoSlide();
            });
        });

        function handleContactSubmit(event) {
            event.preventDefault();
            const statusBox = document.getElementById('form-status');
            
            // Success Status Design & Animation
            statusBox.className = 'p-4 rounded-2xl text-xs font-medium flex items-center gap-3 bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 shadow-sm opacity-100';
            statusBox.innerHTML = `
                <i class="fa-solid fa-circle-check text-base shrink-0"></i>
                <div>
                    <strong class="font-bold block">Message Sent Successfully!</strong>
                    <span>Thank you for reaching out. Our team will contact you soon.</span>
                </div>
            `;
            statusBox.classList.remove('hidden');
            
            // Reset Form
            event.target.reset();

            setTimeout(() => {
                statusBox.classList.add('opacity-0');
                setTimeout(() => statusBox.classList.add('hidden'), 300);
            }, 5000);
        }

        // Search Button နှင့် Enter Key Event Listener
        const searchInputEl = document.getElementById('searchInput');
        const searchBtnEl = document.getElementById('searchBtn');

        function performSearch() {
            const query = searchInputEl.value.trim();
            if (query) {
                window.location.href = `products.html?search=${encodeURIComponent(query)}`;
            }
        }

        if (searchBtnEl) {
            searchBtnEl.addEventListener('click', performSearch);
        }

        if (searchInputEl) {
            searchInputEl.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });
        }

        updatePetroSlider();
        startPetroAutoSlide();