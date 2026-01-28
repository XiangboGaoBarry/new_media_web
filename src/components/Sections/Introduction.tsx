import Image from 'next/image';
import { FC, memo } from 'react';
import { introductionData, socialLinks } from '../../data/data';

const Introduction: FC = memo(() => {
    const { name, description, imageSrc, statement } = introductionData;

    return (
        <section className="flex flex-col items-center justify-center py-16 bg-neutral-900 text-white" id="intro">
            <div className="container mx-auto px-4 text-center">
                <div className="relative h-40 w-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-orange-500 shadow-lg">
                    <Image
                        alt={name}
                        className="h-full w-full object-cover"
                        placeholder="blur"
                        src={imageSrc}
                    />
                </div>
                <h1 className="text-4xl font-bold mb-4">{name}</h1>
                <div className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">{description}</div>

                <div className="bg-neutral-800 p-8 rounded-lg shadow-xl max-w-3xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-4 text-orange-400">Why I am in this class</h2>
                    <div className="text-left text-neutral-300">
                        {statement}
                    </div>
                </div>

                <div className="flex justify-center gap-6 mt-10">
                    {socialLinks.map(({ label, Icon, href }) => (
                        <a
                            className="text-neutral-400 hover:text-orange-500 transition-colors"
                            href={href}
                            key={label}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Icon className="h-8 w-8" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
});

Introduction.displayName = 'Introduction';
export default Introduction;
