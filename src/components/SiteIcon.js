import logo from '..//images/b.png';

export default function NavBar() {
    return (
        <div className="block py-2 pr-4 pl-3">
            <a href="/" className="flex text-2xl no-underline text-grey-darkest hover:text-blue-dark">
                <img src={logo} className="site-logo sm:h-9 w-8 h-10" alt="logo" />
                <p className='pt-1'>ragging rights</p>
            </a>
        </div>
    )
}