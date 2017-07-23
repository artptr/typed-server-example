import { Repository } from "typeorm";
import { JsonController, Get, Post, Delete } from "routing-controllers";
import { OrmRepository } from "typeorm-typedi-extensions";
import { EntityFromBody, EntityFromParam } from "typeorm-routing-controllers-extensions";

import { Article } from "../entity/Article";

@JsonController("/articles")
export class ArticleController {
    @OrmRepository(Article)
    private articles: Repository<Article>;

    @Get("/")
    getList() {
        return this.articles.find();
    }

    @Get("/:id")
    getOne(@EntityFromParam("id") article: Article) {
        return article;
    }

    @Post("/")
    add(@EntityFromBody() article: Article) {
        return this.articles.persist(article);
    }

    @Delete("/:id")
    remove(@EntityFromParam("id") article: Article) {
        if (article) {
            return this.articles.remove(article);
        }
    }
}
