import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {Advertisement} from "./Advertisement";

@Entity()
export class Image {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 255, nullable: true})
    file: string;

    @ManyToOne(type => Advertisement, advertisement => advertisement.images)
    @JoinColumn({name: "advertisement_id"})
    advertisement: Advertisement
}