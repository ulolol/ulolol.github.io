import React, { useState, useEffect, useRef } from 'react';
import { Renderer } from '@openuidev/react-lang';
import { Bot, Play, Code, Sparkles, RefreshCw, Terminal as TerminalIcon } from 'lucide-react';
import { kaosOpenUILibrary } from '../openui/library';
import {
  PRESET_PROMPTS,
  PresetPromptId,
  generateOpenUILangProgram,
  streamOpenUILang,
  SynthContext,
} from '../openui/synthesizer';
import { playChiptuneClick, playLevelUp } from '../utils/audio';

interface TerminalProps {
  context: SynthContext;
}

export const Terminal: React.FC<TerminalProps> = ({ context }) => {
  const [activePrompt, setActivePrompt] = useState<PresetPromptId>('legendary_deck');
  const [streamedText, setStreamedText] = useState<string>('');
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
  const [showCode, setShowCode] = useState<boolean>(false);
  const cancelStreamRef = useRef<(() => void) | null>(null);

  const startStream = (promptId: PresetPromptId) => {
    playChiptuneClick();
    if (cancelStreamRef.current) {
      cancelStreamRef.current();
    }

    setActivePrompt(promptId);
    setIsStreaming(true);
    setStreamedText('');

    const fullProgram = generateOpenUILangProgram(promptId, context);

    cancelStreamRef.current = streamOpenUILang(
      fullProgram,
      (chunk) => {
        setStreamedText(chunk);
      },
      () => {
        setIsStreaming(false);
        playLevelUp();
      },
      14 // smooth token delay
    );
  };

  useEffect(() => {
    // Initial stream on mount
    startStream('legendary_deck');

    return () => {
      if (cancelStreamRef.current) {
        cancelStreamRef.current();
      }
    };
  }, []);

  return (
    <section className="my-8 neo-box bg-surface-container rounded-2xl p-4 sm:p-6 border-2 border-ink transition-colors">
      {/* Rotom-OS Deck Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-5 border-b-2 border-ink/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary text-white border-2 border-ink flex items-center justify-center shadow-[2px_2px_0px_#121316]">
            <Bot className="w-5 h-5 animate-bounce" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-headline font-black text-xl uppercase tracking-tight text-on-surface">
                ROTOM-OS // OPENUI GENERATIVE DECK
              </h2>
              <span className="px-2 py-0.5 text-[9px] font-mono font-bold bg-tertiary text-ink border border-ink rounded-full">
                CLIENT-SIDE 100%
              </span>
            </div>
            <p className="font-body text-xs text-on-surface-variant">
              Zero-API-key OpenUI Lang parser and dynamic streaming component renderer.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              playChiptuneClick();
              setShowCode(!showCode);
            }}
            className={`neo-btn px-3 py-1.5 text-xs rounded-lg flex items-center gap-1.5 transition-colors ${
              showCode ? 'bg-secondary text-ink' : 'bg-surface-container-low text-on-surface'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>{showCode ? 'HIDE OPENUI LANG' : 'INSPECT OPENUI LANG'}</span>
          </button>

          <button
            onClick={() => startStream(activePrompt)}
            disabled={isStreaming}
            title="Re-run generative stream"
            className="neo-btn p-1.5 rounded-lg bg-surface-container-low hover:bg-secondary text-ink disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${isStreaming ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* Preset Prompt Cartridges */}
      <div className="mb-6">
        <span className="font-mono text-[10px] font-bold uppercase text-ink-muted block mb-2 tracking-wider">
          INSERT PROMPT CARTRIDGE:
        </span>
        <div className="flex flex-wrap gap-2">
          {PRESET_PROMPTS.map((preset) => {
            const active = activePrompt === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => startStream(preset.id)}
                disabled={isStreaming}
                className={`neo-btn px-3 py-2 text-xs rounded-xl flex items-center gap-2 transition-all ${
                  active
                    ? 'bg-secondary text-ink shadow-[2px_2px_0px_#121316] -translate-y-0.5'
                    : 'bg-surface-container-low hover:bg-surface-container-high text-on-surface'
                }`}
              >
                <Play className={`w-3 h-3 ${active ? 'fill-current' : ''}`} />
                <span>{preset.label}</span>
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-surface border border-ink/20">
                  {preset.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Optional OpenUI Lang Code Stream Inspector */}
      {showCode && (
        <div className="mb-6 neo-box-sm bg-surface-container-lowest text-emerald-400 p-4 rounded-xl font-mono text-xs overflow-x-auto border border-ink">
          <div className="flex items-center justify-between text-[10px] text-ink-muted border-b border-ink/40 pb-2 mb-2">
            <span className="flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-secondary" />
              <span>OPENUI LANG DECLARATIVE STREAM</span>
            </span>
            <span className="text-secondary">{isStreaming ? 'STREAMING...' : 'PARSED & MOUNTED'}</span>
          </div>
          <pre className="whitespace-pre-wrap leading-relaxed font-mono">
            {streamedText || '# Initializing OpenUI Lang stream...'}
          </pre>
        </div>
      )}

      {/* Live OpenUI Renderer Container */}
      <div className="neo-box-sm bg-surface-container-low rounded-xl p-4 sm:p-6 border border-ink/20 min-h-[300px]">
        {streamedText ? (
          <Renderer
            library={kaosOpenUILibrary}
            response={streamedText}
            isStreaming={isStreaming}
          />
        ) : (
          <div className="h-64 flex flex-col items-center justify-center text-center text-ink-muted gap-3">
            <Sparkles className="w-8 h-8 text-secondary animate-pulse" />
            <p className="font-mono text-sm uppercase">Synthesizing OpenUI Lang AST Nodes...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Terminal;
