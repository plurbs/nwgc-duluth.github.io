//©Xara Ltd
if(typeof(loc)=="undefined"||loc==""){var loc="";if(document.body&&document.body.innerHTML){var tt=document.body.innerHTML;var ml=tt.match(/["']([^'"]*)nwgc.js["']/i);if(ml && ml.length > 1) loc=ml[1];}}

var bd=0
document.write("<style type=\"text/css\">");
document.write("\n<!--\n");
document.write(".nwgc_menu {z-index:999;border-color:#000000;border-style:solid;border-width:"+bd+"px 0px "+bd+"px 0px;background-color:#ecd394;position:absolute;left:0px;top:0px;visibility:hidden;}");
document.write(".nwgc_plain, a.nwgc_plain:link, a.nwgc_plain:visited{text-align:left;background-color:#ecd394;color:#000000;text-decoration:none;border-color:#000000;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:10pt;font-family:Times New Roman, Times, serif;font-weight:bold;}");
document.write("a.nwgc_plain:hover, a.nwgc_plain:active{background-color:#0c2bcb;color:#fcfcfc;text-decoration:none;border-color:#000000;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:10pt;font-family:Times New Roman, Times, serif;font-weight:bold;}");
document.write("\n-->\n");
document.write("</style>");

var fc=0xfcfcfc;
var bc=0x0c2bcb;
if(typeof(frames)=="undefined"){var frames=6;if(frames>0)animate();}

startMainMenu("",0,0,1,0,0)
mainMenuItem("nwgc_b1",".gif",20,135,"http://www.nwgc-duluth.com/index.html","","NWGC Home Page",2,2,"nwgc_plain");
mainMenuItem("nwgc_b2",".gif",20,135,"http://www.nwgc-duluth.com/Officers.html","","NWGC Officers",2,2,"nwgc_plain");
mainMenuItem("nwgc_b3",".gif",20,135,"http://www.nwgc-duluth.com/application.html","","Online Membership Application",1,2,"nwgc_plain");
mainMenuItem("nwgc_b4",".gif",20,135,"http://www.nwgc-duluth.com/events.html","","Upcoming Events / Calendar",2,2,"nwgc_plain");
mainMenuItem("nwgc_b5",".gif",20,135,"http://www.nwgc-duluth.com/directions.html","","Map / Directions",2,2,"nwgc_plain");
mainMenuItem("nwgc_b6",".gif",20,135,"http://www.nwgc-duluth.com/cabin.html","","Cabin Facilities",2,2,"nwgc_plain");
mainMenuItem("nwgc_b7",".gif",20,135,"http://www.nwgc-duluth.com/indoorrange.html","","Indoor Range Images",2,2,"nwgc_plain");
mainMenuItem("nwgc_b8",".gif",20,135,"http://www.nwgc-duluth.com/pistol.html","","Pistol Range Images",2,2,"nwgc_plain");
mainMenuItem("nwgc_b9",".gif",20,135,"http://www.nwgc-duluth.com/plinker.html","","Plinkers Range Images",2,2,"nwgc_plain");
mainMenuItem("nwgc_b10",".gif",20,135,"http://www.nwgc-duluth.com/rifle.html","","High Power Range Images",2,2,"nwgc_plain");
mainMenuItem("nwgc_b11",".gif",20,135,"http://www.nwgc-duluth.com/shotgunrange.html","","Shotgun Range Images",2,2,"nwgc_plain");
mainMenuItem("nwgc_b12",".gif",20,135,"http://www.nwgc-duluth.com/uspsa.html","","USPSA Information",1,2,"nwgc_plain");
mainMenuItem("nwgc_b13",".gif",20,135,"http://www.nwgc-duluth.com/highpower.html","","High Power Information",1,2,"nwgc_plain");
mainMenuItem("nwgc_b14",".gif",20,135,"http://www.nwgc-duluth.com/shotgungroup.html","","Shotgun Information",1,2,"nwgc_plain");
mainMenuItem("nwgc_b15",".gif",20,135,"http://www.nwgc-duluth.com/idpa.html","","IDPA Information",1,2,"nwgc_plain");
mainMenuItem("nwgc_b16",".gif",20,135,loc+"../Bullseye.html","","Bull's Eye",2,2,"nwgc_plain");
mainMenuItem("nwgc_b17",".gif",20,135,"http://www.nwgc-duluth.com/youthclub.html","","Youth Club Information",2,2,"nwgc_plain");
mainMenuItem("nwgc_b18",".gif",20,135,"http://www.nwgc-duluth.com/youthday.html","","Youth Day Images",2,2,"nwgc_plain");
mainMenuItem("nwgc_b19",".gif",20,135,"http://www.nwgc-duluth.com/links.html","","Links",2,2,"nwgc_plain");
endMainMenu("",0,0);

startSubmenu("nwgc_b15","nwgc_menu",83);
submenuItem("IDPA Scores","http://www.nwgc-duluth.com/idpascores.html","","nwgc_plain");
endSubmenu("nwgc_b15");

startSubmenu("nwgc_b14","nwgc_menu",99);
submenuItem("Shotgun Scores","http://www.nwgc-duluth.com/shotgunscores.html","","nwgc_plain");
endSubmenu("nwgc_b14");

startSubmenu("nwgc_b13","nwgc_menu",117);
submenuItem("High Power Scores","http://www.nwgc-duluth.com/highpowerscores.html","","nwgc_plain");
endSubmenu("nwgc_b13");

startSubmenu("nwgc_b12","nwgc_menu",94);
submenuItem("USPSA Scores","http://www.nwgc-duluth.com/uspsascores.html","","nwgc_plain");
endSubmenu("nwgc_b12");

startSubmenu("nwgc_b3","nwgc_menu",128);
submenuItem("Printable Application","http://www.nwgc-duluth.com/NewMemberApplication.pdf","","nwgc_plain");
endSubmenu("nwgc_b3");

loc="";
