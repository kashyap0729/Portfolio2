import React, { useState, useEffect, useRef } from 'react';
import { PROFILE, ABOUT_ME, EXPERIENCES, PROJECT_CATEGORIES, SKILLS, EDUCATIONS, TESTIMONIALS, PUBLICATIONS } from './constants';
import type { Experience, Project, Education, Testimonial, Publication } from './types';
import { ProjectCategoryEnum } from './types';
import { GithubIcon, LinkedinIcon, MailIcon, ExternalLinkIcon, ResumeIcon } from './components/Icons';
import { CustomCursor } from './components/CustomCursor';

const Preloader: React.FC = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F2027]">
        <h1 className="text-5xl font-anton text-[#F5E6C8] animate-pulse">1 Sec</h1>
    </div>
);

const NavBar: React.FC = () => {
    const [top, setTop] = useState(true);

    const scrollHandler = () => {
        window.scrollY > 10 ? setTop(false) : setTop(true);
    };

    useEffect(() => {
        scrollHandler();
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    const sections = ['About', 'Experience', 'Projects', 'Contact'];

    return (
        <header className={`fixed w-full z-30 transition duration-300 ease-in-out ${!top && 'bg-[#0F2027]/90 backdrop-blur-sm shadow-lg'}`}>
            <div className="container mx-auto max-w-5xl px-6 md:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <div className="flex-shrink-0 mr-4">
                        <a href="#" className="font-anton text-2xl text-[#F5E6C8] hover:text-[#D95F43] transition-colors interactive" aria-label="Home">
                            Mr.
                        </a>
                    </div>
                    <nav className="hidden md:flex md:grow">
                        <ul className="flex grow justify-end flex-wrap items-center space-x-8">
                            {sections.map(section => (
                                <li key={section}>
                                    <a href={`#${section.toLowerCase()}`} className="font-mono text-sm text-[#F5E6C8] hover:text-[#D95F43] transition-colors duration-300 interactive">
                                        {section}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

const Header: React.FC = () => (
    <header className="py-12 md:py-24 px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-anton tracking-wider text-[#F5E6C8] uppercase animate-fadeInUp" style={{ fontStyle: 'italic', animationDelay: '100ms' }}>
            {PROFILE.name}
        </h1>
        <h2 className="mt-4 text-xl md:text-2xl text-[#D95F43] font-semibold tracking-wide animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            {PROFILE.title}
        </h2>
        <div className="mt-8 flex justify-center items-center space-x-6 animate-fadeInUp" style={{ animationDelay: '300ms' }}>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[#ccd6f6] hover:text-[#D95F43] transition-colors duration-300 interactive">
                <GithubIcon className="w-7 h-7" />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#ccd6f6] hover:text-[#D95F43] transition-colors duration-300 interactive">
                <LinkedinIcon className="w-7 h-7" />
            </a>
            <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="text-[#ccd6f6] hover:text-[#D95F43] transition-colors duration-300 interactive">
                <MailIcon className="w-7 h-7" />
            </a>
            <a href="https://drive.google.com/file/d/14-1lLxiRWAzFj9r-ZePYak343xVkxX8i/view?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="Resume" className="text-[#ccd6f6] hover:text-[#D95F43] transition-colors duration-300 interactive">
                <ResumeIcon className="w-7 h-7" />
            </a>
        </div>
    </header>
);


const useIntersectionObserver = (options: IntersectionObserverInit) => {
    const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
    const [node, setNode] = useState<HTMLElement | null>(null);

    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setEntry(entry);
                observer.current?.disconnect();
            }
        }, options);

        const { current: currentObserver } = observer;
        if (node) currentObserver.observe(node);

        return () => currentObserver.disconnect();
    }, [node, options]);

    return [setNode, entry] as const;
};

const Section: React.FC<{ title: string; id: string; children: React.ReactNode }> = ({ title, id, children }) => {
    const [ref, entry] = useIntersectionObserver({ threshold: 0.1 });
    const isVisible = !!entry;

    return (
        <section ref={ref as React.Ref<HTMLElement>} id={id} className={`py-12 md:py-16 scroll-mt-16 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {isVisible && (
                <div className="animate-fadeInUp">
                    <div className="flex items-center">
                        <h3 className="text-2xl md:text-3xl font-anton text-[#F5E6C8] uppercase tracking-widest" style={{ fontStyle: 'italic' }}>
                            {title}
                        </h3>
                        <div className="flex-grow h-px bg-[#F5E6C8]/20 ml-6"></div>
                    </div>
                    <div className="mt-8">
                        {children}
                    </div>
                </div>
            )}
        </section>
    );
};


const ExperienceCard: React.FC<{ item: Experience }> = ({ item }) => (
    <div className="mb-10">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
            <h4 className="text-xl font-bold text-[#ccd6f6]">
                {item.role} <span className="text-[#D95F43]">@ {item.company}</span>
            </h4>
            <p className="text-[#F5E6C8]/60 text-sm font-mono mt-1 md:mt-0">{item.duration}</p>
        </div>
        <ul className="mt-4 list-none space-y-2">
            {item.points.map((point, index) => (
                <li key={index} className="flex">
                    <span className="text-[#D95F43] mr-3 mt-1">&#x25B6;</span>
                    <p className="text-[#ccd6f6]/80 leading-relaxed">{point}</p>
                </li>
            ))}
        </ul>
    </div>
);

const ProjectCard: React.FC<{ item: Project }> = ({ item }) => (
    <div className="bg-[#1C2E35] p-6 flex flex-col h-full rounded-sm shadow-lg transition-transform duration-300 hover:-translate-y-1 interactive">
        <div className="flex justify-between items-start mb-4">
            <h4 className="text-xl font-bold text-[#ccd6f6] pr-4">{item.title}</h4>
            <div className="flex items-center space-x-4 text-[#ccd6f6]/80">
                {item.links.github && (
                    <a href={item.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[#D95F43] transition-colors">
                        <GithubIcon className="w-6 h-6" />
                    </a>
                )}
                 {item.links.live && (
                    <a href={item.links.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="hover:text-[#D95F43] transition-colors">
                        <ExternalLinkIcon className="w-6 h-6" />
                    </a>
                )}
                 {item.links.other && (
                    <a href={item.links.other} target="_blank" rel="noopener noreferrer" aria-label="External Link" className="hover:text-[#D95F43] transition-colors">
                        <ExternalLinkIcon className="w-6 h-6" />
                    </a>
                )}
            </div>
        </div>
        <p className="text-[#ccd6f6]/80 leading-relaxed flex-grow">{item.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
            {item.skills.map(skill => (
                <span key={skill} className="bg-[#D95F43]/10 text-[#D95F43] text-xs font-mono px-2 py-1 rounded-full">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const EducationCard: React.FC<{ item: Education }> = ({ item }) => (
     <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
            <h4 className="text-xl font-bold text-[#ccd6f6]">{item.institution}</h4>
            <p className="text-[#F5E6C8]/60 text-sm font-mono mt-1 md:mt-0">{item.duration}</p>
        </div>
        <p className="text-[#D95F43] font-medium">{item.degree}</p>
        {item.gpa && <p className="text-[#ccd6f6]/60 text-sm mt-1">GPA: {item.gpa}</p>}
        {item.details.length > 0 && <p className="text-[#ccd6f6]/80 mt-2 text-sm">{item.details.join(', ')}</p>}
    </div>
);

const TestimonialCard: React.FC<{ item: Testimonial }> = ({ item }) => (
    <div className="bg-[#1C2E35] p-6 rounded-sm shadow-lg">
        <p className="text-[#ccd6f6]/80 italic leading-relaxed">"{item.quote}"</p>
        <div className="mt-4 text-right">
            <p className="font-bold text-[#ccd6f6]">{item.author}</p>
            <p className="text-[#F5E6C8]/60 text-sm">{item.role}</p>
            <p className="text-[#F5E6C8]/60 text-xs font-mono mt-1">{item.context}</p>
        </div>
    </div>
);

const PublicationCard: React.FC<{ item: Publication }> = ({ item }) => (
    <div className="mb-8 p-4 border-l-2 border-[#D95F43]/50">
        <h4 className="text-xl font-bold text-[#ccd6f6]">{item.title}</h4>
        <div className="flex items-center flex-wrap gap-x-4 text-[#F5E6C8]/60 text-sm font-mono my-2">
            <span>{item.journal}</span>
            <span className="hidden md:inline">&bull;</span>
            <span>{item.date}</span>
        </div>
        <p className="text-[#ccd6f6]/80 leading-relaxed mb-4">{item.description}</p>
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#D95F43] hover:underline font-semibold text-sm interactive">
            Show Publication <ExternalLinkIcon className="w-4 h-4 ml-2" />
        </a>
    </div>
);


const HalftoneEffect: React.FC = () => (
    <div 
        className="absolute inset-0 z-0" 
        style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(245, 230, 200, 0.05) 1px, transparent 0)',
            backgroundSize: '10px 10px',
        }}
    ></div>
);

const ContactFooter: React.FC = () => (
    <footer id="contact" className="scroll-mt-16 my-16">
        <div className="relative overflow-hidden rounded-md">
             <div 
                className="absolute inset-[-50px] z-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, #F5E6C8 1px, transparent 0)',
                    backgroundSize: '20px 20px',
                    transform: 'skewY(-12deg)'
                }}
            ></div>
            <div className="relative z-10 text-center p-12 bg-[#1C2E35]/50 backdrop-blur-lg border border-[#F5E6C8]/10">
                 <h3 className="text-2xl md:text-3xl font-anton text-[#F5E6C8] uppercase tracking-widest" style={{ fontStyle: 'italic' }}>
                    Get In Touch
                </h3>
                <p className="max-w-xl mx-auto mt-4 text-[#ccd6f6]/80 leading-relaxed">
                    I'm currently seeking new opportunities and am open to collaboration. Whether you have a question or just want to say hi, feel free to reach out. I'll do my best to get back to you!
                </p>
                <a href={`mailto:${PROFILE.email}`} className="inline-block mt-8 bg-[#D95F43] text-[#0F2027] font-bold font-mono text-sm px-6 py-3 rounded-sm hover:bg-opacity-90 transition-colors interactive">
                    Say Hello
                </a>
            </div>
        </div>
        <div className="mt-8 text-center text-[#F5E6C8]/50 text-xs font-mono">
            <p>Designed & Built by RamaChandra Kashyap Mamidipalli</p>
        </div>
    </footer>
);

const App: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<ProjectCategoryEnum>(ProjectCategoryEnum.FullStack);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = 'auto';
        }, 1200);

        document.body.style.overflow = 'hidden';

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'auto';
        };
    }, []);

    if (loading) {
        return <Preloader />;
    }

    return (
        <div className="bg-[#0F2027] min-h-screen relative overflow-hidden">
            <div 
                aria-hidden="true"
                className="absolute top-0 -left-1/4 w-1/2 h-1/2 rounded-full filter blur-3xl opacity-10 animate-pulse"
                style={{ 
                    background: 'radial-gradient(circle, rgba(217, 95, 67, 0.4) 0%, rgba(217, 95, 67, 0) 70%)',
                    animationDuration: '10s'
                }}
            />
            <div 
                aria-hidden="true"
                className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 rounded-full filter blur-3xl opacity-5 animate-pulse"
                style={{ 
                    background: 'radial-gradient(circle, rgba(245, 230, 200, 0.2) 0%, rgba(245, 230, 200, 0) 70%)',
                    animationDuration: '12s',
                    animationDelay: '3s'
                }}
            />
            <CustomCursor />
            <HalftoneEffect />
            <NavBar />
            <main className="container mx-auto max-w-5xl px-6 md:px-8 relative z-10 pt-24 md:pt-32">
                <Header />

                <Section title="About" id="about">
                    <div className="space-y-4 text-[#ccd6f6]/90 text-lg leading-relaxed">
                        {ABOUT_ME.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                    </div>
                </Section>
                
                <Section title="Skills" id="skills">
                    <div className="space-y-8">
                        {SKILLS.map((category, i) => (
                            <div key={i}>
                                <h4 className="text-lg font-bold text-[#ccd6f6] mb-4">{category.name}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map(skill => (
                                        <span key={skill} className="bg-[#D95F43]/10 text-[#D95F43] text-sm font-mono px-3 py-1 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
                
                <Section title="Experience" id="experience">
                    {EXPERIENCES.map((exp, i) => <ExperienceCard key={i} item={exp} />)}
                </Section>

                <Section title="Education" id="education">
                    {EDUCATIONS.map((edu, i) => <EducationCard key={i} item={edu} />)}
                </Section>

                <Section title="Projects" id="projects">
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8 no-scrollbar overflow-x-auto pb-2">
                        {PROJECT_CATEGORIES.map(category => (
                            <button
                                key={category.name}
                                onClick={() => setActiveCategory(category.name)}
                                className={`font-mono text-sm px-4 py-2 rounded-full transition-colors duration-300 flex-shrink-0 interactive ${
                                    activeCategory === category.name
                                        ? 'bg-[#D95F43] text-[#0F2027] font-bold'
                                        : 'bg-[#F5E6C8]/10 text-[#F5E6C8] hover:bg-[#F5E6C8]/20'
                                }`}
                                aria-pressed={activeCategory === category.name}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {PROJECT_CATEGORIES.find(c => c.name === activeCategory)?.projects.map((proj, i) => <ProjectCard key={i} item={proj} />)}
                    </div>
                </Section>
                
                <Section title="Publications" id="publications">
                    <div className="space-y-8">
                        {PUBLICATIONS.map((pub, i) => <PublicationCard key={i} item={pub} />)}
                    </div>
                </Section>
                
                <Section title="Testimonials" id="testimonials">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {TESTIMONIALS.map((testimonial, i) => <TestimonialCard key={i} item={testimonial} />)}
                    </div>
                </Section>

                <ContactFooter />
            </main>
        </div>
    );
};

export default App;