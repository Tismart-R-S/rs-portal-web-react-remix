const CenterContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-sm:h-[calc(100vh-9rem)] flex items-center justify-center h-sm:pb-8">
      {children}
    </div>
  );
};

export default CenterContent;
