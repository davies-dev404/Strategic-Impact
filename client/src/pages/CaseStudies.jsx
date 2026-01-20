import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { useCaseStudies } from "@/hooks/use-content";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";

export default function CaseStudies() {
  const { data: studies, isLoading } = useCaseStudies();

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Case Studies" 
        description="Explore Luminary's track record of excellence. See how we've helped leading Kenyan and African brands achieve their communications goals."
        keywords="PR case studies, communications success stories, Luminary results"
      />
      <Navigation />
      
      {/* HEADER */}
      <section className="bg-primary text-white pt-40 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="text-accent font-bold tracking-widest text-xs uppercase mb-4 block">Our Work</span>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              Proven impact across<br />industries.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-96 bg-white animate-pulse shadow-sm" />)}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {studies?.map((study, index) => (
                <motion.div 
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-transparent shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative flex flex-col h-full rounded-sm overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 z-10" />
                  <div className="absolute top-0 left-0 h-1 bg-accent w-0 group-hover:w-full transition-all duration-700 ease-out z-10" />
                  
                  {/* Card Image */}
                  <div className="relative h-56 overflow-hidden">
                     <img 
                       src={study.image} 
                       alt={study.client}
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     />
                     <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-300" />
                     <div className="absolute top-4 left-4">
                       <Badge variant="secondary" className="bg-white/95 backdrop-blur text-primary uppercase tracking-widest text-[10px] font-bold rounded-sm px-2 py-1 shadow-sm">
                          {study.industry}
                       </Badge>
                     </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl font-serif font-bold mb-4 text-primary line-clamp-2">{study.client}</h2>
                    
                    <div className="space-y-4 flex-grow">
                      <div>
                        <h3 className="text-xs font-bold text-accent uppercase tracking-widest mb-1.5">The Challenge</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{study.challenge}</p>
                      </div>
                      
                       <div className="pt-4 border-t border-gray-100 mt-auto">
                          <span className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Impact</span>
                          <p className="text-sm font-semibold text-primary leading-tight">{study.result}</p>
                       </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
