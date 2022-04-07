import { Gender } from "./Gender.model";

export class patient {
    id: string;
    name: string;
    fileNo: number;
    citizenId: string;
    birthdate: Date;
    gender: Gender;
    natinality: string;
    phoneNumber: string;
    email: string;
    country: string;
    city: string;
    street: string;
    address1: string;
    address2: string;
    contactPerson: string;
    contactRelation: string;
    contactPhone: string;
    firstVisitDate: Date;
    recordCreationDate: Date;
}
