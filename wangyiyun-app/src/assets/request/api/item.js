import service from "..";
export function getMusicItemList(data){
    return service({
        method:"GET",
        url:`/playlist/detail?id=${data}`
    })
}



export function getItemList(data){
    return service({
        method:"GET",
        url:`/playlist/track/all?id=${data}&limit=10&offset=0`
    })
}

export function getMusicLyric(data){
    return service({
        method:"GET",
        url:`/lyric?id=${data}`
    })
}