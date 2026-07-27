export interface SubItem {
  title: string
  description: string
  featured?: boolean
}

export interface ItemPackage {
  title: string
  owner?: string
  description?: string[]
  bonus?: string
  items?: SubItem[]
}
