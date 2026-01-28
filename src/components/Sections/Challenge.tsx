import { FC, memo } from 'react';
import { challengeData } from '../../data/data';

const Challenge: FC = memo(() => {
    const { description } = challengeData;

    return (
        <section className="py-20 bg-neutral-900 text-neutral-300" id="challenge">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl font-bold text-center mb-10 text-white">Digital Challenge</h2>

                <div className="bg-neutral-800 p-8 md:p-12 rounded-2xl shadow-2xl border border-neutral-700">
                    <div className="prose prose-invert max-w-none prose-lg">
                        {description}
                    </div>
                </div>
            </div>
        </section>
    );
});

Challenge.displayName = 'Challenge';
export default Challenge;
