import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Advertisement {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:100})
    name: string;

    @Column({length:100})
    species: string;

    @Column({length:100})
    race: string;

    @Column({length:2})
    age: number;

    @Column({length:10000})
    description: string;

    @Column({length:20})
    contact: string;
    //Data for google maps on the front end
    @Column()
    lng: number;

    @Column()
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



}
