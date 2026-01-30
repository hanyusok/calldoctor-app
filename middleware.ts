import { auth } from "@/auth"

// Currently just allowing everything, but establishing the structure.
// In a real app, you can redirect if !req.auth 
export default auth((req) => {
    // console.log(req.auth) // User session
})

// Optionally, don't invoke Middleware on some paths
// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
