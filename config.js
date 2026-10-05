/* BUSINESS CONTROL BRAIN - runtime configuration (no secrets here).
   SNAPSHOT_URLS: every URL is tried; the snapshot with the NEWEST generated_at wins.
   A bundled copy (public_status.js, works from file://) is always a last-resort candidate.
   To switch to a no-redeploy refresh later, add/replace the first URL (see brain/ARCHITECTURE.md);
   no change to index.html is ever needed. A URL that does not exist yet fails silently and
   the page says so in section 13 ("Sources tried"). */
window.TL_CONFIG = {
  SNAPSHOT_URLS: [
    "https://catalinbirtum-lang.github.io/tidy-ledger-status/public_status.json",
    "./public_status.json"
  ],
  SNAPSHOT_STALE_HOURS: 6,
  REFETCH_MINUTES: 5
};
