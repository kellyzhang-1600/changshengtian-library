"use client";

export function CitationBox({ citations }: { citations: Record<string, string> }) {
  return (
    <div className="space-y-3 border border-archive/12 bg-parchment p-5">
      {Object.entries(citations).map(([style, value]) => (
        <div key={style}>
          <div className="mb-1 text-xs uppercase tracking-[0.18em] text-gold">{style}</div>
          <button
            type="button"
            onClick={() => navigator.clipboard.writeText(value)}
            className="w-full border border-archive/10 bg-vellum p-3 text-left text-sm leading-6 text-ink hover:border-gold"
            title="点击复制"
          >
            {value}
          </button>
        </div>
      ))}
    </div>
  );
}
