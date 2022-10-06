/* -1, 0, and 1 in a comparison function are used to tell the caller how the first value should be sorted in relation to the second one. -1 means the first goes before the second, 1 means it goes after, and 0 means they're equivalent.
*/
export const compare = (a, b) =>{
    if(a._id > b._id) return -1;
    if(a._id < b._id) return 1;
    return 0;
}