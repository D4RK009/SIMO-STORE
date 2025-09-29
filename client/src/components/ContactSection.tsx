import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Users, Music, Youtube } from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Telegram",
    url: "https://t.me/simo_clean00",
    icon: <MessageCircle className="w-5 h-5" />,
    color: "bg-blue-500 hover:bg-blue-600"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/simo_mrd05",
    icon: <Instagram className="w-5 h-5" />,
    color: "bg-pink-500 hover:bg-pink-600"
  },
  {
    name: "Telegram Group",
    url: "https://t.me/addlist/reC97IWsw9A5N2Nk",
    icon: <Users className="w-5 h-5" />,
    color: "bg-blue-600 hover:bg-blue-700"
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@simo_cheat",
    icon: <Music className="w-5 h-5" />,
    color: "bg-black hover:bg-gray-800"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@simoo5321",
    icon: <Youtube className="w-5 h-5" />,
    color: "bg-red-500 hover:bg-red-600"
  }
];

export default function ContactSection() {
  const handleSocialClick = (url: string, name: string) => {
    window.open(url, '_blank');
    console.log(`${name} link clicked`);
  };

  return (
    <section className="w-full max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-2 text-white" data-testid="text-contact-title">
        Contact Us
      </h2>
      <p className="text-gray-300 mb-8">
        Follow us on social media for updates and support
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        {socialLinks.map((social, index) => (
          <Button
            key={index}
            onClick={() => handleSocialClick(social.url, social.name)}
            className={`${social.color} text-white border-0`}
            data-testid={`button-social-${social.name.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {social.icon}
            <span className="ml-2">{social.name}</span>
          </Button>
        ))}
      </div>
    </section>
  );
}