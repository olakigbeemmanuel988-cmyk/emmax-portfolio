import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <Link to="/" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-full">Return Home</Link>
      </div>
    </div>
  );
}