'use client';

import { useActionState } from 'react';
import { authenticate } from '@/app/lib/auth-actions';
import { signIn } from "next-auth/react"
import { useTranslations, useLocale } from "next-intl";

export default function LoginForm() {
    const t = useTranslations('LoginForm');
    const locale = useLocale();
    const [errorMessage, action, isPending] = useActionState(authenticate.bind(null, locale), undefined);

    return (
        <div className="w-full flex flex-col gap-4">
            <form action={action} className="flex flex-col gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('email_label')}</label>
                    <input
                        name="email"
                        type="email"
                        required
                        placeholder={t('email_placeholder')}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('password_label')}</label>
                    <input
                        name="password"
                        type="password"
                        required
                        placeholder={t('password_placeholder')}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                </div>

                {errorMessage && (
                    <div className="text-red-500 text-sm">{errorMessage}</div>
                )}

                <button
                    disabled={isPending}
                    type="submit"
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-4 rounded-xl transition-colors disabled:opacity-50"
                >
                    {isPending ? t('signing_in') : t('sign_in')}
                </button>
            </form>

            <div className="relative flex items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink-0 mx-4 text-gray-400 text-xs">{t('or')}</span>
                <div className="flex-grow border-t border-gray-200"></div>
            </div>

            <button
                onClick={() => signIn("kakao", { callbackUrl: `/${locale}/profile` })}
                className="w-full flex items-center justify-center gap-2 bg-[#FEE500] hover:bg-[#FDD835] text-[#191919] font-medium py-3 px-4 rounded-xl transition-colors"
                type="button"
            >
                <svg viewBox="0 0 24 24" width="24" height="24" className="w-5 h-5">
                    <path fill="currentColor" d="M12 3C5.373 3 0 7.373 0 12.768c0 3.657 2.453 6.903 6.138 8.497-.247.935-.91 3.325-.944 3.513-.048.272.102.327.353.155 1.517-1.042 3.3-2.31 4.316-3.033.7.098 1.423.15 2.164.15 6.627 0 12-4.373 12-9.768S18.627 3 12 3z" />
                </svg>
                {t('kakao_login')}
            </button>

            <button
                onClick={() => signIn("credentials", { action: "guest", callbackUrl: `/${locale}/profile` })}
                className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium py-3 px-4 rounded-xl transition-colors border border-gray-200"
                type="button"
            >
                {t('guest_login')}
            </button>
        </div>
    );
}
