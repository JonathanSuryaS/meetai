import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import SignUpView from "@/modules/auth/ui/views/sign-up-view"

const Page = async () => {
    const session = await auth.api.getSession({
            headers: await headers(), // Get request header (cookies are inside headers)
          })
          // Basically asking: "Hey Auth system, is this request coming from a logged-in user?"
        
          if (!!session){
            redirect("/")
          }
    return <SignUpView/>
}

export default Page