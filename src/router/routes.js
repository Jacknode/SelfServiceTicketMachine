import BuyPage from '@/views/BuyPage'; //公用模块
import Home from '@/views/Home'; //首页
import GoAddress from '@/views/GoAddress'; //选择到达目的地
import SearchShifts from '@/views/SearchShifts'; //查询班次
export default [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/buyPage',
    name: 'BuyPage',
    component: BuyPage,
    redirect: 'goAddress',
    children: [{
        path: 'goAddress',
        name: 'GoAddress',
        component: GoAddress
    }, {
        path: 'searchShifts',
        name: 'SearchShifts',
        component: SearchShifts
    }]
}]