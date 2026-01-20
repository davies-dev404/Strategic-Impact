import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { useServices } from "@/hooks/use-content";
import { motion } from "framer-motion";
import { Check, MessageCircle, Globe, Shield, Zap, Award, Target, TrendingUp, Briefcase } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const { data: services, isLoading } = useServices();

  const iconMap = {
    'MessageCircle': MessageCircle,
    'Globe': Globe,
    'Shield': Shield,
    'Zap': Zap,
    'Award': Award,
    'Target': Target,
    'TrendingUp': TrendingUp,
    'Briefcase': Briefcase,
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Expertise" 
        description="Strategic communications services tailored for impact. We offer corporate reputation management, narrative building, and executive advisory."
        keywords="PR services Kenya, corporate communications agency, media relations advisor"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services?.map((service, index) => {
                const Icon = iconMap[service.icon] || MessageCircle;
                return (
                  <motion.div 
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full border-none shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden bg-white">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gray-100" />
                      <div className="absolute top-0 left-0 h-1 bg-accent w-0 group-hover:w-full transition-all duration-700 ease-out" />
                      
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                           <Icon className="w-6 h-6" />
                        </div>
                        
                        <h2 className="text-xl font-serif text-primary mb-3 font-bold">{service.title}</h2>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                          {service.description}
                        </p>
                      
                        <div className="space-y-2 pt-5 border-t border-gray-100 mt-auto">
                          {(service.benefits || []).map((benefit, i) => (
                            <div key={i} className="flex items-start">
                              <div className="bg-accent/10 p-0.5 rounded-full mr-2 mt-0.5 text-accent">
                                <Check className="w-2.5 h-2.5" />
                              </div>
                              <span className="text-xs text-foreground/80 font-medium">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
