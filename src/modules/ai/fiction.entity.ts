import {Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToOne} from 'typeorm';
import {AuthorEntity} from "./author.entity";

@Entity({name: 'fiction'})
export class FictionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 255})
    swipers: string

    @Column({type: 'varchar', length: 255})
    title: string

    @Column({type: 'varchar', length: 255})
    content: string

    @Column({type: 'varchar', length: 255})
    topics: string

    @Column({type: 'varchar', length: 255})
    tags: string

    @Column({type: 'int'})
    contributor_num: number

    @Column({type: 'int'})
    view_num: number

    @Column({type: 'int'})
    start_num: number

    @ManyToOne(
        () => AuthorEntity,
        author => author.fictions,
    )
    author: AuthorEntity;

}
