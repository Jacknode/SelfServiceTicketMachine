import BuyPage from '@/views/BuyPage'; //公用模块
import Home from '@/views/Home'; //首页
import GoAddress from '@/views/GoAddress'; //选择到达目的地
import SearchShifts from '@/views/SearchShifts'; //查询班次
import Notice from '@/views/Notice'; //购票须知
import OrderSub from '@/views/OrderSub'; //订单提交
import Caution from '@/views/Caution'; //注意事项
import Brush from '@/views/Brush'; //刷身份证 取票
export default [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/buyPage',
    name: 'BuyPage',
    component: BuyPage,
    redirect: 'goAddress',
    children: [
        {
            path: 'goAddress',
            name: 'GoAddress',
            component: GoAddress
        }, {
            path: 'searchShifts',
            name: 'SearchShifts',
            component: SearchShifts
        }, {
            path: 'notice',
            name: 'Notice',
            component: Notice
        }, {
            path: 'orderSub',
            name: 'OrderSub',
            component: OrderSub
        }, {
            path: 'caution',
            name: 'Caution',
            component: Caution
        }, {
            path: 'brush',
            name: 'Brush',
            component: Brush
        }

    ]
}]