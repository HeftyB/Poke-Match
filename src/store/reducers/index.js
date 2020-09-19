const initialState = {
    cards: [
      {
        value: "A",
        matched: false,
        flipped: false,
        id: 1
      },
      {
        value: "B",
        matched: false,
        flipped: false,
        id: 2
      },
      {
        value: "C",
        matched: false,
        flipped: false,
        id: 3
      },
      {
        value: "D",
        matched: false,
        flipped: false,
        id: 4
      },
      {
        value: "E",
        matched: false,
        flipped: false,
        id: 5
      },
      {
        value: "F",
        matched: false,
        flipped: false,
        id: 6
      },
      {
        value: "G",
        matched: false,
        flipped: false,
        id: 7
      },
      {
        value: "H",
        matched: false,
        flipped: false,
        id: 8
      },
      {
        value: "I",
        matched: false,
        flipped: false,
        id: 9
      },
      {
        value: "J",
        matched: false,
        flipped: false,
        id: 10
      },
      {
        value: "K",
        matched: false,
        flipped: false,
        id: 11
      },
      {
        value: "L",
        matched: false,
        flipped: false,
        id: 12
      },
      {
        value: "🌻",
        matched: false,
        flipped: false,
        id: 13
      },
      {
        value: "M",
        matched: false,
        flipped: false,
        id: 14
      },
      {
        value: "N",
        matched: false,
        flipped: false,
        id: 15
      },
      {
        value: "O",
        matched: false,
        flipped: false,
        id: 16
      },
      {
        value: "P",
        matched: false,
        flipped: false,
        id: 17
      },
      {
        value: "Q",
        matched: false,
        flipped: false,
        id: 18
      },
      {
        value: "R",
        matched: false,
        flipped: false,
        id: 19
      },
      {
        value: "S",
        matched: false,
        flipped: false,
        id: 20
      }
    ],
    currentlySelectedCards: [],
    endGame: false,
    totalScore: 0,
    roundScore: 0,
    difficulty: 0
 }
  
export default function reducers (state = initialState, action) {
    switch (action.type) {
        case "GET_DATA_START":
          return {
            ...state,
            WHATEVER: "NEWSTATE"
          }
        case "GET_DATA_SUCCESS":
          return {
            ...state,
            WHATEVER: "NEWSTATE"
          }
        case "GET_DATA_FAIL":
          return {
            ...state,
            WHATEVER: "NEWSTATE",
            WHATEVER: "NEWSTATE"
          }
        default:
            return state;
    }
}