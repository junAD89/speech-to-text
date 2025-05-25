import React, { createContext, useContext, useState, type ReactNode } from "react";

type transcriptContextType = {
    transcriptText: string,
    setTranscriptText: (text: string) => void
}

type TransciptProviderProps = {
    children: ReactNode;
}

const TransciptContext = createContext<transcriptContextType | undefined>(undefined);

export const TransciptProvider: React.FC<TransciptProviderProps> = ({ children }) => {
    const [transcriptText, setTranscriptText] = useState<string>("")

    const valueOfContext: transcriptContextType = {
        transcriptText,
        setTranscriptText
    };

    return (
        <TransciptContext.Provider value={valueOfContext}>
            {children}
        </TransciptContext.Provider>
    )
}


///to check 

export const useTranscript = (): transcriptContextType => {
    const context = useContext(TransciptContext);
    if (context === undefined) {
        throw new Error('useTranscript must be used within a TransciptProvider');
    }
    return context;
};