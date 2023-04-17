const { default: jsPDF } = require('jspdf');
var fs = require('fs');
require('jspdf-autotable');


function generatePdf(res, nam,link,sName,name){
    console.log("checkpoint 1 passed");
    var pdfdoc = new jsPDF();

    var image64 = fs.readFileSync('./bmu.jpg', 'base64');
    
    pdfdoc.addImage(image64, "JPEG", 180, 10, 10, 10);
    //  Set the page size and add the image to the header
    pdfdoc.setFontSize(14);
    pdfdoc.text("BML MUNJAL UNIVERSITY,",110,20,{align:'center'},{maxWidth:100})
    pdfdoc.text(" GURUGRAM, HARYANA,",110,30,{align:'center'},{maxWidth:100})
    pdfdoc.text(" INDIA Application for Appointment of Faculty Members",110,40,{align:'center'},{maxWidth:100})
    pdfdoc.setFontSize(10);
    pdfdoc.text("Post applied: "+nam.postapplied,20,60);
    pdfdoc.text("School/Department: "+nam.schoolapplied,20,70);
    pdfdoc.text("Name: "+sName,20,80);
    pdfdoc.text("Marital Status: "+nam.marital,20,90);
    pdfdoc.text("Gender: "+nam.gender,20,100,);
    pdfdoc.text("Date of Birth: "+nam.dob,20,110);
    pdfdoc.setFontSize(12);
    pdfdoc.setTextColor(242, 101, 106);
    pdfdoc.text("Address of Correspondence",20,120);
    pdfdoc.setTextColor(0, 0, 0);
    pdfdoc.setFontSize(10);
    pdfdoc.text("Address: "+nam.correshno + nam.correslane + nam.corresstreet + nam.correscity + nam.corresstate + nam.correscountry + nam.correspin,20,130);
    pdfdoc.text("Phone: "+nam.corresphone,20,140);
    pdfdoc.text("Mobile: "+nam.corresmobile,20,150);
    pdfdoc.text("Personal Email: "+nam.correspersmail,20,160);
    pdfdoc.text("Alternate Email: "+nam.corresaltmail,20,170);
    pdfdoc.setFontSize(12);
    pdfdoc.setTextColor(242, 101, 106);
    pdfdoc.text("Permanent Address",20,180);
    pdfdoc.setTextColor(0, 0, 0);
    pdfdoc.setFontSize(10);
    pdfdoc.text("Address: "+nam.permhno+nam.permlane+nam.permstreet+nam.permcity+nam.permstate+nam.permcountry+nam.permpin,20,190);
    pdfdoc.text("Phone: "+nam.permphone,20,200);
    pdfdoc.text("Mobile: "+nam.permmobile,20,210);
    pdfdoc.text("Personal Email: "+nam.permpersmail,20,220);
    pdfdoc.text("Alternate Email: "+nam.permaltmail,20,230);
    pdfdoc.setFontSize(12);
    pdfdoc.text("Present Employment",20,240);
    pdfdoc.setFontSize(10);
    pdfdoc.text("Designation "+nam.presdesig,20,250);
    pdfdoc.text("Organization "+nam.presorga,20,260);
    pdfdoc.text("Date of Joining "+nam.presdoj,20,270);
    pdfdoc.text("Scale of pay in ₹ "+nam.pressop,20,280);
    pdfdoc.text("Pay in ₹ "+nam.prespay,20,290);
    pdfdoc.text("Total emoluments (per month) in ₹ "+nam.prestotalem,20,300);
    pdfdoc.setFontSize(12);
    pdfdoc.text("Area of specialization",20,310);
    pdfdoc.setFontSize(10);
    pdfdoc.text(nam.areaofspec,20,320);
    pdfdoc.setFontSize(12);
    pdfdoc.text("Current areas of research",20,330);
    pdfdoc.setFontSize(10);
    pdfdoc.text(nam.areasofresearch,20,340);
    pdfdoc.addPage();
    pdfdoc.setFontSize(12);
    pdfdoc.text("Academic record starting with graduation",30,30);
    pdfdoc.setFontSize(10);
    var head1 = [['Degree', 'College/University/Institute', 'Year of Joining', 'Year of Leaving','Percentage/CGPA']]
    var body1 = [
        [ nam.degree1, nam.college1, nam.yearoj1,nam.yol1,nam.percent1],
        [ nam.degree2, nam.college2, nam.yearoj2,nam.yol2,nam.percent2],
        [ nam.degree3, nam.college3, nam.yearoj3,nam.yol3,nam.percent3],
        [ nam.degree4, nam.college4, nam.yearoj4,nam.yol4,nam.percent4],
    ];
    pdfdoc.autoTable({ head: head1, body: body1 });
    pdfdoc.setFontSize(12);
    pdfdoc.text("Academic record starting with graduation",30,90);
    pdfdoc.setFontSize(10);
    var head2 = [['Employer', 'Position held', 'Date of Joining', 'Date of Leaving','Gross pay','Scale of pay']]
    var body2 = [
        [ nam.pastemp1, nam.pastpos1, nam.pastdoj1,nam.pastdol1,nam.pastgrossp1,nam.pastsop1],
        [ nam.pastemp2, nam.pastpos2, nam.pastdoj2,nam.pastdol2,nam.pastgrossp2,nam.pastsop2],
        [ nam.pastemp3, nam.pastpos3, nam.pastdoj3,nam.pastdol3,nam.pastgrossp3,nam.pastsop3],
        [ nam.pastemp4, nam.pastpos4, nam.pastdoj4,nam.pastdol4,nam.pastgrossp4,nam.pastsop4],
    ];
    pdfdoc.autoTable({ head: head2, body: body2}) 
    pdfdoc.setFontSize(12);
    pdfdoc.text("Publications",30,150);
    pdfdoc.setFontSize(10);

    var head3 = [['Description', 'Amount', 'Description', 'Amount']]
    var body3 = [
        [ "h-index (by scopus.com)", nam.hindex, "Total Citations (by scopus.com)",nam.totalcitations],
        [ "Total number of Publications in International Journals", nam.totalpubliinter, "Total number of Publications in National Journals",nam.totalpublinnati],
        [ "Out of total publications how many are in-"],
        [ "Scopus indexed Journals", nam.scopjourn, "ESCI indexed Journals",nam.escijourn],
        [ "SCI indexed Journals", nam.scijourn, "ABDC indexed Journals",nam.abdcjourn],
        [ "SCIE indexed Journals", nam.sciejourn, "No. of Papers Presented in International Conferences",nam.totalpapinter],
        [ "No. of Papers Presented in National Conferences", nam.totalpapnati, "No. of articles/ book chapters published",nam.articlespublish],
        [ "Number of Books Edited", nam.booksedit, "No. of Patents/Copyrights (Filed/ Awarded)",nam.patentscr],
        [ "Sponsored Research Project", nam.sponsproj, "No. of  Masters / PhD Guided",nam.phdguided],
        [ "Courses Developed ", nam.coursesdeveloped],
    ];
    pdfdoc.autoTable({ head:head3, body: body3}); 
    pdfdoc.addPage();
    pdfdoc.setFontSize(13);
    pdfdoc.setTextColor(242, 101, 106);
    pdfdoc.text("References",30,10);
    pdfdoc.setTextColor(0,0,0);
    pdfdoc.setFontSize(12);
    pdfdoc.text("First Reference",30,20);
    pdfdoc.setFontSize(10);
    pdfdoc.text("Name: "+nam.reffname1+nam.refmname1+nam.reflname1,30,30);
    pdfdoc.text("Occupation: "+nam.refoccu1,30,40);
    pdfdoc.text("Address: "+nam.refaddre1,30,50);
    pdfdoc.text("Mobile: "+nam.refmob1,30,60);
    pdfdoc.text("Email Id: "+nam.refemail1,30,70);
    pdfdoc.text("Landline:" +nam.reflandline1,30,80);
    pdfdoc.setFontSize(12);
    pdfdoc.text("Second Reference",30,90);
    pdfdoc.setFontSize(10);
    pdfdoc.text("Name: "+nam.reffname2+nam.refmname2+nam.reflname2,30,100);
    pdfdoc.text("Occupation: "+nam.refoccu2,30,110);
    pdfdoc.text("Address: "+nam.refaddre2,30,120);
    pdfdoc.text("Mobile: "+nam.refmob2,30,130);
    pdfdoc.text("Email Id: "+nam.refemail2,30,140);
    pdfdoc.text("Landline: "+nam.reflandline2,30,150);
    pdfdoc.setFontSize(12);
    pdfdoc.text("Third Reference",30,160);
    pdfdoc.setFontSize(10);
    pdfdoc.text("Name: "+nam.reffname3+nam.refmname3+nam.reflname3,30,170);
    pdfdoc.text("Occupation: "+nam.refoccu3,30,180);
    pdfdoc.text("Address: "+nam.refaddre3,30,190);
    pdfdoc.text("Mobile: "+nam.refmob3,30,200);
    pdfdoc.text("Email Id: "+nam.refemail3,30,210);
    pdfdoc.text("Landline: "+nam.reflandline3,30,220);
    pdfdoc.setFontSize(12);
    pdfdoc.setTextColor(242, 101, 106);
    pdfdoc.text("Please indicate as to why you wish to join BMU:",30,230);
    pdfdoc.setTextColor(0, 0, 0);
    pdfdoc.setFontSize(10);
    pdfdoc.text(nam.whyjoin,30,240);
    pdfdoc.setFontSize(12);
    pdfdoc.setTextColor(242, 101, 106);
    pdfdoc.text("How do you meet the job requirements?",30,260);
    pdfdoc.setTextColor(0, 0, 0);
    pdfdoc.setFontSize(10);
    pdfdoc.text(nam.jobreq,30,270);
    pdfdoc.setFontSize(12);
    pdfdoc.setTextColor(242, 101, 106);
    pdfdoc.text("A description on which research/teaching/development programmes you would like to undertake and the courses you would like to teach at UG and PG levels.",30,280,{maxWidth:150});
    pdfdoc.setTextColor(0, 0, 0);
    pdfdoc.text(nam.progdesc,30,290);

    pdfdoc.save("./pdf/"+name+".pdf");

    console.log("checkpoint 2 passed");
    
    const fileLink = link + "pdf";
    // console.log(fileLink);
    console.log("sending response to client");
    res.send(
        JSON.stringify({
            downloadLink: fileLink,
        },
        )
    )
    // --> this is to save the doc add the name of the file in the brackets in ""
}

module.exports={
    generatePdf,
};