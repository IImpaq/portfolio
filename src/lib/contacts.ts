import { Contact } from "@/types";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiXing } from "react-icons/si";
import { TbBrandBluesky } from "react-icons/tb";

export const contacts: Contact[] = [
  {
    icon: FiGithub,
    href: "https://github.com/IImpaq",
    label: "GitHub",
    username: "@IImpaq",
  },
  {
    icon: TbBrandBluesky,
    href: "https://bsky.app/profile/iimpaq.bsky.social",
    label: "Bluesky",
    username: "@iimpaq.bsky.social",
  },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/gugacs/",
    label: "LinkedIn",
    username: "@gugacs",
  },
  {
    icon: SiXing,
    href: "https://www.xing.com/profile/Marcus_Gugacs",
    label: "Xing",
    username: "@Marcus_Gugacs",
  },
  {
    icon: FiMail,
    href: "mailto:iimpaq@proton.me",
    label: "Email",
    username: "iimpaq@proton.me",
  },
];
