import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { SignInView } from "@/modules/auth/ui/views/sign-in-view"
import { redirect } from "next/navigation"

const Page = async () => {
    // Check the if the user logged in 
    const session = await auth.api.getSession({
        headers: await headers(), // Get request header (cookies are inside headers)
      })
      // Basically asking: "Hey Auth system, is this request coming from a logged-in user?"
    
      if (!!session){
        redirect("/")
      }

    console.log("Sign In View")
    return <SignInView/>
}

export default Page