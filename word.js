const { default: jsPDF } = require('jspdf');

function generateWordDocument(docx, nam,sName) {
    const stylesborder = {
        top: { style: "thin", color: "000000" },
        bottom: { style: "thin", color: "000000" },
        left: { style: "thin", color: "000000" },
        right: { style: "thin", color: "000000" },
    };

    
    const table1 = new docx.Table({
        cantSplit: true,
        columnWidths: [4505, 4505],
        rows: [
            new docx.TableRow({
                children: [
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.Paragraph("Degree")],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.Paragraph("College / University / Institute")],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.Paragraph("Year of Joining")],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.Paragraph("Year of Leaving")],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.Paragraph("Percentage/ CGPA")],
                        borders:stylesborder
                    }),
                ],
            }),
            new docx.TableRow({
                children: [
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.degree1)],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.college1)],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.yearoj1)],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.yol1)],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.percent1)],
                        borders:stylesborder
                    }),
                ],
            }),
            new docx.TableRow({
                children: [
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.degree2)],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.college2)],
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.yearoj2)],
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.yol2)],
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.percent2)],
                    }),
                ],
            }),
            new docx.TableRow({
                children: [
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.degree3)],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.college3)],
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.yearoj3)],
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.yol3)],
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.percent3)],
                    }),
                ],
            }),
            new docx.TableRow({
                children: [
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.degree4)],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.college4)],
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.yearoj4)],
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.yol4)],
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.percent4)],
                    }),
                ],
            }),
        ],
    });

    const table2 = new docx.Table({
        cantSplit: true,
        columnWidths: [4505, 4505],
        rows: [
            new docx.TableRow({
                children: [
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.Paragraph("Employer")],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.Paragraph("Position")],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.Paragraph("Date of Joining")],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.Paragraph("Date of Leaving")],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.Paragraph("Gross Pay")],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.Paragraph("Scale of Pay")],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.Paragraph("Reason of Leaving")],
                        borders:stylesborder
                    }),

                ],
            }),
            new docx.TableRow({
                children: [
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastemp1)],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastpos1)],
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastdoj1)],
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastdol1)],
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastgrossp1)],
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastsop1)],
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastreasol1)],
                    }),
                ],
            }),

            new docx.TableRow({
                children: [
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastemp2)],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastpos2)],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastdoj2)],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastdol2)],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastgrossp2)],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastsop2)],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastreasol2)],
                        borders:stylesborder
                    }),
                ],
            }),

            new docx.TableRow({
                children: [
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastemp3)],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastpos3)],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastdoj3)],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastdol3)],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastgrossp3)],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastsop3)],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastreasol3)],
                        borders:stylesborder
                    }),
                ],
            }),
            new docx.TableRow({
                children: [
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastemp4)],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastpos4)],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastdoj4)],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastdol4)],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastgrossp4)],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastsop4)],
                        borders:stylesborder
                    }),
                    new docx.TableCell({
                        width: {
                            size: 4505,
                            type: docx.WidthType.DXA,
                        },
                        children: [new docx.TextRun(nam.pastreasol4)],
                        borders:stylesborder
                    }),
                ],
            }),
        ],
    });

    const table3 = new docx.Table({
        cantSplit: true,
        rows: [
            new docx.TableRow({
                children: [
                    new docx.TableCell({
                        children: [new docx.Paragraph("h-index (by scopus.com)")],
                        borders:stylesborder,
                    }),
                    new docx.TableCell({
                        children: [new docx.Paragraph(nam.hindex)],
                        borders:stylesborder,
                    }),
                    new docx.TableCell({
                        children: [new docx.Paragraph("Total Citations (by scopus.com)")],
                        borders:stylesborder,
                    }),
                    new docx.TableCell({
                        children: [new docx.Paragraph(nam.totalcitations)],
                        borders:stylesborder,
                    }),
                ],
            }),
            new docx.TableRow({
                children: [
                    new docx.TableCell({
                        children: [new docx.Paragraph("Total number of Publications in International Journals")],
                        borders:stylesborder,
                    }),
                    new docx.TableCell({
                        children: [new docx.Paragraph(nam.totalpubliinter)],
                        borders:stylesborder,
                    }),
                    new docx.TableCell({
                        children: [new docx.Paragraph("Total number of Publications in National Journals")],
                        borders:stylesborder,
                    }),
                    new docx.TableCell({
                        children: [new docx.Paragraph(nam.totalpublinnati)],
                        borders:stylesborder,
                    }),
                ],
            }),
            new docx.TableRow({
                children: [
                    new docx.TableCell({
                        children: [new docx.Paragraph("Scopus indexed Journals")],
                        borders:stylesborder,
                    }),
                    new docx.TableCell({
                        children: [new docx.Paragraph(nam.scopjourn)],
                        borders:stylesborder,
                    }),
                    new docx.TableCell({
                        children: [new docx.Paragraph("ESCI indexed Journals")],
                        borders:stylesborder,
                    }),
                    new docx.TableCell({
                        children: [new docx.Paragraph(nam.escijourn)],
                        borders:stylesborder,
                    }),
                ],
            }),
            new docx.TableRow({
                children: [
                    new docx.TableCell({ children: [new docx.Paragraph("SCI indexed Journals")] }),
                    new docx.TableCell({ children: [new docx.Paragraph(nam.scijourn)] }),
                    new docx.TableCell({ children: [new docx.Paragraph("ABDC indexed Journals")] }),
                    new docx.TableCell({ children: [new docx.Paragraph(nam.abdcjourn)] }),
                ],
                borders:stylesborder,
            }),
            new docx.TableRow({
                children: [
                    new docx.TableCell({ children: [new docx.Paragraph("SCIE indexed Journals")] }),
                    new docx.TableCell({ children: [new docx.Paragraph(nam.sciejourn)] }),
                    new docx.TableCell({ children: [new docx.Paragraph("No. of Papers Presented in International Conferences")] }),
                    new docx.TableCell({ children: [new docx.Paragraph(nam.totalpapinter)] }),
                ],
                borders:stylesborder,
            }),
            new docx.TableRow({
                children: [
                    new docx.TableCell({ children: [new docx.Paragraph("No. of Papers Presented in National Conferences")] }),
                    new docx.TableCell({ children: [new docx.Paragraph(nam.totalpapnati)] }),
                    new docx.TableCell({ children: [new docx.Paragraph("No. of articles/ book chapters published")] }),
                    new docx.TableCell({ children: [new docx.Paragraph(nam.articlespublish)] }),
                ],
                borders:stylesborder,
            }),
            new docx.TableRow({
                children: [
                    new docx.TableCell({ children: [new docx.Paragraph("Number of Books Edited")] }),
                    new docx.TableCell({ children: [new docx.Paragraph(nam.booksedit)] }),
                    new docx.TableCell({ children: [new docx.Paragraph("No. of Patents/Copyrights (Filed/ Awarded)")] }),
                    new docx.TableCell({ children: [new docx.Paragraph(nam.patentscr)] }),
                ],
                borders:stylesborder,
            }),
            new docx.TableRow({
                children: [
                    new docx.TableCell({ children: [new docx.Paragraph("Sponsored Research Project")] }),
                    new docx.TableCell({ children: [new docx.Paragraph(nam.sponsproj)] }),
                    new docx.TableCell({ children: [new docx.Paragraph("No. of  Masters / PhD Guided")] }),
                    new docx.TableCell({ children: [new docx.Paragraph(nam.phdguided)] }),
                ],
                borders:stylesborder,
            }),
            new docx.TableRow({
                children: [
                    new docx.TableCell({ children: [new docx.Paragraph("Courses Developed")] }),
                    new docx.TableCell({ children: [new docx.Paragraph(nam.coursesdeveloped)] }),
                    new docx.TableCell({ children: [new docx.Paragraph("")] }),
                    new docx.TableCell({ children: [new docx.Paragraph("")] }),
                ],
                borders:stylesborder,
            }),
        ],
    });
    

    const doc = new docx.Document({
        sections : [ 
        {
            properties : {},
            children: [
                    new docx.Paragraph({
                        children:[
                            new docx.TextRun({
                                bold: true,
                                text: "BML MUNJAL UNIVERSITY,",
                                break:1,
                                text: "GURUGRAM, HARYANA,",
                                break:1,
                                text: "INDIA Application for Appointment of Faculty Members",
                                heading: docx.HeadingLevel.HEADING_1,
                                alignment: docx.AlignmentType.CENTER,
                            }),
                        ]
                    }).CENTER,

                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Post applied for:" + nam.postapplied)
                        ]
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("School/Department:" + nam.schoolapplied)
                        ]
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Name: " + sName),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Marital Status:" + nam.marital)
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Gender:" + nam.gender)
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Date of Birth" + nam.dob)
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun({
                                bold: true,
                                text: "Address for Correspondence",
                                heading: docx.HeadingLevel.HEADING_1,
                                alignment: docx.AlignmentType.CENTER,
                                break: 1,
                            }),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Address:" + nam.correshno + "," + nam.correslane + "," + nam.corresstreet + "," + nam.correscity + "," + nam.corresstate + "," + nam.correscountry + "," + nam.correspin),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Phone:" + nam.corresphone),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Mobile No.:" + nam.corresmobile),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Primary Email:" + nam.correspersmail),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Alternate Email:" + nam.corresaltmail),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun({
                                bold: true,
                                text: "Permanent Address",
                                heading: docx.HeadingLevel.HEADING_1,
                                alignment: docx.AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun(nam.permhno + "," + nam.permlane + "," + nam.permstreet + "," + nam.permcity + "," + nam.permstate + "," + nam.permcountry + "," + nam.permpin),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Phone:" + nam.permphone),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Mobile No.:" + nam.permmobile),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Primary Email:" + nam.permpersmail),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Alternate Email:" + nam.permaltmail),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun({
                                bold: true,
                                text: "Present Employment",
                                heading: docx.HeadingLevel.HEADING_1,
                                alignment: docx.AlignmentType.CENTER,
                                break: 1,
                            }),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Designation:" + nam.presdesig),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Organization:" + nam.presorga),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Date of Joining:" + nam.presdoj),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Scale of pay in ₹:" + nam.pressop),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Pay in ₹:" + nam.prespay),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Total emoluments (per month) in ₹:" + nam.prestotalem),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun({
                                bold: true,
                                text: "Area of Specialization",
                                heading: docx.HeadingLevel.HEADING_1,
                                alignment: docx.AlignmentType.CENTER,
                            }),
                            new docx.TextRun(nam.areaofspec),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun({
                                bold: true,
                                text: "Current areas of Research",
                                heading: docx.HeadingLevel.HEADING_1,
                                alignment: docx.AlignmentType.CENTER,
                            }),
                            new docx.TextRun(nam.areasofresearch),
                        ],
                    }),

                    new docx.Paragraph({
                        children: [
                            new docx.Paragraph({
                                bold: true,
                                text: "Academic record starting with graduation",
                                heading: docx.HeadingLevel.HEADING_1,
                                alignment: docx.AlignmentType.CENTER,
                                break: 1
                            }),
                            table1,
                        ]
                    }),

                    new docx.Paragraph({
                        children: [
                            new docx.Paragraph({
                                bold: true,
                                text: "Past Employment",
                                heading: docx.HeadingLevel.HEADING_1,
                                alignment: docx.AlignmentType.CENTER,
                                break: 1,

                            }),
                            table2,
                        ]
                    }),

                    new docx.Paragraph({
                        children: [
                            new docx.Paragraph({
                                bold: true,
                                text: "Publications *(only mention numbers)",
                                heading: docx.HeadingLevel.HEADING_1,
                                alignment: docx.Alignment.CENTER,
                                break: 1,
                            }),
                            table3,
                        ]
                    }),

                    new docx.Paragraph({
                        children: [
                            new docx.Paragraph({
                                bold: true,
                                heading: docx.HeadingLevel.HEADING_1,
                                alignment: docx.AlignmentType.CENTER,
                                text: "Names and addresses of three References (at least one of them should be familiar with your recent work)"
                            }),
                        ]
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.Paragraph({
                                bold: true,
                                heading: docx.HeadingLevel.HEADING_3,
                                text: "First Reference",
                            }),
                        ]
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Name:" + nam.reffname1 + nam.refmname1 + nam.reflname1),
                        ]
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Occupation or Position:" + nam.refoccu1),
                        ]
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Address:" + nam.refaddre1),
                        ]
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Mobile:" + nam.refmob1),
                        ]
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("E-mail:" + nam.refemail1),
                        ]
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Landline no.:" + nam.reflandline1),
                        ]
                    }),

                    new docx.Paragraph({
                        children: [
                            new docx.Paragraph({
                                bold: true,
                                heading: docx.HeadingLevel.HEADING_3,
                                text: "Second Reference",
                            }),
                        ]
                    }),

                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Name:" + nam.reffname2 + nam.refmname2 + nam.reflname2),
                        ]
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Occupation or Position:" + nam.refoccu2),
                        ]
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Address:" + nam.refaddre2),
                        ]
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Mobile:" + nam.refmob2),
                        ]
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("E-mail:" + nam.refemail2),
                        ]
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Landline no.:" + nam.reflandline2),
                        ]
                    }),

                    new docx.Paragraph({
                        children: [
                            new docx.Paragraph({
                                bold: true,
                                heading: docx.HeadingLevel.HEADING_3,
                                text: "Third Reference",
                            }),
                        ]
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Name:" + nam.reffname3 + nam.refmname3 + nam.reflname3),
                        ]
                    }),
                    new docx.Paragraph({
                        children: [,
                            new docx.TextRun("Occupation or Position:" + nam.refoccu3),
                        ]
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Address:" + nam.refaddre3),
                        ]
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Mobile:" + nam.refmob3),
                        ]
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("E-mail:" + nam.refemail3),
                        ]
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun("Landline no.:" + nam.reflandline3),
                        ]
                    }),

                    new docx.Paragraph({
                        children: [
                            new docx.TextRun({
                                bold: true,
                                text: "Statement of Purpose:",
                                heading: docx.HeadingLevel.HEADING_1,
                                alignment: docx.AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun({
                                bold: true,
                                text: "Please indicate as to why you wish to join BMU:",
                                heading: docx.HeadingLevel.HEADING_4,
                                alignment: docx.AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun(nam.whyjoin),
                        ]
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun({
                                bold: true,
                                text: "How do you meet the job requirements?",
                                heading: docx.HeadingLevel.HEADING_4,
                                alignment: docx.AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun(nam.jobreq),
                        ]
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun({
                                bold: true,
                                text: "A description on which research/teaching/development programmes you would like to undertake and the courses you would like to teach at UG and PG levels.",
                                heading: docx.HeadingLevel.HEADING_4,
                                alignment: docx.AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun(nam.progdesc),
                        ]
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.Paragraph("I hereby declare that I have carefully read and understood the instructions and particulars supplied to me, and that all entries in this form as well as the attached sheets are true to the best of my knowledge and belief.")
                        ]
                    })
                ],
        }],
            
    });
    return doc;
}

