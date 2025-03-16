import { getFromLocalStorage, store } from "./Utility"



export const setToRecentlyViewed = (book) => {
    const existing = getFromLocalStorage('recents');
    let isThere = false;
    const newExistingList = [];
    existing.map(individualBook => {
          // if the book is in existing list then first remove from the list and then push it as top item
        if (individualBook.bookId === book.bookId) {
            isThere = true;
        }
        else {
            newExistingList.push(individualBook);
        }
    })
  
    
    
        newExistingList.push(book);
    
    store('recents', newExistingList);

}