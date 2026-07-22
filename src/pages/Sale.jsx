import { BadgePercent, ArrowRight, Clock3, ShoppingBag, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/PorductContext';

const categoryOptions = ['all', "men's clothing", "women's clothing", 'jewelery', 'electronics'];
const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
];

const Sale = () => {
    const { products, loading } = useProducts();
    const { addToCart } = useCart();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('featured');

    const saleProducts = useMemo(() => {
        const filtered = (products || [])
            .filter((product) => product?.price && product.price <= 60)
            .map((product) => ({
                ...product,
                discountPercent: product.category?.includes('jewelery')
                    ? 25
                    : product.category?.includes('elect')
                        ? 30
                        : 20,
                salePrice: +(product.price * (1 - (product.category?.includes('jewelery') ? 0.25 : product.category?.includes('elect') ? 0.3 : 0.2))).toFixed(2),
            }))
            .filter((product) => selectedCategory === 'all' || product.category === selectedCategory);

        switch (sortBy) {
            case 'price-asc':
                return [...filtered].sort((a, b) => a.salePrice - b.salePrice);
            case 'price-desc':
                return [...filtered].sort((a, b) => b.salePrice - a.salePrice);
            case 'rating':
                return [...filtered].sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
            default:
                return [...filtered].sort((a, b) => b.discountPercent - a.discountPercent);
        }
    }, [products, selectedCategory, sortBy]);

    if (loading) {
        return (
            <main className="min-h-screen px-4 py-10 text-white sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl animate-pulse space-y-6">
                    <div className="h-24 rounded-3xl border border-white/10 bg-white/10" />
                    <div className="grid gap-6 lg:grid-cols-3">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="h-80 rounded-3xl border border-white/10 bg-white/5" />
                        ))}
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen px-4 py-8 text-white sm:px-6 lg:px-8">
            <section className="mx-auto max-w-7xl">
                <div className="rounded-3xl border border-white/10 bg-black/30 p-6 shadow-2xl shadow-black/40 backdrop-blur md:p-8 lg:p-10">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-2xl">
                            <h1 className="mt-4 text-4xl share-tech tracking-wider font-semibold leading-tight sm:text-5xl">
                                Fresh deals for your next wardrobe refresh.
                            </h1>
                            <p className="mt-4 font-[System-UI] max-w-xl text-xs sm:text-sm text-neutral-300">
                                Discover curated essentials with limited-time pricing, quick delivery, and easy add-to-bag checkout.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link
                                    to="/collection"
                                    className="inline-flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 font-medium text-white transition hover:bg-red-400"
                                >
                                    Shop the full collection
                                    <ArrowRight size={18} />
                                </Link>
                                <button
                                    onClick={() => saleProducts[0] && addToCart(saleProducts[0])}
                                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-medium text-neutral-100 transition hover:bg-white/20"
                                >
                                    <ShoppingBag size={18} />
                                    Add featured item
                                </button>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/10 p-4 sm:min-w-65">
                            <div className="flex items-center font-[System-UI] gap-2 text-xs tracking-wide text-red-400">
                                <Clock3 size={16} />
                                Flash sale ending soon
                                <br />
                                Shop Fast
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {[
                        { title: 'Free shipping', text: 'On orders above $120' },
                        { title: 'New drops', text: 'Fresh arrivals every Friday' },
                        { title: 'Limited stock', text: 'Best sellers move fast' },
                    ].map((item) => (
                        <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <div className="flex items-center gap-2 text-red-200">
                                <Sparkles size={16} />
                                <p className="font-semibold">{item.title}</p>
                            </div>
                            <p className="mt-2 text-sm text-neutral-300">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 rounded-3xl border border-white/10 bg-black/25 p-4 backdrop-blur sm:p-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between font-[System-UI]">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-red-200">Sale picks</p>
                            <h2 className="mt-1 text-2xl font-semibold sm:text-3xl">Browse the best deals</h2>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <label className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm text-neutral-200">
                                <span className="text-neutral-400">Category</span>
                                <select
                                    value={selectedCategory}
                                    onChange={(event) => setSelectedCategory(event.target.value)}
                                    className="bg-transparent outline-none"
                                >
                                    {categoryOptions.map((category) => (
                                        <option key={category} value={category} className="bg-neutral-900">
                                            {category === 'all' ? 'All' : category}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <label className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm text-neutral-200">
                                <span className="text-neutral-400">Sort</span>
                                <select
                                    value={sortBy}
                                    onChange={(event) => setSortBy(event.target.value)}
                                    className="bg-transparent outline-none"
                                >
                                    {sortOptions.map((option) => (
                                        <option key={option.value} value={option.value} className="bg-neutral-900">
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                    </div>

                    {saleProducts.length === 0 ? (
                        <div className="mt-8 rounded-2xl border border-dashed border-white/15 bg-white/5 p-8 text-center text-neutral-300">
                            No sale items match this selection yet.
                        </div>
                    ) : (
                        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                            {saleProducts.map((product) => (
                                <article key={product.id} className="group rounded-2xl border border-white/10 bg-neutral-900/70 p-4 transition hover:-translate-y-1 hover:border-red-400/40">
                                    <div className="flex items-center justify-between">
                                        <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-200">
                                            Save {product.discountPercent}%
                                        </span>
                                        <span className="text-xs text-neutral-400">{product.category}</span>
                                    </div>
                                    <div className="mt-4 flex h-56 items-center justify-center rounded-2xl bg-white/5 p-4">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <h3 className="mt-4 line-clamp-2 font-semibold text-neutral-100">{product.title}</h3>
                                    <div className="mt-3 flex items-center justify-between text-sm text-neutral-400">
                                        <span>{product.rating?.rate?.toFixed(1) || '4.7'} / 5</span>
                                        <span>{product.rating?.count || 120} sold</span>
                                    </div>
                                    <div className="mt-4 flex items-center justify-between">
                                        <div>
                                            <p className="text-lg font-semibold text-white">${product.salePrice}</p>
                                            <p className="text-sm text-neutral-500 line-through">${product.price}</p>
                                        </div>
                                        <button
                                            onClick={() => addToCart(product)}
                                            className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-100 transition hover:bg-red-500/20"
                                        >
                                            <ShoppingBag size={16} />
                                            Add
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Sale;