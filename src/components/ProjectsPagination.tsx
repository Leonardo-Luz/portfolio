import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination"

function getPaginationRange(page: number, totalPages: number, maxVisible = 3) {
  let start = Math.max(1, page - Math.floor(maxVisible / 2))
  let end = start + maxVisible - 1

  if (end > totalPages) {
    end = totalPages
    start = Math.max(1, end - maxVisible + 1)
  }

  return { start, end }
}

export function ProjectPagination({
  page,
  setPage,
  totalPages,
}: {
  page: number
  setPage: (p: number) => void
  totalPages: number
}) {
  if (totalPages <= 1) return null

  const { start, end } = getPaginationRange(page, totalPages)

  return (
    <Pagination className="mt-6">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => setPage(Math.max(1, page - 1))}
            className={page === 1 ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>

        {start > 1 && (
          <>
            <PaginationItem>
              <PaginationLink
                isActive={page === 1}
                onClick={() => setPage(1)}
              >
                1
              </PaginationLink>
            </PaginationItem>
            {start > 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
          </>
        )}

        {/* Middle pages */}
        {Array.from({ length: end - start + 1 }, (_, i) => {
          const p = start + i
          return (
            <PaginationItem key={p}>
              <PaginationLink
                isActive={page === p}
                onClick={() => setPage(p)}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          )
        })}

        {end < totalPages && (
          <>
            {end < totalPages - 1 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink
                isActive={page === totalPages}
                onClick={() => setPage(totalPages)}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() => setPage(Math.min(totalPages, page + 1))}
            className={page === totalPages ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

