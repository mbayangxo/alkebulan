import { Nav } from "@/app/components/nav";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Nav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h1 className="font-display text-4xl font-bold text-ink mb-4">Admin Dashboard</h1>
        <p className="text-muted">Research and verification interface — coming soon.</p>
      </div>
    </div>
  );
}
