import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

export default function ProfileLoading() {
    return (
        <div className="bg-gray-50 min-h-screen pb-24">
            <Header />

            {/* Profile Header Skeleton */}
            <div className="bg-white px-5 pt-4 pb-6 mb-2">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gray-200 animate-pulse" />
                    <div className="space-y-2">
                        <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
                        <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                    </div>
                </div>
            </div>

            <div className="px-5 space-y-5">
                {/* Personal Info Form Skeleton */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                    <div className="h-6 w-1/3 bg-gray-200 rounded animate-pulse mb-4" />
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="space-y-2">
                            <div className="h-4 w-1/4 bg-gray-200 rounded animate-pulse" />
                            <div className="h-12 w-full bg-gray-200 rounded-xl animate-pulse" />
                        </div>
                    ))}
                </div>

                {/* Insurance Card Skeleton */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 h-40 animate-pulse" />

                {/* Family List Skeleton */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 h-40 animate-pulse" />
            </div>

            <BottomNav />
        </div>
    );
}
