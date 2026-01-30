'use client'

import { signIn } from "next-auth/react"

export default function LoginButton() {
    return (
        <button
            onClick={() => signIn("kakao", { callbackUrl: "/" })}
            className="w-full flex items-center justify-center gap-2 bg-[#FEE500] hover:bg-[#FDD835] text-[#191919] font-medium py-3 px-4 rounded-xl transition-colors"
        >
            <svg viewBox="0 0 24 24" width="24" height="24" className="w-5 h-5">
                <path fill="currentColor" d="M12 3C5.373 3 0 7.373 0 12.768c0 3.657 2.453 6.903 6.138 8.497-.247.935-.91 3.325-.944 3.513-.048.272.102.327.353.155 1.517-1.042 3.3-2.31 4.316-3.033.7.098 1.423.15 2.164.15 6.627 0 12-4.373 12-9.768S18.627 3 12 3z" />
            </svg>
            Login with Kakao
        </button>
    )
}
