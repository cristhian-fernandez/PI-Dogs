import rootReducer from "../redux/reducer/rootReducer";
import {
    GET_ALL_DOGS,
    GET_DOG_DETAIL
} from "../redux/actions/actions";
// } from "../redux/actions";
// import * as data from "../../db.json";

describe("Reducer", () => {
  const state = {
    dogs: [],
    dogDetail: {},
  };

  it("Debería retornar el estado inicial si no se pasa un type válido", () => {
    expect(rootReducer(undefined, [])).toEqual({ dogs : [],allDogs : [], dogDetail : {}, dogsFavorites :[],temperaments : []});
  });
});
