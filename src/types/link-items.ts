import { IconAssetType } from "@/components/icons/icon-assets"

export type LinkItemDataType = {
    label: string
    link: string
    icon: IconAssetType
}

export type LinkItemsType = {
    data: LinkItemDataType[]
}