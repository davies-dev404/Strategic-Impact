import { Link } from "wouter";

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
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
            </ul>
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
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
