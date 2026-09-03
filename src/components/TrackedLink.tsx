"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { analytics, type ContactChannel, type ContactPlacement } from "@/lib/analytics";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  channel: ContactChannel;
  placement: ContactPlacement;
};

/**
 * Plain <a> that fires a `contact_click` event on click. Meant for tel:/mailto:/
 * WhatsApp links; usable from server components. Styling is left to the caller.
 */
export function TrackedLink({ channel, placement, onClick, children, ...rest }: TrackedLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    analytics.contactClick(channel, placement);
    onClick?.(event);
  }
  return (
    <a {...rest} onClick={handleClick}>
      {children}
    </a>
  );
}
