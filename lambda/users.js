"use strict";
// import {UserType} from './blockstype'
// import {DB} from './dynamo'
// export class User {
//     private idUser : string;
//     private email : string;
//     private pin : string;
//     private userName : string;
//     constructor(idUser: string) {
//         const userInfo = DB.getUserInfo(idUser).then((res : UserType) => {
//             return [res.IDUser, res.Mail, res.PIN, res.Username] ;
//         }).catch((error:any) => {
//             return "could not create the user: ";
//         });
//         this.idUser = userInfo.then((value: UserType) => value.IDUser)
//                             .catch((error: any) => error);
//         this.email = userInfo.then((value: UserType) => value.Mail)
//                             .catch((error:any) => error);
//         this.pin = userInfo.then((value: UserType) => value.PIN)
//                             .catch((error:any) => error);
//         this.userName = userInfo.then((value: UserType) => value.Username)
//                            .catch((error:any) => error);
//     }
//     get getUsername () : string {return this.userName;}
// }
