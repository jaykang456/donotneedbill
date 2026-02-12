import { useState, useEffect } from 'react';
import { ChevronLeft, ReceiptText, XCircle, CheckCircle2, MessageCircleQuestion } from 'lucide-react';

const MODES = {
    NONE: 'none',
    REFUSE: 'refuse',
    REQUEST: 'request',
    OPEN: 'open',
    NO_POINTS: 'no_points',
    NO_SAVING: 'no_saving',
};

const MESSAGES = {
    [MODES.REFUSE]: {
        text: "영수증은 괜찮습니다",
        desc: "정중한 거절",
        color: "bg-zinc-800 text-zinc-100",
        icon: <XCircle size={48} className="mb-4 text-zinc-400" />,
        fullColor: "bg-slate-950 text-white",
    },
    [MODES.REQUEST]: {
        text: "영수증 부탁드립니다",
        desc: "명확한 요청",
        color: "bg-zinc-100 text-zinc-900 border border-zinc-300",
        icon: <ReceiptText size={48} className="mb-4 text-zinc-600" />,
        fullColor: "bg-white text-black",
    },
    [MODES.NO_POINTS]: {
        text: "포인트 없습니다",
        desc: "간결한 답변",
        color: "bg-zinc-800 text-zinc-100",
        icon: <XCircle size={48} className="mb-4 text-zinc-500" />,
        fullColor: "bg-zinc-900 text-white",
    },
    [MODES.NO_SAVING]: {
        text: "적립 없습니다",
        desc: "간결한 답변",
        color: "bg-zinc-800 text-zinc-100",
        icon: <XCircle size={48} className="mb-4 text-zinc-500" />,
        fullColor: "bg-zinc-950 text-white",
    },
    [MODES.OPEN]: {
        text: "모든 질문 괜찮습니다",
        desc: "상태 공유",
        color: "bg-zinc-800 text-zinc-100",
        icon: <MessageCircleQuestion size={48} className="mb-4 text-zinc-400" />,
        fullColor: "bg-zinc-900 text-white",
    },
};

export default function App() {
    const [mode, setMode] = useState(() => {
        return localStorage.getItem('lastMode') || MODES.NONE;
    });

    const [isFullscreen, setIsFullscreen] = useState(mode !== MODES.NONE);

    useEffect(() => {
        if (mode !== MODES.NONE) {
            localStorage.setItem('lastMode', mode);
            setIsFullscreen(true);
        } else {
            localStorage.removeItem('lastMode');
            setIsFullscreen(false);
        }
    }, [mode]);

    if (isFullscreen && mode !== MODES.NONE) {
        const active = MESSAGES[mode];
        return (
            <div
                className={`fixed inset-0 z-50 flex flex-col items-center justify-center p-8 transition-colors duration-100 ${active.fullColor}`}
                onClick={() => setIsFullscreen(false)}
            >
                <button
                    className="absolute top-8 left-8 p-4 rounded-full bg-white/10 active:bg-white/20"
                    onClick={(e) => {
                        e.stopPropagation();
                        setMode(MODES.NONE);
                    }}
                >
                    <ChevronLeft size={32} />
                </button>

                <div className="text-center animate-in fade-in zoom-in duration-300">
                    <h1 className="text-5xl md:text-7xl font-black leading-tight break-keep">
                        {active.text}
                    </h1>
                </div>
            </div>
        );
    }

    return (
        <main className="max-w-md mx-auto min-h-screen flex flex-col p-6 space-y-6">
            <header className="mb-4">
                <h1 className="text-2xl font-bold tracking-tight text-white mb-1">영수증은 사양합니다</h1>
                <p className="text-zinc-400 text-sm">결제 시 화면을 보여주세요.</p>
            </header>

            <div className="grid gap-4">
                {Object.entries(MESSAGES).map(([key, value]) => (
                    <button
                        key={key}
                        onClick={() => setMode(key)}
                        className={`flex flex-col items-center justify-center p-8 rounded-3xl transition-all h-52 ${value.color} hover:opacity-90 active:scale-95`}
                    >
                        {value.icon}
                        <span className="text-xl font-bold">{value.text}</span>
                        <span className="text-xs mt-2 opacity-50">{value.desc}</span>
                    </button>
                ))}
            </div>

            <footer className="text-center pt-8">
                <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-medium">minimal communicator</p>
            </footer>
        </main>
    );
}
