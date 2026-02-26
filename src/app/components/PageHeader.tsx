import Link from 'next/link';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
    return (
        <div className="bg-[#6a2875] text-white py-16 lg:py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -z-10 opacity-10">
                <div className="w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-4">
                <nav className="flex items-center gap-2 mb-6 text-sm font-medium text-white/80">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-white">{title}</span>
                </nav>

                <h1 className="text-4xl lg:text-5xl font-bold mb-4 capitalize">{title}</h1>
                {subtitle && (
                    <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}
