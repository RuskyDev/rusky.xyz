import { useRouter } from 'next/router';
import Navbar from '@/components/ui/Navbar';
import Button from '@/components/ui/Button';

export default function Home() {
    const router = useRouter();

    return (
        <>
            <Navbar
                menuItems={[
                    { label: 'Home', href: '/' },
                    { label: 'About', href: '/about' },
                    { label: 'Contact', href: '/contact' },
                ]}
            />

            <div className="flex items-center justify-center min-h-screen text-center">
                <div>
                    <h1 className="text-3xl text-white font-bold mb-2">
                        Hi, I'm{' '}
                        <span title="Also known as Rusky on the internet." className="underline decoration-dotted cursor-help">
                            Ayaan
                        </span>
                        !
                    </h1>

                    <h2 className="text-xl text-gray-300 mb-4">I build code that works for web, mobile, desktop, and beyond.</h2>
                    <Button onClick={() => router.push('/about')}>
                        Learn more
                    </Button>
                </div>
            </div>
        </>
    );
}
