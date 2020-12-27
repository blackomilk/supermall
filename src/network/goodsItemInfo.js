import { isForInStatement } from 'typescript'
import {request} from './request'

export function getGoodsItemInfo(iid) {
  return request({
    url: '/detail',
    params: {
      iid: iid
    }
  })
}

export function getRecommends() {
  return request({
    url: '/recommend'
  })
}

export class GoodsBaseInfo {
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class ShopInfo {
  constructor(showInfo) {
    this.logo = showInfo.shopLogo
    this.name = showInfo.name
    this.fans = showInfo.cFans
    this.sells = showInfo.cSells
    this.score = showInfo.score
    this.goodsCount = showInfo.cGoods
  }
}

export class ParamInfo {
  constructor(info,rule) {
    this.image = info.image ? info.image[0] : ''
    this.infos = info.set
    this.sizes = rule.tables
  }
}