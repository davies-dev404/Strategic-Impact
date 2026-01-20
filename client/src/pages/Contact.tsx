import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type InsertInquiry } from "@shared/routes";
import { useContactForm } from "@/hooks/use-content";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const mutation = useContactForm();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(api.inquiries.create.input),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
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
            <span className="text-accent font-bold tracking-widest text-xs uppercase mb-4 block">Get in Touch</span>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              Let's start the<br />conversation.
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white flex-grow">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-serif text-primary mb-8">Contact Information</h2>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                Whether you have a specific project in mind or need strategic counsel, our team is ready to listen.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary/5 p-3 rounded-sm mr-6 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Headquarters</h3>
                    <p className="text-muted-foreground">123 Avenue of the Americas<br />New York, NY 10013</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/5 p-3 rounded-sm mr-6 text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Email Us</h3>
                    <p className="text-muted-foreground">hello@luminary.com</p>
                    <p className="text-muted-foreground">media@luminary.com (Press Inquiries)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/5 p-3 rounded-sm mr-6 text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+1 (212) 555-0199</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-secondary/20 p-8 md:p-12 border border-border">
              <h3 className="text-2xl font-serif text-primary mb-8">Send a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-xs font-bold tracking-wider text-muted-foreground">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-white rounded-none border-gray-300 h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs font-bold tracking-wider text-muted-foreground">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@company.com" className="bg-white rounded-none border-gray-300 h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase text-xs font-bold tracking-wider text-muted-foreground">Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Company Inc." className="bg-white rounded-none border-gray-300 h-12" {...field} value={field.value || ''} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-xs font-bold tracking-wider text-muted-foreground">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your needs..." 
                            className="bg-white rounded-none border-gray-300 min-h-[150px] resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-none h-14 text-base font-medium"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
