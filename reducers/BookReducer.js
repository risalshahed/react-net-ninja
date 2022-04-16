import { v4 } from "uuid";

// Reducer is exporting a function!
// 1. action.type nibo, niye bivinno action nibo

// 2. 1st case or action a, say, ADD_BOOK krbo, tar mane amdr newArray hbe [...books, {newBook1.title, newBook1.author, newBook2.title, newBook2.author}, ... (evabe cholte thakbe)] BUT amdr EXPORT function a, book is actually state! so we'll write STATE instead of BOOKS
export const BookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, {
        title: action.book.title,
        author: action.book.author,
        id: v4(),
      }];

    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);
  
    default:
      return state;
  }
}