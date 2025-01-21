// import Link from "next/link";

export default function Footer() {
    return (
        <div>
        <footer style={{ textAlign: 'center', marginTop: '20px', position: 'fixed', bottom: '0', width: '100%' }}>
            <p>&copy; 2023 Your Company. All rights reserved.</p>
            <p>
            <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
            </p>
        </footer>
        </div>
    );
}