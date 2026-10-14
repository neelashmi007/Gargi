"use client";

import React, { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import { INITIAL_DREAMS, DreamItem } from "@/data/dreams";
import {
  Cloud,
  Star,
  Sparkles,
  Heart,
  Plus,
  Trash2,
  Edit2,
  Check,
  RotateCcw,
  Coffee,
  Camera,
  Compass,
  BookHeart,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function FutureDreamsPage() {
  const { favorites, toggleFavorite, isFavorite, unlockDiscovery, reducedMotion } = useApp();
  const [dreams, setDreams] = useState<DreamItem[]>(INITIAL_DREAMS);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");

  const STORAGE_KEY = "gargi_universe_custom_dreams_v1";

  // Load custom dreams from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setDreams(JSON.parse(saved));
      }
    } catch {}
  }, []);

  const saveDreams = (items: DreamItem[]) => {
    setDreams(items);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  };

  const handleAddDream = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newDream: DreamItem = {
      id: `dream-custom-${Date.now()}`,
      title: newTitle.trim(),
      description: newDesc.trim() || "A sweet wish for our shared tomorrow.",
      category: "forever",
      iconName: "star",
      isCustom: true,
    };

    saveDreams([newDream, ...dreams]);
    setNewTitle("");
    setNewDesc("");
    setIsAdding(false);

    if (!reducedMotion) {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#E9DDFB", "#F4A7C5", "#FFD6E7"],
      });
    }
  };

  const handleDeleteDream = (id: string) => {
    saveDreams(dreams.filter((d) => d.id !== id));
  };

  const startEdit = (dream: DreamItem) => {
    setEditingId(dream.id);
    setEditTitle(dream.title);
    setEditDesc(dream.description);
  };

  const handleSaveEdit = (id: string) => {
    saveDreams(
      dreams.map((d) => (d.id === id ? { ...d, title: editTitle, description: editDesc } : d))
    );
    setEditingId(null);
  };

  const handleResetDreams = () => {
    saveDreams(INITIAL_DREAMS);
  };

  const renderIcon = (name: DreamItem["iconName"]) => {
    switch (name) {
      case "coffee":
        return <Coffee className="w-5 h-5 text-deep-rose" />;
      case "camera":
        return <Camera className="w-5 h-5 text-deep-rose" />;
      case "compass":
        return <Compass className="w-5 h-5 text-deep-rose" />;
      case "book-heart":
        return <BookHeart className="w-5 h-5 text-deep-rose" />;
      case "star":
        return <Star className="w-5 h-5 text-deep-rose" />;
      default:
        return <Cloud className="w-5 h-5 text-deep-rose" />;
    }
  };

  return (
    <div className="space-y-8 animate-bloom-in">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cotton-candy text-deep-rose text-xs font-serif font-bold uppercase tracking-wider mb-2 shadow-xs">
          <Star className="w-4 h-4 fill-amber-300 text-amber-500" /> Starry Observations &amp; Whispers
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-deep-rose">
          Starry Observations — What I Notice About You
        </h1>
        <p className="text-xs sm:text-sm text-berry/85 mt-2 font-serif italic max-w-xl mx-auto leading-relaxed">
          &ldquo;A quiet, starry collection of things I notice, admire, and cherish about you—your strength, your gentleness, and the moments that belong to us.&rdquo;
        </p>

        {/* Action Controls */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setIsAdding(!isAdding)}
            className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-deep-rose hover:bg-berry text-white text-xs font-serif font-bold shadow-romantic transition-all active:scale-95"
          >
            <Plus className="w-4 h-4" /> Add a Thought or Wish
          </button>

          <button
            type="button"
            onClick={() => unlockDiscovery("disc-hidden-star")}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-warm-ivory border border-rose-pink/50 text-deep-rose text-xs font-serif font-semibold shadow-sm hover:bg-cotton-candy/40 transition-all"
          >
            <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-500" /> Stargazer Wish
          </button>

          <button
            type="button"
            onClick={handleResetDreams}
            className="text-xs text-berry/75 hover:text-deep-rose underline font-serif font-medium flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset Default Observations
          </button>
        </div>
      </div>

      {/* Add Dream Form */}
      {isAdding && (
        <form
          onSubmit={handleAddDream}
          className="max-w-xl mx-auto p-6 rounded-3xl glass-panel border-2 border-rose-pink shadow-romantic animate-bloom-in space-y-4"
        >
          <h3 className="text-lg font-serif font-bold text-deep-rose">Add a Wish to Our Dream Book</h3>
          <div>
            <label className="text-xs font-semibold text-berry/80 block mb-1">Dream Title:</label>
            <input
              type="text"
              placeholder="e.g. A Weekend Trip to the Rose Botanical Gardens"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              required
              className="w-full p-2.5 rounded-xl border border-rose-pink/50 text-xs text-berry bg-white focus:outline-none focus:ring-2 focus:ring-deep-rose"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-berry/80 block mb-1">Description / Thought:</label>
            <textarea
              rows={3}
              placeholder="What would make this memory sweet and special?"
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-rose-pink/50 text-xs text-berry bg-white focus:outline-none focus:ring-2 focus:ring-deep-rose"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-berry hover:text-deep-rose"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-1.5 rounded-full bg-deep-rose text-white text-xs font-serif font-bold shadow-sm"
            >
              Pin to Dream Book
            </button>
          </div>
        </form>
      )}

      {/* Dreams Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dreams.map((dream) => {
          const isFav = isFavorite("dreams", dream.id);
          const isEditing = editingId === dream.id;

          return (
            <div
              key={dream.id}
              className="p-6 rounded-3xl parchment-paper border-2 border-rose-pink/40 hover:border-deep-rose hover:shadow-romantic transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon & Actions */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-cotton-candy/80 flex items-center justify-center shadow-sm">
                    {renderIcon(dream.iconName)}
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => toggleFavorite("dreams", dream.id)}
                      className="p-1 hover:scale-110 transition-transform"
                      aria-label="Save dream"
                    >
                      <Heart className={`w-4 h-4 ${isFav ? "fill-deep-rose text-deep-rose" : "text-rose-pink"}`} />
                    </button>

                    <button
                      type="button"
                      onClick={() => startEdit(dream)}
                      className="p-1 text-berry/60 hover:text-deep-rose"
                      aria-label="Edit dream"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>

                    {dream.isCustom && (
                      <button
                        type="button"
                        onClick={() => handleDeleteDream(dream.id)}
                        className="p-1 text-berry/60 hover:text-red-500"
                        aria-label="Delete dream"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Content or Edit Form */}
                {isEditing ? (
                  <div className="space-y-2 mt-2">
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="w-full p-2 text-xs border rounded-lg font-bold"
                    />
                    <textarea
                      rows={2}
                      value={editDesc}
                      onChange={(e) => setEditDesc(e.target.value)}
                      className="w-full p-2 text-xs border rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => handleSaveEdit(dream.id)}
                      className="px-3 py-1 bg-deep-rose text-white text-xs rounded-full flex items-center gap-1 font-bold"
                    >
                      <Check className="w-3 h-3" /> Save Changes
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-deep-rose">
                      {dream.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-berry/85 leading-relaxed font-sans">
                      {dream.description}
                    </p>
                  </>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-rose-pink/20 flex items-center justify-between text-[10px] text-berry/60 font-semibold uppercase tracking-wider">
                <span>{dream.category.replace("-", " ")}</span>
                <span className="flex items-center gap-1 text-deep-rose font-serif">
                  <Sparkles className="w-3 h-3" /> Noticed with Love
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
