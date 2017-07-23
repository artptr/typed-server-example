import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column("text")
    content: string;
}
