import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // Check if we are on the same page or different page
    if (pathname !== prevPathname.current) {
      // Scroll to top only when the route changes (new page)
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Update prevPathname to current pathname
    prevPathname.current = pathname;
  }, [pathname]);

  return null;
}