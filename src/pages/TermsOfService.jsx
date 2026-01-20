
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { FileCheck, Users, Scale, AlertCircle, Copyright, Ban } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsOfService() {
  const terms = [
    {
      icon: FileCheck,
      title: "Acceptance of Terms",
      content: "By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement. Use of our services indicates full acceptance."
    },
    {
      icon: Users,
      title: "User Conduct",
      content: "You agree to use our site for lawful purposes only. You are prohibited from posting or transmitting any unlawful, threatening, libelous, or profane material that could constitute a criminal offense."
    },
    {
      icon: Copyright,
      title: "Intellectual Property",
      content: "All content provided on this site is the property of Luminary Communications or its suppliers and is protected by international copyright laws. Unauthorized use is strictly prohibited."
    },
    {
      icon: Scale,
      title: "Limitation of Liability",
      content: "Luminary shall not be liable for any damages that result from the use of, or inability to use, the materials on this site or the performance of the products, even if we have been advised of the possibility of such damages."
    },
    {
      icon: Ban,
      title: "Termination",
      content: "We reserve the right to terminate your access to the site, without any advance notice, for conduct that we believe violates these Terms or is harmful to other users of the site, us, or third parties, or for any other reason."
    },
    {
      icon: AlertCircle,
      title: "Governing Law",
      content: "Any claim relating to Luminary's website shall be governed by the laws of Kenya without regard to its conflict of law provisions. Any legal action or proceeding shall be brought exclusively in the courts of Nairobi."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* HEADER */}
      <section className="bg-primary text-white pt-40 pb-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-accent font-bold tracking-widest text-xs uppercase mb-4 block">Legal</span>
            <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Please read these terms carefully before using our services. They define the rules and regulations for the use of Luminary's Website.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {terms.map((term, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <term.icon className="w-6 h-6 text-primary group-hover:text-white" />
                    </div>
                    <CardTitle className="font-serif text-xl text-primary">{term.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {term.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground mb-4">
              Last updated: January 2026
            </p>
            <p className="text-muted-foreground">
              By accessing this website we assume you accept these terms and conditions. Do not continue to use Luminary if you do not agree to take all of the terms and conditions stated on this page.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
