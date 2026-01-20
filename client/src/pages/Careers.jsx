import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Search } from "lucide-react";

import { SEO } from "@/components/SEO";

export default function Careers() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Join Our Team" 
        description="Interested in joining Luminary? Explore career opportunities and learn about our culture of strategic truth."
        keywords="careers at Luminary, PR jobs Kenya, communications careers Africa"
      />
      <Navigation />
      
      <main className="flex-grow pt-24 pb-20">
        <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Join Our Team" 
            subtitle="Careers" 
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-none shadow-xl overflow-hidden bg-secondary/5">
                <CardContent className="p-12 text-center">
                  <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center text-primary mx-auto mb-8">
                    <Search className="w-10 h-10" />
                  </div>
                  
                  <h2 className="text-3xl font-serif font-bold text-primary mb-6">No Current Vacancies</h2>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                    We're currently satisfied with our team size and aren't actively recruiting for any specific roles. 
                    However, we are always interested in meeting exceptional strategic communicators, narrative builders, 
                    and media relations experts who believe in our philosophy of "Strategic Truth."
                  </p>
                  
                  <div className="inline-flex items-center gap-2 p-6 rounded-lg bg-white border border-border/50 shadow-sm">
                    <Mail className="w-5 h-5 text-accent" />
                    <span className="text-primary font-medium">
                      Send your portfolio to: <a href="mailto:talent@luminary.com" className="text-accent hover:underline">talent@luminary.com</a>
                    </span>
                  </div>
                  
                  <p className="mt-8 text-sm text-muted-foreground italic">
                    We'll keep your details on file and reach out if a relevant opportunity arises.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}
