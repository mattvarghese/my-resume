import type { Connections } from '../model/types';
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
  // Helper to strip protocol and www for visual display
  const formatDisplayUrl = (url: string) => url.replace(/^(https?:\/\/)?(www\.)?/, '');

  const contactItems = [
    { icon: <FaEnvelope />, value: connections.email, href: `mailto:${connections.email}` },
    { icon: <FaPhoneAlt />, value: connections.phone, href: null },
    { icon: <FaMapMarkerAlt />, value: connections.location, href: null },
    { 
      icon: <FaLinkedinIn />, 
      value: formatDisplayUrl(connections.linkedIn), // Clean visual text
      href: connections.linkedIn                     // Full navigable link
    },
    { 
      icon: <FaGithub />, 
      value: formatDisplayUrl(connections.github),   // Clean visual text
      href: connections.github                       // Full navigable link
    },
  ];

  return (
    /* rounded-r-sm applied to match the summary curvature on the right */
    <div className="p-2 bg-[#2c3e50] mb-2 rounded-r-sm">
      <div className="bg-[#2c3e50] p-2 pt-1 flex flex-col gap-1.5 h-44">
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
                  isLink ? "hover:text-[#4da6a6] transition-colors cursor-pointer underline decoration-slate-600 underline-offset-4" : ""
                }`}
              >
                {item.value}
              </ContentTag>
            </div>
          );
        })}
      </div>
    </div>
  );
};