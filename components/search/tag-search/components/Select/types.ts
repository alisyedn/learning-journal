export interface SelectProps {
  options: string[]
  selectedOptions: string[]
  onChange: (tags: string[]) => void
}