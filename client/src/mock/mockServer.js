import Mock from 'mockjs'
import data from './data'

//返回goods接口
Mock.mock('/goods', {code: 0, data: data.goods})
//返回goods接口
Mock.mock('/info', {code: 0, data: data.info})
//返回goods接口
Mock.mock('/ratings', {code: 0, data: data.ratings})
