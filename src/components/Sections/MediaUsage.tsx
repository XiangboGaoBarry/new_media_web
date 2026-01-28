import { FC, memo } from 'react';
import { mediaData } from '../../data/data';

const MediaUsage: FC = memo(() => {
    const { consumer, generator } = mediaData;

    return (
        <section className="py-16 bg-neutral-100" id="media">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-neutral-800">Media Usage</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Consumer Column */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-semibold mb-6 text-blue-600 flex items-center gap-2">
                            Consumer
                            <span className="text-sm font-normal text-neutral-500 bg-neutral-100 px-2 py-1 rounded ml-2">Content I use</span>
                        </h3>
                        <div className="space-y-6">
                            {consumer.map((category) => (
                                <div key={category.name}>
                                    <h4 className="font-bold text-lg text-neutral-700 mb-2 border-b pb-1 border-neutral-200">{category.name}</h4>
                                    <ul className="space-y-3">
                                        {category.items.map((item, idx) => (
                                            <li key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between bg-neutral-50 p-3 rounded hover:bg-neutral-100 transition shadow-sm">
                                                <span className="font-medium text-neutral-800">{item.name}</span>
                                                <div className="flex gap-2 text-xs text-neutral-500 mt-1 sm:mt-0">
                                                    {item.subCategory && <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded border border-blue-100">{item.subCategory}</span>}
                                                    {item.device && <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded border border-emerald-100">{item.device}</span>}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Generator Column */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-semibold mb-6 text-orange-600 flex items-center gap-2">
                            Generator
                            <span className="text-sm font-normal text-neutral-500 bg-neutral-100 px-2 py-1 rounded ml-2">Content I create</span>
                        </h3>
                        <div className="space-y-6">
                            {generator.map((category) => (
                                <div key={category.name}>
                                    <h4 className="font-bold text-lg text-neutral-700 mb-2 border-b pb-1 border-neutral-200">{category.name}</h4>
                                    <ul className="space-y-3">
                                        {category.items.map((item, idx) => (
                                            <li key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between bg-neutral-50 p-3 rounded hover:bg-neutral-100 transition shadow-sm">
                                                <span className="font-medium text-neutral-800">{item.name}</span>
                                                <div className="flex gap-2 text-xs text-neutral-500 mt-1 sm:mt-0">
                                                    {item.subCategory && <span className="bg-orange-50 text-orange-600 px-2 py-0.5 rounded border border-orange-100">{item.subCategory}</span>}
                                                    {item.device && <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded border border-emerald-100">{item.device}</span>}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

MediaUsage.displayName = 'MediaUsage';
export default MediaUsage;
