import {Entity, PrimaryGeneratedColumn, ManyToOne, Column} from 'typeorm';

@Entity({name: 'carousel'})
export class CarouselEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 80})
    img_url: string;

    @Column({type: 'varchar', length: 80})
    title: string

    @Column({type: 'varchar', length: 255})
    content: string

}
