import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import {Shelter} from "./Shelter";
import {Image} from "./Image";

@Entity()
export class Advertisement {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    name: string;

    @Column({length: 100})
    species: string;

    @Column({length: 100})
    race: string;

    @Column({length: 2})
    age: number;

    @Column({length: 10000})
    description: string;

    @Column({length: 20})
    contact: string;
    //Data for google maps on the front end
    @Column({default:0.0})
    lng: number;

    @Column({default:0.0})
    lat: number;

    @Column({
        type: "enum",
        enum: [
            "missing",
            "seeking",
            "found"
        ]
    })
    status: "missing" | "seeking" | "found";

    @ManyToOne(type => Shelter, shelter => shelter.advertisements,
        {
            nullable: true,
            cascadeInsert: true,
            cascadeUpdate: true,
            eager: true
        })

    @JoinColumn({name: "shelter_id"})
    shelter: Shelter;

    @OneToMany(type => Image, image => image.advertisement,
        {eager: true})
    images: Image[]
}
