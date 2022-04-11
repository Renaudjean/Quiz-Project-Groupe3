let db= require('../database/database');


module.exports.sign_up_create_users = (req, response) => {
    let dataFirstName = req.body.firstName
    let dataLasteName = req.body.lastName
    let dataChooseName = req.body.chooseName
    let dataMail = req.body.mail
    let dataChoosePass = req.body.choosePass
  

    db.query("INSERT INTO `account`(`FirstName`, `LastName`, `UserName`, `Email`, `Password`, `AccountType`) VALUES (?, ?, ?, ?, ?, 0)", [dataFirstName, dataLasteName, dataChooseName, dataMail, dataChoosePass],(err,row)=>{
            console.log(dataFirstName);
    console.log(dataLasteName);
    console.log(dataChooseName);
    console.log(dataMail);
    console.log(dataChoosePass); 
    if (err) throw err;
        response.render("../index"); 
    })
 
}