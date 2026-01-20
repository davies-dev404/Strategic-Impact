
import { useQuery, useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Globe, Shield, Zap, Award, Target, Users, TrendingUp, Briefcase } from "lucide-react";

// Static Data for Client-Side Only Mode

const SERVICES_DATA = [
  {
    id: 1,
    title: "Strategic Communications (Kenya & East Africa)",
    description: "Tailored communication strategies that resonate with the dynamic Kenyan market and the broader East African region. We bridge the gap between global standards and local nuance.",
    benefits: ["Market Entry Strategies", "Stakeholder Mapping in Nairobi", "Regional Policy Advocacy"],
    icon: "Target"
  },
  {
    id: 2,
    title: "Crisis Management & Reputation Recovery",
    description: "Rapid-response reputation management for Kenyan firms and multinationals operating in the region. We navigate complex media landscapes to protect your brand equity.",
    benefits: ["24/7 Media Monitoring", "Crisis Simulation Workshops", "Executive Training"],
    icon: "Shield"
  },
  {
    id: 3,
    title: "Media Relations & Digital Influence",
    description: "Building authoritative presence across Kenya's tier-1 media outlets and digital platforms. From Daily Nation features to viral social campaigns.",
    benefits: ["Tier-1 Media Placements", "Influencer Engagement", "Thought Leadership Op-Eds"],
    icon: "MessageCircle"
  },
  {
    id: 4,
    title: "Corporate & Government Affairs",
    description: "Navigating the regulatory landscape in Kenya. We facilitate constructive dialogue between private sector leaders and government policymakers.",
    benefits: ["Legislative Monitoring", "Public Private Partnerships", "Policy Briefs"],
    icon: "Briefcase"
  },
  {
    id: 5,
    title: "Investor Relations (Nairobi Securities Exchange)",
    description: "Clear, compliant, and compelling narratives for listed companies and those seeking capital in Nairobi's vibrant financial hub.",
    benefits: ["Annual Report Crafting", "AGM Management", "Investor Roadshows"],
    icon: "TrendingUp"
  },
  {
    id: 6,
    title: "Pan-African Brand Localization",
    description: "Helping global brands find their authentic voice in Kenya. We translate international brand values into local relevance without losing essence.",
    benefits: ["Cultural Audits", "Swahili & Sheng Copywriting", "Local Brand Activations"],
    icon: "Globe"
  }
];

const CASE_STUDIES_DATA = [
  {
    id: 1,
    client: "Safaricom & GreenEnergy Co.",
    industry: "Telecommunications & Energy",
    challenge: "Launching a joint sustainability initiative in Nairobi amidst skepticism about corporate greenwashing.",
    solution: "A transparent, data-driven multi-channel campaign highlighting real-time impact metrics and community testimonials from the Rift Valley.",
    result: "Achieved 45% positive sentiment shift in first quarter and gained endorsement from the Ministry of Environment.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: 2,
    client: "FinTech Africa Summit",
    industry: "Technology & Finance",
    challenge: "Attracting international investors to a Nairobi-based fintech conclave post-pandemic.",
    solution: "Positioned Kenya as the 'Silicon Savannah' through targeted features in TechCrunch, Bloomberg, and local business dailies.",
    result: "Record attendance of 2,000+ delegates and $50M in deal flow announced during the summit.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
  },
  {
    id: 3,
    client: "Nairobi Expressway Corp",
    industry: "Infrastructure",
    challenge: "Mitigating public backlash regarding construction disruptions and toll pricing.",
    solution: "Community engagement town halls and a 'Moving Kenya Forward' visual campaign showcasing long-term economic benefits.",
    result: "Reduced public complaints by 30% and successfully launched the toll service with 10k+ daily users in month one.",
    image: "/nairobi-expressway.png"
  },
  {
    id: 4,
    client: "Savannah Tech Hub",
    industry: "Innovation & Startups",
    challenge: "Establishing a new innovation hub in Kilimani as the go-to destination for venture capital.",
    solution: "Hosted a 'Silicon Savannah' investor week and produced a documentary series on local startup success stories.",
    result: "Secured $5M in seed funding for resident startups within first 6 months and full occupancy of the hub.",
    image: "/savannah-hub.png"
  },
  {
    id: 5,
    client: "Mara Conservation Fund",
    industry: "Non-Profit & Environment",
    challenge: "Declining donor engagement due to global economic downturn.",
    solution: "A digital-first storytelling campaign featuring VR experiences of the migration and direct 'adopt-an-acre' calls to action.",
    result: "Increased individual donations by 200% and partnered with 3 global corporate sponsors.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
  },
  {
    id: 6,
    client: "East African Breweries (EABL)",
    industry: "FMCG",
    challenge: "Launching a new premium brand to a younger, more health-conscious demographic.",
    solution: "Lifestyle-led influencer campaign focusing on 'Responsible Celebration' and premium artistry events.",
    result: "Captured 15% market share in the premium segment within one year surpassing projected targets.",
    image: "/eabl-case.png"
  }
];

const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Wanjiku Kimani",
    role: "CEO, TechSolutions Kenya",
    quote: "Luminary transformed our local market entry. Their understanding of the Nairobi tech ecosystem is unmatched. Professional, catchy, and deeply effective.",
    type: "Local"
  },
  {
    id: 2,
    name: "James Robertson",
    role: "Director, Global Ventures London",
    quote: "We needed a partner who understood both international standards and the Kenyan pulse. Luminary bridged that gap perfectly.",
    type: "International"
  },
  {
    id: 3,
    name: "David Ochieng",
    role: "MD, Rift Valley Agri-Exports",
    quote: "Their crisis management during our supply chain disruption was a lifesaver. They turned a potential PR disaster into a story of resilience.",
    type: "Local"
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    role: "VP Marketing, SolarPower Africa",
    quote: "The team's ability to simplify complex technical narratives for the general public was exactly what we needed to scale our adoption.",
    type: "International"
  },
  {
    id: 5,
    name: "Hassan Ali",
    role: "Founder, Mombasa Logistics",
    quote: "Strategic, timely, and incredibly connected. They opened doors we didn't even know existed.",
    type: "Local"
  }
];

// Services Hook (Static)
export function useServices() {
  return useQuery({
    queryKey: ["services"],
    queryFn: async () => SERVICES_DATA,
  });
}

// Case Studies Hook (Static)
export function useCaseStudies() {
  return useQuery({
    queryKey: ["caseStudies"],
    queryFn: async () => CASE_STUDIES_DATA,
  });
}

// Testimonials Hook (New static hook)
export function useTestimonials() {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => TESTIMONIALS_DATA,
  });
}

// Contact Form Mutation (Mock)
export function useContactForm() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data) => {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Form Submitted:", data);
      return { success: true };
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "We have received your inquiry and will be in touch shortly.",
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
