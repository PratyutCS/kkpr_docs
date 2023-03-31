const { default: jsPDF } = require('jspdf');
require('jspdf-autotable');


function generatePdf(res, nam,link,sName,name){
    console.log("checkpoint 1 passed");
    var pdfdoc = new jsPDF();
    var imgData = "data:image/jpeg;base64,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"
    pdfdoc.addImage(imgData, "JPEG", 180, 10, 10, 10);
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