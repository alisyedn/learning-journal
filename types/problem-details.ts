interface Violation {
  field: string
  detail: string
}

interface ProblemDetails {
  type: string
  title: string
  detail: string
  status: number
  violations?: Violation[]
}

export type {Violation, ProblemDetails}