import {
  useMatch,
  useResolvedPath,
  Link as ReactRouterLink,
  type LinkProps as ReactRouterLinkProps,
} from 'react-router-dom';
import React from 'react';

interface LinkProps extends ReactRouterLinkProps {
  className?: string;
  activeClassName?: string;
  children: React.ReactNode;
}

export function Link({
  to,
  children,
  className = '',
  activeClassName = '',
  ...props
}: LinkProps) {
  const resolvedPath = useResolvedPath(to);

  const match = useMatch({
    path: resolvedPath.pathname,
    end: resolvedPath.pathname === '/', 
  });

  const finalClassName = [className, match ? activeClassName : '']
    .filter(Boolean)
    .join(' ');

  return (
    <ReactRouterLink to={to} className={finalClassName} {...props}>
      {children}
    </ReactRouterLink>
  );
}
