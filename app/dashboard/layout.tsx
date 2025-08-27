import HeaderDashboard from "@/components/views/dashboard/HeaderDashboard";
import Sidebar from "@/components/views/sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      {/* SidebarLayout */}
      <div className="w-64 p-4 bg-white shadow-sm">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <HeaderDashboard />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
