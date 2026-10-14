"use client";

import React from "react";
import { AlertCircle, X } from "lucide-react";

interface ResetConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const ResetConfirmModal: React.FC<ResetConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-berry/40 backdrop-blur-sm animate-bloom-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reset-modal-title"
    >
      <div className="relative w-full max-w-md bg-warm-ivory rounded-3xl p-6 shadow-romantic-lg border-2 border-rose-pink text-center">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-berry hover:text-deep-rose hover:bg-cotton-candy/40 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-full bg-rose-pink/20 text-deep-rose flex items-center justify-center mx-auto mb-3">
          <AlertCircle className="w-6 h-6" />
        </div>

        <h3 id="reset-modal-title" className="text-xl font-serif font-bold text-deep-rose">
          Reset All Progress?
        </h3>
        <p className="text-xs sm:text-sm text-berry/80 mt-2">
          This will clear all saved discoveries, favourited letters, and garden blooms from your browser so you can experience everything freshly from the start.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-berry/30 text-berry hover:bg-cotton-candy/30 text-xs font-semibold transition-all"
          >
            Keep My Keepsakes
          </button>
          <button
            type="button"
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-5 py-2.5 rounded-full bg-deep-rose text-white hover:bg-berry text-xs font-semibold shadow-romantic transition-all"
          >
            Yes, Reset Fresh
          </button>
        </div>
      </div>
    </div>
  );
};
