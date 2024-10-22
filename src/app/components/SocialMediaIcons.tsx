import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaIcons = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faSquareFacebook}
          className="text-blue-600 text-8xl"
        />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-pink-600 text-8xl"
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
