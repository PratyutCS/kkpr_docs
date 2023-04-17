var fs = require('fs');
const ExcelJS = require('exceljs');

function work(nam,sName,age){
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('facultyApplicantSheet');
  
    sheet.columns = [
      // { header: 'Sl. No.', key: 'sNo', width: 6 },
      { header: 'Name', key: 'name', width: 32},
      { header: 'Post applied', key: 'postApplied', width: 20 },
      { header: 'Qualification', key: 'qualification', width: 32 },
      { header: 'Exp.', key: 'exp', width: 32 },
      { header: 'Age', key: 'age', width: 6 },
      { header: 'Publication', key: 'publication', width: 32 },
      { header: 'Professional Achievement', key: 'professionalAchievement', width: 32 },
      { header: 'No. of PhD Guided', key: 'phdGuided', width: 32 },
      { header: 'Patents (Filed/Awarded)', key: 'Patents', width: 32 },
      { header: 'FDP Attended/Conducted', key: 'fdp', width: 32 },
      { header: 'Sponsored Research Project', key: 'sponsoredResearchProject', width: 32 },
      { header: 'Awards', key: 'awards', width: 32 },
      { header: 'MOOCs Developed', key: 'moocsDeveloped', width: 32 },
      { header: 'Courses Developed', key: 'coursesDeveloped', width: 32 },
      { header: 'Remarks', key: 'remarks', width: 32 },
      { header: 'Mobile Number', key: 'mobileNumber', width: 15 },
      { header: 'E:mail ID', key: 'email', width: 32 }
    ];
  
    // sheet.addRow(["1",sName,nam.postapplied,"-","-",age,"-","-","-","-","-","-","-","-","-","Not Shortlisted",nam.corresmobile,nam.correspersmail]);
    sheet.addRow([sName,nam.postapplied,"-","-",age,"-","-","-","-","-","-","-","-","-","Not Shortlisted",nam.corresmobile,nam.correspersmail]);
    sheet.getRow(1).border = {
      top: {style:'thick'},
      left: {style:'thick'},
      bottom: {style:'thick'},
      right: {style:'thick'}
    };


    return workbook;
}

function agecalc(dob){
  const date = new Date(); 
  let year= date.getFullYear(); 
  let month=date.getMonth()+1; 
  let day=date.getDate(); 
  let age=0;
  let fyear="",fmonth="",fday="";
  let c=0;

  for(let i=0;i<dob.length;i++){
    if(dob[i]==="-"){
      c+=1;
      continue;
    }
    if(c==0){
      fyear+=dob[i];
    }
    else if(c==1){
      fmonth+=dob[i];
    }
    else if(c==2){
      fday+=dob[i];
    }
    else{
      print(error);
    }
  }

  if(month>=parseInt(fmonth)){
    if(day>=parseInt(fday)){
      age=year-parseInt(fyear);
    }
    else{
      age=year-parseInt(fyear)-1;
    }
  }
  else{
    age=year-parseInt(fyear)-1;
  }
  return age;

}

async function exceljs(nam,sName) {
  
  const age = agecalc(nam.dob);
  const workbook = work(nam,sName,age);
  await workbook.xlsx.writeFile("faculty.xlsx");

}

function aexceljs(nam,sName){

  const workbook = new ExcelJS.Workbook();
  const age = agecalc(nam.dob);
  workbook.xlsx.readFile('faculty.xlsx')
  .then(function() {
      const sheet = workbook.getWorksheet('facultyApplicantSheet');

      sheet.addRow([sName,nam.postapplied,age,nam.corresmobile,nam.correspersmail]);

      return workbook.xlsx.writeFile('faculty.xlsx');
  })
  .then(function() {
      console.log('New data appended successfully!');
  });

}



module.exports={
    exceljs,
    aexceljs,
};