"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="mt-16 flex items-center justify-center gap-8">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center w-10 h-10 rounded-full text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed group"
        aria-label="Previous page"
      >
        <FaChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>

      {/* Dot Indicators */}
      <div className="flex items-center gap-1.5">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`transition-all duration-300 rounded-full ${
              currentPage === page
                ? "bg-primary w-6 h-1.5 shadow-lg shadow-primary/50"
                : "bg-muted-foreground/30 w-1.5 h-1.5 hover:bg-muted-foreground/60"
            }`}
            aria-label={`Go to page ${page}`}
            aria-current={currentPage === page ? "page" : undefined}
          />
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center w-10 h-10 rounded-full text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed group"
        aria-label="Next page"
      >
        <FaChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}
