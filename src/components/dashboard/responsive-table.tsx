'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Column<T> {
  key: keyof T
  label: string
  render?: (value: any, item: T) => React.ReactNode
  hiddenOnMobile?: boolean
}

interface ResponsiveTableProps<T> {
  data: T[]
  columns: Column<T>[]
  title?: string
  emptyMessage?: string
}

export function ResponsiveTable<T extends { id: number }>({
  data,
  columns,
  title,
  emptyMessage = 'No data available',
}: ResponsiveTableProps<T>) {
  const [page, setPage] = React.useState(0)
  const pageSize = 10
  const paginatedData = data.slice(page * pageSize, (page + 1) * pageSize)
  const pageCount = Math.ceil(data.length / pageSize)

  const visibleColumns = React.useMemo(
    () => columns.filter((col) => !col.hiddenOnMobile),
    [columns]
  )

  return (
    <div className="w-full space-y-4">
      {title && <h2 className="text-lg font-semibold">{title}</h2>}

      <div className="hidden md:block rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                {columns.map((col) => (
                  <th
                    key={String(col.key)}
                    className={cn(
                      'px-4 py-3 text-left font-semibold text-foreground',
                      col.hiddenOnMobile && 'hidden md:table-cell'
                    )}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-muted/30 transition-colors"
                  >
                    {columns.map((col) => (
                      <td
                        key={String(col.key)}
                        className={cn(
                          'px-4 py-3 text-foreground',
                          col.hiddenOnMobile && 'hidden md:table-cell'
                        )}
                      >
                        {col.render
                          ? col.render((item as any)[col.key], item)
                          : String((item as any)[col.key])}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="px-4 py-8 text-center text-muted-foreground"
                  >
                    {emptyMessage}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="md:hidden space-y-3">
        {paginatedData.length > 0 ? (
          paginatedData.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border border-border bg-card p-4 space-y-2"
            >
              {visibleColumns.map((col) => (
                <div key={String(col.key)} className="flex justify-between items-start">
                  <span className="font-medium text-sm text-muted-foreground">
                    {col.label}
                  </span>
                  <span className="text-foreground text-right">
                    {col.render
                      ? col.render((item as any)[col.key], item)
                      : String((item as any)[col.key])}
                  </span>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            {emptyMessage}
          </div>
        )}
      </div>

      {pageCount > 1 && (
        <div className="flex items-center justify-between gap-2 mt-4">
          <div className="text-xs text-muted-foreground">
            Page {page + 1} of {pageCount}
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage(0)}
              disabled={page === 0}
              className="h-8 w-8 p-0"
            >
              {'<<'}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage(Math.max(0, page - 1))}
              disabled={page === 0}
              className="h-8 px-2"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage(Math.min(pageCount - 1, page + 1))}
              disabled={page === pageCount - 1}
              className="h-8 px-2"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage(pageCount - 1)}
              disabled={page === pageCount - 1}
              className="h-8 w-8 p-0"
            >
              {'>>'}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
