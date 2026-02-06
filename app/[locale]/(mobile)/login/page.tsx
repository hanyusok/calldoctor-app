import LoginForm from "@/components/LoginForm";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function LoginPage() {
    const t = useTranslations('LoginPage');
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
            <div className="w-full max-w-sm flex flex-col items-center gap-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-primary-500 mb-2">{t('title')}</h1>
                    <p className="text-gray-500">{t('subtitle')}</p>
                </div>

                <div className="w-full bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h2 className="text-sm font-bold text-gray-900 mb-6 text-center">{t('heading')}</h2>

                    <LoginForm />

                    <div className="mt-6 text-center text-sm text-gray-500">
                        {t('no_account')}{' '}
                        <Link href="/signup" className="text-primary-600 font-semibold hover:underline">
                            {t('sign_up')}
                        </Link>
                    </div>

                    <p className="text-xs text-center text-gray-400 mt-4">
                        {t('disclaimer')}
                    </p>
                </div>
            </div>
        </div>
    );
}
