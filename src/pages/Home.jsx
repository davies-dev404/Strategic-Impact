
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Globe, Shield, Zap, Award, Target, MessageCircle } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { SEO } from "@/components/SEO";
import { useServices, useCaseStudies, useTestimonials } from "@/hooks/use-content";

export default function Home() {
  const { data: services, isLoading: loadingServices } = useServices();
  const { data: caseStudies, isLoading: loadingCaseStudies } = useCaseStudies();
  const { data: testimonials, isLoading: loadingTestimonials } = useTestimonials();

  // Pick top 3 case studies for preview
  const featuredCaseStudies = caseStudies?.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="Home" 
        description="Strategic communications for the modern era. Luminary builds narratives that matter and protects reputations that lead with strategic truth."
        keywords="strategic truth, narrative building, reputation management, Kenya PR, Luminary home"
      />
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
          <div className="relative flex overflow-hidden mask-image-linear-gradient py-8">
            <motion.div 
              className="flex whitespace-nowrap gap-16 md:gap-32 items-center"
              animate={{ x: [0, -1000] }}
              transition={{ 
                repeat: Infinity, 
                ease: "linear", 
                duration: 40 
              }}
            >
              {[
                { name: "Safaricom", style: "font-sans font-extrabold tracking-tight text-[#43b02a] text-4xl md:text-5xl" },
                { name: "Equity Group", style: "font-serif font-black text-[#a6212e] text-3xl md:text-4xl" },
                { name: "KCB Group", style: "font-sans font-black tracking-tighter text-[#009640] text-4xl md:text-5xl" },
                { name: "EABL", style: "font-serif font-medium italic text-[#c5a059] text-4xl md:text-5xl" },
                { name: "Kenya Airways", style: "font-sans font-black tracking-tighter uppercase text-[#e21e26] text-4xl md:text-5xl" }, 
                { name: "Britam", style: "font-sans font-extrabold text-[#1b75bc] text-4xl md:text-5xl" },
                { name: "Nation Media", style: "font-serif font-bold uppercase tracking-tight text-[#004b87] text-3xl md:text-4xl" },
                { name: "Naivas", style: "font-sans font-black italic text-[#0067b1] text-4xl md:text-5xl" },
                { name: "Bidco Africa", style: "font-serif font-bold italic text-[#00509a] text-4xl md:text-5xl" },
                { name: "Centum", style: "font-sans font-bold tracking-widest uppercase text-[#004890] text-3xl md:text-4xl" },
                // Duplicate
                { name: "Safaricom", style: "font-sans font-extrabold tracking-tight text-[#43b02a] text-4xl md:text-5xl" },
                { name: "Equity Group", style: "font-serif font-black text-[#a6212e] text-3xl md:text-4xl" },
                { name: "KCB Group", style: "font-sans font-black tracking-tighter text-[#009640] text-4xl md:text-5xl" },
                { name: "EABL", style: "font-serif font-medium italic text-[#c5a059] text-4xl md:text-5xl" },
                { name: "Kenya Airways", style: "font-sans font-black tracking-tighter uppercase text-[#e21e26] text-4xl md:text-5xl" },
                { name: "Britam", style: "font-sans font-extrabold text-[#1b75bc] text-4xl md:text-5xl" },
                { name: "Nation Media", style: "font-serif font-bold uppercase tracking-tight text-[#004b87] text-3xl md:text-4xl" },
                { name: "Naivas", style: "font-sans font-black italic text-[#0067b1] text-4xl md:text-5xl" },
                { name: "Bidco Africa", style: "font-serif font-bold italic text-[#00509a] text-4xl md:text-5xl" },
                { name: "Centum", style: "font-sans font-bold tracking-widest uppercase text-[#004890] text-3xl md:text-4xl" }
              ].map((brand, i) => (
                <div key={i} className="flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default">
                  <span className={`text-primary ${brand.style}`}>
                    {brand.name}
                  </span>
                </div>
              ))}
            </motion.div>
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
                    className="bg-white p-8 shadow-sm border border-transparent hover:border-accent/20 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group rounded-sm relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-100" />
                    <div className="absolute top-0 left-0 h-1 bg-accent w-0 group-hover:w-full transition-all duration-700 ease-out" />

                    <div className="w-12 h-12 bg-primary/5 text-primary flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-3 text-primary">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <Link href="/services">
                      <span className="text-sm font-semibold text-accent flex items-center cursor-pointer group-hover:underline decoration-1 underline-offset-4">
                        Explore <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
                className="group cursor-pointer relative"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20" />
                <div className="absolute top-0 left-0 h-[1px] bg-accent w-0 group-hover:w-full transition-all duration-700 ease-out" />
                
                <div className="py-6 group-hover:translate-y-[-5px] transition-transform duration-300">
                  <p className="text-xs font-bold tracking-widest text-accent mb-2 uppercase">{study.industry}</p>
                  <h3 className="text-2xl font-serif font-medium mb-4 group-hover:text-white/90 transition-colors">{study.client}</h3>
                  <p className="text-white/60 mb-6 text-sm leading-relaxed line-clamp-3">
                    {study.challenge}
                  </p>
                  <div className="bg-white/5 p-4 backdrop-blur-sm border border-white/10 group-hover:bg-white/10 transition-colors">
                    <p className="text-sm font-semibold text-white/90">"{study.result}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="What Our Clients Say" subtitle="Testimonials" />
          
          <div className="max-w-5xl mx-auto">
             <Carousel
               opts={{
                 align: "start",
                 loop: true,
               }}
               plugins={[
                 Autoplay({
                   delay: 4000,
                 }),
               ]}
               className="w-full"
             >
               <CarouselContent>
                 {testimonials?.map((t) => (
                   <CarouselItem key={t.id} className="md:basis-1/2 lg:basis-1/3 p-4">
                     <motion.div 
                       initial={{ opacity: 0, scale: 0.95 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       className="bg-secondary/20 p-8 rounded-lg border border-border/50 shadow-sm h-full flex flex-col relative group hover:bg-secondary/30 transition-colors"
                     >
                       <div className="absolute top-6 right-6 text-accent/20 group-hover:text-accent/40 transition-colors">
                         <MessageCircle className="w-10 h-10" />
                       </div>
                       <p className="text-muted-foreground italic mb-6 leading-relaxed flex-grow">"{t.quote}"</p>
                       <div>
                         <h4 className="font-serif font-bold text-primary">{t.name}</h4>
                         <p className="text-xs text-accent tracking-widest uppercase">{t.role}</p>
                         <span className="text-xs text-gray-400 mt-1 block">{t.type} Client</span>
                       </div>
                     </motion.div>
                   </CarouselItem>
                 ))}
               </CarouselContent>
               <div className="hidden md:block">
                 <CarouselPrevious />
                 <CarouselNext />
               </div>
             </Carousel>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-white flex items-center justify-center border-t border-border/10">
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
