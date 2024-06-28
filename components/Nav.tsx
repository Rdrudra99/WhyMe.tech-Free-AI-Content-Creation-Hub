import React from "react";

const Nav = () => {
  return (
    <nav className="relative hidden h-screen flex-none border-r z-10  md:block w-72">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="mt-3 space-y-1">
            <nav className="grid items-start gap-2">
              <a
                className="flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground bg-accent"
                data-state="closed"
                href="/dashboard"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="ml-3 size-5"
                >
                  <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                  <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                  <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                  <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                </svg>
                <span className="mr-2 truncate">Dashboard</span>
              </a>
              <a
                className="flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transparent"
                data-state="closed"
                href="/dashboard/user"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="ml-3 size-5"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span className="mr-2 truncate">User</span>
              </a>
              <a
                className="flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transparent"
                data-state="closed"
                href="/dashboard/employee"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="ml-3 size-5"
                >
                  <path d="M14 19a6 6 0 0 0-12 0"></path>
                  <circle cx="8" cy="9" r="4"></circle>
                  <line x1="17" x2="22" y1="8" y2="13"></line>
                  <line x1="22" x2="17" y1="8" y2="13"></line>
                </svg>
                <span className="mr-2 truncate">Employee</span>
              </a>
              <a
                className="flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transparent"
                data-state="closed"
                href="/dashboard/profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="ml-3 size-5"
                >
                  <circle cx="12" cy="8" r="5"></circle>
                  <path d="M20 21a8 8 0 1 0-16 0"></path>
                </svg>
                <span className="mr-2 truncate">Profile</span>
              </a>
              <a
                className="flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transparent"
                data-state="closed"
                href="/dashboard/kanban"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="ml-3 size-5"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M11 9h4a2 2 0 0 0 2-2V3"></path>
                  <circle cx="9" cy="9" r="2"></circle>
                  <path d="M7 21v-4a2 2 0 0 1 2-2h4"></path>
                  <circle cx="15" cy="15" r="2"></circle>
                </svg>
                <span className="mr-2 truncate">Kanban</span>
              </a>
              <a
                className="flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transparent"
                data-state="closed"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="ml-3 size-5"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10 17 15 12 10 7"></polyline>
                  <line x1="15" x2="3" y1="12" y2="12"></line>
                </svg>
                <span className="mr-2 truncate">Login</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
