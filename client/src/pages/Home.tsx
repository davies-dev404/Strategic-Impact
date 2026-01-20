import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Globe, Shield, Zap, Award, Target, MessageCircle } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { useServices, useCaseStudies } from "@/hooks/use-content";

export default function Home() {
  const { data: services, isLoading: loadingServices } = useServices();
  const { data: caseStudies } = useCaseStudies();

  // Pick top 3 case studies for preview
  const featuredCaseStudies = caseStudies?.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Using Unsplash image for modern corporate skyscraper/abstract feel */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
            }} 
          />
          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs font-medium tracking-widest uppercase mb-6 bg-white/5 backdrop-blur-sm">
              Global Communications Firm
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-8">
              Strategic narratives for <br />
              <span className="italic text-white/90">the modern era.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              We help ambitious brands, leaders, and organizations navigate complexity, build authority, and protect their reputation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-none bg-white text-primary hover:bg-white/90 w-full sm:w-auto px-8 py-6 text-base">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline" size="lg" className="rounded-none border-white text-white hover:bg-white/10 w-full sm:w-auto px-8 py-6 text-base backdrop-blur-sm">
                  View Our Results
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LOGO STRIP / SOCIAL PROOF */}
      <div className="bg-white py-10 border-b border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Using text for logos to avoid external dependencies, stylized */}
             <span className="text-xl font-bold font-serif text-primary">VANGUARD</span>
             <span className="text-xl font-bold font-sans tracking-tight text-primary">NEXUS</span>
             <span className="text-xl font-bold font-mono text-primary">GlobalCorp</span>
             <span className="text-xl font-bold font-serif italic text-primary">Prestige</span>
             <span className="text-xl font-bold font-sans tracking-[0.2em] text-primary">ELEVATE</span>
          </div>
        </div>
      </div>

      {/* ABOUT TEASER */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-bold text-xs tracking-widest uppercase mb-4 block">Who We Are</span>
              <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6 leading-tight">
                We craft stories that move markets and minds.
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                In an era of noise, clarity is power. At Luminary, we don't just secure coverage; we design strategic communication frameworks that align with your business objectives.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                From high-stakes crisis management to brand-defining thought leadership, our senior-led teams provide the counsel you need to lead with confidence.
              </p>
              <Link href="/about">
                <Button variant="link" className="p-0 text-primary font-semibold text-lg hover:text-accent group">
                  Learn about our philosophy <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-muted relative overflow-hidden">
                {/* Modern office meeting abstract */}
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Strategic planning session" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border-[12px] border-white/50" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary p-8 text-white max-w-xs shadow-xl hidden md:block">
                <p className="font-serif text-2xl italic">"Communication is not about speaking. It's about being heard."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Our Expertise" 
            subtitle="Comprehensive Solutions"
            className="mb-16" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loadingServices ? (
              Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white h-64 animate-pulse shadow-sm p-8" />
              ))
            ) : (
              services?.slice(0, 6).map((service, index) => {
                const IconComponent = {
                  'MessageCircle': MessageCircle,
                  'Globe': Globe,
                  'Shield': Shield,
                  'Zap': Zap,
                  'Award': Award,
                  'Target': Target,
                }[service.icon] || MessageCircle;

                return (
                  <motion.div 
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-8 shadow-sm border border-transparent hover:border-accent/20 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-primary/5 text-primary flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold font-serif mb-3 text-primary">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <Link href="/services">
                      <span className="text-sm font-semibold text-accent flex items-center cursor-pointer group-hover:underline decoration-1 underline-offset-4">
                        Explore <ArrowRight className="ml-1 w-3 h-3" />
                      </span>
                    </Link>
                  </motion.div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* FEATURED RESULTS */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <SectionHeading 
              title="Impact & Results" 
              subtitle="Case Studies"
              light
              alignment="left"
              className="mb-0 max-w-xl" 
            />
            <Link href="/case-studies">
              <Button variant="outline" className="mt-8 md:mt-0 border-white/20 text-white hover:bg-white hover:text-primary rounded-none">
                View All Case Studies
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCaseStudies?.map((study, idx) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="border-t border-white/20 py-6 group-hover:border-accent transition-colors duration-300">
                  <p className="text-xs font-bold tracking-widest text-accent mb-2 uppercase">{study.industry}</p>
                  <h3 className="text-2xl font-serif font-medium mb-4 group-hover:text-white/90 transition-colors">{study.client}</h3>
                  <p className="text-white/60 mb-6 text-sm leading-relaxed line-clamp-3">
                    {study.challenge}
                  </p>
                  <div className="bg-white/5 p-4 backdrop-blur-sm border border-white/10">
                    <p className="text-sm font-semibold text-white/90">"{study.result}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 bg-white flex items-center justify-center">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Ready to shape your narrative?</h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Let's discuss how strategic communications can accelerate your business goals.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-none px-10 py-7 text-lg bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
              Start the Conversation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
