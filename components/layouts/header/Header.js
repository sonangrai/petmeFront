import {
  ChatNav,
  CreatePost,
  HeadRow,
  HeadStyle,
  SiteLogo,
} from "./styled/HeadStyle.styled";
import { Chat, Create } from "./logo";
import Link from "next/link";

const Header = () => {
  return (
    <HeadStyle>
      <HeadRow>
        <CreatePost>
          <Create />
        </CreatePost>
        <SiteLogo>
          <Link href="/">
            <a>Petgram</a>
          </Link>
        </SiteLogo>
        <ChatNav>
          <Link href="#!">
            <a>
              <Chat />
            </a>
          </Link>
        </ChatNav>
      </HeadRow>
    </HeadStyle>
  );
};

export default Header;
