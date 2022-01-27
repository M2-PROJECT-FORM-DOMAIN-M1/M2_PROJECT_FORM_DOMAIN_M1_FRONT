export default function listToPossibleAnswer (list){
    let res = ""
    if(list.size === 0){
        return res;
    }
    list.forEach((elem)=>{
        res+=elem+";"
    })
    return res.slice(0, -1)

}