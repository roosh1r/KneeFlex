# KneeFlex
###FYDP Project for Ruchir, Sayantan, Prasath, and John


- Clone the repository on your local machine

- If you do not have EvoThings workbench, please download it [here](http://evothings.com/download/)

- Copy 'knee-flex' into the 'examples' folder of the EvoThings Workbench directory

- Drag and drop `index.html` from the folder onto the main window of EvoThings Workbench

- Download Evothings Application on your smartphone

- Run EvoThings Workbench

- Connect your phone as a client

- Run Knee Flex

- Knee Flex data collection period can be altered by changing the value in Line 496 of `index.html` (Time in ms)

- Once the "Sent Data" message appears on the screen, run the following command in your Terminal.

- **Ensure that MongoDB is installed on your machine**. It is required to use the command below. [Link](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)

- `mongoexport -h ds053130.mongolab.com:53130 -d sensordata -c test -u admin -p password -o test.json`

- Run `script.py` and specify the filename of the downloaded `json` file.

- Open the CSV output of the python script and copy and paste it into the Cell A2 of the Demo.xlsm

- Ensure that Macros and Data connections are enabled when opening the Excel document

- Click Get Summary. Once one the "Final Results Sheet" you may have to click the graph to get the updated results.

