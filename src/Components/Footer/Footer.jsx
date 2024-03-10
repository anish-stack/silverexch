
const MakaFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#04A1A6] text-white p-4 text-center">
      <p className="text-sm mb-2">
        &copy; Copyright{currentYear}. All Rights Reserved.
      </p>
      <p className="text-xs">Powered by URG Care ltd.</p>
    </footer>
  );
};

export default MakaFooter;
