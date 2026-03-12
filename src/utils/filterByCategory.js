import { menu } from "../data/menu.js"

export const filterMenu = (category) => {
  return menu.filter(m => m.category === category)
}