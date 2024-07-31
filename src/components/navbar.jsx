import { Cat } from 'lucide-react';

function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full bg-rose-600 px-4 lg:px-6 py-2.5 z-50">
            <nav className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <span className="flex items-center">
                    <Cat className="w-7 h-7 ml-8 mr-3 text-zinc-200" strokeWidth="2" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-zinc-200">CatMessenger</span>
                </span>
                {/* <div className="flex items-center lg:order-2">
                    <a href="https://luanrodrigues.site" target="_blank" className="text-indigo-300 font-medium rounded-lg hover:underline text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">@Luan Rodrigues</a>
                </div>
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    Menu items go here 
                </div> */}
            </nav>
        </header>
    );
}

export default Navbar;
