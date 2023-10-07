import {Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToMany} from 'typeorm';
import {FictionEntity} from "./fiction.entity";

@Entity({name: 'author'})
export class AuthorEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 255})
    avatar: string

    @Column({type: 'varchar', length: 50})
    name: string

    @OneToMany(
        () => FictionEntity,
        fiction => fiction.author,
    )
    fictions: []
}
