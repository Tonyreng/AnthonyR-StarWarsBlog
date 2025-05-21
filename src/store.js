export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    dataList: [
      "characters",
      "species",
      "planets",
      "vehicles",
      "starships",
    ],
    characters: [],
    planets: [],
    vehicles: [],
    starships: [],
    species: [],
    favorites: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'set_Characters': 
      return {
        ...store,
        characters: action.payload,
      }
    case 'set_Planets': 
      return {
        ...store,
        planets: action.payload,
      }
    case 'set_Vehicles': 
      return {
        ...store,
        vehicles: action.payload,
      }
    case 'set_Starships': 
      return {
        ...store,
        starships: action.payload,
      }
    case 'set_Species': 
      return {
        ...store,
        species: action.payload,
      }
    case 'set_Favorites':
      const exist = store.favorites.some((favorite) => favorite.name == action.payload.name)
      if (exist) {
        return {
          ...store,
          favorites: store.favorites.filter((favorite) => favorite.name !== action.payload.name)
          }
      } else {
        return {
          ...store,
          favorites: [...store.favorites, action.payload],
        }
        }
    default:
      throw Error('Unknown action.');
  }    
}
