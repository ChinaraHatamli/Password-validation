// speacial
// const validatePassword = {
//   validate: function (password) {
//     if (password.length < 7) {
//        throw new Error("yanlisdir, en azi 7 herfden ibaret  olmalidir")
//      }
//      if (!(password.match("[A-Z]"))) {
//         throw new Error("yanlisdir, en azi 1 eded boyuk herf olmalidir");
//      }
//      if (!(password.match('[a-z]'))) {
//        throw new Error("yanlisdir, en azi 1 eded kici herf olmalidir");
//      }
//     if (!(password.match('[@?&%$!*]'))) {
//     throw new Error("yanlisdir, en azi 1 eded xususi simvol olmalidir");
//   }
//    if (!(password.match('[0-9]'))) {
//      throw new Error("yanlisdir, en azi 1 eded reqem olmalidir");
//    }

//    return 'Yazdigin parol ugurludur !'
//   }
//  }

//  validatePassword.validate("Amil1234234@"); // yanlisdir, en azi 7 herfden ibaret  olmalidir
//  validatePassword.validate("Amil123455@"); // yanlisdir, en azi 1 eded boyuk herf olmalidir

//  validatePassword.validate("Amil123455@"); // yanlisdir, en azi 1 eded kici herf olmalidir

//  validatePassword.validate("Amil123455@"); // yanlisdir, en azi 1 eded xususi simvol olmalidir

//  //const validatePassword = {
//    // validate: function (password){
//    //     if (password.length < 8) {
//    //         throw new Error ("The password must be at least 8 characters long");
//         }

//         if (!(password.match(/^(?=.*[a-zA-Z])(?=.*[!#$%&?])[a-zA-Z0-9!#$%&?]+$/))) {
//            throw new Error("The password must be contain at least 1 special character");
//         }

//         if (!(password.match(/[1-9]\d\d/g))){
//             throw new Error ("The password must contain at least three number");
//         }

//         return "Password is successful"

//     }
//  }

//validatePassword.validate("1234");
//validatePassword.validate("123456789!");
//validatePassword.validate ("Chinara!12");

//console.log (validatePassword.validate ("Chinara1993!!!"))

// const validateMail = {
//   validate: function (mail) {
//     if (!(mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))) {
//       throw new Error("Please write to symbol @");
//     }
//   },
// };

// validateMail.validate("chinara123");


