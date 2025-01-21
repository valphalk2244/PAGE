import Link from 'next/link';

const menus = [
    { name: "Home", path: "#" },
    { name: "About us", path: "#" },
    { name: "Page1", path: "/page1" },
    { name: "Page2", path: "/page2" },
    { name: "Page3", path: "/page3" },
    { name: "fruit", path: "/fruit" },
];

export default function Navbar() {
    return (
        <div className='flex justify-between p-4 bg-gray-200'>
            <div>
                <img src="/5.png" alt="Logo" className="h-8 w-8" />
            </div>
            <div>
                <ul className='flex justify-end space-x-4'>
                    {menus.map((menu, index) => (
                        <li key={index} className="border-1 hover:bg-blue-500">
                            <Link href={menu.path}>{menu.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}