import brlogo from '..//images/br-logo.png';

export default function NavBar() {
    return (
        <div className="block py-2 pr-4 pl-3">
            <a href="/" className="flex text-2xl no-underline text-grey-darkest hover:text-blue-dark">
                <img src={brlogo} className="site-logo" alt="dlogo" />
            </a>
        </div>
    )
}