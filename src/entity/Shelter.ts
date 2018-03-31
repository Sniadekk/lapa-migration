import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Advertisement} from "./Advertisement";

@Entity()
export class Shelter {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    name: string;

    @Column({length: 10000})
    description: string;

    @Column({length: 20})
    contact: string;

    @Column({length: 255})
    email: string;

    //Data for google maps on the front end

    @Column()
    lng: number;

    @Column()
    lat: number;

    @OneToMany(type => Advertisement, advertisement => advertisement.shelter)
    advertisements: Advertisement[]
}
