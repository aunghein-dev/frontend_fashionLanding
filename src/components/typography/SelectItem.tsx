
import React from 'react'
import {
  SelectItem as RadixSelectItem,
  SelectItemText,
  type SelectItemProps,
} from '@radix-ui/react-select'

export function SelectItem({ children, ...props }: SelectItemProps & { children: React.ReactNode }) {
  return (
    <RadixSelectItem {...props}>
      <SelectItemText>{children}</SelectItemText>
    </RadixSelectItem>
  )
}
