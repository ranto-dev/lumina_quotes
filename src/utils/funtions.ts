export const getRandomQuote = (citations, setRotation, setCurrentQuote) => {
  if (citations.length > 0) {
    setRotation((prev: number) => prev + 180);
    const randomIndex = Math.floor(Math.random() * citations.length);
    setCurrentQuote(citations[randomIndex]);
  }
};

export const copyToClipboard = (currentQuote, setCopied) => {
  if (currentQuote) {
    navigator.clipboard.writeText(
      `"${currentQuote.text}" - ${currentQuote.author}`,
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }
};
