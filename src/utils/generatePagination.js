export default function generatePagination(numberOfPages, pageNumber) {
    const list = Array.from({length: numberOfPages}, (v, k) => k+1)
    let newList;
    
    if (pageNumber + 2 >= numberOfPages) {
        newList = list.slice(numberOfPages - 4, numberOfPages)
    } else if (pageNumber === 1) {
        newList = list.slice(0, 3)
    } else {
        
        newList = list.slice(pageNumber - 2, pageNumber + 1)
    }

    return newList
}