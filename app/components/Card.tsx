import Image from "next/image";
import Link from "next/link";


export default function Card({src,title}: {src: string, title: string}) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Image src={src} width={100} height={100} alt={title} />
            <div>{title}</div>
            <div><Link href="#">Click</Link></div>
        </div>
    );
}