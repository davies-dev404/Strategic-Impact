
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Server, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Eye,
      title: "Data Collection",
      content: "We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This includes your name, email address, and company details."
    },
    {
      icon: Server,
      title: "Data Usage",
      content: "We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Luminary and our users. We also use this data to offer you tailored content."
    },
    {
      icon: Lock,
      title: "Data Security",
      content: "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Your trust is paramount to our operations."
    },
    {
      icon: Globe,
      title: "Third-Party Sharing",
      content: "We do not share your personal information with third parties except as described in this policy, such as with vendors who perform services on our behalf or when required by law."
    },
    {
      icon: FileText,
      title: "Your Rights",
      content: "You have the right to access, correct, or delete your personal data. You may also object to processing or request data portability. Contact our privacy team to exercise these rights."
    },
    {
      icon: Shield,
      title: "Cookies & Tracking",
      content: "We use cookies and similar technologies to improve your experience, analyze traffic, and personalize content. You can control cookie preferences through your browser settings."
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
              Privacy Policy
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Your privacy is critically important to us. This policy outlines how we handle your personal information with the utmost care and transparency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
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
                      <section.icon className="w-6 h-6 text-primary group-hover:text-white" />
                    </div>
                    <CardTitle className="font-serif text-xl text-primary">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {section.content}
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
              If you have any questions about our privacy practices, please contact us at <a href="mailto:privacy@luminary.com" className="text-primary font-semibold hover:underline">privacy@luminary.com</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
