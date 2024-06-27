import {
  DownloadIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

function SocialLinks({ color }) {
  return (
    <>
      <a
        href="https://www.linkedin.com/in/ashwin-baskaran-75b90519a/"
        target="_blank"
      >
        <LinkedInLogoIcon color={color} height={28} width={28} />
      </a>
      <a href="https://github.com/AshwinB98" target="_blank">
        <GitHubLogoIcon color={color} height={28} width={28} />
      </a>
      <a href="">
        <DownloadIcon color={color} height={28} width={28} />
      </a>
    </>
  );
}

export default SocialLinks;
