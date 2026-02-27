import * as React from 'react';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    bgClassName?: string;
}

export function PageHeader({ title, subtitle, bgClassName = "bg-[#6a2875]" }: PageHeaderProps) {
    return (
        <div className={`${bgClassName} text-white py-16 lg:py-24 relative overflow-hidden`}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -z-10 opacity-10">
                <div className="w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 capitalize mx-auto">{title}</h1>
                {subtitle && (
                    <p className="text-lg text-white/90 max-w-2xl leading-relaxed mx-auto">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}
