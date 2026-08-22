import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[50vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">404</p>
      <h1 className="mt-3 text-3xl font-semibold">Page not found</h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        That route does not exist. Head back to the home page to keep exploring Pandagentic.
      </p>
      <Button asChild className="mt-8">
        <Link to="/">Back home</Link>
      </Button>
    </div>
  );
}
