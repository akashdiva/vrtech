
import React, { useEffect } from 'react';
import { CheckCircle2, XCircle, X } from 'lucide-react';

interface ToastProps {
    message: string;
    type: 'success' | 'error';
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed bottom-8 right-8 z-50 animate-slide-up">
            <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-xl border ${type === 'success'
                    ? 'bg-blue-600/95 border-blue-400/30 text-white'
                    : 'bg-red-600/95 border-red-400/30 text-white'
                }`}>
                {type === 'success' ? (
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                ) : (
                    <XCircle className="w-6 h-6 flex-shrink-0" />
                )}
                <p className="font-bold text-sm">{message}</p>
                <button
                    onClick={onClose}
                    className="ml-2 hover:opacity-70 transition-opacity"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}} />
        </div>
    );
};

export default Toast;