// Code with jspdf

function generatePdf(nam){

    var pdfdoc = new jsPDF();
    var imgData = 'bmu.jpg';
//  Set the page size and add the image to the header
    pdfdoc.addPage();
    pdfdoc.addImage(imgData, 'JPEG', 150, 10, 40, 40);
    pdfdoc.setFontSize(14);
    pdfdoc.text("BML MUNJAL UNIVERSITY, GURUGRAM, HARYANA, INDIA Application for Appointment of Faculty Members",20,20,'center')
    pdfdoc.setFontSize(10);
    pdfdoc.text("Post applied:"+nam.postappplied,20,30);
    pdfdoc.text("School/Department:"+nam.schoolapplied,20,40);
    pdfdoc.text("Name: "+nam.firstname+" "+nam.middlename+" "+nam.lastname,20,50);
    pdfdoc.text("Marital Status:"+nam.marital,20,60);
    pdfdoc.text("Gender:"+nam.gender,20,70,);
    pdfdoc.text("Date of Birth:"+nam.dob,20,80);
    pdfdoc.setFontSize(12);
    pdfdoc.text("Address of Correspondence",20,90);
    pdfdoc.setFontSize(10);
    pdfdoc.text("Address:"+nam.correshno + nam.correslane + nam.corresstreet + nam.correscity + nam.corresstate + nam.correscountry + nam.correspin,20,100);
    pdfdoc.text("Phone:"+nam.corresphone,20,110);
    pdfdoc.text("Mobile:"+nam.corresmobile,20,120);
    pdfdoc.text("Personal Email:"+nam.correspersmail,20,130);
    pdfdoc.text("Alternate Email:"+nam.corresaltmail,20,140);
    pdfdoc.setFontSize(12);
    pdfdoc.text("Permanent Address",20,150);
    pdfdoc.setFontSize(10);
    pdfdoc.text("Address:"+nam.permhno+nam.permlane+nam.permstreet+nam.permcity+nam.permstate+nam.permcountry+nam.permpin,20,160);
    pdfdoc.text("Phone:"+nam.permphone,20,170);
    pdfdoc.text("Mobile:"+nam.permmobile,20,180);
    pdfdoc.text("Personal Email:"+nam.permpersmail,20,190);
    pdfdoc.text("Alternate Email:"+nam.permaltmail,20,200);
    pdfdoc.setFontSize(12);
    pdfdoc.text("Present Employment",20,210);
    pdfdoc.setFontSize(10);
    pdfdoc.text("Designation"+nam.presdesig,20,210);
    pdfdoc.text("Organization"+nam.presorga,20,220);
    pdfdoc.text("Date of Joining"+nam.presdoj,20,230);
    pdfdoc.text("Scale of pay in ₹"+nam.pressop,20,240);
    pdfdoc.text("Pay in ₹"+nam.prespay,20,250);
    pdfdoc.text("Total emoluments (per month) in ₹"+nam.prestotalem,20,260);
    pdfdoc.setFontSize(12);
    pdfdoc.text("Area of specialization",20,270);
    pdfdoc.setFontSize(10);
    pdfdoc.text(nam.areaofspec,20,280);
    pdfdoc.setFontSize(12);
    pdfdoc.text("Current areas of research",20,290);
    pdfdoc.setFontSize(10);
    pdfdoc.text(nam.areasofresearch,20,300);
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
    pdfdoc.text("Academic record starting with graduation",30,37);
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
    pdfdoc.text("Publications",30,43);
    pdfdoc.setFontSize(10);
    var body3 = [
        [ "h-index (by scopus.com)", nam.hindex, "Total Citations (by scopus.com)",nam.totalcitations],
        [ "Total number of Publications in International Journals", nam.totalpubliinter, "Total number of Publications in National Journals",nam.totalpublinnati]
        [ "Out of total publications how many are in-", "", "",""]
        [ "Scopus indexed Journals", nam.scopjourn, "ESCI indexed Journals",nam.escijourn],
        [ "SCI indexed Journals", nam.scijourn, "ABDC indexed Journals",nam.abdcjourn],
        [ "SCIE indexed Journals", nam.sciejourn, "No. of Papers Presented in International Conferences",nam.totalpapinter],
        [ "No. of Papers Presented in National Conferences", nam.totalpapnati, "No. of articles/ book chapters published",nam.articlespublish],
        [ "Number of Books Edited", nam.booksedit, "No. of Patents/Copyrights (Filed/ Awarded)",nam.patentscr],
        [ "Sponsored Research Project", nam.sponsproj, "No. of  Masters / PhD Guided",nam.phdguided],
        [ "Courses Developed ", nam.coursesdeveloped, "",""],
    ];
    pdfdoc.autoTable({ body: body3}); 
    pdfdoc.setFontSize(13);
    pdfdoc.text("References",30,55);
    pdfdoc.setFontSize(12);
    pdfdoc.text("First Reference",30,56);
    pdfdoc.setFontSize(10);
    pdfdoc.text("Name: "+nam.reffname1+nam.refmname1+nam.reflname1,30,57);
    pdfdoc.text("Occupation:"+nam.refoccu1,30,58);
    pdfdoc.text("Address:"+nam.refaddre1,30,59);
    pdfdoc.text("Mobile:"+nam.refmob1,30,60);
    pdfdoc.text("Email Id:"+nam.refemail1,30,61);
    pdfdoc.text("Landline:"+nam.reflandline1,30,62);
    pdfdoc.setFontSize(12);
    pdfdoc.text("Second Reference",30,63);
    pdfdoc.setFontSize(10);
    pdfdoc.text("Name: "+nam.reffname2+nam.refmname2+nam.reflname2,30,64);
    pdfdoc.text("Occupation:"+nam.refoccu2,30,65);
    pdfdoc.text("Address:"+nam.refaddre2,30,66);
    pdfdoc.text("Mobile:"+nam.refmob2,30,67);
    pdfdoc.text("Email Id:"+nam.refemail2,30,68);
    pdfdoc.text("Landline:"+nam.reflandline2,30,69);
    pdfdoc.setFontSize(12);
    pdfdoc.text("Third Reference",30,70);
    pdfdoc.setFontSize(10);
    pdfdoc.text("Name: "+nam.reffname3+nam.refmname3+nam.reflname3,30,71);
    pdfdoc.text("Occupation:"+nam.refoccu3,30,72);
    pdfdoc.text("Address:"+nam.refaddre3,30,73);
    pdfdoc.text("Mobile:"+nam.refmob3,30,74);
    pdfdoc.text("Email Id:"+nam.refemail3,30,75);
    pdfdoc.text("Landline:"+nam.reflandline3,30,76);
    pdfdoc.setFontSize(12);
    pdfdoc.text("Please indicate as to why you wish to join BMU:",30,77);
    pdfdoc.setFontSize(10);
    pdfdoc.text(nam.whyjoin,30,78);
    pdfdoc.setFontSize(12);
    pdfdoc.text("How do you meet the job requirements?",30,79);
    pdfdoc.setFontSize(10);
    pdfdoc.text(nam.jobreq,30,80);
    pdfdoc.setFontSize(12);
    pdfdoc.text("A description on which research/teaching/development programmes you would like to undertake and the courses you would like to teach at UG and PG levels.",30,81);
    pdfdoc.text(nam.progdesc,30,82);

    pdfdoc.save("pppddff");// --> this is to save the doc add the name of the file in the brackets in ""
}

module.exports={
    generateWordDocument,
    generatePdf,
};
