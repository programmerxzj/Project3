/*
包含多个基于state的getter计算属性的对象
 */

export default {
  //计算食物总数量
  totalCount (state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count, 0)
  },
  //计算食物总价格
  totalPrice (state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count * food.price, 0)
  },
  //计算满意否数量
  positiveSize (state) {
    return state.ratings.reduce((preTotal, rating) => preTotal + (rating.rateType === 0 ? 1 : 0), 0)
  }
}
