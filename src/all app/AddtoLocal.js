let getstoreapp =()=>{
 let getdata = localStorage.getItem("readList");
 if(getdata){
    let getBook = JSON.parse(getdata)
    return(getBook)
 }
 else{
    return []
 }
}
let addstoreapp =(id)=>{
   let addBook = getstoreapp()
   if(addBook.includes(id)){
    //alert("Alredy exist")
   }else{
    addBook.push(id)
    let data = JSON.stringify(addBook)
    localStorage.setItem("readList", data )
   }
}
let removestoreapp = (id) => {
  let storeApp = getstoreapp();
  let updated = storeApp.filter(appId => appId !== id.toString());
  localStorage.setItem("readList", JSON.stringify(updated));
};
export {addstoreapp ,getstoreapp ,removestoreapp}