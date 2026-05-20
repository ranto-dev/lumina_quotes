import type { CitationType } from "../@types/typescript";

export const getRandomQuote = (
  citations: CitationType[],
  setRotation: React.Dispatch<React.SetStateAction<number>>,
  setCurrentQuote: React.Dispatch<React.SetStateAction<CitationType | null>>,
) => {
  if (citations.length > 0) {
    setRotation((prev) => prev + 180);
    const randomIndex = Math.floor(Math.random() * citations.length);
    setCurrentQuote(citations[randomIndex]);
  }
};

export const copyToClipboard = (
  currentQuote: CitationType | null,
  setCopied: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (currentQuote) {
    navigator.clipboard.writeText(
      `"${currentQuote.text}" - ${currentQuote.author}`,
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }
};
