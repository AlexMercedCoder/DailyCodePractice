function loop_size(node){
 return node.setNext()
}

{
    const A = new Node();
    A.setNext(A);
    console.log(loop_size(A)); 
}
{
    const A = new Node(), B = new Node();
    A.setNext(B), B.setNext(A);
    console.log(loop_size(A)); 
}
// {
//     const A = new Node(), B = new Node();
//     A.setNext(B), B.setNext(B);
//     console.log(loop_size(A));
// {
//     const A = new Node(), B = new Node(), C = new Node();
//     A.setNext(B), B.setNext(C), C.setNext(C);
//     console.log(loop_size(A)); 
// }
// {
//     const A = new Node(), B = new Node(), C = new Node();
//     A.setNext(B), B.setNext(C), C.setNext(B);
//     console.log(loop_size(A)); 
// }
// {
//     const A = new Node(), B = new Node(), C = new Node();
//     A.setNext(B), B.setNext(C), C.setNext(A);
//     console.log(loop_size(A)); 
// }