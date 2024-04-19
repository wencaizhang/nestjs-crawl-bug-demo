import { Injectable } from '@nestjs/common';
import { log } from '../utils';
import { createCrawl, CreateCrawlConfig, CrawlHTMLSingleResult } from 'x-crawl';
console.log("%c 🍯 createCrawl: ", createCrawl);

@Injectable()
export class CrawlerService {

  crawlApp = null;

  constructor() {
    log()
    this.crawlApp = this.createCrawlApp({})
  }

  createCrawlApp(options: CreateCrawlConfig = {}) {
    console.log('------------------');
    console.log("%c 🍭 createCrawl: ", createCrawl);
    console.log('------------------');
    return createCrawl(Object.assign({}, {
      // mode: 'sync',
      mode: 'async',
      intervalTime: { max: 800, min: 100 },
      maxRetry: 9,
    }, options))
  }

  crawlList() {
    this.crawlApp.crawlHTML({
      targets: 'https://www.baidu.com/',
    })
      .then((res: CrawlHTMLSingleResult[]) => {
        console.log("%c 🥥 res", "font-size:18px;color:#ffffff;background:#b03734", res);
      })
  }

}
