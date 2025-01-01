import { Home, LayoutDashboard, FileText, User, Wallet, Settings, LogOut } from 'lucide-react'; // Correct imports
import { Sidebar, SidebarBody, SidebarLink } from "@/components/sidebar"; // Ensure Sidebar components are imported

const SidebarLinks = () => {
  const sidebarLinks = [
    {
      href: "/internalhome",
      label: "Home",
      icon: <Home className="w-6 h-6" />,
    },
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard className="w-6 h-6" />,
    },
    {
      href: "/empTaskList",
      label: "Tasks",
      icon: <FileText className="w-6 h-6" />,
      children: [
        { href: "/tasks/data-labeling", label: "Data Labeling" },
        { href: "/tasks/thumbnail-rating", label: "Thumbnail Rating" },
      ],
    },
    {
      href: "/userprofile",
      label: "Profile",
      icon: <User className="w-6 h-6" />,
    },
    { href: "/wallet", label: "Wallet", icon: <Wallet className="w-6 h-6" /> },
    {
      href: "/settings",
      label: "Settings",
      icon: <Settings className="w-6 h-6" />,
    },
    { href: "/logout", label: "Logout", icon: <LogOut className="w-6 h-6" /> },
  ];

  return (
    <Sidebar>
      <SidebarBody>
        {/* Logo */}
        <div className="flex justify-center py-4">
          <img src="/images/logo.png" alt="Logo" className="w-20 h-auto mb-8 mt-5" />
        </div>

        {/* Sidebar Links - Always Open */}
        {sidebarLinks.map((link, index) => (
          <SidebarLink key={index} link={link} />
        ))}
      </SidebarBody>
    </Sidebar>
  );
};

export default SidebarLinks;
