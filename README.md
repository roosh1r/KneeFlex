# KneeFlex
###FYDP Project for Ruchir, Sayantan, Prasath, and John


1. Clone the repository on your local machine

2. Copy 'knee-flex' into the examples directory of the EvoThings Workbench

2a. Drag and drop `index.html` from the folder onto the main window of EvoThings Workbench

3. Connect your phone as a client

4. Run Knee Flex

4a. Knee Flex Run time can be altered by changing the value in Line 496 of `index.html` (Time in ms)

5. Once the "Sent Data" message appears on the screen, run the following command

`mongoexport -h ds053130.mongolab.com:53130 -d sensordata -c test -u admin -p password -o test.json`

6. Run `script.py` and specify the filename of the downloaded `json` file.

7. Open the CSV output of the python script and copy and paste it into the Cell A2 of the Demo.xlsm

7a. Ensure that Macros and Data connections are enabled when opening the Excel document

8. Click Get Summary. Once one the "Final Results Sheet" you may have to click the graph to get the updated results.

