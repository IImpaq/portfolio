import { FiGithub, FiLinkedin } from "react-icons/fi";
import { TbBrandBluesky } from "react-icons/tb";
import { SocialLink } from "@/types";
import { SiInstagram, SiXing } from "react-icons/si";

export const socials: SocialLink[] = [
  {
    icon: FiGithub,
    href: "https://github.com/IImpaq",
    label: "GitHub",
  },
  {
    icon: TbBrandBluesky,
    href: "https://bsky.app/profile/iimpaq.bsky.social",
    label: "Bluesky",
  },
  {
    icon: SiInstagram,
    href: "https://www.instagram.com/mgugacs/",
    label: "Instagram",
  },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/gugacs/",
    label: "LinkedIn",
  },
  {
    icon: SiXing,
    href: "https://www.xing.com/profile/Marcus_Gugacs",
    label: "Xing",
  },
];
