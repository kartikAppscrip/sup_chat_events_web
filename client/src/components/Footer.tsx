import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-center space-x-6">
          <Link href="/privacy">
            <a className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
          </Link>
          <Link href="/terms">
            <a className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-muted-foreground hover:text-primary transition-colors">
              Contact Us
            </a>
          </Link>
        </nav>
        <p className="text-center text-sm text-muted-foreground mt-4">
          © {new Date().getFullYear()} Sup? Chats & Events. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
