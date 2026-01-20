import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";

export default function About() {
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
            <span className="text-accent font-bold tracking-widest text-xs uppercase mb-4 block">About Luminary</span>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              We define the<br />conversations that matter.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* MISSION & PHILOSOPHY */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h3 className="text-2xl font-serif mb-6 text-primary">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At Luminary, our mission is to empower leaders and organizations with the clarity, confidence, and connection they need to thrive in a complex world. We believe that truth, well-told, is the most powerful currency in business.
              </p>
              
              <h3 className="text-2xl font-serif mb-6 text-primary mt-12">Our Philosophy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We reject the "spin" of traditional PR. Instead, we focus on strategic truth. We dig deep to uncover the authentic core of your organization, then build sophisticated frameworks to communicate that reality to the stakeholders who matter most.
              </p>
            </div>
            
            <div className="relative h-full min-h-[400px]">
              <div className="absolute inset-0 bg-secondary transform rotate-3 rounded-sm" />
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" 
                alt="Team collaboration" 
                className="absolute inset-0 w-full h-full object-cover shadow-lg rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Core Values" subtitle="What Drives Us" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            {[
              {
                title: "Intellectual Rigor",
                description: "We approach every challenge with analytical depth and strategic foresight. No cookie-cutter solutions."
              },
              {
                title: "Unwavering Integrity",
                description: "Trust is our product. We operate with radical transparency and ethical fortitude in all engagements."
              },
              {
                title: "Relentless Excellence",
                description: "We are obsessed with quality. From the smallest email to the largest campaign, good enough is never enough."
              }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 border-t-4 border-accent shadow-sm"
              >
                <h3 className="text-xl font-serif font-bold mb-4 text-primary">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION (Static for MVP) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Leadership" subtitle="The Minds Behind Luminary" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
             {/* Using Unsplash portraits for generic professional team members */}
             {[
               { name: "Elena Sterling", role: "Managing Partner", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
               { name: "James Thorne", role: "Head of Strategy", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
               { name: "Sarah Chen", role: "Director of Media Relations", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
             ].map((member, i) => (
               <div key={i} className="text-center group">
                 <div className="mb-6 relative overflow-hidden aspect-[3/4]">
                   <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 </div>
                 <h4 className="text-lg font-serif font-bold text-primary">{member.name}</h4>
                 <p className="text-sm text-accent tracking-widest uppercase mt-1">{member.role}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
