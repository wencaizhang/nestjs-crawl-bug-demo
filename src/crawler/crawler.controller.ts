import { Controller, Post } from '@nestjs/common';
import { CrawlerService } from './crawler.service';

@Controller('crawler')
export class CrawlerController {
  constructor(
    private readonly crawlerService: CrawlerService,
  ) { }

  @Post('crawlList')
  async crawlList() {
    return this.crawlerService.crawlList();
  }
}
