import { TFilter, TSearchProductParams } from "../type/filter";

export const initialFilter: TFilter = {
  minPrice: 0,
  maxPrice: 1000,
  priceSort: 'asc',
  tier: 'all',
  theme: 'all',
  timeSort: 'asc',
}

export const initialSearchParams: TSearchProductParams = {
  page: 1,
  limit: 12,
  category: undefined,
  ...initialFilter
}


export const tiers = [
  {
    key: "all",
    label: 'All'
  },
  {
    key: 'Legendary',
    label: 'Legendary'
  },
  {
    key: 'Mythic',
    label: 'Mythic'
  },
  {
    key: 'Epic',
    label: 'Epic'
  },
  {
    key: 'Rare',
    label: 'Rare'
  },
  {
    key: 'Common',
    label: 'Common'
  }
]

export const themes = [
  {
    key: "all",
    label: "All"
  },
  {
    key: "halloween",
    label: "Halloween"
  },
  {
    key: "dark",
    label: "Dark"
  },
  {
    key: "light",
    label: "Light"
  },
  {
    key: "colorful",
    label: "Colorful"
  }

]

export const prices = [

  {
    key: "asc",
    label: "Low to high"
  },
  {
    key: "desc",
    label: "High to low"
  }
]

export const times = [
  {
    key: "asc",
    label: "Latest"
  },
  {
    key: "desc",
    label: "Oldest"
  }
]


export const categories = [
  {
    key: "all",
    label: "All"
  },
  {
    key: "Upper Body",
    label: "Upper Body"
  },
  {
    key: "Lower Body",
    label: "Lower Body"
  },
  {
    key: "Hat",
    label: "Hat"
  },
  {
    key: "Shoes",
    label: "Shoes"
  },
  {
    key: "Accessory",
    label: "Accessory"
  },
  {
    key: "Legendary",
    label: "Legendary"
  },
  {
    key: "Mythic",
    label: "Mythic"
  },
  {
    key: "Epic",
    label: "Epic"
  },
  {
    key: "Rare",
    label: "Rare"
  },
  {
    key: "Common",
    label: "Common"
  }
]

export const LIMIT = 12;