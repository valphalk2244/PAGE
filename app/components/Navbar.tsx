import Link from 'next/link';

export default function Page() {
    return (
        <div>
            <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
                <li style={{ marginRight: '20px' }}><Link href="#">Home</Link></li>
                <li style={{ marginRight: '20px' }}><Link href="#">About us</Link></li>
                <li style={{ marginRight: '20px' }}><Link href="\page1">Page1</Link></li>
                <li style={{ marginRight: '20px' }}><Link href="\page2">Page2</Link></li>
                <li style={{ marginRight: '20px' }}><Link href="\page3">Page3</Link></li>
                <li style={{ marginRight: '20px' }}><Link href="\fruit">fruit</Link></li>
            </ul>
        </div>
    );
}