import { Link } from "wouter";
import { Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="font-serif text-2xl font-bold tracking-tighter text-white">
              LUMINARY<span className="text-accent">.</span>
            </Link>
            <p className="mt-6 text-sm text-white/60 leading-relaxed">
              Strategic communications for the modern era. We build narratives that matter and protect reputations that lead.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Firm</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Expertise</Link></li>
              <li><Link href="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link></li>
              <li><Link href="/careers" className="hover:text-accent transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300">
                {/* Lucide's Twitter icon is the bird, but user requested X. 
                    If X icon isn't available in this version, we can use a custom SVG for X or just the Twitter icon renamed if needed.
                    However, many recent lucide versions have 'X' or 'Twitter' as the new X.
                    Let's use the imported Twitter component but style it or check if we can swap it. 
                    Actually, for safety in this environment without verifying version features, I'll use a custom SVG for X to be precise 
                    or just stick to the requested "X" icon. 
                    Let's try to just render a custom SVG for the X logo to be 100% sure it looks like X.
                */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Contact</h4>
            <address className="not-italic text-sm text-white/60 space-y-4">
              <p>123 Avenue of the Americas<br />New York, NY 10013</p>
              <p><a href="mailto:hello@luminary.com" className="hover:text-accent">hello@luminary.com</a></p>
              <p>+1 (212) 555-0199</p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Luminary Communications. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
