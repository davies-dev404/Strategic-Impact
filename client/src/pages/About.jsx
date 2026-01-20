
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Zap, Shield, Award, Eye, Target, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import { SEO } from "@/components/SEO";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Our Story" 
        description="Learn about Luminary's mission, vision, and philosophy. We are a Kenyan-based strategic communications agency focusing on strategic truth."
        keywords="about Luminary, strategic communications Kenya, Dr. Njeri Mbugua, Kofi Osei, James Omari"
      />
      <Navigation />
      
      {/* HERO SECTION */}
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

      {/* HISTORY SECTION */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <SectionHeading title="Our History" subtitle="Established in Nairobi" />
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            Founded in 2010 in the heart of Nairobi, Luminary began with a singular vision: to elevate African narratives to the global stage. What started as a boutique consultancy in Westlands has grown into East Africa's premier strategic communications firm.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Over the last decade, we have partnered with over 500 organizations, ranging from budding Kenyan startups to established multinational conglomerates, helping them navigate the complex and vibrant East African market with precision and flair.
          </p>
        </div>
      </section>



      {/* MISSION, VISION & PHILOSOPHY */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Stacked Cards */}
            <div className="space-y-6">
              {[
                { 
                  title: "Our Mission", 
                  icon: Target, 
                  desc: "To empower leaders and organizations with the clarity, confidence, and connection they need to thrive in a complex world. Truth, well-told, is our currency." 
                },
                { 
                  title: "Our Vision", 
                  icon: Eye, 
                  desc: "To be the premier strategic communications partner in Africa, defining the narratives that shape the future of business, policy, and society on the continent." 
                },
                { 
                  title: "Our Philosophy", 
                  icon: Lightbulb, 
                  desc: "We reject \"spin\". We focus on strategic truth. We dig deep to uncover the authentic core of your organization, then build sophisticated frameworks to communicate it." 
                }
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group relative overflow-hidden">
                  <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-start relative z-10">
                    <div className="w-12 h-12 shrink-0 bg-primary/5 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif mb-2 text-primary">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </CardContent>
                  {/* The "drawn line" effect */}
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
                  {/* Subtle background glow on hover */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </Card>
              ))}
            </div>

            {/* Right Column: Image */}
            <div className="relative h-full min-h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl lg:mt-0">
              <img 
                src="/about_summit.png" 
                alt="B Lab Africa Summit - Innovating a Sustainable Future" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
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
                icon: <Zap className="w-8 h-8" />,
                title: "Intellectual Rigor",
                description: "We approach every challenge with analytical depth and strategic foresight. No cookie-cutter solutions."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Unwavering Integrity",
                description: "Trust is our product. We operate with radical transparency and ethical fortitude in all engagements."
              },
              {
                icon: <Award className="w-8 h-8" />,
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
                className="bg-white p-10 shadow-sm group relative overflow-hidden"
              >
                {/* Top Border Animation */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-100" />
                <div className="absolute top-0 left-0 h-1 bg-accent w-0 group-hover:w-full transition-all duration-700 ease-out" />
                
                <div className="w-14 h-14 bg-secondary/50 rounded-full flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                
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
             {[
               { 
                 name: "Dr. Njeri Mbugua", 
                 role: "Managing Partner", 
                 img: "/team/njeri.png",
                 qualifications: "PhD in Strategic Communications (UoN), 20+ years of corporate advisory experience."
               },
               { 
                 name: "Kofi Osei", 
                 role: "Head of Strategy", 
                 img: "/team/kofi.png",
                 qualifications: "MBA (Harvard Business School), former Senior Consultant at McKinsey & Co."
               },
               { 
                 name: "James Omari", 
                 role: "Director of Media Relations", 
                 img: "/team/omari.png",
                 qualifications: "M.A in International Journalism (Cardiff), 15 years in regional media stakeholder management."
               }
             ].map((member, i) => (
               <div key={i} className="text-center group">
                 <div className="mb-6 relative overflow-hidden aspect-[3/4] rounded-sm shadow-md">
                   <img 
                     src={member.img} 
                     alt={member.name} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
                   
                   {/* Hover Overlay for Qualifications */}
                   <div className="absolute inset-0 bg-primary/90 flex flex-col items-center justify-center p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                     <p className="text-xs font-bold tracking-widest uppercase mb-4 text-accent">Qualifications</p>
                     <p className="text-sm leading-relaxed italic">
                       "{member.qualifications}"
                     </p>
                   </div>
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
