import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinColumn} from "typeorm";
import {Advertisement} from "./Advertisement";

@Entity()
export class Image {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    link : string;

    @ManyToOne(type => Advertisement, advertisement => advertisement.images, {
        nullable: false,
        cascadeInsert: true,
        cascadeUpdate: true,
        eager: true
    })
    @JoinColumn({name: "advertisement_id"})
    advertisement: Advertisement
}