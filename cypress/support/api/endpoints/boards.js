import { requester } from '../requester';

export const boards = {
  createBoard(name) {
    requester.sendRequest( 
      'POST', 
      'boards', 
      { defaultLists: false }, 
      { name: name }
    );
  }
};