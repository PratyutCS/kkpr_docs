import './App.css';
import React, { PureComponent, useState } from 'react';

import jsPDF from 'jspdf';

const link = process.env.REACT_APP_API;


function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    marital: "",
    gender: "",
    dob: "",
    pemail: "",
    postapplied: "",
    schoolapplied: "",
    correshno: "",
    correslane: "",
    corresstreet: "",
    correscity: "",
    corresstate: "",
    correscountry: "",
    correspin: "",
    corresphone: "",
    corresmobile: "",
    correspersmail: "",
    corresaltmail: "",
    permhno: "",
    permlane: "",
    permstreet: "",
    permcity: "",
    permstate: "",
    permcountry: "",
    permpin: "",
    permphone: "",
    permmobile: "",
    permpersmail: "",
    permaltmail: "",
    presdesig: "",
    presorga: "",
    presdoj: "",
    pressop: "",
    prespay: "",
    prestotalem: "",
    areaofspec: "",
    areasofresearch: "",
    degree1: "",
    degree2: "",
    degree3: "",
    degree4: "",
    college1: "",
    college2: "",
    college3: "",
    college4: "",
    yearoj1: "",
    yearoj2: "",
    yearoj3: "",
    yearoj4: "",
    yol1: "",
    yol2: "",
    yol3: "",
    yol4: "",
    percent1: "",
    percent2: "",
    percent3: "",
    percent4: "",
    pastemp1: "",
    pastemp2: "",
    pastemp3: "",
    pastemp4: "",
    pastpos1: "",
    pastpos2: "",
    pastpos3: "",
    pastpos4: "",
    pastreasol1: "",
    pastreasol2: "",
    pastreasol3: "",
    pastreasol4: "",
    pastgrossp1: "",
    pastgrossp2: "",
    pastgrossp3: "",
    pastgrossp4: "",
    pastsop1: "",
    pastsop2: "",
    pastsop3: "",
    pastsop4: "",
    pastdoj1: "",
    pastdoj2: "",
    pastdoj3: "",
    pastdoj4: "",
    pastdol1: "",
    pastdol2: "",
    pastdol3: "",
    pastdol4: "",
    coursetoc1: "",
    coursetoc2: "",
    coursetoc3: "",
    coursetoc4: "",
    courseugorpg1: "",
    courseugorpg2: "",
    courseugorpg3: "",
    courseugorpg4: "",
    courseindi1: "",
    courseindi2: "",
    courseindi3: "",
    courseindi4: "",
    courseyear1: "",
    courseyear2: "",
    courseyear3: "",
    courseyear4: "",
    facultytop1: "",
    facultytop2: "",
    facultytop3: "",
    facultytop4: "",
    facultyattended1: "",
    facultyattended2: "",
    facultyattended3: "",
    facultyattended4: "",
    facultydates1: "",
    facultydates4: "",
    facultydates2: "",
    facultydates3: "",
    facultyorga1: "",
    facultyorga2: "",
    facultyorga3: "",
    facultyorga4: "",
    mooctoc1: "",
    mooctoc3: "",
    mooctoc2: "",
    mooctoc4: "",
    moocugorpg1: "",
    moocugorpg4: "",
    moocugorpg2: "",
    moocugorpg3: "",
    moocindiv1: "",
    moocindiv2: "",
    moocindiv3: "",
    moocindiv4: "",
    moocyear1: "",
    moocyear2: "",
    moocyear3: "",
    moocyear4: "",
    mastnos1: "",
    mastnos3: "",
    mastnos2: "",
    mastnos4: "",
    masttitlethesis1: "",
    masttitlethesis2: "",
    masttitlethesis3: "",
    masttitlethesis4: "",
    mastdoct1: "",
    mastdoct4: "",
    mastdoct2: "",
    mastdoct3: "",
    mastyear1: "",
    mastyear2: "",
    mastyear3: "",
    mastyear4: "",
    mastcog1: "",
    mastcog2: "",
    mastcog3: "",
    mastcog4: "",
    sponsagenc1: "",
    sponsagenc2: "",
    sponsagenc3: "",
    sponsagenc4: "",
    sponstitleofproj1: "",
    sponstitleofproj2: "",
    sponstitleofproj3: "",
    sponstitleofproj4: "",
    sponsfund1: "",
    sponsfund3: "",
    sponsfund2: "",
    sponsfund4: "",
    sponsdur1: "",
    sponsdur4: "",
    sponsdur2: "",
    sponsdur3: "",
    sponscoinvi1: "",
    sponscoinvi2: "",
    sponscoinvi3: "",
    sponscoinvi4: "",
    consultproj1: "",
    consultproj2: "",
    consultproj3: "",
    consultproj4: "",
    consulttitleofproj1: "",
    consulttitleofproj2: "",
    consulttitleofproj3: "",
    consulttitleofproj4: "",
    consultfund1: "",
    consultfund4: "",
    consultfund2: "",
    consultfund3: "",
    consultdur1: "",
    consultdur2: "",
    consultdur4: "",
    consultdur3: "",
    consultcoinvi1: "",
    consultcoinvi2: "",
    consultcoinvi3: "",
    consultcoinvi4: "",
    patentstitle1: "",
    patentstitle2: "",
    patentstitle3: "",
    patentstitle4: "",
    patentsdateoffiling1: "",
    patentsdateoffiling2: "",
    patentsdateoffiling3: "",
    patentsdateoffiling4: "",
    patentssatus1: "",
    patentssatus2: "",
    patentssatus3: "",
    patentssatus4: "",
    workstitle1: "",
    workstitle3: "",
    workstitle2: "",
    workstitle4: "",
    worksaatended1: "",
    worksaatended2: "",
    worksaatended3: "",
    worksaatended4: "",
    worksdates1: "",
    worksdates2: "",
    worksdates3: "",
    worksdates4: "",
    worksorga1: "",
    worksorga2: "",
    worksorga3: "",
    worksorga4: "",
    publicadetails1: "",
    publicadetails2: "",
    publicadetails3: "",
    publicadetails4: "",
    indusorga1: "",
    indusorga2: "",
    indusorga3: "",
    indusorga4: "",
    indusworknature1: "",
    indusworknature2: "",
    indusworknature3: "",
    indusworknature4: "",
    indusdur1: "",
    indusdur2: "",
    indusdur3: "",
    indusdur4: "",
    indusdur4: "",
    societyname1: "",
    societyname2: "",
    societyname3: "",
    societyname4: "",
    societylife1: "",
    societylife2: "",
    societylife3: "",
    societylife4: "",
    awardsandrecog: "",
    releventinfo: "",
    reffname1: "",
    reffname2: "",
    reffname3: "",
    refmname1: "",
    refmname2: "",
    refmname3: "",
    reflname1: "",
    reflname2: "",
    reflname3: "",
    refoccu1: "",
    refoccu2: "",
    refoccu3: "",
    refaddre1: "",
    refaddre2: "",
    refaddre3: "",
    refmob1: "",
    refmob2: "",
    refmob3: "",
    refemail1: "",
    refemail2: "",
    refemail3: "",
    reflandline1: "",
    reflandline2: "",
    reflandline3: "",
    hindex: "",
    totalcitations: "",
    totalpubliinter: "",
    totalpublinnati: "",
    scopjourn: "",
    escijourn: "",
    scijourn: "",
    abdcjourn: "",
    sciejourn: "",
    totalpapinter: "",
    totalpapnati: "",
    articlespublish: "",
    booksedit: "",
    patentscr: "",
    sponsproj: "",
    phdguided: "",
    coursesdeveloped: "",
    whyjoin: "",
    jobreq: "",
    progdesc: ""
  });

  const onChange = (event) => {
    console.log(event);
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
    }))
  }

  function academicrecAdd() {
    // Get the table element in which you want to add row
    let table = document.getElementById("academicrecordtable");

    // Create a row using the inserRow() method and
    // specify the index where you want to add the row
    let row = table.insertRow(-1); // We are adding at the end

    // Create table cells
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    let c5 = row.insertCell(4);

    // creating input fields
    let f1 = document.createElement("input");
    let f2 = document.createElement("input");
    let f3 = document.createElement("input");
    let f4 = document.createElement("input");
    let f5 = document.createElement("input");

    // Add input to c1 and c2

    c1.appendChild(f1);
    c2.appendChild(f2);
    c3.appendChild(f3);
    c4.appendChild(f4);
    c5.appendChild(f5);

  }

  function pastempAdd() {
    // Get the table element in which you want to add row
    let table = document.getElementById("pastemptable");

    // Create a row using the inserRow() method and
    // specify the index where you want to add the row
    let row = table.insertRow(-1); // We are adding at the end

    // Create table cells
    let pe1 = row.insertCell(0);
    let pe2 = row.insertCell(1);
    let pe3 = row.insertCell(2);
    let pe4 = row.insertCell(3);
    let pe5 = row.insertCell(4);
    let pe6 = row.insertCell(5);

    // creating input fields
    let pef1 = document.createElement("input");
    let pef2 = document.createElement("input");
    let pef3 = document.createElement("input");
    pef3.type = "date";
    let pef4 = document.createElement("input");
    pef4.type = "date";
    let pef5 = document.createElement("input");
    let pef6 = document.createElement("input");
   

    // Add input to c1 and c2

    pe1.appendChild(pef1);
    pe2.appendChild(pef2);
    pe3.appendChild(pef3);
    pe4.appendChild(pef4);
    pe5.appendChild(pef5);
    pe6.appendChild(pef6);

  }

  function coursetaAdd() {
    // Get the table element in which you want to add row
    let table = document.getElementById("coursetatable");

    // Create a row using the inserRow() method and
    // specify the index where you want to add the row
    let row = table.insertRow(-1); // We are adding at the end

    // Create table cells
    let ct1 = row.insertCell(0);
    let ct2 = row.insertCell(1);
    let ct3 = row.insertCell(2);
    let ct4 = row.insertCell(3);

    // creating input fields
    let ctf1 = document.createElement("input");
    let ctf2 = document.createElement("select");
    // let cto1 = document.createElement("option");
    // let cto2 = document.createElement("option");
    // cto1.innerText("UG");
    // cto2.innerText("PG");
    // ctf2.appendChild(cto1); 
    // ctf2.appendChild(cto2); 
    let ctf3 = document.createElement("input");
    let ctf4 = document.createElement("input");

    // Add input to c1 and c2

    ct1.appendChild(ctf1);
    ct2.appendChild(ctf2);
    ct3.appendChild(ctf3);
    ct4.appendChild(ctf4);

  }

  function facultydevAdd() {
    // Get the table element in which you want to add row
    let table = document.getElementById("facultydevtable");

    // Create a row using the inserRow() method and
    // specify the index where you want to add the row
    let row = table.insertRow(-1); // We are adding at the end

    // Create table cells
    let fd1 = row.insertCell(0);
    let fd2 = row.insertCell(1);
    let fd3 = row.insertCell(2);
    let fd4 = row.insertCell(3);

    // creating input fields
    let fdf1 = document.createElement("input");
    let fdf2 = document.createElement("input");
    let fdf3 = document.createElement("input");
    let fdf4 = document.createElement("input");

    // Add input to c1 and c2

    fd1.appendChild(fdf1);
    fd2.appendChild(fdf2);
    fd3.appendChild(fdf3);
    fd4.appendChild(fdf4);

  }

  function moocAdd() {
    // Get the table element in which you want to add row
    let table = document.getElementById("mooctable");

    // Create a row using the inserRow() method and
    // specify the index where you want to add the row
    let row = table.insertRow(-1); // We are adding at the end

    // Create table cells
    let ct1 = row.insertCell(0);
    let ct2 = row.insertCell(1);
    let ct3 = row.insertCell(2);
    let ct4 = row.insertCell(3);

    // creating input fields
    let ctf1 = document.createElement("input");
    let ctf2 = document.createElement("select");
    // let cto1 = document.createElement("option");
    // let cto2 = document.createElement("option");
    // cto1.innerText("UG");
    // cto2.innerText("PG");
    // ctf2.appendChild(cto1); 
    // ctf2.appendChild(cto2); 
    let ctf3 = document.createElement("input");
    let ctf4 = document.createElement("input");

    // Add input to c1 and c2

    ct1.appendChild(ctf1);
    ct2.appendChild(ctf2);
    ct3.appendChild(ctf3);
    ct4.appendChild(ctf4);

  }

  function mastersAdd() {
    // Get the table element in which you want to add row
    let table = document.getElementById("masterstable");

    // Create a row using the inserRow() method and
    // specify the index where you want to add the row
    let row = table.insertRow(-1); // We are adding at the end

    // Create table cells
    let ma1 = row.insertCell(0);
    let ma2 = row.insertCell(1);
    let ma3 = row.insertCell(2);
    let ma4 = row.insertCell(3);
    let ma5 = row.insertCell(4);

    // creating input fields
    let maf1 = document.createElement("input");
    let maf2 = document.createElement("input");
    let maf3 = document.createElement("input");
    let maf4 = document.createElement("input");
    let maf5 = document.createElement("input");

    // Add input to c1 and c2

    ma1.appendChild(maf1);
    ma2.appendChild(maf2);
    ma3.appendChild(maf3);
    ma4.appendChild(maf4);
    ma5.appendChild(maf5);

  }

  function srAdd() {
    // Get the table element in which you want to add row
    let table = document.getElementById("srtable");

    // Create a row using the inserRow() method and
    // specify the index where you want to add the row
    let row = table.insertRow(-1); // We are adding at the end

    // Create table cells
    let sr1 = row.insertCell(0);
    let sr2 = row.insertCell(1);
    let sr3 = row.insertCell(2);
    let sr4 = row.insertCell(3);
    let sr5 = row.insertCell(4);

    // creating input fields
    let srf1 = document.createElement("input");
    let srf2 = document.createElement("input");
    let srf3 = document.createElement("input");
    let srf4 = document.createElement("input");
    let srf5 = document.createElement("input");

    // Add input to c1 and c2

    sr1.appendChild(srf1);
    sr2.appendChild(srf2);
    sr3.appendChild(srf3);
    sr4.appendChild(srf4);
    sr5.appendChild(srf5);

  }

  function cpAdd() {
    // Get the table element in which you want to add row
    let table = document.getElementById("cptable");

    // Create a row using the inserRow() method and
    // specify the index where you want to add the row
    let row = table.insertRow(-1); // We are adding at the end

    // Create table cells
    let cp1 = row.insertCell(0);
    let cp2 = row.insertCell(1);
    let cp3 = row.insertCell(2);
    let cp4 = row.insertCell(3);
    let cp5 = row.insertCell(4);

    // creating input fields
    let cpf1 = document.createElement("input");
    let cpf2 = document.createElement("input");
    let cpf3 = document.createElement("input");
    let cpf4 = document.createElement("input");
    let cpf5 = document.createElement("input");

    // Add input to c1 and c2

    cp1.appendChild(cpf1);
    cp2.appendChild(cpf2);
    cp3.appendChild(cpf3);
    cp4.appendChild(cpf4);
    cp5.appendChild(cpf5);

  }

  function pfAdd() {
    // Get the table element in which you want to add row
    let table = document.getElementById("pftable");

    // Create a row using the inserRow() method and
    // specify the index where you want to add the row
    let row = table.insertRow(-1); // We are adding at the end

    // Create table cells
    let pf1 = row.insertCell(0);
    let pf2 = row.insertCell(1);
    let pf3 = row.insertCell(2);


    // creating input fields
    let pff1 = document.createElement("input");
    let pff2 = document.createElement("input");
    pff2.type = "date";
    let pff3 = document.createElement("input");

    // Add input to c1 and c2

    pf1.appendChild(pff1);
    pf2.appendChild(pff2);
    pf3.appendChild(pff3);


  }

  function wcsAdd() {
    // Get the table element in which you want to add row
    let table = document.getElementById("wcstable");

    // Create a row using the inserRow() method and
    // specify the index where you want to add the row
    let row = table.insertRow(-1); // We are adding at the end

    // Create table cells
    let wcs1 = row.insertCell(0);
    let wcs2 = row.insertCell(1);
    let wcs3 = row.insertCell(2);
    let wcs4 = row.insertCell(3);


    // creating input fields
    let wcsf1 = document.createElement("input");
    let wcsf2 = document.createElement("input");
    let wcsf3 = document.createElement("input");
    let wcsf4 = document.createElement("input");

    // Add input to c1 and c2

    wcs1.appendChild(wcsf1);
    wcs2.appendChild(wcsf2);
    wcs3.appendChild(wcsf3);
    wcs4.appendChild(wcsf4);


  }

  function ieAdd() {
    // Get the table element in which you want to add row
    let table = document.getElementById("ietable");

    // Create a row using the inserRow() method and
    // specify the index where you want to add the row
    let row = table.insertRow(-1); // We are adding at the end

    // Create table cells
    let ie1 = row.insertCell(0);
    let ie2 = row.insertCell(1);
    let ie3 = row.insertCell(2);


    // creating input fields
    let ief1 = document.createElement("input");
    let ief2 = document.createElement("input");
    let ief3 = document.createElement("input");


    // Add input to c1 and c2

    ie1.appendChild(ief1);
    ie2.appendChild(ief2);
    ie3.appendChild(ief3);

  }

  function mopAdd() {
    // Get the table element in which you want to add row
    let table = document.getElementById("moptable");

    // Create a row using the inserRow() method and
    // specify the index where you want to add the row
    let row = table.insertRow(-1); // We are adding at the end

    // Create table cells
    let mop1 = row.insertCell(0);
    let mop2 = row.insertCell(1);


    // creating input fields
    let mopf1 = document.createElement("input");
    let mopf2 = document.createElement("input");

    // Add input to c1 and c2

    mop1.appendChild(mopf1);
    mop2.appendChild(mopf2);

  }

  function homepage() {
    window.open('https://www.bmu.edu.in/', '_self');
  }

  async function handleSubmit() {
    console.log(formData);
    const resp = await window.fetch(link + 'lol', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Mode: "cors",
        Accept: "application/json",
      },
      body: JSON.stringify({ formData: formData }),
    })
    const data =await resp.json();
    window.location.href = data.downloadLink;
  }

  return (

    <div className="App">
      {/* <!-- Navbar --> */}

      <nav>
        <div id="header">
          <div className="header1">
            <div className="b1">
              <a className="covid" href="https://www.bmu.edu.in/covid-19/" target="_blank" rel="noreferrer">OUR RESPONSE TO COVID-19</a>
            </div>
            <div className="b2">

              <a className="covid qq" href="https://alumni.bmu.edu.in/" target="_blank" rel="noreferrer">ALUMNI</a>
              <a className="covid qq" href="https://maitri.bmu.edu.in/applicantLogins.htm?link=3d133791e3608858a1c6a8974dfe03a6&dis=91d5f8d" target="_blank" rel="noreferrer">ERP</a>
              <a className="covid qq" href="https://www.bmu.edu.in/campus-life/events/" target="_blank" rel="noreferrer">EVENTS</a>
              <a className="covid qq" href="https://www.bmu.edu.in/media-coverage/" target="_blank" rel="noreferrer">NEWS</a>
              <a className="covid qq" href="https://www.bmu.edu.in/campus-life/virtual-tour/" target="_blank" rel="noreferrer">VIRTUAL TOUR</a>
              <a className="covid qq" href="https://www.bmu.edu.in/contact-us/" target="_blank" rel="noreferrer">CONTACT</a>
            </div>
          </div>
          <div className="header2">
            <img src="https://www.bmu.edu.in/wp-content/themes/bmlmunjal/images/bml-color-logo.svg" id="logo" alt="logo" onClick={homepage} />
            <div className="resbtns">
              <a className="lolbtn" href="#" target="_self">Faculty Recruitments</a>
              <a className="lolbtn" href="#" target="_self">Staff Recruitments</a>
            </div>
          </div>
        </div>
      </nav>
      <br></br>
      <br></br>
      <br></br>

      {/* <!-- Heading --> */}

      <div className="apply">
        <h1>Application Form</h1>
        <p>Fields marked with <sup>*</sup> are mandatory. Press 'Submit' button at the end if you find all the
          information correct, to save or take a printed copy htmlFor your reference.</p>
      </div>
      {/* <!-- Form --> */}

      <div className="form">

          <div className="osbox">

            <div className="oselect">
              <label htmlFor="occupation" className="loccupation">Post Applied for <sup>*</sup></label>
              <br></br>
              <select className="form-select" name="postapplied" id="occupation"  onChange={onChange} defaultValue={formData.postapplied}>
                <option value="" hidden checked>Select</option>
                <option value="Dean">Dean</option>
                <option value="Professor">Professor</option>
                <option value="Assistant Professor">Assistant Professor</option>
              </select>
            </div>

            <div className="oselect">
              <label htmlFor="department" className="ldepartment">School / Department <sup>*</sup></label>
              <br></br>
              <select className="form-select" id="department" name="schoolapplied"  onChange={onChange}>
                <option value="" hidden checked>Select</option>
                <option value="School of Engineering">SOET</option>
                <option value="Schoolof Management">SOM</option>
                <option value="School of Law">SOL</option>
              </select>
            </div>

          </div>

          <h1 className="pd">Personal Details</h1>

          <div className="name">

            <div className="fname">
              <label htmlFor="first">First name <sup>*</sup></label>
              <br></br>
              <input  type="text" id="first" placeholder="First name" name="firstname" onChange={onChange} defaultValue={formData.firstname} />
            </div>

            <div className="mname">
              <label htmlFor="middle">Middle name</label>
              <br></br>
              <input type="text" id="middle" placeholder="Middle name" name="middlename" onChange={onChange} defaultValue={formData.middlename} />
            </div>

            <div className="lname">
              <label htmlFor="last">Last name <sup>*</sup></label>
              <br></br>
              <input  type="text" id="last" name="lastname" placeholder="Last name" onChange={onChange} defaultValue={formData.lastname} />
            </div>

          </div>


          <div className="maridob">

            <div className="marit">
              <h4>Marital Status</h4>
              <div className="marir">
                <input type="radio" id="Married" name="marital" value="married" onChange={onChange} />
                <label htmlFor="mari">Married</label>
                <input type="radio" id="female" name="marital" value="Single" onChange={onChange} />
                <label htmlFor="mari">Single</label>
              </div>
            </div>

            <div className="gen">
              <h4>Gender</h4>
              <div className="genr">
                <input type="radio" id="male" name="gender" value="male" onChange={onChange} />
                <label htmlFor="gender">Male</label>
                <input type="radio" id="female" name="gender" value="female" onChange={onChange} />
                <label htmlFor="gender">Female</label>
              </div>
            </div>

            <div className="dob">
              <h4>Date of Birth</h4>
              <input type="date" className="birth" name="dob" onChange={onChange} defaultValue={formData.dob} />
            </div>

          </div>


          <div className="corres">
            <h4>Address for Correspondence</h4>
            <div className="fcorres">
              <div className="hno">
                <label>House No <sup>*</sup></label>
                <br></br>
                <input type="text" placeholder="House No" name="correshno"  onChange={onChange} defaultValue={formData.correshno} />
              </div>
              <div className="lane">
                <label>Lane</label>
                <br></br>
                <input type="text" placeholder="Lane" name="correslane" onChange={onChange} defaultValue={formData.correslane} />
              </div>
              <div className="street">
                <label>Street <sup>*</sup></label>
                <br></br>
                <input type="text" placeholder="Street" name="corresstreet"  defaultValue={formData.corresstreet} onChange={onChange} />
              </div>
              <div className="city">
                <label>City <sup>*</sup></label>
                <br></br>
                <input type="text" placeholder="City" name="correscity"  onChange={onChange} defaultValue={formData.correscity} />
              </div>
            </div>

            <div className="scorres">
              <div className="state">
                <label>State <sup>*</sup></label>
                <input type="text" name="corresstate" placeholder="State" onChange={onChange} defaultValue={formData.corresstate}></input>
              </div>
              <div className="country">
                <label>Country<sup>*</sup></label>
                <input type="text" name="correscountry" placeholder="Country" onChange={onChange} defaultValue={formData.correscountry}></input>
              </div>
              <div className="pincode">
                <label>Pin code<sup>*</sup></label>
                <input type="text" placeholder="Pin code" name="correspin"  onChange={onChange} defaultValue={formData.correspin} />
              </div>

              <div className="phone">
                <label>Phone</label>
                <input type="text" placeholder="Phone" name="corresphone"  onChange={onChange} defaultValue={formData.corresphone} />
              </div>
            </div>
            <div className="tcorres">
              <div className="mobile">
                <label>Mobile No.<sup>*</sup></label>
                <br></br>
                <input type="text" placeholder="Mobile No." name="corresmobile"  onChange={onChange} defaultValue={formData.corresmobile} />
              </div>
              <div className="pemail">
                <label>Primary Email<sup>*</sup> </label>
                <br></br>
                <input type="text" placeholder="Primary Email" name="correspersmail"  onChange={onChange} defaultValue={formData.correspersmail} />
              </div>
              <div className="aemail">
                <label>Alternate Email</label>
                <br></br>
                <input type="text" placeholder="Alternate Email" name="corresaltmail" onChange={onChange} defaultValue={formData.corresaltmail} />
              </div>
            </div>

          </div>

          <div className="corres">
            <h4>Permanent Address</h4>
            <div className="fcorres">
              <div className="hno">
                <label>House No <sup>*</sup></label>
                <br></br>
                <input type="text" placeholder="House No" name="permhno"  onChange={onChange} defaultValue={formData.permhno} />
              </div>
              <div className="lane">
                <label>Lane</label>
                <br></br>
                <input type="text" placeholder="Lane" name="permlane" onChange={onChange} defaultValue={formData.permlane} />
              </div>
              <div className="street">
                <label>Street <sup>*</sup></label>
                <br></br>
                <input type="text" placeholder="Street" name="permstreet"  onChange={onChange} defaultValue={formData.permstreet} />
              </div>
              <div className="city">
                <label>City <sup>*</sup></label>
                <br></br>
                <input type="text" placeholder="City" name="permcity"  onChange={onChange} defaultValue={formData.permcity} />
              </div>
            </div>

            <div className="scorres">
              <div className="state">
                <label>State <sup>*</sup></label>
                <input type="text" name="permstate" placeholder="State" onChange={onChange} defaultValue={formData.permstate}></input>
              </div>
              <div className="country">
                <label>Country<sup>*</sup></label>
                <input type="text" name="permcountry" placeholder="Country" onChange={onChange} defaultValue={formData.permcountry}></input>
              </div>
              <div className="pincode">
                <label>Pin code<sup>*</sup></label>
                <input type="text" placeholder="Pin code" name="permpin"  onChange={onChange} defaultValue={formData.permpin} />
              </div>

              <div className="phone">
                <label>Phone</label>
                <input type="text" placeholder="Phone" name="permphone"  onChange={onChange} defaultValue={formData.permphone} />
              </div>
            </div>
            <div className="tcorres">
              <div className="mobile">
                <label>Mobile No.<sup>*</sup></label>
                <br></br>
                <input type="text" placeholder="Mobile No." name="permmobile"  onChange={onChange} defaultValue={formData.permmobile} />
              </div>
              <div className="pemail">
                <label>Primary Email<sup>*</sup> </label>
                <br></br>
                <input type="email" placeholder="Primary Email" name="permpersmail"  onChange={onChange} defaultValue={formData.permpersmail} />
              </div>
              <div className="aemail">
                <label>Alternate Email</label>
                <br></br>
                <input type="email" placeholder="Alternate Email" name="permaltmail" onChange={onChange} defaultValue={formData.permaltmail} />
              </div>
            </div>

          </div>

          <div className="pe">
            <h4>Present Employment</h4>
            <div className="dorg">
              <div className="design">
                <label htmlFor="desig">Designation</label>
                <br></br>
                <input type="text" name="presdesig" id="desig" className="designation" placeholder="Designation" onChange={onChange} defaultValue={formData.presdesig} />
              </div>
              <div className="orga">
                <label htmlFor="org">Organization</label>
                <br></br>
                <input type="text" name="presorga" id="org" className="organization" placeholder="Organization" onChange={onChange} defaultValue={formData.presorga} />
              </div>
              <div className="doj">
                <label htmlFor="doj" className="dojl">Date of Joining</label>
                <br></br>
                <input type="date" id="doj" className="dateofjoining" name="presdoj" onChange={onChange} defaultValue={formData.presdoj} />
              </div>
            </div>
          </div>

          <div className="payinfo">

            <div className="sopb">
              <label htmlFor="scale">Scale of pay in &#8377; </label>
              <br></br>
              <input type="number" min="1" id="scale" name="pressop" className="scalei" placeholder="Scale of pay" onChange={onChange} defaultValue={formData.pressop} />
            </div>

            <div className="pb">
              <label htmlFor="pay">Pay in &#8377;</label>
              <br></br>
              <input type="number" min="1" name="prespay" id="pay" className="payi" placeholder="Pay" onChange={onChange} defaultValue={formData.prespay} />
            </div>

            <div className="terb">
              <label htmlFor="te">Total emoluments (per month) in &#8377;</label>
              <br></br>
              <input type="number" min="1" name="prestotalem" id="te" className="tei" placeholder="Total emoluments (per month)" onChange={onChange} defaultValue={formData.prestotalem} />
            </div>
          </div>

          <div className="areas">

            <div className="aosb">
              <label htmlFor="areaofspec">Area of specialization (use , for sepration)</label>
              <br></br>
              <textarea name="areaofspec" id="areaofspec" cols="140" rows="10" placeholder="Area of specialization" onChange={onChange} defaultValue={formData.areaofspec}></textarea>
            </div>

            <div className="areaofres">
              <label htmlFor="aor">Current areas of research (use , for sepration)</label>
              <br></br>
              <textarea name="areasofresearch" id="aor" cols="40" rows="10" placeholder="Current areas of research" onChange={onChange} defaultValue={formData.areasofresearch}></textarea>
            </div>


          </div>


          <div className="arb">
            <h4>Academic record starting with graduation</h4>
            <table id="academicrecordtable">
              <tr>
                <th>Degree</th>
                <th>College / University / Institute</th>
                <th>Year of Joining</th>
                <th>Year of Leaving</th>
                <th>Percentage/ CGPA</th>
              </tr>
              <tr>
                <td><input type="text" name="degree1" onChange={onChange} defaultValue={formData.degree1} /></td>
                <td><input type="text" name="college1" onChange={onChange} defaultValue={formData.college1} /></td>
                <td><input type="text" name="yearoj1" onChange={onChange} defaultValue={formData.yearoj1} /></td>
                <td><input type="text" name="yol1" onChange={onChange} defaultValue={formData.yol1} /></td>
                <td className="arblast"><input type="number" min="1" name="percent1" onChange={onChange} defaultValue={formData.percent1} /></td>
              </tr>
              <tr>
                <td><input type="text" name="degree2" onChange={onChange} defaultValue={formData.degree2} /></td>
                <td><input type="text" name="college2" onChange={onChange} defaultValue={formData.college2} /></td>
                <td><input type="text" name="yearoj2" onChange={onChange} defaultValue={formData.yearoj2} /></td>
                <td><input type="text" name="yol2" onChange={onChange} defaultValue={formData.yol2} /></td>
                <td className="arblast"><input type="number" min="1" name="percent2" onChange={onChange} defaultValue={formData.percent2} /></td>
              </tr>
              <tr>
                <td><input type="text" name="degree3" onChange={onChange} defaultValue={formData.degree3} /></td>
                <td><input type="text" name="college3" onChange={onChange} defaultValue={formData.college3} /></td>
                <td><input type="text" name="yearoj3" onChange={onChange} defaultValue={formData.yearoj3} /></td>
                <td><input type="text" name="yol3" onChange={onChange} defaultValue={formData.yol3} /></td>
                <td className="arblast"><input type="number" min="1" name="percent3" onChange={onChange} defaultValue={formData.percent3} /></td>
              </tr>
              <tr>
                <td><input type="text" name="degree4" onChange={onChange} defaultValue={formData.degree4} /></td>
                <td><input type="text" name="college4" onChange={onChange} defaultValue={formData.college4} /></td>
                <td><input type="text" name="yearoj4" onChange={onChange} defaultValue={formData.yearoj4} /></td>
                <td><input type="text" name="yol4" onChange={onChange} defaultValue={formData.yol4} /></td>
                <td className="arblast"><input type="number" min="1" name="percent4" onChange={onChange} defaultValue={formData.percent4} /></td>
              </tr>
              <tr>
              </tr>
            </table>

            {/* <!-- Make it add a row to the table above --> */}
            <button className="ar1" onClick={(e) => { e.preventDefault(); academicrecAdd() }} >Add row</button>

          </div>


          <div className="peb">
            <h4>Past Employment</h4>
            <table id="pastemptable">
              <tr>
                <th>Employer</th>
                <th>Position</th>
                <th>Date of Joining</th>
                <th>Date of Leaving</th>
                <th>Gross pay</th>
                <th>Scale of pay</th>
              </tr>
              <tr>
                <td><input type="text" name="pastemp1" onChange={onChange} defaultValue={formData.pastemp1} /></td>
                <td><input type="text" name="pastpos1" onChange={onChange} defaultValue={formData.pastpos1} /></td>
                <td><input type="date" name="pastdoj1" onChange={onChange} defaultValue={formData.pastdoj1} /></td>
                <td><input type="date" name="pastdol1" onChange={onChange} defaultValue={formData.pastdol1} /></td>
                <td><input type="number" min="1" name="pastgrossp1" onChange={onChange} defaultValue={formData.pastgrossp1} /></td>
                <td><input type="number" min="1" name="pastsop1" onChange={onChange} defaultValue={formData.pastsop1} /></td>              </tr>
              <tr>
                <td><input type="text" name="pastemp2" onChange={onChange} defaultValue={formData.pastemp2} /></td>
                <td><input type="text" name="pastpos2" onChange={onChange} defaultValue={formData.pastpos2} /></td>
                <td><input type="date" name="pastdoj2" onChange={onChange} defaultValue={formData.pastdoj2} /></td>
                <td><input type="date" name="pastdol2" onChange={onChange} defaultValue={formData.pastdol2} /></td>
                <td><input type="number" min="1" name="pastgrossp2" onChange={onChange} defaultValue={formData.pastgrossp2} /></td>
                <td><input type="number" min="1" name="pastsop2" onChange={onChange} defaultValue={formData.pastsop2} /></td>
              </tr>
              <tr>
                <td><input type="text" name="pastemp3" onChange={onChange} defaultValue={formData.pastemp3} /></td>
                <td><input type="text" name="pastpos3" onChange={onChange} defaultValue={formData.pastpos3} /></td>
                <td><input type="date" name="pastdoj3" onChange={onChange} defaultValue={formData.pastdoj3} /></td>
                <td><input type="date" name="pastdol3" onChange={onChange} defaultValue={formData.pastdol3} /></td>
                <td><input type="number" min="1" name="pastgrossp3" onChange={onChange} defaultValue={formData.pastgrossp3} /></td>
                <td><input type="number" min="1" name="pastsop3" onChange={onChange} defaultValue={formData.pastsop3} /></td>
              </tr>
              <tr>
                <td><input type="text" name="pastemp4" onChange={onChange} defaultValue={formData.pastemp4} /></td>
                <td><input type="text" name="pastpos4" onChange={onChange} defaultValue={formData.pastpos4} /></td>
                <td><input type="date" name="pastdoj4" onChange={onChange} defaultValue={formData.pastdoj4} /></td>
                <td><input type="date" name="pastdol4" onChange={onChange} defaultValue={formData.pastdol4} /></td>
                <td><input type="number" min="1" name="pastgrossp4" onChange={onChange} defaultValue={formData.pastgrossp4} /></td>
                <td><input type="number" min="1" name="pastsop4" onChange={onChange} defaultValue={formData.pastsop4} /></td>
              </tr>
              <tr>
              </tr>
            </table>

            {/* <!-- Make it add a row to the table above --> */}
            <button className="ar2" onClick={(e) => { e.preventDefault(); pastempAdd() }}>Add row</button>

          </div>

          <div className="publications">
            <h4>Publications *(only mention numbers)</h4>
            <div className="fpubli">
              <div className="hindex">
                <label>h-index (by scopus.com)</label>
                <br></br>
                <input type="number" min= '0' placeholder="h-index" name="hindex"  onChange={onChange} defaultValue={formData.hindex} />
              </div>
              <div className="totalcit">
                <label>Total Citations (by scopus.com)	 </label>
                <br></br>
                <input type="number" min= '0' placeholder="Total Citations" name="totalcitations" onChange={onChange} defaultValue={formData.totalcitations} />
              </div>
              <div className="totalpubliinter">
                <label>Total number of Publications in International Journals</label>
                <br></br>
                <input type="number" min= '0' placeholder="Total number of Publications in International Journals" name="totalpubliinter"  defaultValue={formData.totalpubliinter} onChange={onChange} />
              </div>
            </div>

            <div className="spubli">
              <div className="totalpublinati">
                <label>Total number of Publications in National Journals</label>
                <input type="number" min= '0' name="totalpublinnati" placeholder="Total number of Publications in National Journals" onChange={onChange} defaultValue={formData.totalpublinnati}></input>
              </div>
            </div>

            <h2>Out of total publications how many are in-</h2>

            <div className="tpubli">
              <div className="scopjourn">
                <label>Scopus indexed Journals<sup>*</sup></label>
                <br></br>
                <input type="number" min= '0' placeholder="Scopus indexed Journals" name="scopjourn"  onChange={onChange} defaultValue={formData.scopjourn} />
              </div>
              <div className="escijourn">
                <label>ESCI indexed Journals<sup>*</sup> </label>
                <br></br>
                <input type="number" min= '0' placeholder="ESCI indexed Journals" name="escijourn"  onChange={onChange} defaultValue={formData.escijourn} />
              </div>
              <div className="scijourn">
                <label>SCI indexed Journals</label>
                <br></br>
                <input type="number" min= '0' placeholder="SCI indexed Journals" name="scijourn" onChange={onChange} defaultValue={formData.scijourn} />
              </div>
            </div>
            <div className="fourpubli">
              <div className="abdcjourn">
                <label>ABDC indexed Journals<sup>*</sup></label>
                <br></br>
                <input type="number" min= '0' placeholder="ABDC indexed Journals" name="abdcjourn"  onChange={onChange} defaultValue={formData.abdcjourn} />
              </div>
              <div className="sciejourn">
                <label>SCIE indexed Journals<sup>*</sup> </label>
                <br></br>
                <input type="number" min= '0' placeholder="SCIE indexed Journals" name="sciejourn"  onChange={onChange} defaultValue={formData.sciejourn} />
              </div>
              <div className="totalpapinter">
                <label>No. of Papers Presented in International Conferences</label>
                <br></br>
                <input type="number" min= '0' placeholder="No. of Papers Presented in International Conferences" name="totalpapinter" onChange={onChange} defaultValue={formData.totalpapinter} />
              </div>
            </div>
            <div className="fivepubli">
              <div className="totalpapnati">
                <label>No. of Papers Presented in National Conferences</label>
                <br></br>
                <input type="number" min= '0' placeholder="No. of Papers Presented in National Conferences" name="totalpapnati"  onChange={onChange} defaultValue={formData.totalpapnati} />
              </div>
              <div className="articlespublish">
                <label>No. of articles/ book chapters published </label>
                <br></br>
                <input type="number" min= '0' placeholder="No. of articles/ book chapters published" name="articlespublish"  onChange={onChange} defaultValue={formData.articlespublish} />
              </div>

            </div>
            <div className="sixpubli">
              <div className="booksedit">
                <label>Number of Books Edited</label>
                <br></br>
                <input type="number" min= '0' placeholder="Number of Books Edited" name="booksedit" onChange={onChange} defaultValue={formData.booksedit} />
              </div>
              <div className="patentscr">
                <label>No. of Patents/Copyrights (Filed/ Awarded)</label>
                <br></br>
                <input type="number" min= '0' placeholder="No. of Patents/Copyrights (Filed/ Awarded)" name="patentscr"  onChange={onChange} defaultValue={formData.patentscr} />
              </div>
              <div className="sponsproj">
                <label>Sponsored Research Project</label>
                <br></br>
                <input type="number" min= '0' placeholder="Sponsored Research Project" name="sponsproj" onChange={onChange} defaultValue={formData.sponsproj} />
              </div>
            </div>

            <div className="sevenpubli">


              <div className="phdguided">
                <label>No. of  Masters / PhD Guided</label>
                <br></br>
                <input type="number" min= '0' placeholder="No. of  Masters / PhD Guided" name="phdguided"  defaultValue={formData.phdguided} onChange={onChange} />
              </div>
              <div className="coursedeveloped">
                <label>Courses Developed </label>
                <input type="number" min= '0' name="coursesdeveloped" placeholder="Courses Developed " onChange={onChange} defaultValue={formData.coursesdeveloped}></input>
              </div>
            </div>
          </div>



          <div className="refaddress">

            <h4>Names and addresses of three References (at least one of them should be familiar with your recent work)</h4>
            <ol>
              <li>
                <div className="refname">

                  <div className="reffname">
                    <label htmlFor="rfirst">First name <sup>*</sup></label>
                    <br></br>
                    <input  type="text" id="rfirst" placeholder="First name" name="reffname1" onChange={onChange} defaultValue={formData.reffname1} />
                  </div>

                  <div className="refmname">
                    <label htmlFor="rmiddle">Middle name</label>
                    <br></br>
                    <input type="text" id="rmiddle" placeholder="Middle name" name="refmname1" onChange={onChange} defaultValue={formData.refmname1} />
                  </div>

                  <div className="reflname">
                    <label htmlFor="rlast">Last name <sup>*</sup></label>
                    <br></br>
                    <input  type="text" id="rlast" placeholder="Last name" name="reflname1" onChange={onChange} defaultValue={formData.reflname1} />
                  </div>

                </div>

                <div className="refdetail">

                  <div className="rob">
                    <label htmlFor="refocc">Occupation or Position</label>
                    <br></br>
                    <input type="text" id="refocc" placeholder="Occupation / Position" name="refoccu1" onChange={onChange} defaultValue={formData.refoccu1} />
                  </div>

                  <div className="rab">
                    <label htmlFor="refadd">Address</label>
                    <br></br>
                    <input type="text" id="refadd" placeholder="Address" name="refaddre1" onChange={onChange} defaultValue={formData.refaddre1} />
                  </div>

                </div>

                <div className="refdigi">


                  <div className="refmo">
                    <label htmlFor="refmob">Mobile</label>
                    <br></br>
                    <input type="number" min="1" id="refmob" placeholder="Mobile" name="refmob1" onChange={onChange} defaultValue={formData.refmob1} />
                  </div>

                  <div className="refma">
                    <label htmlFor="refmai">Email Id</label>
                    <br></br>
                    <input type="email" id="refmai" placeholder="Email Id" name="refemail1" onChange={onChange} defaultValue={formData.refemail1} />
                  </div>

                  <div className="refla">
                    <label htmlFor="reflan">Landline</label>
                    <br></br>
                    <input type="tel" id="reflan" placeholder="Landline" name="reflandline1" onChange={onChange} defaultValue={formData.reflandline1} />
                  </div>


                </div>
              </li>

              <li>
                <div className="refname">

                  <div className="reffname">
                    <label htmlFor="rfirst">First name <sup>*</sup></label>
                    <br></br>
                    <input  type="text" id="rfirst" placeholder="First name" name="reffname2" onChange={onChange} defaultValue={formData.reffname2} />
                  </div>

                  <div className="refmname">
                    <label htmlFor="rmiddle">Middle name</label>
                    <br></br>
                    <input type="text" id="rmiddle" placeholder="Middle name" name="refmname2" onChange={onChange} defaultValue={formData.refmname2} />
                  </div>

                  <div className="reflname">
                    <label htmlFor="rlast">Last name <sup>*</sup></label>
                    <br></br>
                    <input  type="text" id="rlast" placeholder="Last name" name="reflname2" onChange={onChange} defaultValue={formData.reflname2} />
                  </div>

                </div>

                <div className="refdetail">

                  <div className="rob">
                    <label htmlFor="refocc">Occupation or Position</label>
                    <br></br>
                    <input type="text" id="refocc" placeholder="Occupation / Position" name="refoccu2" onChange={onChange} defaultValue={formData.refoccu2} />
                  </div>

                  <div className="rab">
                    <label htmlFor="refadd">Address</label>
                    <br></br>
                    <input type="text" id="refadd" placeholder="Address" name="refaddre2" onChange={onChange} defaultValue={formData.refaddre2} />
                  </div>

                </div>

                <div className="refdigi">


                  <div className="refmo">
                    <label htmlFor="refmob">Mobile</label>
                    <br></br>
                    <input type="number" min="1" id="refmob" placeholder="Mobile" name="refmob2" onChange={onChange} defaultValue={formData.refmob2} />
                  </div>

                  <div className="refma">
                    <label htmlFor="refmai">Email Id</label>
                    <br></br>
                    <input type="email" id="refmai" placeholder="Email Id" name="refemail2" onChange={onChange} defaultValue={formData.refemail2} />
                  </div>

                  <div className="refla">
                    <label htmlFor="reflan">Landline</label>
                    <br></br>
                    <input type="tel" id="reflan" placeholder="Landline" name="reflandline2" onChange={onChange} defaultValue={formData.reflandline2} />
                  </div>


                </div>
              </li>

              <li>
                <div className="refname">

                  <div className="reffname">
                    <label htmlFor="rfirst">First name <sup>*</sup></label>
                    <br></br>
                    <input  type="text" id="rfirst" placeholder="First name" name="reffname3" onChange={onChange} defaultValue={formData.reffname3} />
                  </div>

                  <div className="refmname">
                    <label htmlFor="rmiddle">Middle name</label>
                    <br></br>
                    <input type="text" id="rmiddle" placeholder="Middle name" name="refmname3" onChange={onChange} defaultValue={formData.refmname3} />
                  </div>

                  <div className="reflname">
                    <label htmlFor="rlast">Last name <sup>*</sup></label>
                    <br></br>
                    <input  type="text" id="rlast" placeholder="Last name" name="reflname3" onChange={onChange} defaultValue={formData.reflname3} />
                  </div>

                </div>

                <div className="refdetail">

                  <div className="rob">
                    <label htmlFor="refocc">Occupation or Position</label>
                    <br></br>
                    <input type="text" id="refocc" placeholder="Occupation / Position" name="r13o3" onChange={onChange} defaultValue={formData.refoccu3} />
                  </div>

                  <div className="rab">
                    <label htmlFor="refadd">Address</label>
                    <br></br>
                    <input type="text" id="refadd" placeholder="Address" name="refaddre3" onChange={onChange} defaultValue={formData.refaddre3} />
                  </div>

                </div>

                <div className="refdigi">


                  <div className="refmo">
                    <label htmlFor="refmob">Mobile</label>
                    <br></br>
                    <input type="number" min="1" id="refmob" placeholder="Mobile" name="refmob3" onChange={onChange} defaultValue={formData.refmob3} />
                  </div>

                  <div className="refma">
                    <label htmlFor="refmai">Email Id</label>
                    <br></br>
                    <input type="email" id="refmai" placeholder="Email Id" name="refemail3" onChange={onChange} defaultValue={formData.refemail3} />
                  </div>

                  <div className="refla">
                    <label htmlFor="reflan">Landline</label>
                    <br></br>
                    <input type="tel" id="reflan" placeholder="Landline" name="reflandline3" onChange={onChange} defaultValue={formData.reflandline3} />
                  </div>


                </div>

              </li>

            </ol>
          </div>

          <div className='sop'>
            <h4>Statement of Purpose: </h4>

            <div>
              <label htmlFor="whyjoin">Please indicate as to why you wish to join BMU:</label>
              <br></br>
              <textarea name="whyjoin" id="whyjoin" cols="140" rows="10" placeholder="Please indicate as to why you wish to join BMU:" onChange={onChange} defaultValue={formData.whyjoin}></textarea>
            </div>

            <div>
              <label htmlFor="jobreq">How do you meet the job requirements?</label>
              <br></br>
              <textarea name="jobreq" id="jobreq" cols="140" rows="10" placeholder="How do you meet the job requirements?" onChange={onChange} defaultValue={formData.jobreq}></textarea>
            </div>

            <div>
              <label htmlFor="jobreq">A description on which research/teaching/development programmes you would like to undertake and the courses you would like to teach at UG and PG levels.</label>
              <br></br>
              <textarea name="progdesc" id="progdesc" cols="500" rows="10" placeholder="A description on which research/teaching/development programmes you would like to undertake and the courses you would like to teach at UG and PG levels." onChange={onChange} defaultValue={formData.progdesc}></textarea>
            </div>

          </div>

          <p className="declare"> I hereby declare that I have carefully read and understood the instructions and particulars supplied to me,
            and that all entries in this form as well as the attached sheets are true to the best of my knowledge and
            belief.
          </p>
          
          
          <button className="submited" onClick={handleSubmit}>Submit</button>

          <div></div>

      </div>
    </div>
  );
}

export default App;