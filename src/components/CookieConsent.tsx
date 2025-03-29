import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

export function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");

    if (!hasAcceptedCookies) {
      // Show cookie consent after a short delay
      const timer = setTimeout(() => {
        setOpen(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setOpen(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px] p-4 md:p-6">
        <DialogHeader>
          <DialogTitle className="text-lg md:text-xl">
            Cookie Settings
          </DialogTitle>
          <DialogDescription className="text-sm md:text-base">
            We use cookies to enhance your browsing experience, serve
            personalized ads or content, and analyze our traffic. By clicking
            "Accept All", you consent to our use of cookies.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 md:gap-4 py-3 md:py-4">
          <div className="grid grid-cols-1 items-start gap-2 md:gap-4">
            <div className="col-span-1">
              <p className="text-xs md:text-sm text-gray-500">
                We use necessary cookies that help make our website usable by
                enabling basic functions like page navigation and access to
                secure areas of the website. The website cannot function
                properly without these cookies.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-2 md:gap-4">
            <div className="col-span-1">
              <p className="text-xs md:text-sm text-gray-500">
                We also use marketing cookies that may be set through our site
                by our advertising partners. They may be used by those companies
                to build a profile of your interests and show you relevant
                advertisements on other sites.
              </p>
            </div>
          </div>
        </div>
        <DialogFooter className="flex flex-col sm:flex-row sm:justify-end gap-2 pt-2 md:pt-4">
          <Button
            variant="outline"
            size="sm"
            className="text-xs md:text-sm"
            onClick={handleDecline}
          >
            Decline All
          </Button>
          <Button
            size="sm"
            className="text-xs md:text-sm"
            onClick={handleAccept}
          >
            Accept All
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
