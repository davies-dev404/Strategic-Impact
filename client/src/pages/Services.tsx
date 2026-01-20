import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { useServices } from "@/hooks/use-content";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Services() {
  const { data: services, isLoading } = useServices();

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
            <span className="text-accent font-bold tracking-widest text-xs uppercase mb-4 block">Our Expertise</span>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              Precision in every<br />communication.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {isLoading ? (
            <div className="space-y-12">
              {[1, 2, 3].map(i => <div key={i} className="h-64 bg-secondary/50 animate-pulse rounded-sm" />)}
            </div>
          ) : (
            <div className="space-y-24">
              {services?.map((service, index) => (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-border pt-12"
                >
                  <div className="lg:col-span-4">
                    <span className="text-6xl font-serif text-secondary font-bold block mb-4 opacity-50">0{index + 1}</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">{service.title}</h2>
                  </div>
                  
                  <div className="lg:col-span-8">
                    <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Using optional chaining and defaulting to empty array if benefits is missing/invalid */}
                      {(service.benefits as string[] || []).map((benefit, i) => (
                        <div key={i} className="flex items-start">
                          <div className="bg-primary/5 p-1 rounded-full mr-3 mt-1 text-primary">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="text-foreground/80">{benefit}</span>
                        </div>
                      ))}
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
