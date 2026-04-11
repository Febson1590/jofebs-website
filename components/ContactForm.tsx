"use client";
import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed to send");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to send");
    } finally {
      setTimeout(() => setStatus((s) => (s === "success" || s === "error" ? "idle" : s)), 5000);
    }
  };

  const inputClasses =
    "w-full bg-[#071528] border border-white/10 rounded-lg px-4 py-3 text-[14px] text-white placeholder:text-[#6b87ad] focus:outline-none focus:border-[#3B82F6] transition-colors";
  const labelClasses =
    "font-mono text-[10px] text-[#60A5FA] tracking-[0.14em] uppercase block mb-2";

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8">
      <div className="mb-4">
        <label className={labelClasses}>Your Name</label>
        <input
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          placeholder="John Doe"
          className={inputClasses}
        />
      </div>

      <div className="mb-4">
        <label className={labelClasses}>Email Address</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          placeholder="you@example.com"
          className={inputClasses}
        />
      </div>

      <div className="mb-5">
        <label className={labelClasses}>Message</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          rows={6}
          placeholder="Tell us about your project — vessel type, size, timeline…"
          className={`${inputClasses} resize-y`}
        />
      </div>

      {error && (
        <div className="mb-4 text-[13px] text-red-300 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
          {error}
        </div>
      )}
      {status === "success" && (
        <div className="mb-4 text-[13px] text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-4 py-3">
          Message received. We&apos;ll get back to you within 24 hours.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
