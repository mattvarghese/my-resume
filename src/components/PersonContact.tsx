import type { Connections } from '../types';
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaLinkedinIn, 
  FaGithub 
} from 'react-icons/fa';

interface Props {
  connections: Connections;
}

export const PersonContact = ({ connections }: Props) => {
  const contactItems = [
    { icon: <FaEnvelope />, value: connections.email, href: `mailto:${connections.email}` },
    { icon: <FaPhoneAlt />, value: connections.phone, href: null },
    { icon: <FaMapMarkerAlt />, value: connections.location, href: null },
    { icon: <FaLinkedinIn />, value: connections.linkedIn, href: connections.linkedIn },
    { icon: <FaGithub />, value: connections.github, href: connections.github },
  ];

  return (
    <div className="bg-[#2c3e50] p-3 pt-5 rounded-sm flex flex-col gap-1.5 h-52">
      {contactItems.map((item, index) => {
        const isLink = !!item.href;
        const ContentTag = isLink ? 'a' : 'span';
        
        return (
          <div key={index} className="flex items-center gap-3 group">
            {/* Icon Container */}
            <div className="flex-shrink-0 w-7 h-7 border-[1.5px] border-[#4da6a6] rounded-full flex items-center justify-center text-[#4da6a6] text-xs">
              {item.icon}
            </div>
            
            {/* Value Text or Link */}
            <ContentTag 
              {...(isLink ? { 
                href: item.href as string, 
                target: "_blank", 
                rel: "noopener noreferrer" 
              } : {})}
              className={`text-white text-[11px] font-serif tracking-wide break-all opacity-90 ${
                isLink ? "hover:text-[#4da6a6] transition-colors cursor-pointer underline decoration-slate-500 underline-offset-2" : ""
              }`}
            >
              {item.value}
            </ContentTag>
          </div>
        );
      })}
    </div>
  );
};