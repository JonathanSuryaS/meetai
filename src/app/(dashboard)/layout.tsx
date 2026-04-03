import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardNavbar } from "@/modules/dashboard/ui/components/dashboard-navbar";
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
            <main className="flex flex-col h-screen w-screen bg-muted">
                <DashboardNavbar />
                {children}
            </main>
        </SidebarProvider>
    )
}

export default Layout;