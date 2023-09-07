import { Swipe, SwipeItem,popup} from 'vant';
let plugins=[
    Swipe, SwipeItem,popup,
]
export default   function getVant(app){
    plugins.forEach((item)=>{
        return app.use(item)
    })
    
}
