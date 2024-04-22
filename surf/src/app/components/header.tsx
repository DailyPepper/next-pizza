import Image from 'next/image';
import logo from '../../../public/logo.svg';
import Link from 'next/link';
const Header = () => {
    return ( 
        <header className='flex items-center gap-[6rem]'>
            <Image src={logo} alt="Логотип" />
            <div className='flex flex-row'>
                <ul className='flex gap-[5rem]'>
                    <li>
                        <Link href={''}>
                            Главная
                        </Link>
                    </li>
                    <li>
                        О нас
                    </li>
                    <li>
                        Программа
                    </li>
                    <li>
                        Акции
                    </li>
                    <li>
                        Отзывы
                    </li>
                    <li>
                        Контакты
                    </li>
                </ul>
            </div>
            <p>
                +7 (965) 333-333-33
            </p>
        </header>

     );
}
 
export default Header;