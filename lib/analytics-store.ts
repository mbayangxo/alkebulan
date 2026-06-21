// In-memory store analytics — replace with Supabase table before production
// Table: store_analytics(slug, total_views, total_orders, daily jsonb, last_view_at, last_order_at)

interface DailyCount {
  date: string; // YYYY-MM-DD
  views: number;
}

export interface SiteAnalytics {
  slug: string;
  totalViews: number;
  totalOrders: number;
  dailyViews: DailyCount[]; // last 30 days, newest first
  lastViewAt?: string;
  lastOrderAt?: string;
}

const store = new Map<string, SiteAnalytics>();

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function base(slug: string): SiteAnalytics {
  return store.get(slug) ?? { slug, totalViews: 0, totalOrders: 0, dailyViews: [] };
}

export const analyticsDb = {
  recordView(slug: string): void {
    const a = base(slug);
    const d = today();
    const entry = a.dailyViews.find(x => x.date === d);
    if (entry) {
      entry.views++;
    } else {
      a.dailyViews = [{ date: d, views: 1 }, ...a.dailyViews].slice(0, 30);
    }
    store.set(slug, { ...a, totalViews: a.totalViews + 1, lastViewAt: new Date().toISOString() });
  },

  recordOrder(slug: string): void {
    const a = base(slug);
    store.set(slug, { ...a, totalOrders: a.totalOrders + 1, lastOrderAt: new Date().toISOString() });
  },

  get(slug: string): SiteAnalytics {
    return base(slug);
  },
};
