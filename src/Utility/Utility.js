import toast, { Toaster } from 'react-hot-toast';

const getFromLocalStorage = (str) => {
    const storedData = localStorage.getItem(str);
    if (storedData) {
        return JSON.parse(storedData);
    }
    return [];
}

const setToLocalStorage = (str, newBook) => {
    const existing = getFromLocalStorage(str);
    let isThere = false;
    existing.map(book => {
        if (book.bookId === newBook.bookId) {
            isThere = true;
        }
    })
    if (!isThere) {
        existing.push(newBook);
        store(str, existing);
        if (str === 'read') {
            toast.success('Marked As Read');
        }
        else {
            toast.success('Added To Wishlist');
        }
    } 
    else {
        if (str === 'read') {
            toast.error('Already Read');
        }
        else {
            toast.error('Already Added To Wishlist');
        }
    }
}

const store = (str, data) => {
    localStorage.setItem(str, JSON.stringify(data));
}

export {setToLocalStorage, getFromLocalStorage};