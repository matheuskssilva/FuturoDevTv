import Background from '../../assets/Background/backgroundImage.svg'
import Facebook from '../../assets/Icons/facebook.svg'
import Twitter from '../../assets/Icons/twitter.svg'
import Youtube from '../../assets/Icons/youtube.svg'
import Pinterest from '../../assets/Icons/pinterest.svg'
import SearchIcon from '../../assets/Search Icon.svg'

import Hero from './hero'


import { HeaderGlobal, Icons, Images, Link, Links, Search, Titulo } from './stylesHeader'
import ResponsiveMenu from './menuMobile'




const Header = () => {


    return (
        <HeaderGlobal>
            <ResponsiveMenu />
            <Images src={Background} alt="Background Header" />
            <Links>
                <Titulo>FUTURO DEV TV</Titulo>
                <Link>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Article</a>
                    </li>
                    <li>
                        <a href="#">Contact US</a>
                    </li>
                    <Icons>
                        <img src={Facebook} alt="Icon Facebook" />
                        <img src={Twitter} alt="Icon Twitter" />
                        <img src={Youtube} alt="Icon Youtube" />
                        <img src={Pinterest} alt="Icon Pinterest" />
                    </Icons>
                    <Search src={SearchIcon} alt="Icon Search" />
                </Link>
            </Links>
            <Hero />
        </HeaderGlobal>
    )
}

export default Header
