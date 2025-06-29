import Navbar from '@/components/ui/Navbar';
import { FaGithub, FaXTwitter, FaDiscord } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';

export default function Contact() {
    return (
        <>
            <Navbar
                menuItems={[
                    { label: 'Home', href: '/' },
                    { label: 'About', href: '/about' },
                    { label: 'Contact', href: '/contact' },
                ]}
            />

            <div className="mt-24 px-4 sm:px-6 md:px-12 lg:px-28">
                <h1 className="text-4xl font-bold text-white mb-4">Contact</h1>
                <p className="text-base text-white max-w-2xl mb-6">
                    Feel free to reach out to me via the platforms below!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 text-white">
                    <a
                        href="https://github.com/ruskydev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-blue-400 transition"
                    >
                        <FaGithub size={20} />
                        GitHub
                    </a>

                    <a
                        href="https://x.com/ruskydev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-blue-400 transition"
                    >
                        <FaXTwitter size={20} />
                        X (Twitter)
                    </a>

                    <a
                        href="mailto:iamayaanalee@gmail.com"
                        className="flex items-center gap-2 hover:text-blue-400 transition"
                    >
                        <HiOutlineMail size={20} />
                        Email
                    </a>

                    <a
                        href="https://discord.com/users/969507085316399154"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-blue-400 transition"
                    >
                        <FaDiscord size={20} />
                        Discord
                    </a>
                </div>
            </div>
        </>
    );
}
