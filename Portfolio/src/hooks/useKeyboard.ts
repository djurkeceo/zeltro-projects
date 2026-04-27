import { useEffect } from 'react';

interface KeyboardHandlers {
  onLeft?: () => void;
  onRight?: () => void;
  onEscape?: () => void;
}

export function useKeyboard(handlers: KeyboardHandlers, enabled: boolean = true) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' && handlers.onLeft) {
        handlers.onLeft();
      } else if (event.key === 'ArrowRight' && handlers.onRight) {
        handlers.onRight();
      } else if (event.key === 'Escape' && handlers.onEscape) {
        handlers.onEscape();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlers, enabled]);
}
