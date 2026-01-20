import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { useCaseStudies } from "@/hooks/use-content";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function CaseStudies() {
  const { data: studies, isLoading } = useCaseStudies();

  return (
    <div className="min-h-screen bg-background">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map(i => <div key={i} className="h-96 bg-white animate-pulse shadow-sm" />)}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-16">
              {studies?.map((study, index) => (
                <motion.div 
                  key={study.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="bg-white border border-border overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="lg:col-span-5 bg-primary p-12 text-white flex flex-col justify-center relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-32 bg-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                      
                      <div className="relative z-10">
                        <Badge variant="outline" className="border-accent text-accent mb-6 uppercase tracking-widest text-xs rounded-sm px-3 py-1 bg-transparent hover:bg-transparent">
                          {study.industry}
                        </Badge>
                        <h2 className="text-3xl font-serif font-bold mb-2">{study.client}</h2>
                        <div className="w-12 h-1 bg-accent my-6" />
                        <div className="space-y-4">
                          <div>
                            <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">Result</span>
                            <p className="text-lg font-medium leading-relaxed">{study.result}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-7 p-12 lg:p-16 flex flex-col justify-center">
                      <div className="mb-10">
                        <h3 className="text-xl font-bold text-primary mb-3 font-serif">The Challenge</h3>
                        <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-3 font-serif">Our Solution</h3>
                        <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
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
