import { Injectable } from '@nestjs/common';
import { log } from '../utils';
import { CrawlHTMLSingleResult, CreateCrawlConfig } from 'x-crawl';

const importDynamic = new Function('modulePath', 'return import(modulePath)');

@Injectable()
export class CrawlerService {

  crawlApp = null;
  createCrawl = null

  constructor() {
    log()
    importDynamic('x-crawl').then(xCrawl => {
      this.createCrawl = xCrawl.createCrawl
      this.crawlApp = this.createCrawlApp({})
    })
  }

  createCrawlApp(options: CreateCrawlConfig = {}) {
    console.log('------------------');
    console.log("%c 🍭 createCrawl: ", this.createCrawl);
    console.log('------------------');
    return this.createCrawl(Object.assign({}, {
      // mode: 'sync',
      mode: 'async',
      intervalTime: { max: 800, min: 100 },
      maxRetry: 9,
    }, options))
  }

  crawlList() {
    return this.crawlApp.crawlHTML({
      targets: 'https://www.baidu.com/',
    })
      .then((res: CrawlHTMLSingleResult[]) => {
        console.log("%c 🥥 res", "font-size:18px;color:#ffffff;background:#b03734", res);
        return res
      })
  }

}
