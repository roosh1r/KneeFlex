var csvfilename = "tisensordata";

var filewriter = false;
var bFilewriter = false;

var logfilename = "";

var fileOutLog = 1;

var savedlines = 0;

function startDataStorage()
{
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFSTest, failCreateLogFileTest);
	var retobj = { filename: logfilename, writer: testfilewriter };
	return false;
}

function gotFSTest(fileSystem)
{
	var stamp = new Date();
	logfilename = csvfilename + "-" + stamp.getDate() + "-" + (stamp.getMonth()+1) + "-" + stamp.getFullYear() + "-" + stamp.getHours() + "-" + stamp.getMinutes() + "-" + stamp.getSeconds() + ".csv";
	fileSystem.root.getFile(logfilename, {create: true, exclusive: false}, gotFileEntryTest, failGotFSTest);
}

function failCreateLogFileTest(error)
{
	alert("failGotFileEntry: " + error.code);
}

function stopDataStorage()
{
	if (mysavestring != "")
		filewriter.write(mysavestring);
	bFilewriter = false;
	filewriter = "";
	if (fileOutLog == 1)
		alert("Stop Logging to file:\n" + logfilename);
	savedlines = 0;
	return false;
}

function gotFileEntryTest(fileEntry)
{
	fileEntry.createWriter(gotFileWriterTest, failGotFileEntryTest);
}

function failGotFSTest(error)
{
	alert("failGotFS: " + error.code  + "\n" + logfilename);
}

function gotFileWriterTest(writer)
{
	if (fileOutLog == 1)
		alert("Start Logging to file:\n" + logfilename);
	filewriter = writer;
	filewriter.onwriteend = function(evt) 
	{
		// console.log("contents of file now 'some sample'");
		// filewriter.write(savedlines + ";" + mysavestring + "\n");
	}
	
	filewriter.onerror = function(evt) 
	{
		alert("filewriter.onerror:" + evt);
	}
	bFilewriter = true;
	savedlines = 0;
	filewriter.write("Time;data1;data2;data3;data4;data5;data6;data7\n");
}

function failGotFileEntryTest(error)
{
	alert("failGotFileEntry: " + error.code + "\n" + logfilename);
}

var mysavestring = "";

function saveCSV(string)
{
	if (bFilewriter == true)
	{
		savedlines++;
		mysavestring = mysavestring + savedlines + ";" + string + "\n";
		if ((savedlines % 200) == 0)
		{
			filewriter.write(mysavestring);
			mysavestring = "";
		}
	}
}