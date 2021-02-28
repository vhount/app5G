import axios from "axios";
const burl = "http://localhost:3001";

export default {
    getCountAntennes: () => {
        //Appel API
        return axios.get(`${burl}/api/count`);
                //Structure à utiliser avant de finir de coder le back
        // return 3
    },
    getAntennesFromPoint: (long, lat, maxkm) => {
        //Appel API
        return axios.get(`${burl}/api/convert/${long}/${lat}?maxkm=${maxkm}`);
        // http://localhost:3001/api/convert/2.35183/48.85658

        //Structure à utiliser avant de finir de coder le back
        // return [
        //     {
        //         "_id": "5fca3fe9dc93324b7f8af904",
        //         "firstName": "Leandro"
        //     },
        //     {
        //         "_id": "5fca3fe9dc93324b7f8af905",
        //         "firstName": "Nina"
        //     },
        //     {
        //         "_id": "5fca3fe9dc93324b7f8af906",
        //         "firstName": "Marc"
        //     }
        // ]
    },
    getAntenne: (id) => {
        //Appel API
        return axios.get(`${burl}/api/antennes/details/${id}`);
        //Structure à utiliser avant de finir de coder le back
        // return {
        //     _id: "5fca3fe9dc93324b7f8af905",
        //     firstName: "Nina",
        //     surname: "Gautreau",
        //     age: 27,
        //     city: "Bordeaux",
        //     country: "France",
        //     hasCar: true,
        // }
    },
    getDepartements: () => {
        //Appel API
        return axios.get(`${burl}/api/france/recup/departement`);
        //Structure à utiliser avant de finir de coder le back
        // return [
        //     {
        //         "_id": "5fca3fe9dc93324b7f8af904",
        //         "firstName": "Leandro"
        //     },
        //     {
        //         "_id": "5fca3fe9dc93324b7f8af905",
        //         "firstName": "Nina"
        //     },
        //     {
        //         "_id": "5fca3fe9dc93324b7f8af906",
        //         "firstName": "Marc"
        //     }
        // ]
    },
    getDepartementPosition: () => {
        //Appel API
        return axios.get(`${burl}/api/position/:departement`);
        //Structure à utiliser avant de finir de coder le back
        // return [
        //     {
        //         "_id": "5fca3fe9dc93324b7f8af904",
        //         "firstName": "Leandro"
        //     },
        //     {
        //         "_id": "5fca3fe9dc93324b7f8af905",
        //         "firstName": "Nina"
        //     },
        //     {
        //         "_id": "5fca3fe9dc93324b7f8af906",
        //         "firstName": "Marc"
        //     }
        // ]
    },
    getDepartAntennes: (id) => {
        //Appel API
        return axios.get(`${burl}/api/antennes/${id}`);
       
    },
    getAntennesDepartement: (departement) => {
        //Appel API
        return axios.get(`${burl}/api/france/antennes/${departement}`);
       
    },
}