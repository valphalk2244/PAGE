import Image from "next/image";
// import Link from "next/link";

export default function page3() {
    return (
        <div>
            <h1 className="text-6xl text-center">Page3</h1>
            <div className="flex justify-center">
                <Image src="/3.jpg" width={300} height={300} alt="eiei" />
            </div>
            {/* <div className="flex justify-center space-x-4">
            <ul className="flex justify-center space-x-4">
                <li className="border-2 hover:bg-red-100">
                <Link href="\page1">Page1</Link>
                </li>
                <li className="border-2 hover:bg-red-100">
                <Link href="\page2">Page2</Link>
                </li>
                <li className="border-2 hover:bg-red-100">
                <Link href="\page3">Page3</Link>
                </li>
            </ul>
            </div> */}
            <div className="flex justify-center">
                 <h1 className="text-6xl text-center">66162110377-4</h1>
            </div>
        </div>
    );
}