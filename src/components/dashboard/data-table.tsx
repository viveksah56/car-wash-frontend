"use client"

import * as React from "react"
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core"
import { restrictToVerticalAxis } from "@dnd-kit/modifiers"
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { GripVertical, MoreVertical, CheckCircle2, Loader2 } from "lucide-react"
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table"
import { toast } from "sonner"
import { z } from "zod"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const schema = z.object({
  id: z.number(),
  header: z.string(),
  type: z.string(),
  status: z.string(),
  target: z.string(),
  limit: z.string(),
  reviewer: z.string(),
})

function DragHandle({ id }: { id: number }) {
  const { attributes, listeners } = useSortable({ id })

  return (
    <button
      {...attributes}
      {...listeners}
      className="p-1 text-muted-foreground hover:text-foreground cursor-grab active:cursor-grabbing"
      aria-label="Drag to reorder"
    >
      <GripVertical className="h-4 w-4" />
    </button>
  )
}

const columns: ColumnDef<z.infer<typeof schema>>[] = [
  {
    id: "drag",
    header: () => null,
    cell: ({ row }) => <DragHandle id={row.original.id} />,
    size: 40,
  },
  {
    accessorKey: "header",
    header: "Project",
    cell: ({ row }) => (
      <div className="font-medium text-sm">{row.original.header}</div>
    ),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (
      <Badge variant="outline" className="text-xs">
        {row.original.type}
      </Badge>
    ),
    size: 100,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        {row.original.status === "Done" ? (
          <CheckCircle2 className="h-4 w-4 text-green-600" />
        ) : (
          <Loader2 className="h-4 w-4 text-yellow-600 animate-spin" />
        )}
        <span className="text-sm">{row.original.status}</span>
      </div>
    ),
    size: 120,
  },
  {
    accessorKey: "target",
    header: "Target",
    cell: ({ row }) => (
      <Input
        defaultValue={row.original.target}
        className="h-8 w-16 text-right text-xs"
        onBlur={() => {
          toast.success(`${row.original.header} updated`)
        }}
      />
    ),
    size: 80,
  },
  {
    accessorKey: "limit",
    header: "Limit",
    cell: ({ row }) => (
      <Input
        defaultValue={row.original.limit}
        className="h-8 w-16 text-right text-xs"
        onBlur={() => {
          toast.success(`${row.original.header} updated`)
        }}
      />
    ),
    size: 80,
  },
  {
    accessorKey: "reviewer",
    header: "Reviewer",
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">{row.original.reviewer}</span>
    ),
  },
  {
    id: "actions",
    header: "",
    cell: () => (
      <button className="p-1 text-muted-foreground hover:text-foreground">
        <MoreVertical className="h-4 w-4" />
      </button>
    ),
    size: 40,
  },
]

function DraggableRow({ row }: { row: any }) {
  const { transform, transition, setNodeRef, isDragging } = useSortable({
    id: row.original.id,
  })

  return (
    <div
      ref={setNodeRef}
      className={`flex items-center gap-4 border-b px-4 py-3 transition-all ${
        isDragging ? "bg-muted opacity-50" : ""
      }`}
      style={{
        transform: CSS.Transform.toString(transform),
        transition: transition,
      }}
    >
      {row.getVisibleCells().map((cell: any) => (
        <div
          key={cell.id}
          style={{ width: cell.column.columnDef.size || "auto" }}
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </div>
      ))}
    </div>
  )
}

export function DataTable({
  data: initialData,
}: {
  data: z.infer<typeof schema>[]
}) {
  const [data, setData] = React.useState(() => initialData)
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  })

  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  )

  const dataIds = React.useMemo(
    () => data?.map(({ id }) => id) || [],
    [data]
  )

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      pagination,
    },
    getRowId: (row) => row.id.toString(),
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      const oldIndex = data.findIndex((d) => d.id === active.id)
      const newIndex = data.findIndex((d) => d.id === over.id)
      setData(arrayMove(data, oldIndex, newIndex))
    }
  }

  const rows = table.getRowModel().rows
  const pageCount = table.getPageCount()
  const currentPage = table.getState().pagination.pageIndex + 1

  return (
    <div className="w-full space-y-4">
      <div className="hidden md:block rounded-lg border border-border overflow-hidden">
        <div className="flex items-center gap-4 bg-muted/50 px-4 py-3 border-b overflow-x-auto">
          {columns.map((col: any) => (
            <div
              key={col.id || Math.random()}
              style={{ width: col.size || "auto", minWidth: col.size || "auto" }}
              className="text-xs font-semibold text-muted-foreground flex-shrink-0"
            >
              {typeof col.header === "function" ? col.header() : col.header}
            </div>
          ))}
        </div>

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          modifiers={[restrictToVerticalAxis]}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={dataIds}
            strategy={verticalListSortingStrategy}
          >
            <div className="divide-y overflow-x-auto">
              {rows.length > 0 ? (
                rows.map((row) => <DraggableRow key={row.id} row={row} />)
              ) : (
                <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                  No projects found
                </div>
              )}
            </div>
          </SortableContext>
        </DndContext>
      </div>

      <div className="md:hidden space-y-3">
        {rows.length > 0 ? (
          rows.map((row) => (
            <div
              key={row.id}
              className="rounded-lg border border-border bg-card p-4 space-y-2"
            >
              {row.getVisibleCells().map((cell: any) => (
                <div key={cell.id} className="flex justify-between items-start gap-2">
                  <span className="font-medium text-sm text-muted-foreground min-w-fit">
                    {typeof cell.column.columnDef.header === "function"
                      ? cell.column.columnDef.header()
                      : cell.column.columnDef.header}
                  </span>
                  <div className="text-right text-foreground">
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            No projects found
          </div>
        )}
      </div>

      {pageCount > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4">
          <div className="text-xs text-muted-foreground">
            Page {currentPage} of {pageCount || 1}
          </div>
          <div className="flex gap-1 flex-wrap justify-center sm:justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
              className="h-8 w-8 p-0"
            >
              {"<<"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="h-8 px-2 hidden sm:inline-flex"
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="h-8 px-2 hidden sm:inline-flex"
            >
              Next
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.setPageIndex(pageCount - 1)}
              disabled={!table.getCanNextPage()}
              className="h-8 w-8 p-0"
            >
              {">>"}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
