import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";

// Any component using this must follow this structure
interface Props {
    // children(name): can be anything React can render
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    // This basically wraps everything inside SidebarProvider
    return (
        <SidebarProvider>
            <DashboardSidebar />
            <main>
                {children}
            </main>
        </SidebarProvider>
    )
}

export default Layout;