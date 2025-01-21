import Link from 'next/link';

const menus = [
    { name: "Home", path: "#" },
    { name: "About us", path: "#" },
    { name: "Page1", path: "\page1" },
    { name: "Page2", path: "\page2" },
    { name: "Page3", path: "\page3" },
    { name: "fruit", path: "\fruit" },
]

export default function Navbar() {
    return (
        <div className='flex justify-between p-4 bg-gray-200'>
            <div>
            <h1>Logo</h1>
            </div>
            <div>
            <ul className='flex justify-end space-x-4'>
                <li ><Link href="#">Home</Link></li>
                <li ><Link href="#">About us</Link></li>
                <li ><Link href="\page1">Page1</Link></li>
                <li ><Link href="\page2">Page2</Link></li>
                <li ><Link href="\page3">Page3</Link></li>
                <li ><Link href="\fruit">fruit</Link></li>
            </ul>
            </div>
        </div>
    );
}