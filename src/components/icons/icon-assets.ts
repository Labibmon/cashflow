


export type IconAssetTypeData = {
  hamburger: string
  moon: string
}

export type IconAssetType = keyof IconAssetTypeData

export const useIconsAssets = (color: string) => {

  const listIcon: IconAssetTypeData = {
    hamburger: `url("data:image/svg+xml,%3Csvg data-v-64757d20='' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' fill='%23${color}' width='64' height='64' class='hamburger is-active'%3E%3Cpath data-v-64757d20='' d='M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z'%3E%3C/path%3E%3C/svg%3E")`,
    moon: `url("data:image/svg+xml,%0A%3Csvg width='18' height='18' viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_101_9966)'%3E%3Cpath d='M9.95691 18C12.7329 18 15.2683 16.737 16.948 14.6675C17.1965 14.3613 16.9255 13.9141 16.5415 13.9872C12.175 14.8188 8.1651 11.4709 8.1651 7.06303C8.1651 4.52398 9.52431 2.18914 11.7334 0.931992C12.0739 0.738211 11.9883 0.221941 11.6013 0.150469C11.0589 0.0504468 10.5085 8.21369e-05 9.95691 0C4.98902 0 0.956909 4.02578 0.956909 9C0.956909 13.9679 4.98269 18 9.95691 18Z' fill='%23${color}'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_101_9966'%3E%3Crect width='18' height='18' /%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A")`
  };

  return listIcon;
};
