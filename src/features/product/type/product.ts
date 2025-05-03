export type TAuthor = {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  avatar: string;
  onlineStatus: 'online' | 'offline' | 'busy' | 'idle'
}

export type TProduct = {
  id: number;
  title: string;
  category:
  | 'Upper Body'
  | 'Lower Body'
  | 'Hat'
  | 'Shoes'
  | 'Accessory'
  | 'Legendary'
  | 'Mythic'
  | 'Epic'
  | 'Rare'
  | 'Common'
  | string;
  price: number;
  isFavorite: boolean;
  theme: string;
  createdAt: number;
  tier: 'Legendary' | 'Mythic' | 'Epic' | 'Rare' | 'Common' | string;
  imageId: number;
  author: TAuthor;
}